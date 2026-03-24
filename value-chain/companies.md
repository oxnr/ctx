# AI Value Chain — Company Catalog

Living catalog of companies organized by value chain layer. Add new entries as you discover them.

## Layer 01 — Compute

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| NVIDIA | GPU hardware (H100, B200, GB200), CUDA | Hardware | — |
| AMD | MI300X GPUs, ROCm | Hardware | — |
| Google TPU | Custom AI accelerators (TPU v5e, Trillium) | Hardware | — |
| AWS Trainium | Custom training/inference chips | Cloud | — |
| CoreWeave | GPU cloud for AI | Cloud | — |
| Lambda | GPU cloud and on-prem clusters | Cloud | — |
| Together AI | GPU cloud with optimized inference | Cloud | — |
| Modal | Serverless GPU compute | Cloud | W23 |
| Cerebras | Wafer-scale chips | Hardware | — |
| Groq | LPU inference chips | Hardware | — |
| RunPod | GPU cloud marketplace | Cloud | — |
| Brev.dev | GPU dev environments | Cloud | W22 |
| Databricks | Unified analytics, compute, fine-tuning, RAG | Proprietary | — |
| HuggingFace Accelerate | Distributed training abstraction | Open source | — |

## Layer 02 — Pre-Training

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| OpenAI | GPT series, closed-weight frontier | Proprietary | — |
| Anthropic | Claude series, safety-focused | Proprietary | — |
| Google DeepMind | Gemini, PaLM | Proprietary | — |
| Meta AI | Llama series, open-weight | Open-weight | — |
| Mistral | Mistral, Mixtral (MoE) | Open-weight | — |
| xAI | Grok series | Proprietary | — |
| DeepSeek | DeepSeek-V3, R1 (reasoning) | Open-weight | — |
| Qwen (Alibaba) | Qwen series, multilingual | Open-weight | — |
| Qwen3-Coder | Agentic coding models — hybrid DeltaNet+Attention MoE, 3B active matching Sonnet 4.5 | Open-weight | — |
| MiniMax | Open-weight MoE models (M1, M2, M2.5), multimodal API (image/video/TTS/music) | Open-weight | — |
| Scale AI | Data labeling and curation | Data | S16 |
| Labelbox | Training data platform | Data | — |
| Snorkel AI | Programmatic data labeling | Data | — |
| Argilla | Open-source data curation | Open source | — |
| nanoGPT | Minimal GPT training codebase (Karpathy) | Open source | — |
| Sakana AI | Nature-inspired AI, evolutionary model merging | Open source | — |
| Stability AI | Stable Diffusion, open image/video models | Open-weight | — |
| HuggingFace Transformers | Model architecture library | Open source | — |
| HuggingFace Datasets | Training data loading/processing | Open source | — |
| HuggingFace Tokenizers | Fast tokenization (Rust) | Open source | — |
| HuggingFace Diffusers | Image/video diffusion models | Open source | — |
| Cohere | Enterprise NLP and embedding models | Proprietary | — |

## Layer 03 — Post-Training

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| HuggingFace TRL | RLHF, DPO, SFT library | Open source | — |
| Axolotl | Multi-architecture fine-tuning | Open source | — |
| Unsloth | Fast LoRA fine-tuning | Open source | — |
| LLaMA-Factory | Unified fine-tuning framework | Open source | — |
| Predibase | Managed LoRA fine-tuning | Managed | W23 |
| Together AI | Fine-tuning API | Managed | — |
| Anyscale | Distributed fine-tuning on Ray | Managed | — |
| Replicate | Fine-tuning and inference API | Managed | — |
| OpenAI Fine-tuning | GPT model fine-tuning | Proprietary | — |
| Openlayer | Fine-tuning evaluation | Managed | — |
| Oxen.ai | Dataset versioning for training | Open source | W24 |
| OpenPipe | Fine-tuning and evaluation for LLMs | Managed | S23 |
| HuggingFace PEFT | LoRA, QLoRA, parameter-efficient fine-tuning | Open source | — |
| Databricks | Custom RL and fine-tuning | Proprietary | — |
| Sakana AI | Evolutionary model merging | Open source | — |

## Layer 04 — Inference

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| vLLM | High-throughput serving, PagedAttention | Open source | — |
| llama.cpp | CPU/GPU inference, GGUF quantization | Open source | — |
| Ollama | Local model runner | Open source | — |
| LM Studio | Desktop local inference | Free | — |
| TGI | HuggingFace serving engine | Open source | — |
| OpenAI API | GPT hosted API | Proprietary | — |
| Anthropic API | Claude hosted API | Proprietary | — |
| Google Vertex AI | Gemini and open models | Managed | — |
| AWS Bedrock | Multi-model API | Managed | — |
| Fireworks AI | Fast inference for open models | Managed | W23 |
| Groq | Ultra-fast LPU inference | Managed | — |
| Baseten | Model serving infrastructure | Managed | W20 |
| Lepton AI | Developer-focused inference | Managed | — |
| ElevenLabs | Text-to-speech, voice cloning, audio AI | Proprietary | — |
| Whisper | OpenAI open-source speech-to-text | Open source | — |
| Deepgram | Speech-to-text and audio intelligence | Managed | — |
| AssemblyAI | Speech-to-text and audio understanding | Managed | — |
| Bark | Open-source multilingual TTS (Suno) | Open source | — |
| Sora | OpenAI video generation | Proprietary | — |
| Kling | Kuaishou AI video generation | Proprietary | — |
| Veo | Google DeepMind video generation | Proprietary | — |
| Suno | AI music and song generation | Proprietary | — |
| HuggingFace Inference Endpoints | Managed model hosting | Managed | — |
| BentoML | Open-source model serving framework | Open source | — |
| SGLang | Fast LLM serving, structured generation | Open source | — |
| DeepInfra | Inference API for open models | Managed | — |
| LlamaFile | Mozilla — LLM as single cross-platform executable | Open source | — |

## Layer 05 — Routing

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| OpenRouter | Unified API, 300+ models | Managed | — |
| LiteLLM | Open-source LLM proxy | Open source | — |
| Portkey | AI gateway with routing, caching | Managed | W24 |
| Unify | Benchmark-driven routing | Managed | — |
| Martian | Intelligent model router | Managed | — |
| Helicone | LLM proxy with observability | Managed | W23 |
| Keywords AI | LLM monitoring and routing | Managed | S24 |
| Not Diamond | Model routing optimization | Managed | S24 |

## Layer 06 — Orchestration

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| LangChain | Chain/agent framework, LangGraph | Open source | — |
| LlamaIndex | Data framework for LLM apps | Open source | — |
| CrewAI | Multi-agent orchestration | Open source | S23 |
| AutoGen | Microsoft multi-agent framework | Open source | — |
| Claude Code | Anthropic agentic coding | Proprietary | — |
| OpenAI Codex | Cloud coding agent | Proprietary | — |
| Devin (Cognition) | Autonomous SW engineering agent | Proprietary | — |
| Dify | Visual AI workflow builder | Open source | — |
| Langflow | Visual drag-and-drop agent pipeline builder | Open source | — |
| n8n | Workflow automation with AI | Open source | — |
| Composio | Tool integrations for agents | Managed | W24 |
| Agent Orchestrator (Composio) | Fleet manager for parallel coding agents — CI/review feedback routing, plugin arch | Open source | W24 |
| claude-squad | Terminal multiplexer for parallel AI coding agents in tmux sessions | Open source | — |
| E2B | Sandboxed code execution | Managed | W24 |
| Trigger.dev | Background job orchestration | Managed | W23 |
| LibreChat | Open-source multi-model chat interface | Open source | — |
| Hermes Agent | Agent with memory, tools, MCP gateway | Open source | — |
| Langdock | Enterprise AI platform, multi-model | Proprietary | — |
| Semantic Kernel | Microsoft AI orchestration SDK | Open source | — |
| Haystack | Open-source RAG and NLP framework | Open source | — |
| DeerFlow (ByteDance) | Super agent harness — Docker sandbox, middleware chain, progressive skill loading, sub-agents, IM channels | Open source | — |

## Layer 07 — Context & Knowledge

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| Pinecone | Managed vector database | Managed | — |
| Weaviate | Open-source vector DB, hybrid search | Open source | — |
| Chroma | Open-source embedding database | Open source | W23 |
| Qdrant | Rust-based vector search | Open source | — |
| Milvus | Distributed vector database | Open source | — |
| Voyage AI | Retrieval-optimized embeddings | Managed | — |
| Jina AI | Embedding models and rerankers | Open source | — |
| Obsidian | Local-first knowledge management | Free/paid | — |
| Notion | Connected workspace with AI | Managed | — |
| Mem | AI-native knowledge base | Managed | S21 |
| Metal | Managed embeddings | Managed | S23 |
| Trieve | Search and RAG infrastructure | Managed | W24 |
| Mendable | AI chat for docs | Managed | W23 |
| Databricks | Instructed Retriever, RAG infrastructure | Proprietary | — |
| HuggingFace Text Embeddings Inference | Embedding model serving | Open source | — |
| HuggingFace Sentence Transformers | Embedding model library | Open source | — |
| FAISS | Facebook vector similarity search | Open source | — |
| pgvector | PostgreSQL vector extension | Open source | — |
| LlamaParse | Document parsing for RAG | Managed | — |

