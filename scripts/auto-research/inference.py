"""Thin Ollama HTTP client. Two functions: generate and is_available."""

import requests

OLLAMA_URL = "http://localhost:11434"
DEFAULT_TIMEOUT = 120  # seconds — model loading can be slow on first call


def is_available() -> bool:
    try:
        r = requests.get(f"{OLLAMA_URL}/api/tags", timeout=5)
        return r.status_code == 200
    except requests.ConnectionError:
        return False


def generate(
    model: str,
    prompt: str,
    system: str = "",
    temperature: float = 0.7,
    timeout: int = DEFAULT_TIMEOUT,
) -> str:
    payload = {
        "model": model,
        "prompt": prompt,
        "stream": False,
        "options": {"temperature": temperature},
    }
    if system:
        payload["system"] = system

    for attempt in range(2):
        try:
            r = requests.post(
                f"{OLLAMA_URL}/api/generate",
                json=payload,
                timeout=timeout,
            )
            r.raise_for_status()
            return r.json()["response"]
        except requests.ConnectionError:
            if attempt == 0:
                raise RuntimeError(
                    "Ollama not running. Start it with: ollama serve"
                )
            raise
        except requests.Timeout:
            if attempt == 0:
                continue  # retry once on timeout (model may be loading)
            raise RuntimeError(
                f"Ollama timed out after {timeout}s. Model may be too large."
            )
        except KeyError:
            raise RuntimeError(f"Unexpected Ollama response: {r.text[:200]}")
