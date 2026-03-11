window.VC_DATA = {
  layers: [
    { id: "compute", index: "01", label: "Compute", shortDesc: "GPUs, TPUs, cloud infrastructure", subcategories: [
      { id: "silicon", label: "Silicon", desc: "Chips & hardware" },
      { id: "gpu-clouds", label: "GPU Clouds", desc: "Rental compute" },
      { id: "training-infra", label: "Training Infra", desc: "Distributed training software" }
    ]},
    { id: "pretrain", index: "02", label: "Pre-Training", shortDesc: "Base models, training data, tokenizers", subcategories: [
      { id: "foundation-models", label: "Foundation Models", desc: "Model labs & outputs" },
      { id: "training-data", label: "Training Data", desc: "Curation, labeling, synthetic" },
      { id: "training-frameworks", label: "Training Frameworks", desc: "Code that runs pre-training" }
    ]},
    { id: "posttrain", index: "03", label: "Post-Training", shortDesc: "Fine-tuning, RLHF, LoRA, model merging", subcategories: [
      { id: "alignment", label: "Alignment", desc: "RLHF, DPO, SFT, preference tuning" },
      { id: "efficient-adaptation", label: "Efficient Adaptation", desc: "LoRA, QLoRA, distillation, merging" },
      { id: "managed-finetuning", label: "Managed Fine-Tuning", desc: "Platforms" },
      { id: "benchmarking", label: "Benchmarking", desc: "Evaluating fine-tuned model quality" }
    ]},
    { id: "inference", index: "04", label: "Inference", shortDesc: "Serving engines, APIs, quantization", subcategories: [
      { id: "serving-engines", label: "Serving Engines", desc: "Self-hosted runtimes" },
      { id: "provider-apis", label: "Provider APIs", desc: "Hosted endpoints" },
      { id: "local-runners", label: "Local Runners", desc: "Desktop & edge" },
      { id: "multimodal", label: "Multimodal", desc: "Voice, image, video" },
      { id: "optimization", label: "Optimization", desc: "Caching, compression, token efficiency" }
    ]},
    { id: "routing", index: "05", label: "Routing", shortDesc: "Model routers, gateways, proxies", subcategories: [
      { id: "gateways-proxies", label: "Gateways & Proxies", desc: "Unified APIs" },
      { id: "intelligent-routing", label: "Intelligent Routing", desc: "Quality/cost optimization" },
      { id: "observability-proxies", label: "Observability Proxies", desc: "Routing with monitoring" }
    ]},
    { id: "orchestration", index: "06", label: "Orchestration", shortDesc: "Agent frameworks, workflows, multi-step", subcategories: [
      { id: "agent-patterns", label: "Agent Patterns", desc: "Frameworks & architectures" },
      { id: "workflow-design", label: "Workflow Design", desc: "Pipelines, DAGs, task decomposition" },
      { id: "human-oversight", label: "Human Oversight", desc: "Approval gates, escalation, control spectrum" },
      { id: "execution-environments", label: "Execution Environments", desc: "Sandboxes & runtimes" }
    ]},
    { id: "context", index: "07", label: "Context", shortDesc: "Vector DBs, RAG, embeddings, memory", subcategories: [
      { id: "vector-storage", label: "Vector Storage", desc: "Embedding databases" },
      { id: "retrieval-search", label: "Retrieval & Search", desc: "RAG pipelines, parsing, reranking" },
      { id: "memory-systems", label: "Memory Systems", desc: "Conversation & long-term memory" },
      { id: "embeddings", label: "Embeddings", desc: "Models & serving" }
    ]},
    { id: "integrations", index: "08", label: "Integrations", shortDesc: "MCP, IDE agents, tool connectors", subcategories: [
      { id: "protocols-standards", label: "Protocols & Standards", desc: "MCP, function calling, structured outputs, A2A" },
      { id: "code-dev-tools", label: "Code & Dev Tools", desc: "IDE agents, coding assistants" },
      { id: "connectors", label: "Connectors", desc: "API bridges, tool platforms" }
    ]},
    { id: "eval", index: "09", label: "Eval & Safety", shortDesc: "Evals, observability, guardrails", subcategories: [
      { id: "evaluation", label: "Evaluation", desc: "Test suites, benchmarks, CI eval" },
      { id: "observability", label: "Observability", desc: "Tracing, logging, cost tracking" },
      { id: "guardrails-security", label: "Guardrails & Security", desc: "Runtime validation, safety classifiers" }
    ]},
    { id: "products", index: "10", label: "Products", shortDesc: "End-user AI applications", subcategories: [
      { id: "assistants-copilots", label: "Assistants & Copilots", desc: "General-purpose chat & copilot" },
      { id: "autonomous-agents", label: "Autonomous Agents", desc: "Agent-as-product" },
      { id: "creative-tools", label: "Creative Tools", desc: "Generation" },
      { id: "vertical-ai", label: "Vertical AI", desc: "Domain-specific" }
    ]}
  ],
  tools: [
    // ── L01 Compute ──
    { id: "nvidia", name: "NVIDIA", desc: "GPU hardware (H100, B200, GB200), CUDA ecosystem", type: "proprietary", url: "https://www.nvidia.com", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["silicon"] },
    { id: "amd", name: "AMD", desc: "MI300X GPUs, ROCm software stack", type: "proprietary", url: "https://www.amd.com/en/graphics/instinct", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["silicon"] },
    { id: "google-tpu", name: "Google TPU", desc: "Custom AI accelerators (TPU v5e, Trillium)", type: "proprietary", url: "https://cloud.google.com/tpu", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["silicon"] },
    { id: "aws-trainium", name: "AWS Trainium", desc: "Custom training/inference chips (Trainium2, Inferentia)", type: "managed", url: "https://aws.amazon.com/machine-learning/trainium/", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["silicon"] },
    { id: "coreweave", name: "CoreWeave", desc: "GPU cloud specialized for AI workloads", type: "managed", url: "https://www.coreweave.com", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["gpu-clouds"] },
    { id: "lambda", name: "Lambda", desc: "GPU cloud and on-prem clusters for training", type: "managed", url: "https://lambdalabs.com", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["gpu-clouds"] },
    { id: "modal", name: "Modal", desc: "Serverless GPU compute", type: "managed", url: "https://modal.com", github: null, directLayers: ["compute"], indirectLayers: [], yc: "W23", subcategories: ["gpu-clouds"] },
    { id: "cerebras", name: "Cerebras", desc: "Wafer-scale chips for training and inference", type: "proprietary", url: "https://www.cerebras.net", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["silicon"] },
    { id: "runpod", name: "RunPod", desc: "GPU cloud marketplace", type: "managed", url: "https://www.runpod.io", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["gpu-clouds"] },
    { id: "brevdev", name: "Brev.dev", desc: "GPU dev environments", type: "managed", url: "https://brev.dev", github: null, directLayers: ["compute"], indirectLayers: [], yc: "W22", subcategories: ["gpu-clouds"] },
    { id: "together-ai", name: "Together AI", desc: "GPU cloud, fine-tuning API, and fast inference", type: "managed", url: "https://www.together.ai", github: null, directLayers: ["compute", "posttrain", "inference"], indirectLayers: [], yc: null, subcategories: ["gpu-clouds", "managed-finetuning", "provider-apis"] },
    { id: "groq", name: "Groq", desc: "LPU hardware and ultra-fast inference API", type: "managed", url: "https://groq.com", github: null, directLayers: ["compute", "inference"], indirectLayers: [], yc: null, subcategories: ["silicon", "provider-apis"] },
    { id: "databricks", name: "Databricks", desc: "Unified analytics with compute, fine-tuning, and RAG", type: "proprietary", url: "https://www.databricks.com", github: null, directLayers: ["compute", "posttrain", "context"], indirectLayers: ["pretrain"], yc: null, subcategories: ["gpu-clouds", "managed-finetuning"] },
    { id: "hf-accelerate", name: "HuggingFace Accelerate", desc: "Distributed training abstraction library", type: "open-source", url: "https://huggingface.co/docs/accelerate", github: "https://github.com/huggingface/accelerate", directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["training-infra"] },

    // ── L02 Pre-Training ──
    { id: "openai", name: "OpenAI", desc: "GPT series (GPT-4, GPT-5), closed-weight frontier models", type: "proprietary", url: "https://openai.com", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "anthropic", name: "Anthropic", desc: "Claude series (Opus, Sonnet, Haiku), safety-focused", type: "proprietary", url: "https://www.anthropic.com", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "google-deepmind", name: "Google DeepMind", desc: "Gemini series, PaLM, custom TPU training", type: "proprietary", url: "https://deepmind.google", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "meta-ai", name: "Meta AI", desc: "Llama series, largest open-weight model family", type: "open-weight", url: "https://ai.meta.com", github: "https://github.com/meta-llama/llama", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "mistral", name: "Mistral", desc: "Mistral, Mixtral (MoE), European open-weight lab", type: "open-weight", url: "https://mistral.ai", github: "https://github.com/mistralai", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "xai", name: "xAI", desc: "Grok series, trained on X/Twitter data", type: "proprietary", url: "https://x.ai", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "deepseek", name: "DeepSeek", desc: "DeepSeek-V3, R1 reasoning models, high efficiency", type: "open-weight", url: "https://www.deepseek.com", github: "https://github.com/deepseek-ai", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "qwen", name: "Qwen (Alibaba)", desc: "Qwen series, strong multilingual open models", type: "open-weight", url: "https://qwenlm.github.io", github: "https://github.com/QwenLM", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "scale-ai", name: "Scale AI", desc: "Data labeling and curation for training", type: "managed", url: "https://scale.com", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: "S16", subcategories: ["training-data"] },
    { id: "fineweb", name: "FineWeb", desc: "Open pre-training dataset (15T tokens, curated)", type: "open-source", url: "https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-data"] },
    { id: "labelbox", name: "Labelbox", desc: "Training data platform for labeling and curation", type: "managed", url: "https://labelbox.com", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-data"] },
    { id: "snorkel-ai", name: "Snorkel AI", desc: "Programmatic data labeling at scale", type: "managed", url: "https://snorkel.ai", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-data"] },
    { id: "argilla", name: "Argilla", desc: "Open-source data curation and annotation", type: "open-source", url: "https://argilla.io", github: "https://github.com/argilla-io/argilla", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-data"] },
    { id: "nanogpt", name: "nanoGPT", desc: "Minimal GPT training codebase by Karpathy", type: "open-source", url: "https://github.com/karpathy/nanoGPT", github: "https://github.com/karpathy/nanoGPT", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-frameworks"] },
    { id: "stability-ai", name: "Stability AI", desc: "Stable Diffusion, open image/video generation models", type: "open-weight", url: "https://stability.ai", github: "https://github.com/Stability-AI", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"] },
    { id: "sakana-ai", name: "Sakana AI", desc: "Nature-inspired AI, evolutionary model merging", type: "open-source", url: "https://sakana.ai", github: "https://github.com/SakanaAI", directLayers: ["pretrain", "posttrain"], indirectLayers: ["orchestration"], yc: null, subcategories: ["foundation-models", "efficient-adaptation"] },
    { id: "cohere", name: "Cohere", desc: "Enterprise NLP, embedding models, and Rerank API", type: "proprietary", url: "https://cohere.com", github: null, directLayers: ["pretrain", "inference", "context"], indirectLayers: [], yc: null, subcategories: ["foundation-models", "provider-apis", "embeddings"] },
    { id: "hf-transformers", name: "HuggingFace Transformers", desc: "Model architecture library and training loops", type: "open-source", url: "https://huggingface.co/docs/transformers", github: "https://github.com/huggingface/transformers", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-frameworks"] },
    { id: "hf-datasets", name: "HuggingFace Datasets", desc: "Training data loading and processing library", type: "open-source", url: "https://huggingface.co/docs/datasets", github: "https://github.com/huggingface/datasets", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-data"] },
    { id: "hf-tokenizers", name: "HuggingFace Tokenizers", desc: "Fast tokenization library (Rust-backed)", type: "open-source", url: "https://huggingface.co/docs/tokenizers", github: "https://github.com/huggingface/tokenizers", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-frameworks"] },
    { id: "hf-diffusers", name: "HuggingFace Diffusers", desc: "Image and video diffusion model library", type: "open-source", url: "https://huggingface.co/docs/diffusers", github: "https://github.com/huggingface/diffusers", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-frameworks"] },

    // ── L03 Post-Training ──
    { id: "hf-trl", name: "HuggingFace TRL", desc: "RLHF, DPO, SFT training library", type: "open-source", url: "https://huggingface.co/docs/trl", github: "https://github.com/huggingface/trl", directLayers: ["posttrain"], indirectLayers: [], yc: null, subcategories: ["alignment"]},
    { id: "axolotl", name: "Axolotl", desc: "Streamlined multi-architecture fine-tuning", type: "open-source", url: "https://github.com/OpenAccess-AI-Collective/axolotl", github: "https://github.com/OpenAccess-AI-Collective/axolotl", directLayers: ["posttrain"], indirectLayers: [], yc: null, subcategories: ["efficient-adaptation"]},
    { id: "unsloth", name: "Unsloth", desc: "2x faster LoRA fine-tuning, memory efficient", type: "open-source", url: "https://unsloth.ai", github: "https://github.com/unslothai/unsloth", directLayers: ["posttrain"], indirectLayers: [], yc: null, subcategories: ["efficient-adaptation"]},
    { id: "llama-factory", name: "LLaMA-Factory", desc: "Unified fine-tuning framework for 100+ models", type: "open-source", url: "https://github.com/hiyouga/LLaMA-Factory", github: "https://github.com/hiyouga/LLaMA-Factory", directLayers: ["posttrain"], indirectLayers: [], yc: null, subcategories: ["efficient-adaptation"]},
    { id: "predibase", name: "Predibase", desc: "Managed LoRA fine-tuning and serving", type: "managed", url: "https://predibase.com", github: null, directLayers: ["posttrain"], indirectLayers: [], yc: "W23", subcategories: ["managed-finetuning"]},
    { id: "anyscale", name: "Anyscale", desc: "Distributed fine-tuning on Ray", type: "managed", url: "https://www.anyscale.com", github: null, directLayers: ["posttrain"], indirectLayers: [], yc: null, subcategories: ["managed-finetuning"]},
    { id: "replicate", name: "Replicate", desc: "Fine-tuning and inference API for open models", type: "managed", url: "https://replicate.com", github: null, directLayers: ["posttrain", "inference"], indirectLayers: [], yc: null, subcategories: ["managed-finetuning"]},
    { id: "openai-finetuning", name: "OpenAI Fine-tuning", desc: "Fine-tuning API for GPT models", type: "proprietary", url: "https://platform.openai.com/docs/guides/fine-tuning", github: null, directLayers: ["posttrain"], indirectLayers: [], yc: null, subcategories: ["managed-finetuning"]},
    { id: "openlayer", name: "Openlayer", desc: "Fine-tuning evaluation and data quality", type: "managed", url: "https://openlayer.com", github: null, directLayers: ["posttrain", "eval"], indirectLayers: [], yc: null, subcategories: ["managed-finetuning", "benchmarking"]},
    { id: "oxen-ai", name: "Oxen.ai", desc: "Dataset versioning for training pipelines", type: "open-source", url: "https://oxen.ai", github: "https://github.com/Oxen-AI/Oxen", directLayers: ["posttrain"], indirectLayers: [], yc: "W24", subcategories: ["training-data"]},
    { id: "hf-peft", name: "HuggingFace PEFT", desc: "LoRA, QLoRA, parameter-efficient fine-tuning", type: "open-source", url: "https://huggingface.co/docs/peft", github: "https://github.com/huggingface/peft", directLayers: ["posttrain"], indirectLayers: [], yc: null, subcategories: ["efficient-adaptation"]},
    { id: "openpipe", name: "OpenPipe", desc: "Fine-tuning and evaluation platform for LLMs", type: "managed", url: "https://openpipe.ai", github: null, directLayers: ["posttrain", "eval"], indirectLayers: ["inference"], yc: "S23", subcategories: ["managed-finetuning", "benchmarking"]},

    // ── L04 Inference ──
    { id: "vllm", name: "vLLM", desc: "High-throughput serving engine, PagedAttention", type: "open-source", url: "https://docs.vllm.ai", github: "https://github.com/vllm-project/vllm", directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["serving-engines"]},
    { id: "llama-cpp", name: "llama.cpp", desc: "CPU/GPU inference in C++, GGUF quantization", type: "open-source", url: "https://github.com/ggerganov/llama.cpp", github: "https://github.com/ggerganov/llama.cpp", directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["serving-engines"]},
    { id: "ollama", name: "Ollama", desc: "Local model runner with simple CLI", type: "open-source", url: "https://ollama.com", github: "https://github.com/ollama/ollama", directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["local-runners"]},
    { id: "lm-studio", name: "LM Studio", desc: "Desktop app for local model inference", type: "free", url: "https://lmstudio.ai", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["local-runners"]},
    { id: "hf-tgi", name: "HuggingFace TGI", desc: "Production serving engine by HuggingFace", type: "open-source", url: "https://huggingface.co/docs/text-generation-inference", github: "https://github.com/huggingface/text-generation-inference", directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["serving-engines"]},
    { id: "openai-api", name: "OpenAI API", desc: "GPT models as hosted API", type: "proprietary", url: "https://openai.com/api/", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "anthropic-api", name: "Anthropic API", desc: "Claude models as hosted API", type: "proprietary", url: "https://docs.anthropic.com", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "google-vertex", name: "Google Vertex AI", desc: "Gemini and open models via managed API", type: "managed", url: "https://cloud.google.com/vertex-ai", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "aws-bedrock", name: "AWS Bedrock", desc: "Multi-model API (Claude, Llama, Mistral)", type: "managed", url: "https://aws.amazon.com/bedrock/", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "fireworks-ai", name: "Fireworks AI", desc: "Fast inference API for open models", type: "managed", url: "https://fireworks.ai", github: null, directLayers: ["inference"], indirectLayers: [], yc: "W23", subcategories: ["provider-apis"]},
    { id: "baseten", name: "Baseten", desc: "Model serving infrastructure", type: "managed", url: "https://www.baseten.co", github: null, directLayers: ["inference"], indirectLayers: [], yc: "W20", subcategories: ["serving-engines"]},
    { id: "lepton-ai", name: "Lepton AI", desc: "Developer-focused inference API", type: "managed", url: "https://www.lepton.ai", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "hf-inference-endpoints", name: "HuggingFace Inference Endpoints", desc: "Managed model hosting on HuggingFace", type: "managed", url: "https://huggingface.co/inference-endpoints", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "deepinfra", name: "DeepInfra", desc: "Inference API for open-source models", type: "managed", url: "https://deepinfra.com", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "bentoml", name: "BentoML", desc: "Open-source model serving framework", type: "open-source", url: "https://www.bentoml.com", github: "https://github.com/bentoml/BentoML", directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["serving-engines"]},
    { id: "sglang", name: "SGLang", desc: "Fast LLM serving with structured generation", type: "open-source", url: "https://github.com/sgl-project/sglang", github: "https://github.com/sgl-project/sglang", directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["serving-engines"]},

    // ── L04 Inference — Voice & Audio ──
    { id: "elevenlabs", name: "ElevenLabs", desc: "Text-to-speech, voice cloning, and audio AI platform", type: "proprietary", url: "https://elevenlabs.io", github: null, directLayers: ["inference", "products"], indirectLayers: ["pretrain"], yc: null, subcategories: ["multimodal"]},
    { id: "whisper", name: "Whisper", desc: "OpenAI open-source speech-to-text model", type: "open-source", url: "https://github.com/openai/whisper", github: "https://github.com/openai/whisper", directLayers: ["inference"], indirectLayers: ["pretrain"], yc: null, subcategories: ["multimodal"]},
    { id: "deepgram", name: "Deepgram", desc: "Speech-to-text and audio intelligence API", type: "managed", url: "https://deepgram.com", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["multimodal"]},
    { id: "assemblyai", name: "AssemblyAI", desc: "Speech-to-text and audio understanding API", type: "managed", url: "https://www.assemblyai.com", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["multimodal"]},
    { id: "bark", name: "Bark", desc: "Open-source text-to-speech by Suno, multilingual", type: "open-source", url: "https://github.com/suno-ai/bark", github: "https://github.com/suno-ai/bark", directLayers: ["inference"], indirectLayers: ["pretrain"], yc: null, subcategories: ["multimodal"]},
    { id: "coqui-tts", name: "Coqui TTS", desc: "Open-source deep learning TTS toolkit", type: "open-source", url: "https://github.com/coqui-ai/TTS", github: "https://github.com/coqui-ai/TTS", directLayers: ["inference"], indirectLayers: ["pretrain"], yc: null, subcategories: ["multimodal"]},
    { id: "playht", name: "PlayHT", desc: "AI voice generation and text-to-speech API", type: "managed", url: "https://play.ht", github: null, directLayers: ["inference", "products"], indirectLayers: [], yc: null, subcategories: ["multimodal"]},

    // ── L04 Inference — Video Generation ──
    { id: "sora", name: "Sora", desc: "OpenAI video generation model", type: "proprietary", url: "https://openai.com/sora", github: null, directLayers: ["inference", "products"], indirectLayers: ["pretrain"], yc: null, subcategories: ["multimodal"]},
    { id: "kling", name: "Kling", desc: "Kuaishou AI video generation", type: "proprietary", url: "https://klingai.com", github: null, directLayers: ["inference", "products"], indirectLayers: ["pretrain"], yc: null, subcategories: ["multimodal"]},
    { id: "veo", name: "Veo", desc: "Google DeepMind video generation model", type: "proprietary", url: "https://deepmind.google/technologies/veo/", github: null, directLayers: ["inference", "products"], indirectLayers: ["pretrain"], yc: null, subcategories: ["multimodal"]},
    { id: "suno", name: "Suno", desc: "AI music and song generation", type: "proprietary", url: "https://suno.com", github: null, directLayers: ["inference", "products"], indirectLayers: ["pretrain"], yc: null, subcategories: ["multimodal"]},

    // ── L05 Routing ──
    { id: "openrouter", name: "OpenRouter", desc: "Unified API across 300+ models, automatic fallback", type: "managed", url: "https://openrouter.ai", github: null, directLayers: ["routing"], indirectLayers: [], yc: null, subcategories: ["gateways-proxies"]},
    { id: "litellm", name: "LiteLLM", desc: "Open-source LLM proxy for 100+ providers", type: "open-source", url: "https://litellm.ai", github: "https://github.com/BerriAI/litellm", directLayers: ["routing"], indirectLayers: [], yc: null, subcategories: ["gateways-proxies"]},
    { id: "portkey", name: "Portkey", desc: "AI gateway with routing, caching, guardrails", type: "managed", url: "https://portkey.ai", github: null, directLayers: ["routing", "inference"], indirectLayers: [], yc: "W24", subcategories: ["gateways-proxies", "optimization"]},
    { id: "unify", name: "Unify", desc: "Benchmark-driven model routing", type: "managed", url: "https://unify.ai", github: null, directLayers: ["routing"], indirectLayers: [], yc: null, subcategories: ["intelligent-routing"]},
    { id: "martian", name: "Martian", desc: "Intelligent model router with quality prediction", type: "managed", url: "https://withmartian.com", github: null, directLayers: ["routing"], indirectLayers: [], yc: null, subcategories: ["intelligent-routing"]},
    { id: "helicone", name: "Helicone", desc: "LLM proxy with observability and cost tracking", type: "managed", url: "https://www.helicone.ai", github: null, directLayers: ["routing", "eval"], indirectLayers: [], yc: "W23", subcategories: ["observability-proxies"]},
    { id: "keywords-ai", name: "Keywords AI", desc: "LLM monitoring and routing platform", type: "managed", url: "https://keywordsai.co", github: null, directLayers: ["routing"], indirectLayers: [], yc: "S24", subcategories: ["observability-proxies"]},
    { id: "not-diamond", name: "Not Diamond", desc: "Model routing optimization", type: "managed", url: "https://notdiamond.ai", github: null, directLayers: ["routing"], indirectLayers: [], yc: "S24", subcategories: ["intelligent-routing"]},

    // ── L06 Orchestration ──
    { id: "langchain", name: "LangChain", desc: "Chain/agent framework, LangGraph for stateful workflows", type: "open-source", url: "https://www.langchain.com", github: "https://github.com/langchain-ai/langchain", directLayers: ["orchestration"], indirectLayers: ["context"], yc: null, subcategories: ["agent-patterns"]},
    { id: "llamaindex", name: "LlamaIndex", desc: "Data framework for LLM apps, RAG pipelines", type: "open-source", url: "https://www.llamaindex.ai", github: "https://github.com/run-llama/llama_index", directLayers: ["orchestration"], indirectLayers: ["context"], yc: null, subcategories: ["workflow-design"]},
    { id: "crewai", name: "CrewAI", desc: "Multi-agent orchestration framework", type: "open-source", url: "https://www.crewai.com", github: "https://github.com/crewAIInc/crewAI", directLayers: ["orchestration"], indirectLayers: [], yc: "S23", subcategories: ["agent-patterns"]},
    { id: "autogen", name: "AutoGen", desc: "Microsoft multi-agent conversation framework", type: "open-source", url: "https://microsoft.github.io/autogen/", github: "https://github.com/microsoft/autogen", directLayers: ["orchestration"], indirectLayers: [], yc: null, subcategories: ["agent-patterns"]},
    { id: "claude-code", name: "Claude Code", desc: "Anthropic's agentic coding tool with tool use, MCP, file system access", type: "proprietary", url: "https://docs.anthropic.com/en/docs/agents", github: null, directLayers: ["orchestration", "integrations"], indirectLayers: ["inference", "context", "eval"], yc: null, layerDetails: { orchestration: "Agent loop coordinates multi-step coding tasks with planning and execution", integrations: "MCP protocol, file system access, terminal integration, git", inference: "Routes to Claude API for completions", context: "Reads project files, CLAUDE.md, maintains conversation context", eval: "Built-in cost tracking, output validation" }, subcategories: ["agent-patterns"]},
    { id: "openai-codex", name: "OpenAI Codex", desc: "Cloud coding agent with sandboxed execution", type: "proprietary", url: "https://openai.com/index/introducing-codex/", github: null, directLayers: ["orchestration", "integrations"], indirectLayers: ["inference", "context"], yc: null, layerDetails: { orchestration: "Cloud-based agent with sandboxed multi-step execution", integrations: "File system, terminal, git integration in sandbox", inference: "Uses OpenAI models for code generation", context: "Reads repository files, maintains task context" }, subcategories: ["agent-patterns"]},
    { id: "devin", name: "Devin (Cognition)", desc: "Autonomous software engineering agent", type: "proprietary", url: "https://www.cognition.ai", github: null, directLayers: ["orchestration", "integrations"], indirectLayers: [], yc: null, subcategories: ["agent-patterns"]},
    { id: "gsd-v1", name: "GSD (v1)", desc: "Viral prompt framework for Claude Code — markdown slash commands for structured project execution", type: "open-source", url: "https://github.com/glittercowboy/get-shit-done", github: "https://github.com/glittercowboy/get-shit-done", directLayers: ["orchestration", "context"], indirectLayers: ["integrations"], yc: null, layerDetails: { orchestration: "Injects workflow prompts (discuss, plan, execute, review) via Claude Code slash commands to impose project structure", context: "Prompt templates carry project state (roadmaps, task plans, decisions) into the LLM context window", integrations: "Relies entirely on Claude Code's tools (file system, terminal, git) — adds no new tool surface" }, subcategories: ["workflow-design"]},
    { id: "gsd-2", name: "GSD 2", desc: "Spec-driven autonomous coding agent — state machine with fresh context per task, crash recovery, cost tracking, and git automation", type: "open-source", url: "https://github.com/gsd-build/GSD-2", github: "https://github.com/gsd-build/GSD-2", directLayers: ["orchestration", "context", "integrations", "eval"], indirectLayers: ["inference", "routing"], yc: null, layerDetails: { orchestration: "State machine decomposes work into Milestone → Slice → Task, dispatches each in a fresh 200k-token session, handles stuck detection, timeout supervision, and adaptive replanning", context: "Pre-inlines task plans, prior summaries, decisions register, and dependency context into each dispatch prompt — LLM never wastes tool calls on orientation", integrations: "Programmatic git branch-per-slice with squash merge, subagent spawning (Scout, Researcher, Worker), Playwright browser, Brave Search, Context7 docs", eval: "Per-unit cost/token ledger with phase and model breakdowns, budget ceiling enforcement, observability validators at phase boundaries, must-have verification", inference: "Routes to 20+ LLM providers via Pi SDK — supports per-phase model selection (Opus for planning, Sonnet for execution)", routing: "Multi-model preferences allow different models per workflow phase, with automatic model switching at dispatch time" }, subcategories: ["agent-patterns", "workflow-design"]},
    { id: "dify", name: "Dify", desc: "Visual AI workflow builder, open source", type: "open-source", url: "https://dify.ai", github: "https://github.com/langgenius/dify", directLayers: ["orchestration"], indirectLayers: [], yc: null, subcategories: ["workflow-design"]},
    { id: "n8n", name: "n8n", desc: "Workflow automation with AI node support", type: "open-source", url: "https://n8n.io", github: "https://github.com/n8n-io/n8n", directLayers: ["orchestration"], indirectLayers: [], yc: null, subcategories: ["workflow-design"]},
    { id: "composio", name: "Composio", desc: "Tool integrations for AI agents", type: "managed", url: "https://www.composio.dev", github: null, directLayers: ["orchestration", "integrations"], indirectLayers: [], yc: "W24", subcategories: ["connectors"]},
    { id: "e2b", name: "E2B", desc: "Sandboxed code execution for agents", type: "managed", url: "https://e2b.dev", github: "https://github.com/e2b-dev/e2b", directLayers: ["orchestration"], indirectLayers: [], yc: "W24", subcategories: ["execution-environments"]},
    { id: "trigger-dev", name: "Trigger.dev", desc: "Background job orchestration for AI workflows", type: "managed", url: "https://trigger.dev", github: "https://github.com/triggerdotdev/trigger.dev", directLayers: ["orchestration"], indirectLayers: [], yc: "W23", subcategories: ["workflow-design"]},
    { id: "librechat", name: "LibreChat", desc: "Open-source multi-model chat interface", type: "open-source", url: "https://www.librechat.ai", github: "https://github.com/danny-avila/LibreChat", directLayers: ["orchestration", "products"], indirectLayers: ["routing"], yc: null, subcategories: ["agent-patterns"]},
    { id: "hermes-agent", name: "Hermes Agent", desc: "Open-source agent with memory, tools, MCP, messaging gateway", type: "open-source", url: "https://github.com/NousResearch/hermes-agent", github: "https://github.com/NousResearch/hermes-agent", directLayers: ["orchestration", "context", "integrations"], indirectLayers: ["inference", "routing"], yc: null, subcategories: ["agent-patterns"]},
    { id: "openclaw", name: "OpenClaw", desc: "Agent gateway with messaging, memory, MCP tools, skills, and multi-model orchestration", type: "open-source", url: "https://openclaw.ai", github: null, directLayers: ["orchestration", "context", "integrations", "products"], indirectLayers: ["routing", "eval"], yc: null, layerDetails: { orchestration: "Multi-model agent loop with skills and tool orchestration", context: "Memory system, knowledge files, conversation history", integrations: "MCP tools, messaging gateways (Telegram, Slack, Discord)", products: "End-user messaging interface across platforms", routing: "Multi-model routing with fallback chains", eval: "Cost tracking, content safety, audit logging" }, subcategories: ["agent-patterns"]},
    { id: "langdock", name: "Langdock", desc: "Enterprise AI platform with multi-model orchestration", type: "proprietary", url: "https://langdock.com", github: null, directLayers: ["products", "orchestration"], indirectLayers: ["routing", "integrations"], yc: null, subcategories: ["agent-patterns"]},
    { id: "semantic-kernel", name: "Semantic Kernel", desc: "Microsoft AI orchestration SDK for .NET/Python/Java", type: "open-source", url: "https://learn.microsoft.com/semantic-kernel/", github: "https://github.com/microsoft/semantic-kernel", directLayers: ["orchestration"], indirectLayers: [], yc: null, subcategories: ["agent-patterns"]},
    { id: "haystack", name: "Haystack", desc: "Open-source framework for RAG and NLP pipelines", type: "open-source", url: "https://haystack.deepset.ai", github: "https://github.com/deepset-ai/haystack", directLayers: ["orchestration", "context"], indirectLayers: [], yc: null, subcategories: ["workflow-design"]},

    // ── L07 Context & Knowledge ──
    { id: "pinecone", name: "Pinecone", desc: "Managed vector database, serverless option", type: "managed", url: "https://www.pinecone.io", github: null, directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["vector-storage"]},
    { id: "weaviate", name: "Weaviate", desc: "Open-source vector database with hybrid search", type: "open-source", url: "https://weaviate.io", github: "https://github.com/weaviate/weaviate", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["vector-storage"]},
    { id: "chroma", name: "Chroma", desc: "Open-source embedding database", type: "open-source", url: "https://www.trychroma.com", github: "https://github.com/chroma-core/chroma", directLayers: ["context"], indirectLayers: [], yc: "W23", subcategories: ["vector-storage"]},
    { id: "qdrant", name: "Qdrant", desc: "Rust-based vector search engine", type: "open-source", url: "https://qdrant.tech", github: "https://github.com/qdrant/qdrant", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["vector-storage"]},
    { id: "milvus", name: "Milvus", desc: "Distributed vector database for scale", type: "open-source", url: "https://milvus.io", github: "https://github.com/milvus-io/milvus", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["vector-storage"]},
    { id: "voyage-ai", name: "Voyage AI", desc: "Embedding models optimized for retrieval", type: "managed", url: "https://www.voyageai.com", github: null, directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["embeddings"]},
    { id: "jina-ai", name: "Jina AI", desc: "Embedding models and rerankers", type: "open-source", url: "https://jina.ai", github: "https://github.com/jina-ai/jina", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["embeddings"]},
    { id: "obsidian", name: "Obsidian", desc: "Local-first knowledge management, markdown-based", type: "free", url: "https://obsidian.md", github: null, directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["memory-systems"]},
    { id: "notion", name: "Notion", desc: "Connected workspace with AI features", type: "managed", url: "https://www.notion.com", github: null, directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["memory-systems"]},
    { id: "mem", name: "Mem", desc: "AI-native knowledge base", type: "managed", url: "https://mem.ai", github: null, directLayers: ["context"], indirectLayers: [], yc: "S21", subcategories: ["memory-systems"]},
    { id: "metal", name: "Metal", desc: "Managed embeddings service", type: "managed", url: "https://getmetal.io", github: null, directLayers: ["context"], indirectLayers: [], yc: "S23", subcategories: ["embeddings"]},
    { id: "trieve", name: "Trieve", desc: "Search and RAG infrastructure", type: "managed", url: "https://trieve.ai", github: "https://github.com/devflowinc/trieve", directLayers: ["context"], indirectLayers: [], yc: "W24", subcategories: ["retrieval-search"]},
    { id: "mendable", name: "Mendable", desc: "AI chat for documentation sites", type: "managed", url: "https://mendable.ai", github: null, directLayers: ["context"], indirectLayers: [], yc: "W23", subcategories: ["retrieval-search"]},
    { id: "hf-tei", name: "HuggingFace Text Embeddings Inference", desc: "Fast embedding model serving engine", type: "open-source", url: "https://huggingface.co/docs/text-embeddings-inference", github: "https://github.com/huggingface/text-embeddings-inference", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["embeddings"]},
    { id: "hf-sentence-transformers", name: "HuggingFace Sentence Transformers", desc: "Embedding model library for semantic similarity", type: "open-source", url: "https://www.sbert.net", github: "https://github.com/UKPLab/sentence-transformers", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["embeddings"]},
    { id: "faiss", name: "FAISS", desc: "Facebook vector similarity search library", type: "open-source", url: "https://github.com/facebookresearch/faiss", github: "https://github.com/facebookresearch/faiss", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["vector-storage"]},
    { id: "pgvector", name: "pgvector", desc: "PostgreSQL vector similarity extension", type: "open-source", url: "https://github.com/pgvector/pgvector", github: "https://github.com/pgvector/pgvector", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["vector-storage"]},
    { id: "llamaparse", name: "LlamaParse", desc: "Document parsing for RAG pipelines", type: "managed", url: "https://www.llamaindex.ai/llamaparse", github: null, directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["retrieval-search"]},
    { id: "repoprompt", name: "RepoPrompt", desc: "macOS app that assembles repo context into structured prompts for LLMs", type: "proprietary", url: "https://repoprompt.com", github: null, directLayers: ["context"], indirectLayers: ["integrations"], yc: null, subcategories: ["retrieval-search"]},

    // ── L08 Integrations ──
    { id: "mcp", name: "MCP", desc: "Model Context Protocol — standard for tool integration", type: "open-source", url: "https://modelcontextprotocol.io", github: "https://github.com/modelcontextprotocol", directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["protocols-standards"]},
    { id: "cursor", name: "Cursor", desc: "AI-first code editor with multi-model support", type: "proprietary", url: "https://cursor.com", github: null, directLayers: ["integrations"], indirectLayers: ["orchestration"], yc: null, subcategories: ["code-dev-tools"]},
    { id: "windsurf", name: "Windsurf", desc: "AI code editor with Cascade agent", type: "proprietary", url: "https://windsurf.com", github: null, directLayers: ["integrations"], indirectLayers: ["orchestration"], yc: null, subcategories: ["code-dev-tools"]},
    { id: "continue-dev", name: "Continue", desc: "Open-source AI coding assistant for VS Code/JetBrains", type: "open-source", url: "https://www.continue.dev", github: "https://github.com/continuedev/continue", directLayers: ["integrations"], indirectLayers: [], yc: "W23", subcategories: ["code-dev-tools"]},
    { id: "aider", name: "Aider", desc: "Terminal-based AI pair programming", type: "open-source", url: "https://aider.chat", github: "https://github.com/paul-gauthier/aider", directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["code-dev-tools"]},
    { id: "openhands", name: "OpenHands", desc: "Open-source AI software development agent", type: "open-source", url: "https://www.all-hands.dev", github: "https://github.com/All-Hands-AI/OpenHands", directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["code-dev-tools"]},
    { id: "zapier-ai", name: "Zapier AI Actions", desc: "Connect AI to 6000+ apps via natural language", type: "managed", url: "https://zapier.com/platform/ai-actions", github: null, directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["connectors"]},
    { id: "sweep-ai", name: "Sweep AI", desc: "GitHub issue to PR automation agent", type: "managed", url: "https://sweep.dev", github: null, directLayers: ["integrations"], indirectLayers: [], yc: "S23", subcategories: ["code-dev-tools"]},
    { id: "middleware", name: "Middleware", desc: "Observability integrations for AI systems", type: "managed", url: "https://middleware.io", github: null, directLayers: ["integrations"], indirectLayers: [], yc: "W23", subcategories: ["connectors"]},

    // ── L09 Eval & Safety ──
    { id: "braintrust", name: "Braintrust", desc: "Eval framework with logging and datasets", type: "managed", url: "https://www.braintrust.dev", github: null, directLayers: ["eval"], indirectLayers: [], yc: "S23", subcategories: ["evaluation"]},
    { id: "langfuse", name: "Langfuse", desc: "Open-source LLM observability and tracing", type: "open-source", url: "https://www.langfuse.com", github: "https://github.com/langfuse/langfuse", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},
    { id: "promptfoo", name: "Promptfoo", desc: "CLI for testing and evaluating prompts", type: "open-source", url: "https://www.promptfoo.dev", github: "https://github.com/promptfoo/promptfoo", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["evaluation"]},
    { id: "langsmith", name: "LangSmith", desc: "LangChain observability and evaluation platform", type: "managed", url: "https://smith.langchain.com", github: null, directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},
    { id: "guardrails-ai", name: "Guardrails AI", desc: "Output validation and guardrail framework", type: "open-source", url: "https://www.guardrailsai.com", github: "https://github.com/guardrails-ai/guardrails", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["guardrails-security"]},
    { id: "nemo-guardrails", name: "NeMo Guardrails", desc: "NVIDIA programmable guardrails toolkit", type: "open-source", url: "https://github.com/NVIDIA/NeMo-Guardrails", github: "https://github.com/NVIDIA/NeMo-Guardrails", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["guardrails-security"]},
    { id: "humanloop", name: "Humanloop", desc: "Evaluation and prompt management platform", type: "managed", url: "https://humanloop.com", github: null, directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["evaluation"]},
    { id: "llama-guard", name: "Llama Guard", desc: "Meta safety classifier for content filtering", type: "open-weight", url: "https://ai.meta.com/blog/purple-llama-project/", github: null, directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["guardrails-security"]},
    { id: "athina-ai", name: "Athina AI", desc: "Production AI monitoring and evaluation", type: "managed", url: "https://athina.ai", github: null, directLayers: ["eval"], indirectLayers: [], yc: "S23", subcategories: ["observability"]},
    { id: "galileo", name: "Galileo", desc: "Data intelligence for LLMs", type: "managed", url: "https://www.rungalileo.io", github: null, directLayers: ["eval"], indirectLayers: [], yc: "W22", subcategories: ["observability"]},
    { id: "freeplay", name: "Freeplay", desc: "Prompt testing and evaluation platform", type: "managed", url: "https://freeplay.ai", github: null, directLayers: ["eval"], indirectLayers: [], yc: "W24", subcategories: ["evaluation"]},
    { id: "hf-evaluate", name: "HuggingFace Evaluate", desc: "Model evaluation metrics library", type: "open-source", url: "https://huggingface.co/docs/evaluate", github: "https://github.com/huggingface/evaluate", directLayers: ["eval", "posttrain"], indirectLayers: [], yc: null, subcategories: ["evaluation", "benchmarking"]},
    { id: "weights-biases", name: "Weights & Biases", desc: "ML experiment tracking and evaluation", type: "managed", url: "https://wandb.ai", github: null, directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},
    { id: "mlflow", name: "MLflow", desc: "Open-source ML lifecycle management", type: "open-source", url: "https://mlflow.org", github: "https://github.com/mlflow/mlflow", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},
    { id: "ragas", name: "RAGAS", desc: "RAG evaluation framework", type: "open-source", url: "https://docs.ragas.io", github: "https://github.com/explodinggradients/ragas", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["evaluation"]},
    { id: "phoenix", name: "Phoenix (Arize)", desc: "LLM observability and evaluation platform", type: "open-source", url: "https://phoenix.arize.com", github: "https://github.com/Arize-ai/phoenix", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},
    { id: "deepeval", name: "DeepEval", desc: "Open-source LLM evaluation framework", type: "open-source", url: "https://docs.confident-ai.com", github: "https://github.com/confident-ai/deepeval", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["evaluation"]},

    // ── L10 Products ──
    { id: "chatgpt", name: "ChatGPT", desc: "General-purpose AI assistant by OpenAI", type: "proprietary", url: "https://chat.openai.com", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "chatbot", subcategories: ["assistants-copilots"]},
    { id: "claude-product", name: "Claude", desc: "AI assistant with long context and tool use", type: "proprietary", url: "https://claude.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "chatbot", subcategories: ["assistants-copilots"]},
    { id: "gemini-product", name: "Gemini", desc: "Google AI assistant, integrated with Workspace", type: "proprietary", url: "https://gemini.google.com", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "chatbot", subcategories: ["assistants-copilots"]},
    { id: "perplexity", name: "Perplexity", desc: "AI search engine with citations", type: "proprietary", url: "https://www.perplexity.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "search", subcategories: ["assistants-copilots"]},
    { id: "harvey", name: "Harvey", desc: "AI for legal professionals", type: "proprietary", url: "https://www.harvey.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "vertical", subcategories: ["vertical-ai"]},
    { id: "abridge", name: "Abridge", desc: "AI medical documentation", type: "proprietary", url: "https://www.abridge.com", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "vertical", subcategories: ["vertical-ai"]},
    { id: "writer", name: "Writer", desc: "Enterprise AI writing platform", type: "proprietary", url: "https://writer.com", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "vertical", subcategories: ["vertical-ai"]},
    { id: "sierra", name: "Sierra", desc: "Conversational AI for customer experience", type: "proprietary", url: "https://www.sierra.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "agent", subcategories: ["autonomous-agents"]},
    { id: "eleven-x", name: "11x", desc: "AI sales development agents", type: "proprietary", url: "https://www.11x.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "agent", subcategories: ["autonomous-agents"]},
    { id: "midjourney", name: "Midjourney", desc: "AI image generation", type: "proprietary", url: "https://midjourney.com", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "creative", subcategories: ["creative-tools"]},
    { id: "runway", name: "Runway", desc: "AI video generation and editing", type: "proprietary", url: "https://runwayml.com", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "creative", subcategories: ["creative-tools"]},
    { id: "jasper", name: "Jasper", desc: "AI marketing content platform", type: "proprietary", url: "https://www.jasper.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "vertical", subcategories: ["vertical-ai"]},
    { id: "copy-ai", name: "Copy.ai", desc: "AI marketing copy generation", type: "proprietary", url: "https://www.copy.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "vertical", subcategories: ["vertical-ai"]},
    { id: "glean", name: "Glean", desc: "Enterprise AI search across all company data", type: "proprietary", url: "https://www.glean.com", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "search", subcategories: ["vertical-ai"]},
    { id: "hebbia", name: "Hebbia", desc: "AI document analysis for enterprises", type: "proprietary", url: "https://www.hebbia.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "vertical", subcategories: ["vertical-ai"]},
    { id: "bland-ai", name: "Bland AI", desc: "AI phone call agents", type: "proprietary", url: "https://www.bland.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: "W24", category: "agent", subcategories: ["autonomous-agents"]},
    { id: "lovable", name: "Lovable", desc: "AI web app builder", type: "proprietary", url: "https://lovable.dev", github: null, directLayers: ["products"], indirectLayers: [], yc: "W24", category: "platform", subcategories: ["creative-tools"]},
    { id: "bolna", name: "Bolna", desc: "Voice AI agents platform", type: "proprietary", url: "https://bolna.dev", github: null, directLayers: ["products"], indirectLayers: [], yc: "W24", category: "agent", subcategories: ["autonomous-agents"]},
    { id: "devrev", name: "DevRev", desc: "AI-powered CRM for product companies", type: "proprietary", url: "https://devrev.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: "W23", category: "vertical", subcategories: ["vertical-ai"]},
    { id: "hf-spaces", name: "HuggingFace Spaces / Gradio", desc: "Demo hosting and UI framework for ML apps", type: "open-source", url: "https://huggingface.co/spaces", github: "https://github.com/gradio-app/gradio", directLayers: ["products"], indirectLayers: [], yc: null, subcategories: ["creative-tools"]},

    // ── Additional Compute ──
    { id: "vast-ai", name: "Vast.ai", desc: "GPU marketplace connecting suppliers and renters at low cost", type: "managed", url: "https://vast.ai", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["gpu-clouds"]},
    { id: "paperspace", name: "Paperspace", desc: "GPU cloud for ML, acquired by DigitalOcean", type: "managed", url: "https://www.paperspace.com", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["gpu-clouds"]},
    { id: "sambanova", name: "SambaNova", desc: "Custom dataflow AI chips and cloud inference", type: "proprietary", url: "https://sambanova.ai", github: null, directLayers: ["compute", "inference"], indirectLayers: [], yc: null, subcategories: ["silicon"]},
    { id: "nebius", name: "Nebius", desc: "Cloud GPU infrastructure (Yandex spinoff)", type: "managed", url: "https://nebius.com", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["gpu-clouds"]},

    // ── Additional Pre-Training ──
    { id: "ai21", name: "AI21 Labs", desc: "Jamba foundation models with Mamba-Transformer architecture", type: "proprietary", url: "https://www.ai21.com", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"]},
    { id: "black-forest-labs", name: "Black Forest Labs", desc: "Flux image generation models, most photorealistic open model", type: "open-source", url: "https://blackforestlabs.ai", github: "https://github.com/black-forest-labs/flux", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"]},
    { id: "inflection", name: "Inflection AI", desc: "Pi personal AI, enterprise foundation models", type: "proprietary", url: "https://inflection.ai", github: null, directLayers: ["pretrain", "products"], indirectLayers: [], yc: null, subcategories: ["foundation-models"]},
    { id: "character-ai", name: "Character.AI", desc: "Conversational AI characters platform", type: "proprietary", url: "https://character.ai", github: null, directLayers: ["pretrain", "products"], indirectLayers: [], yc: null, subcategories: ["foundation-models"]},
    { id: "apple-mlx", name: "Apple MLX", desc: "ML framework optimized for Apple Silicon", type: "open-source", url: "https://ml-explore.github.io/mlx/", github: "https://github.com/ml-explore/mlx", directLayers: ["pretrain", "inference"], indirectLayers: ["compute"], yc: null, subcategories: ["training-frameworks"]},

    // ── Additional Post-Training ──
    { id: "appen", name: "Appen", desc: "Global data annotation with 1M+ contributors", type: "managed", url: "https://appen.com", github: null, directLayers: ["posttrain"], indirectLayers: ["pretrain"], yc: null, subcategories: ["training-data"]},
    { id: "comet-ml", name: "Comet ML", desc: "ML experiment tracking and model monitoring", type: "managed", url: "https://www.comet.com", github: null, directLayers: ["posttrain", "eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},
    { id: "neptune-ai", name: "Neptune.ai", desc: "Experiment tracking for foundation model training", type: "managed", url: "https://neptune.ai", github: null, directLayers: ["posttrain", "eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},

    // ── Additional Inference ──
    { id: "tensorrt-llm", name: "NVIDIA TensorRT-LLM", desc: "GPU-optimized LLM inference with Triton server", type: "open-source", url: "https://github.com/NVIDIA/TensorRT-LLM", github: "https://github.com/NVIDIA/TensorRT-LLM", directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["serving-engines"]},

    // ── Additional Routing ──
    { id: "tensorzero", name: "TensorZero", desc: "Open-source LLM gateway with optimization and experimentation", type: "open-source", url: "https://www.tensorzero.com", github: "https://github.com/tensorzero/tensorzero", directLayers: ["routing"], indirectLayers: [], yc: null, subcategories: ["gateways-proxies"]},

    // ── Additional Orchestration ──
    { id: "dspy", name: "DSPy", desc: "Declarative framework for optimizing LLM pipelines as code", type: "open-source", url: "https://dspy.ai", github: "https://github.com/stanfordnlp/dspy", directLayers: ["orchestration"], indirectLayers: [], yc: null, subcategories: ["workflow-design"]},
    { id: "agno", name: "Agno", desc: "Model-agnostic agent framework with memory and multimodal", type: "open-source", url: "https://github.com/agno-agi/agno", github: "https://github.com/agno-agi/agno", directLayers: ["orchestration"], indirectLayers: [], yc: null, subcategories: ["agent-patterns"]},
    { id: "smolagents", name: "Smolagents", desc: "HuggingFace minimal code-centric agent framework", type: "open-source", url: "https://huggingface.co/docs/smolagents", github: "https://github.com/huggingface/smolagents", directLayers: ["orchestration"], indirectLayers: [], yc: null, subcategories: ["agent-patterns"]},
    { id: "pi-mono", name: "pi-mono", desc: "Full-stack TypeScript monorepo for AI coding agents — inference, routing, orchestration, context, and integrations", type: "open-source", url: "https://github.com/badlogic/pi-mono", github: "https://github.com/badlogic/pi-mono", directLayers: ["orchestration"], indirectLayers: ["inference", "routing", "context", "integrations"], yc: null, layerDetails: { orchestration: "pi-agent-core: plan-execute loops, task decomposition, multi-step coding workflows", inference: "pi-ai: unified inference client across 20+ providers, pi-pods for self-hosted GPU serving", routing: "Cross-provider model handoffs and fallback chains via pi-ai configuration", context: "Session management, context compaction, and persistent memory across agent runs", integrations: "Slack integration, IDE bridges, and tool connectors for coding workflows" }, subcategories: ["agent-patterns"]},
    { id: "anthropic-agent-sdk", name: "Anthropic Agent SDK", desc: "First-party SDK for building multi-step agents with Claude models", type: "open-source", url: "https://docs.anthropic.com/en/docs/agents", github: "https://github.com/anthropics/anthropic-sdk-python", directLayers: ["orchestration"], indirectLayers: ["inference"], yc: null, subcategories: ["agent-patterns"]},
    { id: "openai-agents-api", name: "OpenAI Agents API", desc: "Provider-native agent orchestration with tool use, handoffs, and guardrails", type: "managed", url: "https://platform.openai.com/docs/guides/agents", github: null, directLayers: ["orchestration"], indirectLayers: ["inference"], yc: null, subcategories: ["agent-patterns"]},

    // ── Additional Context / RAG ──
    { id: "nomic", name: "Nomic", desc: "Open-source MoE embedding models with full transparency", type: "open-source", url: "https://www.nomic.ai", github: "https://github.com/nomic-ai", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["embeddings"]},
    { id: "tavily", name: "Tavily", desc: "AI-native search API for agents and RAG pipelines", type: "managed", url: "https://tavily.com", github: null, directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["retrieval-search"]},
    { id: "exa", name: "Exa", desc: "Embeddings-based semantic web search for LLMs", type: "managed", url: "https://exa.ai", github: null, directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["retrieval-search"]},
    { id: "firecrawl", name: "Firecrawl", desc: "Web-to-markdown API for LLM-ready data extraction", type: "open-source", url: "https://www.firecrawl.dev", github: "https://github.com/mendableai/firecrawl", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["retrieval-search"]},
    { id: "crawl4ai", name: "Crawl4AI", desc: "Open-source web crawler optimized for LLM data extraction", type: "open-source", url: "https://github.com/unclecode/crawl4ai", github: "https://github.com/unclecode/crawl4ai", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["retrieval-search"]},
    { id: "unstructured", name: "Unstructured", desc: "Document parsing (PDF, DOCX, images) into LLM-ready data", type: "open-source", url: "https://unstructured.io", github: "https://github.com/Unstructured-IO/unstructured", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["retrieval-search"]},

    // ── Additional Integrations ──
    { id: "github-copilot", name: "GitHub Copilot", desc: "AI code completion and chat in IDEs", type: "managed", url: "https://github.com/features/copilot", github: null, directLayers: ["integrations"], indirectLayers: ["inference"], yc: null, subcategories: ["code-dev-tools"]},
    { id: "sourcegraph-cody", name: "Sourcegraph Cody", desc: "AI coding assistant with full-codebase context", type: "managed", url: "https://sourcegraph.com/cody", github: null, directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["code-dev-tools"]},
    { id: "tabnine", name: "Tabnine", desc: "Privacy-focused AI code completion with on-prem option", type: "managed", url: "https://www.tabnine.com", github: null, directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["code-dev-tools"]},
    { id: "vercel-ai-sdk", name: "Vercel AI SDK", desc: "React/Next.js hooks for streaming LLM responses", type: "open-source", url: "https://sdk.vercel.ai", github: "https://github.com/vercel/ai", directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["connectors"]},
    { id: "streamlit", name: "Streamlit", desc: "Python framework for building data and AI web apps", type: "open-source", url: "https://streamlit.io", github: "https://github.com/streamlit/streamlit", directLayers: ["integrations", "products"], indirectLayers: [], yc: null, subcategories: ["connectors"]},
    { id: "chainlit", name: "Chainlit", desc: "Chat UI framework for LLM applications", type: "open-source", url: "https://chainlit.io", github: "https://github.com/Chainlit/chainlit", directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["connectors"]},

    // ── Additional Eval ──
    { id: "traceloop", name: "Traceloop (OpenLLMetry)", desc: "Vendor-neutral LLM tracing via OpenTelemetry", type: "open-source", url: "https://www.traceloop.com", github: "https://github.com/traceloop/openllmetry", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},
    { id: "lmsys", name: "LMSYS Chatbot Arena", desc: "Crowdsourced LLM evaluation via blind comparisons", type: "open-source", url: "https://chat.lmsys.org", github: "https://github.com/lm-sys/FastChat", directLayers: ["eval", "posttrain"], indirectLayers: [], yc: null, subcategories: ["evaluation", "benchmarking"]},
    { id: "deepchecks", name: "Deepchecks", desc: "ML and LLM validation and testing framework", type: "open-source", url: "https://deepchecks.com", github: "https://github.com/deepchecks/deepchecks", directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["evaluation"]},

    // ── Cloud Provider AI Offerings ──
    { id: "azure-openai", name: "Azure OpenAI Service", desc: "OpenAI models hosted on Azure with enterprise security", type: "managed", url: "https://azure.microsoft.com/en-us/products/ai-services/openai-service", github: null, directLayers: ["inference"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "azure-ai-studio", name: "Azure AI Studio", desc: "Microsoft unified AI development platform", type: "managed", url: "https://ai.azure.com", github: null, directLayers: ["orchestration", "inference"], indirectLayers: ["eval"], yc: null, subcategories: ["provider-apis"]},
    { id: "aws-sagemaker", name: "AWS SageMaker", desc: "End-to-end ML platform for training and deployment", type: "managed", url: "https://aws.amazon.com/sagemaker/", github: null, directLayers: ["posttrain", "inference"], indirectLayers: ["compute"], yc: null, subcategories: ["managed-finetuning"]},
    { id: "aws-q-developer", name: "AWS Q Developer", desc: "Amazon AI coding assistant for AWS and IDEs", type: "managed", url: "https://aws.amazon.com/q/developer/", github: null, directLayers: ["integrations", "products"], indirectLayers: [], yc: null, subcategories: ["code-dev-tools"]},
    { id: "google-ai-studio", name: "Google AI Studio", desc: "Gemini API playground and prototyping tool", type: "free", url: "https://aistudio.google.com", github: null, directLayers: ["inference", "products"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "cloudflare-ai", name: "Cloudflare Workers AI", desc: "Serverless AI inference at the edge", type: "managed", url: "https://ai.cloudflare.com", github: null, directLayers: ["inference"], indirectLayers: ["compute"], yc: null, subcategories: ["provider-apis"]},
    { id: "ibm-watsonx", name: "IBM watsonx", desc: "Enterprise AI platform with Granite models", type: "managed", url: "https://www.ibm.com/watsonx", github: null, directLayers: ["inference", "orchestration"], indirectLayers: ["pretrain"], yc: null, subcategories: ["provider-apis"]},
    { id: "snowflake-cortex", name: "Snowflake Cortex AI", desc: "AI functions and LLM access within Snowflake", type: "managed", url: "https://www.snowflake.com/en/data-cloud/cortex/", github: null, directLayers: ["inference", "context"], indirectLayers: [], yc: null, subcategories: ["provider-apis"]},
    { id: "salesforce-agentforce", name: "Salesforce Agentforce", desc: "AI agents for CRM, sales, and customer service", type: "proprietary", url: "https://www.salesforce.com/agentforce/", github: null, directLayers: ["orchestration", "products"], indirectLayers: [], yc: null, subcategories: ["agent-patterns"]},

    // ── Additional Products ──
    { id: "replit", name: "Replit", desc: "Browser-based IDE with AI Agent for full-stack app building", type: "managed", url: "https://replit.com", github: null, directLayers: ["integrations", "products"], indirectLayers: [], yc: null, category: "platform", subcategories: ["creative-tools"]},
    { id: "bolt-new", name: "Bolt.new", desc: "AI full-stack app builder in the browser", type: "managed", url: "https://bolt.new", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "platform", subcategories: ["creative-tools"]},
    { id: "v0", name: "v0 by Vercel", desc: "AI React/Next.js UI generator from text prompts", type: "managed", url: "https://v0.dev", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "platform", subcategories: ["creative-tools"]},
    { id: "phind", name: "Phind", desc: "AI search engine for developers", type: "free", url: "https://www.phind.com", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "search", subcategories: ["assistants-copilots"]},
    { id: "poe", name: "Poe", desc: "Multi-model AI chat aggregator by Quora", type: "managed", url: "https://poe.com", github: null, directLayers: ["products", "routing"], indirectLayers: [], yc: null, category: "platform", subcategories: ["assistants-copilots"]},
    { id: "grok-product", name: "Grok", desc: "xAI conversational AI with real-time X data", type: "proprietary", url: "https://grok.x.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "chatbot", subcategories: ["assistants-copilots"]},
    { id: "pika", name: "Pika", desc: "AI video generation and editing from text", type: "managed", url: "https://pika.art", github: null, directLayers: ["products", "inference"], indirectLayers: ["pretrain"], yc: null, category: "creative", subcategories: ["creative-tools"]},
    { id: "luma-ai", name: "Luma AI", desc: "3D capture and text-to-video generation", type: "managed", url: "https://lumalabs.ai", github: null, directLayers: ["products", "inference"], indirectLayers: ["pretrain"], yc: null, category: "creative", subcategories: ["creative-tools"]},
    { id: "ideogram", name: "Ideogram", desc: "AI image generation with excellent text rendering", type: "managed", url: "https://ideogram.ai", github: null, directLayers: ["products", "inference"], indirectLayers: ["pretrain"], yc: null, category: "creative", subcategories: ["creative-tools"]},
    { id: "resemble-ai", name: "Resemble AI", desc: "Voice cloning and TTS for enterprise", type: "managed", url: "https://www.resemble.ai", github: null, directLayers: ["inference", "products"], indirectLayers: [], yc: null, category: "creative", subcategories: ["creative-tools"]},
    { id: "palantir-aip", name: "Palantir AIP", desc: "Enterprise AI platform for government and commercial", type: "proprietary", url: "https://www.palantir.com/platforms/aip/", github: null, directLayers: ["products", "orchestration"], indirectLayers: [], yc: null, category: "platform", subcategories: ["vertical-ai"]},

    // ── Cross-cutting ──
    { id: "hf-hub", name: "HuggingFace Hub", desc: "Model and dataset repository (cross-cutting)", type: "open-source", url: "https://huggingface.co", github: "https://github.com/huggingface/huggingface_hub", directLayers: ["pretrain", "posttrain", "inference", "context"], indirectLayers: [], yc: null },

    // ── New: Compute ──
    { id: "oracle-oci-ai", name: "Oracle OCI AI", desc: "GPU superclusters (up to 131K NVIDIA GPUs) for AI training", type: "managed", url: "https://www.oracle.com/ai-infrastructure/", github: null, directLayers: ["compute"], indirectLayers: [], yc: null, subcategories: ["gpu-clouds"]},

    // ── New: Pre-Training ──
    { id: "glm-zhipu", name: "GLM (Zhipu AI)", desc: "GLM series foundation models, Chinese open-weight lab (z.ai)", type: "open-weight", url: "https://www.zhipuai.cn", github: "https://github.com/THUDM", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"]},
    { id: "ibm-granite", name: "IBM Granite", desc: "Open-source enterprise model family (Code, Language, Time Series) under Apache 2.0", type: "open-source", url: "https://www.ibm.com/granite", github: "https://github.com/ibm-granite", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"]},
    { id: "snowflake-arctic", name: "Snowflake Arctic", desc: "Open-source enterprise LLM using Dense MoE architecture", type: "open-source", url: "https://www.snowflake.com/en/data-cloud/arctic/", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"]},
    { id: "gemma", name: "Gemma (Google)", desc: "Open-weight model family from Google, runnable on TPU/GPU", type: "open-weight", url: "https://ai.google.dev/gemma", github: "https://github.com/google-deepmind/gemma", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["foundation-models"]},
    { id: "superannotate", name: "SuperAnnotate", desc: "Semi-automated data annotation platform", type: "managed", url: "https://www.superannotate.com", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-data"]},
    { id: "cleanlab", name: "Cleanlab", desc: "Data quality and label error detection for ML datasets", type: "open-source", url: "https://cleanlab.ai", github: "https://github.com/cleanlab/cleanlab", directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-data"]},
    { id: "gretel-ai", name: "Gretel.ai", desc: "Synthetic data generation for AI training", type: "managed", url: "https://gretel.ai", github: null, directLayers: ["pretrain"], indirectLayers: [], yc: null, subcategories: ["training-data"]},

    // ── New: Routing ──
    { id: "venice-ai", name: "Venice AI", desc: "Privacy-focused AI platform with uncensored model access", type: "managed", url: "https://venice.ai", github: null, directLayers: ["routing"], indirectLayers: ["inference"], yc: null, subcategories: ["gateways-proxies"]},
    { id: "cloudflare-ai-gateway", name: "Cloudflare AI Gateway", desc: "Proxy layer for AI APIs with caching, rate limiting, and fallback routing", type: "managed", url: "https://developers.cloudflare.com/ai-gateway/", github: null, directLayers: ["routing", "inference"], indirectLayers: [], yc: null, subcategories: ["gateways-proxies", "optimization"]},

    // ── New: Orchestration (expanded — this is where most innovation is happening) ──
    { id: "mastra", name: "Mastra", desc: "Open-source TypeScript framework for building AI agents with workflows, RAG, and evals", type: "open-source", url: "https://mastra.ai", github: "https://github.com/mastra-ai/mastra", directLayers: ["orchestration"], indirectLayers: ["context", "eval"], yc: "W25", subcategories: ["agent-patterns"]},
    { id: "browser-use", name: "Browser Use", desc: "Open-source tool enabling web-browsing AI agents to click, type, and navigate", type: "open-source", url: "https://browser-use.com", github: "https://github.com/browser-use/browser-use", directLayers: ["orchestration", "integrations"], indirectLayers: [], yc: "W25", subcategories: ["agent-patterns"]},
    { id: "copilot-studio", name: "Copilot Studio", desc: "Microsoft low-code platform for building and governing enterprise AI agents", type: "managed", url: "https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio", github: null, directLayers: ["orchestration"], indirectLayers: ["products"], yc: null, subcategories: ["workflow-design"]},
    { id: "vertex-agent-engine", name: "Vertex AI Agent Engine", desc: "Google managed service for building and deploying AI agents", type: "managed", url: "https://cloud.google.com/vertex-ai", github: null, directLayers: ["orchestration"], indirectLayers: ["inference"], yc: null, subcategories: ["agent-patterns"]},
    { id: "abundant", name: "Abundant", desc: "Human-in-the-loop teleoperation API for AI agent failures", type: "managed", url: "https://abundant.ai", github: null, directLayers: ["orchestration"], indirectLayers: [], yc: "W25", subcategories: ["human-oversight"]},
    { id: "a1base", name: "A1base", desc: "Infrastructure for AI agents to communicate over WhatsApp, SMS, email, phone", type: "managed", url: "https://a1base.com", github: null, directLayers: ["orchestration", "integrations"], indirectLayers: [], yc: "W25", subcategories: ["connectors"]},
    { id: "pipeshift", name: "Pipeshift", desc: "Modular orchestration platform for deploying and fine-tuning open-source LLMs", type: "managed", url: "https://pipeshift.com", github: null, directLayers: ["orchestration", "posttrain"], indirectLayers: [], yc: "S25", subcategories: ["managed-finetuning"]},
    { id: "dedalus-labs", name: "Dedalus Labs", desc: "Hosts MCP servers with autoscaling and one-click deployment", type: "managed", url: "https://dedaluslabs.com", github: null, directLayers: ["orchestration", "integrations"], indirectLayers: [], yc: "S25", subcategories: ["execution-environments"]},
    { id: "observee", name: "Observee", desc: "Build AI agents with 1000+ MCP integrations, managed OAuth and observability", type: "managed", url: "https://observee.ai", github: null, directLayers: ["orchestration", "integrations"], indirectLayers: ["eval"], yc: "S25", subcategories: ["connectors"]},
    { id: "castari", name: "Castari", desc: "Deploy AI agents in secure, autoscaling sandboxes with MCP connectors", type: "managed", url: "https://castari.com", github: null, directLayers: ["orchestration"], indirectLayers: ["integrations"], yc: "S25", subcategories: ["execution-environments"]},
    { id: "kernel-ai", name: "Kernel (AI infra)", desc: "Open-source unikernel infra for AI agents to access the internet with sub-150ms cold starts", type: "open-source", url: "https://github.com/kernelai", github: null, directLayers: ["orchestration"], indirectLayers: ["integrations"], yc: "S25", subcategories: ["execution-environments"]},

    // ── New: Context ──
    { id: "qmd", name: "QMD", desc: "Open-source knowledge management and querying for AI memory systems", type: "open-source", url: "https://github.com/qmd-lab", github: "https://github.com/qmd-lab", directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["memory-systems"]},
    { id: "cloudflare-vectorize", name: "Cloudflare Vectorize", desc: "Serverless vector database for RAG at the edge", type: "managed", url: "https://developers.cloudflare.com/vectorize/", github: null, directLayers: ["context"], indirectLayers: [], yc: null, subcategories: ["vector-storage"]},
    { id: "zeroentropy", name: "ZeroEntropy", desc: "AI search re-ranker ensuring LLMs retrieve the most relevant information", type: "managed", url: "https://zeroentropy.dev", github: null, directLayers: ["context"], indirectLayers: [], yc: "S25", subcategories: ["retrieval-search"]},
    { id: "morphik", name: "Morphik", desc: "Open-source document search for LLMs with unified knowledge storage API", type: "open-source", url: "https://morphik.ai", github: null, directLayers: ["context"], indirectLayers: [], yc: "S25", subcategories: ["retrieval-search"]},
    { id: "helixdb", name: "HelixDB", desc: "Unified graph-vector database for faster and more relevant AI context", type: "open-source", url: "https://helixdb.com", github: null, directLayers: ["context"], indirectLayers: [], yc: "S25", subcategories: ["vector-storage"]},
    { id: "quivr", name: "Quivr", desc: "Open-source RAG framework and chat interface for enterprise tools", type: "open-source", url: "https://quivr.com", github: "https://github.com/QuivrHQ/quivr", directLayers: ["context"], indirectLayers: [], yc: "W24", subcategories: ["retrieval-search"]},
    { id: "context7", name: "Context7", desc: "MCP server that injects up-to-date library documentation into LLM prompts", type: "open-source", url: "https://context7.com", github: "https://github.com/upstash/context7", directLayers: ["context"], indirectLayers: ["integrations"], yc: null, subcategories: ["retrieval-search"]},

    // ── New: Integrations ──
    { id: "greptile", name: "Greptile", desc: "AI code review agent with full codebase context", type: "managed", url: "https://greptile.com", github: null, directLayers: ["integrations", "eval"], indirectLayers: [], yc: "W24", subcategories: ["code-dev-tools"]},
    { id: "wordware", name: "Wordware", desc: "Web-hosted IDE for building AI agents using natural language", type: "managed", url: "https://wordware.ai", github: null, directLayers: ["integrations", "orchestration"], indirectLayers: [], yc: "S24", subcategories: ["code-dev-tools"]},
    { id: "nozomio", name: "Nozomio", desc: "Context augmentation layers for AI coding agents", type: "managed", url: "https://nozomio.com", github: null, directLayers: ["integrations", "context"], indirectLayers: [], yc: "S25", subcategories: ["code-dev-tools"]},
    { id: "supermaven", name: "Supermaven", desc: "Ultra-fast AI code completion with 1M token context window", type: "proprietary", url: "https://supermaven.com", github: null, directLayers: ["integrations"], indirectLayers: [], yc: null, subcategories: ["code-dev-tools"]},

    // ── New: Eval & Safety ──
    { id: "laminar", name: "Laminar", desc: "Open-source observability for AI agents — traces, replays, anomaly detection", type: "open-source", url: "https://www.laminarlabs.com", github: "https://github.com/lmnr-ai/lmnr", directLayers: ["eval"], indirectLayers: [], yc: "S24", subcategories: ["observability"]},
    { id: "maihem", name: "Maihem", desc: "AI agents that test and evaluate chatbots and voicebots", type: "managed", url: "https://maihem.ai", github: null, directLayers: ["eval"], indirectLayers: [], yc: "W24", subcategories: ["evaluation"]},
    { id: "lucidic", name: "Lucidic", desc: "Debug, test, and evaluate AI agents in production with traces and failure grouping", type: "managed", url: "https://lucidic.ai", github: null, directLayers: ["eval"], indirectLayers: [], yc: "W25", subcategories: ["observability"]},
    { id: "salus-ai", name: "Salus", desc: "Runtime API wrapper that checks AI agent actions and blocks incorrect ones", type: "managed", url: "https://salus.ai", github: null, directLayers: ["eval"], indirectLayers: [], yc: "S25", subcategories: ["guardrails-security"]},
    { id: "arthur-ai", name: "Arthur AI", desc: "AI model monitoring, bias detection, and governance platform", type: "managed", url: "https://arthur.ai", github: null, directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["observability"]},
    { id: "lakera", name: "Lakera", desc: "AI security — prompt injection detection and LLM firewalls", type: "managed", url: "https://www.lakera.ai", github: null, directLayers: ["eval"], indirectLayers: [], yc: null, subcategories: ["guardrails-security"]},
    { id: "roborev", name: "RoboRev", desc: "CLI daemon that continuously reviews AI-agent commits via git hooks", type: "open-source", url: "https://www.roborev.io", github: null, directLayers: ["eval"], indirectLayers: ["integrations"], yc: null, subcategories: ["evaluation"]},

    // ── New: Products ──
    { id: "le-chat", name: "Le Chat", desc: "Mistral AI assistant with Deep Research, voice, MCP connectors", type: "proprietary", url: "https://mistral.ai/products/le-chat", github: null, directLayers: ["products"], indirectLayers: ["integrations"], yc: null, category: "chatbot", subcategories: ["assistants-copilots"]},
    { id: "kiro", name: "Kiro", desc: "AWS spec-driven agentic IDE (VS Code fork) that turns prompts into code", type: "proprietary", url: "https://kiro.dev", github: null, directLayers: ["products", "integrations"], indirectLayers: [], yc: null, category: "copilot", subcategories: ["autonomous-agents"]},
    { id: "m365-copilot", name: "Microsoft 365 Copilot", desc: "AI assistant embedded in Word, Excel, PowerPoint, Outlook, Teams", type: "proprietary", url: "https://www.microsoft.com/en-us/microsoft-365/copilot", github: null, directLayers: ["products"], indirectLayers: ["orchestration"], yc: null, category: "copilot", subcategories: ["assistants-copilots"]},
    { id: "apple-intelligence", name: "Apple Intelligence", desc: "System-level AI suite across Apple devices — summarization, writing, Siri", type: "proprietary", url: "https://developer.apple.com/apple-intelligence/", github: null, directLayers: ["products"], indirectLayers: ["inference"], yc: null, category: "copilot", subcategories: ["assistants-copilots"]},
    { id: "character-ai-product", name: "Character.AI", desc: "Platform for creating and chatting with persistent AI characters", type: "proprietary", url: "https://character.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "chatbot", subcategories: ["assistants-copilots"]},
    { id: "pi-ai", name: "Pi", desc: "Emotionally intelligent personal AI assistant by Inflection AI", type: "proprietary", url: "https://pi.ai", github: null, directLayers: ["products"], indirectLayers: [], yc: null, category: "chatbot", subcategories: ["assistants-copilots"]},
    { id: "github-copilot-product", name: "GitHub Copilot", desc: "AI pair programmer with code completion, agent mode, and Copilot Workspace", type: "managed", url: "https://github.com/features/copilot", github: null, directLayers: ["products", "integrations"], indirectLayers: ["orchestration", "inference"], yc: null, category: "copilot", subcategories: ["assistants-copilots"]}
  ]
};

const VC_LAYER_IMPACT = {
  compute: "cost, throughput, and the hardware constraints every higher layer inherits",
  pretrain: "what model capabilities exist in the first place and what limitations they carry forward",
  posttrain: "how base models become instruction-following, domain-tuned, or safer for a concrete task",
  inference: "runtime cost, latency, deployment shape, and the practical performance users feel",
  routing: "cost, latency, resilience, and how much vendor lock-in the stack accumulates",
  orchestration: "whether AI work is a one-shot prompt or a controlled multi-step system",
  context: "retrieval quality, memory durability, and how much relevant information the model actually sees",
  integrations: "what the model can touch outside itself and which actions become possible in production",
  eval: "trust, regression control, and whether failures are caught before they compound",
  products: "the visible user experience and where infrastructure becomes business value"
};

const VC_LAYER_ROLE = {
  compute: "supplies the infrastructure capacity the rest of the stack depends on",
  pretrain: "creates base models, training assets, or model-building primitives",
  posttrain: "adapts and aligns base models after pre-training",
  inference: "serves model capability at runtime",
  routing: "decides which model handles which request and under what fallback rules",
  orchestration: "coordinates multi-step work, agent state, or workflow control",
  context: "shapes what knowledge, memory, and retrieved information reaches the model",
  integrations: "connects the model to files, APIs, IDEs, databases, and operational tools",
  eval: "tests, observes, constrains, or governs model behavior",
  products: "acts as an end-user-facing application layer rather than hidden infrastructure"
};

const VC_TOOL_NARRATIVES = {
  "langchain": {
    what: "LangChain is an application framework for building LLM workflows and agents. Teams use it to compose prompts, tools, state, retrieval, and control flow into repeatable pipelines instead of manually wiring each step from scratch.",
    impact: "Its impact is mostly on orchestration discipline. It changes whether an AI feature remains a loose prompt chain or becomes a versioned workflow with explicit state, retries, and tool boundaries.",
    role: "In this map, LangChain sits primarily in orchestration and touches context because it often becomes the glue between agent control flow and retrieval or memory components.",
    layerDetails: {
      orchestration: "LangChain's main job is workflow control: chaining steps, managing state, invoking tools, and coordinating multi-step agent behavior.",
      context: "It frequently mediates retrieval and memory, but it is usually the coordinator around context systems rather than the durable memory store itself."
    }
  },
  "llamaindex": {
    what: "LlamaIndex is a framework for connecting external knowledge to LLM applications. It helps teams turn documents, databases, and APIs into structured retrieval pipelines the model can query at runtime.",
    impact: "Its impact is on both orchestration and context quality. It changes how much of a system's behavior comes from clean retrieval and knowledge shaping rather than ever-longer prompts.",
    role: "In this map, LlamaIndex lives at the boundary between orchestration and context: it structures the retrieval layer, then plugs that layer into an application or agent workflow.",
    layerDetails: {
      orchestration: "It organizes how retrieval, querying, and response generation are sequenced inside an application workflow.",
      context: "Its strongest role is shaping runtime knowledge access: indexing data, retrieving the right material, and packaging it into model-ready context."
    }
  },
  "claude-code": {
    what: "Claude Code is Anthropic's coding agent interface. It combines model access, repo reading, terminal actions, tool use, and iterative task execution inside a developer workflow.",
    impact: "Its impact is that coding moves from single completions to an agent loop that can inspect a codebase, make changes, run commands, and keep state across a task. That changes both developer leverage and review risk.",
    role: "In this map, Claude Code spans orchestration, integrations, context, and inference. It is not only a model endpoint; it is a working runtime for code tasks.",
    layerDetails: {
      orchestration: "The core value is the agent loop: plan, inspect files, execute changes, run commands, and iterate toward completion.",
      integrations: "It matters here because the agent can work through files, terminals, git, and optional MCP-connected tools instead of only producing text.",
      inference: "Its execution loop still depends on Claude models for reasoning and code generation, so model capability and cost remain foundational.",
      context: "It builds task context from repository files, local instructions, and ongoing execution state, which is why context quality directly affects output quality.",
      eval: "Validation appears as command output, test runs, and review checkpoints rather than a separate eval platform, but it still functions as a lightweight quality gate."
    }
  },
  "openai-codex": {
    what: "OpenAI Codex is a cloud coding agent that can operate over a task in a managed execution environment rather than acting as a pure autocomplete endpoint.",
    impact: "Its impact is on task automation depth. It moves coding assistance from local suggestion generation toward remote task execution, which changes how teams think about sandboxing, review, and trust boundaries.",
    role: "In this map, Codex belongs mainly to orchestration and integrations, with context and inference underneath it. It is a control surface for software work, not just a model name.",
    layerDetails: {
      orchestration: "Its main role is to execute multi-step coding tasks under a managed agent loop instead of returning a single answer.",
      integrations: "It matters here because the coding workflow depends on file access, command execution, and a contained runtime environment.",
      inference: "The agent loop still relies on OpenAI models to reason about the codebase and produce changes.",
      context: "Task quality depends on how well the agent reads repository structure, instructions, and prior task state."
    }
  },
  "haystack": {
    what: "Haystack is an open-source framework for retrieval pipelines, question answering, and agent-like NLP workflows. It is often used when teams want explicit pipeline control around search, ranking, and generation.",
    impact: "Its impact is on retrieval reliability. It helps teams treat search, document parsing, ranking, and answer generation as a pipeline that can be tuned and evaluated rather than a black-box prompt.",
    role: "In this map, Haystack sits across orchestration and context because it gives structure to how knowledge is retrieved and then used inside an application workflow.",
    layerDetails: {
      orchestration: "Haystack contributes workflow structure around retrieval, ranking, prompting, and response assembly.",
      context: "It is directly relevant to context because it determines which external documents become available to the model and in what form."
    }
  },
  "openclaw": {
    what: "OpenClaw is an open-source agent runtime and delivery layer. It combines model access, memory, skills, tools, and user-facing messaging channels so one system can run persistent assistants rather than isolated prompt sessions.",
    impact: "Its impact is that agent behavior becomes operational: persistent memory, reusable skills, cross-channel interaction, and auditable tool use all live in one place. That is a big shift from demo-grade chatbots to long-running assistants or internal operators.",
    role: "In this map, OpenClaw spans orchestration, context, integrations, and products. It is the kind of system where control flow, memory, tools, and end-user interaction meet in one runtime.",
    layerDetails: {
      orchestration: "OpenClaw's orchestration role is to run agent loops over time: select models, invoke skills, manage multi-step tasks, and keep the workflow moving across turns.",
      context: "Its context role is persistent memory: conversations, knowledge files, and reusable state that survive beyond a single request.",
      integrations: "It matters here because the agent becomes useful only when it can call tools and speak through channels such as Slack, Telegram, Discord, or MCP-connected systems.",
      products: "OpenClaw also behaves like a product layer because users meet the system through chat surfaces and persistent assistants, not only through APIs.",
      routing: "When multiple models or fallbacks are configured, OpenClaw also participates in routing decisions about which model should handle which kind of task.",
      eval: "Audit logs, guardrails, and runtime checks influence whether the agent can be trusted in production, even if OpenClaw is not primarily an eval platform."
    }
  },
  "gsd-v1": {
    what: "GSD (Get Shit Done) v1 is a collection of markdown prompt templates installed into Claude Code's ~/.claude/commands/ directory. It imposes a structured workflow — discuss, plan, execute, review — on top of Claude Code's existing agent loop.",
    impact: "Its impact is on workflow discipline. It changes whether a Claude Code session is a freeform conversation or a structured project execution with roadmaps, task decomposition, and checkpoint reviews. The limitation is that it has no control over context windows, sessions, or crash recovery — it asks the LLM to follow instructions and hopes for the best.",
    role: "In this map, GSD v1 sits in orchestration and context. It is a prompt-layer overlay on Claude Code, not a standalone runtime. It adds workflow structure but inherits all of Claude Code's constraints.",
    layerDetails: {
      orchestration: "GSD v1 contributes workflow templates that structure coding sessions into phases. It relies entirely on the LLM reading and following the prompts correctly.",
      context: "Its prompt templates carry project state — roadmaps, decisions, task plans — into the context window. But it cannot manage context programmatically: the window fills up and quality degrades over long sessions.",
      integrations: "GSD v1 adds no new tool surface. It depends on Claude Code's file system, terminal, and git access for all actions."
    }
  },
  "gsd-2": {
    what: "GSD 2 is a standalone CLI coding agent built on the Pi SDK. It decomposes projects into Milestone → Slice → Task, then executes each task in a fresh 200k-token context window with pre-loaded context. It manages git branches, tracks costs, detects stuck loops, recovers from crashes, and reassesses roadmaps — all programmatically rather than relying on LLM self-direction.",
    impact: "Its impact is on autonomous project execution. It changes coding agents from interactive assistants into systems that can build entire projects unattended. The fresh-session-per-task design eliminates context degradation, and the file-driven state machine means crashes are recoverable and progress is inspectable.",
    role: "In this map, GSD 2 spans orchestration, context, integrations, and eval. It is a full execution engine where state management, context injection, tool integration, and quality verification are all handled deterministically in TypeScript rather than delegated to the LLM.",
    layerDetails: {
      orchestration: "The core value: a TypeScript state machine reads .gsd/ files on disk, determines the next unit of work, creates a fresh agent session, and injects a focused prompt. Stuck detection, timeout supervision, adaptive replanning, and budget enforcement are all deterministic code, not LLM behavior.",
      context: "GSD 2's context engineering is its biggest differentiator. Each dispatch prompt pre-inlines task plans, prior task summaries, dependency boundaries, slice verification criteria, and the decisions register. The LLM starts with everything it needs instead of spending tool calls on orientation.",
      integrations: "Programmatic git strategy (branch-per-slice, auto-commit, squash merge), subagent spawning for parallel work, Playwright browser verification, Brave Search for web research, and Context7 for up-to-date library documentation.",
      eval: "A per-unit metrics ledger tracks tokens and cost by phase, slice, and model. Budget ceilings pause auto-mode before overspending. Observability validators check boundary conditions between phases. Must-have verification ensures tasks produce their required artifacts.",
      inference: "GSD 2 is model-agnostic via the Pi SDK, supporting 20+ providers. Per-phase model selection lets teams use expensive models for planning and cheaper models for execution.",
      routing: "Multi-model preferences enable automatic model switching at dispatch time based on the workflow phase."
    }
  },
  "pinecone": {
    what: "Pinecone is a managed vector database built for semantic retrieval workloads. Teams use it to store embeddings and query for similar items quickly at production scale.",
    impact: "Its impact is on retrieval performance and operational simplicity. Choosing Pinecone changes how hard it is to run a context layer reliably, especially when teams want managed scaling instead of self-hosting search infrastructure.",
    role: "In this map, Pinecone sits squarely in the context layer. Its job is not to create memory by itself, but to serve as a fast retrieval substrate that helps decide which stored knowledge reaches the model at runtime.",
    layerDetails: {
      context: "Pinecone's role is vector retrieval infrastructure: storing embeddings, serving nearest-neighbor search, and making external knowledge available during inference."
    }
  },
  "qdrant": {
    what: "Qdrant is an open-source vector search engine with a strong developer focus and a reputation for practical production retrieval.",
    impact: "Its impact is on retrieval control and ownership. Teams often choose it when they want a first-class vector layer without giving up the option to self-host, customize, or keep the context system close to their data.",
    role: "In this map, Qdrant is a context-layer primitive. It does not decide what to ask the model, but it strongly affects which documents, memories, or entities are eligible to become context.",
    layerDetails: {
      context: "Qdrant's role is to store and retrieve semantically similar items so agents and applications can inject the most relevant external knowledge at runtime."
    }
  },
  "obsidian": {
    what: "Obsidian is a local-first knowledge workspace built on plain markdown files. It is not an AI stack by itself; it is a human-readable and durable memory surface that can feed later retrieval, summarization, and context assembly.",
    impact: "Its impact is on ownership and durability. When teams keep notes, decisions, research, and operating knowledge in a local markdown graph, they avoid trapping memory inside a proprietary SaaS workflow and make that memory easier to audit or repurpose.",
    role: "In this map, Obsidian belongs in the context layer because it improves the quality and portability of durable knowledge. It does not orchestrate agents; it gives orchestration systems better raw material to work with.",
    layerDetails: {
      context: "Obsidian functions as a human-maintained memory base: decision records, linked notes, and markdown knowledge that can later be indexed, retrieved, or compressed into model context."
    }
  },
  "notion": {
    what: "Notion is a hosted workspace for documents, project information, wikis, and lightweight databases with AI features layered on top.",
    impact: "Its impact is that a large amount of organizational knowledge and process often ends up inside it. That makes it important to the context layer even when it is not a purpose-built retrieval system.",
    role: "In this map, Notion is context infrastructure by position in the workflow: it often holds the knowledge that retrieval systems, copilots, or agents later depend on.",
    layerDetails: {
      context: "Notion's role is as a source system for organizational knowledge: docs, roadmaps, meeting notes, and structured pages that can be retrieved or synchronized into AI workflows."
    }
  },
  "mem": {
    what: "Mem is an AI-native knowledge base designed to make notes and organizational memory easier to search, connect, and resurface.",
    impact: "Its impact is on personal and team memory behavior. It changes whether important information stays trapped in scattered notes or becomes something that can be surfaced and reused in downstream AI workflows.",
    role: "In this map, Mem is a context-layer product. It sits closer to end-user memory management than a vector database does, but it still matters because memory quality determines context quality.",
    layerDetails: {
      context: "Mem's role is to keep human knowledge persistent and retrievable so that decisions, notes, and prior work can become usable runtime context later."
    }
  },
  "pgvector": {
    what: "pgvector is a PostgreSQL extension that adds vector similarity search to a familiar relational database. It is a practical choice when teams want retrieval without introducing a separate vector-only datastore.",
    impact: "Its impact is architectural simplification. It lets teams keep more of the context layer inside an existing Postgres stack, which can lower operational complexity and improve adoption for smaller or more conventional systems.",
    role: "In this map, pgvector belongs in the context layer because it powers semantic retrieval. Its importance is less about novelty and more about making memory and search easier to operationalize in systems that already trust Postgres.",
    layerDetails: {
      context: "pgvector's role is to make embeddings searchable inside Postgres so applications can mix structured data and semantic retrieval in one persistence layer."
    }
  },
  "mcp": {
    what: "MCP, the Model Context Protocol, is a protocol for exposing tools, resources, and prompts to AI systems through a shared interface.",
    impact: "Its impact is on integration portability. When adopted well, it reduces bespoke tool wiring and makes it easier for multiple agent runtimes or clients to talk to the same capabilities.",
    role: "In this map, MCP belongs in integrations because it standardizes how models and agents discover and invoke external tools. It is an adapter layer, not the foundation of the whole architecture.",
    layerDetails: {
      integrations: "MCP's role is to standardize the contract between an AI runtime and external capabilities such as files, APIs, databases, or application-specific tools."
    }
  },
  "context7": {
    what: "Context7 is an MCP server that retrieves current, version-specific library documentation and injects it into LLM prompts. It solves the problem of models hallucinating outdated or nonexistent APIs by providing real documentation as context at query time.",
    impact: "Its impact is on context quality for code generation. When an LLM has actual current API documentation instead of stale training data, code suggestions are more accurate and require less manual correction.",
    role: "In this map, Context7 sits in the context layer because its primary job is documentation retrieval — fetching the right knowledge and making it available in the prompt. It touches integrations indirectly because it delivers this capability through the MCP protocol.",
    layerDetails: {
      context: "Context7 retrieves version-specific library documentation and injects it into the model's context window, replacing the need for the model to rely on potentially outdated training knowledge.",
      integrations: "Context7 is delivered as an MCP server, so any MCP-compatible client (Cursor, Claude Code, etc.) can use it without custom integration code."
    }
  },
  "qmd": {
    what: "QMD is an open-source knowledge and query system aimed at durable AI memory. It is designed around the idea that memory should remain inspectable, structured, and queryable outside a single chat transcript.",
    impact: "Its impact is on memory quality and recall discipline. It helps teams separate durable knowledge from volatile conversation state, which is one of the most important differences between a reliable context system and a bloated prompt history.",
    role: "In this map, QMD sits in the context layer as a memory architecture component. It matters when teams want AI memory to behave more like a governed knowledge system than a pile of chat logs.",
    layerDetails: {
      context: "QMD's role is durable memory management: storing knowledge in a structured way so later retrieval and context assembly are deliberate, queryable, and auditable."
    }
  }
};

function vcJoinList(items) {
  if (items.length <= 1) return items[0] || "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function vcEnsureSentence(text) {
  if (!text) return "";
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function vcLayerLabel(id) {
  const layer = window.VC_DATA.layers.find(item => item.id === id);
  return layer ? `L${layer.index} ${layer.label}` : id;
}

function vcDefaultImpact(tool) {
  const impacts = [...new Set(tool.directLayers.map(layerId => VC_LAYER_IMPACT[layerId]).filter(Boolean))];
  if (!impacts.length) return "";
  return `Its impact is mainly on ${vcJoinList(impacts)}.`;
}

function vcDefaultRole(tool) {
  const direct = tool.directLayers.map(vcLayerLabel);
  const indirect = tool.indirectLayers.map(vcLayerLabel);
  if (direct.length && indirect.length) {
    return `${tool.name} sits primarily in ${vcJoinList(direct)} and also touches ${vcJoinList(indirect)}. In practice, that means it helps shape more than one part of the stack rather than fitting into a single isolated box.`;
  }
  if (direct.length) {
    return `${tool.name} sits primarily in ${vcJoinList(direct)} because it ${vcJoinList(tool.directLayers.map(layerId => VC_LAYER_ROLE[layerId]).filter(Boolean))}.`;
  }
  return "";
}

function vcDefaultLayerDetail(tool, layerId, isDirect) {
  const role = VC_LAYER_ROLE[layerId];
  if (!role) return null;
  if (isDirect) {
    return `${tool.name} is relevant here because it ${role}.`;
  }
  return `${tool.name} also touches this layer because teams often use it alongside components that ${role}.`;
}

function vcEnrichTool(tool) {
  const narrative = VC_TOOL_NARRATIVES[tool.id] || {};
  const directLayers = tool.directLayers || [];
  const indirectLayers = tool.indirectLayers || [];
  const autoLayerDetails = {};

  directLayers.forEach(layerId => {
    autoLayerDetails[layerId] = vcDefaultLayerDetail(tool, layerId, true);
  });
  indirectLayers.forEach(layerId => {
    autoLayerDetails[layerId] = vcDefaultLayerDetail(tool, layerId, false);
  });

  return {
    ...tool,
    ...narrative,
    what: vcEnsureSentence(narrative.what || tool.what || tool.desc),
    impact: vcEnsureSentence(narrative.impact || tool.impact || vcDefaultImpact(tool)),
    role: vcEnsureSentence(narrative.role || tool.role || vcDefaultRole(tool)),
    layerDetails: {
      ...autoLayerDetails,
      ...(tool.layerDetails || {}),
      ...(narrative.layerDetails || {})
    }
  };
}

window.VC_DATA.tools = window.VC_DATA.tools.map(vcEnrichTool);