| json-render (Vercel) | Generative UI framework — LLM outputs JSON specs rendered across 10 platforms | Open source | — |
| Collaborator | Infinite canvas workspace for agentic dev with spatial tiles | Open source | — |

## Layer 08 — Integrations

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| MCP | Model Context Protocol | Open standard | — |
| Cursor | AI-first code editor | Proprietary | — |
| Windsurf | AI code editor with Cascade | Proprietary | — |
| Continue | Open IDE AI assistant | Open source | W23 |
| Aider | Terminal AI pair programming | Open source | — |
| OpenHands | Open-source SW dev agent | Open source | — |
| Composio | Agent tool integrations | Managed | W24 |
| CopilotKit | Embed AI copilots in React apps, AG-UI protocol | Open source | — |
| Zapier AI Actions | Connect AI to 6000+ apps | Managed | — |
| Sweep AI | GitHub issue to PR agent | Managed | S23 |
| Middleware | Observability integrations | Managed | W23 |

## Layer 09 — Eval & Safety

| Company | What they do | Type | YC Batch |
|---------|-------------|------|----------|
| Braintrust | Eval framework, logging, datasets | Managed | S23 |
| Langfuse | Open-source LLM observability | Open source | — |
| Promptfoo | CLI prompt testing | Open source | — |
| LangSmith | LangChain observability | Managed | — |
| Guardrails AI | Output validation framework | Open source | — |
| NeMo Guardrails | NVIDIA guardrails toolkit | Open source | — |
| Helicone | LLM observability, cost tracking | Managed | W23 |
| Humanloop | Eval and prompt management | Managed | — |
| Llama Guard | Meta safety classifier | Open-weight | — |
| Athina AI | Production monitoring | Managed | S23 |
| Galileo | Data intelligence for LLMs | Managed | W22 |
| Freeplay | Prompt testing | Managed | W24 |
| OpenPipe | Fine-tuning evaluation | Managed | S23 |
| HuggingFace Evaluate | Model evaluation library | Open source | — |
| Weights & Biases | ML experiment tracking and eval | Managed | — |
| MLflow | Open-source ML lifecycle management | Open source | — |
| RAGAS | RAG evaluation framework | Open source | — |
| Phoenix (Arize) | LLM observability and eval | Open source | — |
| DeepEval | Open-source LLM eval framework | Open source | — |

| Strix | LLM-powered autonomous pentesting agent with validated PoC exploits | Open source | — |

## Layer 10 — Products

| Company | What they do | Category | YC Batch |
|---------|-------------|----------|----------|
| ChatGPT | General AI assistant | Horizontal | — |
| Claude | AI assistant with tool use | Horizontal | — |
| Gemini | Google AI assistant | Horizontal | — |
| Open WebUI | Self-hosted ChatGPT-like interface, multi-backend | Horizontal | — |
| Perplexity | AI search with citations | Search | — |
| Harvey | AI for legal | Legal | — |
| Abridge | AI medical documentation | Healthcare | — |
| Writer | Enterprise AI writing | Content | — |
| Sierra | Conversational AI for CX | Support | — |
| 11x | AI sales agents | Sales | — |
| Midjourney | AI image generation | Creative | — |
| Runway | AI video generation | Creative | — |
| Jasper | AI marketing copy | Content | — |
| Copy.ai | Marketing content | Content | — |
| Glean | Enterprise AI search | Enterprise | — |
| Hebbia | Document analysis | Enterprise | — |
| Bland AI | AI phone calls | Voice | W24 |
| Lovable | AI web app builder | Dev tools | W24 |
| Bolna | Voice agents | Voice | W24 |
| DevRev | AI CRM | Enterprise | W23 |
| ElevenLabs | Voice AI platform | Voice | — |
| Sora | AI video generation | Creative | — |
| Kling | AI video generation | Creative | — |
| Suno | AI music generation | Creative | — |
| LibreChat | Open multi-model chat | Horizontal | — |
| Langdock | Enterprise AI platform | Enterprise | — |
| HuggingFace Spaces / Gradio | ML demo hosting + UI | Dev tools | — |
