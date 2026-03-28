"""Cross-run meta-learning store. Reads/writes lessons.md."""

import re
from datetime import datetime, timezone
from pathlib import Path

LESSONS_FILE = Path(__file__).parent / "lessons.md"
MAX_ENTRIES = 50
DECAY_FRACTION = 0.25  # remove oldest 25% when over MAX_ENTRIES


def load_relevant(task_type: str, topic: str, max_lessons: int = 10) -> str:
    """Return the most relevant recent lessons as context for the generator."""
    if not LESSONS_FILE.exists():
        return ""

    entries = _parse_entries(LESSONS_FILE.read_text())

    # Score by relevance: exact type match > topic word overlap
    topic_words = set(topic.lower().split())
    scored = []
    for entry in entries:
        score = 0
        if entry["type"] == task_type:
            score += 2
        entry_words = set(entry["topic"].lower().split())
        score += len(topic_words & entry_words)
        scored.append((score, entry))

    scored.sort(key=lambda x: x[0], reverse=True)
    top = scored[:max_lessons]

    if not top:
        return ""

    lines = ["Lessons from prior runs:"]
    for _, entry in top:
        for lesson in entry["lessons"]:
            lines.append(f"- {lesson}")
    return "\n".join(lines)


def record(
    session_id: str,
    task_type: str,
    topic: str,
    lessons: list[dict],
) -> None:
    """Append lessons from a session. Each lesson: {type: 'keep'|'avoid', text: str}."""
    if not lessons:
        return

    date = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    lines = [f"\n### {date} | {task_type} | {topic}"]
    for lesson in lessons:
        prefix = "**Keep**" if lesson["type"] == "keep" else "**Avoid**"
        lines.append(f"- {prefix}: {lesson['text']}")

    LESSONS_FILE.parent.mkdir(parents=True, exist_ok=True)

    existing = LESSONS_FILE.read_text() if LESSONS_FILE.exists() else "## Lessons (newest first)\n"
    # Insert after header
    header_end = existing.find("\n") + 1
    new_content = existing[:header_end] + "\n".join(lines) + "\n" + existing[header_end:]
    LESSONS_FILE.write_text(new_content)

    decay()


def decay() -> None:
    """If over MAX_ENTRIES, remove the oldest DECAY_FRACTION."""
    if not LESSONS_FILE.exists():
        return

    text = LESSONS_FILE.read_text()
    entries = _parse_entries(text)

    if len(entries) <= MAX_ENTRIES:
        return

    keep_count = int(len(entries) * (1 - DECAY_FRACTION))
    kept = entries[:keep_count]  # already newest-first

    lines = ["## Lessons (newest first)\n"]
    for entry in kept:
        lines.append(f"### {entry['date']} | {entry['type']} | {entry['topic']}")
        for lesson in entry["lessons"]:
            lines.append(f"- {lesson}")
        lines.append("")

    LESSONS_FILE.write_text("\n".join(lines))


def _parse_entries(text: str) -> list[dict]:
    """Parse lessons.md into list of entries (newest first)."""
    entries = []
    current = None

    for line in text.split("\n"):
        match = re.match(r"### (\d{4}-\d{2}-\d{2}) \| (\w+) \| (.+)", line)
        if match:
            if current:
                entries.append(current)
            current = {
                "date": match.group(1),
                "type": match.group(2),
                "topic": match.group(3).strip(),
                "lessons": [],
            }
        elif current and line.startswith("- "):
            current["lessons"].append(line[2:])

    if current:
        entries.append(current)

    return entries
