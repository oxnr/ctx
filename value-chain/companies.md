# AI Value Chain - Company Catalog

Generated from `value-chain/data.js`. Do not hand-edit; run `node scripts/render-companies-catalog.mjs --write`.

## Layer 01 - Compute

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| NVIDIA | GPU hardware (H100, B200, GB200), CUDA ecosystem | proprietary | [nvidia.com](https://www.nvidia.com) | - |
| AMD | MI300X GPUs, ROCm software stack | proprietary | [amd.com](https://www.amd.com/en/graphics/instinct) | - |
| Google TPU | Custom AI accelerators (TPU v5e, Trillium) | proprietary | [cloud.google.com](https://cloud.google.com/tpu) | - |
| AWS Trainium | Custom training/inference chips (Trainium2, Inferentia) | managed | [aws.amazon.com](https://aws.amazon.com/machine-learning/trainium/) | - |
| CoreWeave | GPU cloud specialized for AI workloads | managed | [coreweave.com](https://www.coreweave.com) | - |
| Lambda | GPU cloud and on-prem clusters for training | managed | [lambdalabs.com](https://lambdalabs.com) | - |
| Modal | Serverless GPU compute | managed | [modal.com](https://modal.com) | W23 |
| Cerebras | Wafer-scale chips for training and inference | proprietary | [cerebras.net](https://www.cerebras.net) | - |
| RunPod | GPU cloud marketplace | managed | [runpod.io](https://www.runpod.io) | - |
| Brev.dev | GPU dev environments | managed | [brev.dev](https://brev.dev) | W22 |
| Together AI | GPU cloud, fine-tuning API, and fast inference | managed | [together.ai](https://www.together.ai) | - |
| Groq | LPU hardware and ultra-fast inference API | managed | [groq.com](https://groq.com) | - |
| Databricks | Unified analytics with compute, fine-tuning, and RAG | proprietary | [databricks.com](https://www.databricks.com) | - |
| HuggingFace Accelerate | Distributed training abstraction library | open-source | [huggingface/accelerate](https://github.com/huggingface/accelerate) | - |
| Vast.ai | GPU marketplace connecting suppliers and renters at low cost | managed | [vast.ai](https://vast.ai) | - |
| Paperspace | GPU cloud for ML, acquired by DigitalOcean | managed | [paperspace.com](https://www.paperspace.com) | - |
| SambaNova | Custom dataflow AI chips and cloud inference | proprietary | [sambanova.ai](https://sambanova.ai) | - |
| Nebius | Cloud GPU infrastructure (Yandex spinoff) | managed | [nebius.com](https://nebius.com) | - |
| Oracle OCI AI | GPU superclusters (up to 131K NVIDIA GPUs) for AI training | managed | [oracle.com](https://www.oracle.com/ai-infrastructure/) | - |
| AutoKernel | Autonomous GPU kernel optimization via edit-benchmark-iterate loops | open-source | [RightNow-AI/autokernel](https://github.com/RightNow-AI/autokernel) | - |
| KernelAgent | Multi-agent GPU kernel optimization with hardware profiling feedback | open-source | [pytorch.org](https://pytorch.org/blog/kernelagent-hardware-guided-gpu-kernel-optimization-via-multi-agent-orchestration/) | - |

## Layer 02 - Pre-Training

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| OpenAI | GPT series (GPT-4, GPT-5), closed-weight frontier models | proprietary | [openai.com](https://openai.com) | - |
| Anthropic | Claude series (Opus, Sonnet, Haiku), safety-focused | proprietary | [anthropic.com](https://www.anthropic.com) | - |
| Google DeepMind | Gemini series, PaLM, custom TPU training | proprietary | [deepmind.google](https://deepmind.google) | - |
| Meta AI | Llama series, largest open-weight model family | open-weight | [meta-llama/llama](https://github.com/meta-llama/llama) | - |
| Mistral | Mistral, Mixtral (MoE), European open-weight lab | open-weight | [github.com](https://github.com/mistralai) | - |
| xAI | Grok model family for reasoning, code, voice, images, and video | proprietary | [x.ai](https://x.ai) | - |
| DeepSeek | DeepSeek-V3, R1 reasoning models, high efficiency | open-weight | [github.com](https://github.com/deepseek-ai) | - |
| Qwen (Alibaba) | Qwen series, strong multilingual open models | open-weight | [github.com](https://github.com/QwenLM) | - |
| Nemotron-Cascade 2 | NVIDIA 30B MoE (3B active) achieving IMO/IOI/ICPC gold via Cascade RL (domain-sequential RL stages) + Multi-Domain On-Policy Distillation (MOPD) consolidating specialist checkpoints into one model | open-weight | [research.nvidia.com](https://research.nvidia.com/labs/nemotron/) | - |
| Qwen3-Coder | Alibaba's agentic coding model family — flagship 480B MoE with 35B active parameters, 256K native context, 1M extrapolated context, and long-horizon agent RL on 20K parallel environments | open-weight | [QwenLM/Qwen3-Coder](https://github.com/QwenLM/Qwen3-Coder) | - |
| MiniMax | Open-weight MoE models (M1, M2, M2.5) with linear attention, multimodal API platform (image/video/TTS/music generation) | open-weight | [github.com](https://github.com/MiniMax-AI) | - |
| Scale AI | Data labeling and curation for training | managed | [scale.com](https://scale.com) | S16 |
| FineWeb | Open pre-training dataset (15T tokens, curated) | open-source | [huggingface.co](https://huggingface.co/spaces/HuggingFaceFW/blogpost-fineweb-v1) | - |
| Labelbox | Training data platform for labeling and curation | managed | [labelbox.com](https://labelbox.com) | - |
| Snorkel AI | Programmatic data labeling at scale | managed | [snorkel.ai](https://snorkel.ai) | - |
| Argilla | Open-source data curation and annotation | open-source | [argilla-io/argilla](https://github.com/argilla-io/argilla) | - |
| nanoGPT | Minimal GPT training codebase by Karpathy | open-source | [karpathy/nanoGPT](https://github.com/karpathy/nanoGPT) | - |
| Stability AI | Stable Diffusion, open image/video generation models | open-weight | [github.com](https://github.com/Stability-AI) | - |
| Sakana AI | Nature-inspired AI, evolutionary model merging | open-source | [github.com](https://github.com/SakanaAI) | - |
| Cohere | Enterprise NLP, embedding models, and Rerank API | proprietary | [cohere.com](https://cohere.com) | - |
| HuggingFace Transformers | Model architecture library and training loops | open-source | [huggingface/transformers](https://github.com/huggingface/transformers) | - |
| HuggingFace Datasets | Training data loading and processing library | open-source | [huggingface/datasets](https://github.com/huggingface/datasets) | - |
| HuggingFace Tokenizers | Fast tokenization library (Rust-backed) | open-source | [huggingface/tokenizers](https://github.com/huggingface/tokenizers) | - |
| HuggingFace Diffusers | Image and video diffusion model library | open-source | [huggingface/diffusers](https://github.com/huggingface/diffusers) | - |
| AI21 Labs | Jamba foundation models with Mamba-Transformer architecture | proprietary | [ai21.com](https://www.ai21.com) | - |
| Black Forest Labs | Flux image generation models, most photorealistic open model | open-source | [black-forest-labs/flux](https://github.com/black-forest-labs/flux) | - |
| Inflection AI | Pi personal AI, enterprise foundation models | proprietary | [inflection.ai](https://inflection.ai) | - |
| Character.AI | Conversational AI characters platform | proprietary | [character.ai](https://character.ai) | - |
| Apple MLX | ML framework optimized for Apple Silicon | open-source | [ml-explore/mlx](https://github.com/ml-explore/mlx) | - |
| HuggingFace Hub | Model and dataset repository (cross-cutting) | open-source | [huggingface/huggingface_hub](https://github.com/huggingface/huggingface_hub) | - |
| GLM (Zhipu AI) | GLM series foundation models, Chinese open-weight lab (z.ai) | open-weight | [github.com](https://github.com/THUDM) | - |
| IBM Granite | Open-source enterprise model family (Code, Language, Time Series) under Apache 2.0 | open-source | [github.com](https://github.com/ibm-granite) | - |
| Snowflake Arctic | Open-source enterprise LLM using Dense MoE architecture | open-source | [snowflake.com](https://www.snowflake.com/en/data-cloud/arctic/) | - |
| Gemma (Google) | Open-weight model family from Google, runnable on TPU/GPU | open-weight | [google-deepmind/gemma](https://github.com/google-deepmind/gemma) | - |
| SuperAnnotate | Semi-automated data annotation platform | managed | [superannotate.com](https://www.superannotate.com) | - |
| Cleanlab | Data quality and label error detection for ML datasets | open-source | [cleanlab/cleanlab](https://github.com/cleanlab/cleanlab) | - |
| Gretel.ai | Synthetic data generation for AI training | managed | [gretel.ai](https://gretel.ai) | - |
| LLM Architecture Gallery | Visual catalog of 43+ modern LLM architectures with specs, diagrams, and pattern analysis by Sebastian Raschka | open-source | [rasbt/llm-architecture-gallery](https://github.com/rasbt/llm-architecture-gallery) | - |

## Layer 03 - Post-Training

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| Together AI | GPU cloud, fine-tuning API, and fast inference | managed | [together.ai](https://www.together.ai) | - |
| Databricks | Unified analytics with compute, fine-tuning, and RAG | proprietary | [databricks.com](https://www.databricks.com) | - |
| Nemotron-Cascade 2 | NVIDIA 30B MoE (3B active) achieving IMO/IOI/ICPC gold via Cascade RL (domain-sequential RL stages) + Multi-Domain On-Policy Distillation (MOPD) consolidating specialist checkpoints into one model | open-weight | [research.nvidia.com](https://research.nvidia.com/labs/nemotron/) | - |
| Sakana AI | Nature-inspired AI, evolutionary model merging | open-source | [github.com](https://github.com/SakanaAI) | - |
| HuggingFace TRL | RLHF, DPO, SFT training library | open-source | [huggingface/trl](https://github.com/huggingface/trl) | - |
| Axolotl | Streamlined multi-architecture fine-tuning | open-source | [OpenAccess-AI-Collective/axolotl](https://github.com/OpenAccess-AI-Collective/axolotl) | - |
| Deeptune | Training gyms for AI agents — high-fidelity RL environments simulating workplace software (Slack, Salesforce, ticketing, finance), sells to frontier labs for agentic RL training | managed | [deeptune.com](https://deeptune.com) | - |
| Unsloth | 2x faster LoRA fine-tuning, memory efficient | open-source | [unslothai/unsloth](https://github.com/unslothai/unsloth) | - |
| LLaMA-Factory | Unified fine-tuning framework for 100+ models | open-source | [hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory) | - |
| Predibase | Managed LoRA fine-tuning and serving | managed | [predibase.com](https://predibase.com) | W23 |
| Anyscale | Distributed fine-tuning on Ray | managed | [anyscale.com](https://www.anyscale.com) | - |
| Replicate | Fine-tuning and inference API for open models | managed | [replicate.com](https://replicate.com) | - |
| OpenAI Fine-tuning | Fine-tuning API for GPT models | proprietary | [platform.openai.com](https://platform.openai.com/docs/guides/fine-tuning) | - |
| Openlayer | Fine-tuning evaluation and data quality | managed | [openlayer.com](https://openlayer.com) | - |
| Oxen.ai | Dataset versioning for training pipelines | open-source | [Oxen-AI/Oxen](https://github.com/Oxen-AI/Oxen) | W24 |
| HuggingFace PEFT | LoRA, QLoRA, parameter-efficient fine-tuning | open-source | [huggingface/peft](https://github.com/huggingface/peft) | - |
| OpenPipe | Fine-tuning and evaluation platform for LLMs | managed | [openpipe.ai](https://openpipe.ai) | S23 |
| MLX VLM | Inference and fine-tuning package for vision-language models on Mac using MLX | open-source | [Blaizzy/mlx-vlm](https://github.com/Blaizzy/mlx-vlm) | - |
| QVAC Fabric | Tether's cross-platform BitNet LoRA framework — 1-bit LLM training and inference on consumer GPUs and smartphones (13B on iPhone) | open-source | [qvac.ai](https://qvac.ai) | - |
| mlx-tune | Fine-tune full Gemma 4 family locally on Mac — E2B, E4B, 26B MoE, 31B Dense for text/vision/audio with unified FastVisionModel API | open-source | [ARahim3/mlx-tune](https://github.com/ARahim3/mlx-tune) | - |
| HuggingFace Evaluate | Model evaluation metrics library | open-source | [huggingface/evaluate](https://github.com/huggingface/evaluate) | - |
| Appen | Global data annotation with 1M+ contributors | managed | [appen.com](https://appen.com) | - |
| Comet ML | ML experiment tracking and model monitoring | managed | [comet.com](https://www.comet.com) | - |
| Neptune.ai | Experiment tracking for foundation model training | managed | [neptune.ai](https://neptune.ai) | - |
| DSPy | Framework for programming LMs with automatic prompt and weight optimization | open-source | [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | - |
| LMSYS Chatbot Arena | Crowdsourced LLM evaluation via blind comparisons | open-source | [lm-sys/FastChat](https://github.com/lm-sys/FastChat) | - |
| AWS SageMaker | End-to-end ML platform for training and deployment | managed | [aws.amazon.com](https://aws.amazon.com/sagemaker/) | - |
| HuggingFace Hub | Model and dataset repository (cross-cutting) | open-source | [huggingface/huggingface_hub](https://github.com/huggingface/huggingface_hub) | - |
| Pipeshift | Modular orchestration platform for deploying and fine-tuning open-source LLMs | managed | [pipeshift.com](https://pipeshift.com) | S25 |
| OpenGauss | Multi-agent Lean 4 formalization orchestrator with On-Policy Distillation — converts tool feedback (compiler errors, test failures) into per-token training signal via hindsight relabeling | open-source | [math-inc/OpenGauss](https://github.com/math-inc/OpenGauss) | - |

## Layer 04 - Inference

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| Together AI | GPU cloud, fine-tuning API, and fast inference | managed | [together.ai](https://www.together.ai) | - |
| Groq | LPU hardware and ultra-fast inference API | managed | [groq.com](https://groq.com) | - |
| MiniMax | Open-weight MoE models (M1, M2, M2.5) with linear attention, multimodal API platform (image/video/TTS/music generation) | open-weight | [github.com](https://github.com/MiniMax-AI) | - |
| Cohere | Enterprise NLP, embedding models, and Rerank API | proprietary | [cohere.com](https://cohere.com) | - |
| Replicate | Fine-tuning and inference API for open models | managed | [replicate.com](https://replicate.com) | - |
| vLLM | High-throughput serving engine, PagedAttention | open-source | [vllm-project/vllm](https://github.com/vllm-project/vllm) | - |
| llama.cpp | CPU/GPU inference in C++, GGUF quantization | open-source | [ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp) | - |
| oMLX | macOS-native MLX inference server with paged SSD KV caching, continuous batching, multi-model LRU, fast time-to-first-token from cache, and an OpenAI-compatible API | open-source | [jundot/omlx](https://github.com/jundot/omlx) | - |
| MLX LM | Apple MLX package for running LLMs locally on Apple Silicon | open-source | [ml-explore/mlx-lm](https://github.com/ml-explore/mlx-lm) | - |
| MLX VLM | Inference and fine-tuning package for vision-language models on Mac using MLX | open-source | [Blaizzy/mlx-vlm](https://github.com/Blaizzy/mlx-vlm) | - |
| DFlash MLX | Speculative decoding on Apple Silicon — 85 tok/s, 3.3x speedup, 16-token parallel draft with single-pass verify, built on MLX. Reuses active model hidden states so adapters work with post-trained models | open-source | [aryagm01/dflash-mlx](https://github.com/aryagm01/dflash-mlx) | - |
| DDTree-MLX | Tree-based speculative decoding for Apple Silicon — drafts a tree with one block diffusion pass, verifies multiple likely continuations together. Next evolution beyond linear speculative decoding | open-source | [runsonai/ddtree-mlx](https://github.com/runsonai/ddtree-mlx) | - |
| DFlash | Block-diffusion approach to flash speculative decoding for faster generation | open-source | [z-lab/dflash](https://github.com/z-lab/dflash) | - |
| DeepSpec | DeepSeek codebase for training and evaluating speculative decoding algorithms | open-source | [deepseek-ai/DeepSpec](https://github.com/deepseek-ai/DeepSpec) | - |
| Ollama | Local model runner with simple CLI | open-source | [ollama/ollama](https://github.com/ollama/ollama) | - |
| flash-moe | SSD-streaming inference for MoE models — runs Qwen3.5-397B on 48GB MacBook at 4.36 tok/s (4-bit) via serial GPU→SSD→GPU pipeline, FMA-optimized Metal kernels, OS page cache over custom caching (58 failed experiments proved the OS wins) | open-source | [danveloper/flash-moe](https://github.com/danveloper/flash-moe) | - |
| llmfit | One command to find what LLMs run on your hardware — scans hundreds of models/providers, recommends optimal fit for local machine specs | open-source | [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | - |
| LlamaFile | Mozilla — LLM as single cross-platform executable, zero dependencies via cosmopolitan libc | open-source | [Mozilla-Ocho/llamafile](https://github.com/Mozilla-Ocho/llamafile) | - |
| QVAC Fabric | Tether's cross-platform BitNet LoRA framework — 1-bit LLM training and inference on consumer GPUs and smartphones (13B on iPhone) | open-source | [qvac.ai](https://qvac.ai) | - |
| LM Studio | Desktop app for local model inference | free | [lmstudio.ai](https://lmstudio.ai) | - |
| HuggingFace TGI | Production serving engine by HuggingFace | open-source | [huggingface/text-generation-inference](https://github.com/huggingface/text-generation-inference) | - |
| OpenAI API | GPT models as hosted API | proprietary | [openai.com](https://openai.com/api/) | - |
| Anthropic API | Claude models as hosted API | proprietary | [docs.anthropic.com](https://docs.anthropic.com) | - |
| Google Vertex AI | Gemini and open models via managed API | managed | [cloud.google.com](https://cloud.google.com/vertex-ai) | - |
| AWS Bedrock | Multi-model API (Claude, Llama, Mistral) | managed | [aws.amazon.com](https://aws.amazon.com/bedrock/) | - |
| Fireworks AI | Fast inference API for open models | managed | [fireworks.ai](https://fireworks.ai) | W23 |
| Baseten | Model serving infrastructure | managed | [baseten.co](https://www.baseten.co) | W20 |
| Lepton AI | Developer-focused inference API | managed | [lepton.ai](https://www.lepton.ai) | - |
| HuggingFace Inference Endpoints | Managed model hosting on HuggingFace | managed | [huggingface.co](https://huggingface.co/inference-endpoints) | - |
| DeepInfra | Inference API for open-source models | managed | [deepinfra.com](https://deepinfra.com) | - |
| BentoML | Open-source model serving framework | open-source | [bentoml/BentoML](https://github.com/bentoml/BentoML) | - |
| SGLang | Fast LLM serving with structured generation | open-source | [sgl-project/sglang](https://github.com/sgl-project/sglang) | - |
| NVIDIA Dynamo | Distributed inference framework for reasoning models — disaggregated serving, KV-cache aware routing, autoscaling, and multi-engine inference orchestration | open-source | [ai-dynamo/dynamo](https://github.com/ai-dynamo/dynamo) | - |
| TurboQuant | Google Research — data-oblivious KV cache quantization to 3 bits with zero accuracy loss, 6x memory reduction, 8x attention speedup on H100. Two-stage: PolarQuant (random rotation → polar coordinates → Lloyd-Max scalar quantization) + QJL (1-bit residual correction for unbiased inner products). ICLR 2026 | open-source | [amirzandieh/QJL](https://github.com/amirzandieh/QJL) | - |
| RotorQuant | Upgraded TurboQuant — 10x KV cache compression for inference optimization | open-source | [scrya-com/rotorquant](https://github.com/scrya-com/rotorquant) | - |
| LPM 1.0 | 17B DiT research model for real-time full-duplex conversational video generation in avatar and digital-human applications | research | [arxiv.org](https://arxiv.org/abs/2604.07823) | - |
| mlx-tune | Fine-tune full Gemma 4 family locally on Mac — E2B, E4B, 26B MoE, 31B Dense for text/vision/audio with unified FastVisionModel API | open-source | [ARahim3/mlx-tune](https://github.com/ARahim3/mlx-tune) | - |
| ElevenLabs | Text-to-speech, voice cloning, and audio AI platform | proprietary | [elevenlabs.io](https://elevenlabs.io) | - |
| Whisper | OpenAI open-source speech-to-text model | open-source | [openai/whisper](https://github.com/openai/whisper) | - |
| Insanely Fast Whisper | Optimized Whisper CLI — batched chunking + fp16 + Flash Attention 2 yields 19x speedup over vanilla | open-source | [Vaibhavs10/insanely-fast-whisper](https://github.com/Vaibhavs10/insanely-fast-whisper) | - |
| Deepgram | Speech-to-text and audio intelligence API | managed | [deepgram.com](https://deepgram.com) | - |
| AssemblyAI | Speech-to-text and audio understanding API | managed | [assemblyai.com](https://www.assemblyai.com) | - |
| Bark | Open-source text-to-speech by Suno, multilingual | open-source | [suno-ai/bark](https://github.com/suno-ai/bark) | - |
| Coqui TTS | Open-source deep learning TTS toolkit | open-source | [coqui-ai/TTS](https://github.com/coqui-ai/TTS) | - |
| PlayHT | AI voice generation and text-to-speech API | managed | [play.ht](https://play.ht) | - |
| Sora | OpenAI video generation model | proprietary | [openai.com](https://openai.com/sora) | - |
| Kling | Kuaishou AI video generation | proprietary | [klingai.com](https://klingai.com) | - |
| Veo | Google DeepMind video generation model | proprietary | [deepmind.google](https://deepmind.google/technologies/veo/) | - |
| Suno | AI music and song generation | proprietary | [suno.com](https://suno.com) | - |
| NVIDIA VSS Blueprint | Reference architectures for GPU-accelerated vision agents, video search, summarization, and video analytics apps | open-source | [NVIDIA-AI-Blueprints/video-search-and-summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization) | - |
| ComfyUI | Node-graph runtime for image, video, and audio generation workflows with a large custom-node ecosystem | open-source | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | - |
| Portkey | AI gateway with routing, caching, guardrails | managed | [portkey.ai](https://portkey.ai) | W24 |
| SambaNova | Custom dataflow AI chips and cloud inference | proprietary | [sambanova.ai](https://sambanova.ai) | - |
| Apple MLX | ML framework optimized for Apple Silicon | open-source | [ml-explore/mlx](https://github.com/ml-explore/mlx) | - |
| Apple Core AI Models | Model export recipes, Python primitives, and Swift runtime utilities for on-device AI | open-source | [apple/coreai-models](https://github.com/apple/coreai-models) | - |
| NVIDIA TensorRT-LLM | GPU-optimized LLM inference with Triton server | open-source | [NVIDIA/TensorRT-LLM](https://github.com/NVIDIA/TensorRT-LLM) | - |
| Azure OpenAI Service | OpenAI models hosted on Azure with enterprise security | managed | [azure.microsoft.com](https://azure.microsoft.com/en-us/products/ai-services/openai-service) | - |
| Azure AI Studio | Microsoft unified AI development platform | managed | [ai.azure.com](https://ai.azure.com) | - |
| AWS SageMaker | End-to-end ML platform for training and deployment | managed | [aws.amazon.com](https://aws.amazon.com/sagemaker/) | - |
| Google AI Studio | Gemini API playground and prototyping tool | free | [aistudio.google.com](https://aistudio.google.com) | - |
| Cloudflare Workers AI | Serverless AI inference at the edge | managed | [ai.cloudflare.com](https://ai.cloudflare.com) | - |
| IBM watsonx | Enterprise AI platform with Granite models | managed | [ibm.com](https://www.ibm.com/watsonx) | - |
| Snowflake Cortex AI | AI functions and LLM access within Snowflake | managed | [snowflake.com](https://www.snowflake.com/en/data-cloud/cortex/) | - |
| Pika | AI video generation and editing from text | managed | [pika.art](https://pika.art) | - |
| Luma AI | 3D capture and text-to-video generation | managed | [lumalabs.ai](https://lumalabs.ai) | - |
| Ideogram | AI image generation with excellent text rendering | managed | [ideogram.ai](https://ideogram.ai) | - |
| Resemble AI | Voice cloning and TTS for enterprise | managed | [resemble.ai](https://www.resemble.ai) | - |
| HuggingFace Hub | Model and dataset repository (cross-cutting) | open-source | [huggingface/huggingface_hub](https://github.com/huggingface/huggingface_hub) | - |
| Cloudflare AI Gateway | Proxy layer for AI APIs with caching, rate limiting, and fallback routing | managed | [developers.cloudflare.com](https://developers.cloudflare.com/ai-gateway/) | - |

## Layer 05 - Routing

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| NVIDIA Dynamo | Distributed inference framework for reasoning models — disaggregated serving, KV-cache aware routing, autoscaling, and multi-engine inference orchestration | open-source | [ai-dynamo/dynamo](https://github.com/ai-dynamo/dynamo) | - |
| OpenRouter | Unified API across 300+ models, automatic fallback | managed | [openrouter.ai](https://openrouter.ai) | - |
| LiteLLM | Open-source LLM proxy for 100+ providers | open-source | [BerriAI/litellm](https://github.com/BerriAI/litellm) | - |
| Portkey | AI gateway with routing, caching, guardrails | managed | [portkey.ai](https://portkey.ai) | W24 |
| Unify | Benchmark-driven model routing | managed | [unify.ai](https://unify.ai) | - |
| Martian | Intelligent model router with quality prediction | managed | [withmartian.com](https://withmartian.com) | - |
| Helicone | LLM proxy with observability and cost tracking | managed | [helicone.ai](https://www.helicone.ai) | W23 |
| Keywords AI | LLM monitoring and routing platform | managed | [keywordsai.co](https://keywordsai.co) | S24 |
| Not Diamond | Model routing optimization | managed | [notdiamond.ai](https://notdiamond.ai) | S24 |
| Headroom | Compression library, proxy, and MCP server that reduces tool outputs, logs, files, and RAG chunks before they reach the LLM | open-source | [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | - |
| TensorZero | Open-source LLM gateway with optimization and experimentation | open-source | [tensorzero/tensorzero](https://github.com/tensorzero/tensorzero) | - |
| Poe | Multi-model AI chat aggregator by Quora | managed | [poe.com](https://poe.com) | - |
| Venice AI | Privacy-focused AI platform with uncensored model access | managed | [venice.ai](https://venice.ai) | - |
| Cloudflare AI Gateway | Proxy layer for AI APIs with caching, rate limiting, and fallback routing | managed | [developers.cloudflare.com](https://developers.cloudflare.com/ai-gateway/) | - |
| Bifrost | High-performance open-source AI gateway in Go — 15+ providers, semantic caching, MCP support, ~11us overhead | open-source | [maximhq/bifrost](https://github.com/maximhq/bifrost) | - |

## Layer 06 - Harness

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| pi-autoresearch (Shopify) | Open-source autoresearch harness — automated research loop with benchmark-driven optimization, shipped by Shopify Engineering | open-source | [Shopify/pi-autoresearch](https://github.com/Shopify/pi-autoresearch) | - |
| SWE-agent | Princeton's agent-computer interface for autonomous GitHub issue resolution — pioneered ACI design patterns (capped search, stateful viewer, lint-on-edit) | open-source | [princeton-nlp/SWE-agent](https://github.com/princeton-nlp/SWE-agent) | - |
| LangGraph | Graph/state-machine framework for durable agent workflows, human review loops, persistence, and controllable multi-agent orchestration | open-source | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | - |
| Open SWE | Async coding agent framework — sandbox-as-backend protocol, deterministic middleware hooks (@before_model/@after_agent), thread-to-sandbox persistence, multi-surface invocation (Slack/GitHub/Linear) | open-source | [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) | - |
| Claude Code | Anthropic's agentic coding tool with tool use, MCP, plugin ecosystem, file system access | proprietary | [docs.anthropic.com](https://docs.anthropic.com/en/docs/agents) | - |
| OpenAI Codex | Cloud coding agent with sandboxed execution | proprietary | [openai.com](https://openai.com/index/introducing-codex/) | - |
| OpenAI Codex CLI | Open-source terminal coding agent from OpenAI with local repo access, tool execution, and Codex cloud integration | open-source | [openai/codex](https://github.com/openai/codex) | - |
| AgentRC | Microsoft tool for making repositories AI-ready through repo context, instructions, and readiness checks | open-source | [microsoft/agentrc](https://github.com/microsoft/agentrc) | - |
| Context Engineering Kit | Portable Claude Code skills and context patterns for improving agent result quality across coding tools | open-source | [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit) | - |
| Devin (Cognition) | Autonomous software engineering agent | proprietary | [cognition.ai](https://www.cognition.ai) | - |
| Everything Claude Code | Harness optimization system — instinct-based continuous learning (observe→instinct→skill→agent evolution pipeline with project scoping), config protection against quality gate gaming, de-sloppify pattern, skills, memory, security, and cross-harness portability | open-source | [affaan-m/ECC](https://github.com/affaan-m/ECC) | - |
| OpenSpace | Self-evolving agent skill engine — three-trigger evolution (post-analysis, tool degradation, metric monitoring), three modes (FIX/DERIVED/CAPTURED), cloud skill community for collective intelligence, 54% token savings via skill reuse, MCP server integration | open-source | [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | - |
| Superpowers | Composable skills framework enforcing structured development — brainstorm, plan, TDD, subagent execution, two-stage review, and hard-gate verification — across Claude Code, Cursor, Codex, and Gemini CLI | open-source | [obra/superpowers](https://github.com/obra/superpowers) | - |
| PUA | AI agent skill plugin that enforces persistence, proactive debugging, and mandatory verification across Claude Code, Codex, Cursor, and other tools | open-source | [tanweai/pua](https://github.com/tanweai/pua) | - |
| Meta-Harness | Research system for automated harness engineering — an outer-loop coding agent searches over harness code using source, scores, and execution traces from prior candidates | research | [arxiv.org](https://arxiv.org/abs/2603.28052) | - |
| Citadel | Agent orchestration harness for Claude Code — cost-based tier routing (Skill→Marshal→Archon→Fleet), discovery relay between parallel agent waves, campaign persistence, lifecycle hooks as safety net, file-based coordination claims | open-source | [SethGammon/Citadel](https://github.com/SethGammon/Citadel) | - |
| gstack | Software factory by YC CEO — 28 sprint-structured skills (Think→Plan→Build→Review→Test→Ship→Reflect), autoplan with encoded decision heuristics (mechanical vs taste), multi-model adversarial review (Claude+Codex consensus), persistent browser daemon with a11y-tree element refs | open-source | [garrytan/gstack](https://github.com/garrytan/gstack) | - |
| Agent Scripts | Reusable shell scripts and operational helpers for coding agents across repositories | open-source | [steipete/agent-scripts](https://github.com/steipete/agent-scripts) | - |
| Matt Pocock Skills | Practical coding-agent skills packaged as reusable command/context artifacts | open-source | [mattpocock/skills](https://github.com/mattpocock/skills) | - |
| NVIDIA Skills | Agent skills published by NVIDIA for repeatable domain workflows | open-source | [NVIDIA/skills](https://github.com/NVIDIA/skills) | - |
| Claude HUD | Real-time heads-up display for Claude Code — context window consumption, tool activity, subagent status, rate limits, task progress via statusLine API and transcript parsing | open-source | [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | - |
| GSD (v1) | Viral prompt framework for Claude Code — markdown slash commands for structured project execution | open-source | [glittercowboy/get-shit-done](https://github.com/glittercowboy/get-shit-done) | - |
| GSD 2 | Spec-driven autonomous coding agent — state machine with fresh context per task, crash recovery, cost tracking, and git automation | open-source | [gsd-build/GSD-2](https://github.com/gsd-build/GSD-2) | - |
| Clearshot | Structured screenshot analysis skill for Claude Code — extracts hex colors, exact spacing, component specs from UI screenshots via three-level analysis (Map/System/Blueprint), auto-triggers on UI images | open-source | [udayanwalvekar/clearshot](https://github.com/udayanwalvekar/clearshot) | - |
| E2B | Sandboxed code execution for agents | managed | [e2b-dev/e2b](https://github.com/e2b-dev/e2b) | W24 |
| agent-browser | Rust CLI for AI browser automation — accessibility-tree snapshots, semantic locators, batch commands, daemon sessions | open-source | [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | - |
| Hermes Agent | Self-improving AI agent with persistent memory, autonomous skill creation, multi-platform messaging, and subagent delegation | open-source | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | - |
| MCP Servers | Official reference and community server catalog for Model Context Protocol connectors | open-source | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | - |
| OpenHands | Open-source software-development agent with sandboxed execution, browser/tool use, and GitHub-oriented coding workflows | open-source | [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | - |
| PentAGI | Autonomous pentesting agent — ChainAST for conversations (typed AST with structural validation, byte tracking, force-repair), Generator/Refiner adaptive replanning, 12+ specialized agents, three-phase summarization with provider-specific reasoning preservation | open-source | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | - |
| Learn Claude Code | 12-session progressive guide to building AI coding agents — from basic loop to multi-agent worktree isolation | open-source | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | - |
| Dedalus Labs | Hosts MCP servers with autoscaling and one-click deployment | managed | [dedaluslabs.com](https://dedaluslabs.com) | S25 |
| Castari | Deploy AI agents in secure, autoscaling sandboxes with MCP connectors | managed | [castari.com](https://castari.com) | S25 |
| Kernel (AI infra) | Open-source unikernel infra for AI agents to access the internet with sub-150ms cold starts | open-source | [github.com](https://github.com/kernelai) | S25 |
| NVIDIA OpenShell | Safe, private runtime for autonomous AI agents | open-source | [NVIDIA/OpenShell](https://github.com/NVIDIA/OpenShell) | - |
| NemoClaw | NVIDIA agent sandbox — binary-scoped network policies (per-binary, per-endpoint, per-HTTP-method), inference interception via gateway, Landlock/seccomp/netns enforcement, immutable config with operator-in-the-loop approval | open-source | [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | - |
| DeerFlow | ByteDance super agent harness — LangGraph runtime with Docker sandbox, ordered middleware chain (9 middlewares for context/memory/uploads/clarification), progressive skill loading, sub-agent spawning, IM channel gateway (Telegram/Slack/Feishu) | open-source | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | - |
| Goose | Open-source extensible AI agent by Block — Rust-based, multi-model, 1700+ MCP servers, desktop + CLI | open-source | [block/goose](https://github.com/block/goose) | - |
| Gemini CLI | Google's open-source terminal AI agent — Gemini models, 1M context, MCP support, Google Search grounding | open-source | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | - |
| Karpathy Autoresearch | AI agents that automatically run research loops on single-GPU nanochat training | open-source | [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | - |
| pi-autoresearch (davebcn87) | Autonomous experiment loop for AI agents — propose, measure, retain, discard, repeat with persistent state across sessions | open-source | [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) | - |
| Codex Autoresearch | Autonomous experimentation skill for Codex CLI — graduated stuck recovery (REFINE/PIVOT/Search), protocol re-anchoring against context drift, cross-run lessons with time-decay, parallel experiments via git worktrees | open-source | [leo-lilinxiao/codex-autoresearch](https://github.com/leo-lilinxiao/codex-autoresearch) | - |
| Claude Autoresearch | Domain-agnostic autonomous loop as a Claude Code skill — pure Markdown behavioral protocol, noise-aware metric handling (multi-run median, confirmation runs, min delta thresholds), composable command chaining across 9 specialized workflows | open-source | [uditgoenka/autoresearch](https://github.com/uditgoenka/autoresearch) | - |
| Unslop | Empirical output-mode-collapse detector — generates N samples, self-audits behavioral defaults with frequency counts, produces subtractive constraint files (prohibitions, not prescriptions) | open-source | [mshumer/unslop](https://github.com/mshumer/unslop) | - |

## Layer 07 - Orchestration

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| LangChain | Chain/agent framework, LangGraph for stateful workflows | open-source | [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | - |
| LangGraph | Graph/state-machine framework for durable agent workflows, human review loops, persistence, and controllable multi-agent orchestration | open-source | [langchain-ai/langgraph](https://github.com/langchain-ai/langgraph) | - |
| Open SWE | Async coding agent framework — sandbox-as-backend protocol, deterministic middleware hooks (@before_model/@after_agent), thread-to-sandbox persistence, multi-surface invocation (Slack/GitHub/Linear) | open-source | [langchain-ai/open-swe](https://github.com/langchain-ai/open-swe) | - |
| LlamaIndex | Data framework for LLM apps, RAG pipelines | open-source | [run-llama/llama_index](https://github.com/run-llama/llama_index) | - |
| CrewAI | Multi-agent orchestration framework | open-source | [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) | S23 |
| AutoGen | Microsoft multi-agent conversation framework | open-source | [microsoft/autogen](https://github.com/microsoft/autogen) | - |
| Claude Code | Anthropic's agentic coding tool with tool use, MCP, plugin ecosystem, file system access | proprietary | [docs.anthropic.com](https://docs.anthropic.com/en/docs/agents) | - |
| OpenAI Codex | Cloud coding agent with sandboxed execution | proprietary | [openai.com](https://openai.com/index/introducing-codex/) | - |
| OpenAI Codex CLI | Open-source terminal coding agent from OpenAI with local repo access, tool execution, and Codex cloud integration | open-source | [openai/codex](https://github.com/openai/codex) | - |
| Devin (Cognition) | Autonomous software engineering agent | proprietary | [cognition.ai](https://www.cognition.ai) | - |
| OpenSpace | Self-evolving agent skill engine — three-trigger evolution (post-analysis, tool degradation, metric monitoring), three modes (FIX/DERIVED/CAPTURED), cloud skill community for collective intelligence, 54% token savings via skill reuse, MCP server integration | open-source | [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | - |
| Superpowers | Composable skills framework enforcing structured development — brainstorm, plan, TDD, subagent execution, two-stage review, and hard-gate verification — across Claude Code, Cursor, Codex, and Gemini CLI | open-source | [obra/superpowers](https://github.com/obra/superpowers) | - |
| Citadel | Agent orchestration harness for Claude Code — cost-based tier routing (Skill→Marshal→Archon→Fleet), discovery relay between parallel agent waves, campaign persistence, lifecycle hooks as safety net, file-based coordination claims | open-source | [SethGammon/Citadel](https://github.com/SethGammon/Citadel) | - |
| gstack | Software factory by YC CEO — 28 sprint-structured skills (Think→Plan→Build→Review→Test→Ship→Reflect), autoplan with encoded decision heuristics (mechanical vs taste), multi-model adversarial review (Claude+Codex consensus), persistent browser daemon with a11y-tree element refs | open-source | [garrytan/gstack](https://github.com/garrytan/gstack) | - |
| GSD (v1) | Viral prompt framework for Claude Code — markdown slash commands for structured project execution | open-source | [glittercowboy/get-shit-done](https://github.com/glittercowboy/get-shit-done) | - |
| GSD 2 | Spec-driven autonomous coding agent — state machine with fresh context per task, crash recovery, cost tracking, and git automation | open-source | [gsd-build/GSD-2](https://github.com/gsd-build/GSD-2) | - |
| Dify | Visual AI workflow builder, open source | open-source | [langgenius/dify](https://github.com/langgenius/dify) | - |
| MetaGPT | Multi-agent framework where agents play software company roles (PM, architect, engineer, QA) with SOPs and structured outputs | open-source | [geekan/MetaGPT](https://github.com/geekan/MetaGPT) | - |
| Flowise | Drag-and-drop LLM flow builder with visual node editor for chains, agents, and RAG pipelines | open-source | [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | - |
| Langflow | Visual drag-and-drop builder for AI agent pipelines and workflows | open-source | [langflow-ai/langflow](https://github.com/langflow-ai/langflow) | - |
| n8n | Workflow automation with AI node support | open-source | [n8n-io/n8n](https://github.com/n8n-io/n8n) | - |
| Composio | Tool integrations for AI agents | managed | [composio.dev](https://www.composio.dev) | W24 |
| Agent Orchestrator | Composio's agent fleet manager — runs 30+ coding agents in parallel with plugin architecture (8 slots, 20+ plugins), closed-loop CI/review feedback routing, LLM-driven task decomposition, git worktree isolation | open-source | [ComposioHQ/agent-orchestrator](https://github.com/ComposioHQ/agent-orchestrator) | W24 |
| Paperclip | Open-source app for managing workplace agents, tasks, runs, and oversight | open-source | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | - |
| Warp Oz | Enterprise cloud agent orchestration platform — harness-agnostic control plane with policies, tracking, handoff, sandboxing, memory layer, and self-hosting support | proprietary | [warp.dev](https://www.warp.dev) | - |
| Trigger.dev | Background job orchestration for AI workflows | managed | [triggerdotdev/trigger.dev](https://github.com/triggerdotdev/trigger.dev) | W23 |
| LibreChat | Open-source multi-model chat interface | open-source | [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | - |
| Hermes Agent | Self-improving AI agent with persistent memory, autonomous skill creation, multi-platform messaging, and subagent delegation | open-source | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | - |
| OpenClaw | Agent gateway with messaging, memory, MCP tools, skills, and multi-model orchestration | open-source | [openclaw/openclaw](https://github.com/openclaw/openclaw) | - |
| Dexter | Autonomous agent for deep financial research — coordinates a team of agents for stock analysis and investor-style research workflows | open-source | [virattt/dexter](https://github.com/virattt/dexter) | - |
| Langdock | Enterprise AI platform with multi-model orchestration | proprietary | [langdock.com](https://langdock.com) | - |
| Semantic Kernel | Microsoft AI orchestration SDK for .NET/Python/Java | open-source | [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) | - |
| Haystack | Open-source framework for RAG and NLP pipelines | open-source | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | - |
| Agent2Agent (A2A) | Google-led protocol for agent-to-agent interoperability, task delegation, and cross-system agent communication | open-source | [a2aproject/A2A](https://github.com/a2aproject/A2A) | - |
| claude-squad | Terminal multiplexer for running multiple AI coding agents in parallel tmux sessions with shared worktree isolation | open-source | [smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad) | - |
| OpenHands | Open-source software-development agent with sandboxed execution, browser/tool use, and GitHub-oriented coding workflows | open-source | [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | - |
| PentAGI | Autonomous pentesting agent — ChainAST for conversations (typed AST with structural validation, byte tracking, force-repair), Generator/Refiner adaptive replanning, 12+ specialized agents, three-phase summarization with provider-specific reasoning preservation | open-source | [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | - |
| DSPy | Framework for programming LMs with automatic prompt and weight optimization | open-source | [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | - |
| Agno | Model-agnostic agent framework with memory and multimodal | open-source | [agno-agi/agno](https://github.com/agno-agi/agno) | - |
| Smolagents | HuggingFace minimal code-centric agent framework | open-source | [huggingface/smolagents](https://github.com/huggingface/smolagents) | - |
| pi-mono | Full-stack TypeScript monorepo for AI coding agents — inference, routing, orchestration, context, and integrations | open-source | [badlogic/pi-mono](https://github.com/badlogic/pi-mono) | - |
| Anthropic Agent SDK | First-party SDK for building multi-step agents with Claude models | open-source | [anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) | - |
| OpenAI Agents SDK | First-party SDK for building agent workflows with tools, handoffs, tracing, and guardrails | open-source | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | - |
| Autensa | Open-source AI agent orchestration dashboard — task management, AI planning, multi-agent dispatch via OpenClaw Gateway | open-source | [crshdn/mission-control](https://github.com/crshdn/mission-control) | - |
| Azure AI Studio | Microsoft unified AI development platform | managed | [ai.azure.com](https://ai.azure.com) | - |
| IBM watsonx | Enterprise AI platform with Granite models | managed | [ibm.com](https://www.ibm.com/watsonx) | - |
| Salesforce Agentforce | AI agents for CRM, sales, and customer service | proprietary | [salesforce.com](https://www.salesforce.com/agentforce/) | - |
| Palantir AIP | Enterprise AI platform for government and commercial | proprietary | [palantir.com](https://www.palantir.com/platforms/aip/) | - |
| Learn Claude Code | 12-session progressive guide to building AI coding agents — from basic loop to multi-agent worktree isolation | open-source | [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | - |
| MiroFish | Swarm intelligence prediction engine — simulates thousands of autonomous agents to forecast outcomes and test decisions | open-source | [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | - |
| ClawWork | OpenClaw as autonomous AI coworker — earned $15K in 11 hours, from HKU Data Science lab | open-source | [HKUDS/ClawWork](https://github.com/HKUDS/ClawWork) | - |
| ClawTeam | Framework-agnostic multi-agent CLI — leader agents spawn workers, coordinate via filesystem messaging, isolate work in git worktrees | open-source | [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) | - |
| Google ADK | Open-source code-first agent framework — multi-agent composition, MCP tools, built-in eval, multi-language | open-source | [google/adk-python](https://github.com/google/adk-python) | - |
| Mastra | Open-source TypeScript framework for building AI agents with workflows, RAG, and evals | open-source | [mastra-ai/mastra](https://github.com/mastra-ai/mastra) | W25 |
| Browser Use | Open-source tool enabling web-browsing AI agents to click, type, and navigate | open-source | [browser-use/browser-use](https://github.com/browser-use/browser-use) | W25 |
| Copilot Studio | Microsoft low-code platform for building and governing enterprise AI agents | managed | [microsoft.com](https://www.microsoft.com/en-us/microsoft-copilot/microsoft-copilot-studio) | - |
| Vertex AI Agent Engine | Google managed service for building and deploying AI agents | managed | [cloud.google.com](https://cloud.google.com/vertex-ai) | - |
| Abundant | Human-in-the-loop teleoperation API for AI agent failures | managed | [abundant.ai](https://abundant.ai) | W25 |
| A1base | Infrastructure for AI agents to communicate over WhatsApp, SMS, email, phone | managed | [a1base.com](https://a1base.com) | W25 |
| Pipeshift | Modular orchestration platform for deploying and fine-tuning open-source LLMs | managed | [pipeshift.com](https://pipeshift.com) | S25 |
| Observee | Build AI agents with 1000+ MCP integrations, managed OAuth and observability | managed | [observee.ai](https://observee.ai) | S25 |
| Make | Visual automation platform with AI agent capabilities and 1,800+ app connectors | managed | [make.com](https://www.make.com) | - |
| UiPath | Enterprise RPA platform adding agentic automation with AI reasoning on top of process automation | managed | [uipath.com](https://www.uipath.com) | - |
| OpenAI Frontier | Enterprise platform for building and managing AI agents with integrated governance, permissions, and multi-provider support | managed | [openai.com](https://openai.com) | - |
| DeerFlow | ByteDance super agent harness — LangGraph runtime with Docker sandbox, ordered middleware chain (9 middlewares for context/memory/uploads/clarification), progressive skill loading, sub-agent spawning, IM channel gateway (Telegram/Slack/Feishu) | open-source | [bytedance/deer-flow](https://github.com/bytedance/deer-flow) | - |
| Gemini CLI | Google's open-source terminal AI agent — Gemini models, 1M context, MCP support, Google Search grounding | open-source | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | - |
| Wordware | Web-hosted IDE for building AI agents using natural language | managed | [wordware.ai](https://wordware.ai) | S24 |
| AutoResearchClaw | Autonomous research pipeline — 23-stage state machine with ground-truth registries (anti-fabrication), multi-agent debate for hypothesis generation, self-healing experiments, recursive PIVOT re-execution, four-layer citation verification | open-source | [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | - |
| OpenEvolve | Open-source evolutionary code optimization framework | open-source | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | - |
| ShinkaEvolve | Multi-island evolutionary optimization framework combining LLM ensembles with evolutionary algorithms for scientific discovery | open-source | [SakanaAI/ShinkaEvolve](https://github.com/SakanaAI/ShinkaEvolve) | - |

## Layer 08 - Context

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| Databricks | Unified analytics with compute, fine-tuning, and RAG | proprietary | [databricks.com](https://www.databricks.com) | - |
| Cohere | Enterprise NLP, embedding models, and Rerank API | proprietary | [cohere.com](https://cohere.com) | - |
| Letta (MemGPT) | Long-term memory management for LLM agents — stateful agents with self-editing memory and persistent context across sessions | open-source | [letta-ai/letta](https://github.com/letta-ai/letta) | - |
| AgentRC | Microsoft tool for making repositories AI-ready through repo context, instructions, and readiness checks | open-source | [microsoft/agentrc](https://github.com/microsoft/agentrc) | - |
| Context Engineering Kit | Portable Claude Code skills and context patterns for improving agent result quality across coding tools | open-source | [NeoLabHQ/context-engineering-kit](https://github.com/NeoLabHQ/context-engineering-kit) | - |
| GSD (v1) | Viral prompt framework for Claude Code — markdown slash commands for structured project execution | open-source | [glittercowboy/get-shit-done](https://github.com/glittercowboy/get-shit-done) | - |
| GSD 2 | Spec-driven autonomous coding agent — state machine with fresh context per task, crash recovery, cost tracking, and git automation | open-source | [gsd-build/GSD-2](https://github.com/gsd-build/GSD-2) | - |
| Hermes Agent | Self-improving AI agent with persistent memory, autonomous skill creation, multi-platform messaging, and subagent delegation | open-source | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | - |
| OpenClaw | Agent gateway with messaging, memory, MCP tools, skills, and multi-model orchestration | open-source | [openclaw/openclaw](https://github.com/openclaw/openclaw) | - |
| Haystack | Open-source framework for RAG and NLP pipelines | open-source | [deepset-ai/haystack](https://github.com/deepset-ai/haystack) | - |
| Pinecone | Managed vector database, serverless option | managed | [pinecone.io](https://www.pinecone.io) | - |
| Weaviate | Open-source vector database with hybrid search | open-source | [weaviate/weaviate](https://github.com/weaviate/weaviate) | - |
| Chroma | Open-source embedding database | open-source | [chroma-core/chroma](https://github.com/chroma-core/chroma) | W23 |
| Qdrant | Rust-based vector search engine | open-source | [qdrant/qdrant](https://github.com/qdrant/qdrant) | - |
| Milvus | Distributed vector database for scale | open-source | [milvus-io/milvus](https://github.com/milvus-io/milvus) | - |
| Voyage AI | Embedding models optimized for retrieval | managed | [voyageai.com](https://www.voyageai.com) | - |
| Jina AI | Embedding models and rerankers | open-source | [jina-ai/jina](https://github.com/jina-ai/jina) | - |
| Obsidian | Local-first knowledge management, markdown-based | free | [obsidian.md](https://obsidian.md) | - |
| Notion | Connected workspace with AI features | managed | [notion.com](https://www.notion.com) | - |
| Mem | AI-native knowledge base | managed | [mem.ai](https://mem.ai) | S21 |
| Metal | Managed embeddings service | managed | [getmetal.io](https://getmetal.io) | S23 |
| Trieve | Search and RAG infrastructure | managed | [devflowinc/trieve](https://github.com/devflowinc/trieve) | W24 |
| Mendable | AI chat for documentation sites | managed | [mendable.ai](https://mendable.ai) | W23 |
| HuggingFace Text Embeddings Inference | Fast embedding model serving engine | open-source | [huggingface/text-embeddings-inference](https://github.com/huggingface/text-embeddings-inference) | - |
| HuggingFace Sentence Transformers | Embedding model library for semantic similarity | open-source | [UKPLab/sentence-transformers](https://github.com/UKPLab/sentence-transformers) | - |
| FAISS | Facebook vector similarity search library | open-source | [facebookresearch/faiss](https://github.com/facebookresearch/faiss) | - |
| pgvector | PostgreSQL vector similarity extension | open-source | [pgvector/pgvector](https://github.com/pgvector/pgvector) | - |
| LlamaParse | Document parsing for RAG pipelines | managed | [llamaindex.ai](https://www.llamaindex.ai/llamaparse) | - |
| OpenDataLoader PDF | Hybrid PDF parser for RAG — triage routes simple pages to deterministic Java core (0.05s/page), complex pages to AI backend; per-element bounding boxes for citation, prompt injection defense via hidden text detection | open-source | [opendataloader-project/opendataloader-pdf](https://github.com/opendataloader-project/opendataloader-pdf) | - |
| RepoPrompt | macOS app that assembles repo context into structured prompts for LLMs | proprietary | [repoprompt.com](https://repoprompt.com) | - |
| Headroom | Compression library, proxy, and MCP server that reduces tool outputs, logs, files, and RAG chunks before they reach the LLM | open-source | [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | - |
| Token Optimizer MCP | MCP server for token reduction through caching, compression, and tool-output intelligence | open-source | [ooples/token-optimizer-mcp](https://github.com/ooples/token-optimizer-mcp) | - |
| Code Review Graph | Local-first code intelligence graph for MCP/CLI that helps agents read only relevant code during review and large-repo workflows | open-source | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | - |
| Claude Context | Code search MCP for making a full codebase available as retrievable context to Claude Code and other agents | open-source | [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | - |
| AgentMemory | Persistent memory layer for AI coding agents, built around benchmarked cross-session recall | open-source | [rohitg00/agentmemory](https://github.com/rohitg00/agentmemory) | - |
| MemPalace | Open-source AI memory system focused on benchmarked long-term agent recall | open-source | [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | - |
| mem0 | Agent memory platform and SDK for long-term personalization, cross-session recall, and memory APIs | open-source | [mem0ai/mem0](https://github.com/mem0ai/mem0) | - |
| Graphiti | Temporal knowledge graph for agent memory, incremental entity/event updates, and time-aware retrieval | open-source | [getzep/graphiti](https://github.com/getzep/graphiti) | - |
| Obsidian Skills | Agent skills for operating on Obsidian's local-first Markdown, Bases, JSON Canvas, and CLI surfaces | open-source | [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | - |
| DESIGN.md | Google Labs format specification for giving coding agents a persistent, structured understanding of a visual identity and design system | open-source | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | - |
| Nomic | Open-source MoE embedding models with full transparency | open-source | [github.com](https://github.com/nomic-ai) | - |
| Tavily | AI-native search API for agents and RAG pipelines | managed | [tavily.com](https://tavily.com) | - |
| Exa | Embeddings-based semantic web search for LLMs | managed | [exa.ai](https://exa.ai) | - |
| Firecrawl | Web-to-markdown API for LLM-ready data extraction | open-source | [mendableai/firecrawl](https://github.com/mendableai/firecrawl) | - |
| Crawl4AI | Open-source web crawler optimized for LLM data extraction | open-source | [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | - |
| Unstructured | Document parsing (PDF, DOCX, images) into LLM-ready data | open-source | [Unstructured-IO/unstructured](https://github.com/Unstructured-IO/unstructured) | - |
| Snowflake Cortex AI | AI functions and LLM access within Snowflake | managed | [snowflake.com](https://www.snowflake.com/en/data-cloud/cortex/) | - |
| HuggingFace Hub | Model and dataset repository (cross-cutting) | open-source | [huggingface/huggingface_hub](https://github.com/huggingface/huggingface_hub) | - |
| OpenViking | ByteDance's context database for AI agents — filesystem paradigm with three-tier demand-based loading, recursive retrieval, and observable retrieval trajectories | open-source | [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | - |
| QMD | Open-source knowledge management and querying for AI memory systems | open-source | [github.com](https://github.com/qmd-lab) | - |
| Cloudflare Vectorize | Serverless vector database for RAG at the edge | managed | [developers.cloudflare.com](https://developers.cloudflare.com/vectorize/) | - |
| ZeroEntropy | AI search re-ranker ensuring LLMs retrieve the most relevant information | managed | [zeroentropy.dev](https://zeroentropy.dev) | S25 |
| Morphik | Open-source document search for LLMs with unified knowledge storage API | open-source | [morphik.ai](https://morphik.ai) | S25 |
| HelixDB | Unified graph-vector database for faster and more relevant AI context | open-source | [helixdb.com](https://helixdb.com) | S25 |
| Quivr | Open-source RAG framework and chat interface for enterprise tools | open-source | [QuivrHQ/quivr](https://github.com/QuivrHQ/quivr) | W24 |
| Context Hub | Andrew Ng's CLI for curated, versioned API docs for coding agents — self-improving loop with agent annotations and author feedback | open-source | [andrewyng/context-hub](https://github.com/andrewyng/context-hub) | - |
| Context7 | MCP server that injects up-to-date library documentation into LLM prompts | open-source | [upstash/context7](https://github.com/upstash/context7) | - |
| RAGFlow | Open-source RAG engine with deep document parsing, intelligent chunking, and citation grounding | open-source | [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | - |
| Claude-Mem | Persistent memory plugin for Claude Code — auto-captures session context, AI-compressed retrieval, progressive disclosure | open-source | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | - |
| Hindsight | Biomimetic agent memory — world facts, experiences, and mental models with retain/recall/reflect operations | open-source | [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | - |
| Nozomio | Context augmentation layers for AI coding agents | managed | [nozomio.com](https://nozomio.com) | S25 |

## Layer 09 - Integrations

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| Qwen Code | Open-source terminal AI agent for Qwen3-Coder — adapted from Gemini CLI, skills/subagents system, multi-provider, OAuth with 1K free daily requests | open-source | [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | - |
| Tabby | Self-hosted AI code completion — open-source Copilot alternative with local inference | open-source | [TabbyML/tabby](https://github.com/TabbyML/tabby) | - |
| SWE-agent | Princeton's agent-computer interface for autonomous GitHub issue resolution — pioneered ACI design patterns (capped search, stateful viewer, lint-on-edit) | open-source | [princeton-nlp/SWE-agent](https://github.com/princeton-nlp/SWE-agent) | - |
| Claude Code | Anthropic's agentic coding tool with tool use, MCP, plugin ecosystem, file system access | proprietary | [docs.anthropic.com](https://docs.anthropic.com/en/docs/agents) | - |
| OpenAI Codex | Cloud coding agent with sandboxed execution | proprietary | [openai.com](https://openai.com/index/introducing-codex/) | - |
| OpenAI Codex CLI | Open-source terminal coding agent from OpenAI with local repo access, tool execution, and Codex cloud integration | open-source | [openai/codex](https://github.com/openai/codex) | - |
| Devin (Cognition) | Autonomous software engineering agent | proprietary | [cognition.ai](https://www.cognition.ai) | - |
| Agent Scripts | Reusable shell scripts and operational helpers for coding agents across repositories | open-source | [steipete/agent-scripts](https://github.com/steipete/agent-scripts) | - |
| GSD 2 | Spec-driven autonomous coding agent — state machine with fresh context per task, crash recovery, cost tracking, and git automation | open-source | [gsd-build/GSD-2](https://github.com/gsd-build/GSD-2) | - |
| Composio | Tool integrations for AI agents | managed | [composio.dev](https://www.composio.dev) | W24 |
| OpenCLI | Universal CLI over any website via browser session parasitism — reuses Chrome's authenticated sessions, auto-discovers APIs via explore/synthesize/cascade, LLM-optimized DOM snapshots with action-indexed elements | open-source | [jackwener/opencli](https://github.com/jackwener/opencli) | - |
| opencli-rs | Rust rewrite of OpenCLI — 4.7MB static binary, 55+ sites, 333 commands, 5-12x faster, pest PEG parser for safe templates, declarative YAML pipeline adapters with 14 step types, zero runtime deps | open-source | [nashsu/opencli-rs](https://github.com/nashsu/opencli-rs) | - |
| aurl | API spec to CLI — projects OpenAPI/GraphQL specs into named subcommands with auto-generated help, spec-driven validation, and auth management for agent-first API consumption | open-source | [ShawnPana/aurl](https://github.com/ShawnPana/aurl) | - |
| Hermes Agent | Self-improving AI agent with persistent memory, autonomous skill creation, multi-platform messaging, and subagent delegation | open-source | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | - |
| OpenClaw | Agent gateway with messaging, memory, MCP tools, skills, and multi-model orchestration | open-source | [openclaw/openclaw](https://github.com/openclaw/openclaw) | - |
| Claude Context | Code search MCP for making a full codebase available as retrievable context to Claude Code and other agents | open-source | [zilliztech/claude-context](https://github.com/zilliztech/claude-context) | - |
| Obsidian Skills | Agent skills for operating on Obsidian's local-first Markdown, Bases, JSON Canvas, and CLI surfaces | open-source | [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | - |
| DESIGN.md | Google Labs format specification for giving coding agents a persistent, structured understanding of a visual identity and design system | open-source | [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | - |
| MCP | Model Context Protocol — standard for tool integration | open-source | [github.com](https://github.com/modelcontextprotocol) | - |
| MCP Servers | Official reference and community server catalog for Model Context Protocol connectors | open-source | [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | - |
| A2UI | Google's Agent-to-User Interface protocol — declarative JSON format for agents to generate rich interactive UIs without executing code | open-source | [google/A2UI](https://github.com/google/A2UI) | - |
| Agent2Agent (A2A) | Google-led protocol for agent-to-agent interoperability, task delegation, and cross-system agent communication | open-source | [a2aproject/A2A](https://github.com/a2aproject/A2A) | - |
| Cursor | AI-first code editor with multi-model support | proprietary | [cursor.com](https://cursor.com) | - |
| Windsurf | AI code editor with Cascade agent | proprietary | [windsurf.com](https://windsurf.com) | - |
| CopilotKit | Frontend framework for embedding AI copilots and generative UI into React apps, creators of the AG-UI protocol | open-source | [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | - |
| json-render | Vercel Generative UI framework — LLMs output catalog-constrained JSON specs rendered across 10 platforms (React, Vue, Svelte, Native, PDF, video, 3D) with streaming and stateful prop expressions | open-source | [vercel-labs/json-render](https://github.com/vercel-labs/json-render) | - |
| Vibe Figma | Figma-to-React converter for turning design files into React, TypeScript, and Tailwind code | open-source | [vibeflowing-inc/vibe_figma](https://github.com/vibeflowing-inc/vibe_figma) | - |
| CodexBar | macOS menu bar app showing real-time AI coding tool quotas — tracks 16 providers (Codex, Claude, Cursor, Gemini, Copilot), session/weekly limits, reset countdowns | open-source | [steipete/CodexBar](https://github.com/steipete/CodexBar) | - |
| Collaborator | Infinite canvas workspace for agentic dev — terminals, code, notes as spatial tiles with tmux-backed persistent agent sessions | open-source | [collaborator-ai/collab-public](https://github.com/collaborator-ai/collab-public) | - |
| Continue | Open-source AI coding assistant for VS Code/JetBrains | open-source | [continuedev/continue](https://github.com/continuedev/continue) | W23 |
| Aider | Terminal-based AI pair programming | open-source | [paul-gauthier/aider](https://github.com/paul-gauthier/aider) | - |
| OpenHands | Open-source software-development agent with sandboxed execution, browser/tool use, and GitHub-oriented coding workflows | open-source | [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | - |
| Zapier AI Actions | Connect AI to 6000+ apps via natural language | managed | [zapier.com](https://zapier.com/platform/ai-actions) | - |
| Sweep AI | GitHub issue to PR automation agent | managed | [sweep.dev](https://sweep.dev) | S23 |
| Middleware | Observability integrations for AI systems | managed | [middleware.io](https://middleware.io) | W23 |
| OpenAI Agents SDK | First-party SDK for building agent workflows with tools, handoffs, tracing, and guardrails | open-source | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | - |
| GitHub Copilot | AI code completion and chat in IDEs | managed | [features/copilot](https://github.com/features/copilot) | - |
| Sourcegraph Cody | AI coding assistant with full-codebase context | managed | [sourcegraph.com](https://sourcegraph.com/cody) | - |
| Tabnine | Privacy-focused AI code completion with on-prem option | managed | [tabnine.com](https://www.tabnine.com) | - |
| Vercel AI SDK | React/Next.js hooks for streaming LLM responses | open-source | [vercel/ai](https://github.com/vercel/ai) | - |
| Streamlit | Python framework for building data and AI web apps | open-source | [streamlit/streamlit](https://github.com/streamlit/streamlit) | - |
| Chainlit | Chat UI framework for LLM applications | open-source | [Chainlit/chainlit](https://github.com/Chainlit/chainlit) | - |
| AWS Q Developer | Amazon AI coding assistant for AWS and IDEs | managed | [aws.amazon.com](https://aws.amazon.com/q/developer/) | - |
| Replit | Browser-based IDE with AI Agent for full-stack app building | managed | [replit.com](https://replit.com) | - |
| OpenCode | Open-source terminal AI coding agent — provider-agnostic, LSP integration, client/server architecture | open-source | [anomalyco/opencode](https://github.com/anomalyco/opencode) | - |
| Claudian | Obsidian plugin integrating Claude Code as an agentic vault collaborator — file ops, vision, MCP, slash commands | open-source | [YishenTu/claudian](https://github.com/YishenTu/claudian) | - |
| Browser Use | Open-source tool enabling web-browsing AI agents to click, type, and navigate | open-source | [browser-use/browser-use](https://github.com/browser-use/browser-use) | W25 |
| A1base | Infrastructure for AI agents to communicate over WhatsApp, SMS, email, phone | managed | [a1base.com](https://a1base.com) | W25 |
| Dedalus Labs | Hosts MCP servers with autoscaling and one-click deployment | managed | [dedaluslabs.com](https://dedaluslabs.com) | S25 |
| Observee | Build AI agents with 1000+ MCP integrations, managed OAuth and observability | managed | [observee.ai](https://observee.ai) | S25 |
| Make | Visual automation platform with AI agent capabilities and 1,800+ app connectors | managed | [make.com](https://www.make.com) | - |
| UiPath | Enterprise RPA platform adding agentic automation with AI reasoning on top of process automation | managed | [uipath.com](https://www.uipath.com) | - |
| Goose | Open-source extensible AI agent by Block — Rust-based, multi-model, 1700+ MCP servers, desktop + CLI | open-source | [block/goose](https://github.com/block/goose) | - |
| Gemini CLI | Google's open-source terminal AI agent — Gemini models, 1M context, MCP support, Google Search grounding | open-source | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | - |
| Greptile | AI code review agent with full codebase context | managed | [greptile.com](https://greptile.com) | W24 |
| Wordware | Web-hosted IDE for building AI agents using natural language | managed | [wordware.ai](https://wordware.ai) | S24 |
| Nozomio | Context augmentation layers for AI coding agents | managed | [nozomio.com](https://nozomio.com) | S25 |
| Supermaven | Ultra-fast AI code completion with 1M token context window | proprietary | [supermaven.com](https://supermaven.com) | - |
| Kiro | AWS spec-driven agentic IDE (VS Code fork) that turns prompts into code | proprietary | [kiro.dev](https://kiro.dev) | - |
| GitHub Copilot | AI pair programmer with code completion, agent mode, and Copilot Workspace | managed | [features/copilot](https://github.com/features/copilot) | - |

## Layer 10 - Eval & Safety

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| Openlayer | Fine-tuning evaluation and data quality | managed | [openlayer.com](https://openlayer.com) | - |
| OpenPipe | Fine-tuning and evaluation platform for LLMs | managed | [openpipe.ai](https://openpipe.ai) | S23 |
| DeepSpec | DeepSeek codebase for training and evaluating speculative decoding algorithms | open-source | [deepseek-ai/DeepSpec](https://github.com/deepseek-ai/DeepSpec) | - |
| pi-autoresearch (Shopify) | Open-source autoresearch harness — automated research loop with benchmark-driven optimization, shipped by Shopify Engineering | open-source | [Shopify/pi-autoresearch](https://github.com/Shopify/pi-autoresearch) | - |
| Helicone | LLM proxy with observability and cost tracking | managed | [helicone.ai](https://www.helicone.ai) | W23 |
| AgentRC | Microsoft tool for making repositories AI-ready through repo context, instructions, and readiness checks | open-source | [microsoft/agentrc](https://github.com/microsoft/agentrc) | - |
| Claude HUD | Real-time heads-up display for Claude Code — context window consumption, tool activity, subagent status, rate limits, task progress via statusLine API and transcript parsing | open-source | [jarrodwatts/claude-hud](https://github.com/jarrodwatts/claude-hud) | - |
| GSD 2 | Spec-driven autonomous coding agent — state machine with fresh context per task, crash recovery, cost tracking, and git automation | open-source | [gsd-build/GSD-2](https://github.com/gsd-build/GSD-2) | - |
| Code Review Graph | Local-first code intelligence graph for MCP/CLI that helps agents read only relevant code during review and large-repo workflows | open-source | [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | - |
| Braintrust | Eval framework with logging and datasets | managed | [braintrust.dev](https://www.braintrust.dev) | S23 |
| Langfuse | Open-source LLM observability and tracing | open-source | [langfuse/langfuse](https://github.com/langfuse/langfuse) | - |
| Promptfoo | CLI for testing and evaluating prompts | open-source | [promptfoo/promptfoo](https://github.com/promptfoo/promptfoo) | - |
| LangSmith | LangChain observability and evaluation platform | managed | [smith.langchain.com](https://smith.langchain.com) | - |
| Guardrails AI | Output validation and guardrail framework | open-source | [guardrails-ai/guardrails](https://github.com/guardrails-ai/guardrails) | - |
| NeMo Guardrails | NVIDIA programmable guardrails toolkit | open-source | [NVIDIA/NeMo-Guardrails](https://github.com/NVIDIA/NeMo-Guardrails) | - |
| Humanloop | Evaluation and prompt management platform | managed | [humanloop.com](https://humanloop.com) | - |
| Llama Guard | Meta safety classifier for content filtering | open-weight | [ai.meta.com](https://ai.meta.com/blog/purple-llama-project/) | - |
| Athina AI | Production AI monitoring and evaluation | managed | [athina.ai](https://athina.ai) | S23 |
| Galileo | Data intelligence for LLMs | managed | [rungalileo.io](https://www.rungalileo.io) | W22 |
| Freeplay | Prompt testing and evaluation platform | managed | [freeplay.ai](https://freeplay.ai) | W24 |
| HuggingFace Evaluate | Model evaluation metrics library | open-source | [huggingface/evaluate](https://github.com/huggingface/evaluate) | - |
| Weights & Biases | ML experiment tracking and evaluation | managed | [wandb.ai](https://wandb.ai) | - |
| MLflow | Open-source ML lifecycle management | open-source | [mlflow/mlflow](https://github.com/mlflow/mlflow) | - |
| RAGAS | RAG evaluation framework | open-source | [explodinggradients/ragas](https://github.com/explodinggradients/ragas) | - |
| Phoenix (Arize) | LLM observability and evaluation platform | open-source | [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) | - |
| DeepEval | Open-source LLM evaluation framework | open-source | [confident-ai/deepeval](https://github.com/confident-ai/deepeval) | - |
| DeepSec | Agent-powered security harness for finding vulnerabilities in codebases, with resumable scan/process/revalidate/export workflow | open-source | [vercel-labs/deepsec](https://github.com/vercel-labs/deepsec) | - |
| SkillSpector | NVIDIA security scanner for AI agent skills, malicious patterns, and skill-level risks | open-source | [NVIDIA/SkillSpector](https://github.com/NVIDIA/SkillSpector) | - |
| Comet ML | ML experiment tracking and model monitoring | managed | [comet.com](https://www.comet.com) | - |
| Neptune.ai | Experiment tracking for foundation model training | managed | [neptune.ai](https://neptune.ai) | - |
| DSPy | Framework for programming LMs with automatic prompt and weight optimization | open-source | [stanfordnlp/dspy](https://github.com/stanfordnlp/dspy) | - |
| OpenAI Agents SDK | First-party SDK for building agent workflows with tools, handoffs, tracing, and guardrails | open-source | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) | - |
| Traceloop (OpenLLMetry) | Vendor-neutral LLM tracing via OpenTelemetry | open-source | [traceloop/openllmetry](https://github.com/traceloop/openllmetry) | - |
| LMSYS Chatbot Arena | Crowdsourced LLM evaluation via blind comparisons | open-source | [lm-sys/FastChat](https://github.com/lm-sys/FastChat) | - |
| Deepchecks | ML and LLM validation and testing framework | open-source | [deepchecks/deepchecks](https://github.com/deepchecks/deepchecks) | - |
| NemoClaw | NVIDIA agent sandbox — binary-scoped network policies (per-binary, per-endpoint, per-HTTP-method), inference interception via gateway, Landlock/seccomp/netns enforcement, immutable config with operator-in-the-loop approval | open-source | [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | - |
| Greptile | AI code review agent with full codebase context | managed | [greptile.com](https://greptile.com) | W24 |
| Laminar | Open-source observability for AI agents — traces, replays, anomaly detection | open-source | [lmnr-ai/lmnr](https://github.com/lmnr-ai/lmnr) | S24 |
| Maihem | AI agents that test and evaluate chatbots and voicebots | managed | [maihem.ai](https://maihem.ai) | W24 |
| Lucidic | Debug, test, and evaluate AI agents in production with traces and failure grouping | managed | [lucidic.ai](https://lucidic.ai) | W25 |
| Salus | Runtime API wrapper that checks AI agent actions and blocks incorrect ones | managed | [salus.ai](https://salus.ai) | S25 |
| Arthur AI | AI model monitoring, bias detection, and governance platform | managed | [arthur.ai](https://arthur.ai) | - |
| Lakera | AI security — prompt injection detection and LLM firewalls | managed | [lakera.ai](https://www.lakera.ai) | - |
| iron-sensor | eBPF kernel-level behavioral monitor for AI coding agents — detects persistence, privilege escalation, sensitive file access via syscall tracepoints | open-source | [ironsh/iron-sensor](https://github.com/ironsh/iron-sensor) | - |
| RoboRev | CLI daemon that continuously reviews AI-agent commits via git hooks | open-source | [roborev.io](https://www.roborev.io) | - |
| PaperBench | OpenAI benchmark evaluating AI agents' ability to replicate research papers end-to-end (8316 gradable tasks) | open-source | [openai/preparedness](https://github.com/openai/preparedness) | - |
| BrowseComp | OpenAI benchmark for persistent, strategic web browsing and research tasks that require multi-step source discovery | open-source | [openai/simple-evals](https://github.com/openai/simple-evals) | - |
| Terminal-Bench 2.0 | Benchmark for real terminal work by AI agents, using executable tasks and verifiable command-line outcomes | open-source | [laude-institute/terminal-bench](https://github.com/laude-institute/terminal-bench) | - |
| SWE-Bench Pro | Software-engineering agent benchmark with longer, enterprise-like, contamination-resistant coding tasks | open-source | [SWE-bench/SWE-bench](https://github.com/SWE-bench/SWE-bench) | - |
| Bloom | Anthropic's automated behavioral evaluation framework — generates scenarios, quantifies frequency/severity, 0.86 human correlation | open-source | [safety-research/bloom](https://github.com/safety-research/bloom) | - |
| OpenGauss | Multi-agent Lean 4 formalization orchestrator with On-Policy Distillation — converts tool feedback (compiler errors, test failures) into per-token training signal via hindsight relabeling | open-source | [math-inc/OpenGauss](https://github.com/math-inc/OpenGauss) | - |
| Lean 4 | Open-source theorem prover and programming language for formal verification | open-source | [leanprover/lean4](https://github.com/leanprover/lean4) | - |
| Dafny | Verification-aware programming language with integrated specs and proofs | open-source | [dafny-lang/dafny](https://github.com/dafny-lang/dafny) | - |
| Math Inc | Industrial-scale autoformalization — Gauss agent synthesizes Lean proofs from research papers (200K lines for Fields Medal sphere packing proof), compounding library creates virtuous training cycle | managed | [mathematics.inc](https://mathematics.inc) | - |
| DeepSeek-Prover-V2 | Open-source LLM for formal theorem proving in Lean 4 | open-source | [deepseek-ai/DeepSeek-Prover-V2](https://github.com/deepseek-ai/DeepSeek-Prover-V2) | - |
| Karpathy Autoresearch | AI agents that automatically run research loops on single-GPU nanochat training | open-source | [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | - |
| pi-autoresearch (davebcn87) | Autonomous experiment loop for AI agents — propose, measure, retain, discard, repeat with persistent state across sessions | open-source | [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) | - |
| Codex Autoresearch | Autonomous experimentation skill for Codex CLI — graduated stuck recovery (REFINE/PIVOT/Search), protocol re-anchoring against context drift, cross-run lessons with time-decay, parallel experiments via git worktrees | open-source | [leo-lilinxiao/codex-autoresearch](https://github.com/leo-lilinxiao/codex-autoresearch) | - |
| Claude Autoresearch | Domain-agnostic autonomous loop as a Claude Code skill — pure Markdown behavioral protocol, noise-aware metric handling (multi-run median, confirmation runs, min delta thresholds), composable command chaining across 9 specialized workflows | open-source | [uditgoenka/autoresearch](https://github.com/uditgoenka/autoresearch) | - |
| Unslop | Empirical output-mode-collapse detector — generates N samples, self-audits behavioral defaults with frequency counts, produces subtractive constraint files (prohibitions, not prescriptions) | open-source | [mshumer/unslop](https://github.com/mshumer/unslop) | - |
| AutoResearchClaw | Autonomous research pipeline — 23-stage state machine with ground-truth registries (anti-fabrication), multi-agent debate for hypothesis generation, self-healing experiments, recursive PIVOT re-execution, four-layer citation verification | open-source | [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | - |
| AutoKernel | Autonomous GPU kernel optimization via edit-benchmark-iterate loops | open-source | [RightNow-AI/autokernel](https://github.com/RightNow-AI/autokernel) | - |
| KernelAgent | Multi-agent GPU kernel optimization with hardware profiling feedback | open-source | [pytorch.org](https://pytorch.org/blog/kernelagent-hardware-guided-gpu-kernel-optimization-via-multi-agent-orchestration/) | - |
| KernelBench | Benchmark for evaluating LLM-generated GPU kernels (250 tasks) | open-source | [ScalingIntelligence/KernelBench](https://github.com/ScalingIntelligence/KernelBench) | - |
| AlphaEvolve | Evolutionary coding agent for algorithm discovery using Gemini ensemble | proprietary | [deepmind.google](https://deepmind.google/blog/alphaevolve/) | - |
| OpenEvolve | Open-source evolutionary code optimization framework | open-source | [algorithmicsuperintelligence/openevolve](https://github.com/algorithmicsuperintelligence/openevolve) | - |
| ShinkaEvolve | Multi-island evolutionary optimization framework combining LLM ensembles with evolutionary algorithms for scientific discovery | open-source | [SakanaAI/ShinkaEvolve](https://github.com/SakanaAI/ShinkaEvolve) | - |
| HyperAgents | Meta AI self-referential agents — task agent + meta agent in one editable program, metacognitive self-modification where the improvement mechanism improves itself, cross-domain meta-transfer | open-source | [facebookresearch/Hyperagents](https://github.com/facebookresearch/Hyperagents) | - |
| FunSearch | LLM-driven evolutionary search for mathematical discovery | open-source | [google-deepmind/funsearch](https://github.com/google-deepmind/funsearch) | - |
| AlphaCodium | Test-based iterative flow for code generation against benchmarks | open-source | [codium-ai/alphacodium](https://github.com/codium-ai/alphacodium) | - |
| Eureka | LLM evolutionary reward function design for robotics | open-source | [eureka-research/Eureka](https://github.com/eureka-research/Eureka) | - |
| CompilerGym | RL environment for compiler optimization pass selection | open-source | [facebookresearch/CompilerGym](https://github.com/facebookresearch/CompilerGym) | - |
| BitsEvolve | Production evolutionary optimization with formal verification and WASM hot-swap | proprietary | [datadoghq.com](https://www.datadoghq.com/blog/ai/fully-autonomous-optimization/) | - |
| Strix | Open-source LLM-powered autonomous pentesting agent — Docker-sandboxed agent loop with browser, proxy, terminal, produces validated PoC exploits for business logic, auth bypass, injection flaws | open-source | [usestrix/strix](https://github.com/usestrix/strix) | - |
| CodeWall AI | Autonomous AI security testing agent for probing AI apps, API surfaces, RAG systems, and agent workflows | managed | [codewall.ai](https://codewall.ai) | - |

## Layer 11 - Products

| Entity | What they do | Type | Source | YC Batch |
| --- | --- | --- | --- | --- |
| Lobe Chat | Open-source chat UI with plugin ecosystem, multi-model support, file upload, TTS, and knowledge base | open-source | [lobehub/lobe-chat](https://github.com/lobehub/lobe-chat) | - |
| Open WebUI | Self-hosted ChatGPT-like interface supporting Ollama, OpenAI, and other backends | open-source | [open-webui/open-webui](https://github.com/open-webui/open-webui) | - |
| ElevenLabs | Text-to-speech, voice cloning, and audio AI platform | proprietary | [elevenlabs.io](https://elevenlabs.io) | - |
| PlayHT | AI voice generation and text-to-speech API | managed | [play.ht](https://play.ht) | - |
| Sora | OpenAI video generation model | proprietary | [openai.com](https://openai.com/sora) | - |
| Kling | Kuaishou AI video generation | proprietary | [klingai.com](https://klingai.com) | - |
| Veo | Google DeepMind video generation model | proprietary | [deepmind.google](https://deepmind.google/technologies/veo/) | - |
| Suno | AI music and song generation | proprietary | [suno.com](https://suno.com) | - |
| NVIDIA VSS Blueprint | Reference architectures for GPU-accelerated vision agents, video search, summarization, and video analytics apps | open-source | [NVIDIA-AI-Blueprints/video-search-and-summarization](https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization) | - |
| ComfyUI | Node-graph runtime for image, video, and audio generation workflows with a large custom-node ecosystem | open-source | [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) | - |
| OpenAI Codex CLI | Open-source terminal coding agent from OpenAI with local repo access, tool execution, and Codex cloud integration | open-source | [openai/codex](https://github.com/openai/codex) | - |
| Paperclip | Open-source app for managing workplace agents, tasks, runs, and oversight | open-source | [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | - |
| LibreChat | Open-source multi-model chat interface | open-source | [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) | - |
| OpenClaw | Agent gateway with messaging, memory, MCP tools, skills, and multi-model orchestration | open-source | [openclaw/openclaw](https://github.com/openclaw/openclaw) | - |
| Dexter | Autonomous agent for deep financial research — coordinates a team of agents for stock analysis and investor-style research workflows | open-source | [virattt/dexter](https://github.com/virattt/dexter) | - |
| Langdock | Enterprise AI platform with multi-model orchestration | proprietary | [langdock.com](https://langdock.com) | - |
| Vibe Figma | Figma-to-React converter for turning design files into React, TypeScript, and Tailwind code | open-source | [vibeflowing-inc/vibe_figma](https://github.com/vibeflowing-inc/vibe_figma) | - |
| OpenHands | Open-source software-development agent with sandboxed execution, browser/tool use, and GitHub-oriented coding workflows | open-source | [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | - |
| ChatGPT | General-purpose AI assistant by OpenAI | proprietary | [chat.openai.com](https://chat.openai.com) | - |
| Claude | AI assistant with long context and tool use | proprietary | [claude.ai](https://claude.ai) | - |
| Gemini | Google AI assistant, integrated with Workspace | proprietary | [gemini.google.com](https://gemini.google.com) | - |
| Perplexity | AI search engine with citations | proprietary | [perplexity.ai](https://www.perplexity.ai) | - |
| Harvey | AI for legal professionals | proprietary | [harvey.ai](https://www.harvey.ai) | - |
| Abridge | AI medical documentation | proprietary | [abridge.com](https://www.abridge.com) | - |
| Writer | Enterprise AI writing platform | proprietary | [writer.com](https://writer.com) | - |
| Sierra | Conversational AI for customer experience | proprietary | [sierra.ai](https://www.sierra.ai) | - |
| 11x | AI sales development agents | proprietary | [11x.ai](https://www.11x.ai) | - |
| Midjourney | AI image generation | proprietary | [midjourney.com](https://midjourney.com) | - |
| Runway | AI video generation and editing | proprietary | [runwayml.com](https://runwayml.com) | - |
| Jasper | AI marketing content platform | proprietary | [jasper.ai](https://www.jasper.ai) | - |
| Copy.ai | AI marketing copy generation | proprietary | [copy.ai](https://www.copy.ai) | - |
| Glean | Enterprise AI search across all company data | proprietary | [glean.com](https://www.glean.com) | - |
| Hebbia | AI document analysis for enterprises | proprietary | [hebbia.ai](https://www.hebbia.ai) | - |
| Bland AI | AI phone call agents | proprietary | [bland.ai](https://www.bland.ai) | W24 |
| Lovable | AI web app builder | proprietary | [lovable.dev](https://lovable.dev) | W24 |
| Bolna | Voice AI agents platform | proprietary | [bolna.dev](https://bolna.dev) | W24 |
| DevRev | AI-powered CRM for product companies | proprietary | [devrev.ai](https://devrev.ai) | W23 |
| HuggingFace Spaces / Gradio | Demo hosting and UI framework for ML apps | open-source | [gradio-app/gradio](https://github.com/gradio-app/gradio) | - |
| Inflection AI | Pi personal AI, enterprise foundation models | proprietary | [inflection.ai](https://inflection.ai) | - |
| Character.AI | Conversational AI characters platform | proprietary | [character.ai](https://character.ai) | - |
| Apple Core AI Models | Model export recipes, Python primitives, and Swift runtime utilities for on-device AI | open-source | [apple/coreai-models](https://github.com/apple/coreai-models) | - |
| Streamlit | Python framework for building data and AI web apps | open-source | [streamlit/streamlit](https://github.com/streamlit/streamlit) | - |
| AWS Q Developer | Amazon AI coding assistant for AWS and IDEs | managed | [aws.amazon.com](https://aws.amazon.com/q/developer/) | - |
| Google AI Studio | Gemini API playground and prototyping tool | free | [aistudio.google.com](https://aistudio.google.com) | - |
| Salesforce Agentforce | AI agents for CRM, sales, and customer service | proprietary | [salesforce.com](https://www.salesforce.com/agentforce/) | - |
| Replit | Browser-based IDE with AI Agent for full-stack app building | managed | [replit.com](https://replit.com) | - |
| Bolt.new | AI full-stack app builder in the browser | managed | [bolt.new](https://bolt.new) | - |
| v0 by Vercel | AI React/Next.js UI generator from text prompts | managed | [v0.dev](https://v0.dev) | - |
| Phind | AI search engine for developers | free | [phind.com](https://www.phind.com) | - |
| Poe | Multi-model AI chat aggregator by Quora | managed | [poe.com](https://poe.com) | - |
| Grok | xAI conversational AI product with reasoning, code, voice, image, video, and X app surfaces | proprietary | [grok.x.ai](https://grok.x.ai) | - |
| Pika | AI video generation and editing from text | managed | [pika.art](https://pika.art) | - |
| Luma AI | 3D capture and text-to-video generation | managed | [lumalabs.ai](https://lumalabs.ai) | - |
| Ideogram | AI image generation with excellent text rendering | managed | [ideogram.ai](https://ideogram.ai) | - |
| Resemble AI | Voice cloning and TTS for enterprise | managed | [resemble.ai](https://www.resemble.ai) | - |
| Palantir AIP | Enterprise AI platform for government and commercial | proprietary | [palantir.com](https://www.palantir.com/platforms/aip/) | - |
| OpenCode | Open-source terminal AI coding agent — provider-agnostic, LSP integration, client/server architecture | open-source | [anomalyco/opencode](https://github.com/anomalyco/opencode) | - |
| Claudian | Obsidian plugin integrating Claude Code as an agentic vault collaborator — file ops, vision, MCP, slash commands | open-source | [YishenTu/claudian](https://github.com/YishenTu/claudian) | - |
| ClawWork | OpenClaw as autonomous AI coworker — earned $15K in 11 hours, from HKU Data Science lab | open-source | [HKUDS/ClawWork](https://github.com/HKUDS/ClawWork) | - |
| OpenAI Frontier | Enterprise platform for building and managing AI agents with integrated governance, permissions, and multi-provider support | managed | [openai.com](https://openai.com) | - |
| Gemini CLI | Google's open-source terminal AI agent — Gemini models, 1M context, MCP support, Google Search grounding | open-source | [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | - |
| Le Chat | Mistral AI assistant with Deep Research, voice, MCP connectors | proprietary | [mistral.ai](https://mistral.ai/products/le-chat) | - |
| Kiro | AWS spec-driven agentic IDE (VS Code fork) that turns prompts into code | proprietary | [kiro.dev](https://kiro.dev) | - |
| Microsoft 365 Copilot | AI assistant embedded in Word, Excel, PowerPoint, Outlook, Teams | proprietary | [microsoft.com](https://www.microsoft.com/en-us/microsoft-365/copilot) | - |
| Apple Intelligence | System-level AI suite across Apple devices — summarization, writing, Siri | proprietary | [developer.apple.com](https://developer.apple.com/apple-intelligence/) | - |
| Character.AI | Platform for creating and chatting with persistent AI characters | proprietary | [character.ai](https://character.ai) | - |
| Pi | Emotionally intelligent personal AI assistant by Inflection AI | proprietary | [pi.ai](https://pi.ai) | - |
| GitHub Copilot | AI pair programmer with code completion, agent mode, and Copilot Workspace | managed | [features/copilot](https://github.com/features/copilot) | - |
| NotebookLM | Google's research assistant with source-grounded citations and audio overviews | proprietary | [notebooklm.google.com](https://notebooklm.google.com) | - |
| Project N.O.M.A.D. | Offline-first AI knowledge server — bundles local LLM (Ollama), vector DB (Qdrant), Wikipedia/encyclopedia (Kiwix), education (Kolibri), and maps into one air-gapped appliance with ZIM-to-RAG pipeline | open-source | [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | - |
