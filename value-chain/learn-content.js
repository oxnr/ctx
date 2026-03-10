// Learn content per value chain layer — displayed inline when a layer is clicked
window.VC_LEARN = {
  compute: {
    index: "01",
    title: "Compute",
    subtitle: "GPUs, TPUs, and cloud infrastructure that execute AI workloads. Transforms electricity and silicon into the matrix operations everything else depends on.",
    html: `
      <p>Everything in AI runs on matrix math, and compute is the hardware that executes it. Compute is a cross-cutting substrate beneath the whole stack, but L01 names the supplier market for chips, systems, and GPU clouds. In practice, layers 02 through 04 consume compute most directly. You do not need to buy GPUs to understand this layer, but you do need to understand what drives the cost and feasibility of the layers above it.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 480 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="20" width="70" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="37" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Chip</text>
          <line x1="76" y1="40" x2="110" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="108,37 114,40 108,43" fill="#666360"/>
          <rect x="118" y="20" width="70" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="153" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Server</text>
          <line x1="192" y1="40" x2="226" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="224,37 230,40 224,43" fill="#666360"/>
          <rect x="234" y="20" width="70" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="269" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Cluster</text>
          <line x1="308" y1="40" x2="342" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="340,37 346,40 340,43" fill="#666360"/>
          <rect x="350" y="20" width="70" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="385" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Cloud</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Silicon</h4>
        <p>The physical hardware that executes AI workloads. GPU architecture (NVIDIA H100/B200), custom silicon (Google TPU, AWS Trainium, Cerebras wafer-scale), and the CUDA software ecosystem that dominates. Memory bandwidth — not raw FLOPS — is the key bottleneck for transformer inference.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>GPU vs TPU vs custom silicon tradeoffs</li>
          <li>Memory bandwidth as the real bottleneck</li>
          <li>CUDA lock-in and alternatives (ROCm, Metal)</li>
          <li>Chip generations and how they affect model feasibility</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Read a GPU spec sheet and identify the inference-relevant metrics</li>
          <li>Compare silicon options for a given workload profile</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">GPU Clouds</h4>
        <p>Cloud providers specializing in GPU access for AI workloads. Ranges from bare-metal clusters for training (CoreWeave, Lambda) to serverless GPU functions (Modal). Pricing models vary: reserved, on-demand, spot, and marketplace.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Reserved vs on-demand vs spot GPU pricing</li>
          <li>GPU cloud specialists vs hyperscalers (AWS, GCP, Azure)</li>
          <li>Serverless GPU (Modal) vs persistent clusters</li>
          <li>Marketplace models (Vast.ai, RunPod)</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Compare cloud GPU pricing for a given workload</li>
          <li>Choose between GPU cloud and hyperscaler for a project</li>
          <li>Estimate monthly compute costs</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Training Infra</h4>
        <p>Software that coordinates training across multiple GPUs and machines. Data parallelism, model parallelism, pipeline parallelism, and the communication libraries (NCCL) that make them work.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Data parallelism vs model parallelism vs pipeline parallelism</li>
          <li>NCCL and inter-GPU communication overhead</li>
          <li>Distributed training frameworks (HF Accelerate, DeepSpeed, Ray Train)</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Set up multi-GPU training with HF Accelerate</li>
          <li>Understand parallelism strategy tradeoffs</li>
        </ul>
      </div>`
  },
  pretrain: {
    index: "02",
    title: "Pre-Training",
    subtitle: "Building foundation models from massive datasets. Transforms trillions of tokens into base weights that encode language and reasoning.",
    html: `
      <p>Pre-training builds foundation models from massive datasets — trillions of tokens of text, code, and multimodal data. This is generally the most capital-intensive layer, although public cost estimates vary widely depending on model size, hardware assumptions, and what is included in the estimate. Most teams never touch pre-training directly, but understanding how base models are made explains their capabilities and limitations.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 480 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="20" width="70" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="37" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Data</text>
          <line x1="76" y1="40" x2="110" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="108,37 114,40 108,43" fill="#666360"/>
          <rect x="118" y="20" width="80" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="158" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Tokenize</text>
          <line x1="202" y1="40" x2="236" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="234,37 240,40 234,43" fill="#666360"/>
          <rect x="244" y="20" width="70" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="279" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Train</text>
          <line x1="318" y1="40" x2="352" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="350,37 356,40 350,43" fill="#666360"/>
          <rect x="360" y="20" width="90" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="405" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Checkpoint</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Foundation Models</h4>
        <p>The organizations that build foundation models and the models themselves. Closed-weight labs (OpenAI, Anthropic, Google) vs open-weight labs (Meta, Mistral, DeepSeek). Each lab's research direction shapes what capabilities exist downstream.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Closed-weight vs open-weight tradeoffs</li>
          <li>Model families and their architectures (GPT, Claude, Llama, Gemini)</li>
          <li>MoE (Mixture of Experts) vs dense architectures</li>
          <li>Scaling laws and diminishing returns</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Compare foundation models by capability, cost, and openness</li>
          <li>Track model releases and understand what changed</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Training Data</h4>
        <p>The data that models learn from. Data quality has become more important than data quantity. Includes web crawls (Common Crawl), curated datasets (FineWeb), human annotation (Scale AI, Labelbox), and synthetic data generation.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Data quality over data quantity — the shift driving current gains</li>
          <li>Web crawl curation and deduplication</li>
          <li>Human annotation vs programmatic labeling (Snorkel)</li>
          <li>Synthetic data generation for training</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Evaluate a training dataset for quality and coverage</li>
          <li>Understand how training data choices affect model behavior</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Training Frameworks</h4>
        <p>The software that implements model architectures and training loops. From minimal implementations (nanoGPT) to production libraries (HF Transformers) to distributed frameworks (Megatron-LM).</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Transformer implementation details matter for training efficiency</li>
          <li>Tokenizer design affects model capability</li>
          <li>Checkpoint management and training resumption</li>
          <li>Mixed precision training (FP16, BF16)</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Read a model architecture implementation</li>
          <li>Understand training loss curves and what they indicate</li>
        </ul>
      </div>`
  },
  posttrain: {
    index: "03",
    title: "Post-Training",
    subtitle: "Fine-tuning, RLHF, distillation, and adaptation. Transforms generic base models into instruction-following, task-ready specialists.",
    html: `
      <p>Post-training transforms base models into useful tools. SFT teaches instruction following, RLHF and DPO align outputs with human preferences, LoRA enables efficient adaptation, and distillation creates smaller specialized models. This is where most teams first interact with the training pipeline. Small LoRA-style adaptations can be comparatively inexpensive, but actual cost still depends heavily on model size, hardware, dataset quality, and evaluation requirements.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 480 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="170" y="2" width="100" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="220" y="25" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Base Model</text>
          <line x1="195" y1="38" x2="60" y2="75" stroke="#666360" stroke-width="1"/>
          <line x1="210" y1="38" x2="170" y2="75" stroke="#666360" stroke-width="1"/>
          <line x1="230" y1="38" x2="290" y2="75" stroke="#666360" stroke-width="1"/>
          <line x1="245" y1="38" x2="410" y2="75" stroke="#666360" stroke-width="1"/>
          <rect x="20" y="78" width="80" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="60" y="101" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">SFT</text>
          <rect x="130" y="78" width="90" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="175" y="101" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">RLHF / DPO</text>
          <rect x="252" y="78" width="76" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="290" y="101" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">LoRA</text>
          <rect x="360" y="78" width="100" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="410" y="101" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Distillation</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Alignment</h4>
        <p>Techniques that shape a base model into something useful and safe. SFT teaches instruction following, RLHF uses human preference to train a reward model, and DPO optimizes preferences directly without a separate reward model. This is where safety behavior is primarily instilled.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>SFT (Supervised Fine-Tuning) as the foundation step</li>
          <li>RLHF vs DPO — reward model vs direct optimization</li>
          <li>Constitutional AI and self-alignment</li>
          <li>Preference data quality determines alignment quality</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Prepare an SFT dataset with instruction-response pairs</li>
          <li>Understand when RLHF vs DPO is appropriate for a use case</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Efficient Adaptation</h4>
        <p>Methods that adapt models without full retraining. LoRA trains small adapter matrices. QLoRA quantizes the base model first. Distillation trains a smaller student model from a larger teacher. Model merging combines multiple fine-tuned checkpoints.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>LoRA and QLoRA — parameter-efficient fine-tuning that runs on consumer hardware</li>
          <li>Distillation for creating smaller, faster specialist models</li>
          <li>Model merging as zero-cost ensembling</li>
          <li>Adapter composition — stacking multiple LoRAs</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Run a LoRA fine-tuning job on a specific dataset</li>
          <li>Choose rank and target modules for a LoRA adapter</li>
          <li>Evaluate fine-tuned vs base model quality</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Managed Fine-Tuning</h4>
        <p>Hosted services that handle the infrastructure for fine-tuning. Upload a dataset, configure parameters, get a fine-tuned model endpoint. Reduces the barrier from GPU management to API call.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Managed vs self-hosted fine-tuning tradeoffs</li>
          <li>Cost comparison across managed platforms</li>
          <li>Data privacy implications of uploading training data</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Fine-tune a model through a managed platform API</li>
          <li>Compare managed fine-tuning offerings for a specific use case</li>
        </ul>
      </div>`
  },
  inference: {
    index: "04",
    title: "Inference",
    subtitle: "Serving models and generating responses at scale. Transforms prompts into completions through tokenization, forward passes, and decoding.",
    html: `
      <p>Inference is running trained models to produce outputs — every AI application consumes it. If pre-training is often the most capital-intensive one-time compute event, inference is often the dominant recurring compute and latency constraint once a system is deployed. The engineering challenges are latency, throughput, cost, and hardware utilization. The choice between cloud APIs, self-hosted engines, and local runners determines your cost structure, data privacy posture, and scaling ceiling.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 540 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="20" width="72" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="38" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Prompt</text>
          <line x1="78" y1="40" x2="100" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="98,37 104,40 98,43" fill="#666360"/>
          <rect x="108" y="20" width="80" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="148" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Tokenize</text>
          <line x1="192" y1="40" x2="214" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="212,37 218,40 212,43" fill="#666360"/>
          <rect x="222" y="20" width="100" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="272" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Forward Pass</text>
          <line x1="326" y1="40" x2="348" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="346,37 352,40 346,43" fill="#666360"/>
          <rect x="356" y="20" width="74" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="393" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Decode</text>
          <line x1="434" y1="40" x2="456" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="454,37 460,40 454,43" fill="#666360"/>
          <rect x="464" y="20" width="74" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="501" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Response</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Serving Engines</h4>
        <p>Software for running models on your own infrastructure. vLLM (PagedAttention, continuous batching), llama.cpp (CPU/GPU C++ inference with GGUF quantization), TGI (HuggingFace production serving), SGLang (structured generation). Each optimizes for different tradeoffs.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>PagedAttention and KV-cache management for throughput</li>
          <li>Continuous batching for GPU utilization</li>
          <li>Quantization formats (GGUF, GPTQ, AWQ) and quality tradeoffs</li>
          <li>Speculative decoding for latency reduction</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Deploy vLLM for a production workload</li>
          <li>Quantize a model with llama.cpp for local use</li>
          <li>Benchmark throughput and latency for a serving setup</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Provider APIs</h4>
        <p>Cloud-hosted model inference accessed through API calls. The simplest path to production — no GPU management, no model loading, no scaling. Tradeoffs are cost, latency, data privacy, and vendor lock-in.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Input/output token pricing and cost estimation</li>
          <li>Rate limits, quotas, and capacity planning</li>
          <li>Data processing agreements and privacy compliance</li>
          <li>Multi-provider strategies for redundancy</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Estimate API costs for a given workload</li>
          <li>Implement retry logic and error handling for provider APIs</li>
          <li>Compare latency across providers</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Local Runners</h4>
        <p>Tools for running models on personal hardware. Ollama (CLI), LM Studio (desktop app), MLX (Apple Silicon framework). Useful for development, privacy-sensitive use cases, and offline scenarios.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Model size vs hardware requirements — what runs on a laptop</li>
          <li>Quantization enables local inference at the cost of some quality</li>
          <li>Apple Silicon (MLX) vs NVIDIA GPU for local inference</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Set up Ollama for local development</li>
          <li>Choose the right quantization level for available hardware</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Multimodal</h4>
        <p>Inference beyond text — speech-to-text (Whisper), text-to-speech (ElevenLabs), image generation (DALL-E, Midjourney), video generation (Sora, Runway). Each modality has distinct latency, quality, and cost characteristics.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>STT vs TTS pipelines and their latency profiles</li>
          <li>Image generation architectures (diffusion, autoregressive)</li>
          <li>Video generation is still early — quality and cost are rapidly changing</li>
          <li>Real-time voice requires sub-200ms latency</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Integrate a text-to-speech API into a workflow</li>
          <li>Choose between multimodal providers for a given use case</li>
        </ul>
      </div>`
  },
  routing: {
    index: "05",
    title: "Routing",
    subtitle: "Directing each request to the optimal model based on task, cost, and quality. Transforms a single API call into intelligent provider selection.",
    html: `
      <p>Routing decides which model handles which request. Without it, you are locked to a single provider. With it, you can optimize for cost, latency, and quality per task. The simplest routing is a fallback chain; the most sophisticated classifies requests and dispatches to the best-fit model automatically.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="140" y="2" width="100" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="190" y="25" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Request</text>
          <line x1="190" y1="38" x2="190" y2="55" stroke="#666360" stroke-width="1"/>
          <polygon points="187,53 190,59 193,53" fill="#666360"/>
          <rect x="140" y="62" width="100" height="36" rx="4" stroke="#e8e6e3" stroke-width="2"/>
          <text x="190" y="85" text-anchor="middle" fill="#e8e6e3" font-family="Inter,sans-serif" font-size="11" font-weight="600">Router</text>
          <line x1="155" y1="98" x2="60" y2="108" stroke="#666360" stroke-width="1"/>
          <line x1="190" y1="98" x2="190" y2="108" stroke="#666360" stroke-width="1"/>
          <line x1="225" y1="98" x2="330" y2="108" stroke="#666360" stroke-width="1"/>
          <text x="50" y="118" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Model A</text>
          <text x="190" y="118" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Model B</text>
          <text x="340" y="118" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Model C</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Gateways & Proxies</h4>
        <p>Middleware that provides a single API interface to multiple model providers. Handles authentication, format translation, caching, and rate limiting. The simplest routing: call one endpoint, reach many models.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Unified API format across providers (OpenAI-compatible)</li>
          <li>Caching for repeated queries reduces cost</li>
          <li>Load balancing and rate limit management</li>
          <li>Format translation between provider-specific APIs</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Set up LiteLLM as a local proxy</li>
          <li>Configure OpenRouter for multi-provider access</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Intelligent Routing</h4>
        <p>Systems that choose the best model for each request based on task type, difficulty, cost budget, or quality requirements. Goes beyond fallback chains into predictive model selection.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Task classification for model selection</li>
          <li>Quality prediction vs cost optimization tradeoffs</li>
          <li>Benchmark-driven routing</li>
          <li>Dynamic routing based on real-time provider performance</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Implement task-type routing that dispatches simple vs complex requests to different models</li>
          <li>Set up cost-based routing rules</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Observability Proxies</h4>
        <p>Routing layers that also capture telemetry — request/response logs, latency, cost tracking, quality metrics. Useful when you need both routing and visibility into what is happening.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Request logging for debugging and audit</li>
          <li>Cost tracking per model, per user, per feature</li>
          <li>Latency monitoring across providers</li>
          <li>Combining routing with observability in one layer</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Set up Helicone for cost and latency tracking</li>
          <li>Build dashboards for model usage patterns</li>
        </ul>
      </div>`
  },
  orchestration: {
    index: "06",
    title: "Orchestration",
    subtitle: "Coordinating multi-step agent workflows with planning, execution, and review. Transforms complex tasks into structured sequences of atomic operations.",
    html: `
      <p>Orchestration coordinates multi-step AI workflows — plan, execute, review, iterate. This is where single prompt-response interactions become reliable pipelines. Agent frameworks (LangGraph, CrewAI, Anthropic Agent SDK, OpenAI Agents API), tool use, structured handoffs, and retry logic all live here. The key design decision is how much autonomy to give agents vs how much human oversight to require.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 400 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="140" y="4" width="80" height="34" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="180" y="26" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Plan</text>
          <line x1="220" y1="21" x2="270" y2="21" stroke="#666360" stroke-width="1"/>
          <polygon points="268,18 274,21 268,24" fill="#666360"/>
          <rect x="278" y="4" width="80" height="34" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="318" y="26" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Execute</text>
          <line x1="318" y1="38" x2="318" y2="60" stroke="#666360" stroke-width="1"/>
          <polygon points="315,58 318,64 321,58" fill="#666360"/>
          <rect x="278" y="68" width="80" height="34" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="318" y="90" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Review</text>
          <line x1="278" y1="85" x2="220" y2="85" stroke="#666360" stroke-width="1"/>
          <polygon points="222,82 216,85 222,88" fill="#666360"/>
          <line x1="180" y1="85" x2="180" y2="42" stroke="#666360" stroke-width="1"/>
          <polygon points="177,44 180,38 183,44" fill="#666360"/>
          <rect x="140" y="68" width="80" height="34" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="180" y="90" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Iterate / Ship</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Agent Patterns</h4>
        <p>What an agent loop actually is: plan, tool call, observe, iterate. The core architectural choices are single-agent vs multi-agent, first-party SDKs (Anthropic Agent SDK, OpenAI Agents API) vs third-party frameworks (LangGraph, CrewAI). When a framework helps vs when raw SDK calls are better depends on workflow complexity and the need for state management.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>The agent loop — plan, act, observe, iterate until done</li>
          <li>Single-agent vs multi-agent architectures</li>
          <li>First-party SDKs (Anthropic, OpenAI) vs third-party frameworks (LangGraph, CrewAI)</li>
          <li>When a framework helps vs when raw SDK is simpler and better</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Build a single-agent loop with the Anthropic SDK</li>
          <li>Design a multi-agent system with handoff contracts</li>
          <li>Choose between framework and raw SDK for a given use case</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Workflow Design</h4>
        <p>Structuring AI work into repeatable pipelines with typed contracts between stages. Common shapes: chain (sequential steps), branch/merge (parallel paths), loop-until-done, hierarchical delegation. Cost budgets and timeout handling are first-class constraints, not afterthoughts.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Task decomposition into atomic operations with typed contracts</li>
          <li>Common workflow shapes — chain, branch/merge, loop, hierarchical delegation</li>
          <li>Cost budgets and timeout handling as first-class design constraints</li>
          <li>Handoff contracts (JSON schemas, validation) between stages</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Design a multi-step workflow with clear stage boundaries</li>
          <li>Implement cost and timeout budgets for a pipeline</li>
          <li>Build a DAG-based workflow in Dify or n8n</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Human Oversight</h4>
        <p>The spectrum of human involvement in AI workflows. Human-in-the-loop: human approves every significant action. Human-on-the-loop: agent executes, human monitors and can intervene. Bounded autonomy: agent acts within pre-defined boundaries, escalates edge cases. The right position on this spectrum depends on reversibility, stakes, and confidence.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>The oversight spectrum — human-in-the-loop, human-on-the-loop, bounded autonomy</li>
          <li>Placing a task on the spectrum — reversibility, stakes, confidence</li>
          <li>Approval gates and escalation rules as architectural primitives</li>
          <li>Trust boundaries — what the agent can do without asking</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Design an approval gate for a high-stakes agent action</li>
          <li>Implement escalation rules based on confidence thresholds</li>
          <li>Choose the right oversight level for a given use case</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Execution Environments</h4>
        <p>Where agent code actually runs. Sandboxed execution for code-generating agents, containerized environments, cloud sandboxes (E2B), and the resource limits, network policies, and data access controls that make agent execution safe.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Sandboxing for code-executing agents — why it matters</li>
          <li>Cloud sandbox (E2B) vs local execution vs containers</li>
          <li>Resource limits, network policies, data access controls</li>
          <li>Cold start latency and its impact on agent responsiveness</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Set up E2B sandboxes for an agent workflow</li>
          <li>Configure resource limits and network policies for agent execution</li>
        </ul>
      </div>`
  },
  context: {
    index: "07",
    title: "Context & Knowledge",
    subtitle: "Managing knowledge, memory, embeddings, and retrieval. Transforms scattered documents and decisions into structured, queryable intelligence.",
    html: `
      <p>Context is everything the model sees beyond training data. RAG pipelines, vector databases, embeddings, memory systems, and knowledge management all live here. The quality of your context determines the quality of your outputs — a capable model with bad context produces bad results. Context engineering is the discipline of designing what enters the window.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 480 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="90" height="30" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="47" y="24" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Documents</text>
          <rect x="2" y="44" width="90" height="30" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="47" y="64" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">History</text>
          <rect x="2" y="84" width="90" height="30" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="47" y="104" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Instructions</text>
          <line x1="96" y1="19" x2="170" y2="55" stroke="#666360" stroke-width="1"/>
          <line x1="96" y1="59" x2="170" y2="59" stroke="#666360" stroke-width="1"/>
          <line x1="96" y1="99" x2="170" y2="63" stroke="#666360" stroke-width="1"/>
          <rect x="174" y="38" width="130" height="42" rx="4" stroke="#e8e6e3" stroke-width="2"/>
          <text x="239" y="64" text-anchor="middle" fill="#e8e6e3" font-family="Inter,sans-serif" font-size="11" font-weight="600">Context Window</text>
          <line x1="308" y1="59" x2="350" y2="59" stroke="#666360" stroke-width="1"/>
          <polygon points="348,56 354,59 348,62" fill="#666360"/>
          <rect x="358" y="38" width="80" height="42" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="398" y="64" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Model</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Vector Storage</h4>
        <p>Purpose-built databases for storing and searching high-dimensional vectors. Range from managed services (Pinecone) to self-hosted engines (Qdrant, Weaviate) to database extensions (pgvector). The choice depends on scale, operational complexity tolerance, and existing infrastructure.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Approximate nearest neighbor (ANN) search algorithms (HNSW, IVF)</li>
          <li>Managed vs self-hosted vector databases</li>
          <li>pgvector — vector search inside existing Postgres</li>
          <li>Indexing strategies and their impact on recall and latency</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Set up a vector database and load embeddings</li>
          <li>Choose between managed and self-hosted for a given scale</li>
          <li>Tune index parameters for recall vs latency</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Retrieval & Search</h4>
        <p>The full retrieval pipeline: document parsing (PDF, DOCX to text), chunking, embedding, search, and reranking. Reranking is a second-stage step that scores and reorders search results before they enter the context window, dramatically improving relevance.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Document parsing quality directly affects downstream retrieval</li>
          <li>Chunking strategy — size, overlap, boundaries</li>
          <li>Hybrid search — combining vector similarity with keyword matching</li>
          <li>Reranking as a critical quality improvement step</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Build an end-to-end RAG pipeline</li>
          <li>Design a chunking strategy for a specific document type</li>
          <li>Add reranking to an existing retrieval pipeline</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Memory Systems</h4>
        <p>How AI systems maintain state across interactions. Conversation memory (within a session), long-term memory (across sessions), and knowledge management (structured, durable knowledge). The distinction between volatile state (conversation) and durable state (decisions, docs) is fundamental.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Volatile vs durable memory — different storage for different purposes</li>
          <li>Conversation memory strategies — sliding window, summarization, compaction</li>
          <li>Long-term memory systems for cross-session persistence</li>
          <li>Knowledge management as a human-AI discipline</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Implement conversation memory with summarization</li>
          <li>Design a long-term memory system for an agent</li>
          <li>Set up a knowledge management workflow</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Embeddings</h4>
        <p>The models that convert text (and other data) into numerical vectors. Embedding quality determines retrieval quality. Dedicated embedding models (Voyage AI, Jina) often outperform general-purpose LLM embeddings for retrieval tasks. Serving at scale requires specialized infrastructure (HF TEI).</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Embedding model quality varies significantly — benchmarks matter</li>
          <li>Domain-specific vs general-purpose embeddings</li>
          <li>Embedding dimensions and their impact on storage and search</li>
          <li>Batch embedding for large document collections</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Choose an embedding model for a specific retrieval use case</li>
          <li>Set up HF TEI for production embedding serving</li>
          <li>Evaluate embedding quality with retrieval benchmarks</li>
        </ul>
      </div>`
  },
  integrations: {
    index: "08",
    title: "Integrations",
    subtitle: "Connecting AI to external tools, APIs, IDEs, and databases. Transforms model outputs into real-world actions through standardized interfaces.",
    html: `
      <p>Integrations connect AI systems to the tools and data sources they need to be useful. MCP (Model Context Protocol) is one notable standardization effort, function calling is a common interface pattern for structured tool use, and coding agents are one visible integration category rather than the entire layer. This layer determines what actions the model can take beyond generating text.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="150" y="52" width="80" height="36" rx="4" stroke="#e8e6e3" stroke-width="2"/>
          <text x="190" y="75" text-anchor="middle" fill="#e8e6e3" font-family="Inter,sans-serif" font-size="11" font-weight="600">Model</text>
          <line x1="175" y1="52" x2="80" y2="18" stroke="#666360" stroke-width="1"/>
          <line x1="205" y1="52" x2="310" y2="18" stroke="#666360" stroke-width="1"/>
          <line x1="150" y1="70" x2="40" y2="70" stroke="#666360" stroke-width="1"/>
          <line x1="230" y1="70" x2="340" y2="70" stroke="#666360" stroke-width="1"/>
          <line x1="175" y1="88" x2="80" y2="122" stroke="#666360" stroke-width="1"/>
          <line x1="205" y1="88" x2="310" y2="122" stroke="#666360" stroke-width="1"/>
          <text x="68" y="14" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Files</text>
          <text x="322" y="14" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">APIs</text>
          <text x="26" y="74" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">IDEs</text>
          <text x="360" y="74" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Databases</text>
          <text x="68" y="132" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Git</text>
          <text x="322" y="132" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Tools</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Protocols & Standards</h4>
        <p>The interfaces through which AI systems connect to external capabilities. MCP (Model Context Protocol) standardizes tool discovery and invocation. Function calling is how models emit structured tool requests. Structured outputs constrain generation to valid schemas. A2A (Agent-to-Agent) is an emerging protocol for agent interoperability.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>MCP as a standard for tool discovery and invocation</li>
          <li>Function calling as the universal model-to-tool interface</li>
          <li>Structured outputs (JSON mode, schemas) for reliable parsing</li>
          <li>A2A and agent interoperability standards</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Build an MCP server for a specific tool</li>
          <li>Implement function calling with structured output validation</li>
          <li>Design a tool interface with clear schemas</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Code & Dev Tools</h4>
        <p>AI tools embedded in the development workflow. Ranges from code completion (GitHub Copilot, Supermaven) to AI-first editors (Cursor, Windsurf) to terminal agents (Aider, Claude Code). The integration depth — from autocomplete to full agent — determines how much of the development cycle the tool can handle.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Code completion vs chat vs agent — three levels of integration depth</li>
          <li>Editor-native vs terminal-native coding tools</li>
          <li>Codebase context and its impact on suggestion quality</li>
          <li>Multi-file editing and the agent mode transition</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Set up an AI coding assistant for a specific workflow</li>
          <li>Configure codebase context for better suggestions</li>
          <li>Compare coding tools for a given development style</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Connectors</h4>
        <p>Pre-built bridges between AI systems and external services. Ranges from enterprise integration platforms (Zapier AI Actions) to developer SDKs (Vercel AI SDK) to agent tool platforms (Composio). Reduces the bespoke integration work for common connections.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Pre-built vs custom integrations — when each makes sense</li>
          <li>OAuth and authentication management for tool access</li>
          <li>SDK-level integrations (Vercel AI SDK) vs platform-level (Zapier)</li>
          <li>Tool permission scoping and security</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Connect an AI workflow to external APIs through a connector platform</li>
          <li>Implement streaming responses with Vercel AI SDK</li>
          <li>Set up tool authentication and permission scoping</li>
        </ul>
      </div>`
  },
  eval: {
    index: "09",
    title: "Eval & Safety",
    subtitle: "Testing, monitoring, guardrails, and observability. Transforms raw model outputs into validated, trusted results with quality guarantees.",
    html: `
      <p>Eval determines whether the system works. Safety determines whether it fails safely. Without evals, every prompt change is a blind experiment. Without guardrails, harmful or incorrect outputs reach users unchecked. With code generation velocity exploding, stronger automated verification and quality gates matter more, not less. This layer should be built early rather than treated as cleanup work.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 540 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="20" width="70" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="37" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Output</text>
          <line x1="76" y1="40" x2="96" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="94,37 100,40 94,43" fill="#666360"/>
          <rect x="104" y="20" width="84" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="146" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Format</text>
          <line x1="192" y1="40" x2="212" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="210,37 216,40 210,43" fill="#666360"/>
          <rect x="220" y="20" width="84" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="262" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Safety</text>
          <line x1="308" y1="40" x2="328" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="326,37 332,40 326,43" fill="#666360"/>
          <rect x="336" y="20" width="84" height="40" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="378" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Quality</text>
          <line x1="424" y1="40" x2="444" y2="40" stroke="#666360" stroke-width="1"/>
          <polygon points="442,37 448,40 442,43" fill="#666360"/>
          <rect x="452" y="20" width="84" height="40" rx="20" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="494" y="45" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="10">Pass / Fail</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Evaluation</h4>
        <p>Systematic testing of AI system outputs. Golden test sets catch regressions, benchmark suites measure capability, and CI-integrated evals prevent quality degradation from shipping. Evals should run automatically on every prompt or pipeline change.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Golden test sets for regression testing</li>
          <li>Benchmark suites for capability measurement</li>
          <li>CI-integrated evals — a prompt change that degrades quality does not ship</li>
          <li>Model-as-judge for scalable evaluation</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Build a golden test set for a specific AI workflow</li>
          <li>Set up Promptfoo or Braintrust for automated evaluation</li>
          <li>Integrate evals into a CI pipeline</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Observability</h4>
        <p>Monitoring AI systems in production. Request-level tracing, latency metrics, cost tracking, error rates, and quality scores. Without observability, you cannot know whether your system is degrading until users complain.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Request-level tracing for debugging multi-step workflows</li>
          <li>Cost tracking per model, per user, per feature</li>
          <li>Latency monitoring and SLA compliance</li>
          <li>Quality score trending over time</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Set up Langfuse for LLM observability</li>
          <li>Build cost and quality dashboards</li>
          <li>Implement alerting for quality degradation</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Guardrails & Security</h4>
        <p>Runtime checks that validate model outputs before they reach users. Content safety classifiers (Llama Guard), output format validation (Guardrails AI), prompt injection detection (Lakera), and business logic constraints. These are the last line of defense.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Content safety classification — blocking harmful outputs at runtime</li>
          <li>Prompt injection detection and prevention</li>
          <li>Output format validation and business logic constraints</li>
          <li>Layered defense — multiple guardrails in sequence</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Implement runtime output validation with Guardrails AI</li>
          <li>Set up prompt injection detection</li>
          <li>Design a layered guardrail pipeline</li>
        </ul>
      </div>`
  },
  products: {
    index: "10",
    title: "Products",
    subtitle: "End-user applications built on the stack below. Transforms AI capabilities into user-facing value through chatbots, copilots, agents, and vertical tools.",
    html: `
      <p>The product layer is where infrastructure becomes useful to people. Products combine inference, routing, orchestration, context, and integrations into something humans interact with. The key question at this layer is defensibility — if your product is a thin API wrapper, the model provider will build your feature natively.</p>
      <div class="learn__diagram">
        <svg class="learn__svg" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="4" width="120" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="62" y="27" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Chatbot</text>
          <rect x="132" y="4" width="120" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="192" y="27" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Copilot</text>
          <rect x="262" y="4" width="120" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="322" y="27" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Agent</text>
          <rect x="2" y="52" width="120" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="62" y="75" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Search</text>
          <rect x="132" y="52" width="120" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="192" y="75" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Creative</text>
          <rect x="262" y="52" width="120" height="36" rx="4" stroke="#e8e6e3" stroke-width="1.5"/>
          <text x="322" y="75" text-anchor="middle" fill="#999590" font-family="Inter,sans-serif" font-size="11">Vertical</text>
        </svg>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Assistants & Copilots</h4>
        <p>AI products that augment human work through conversation or embedded assistance. General-purpose assistants (ChatGPT, Claude, Gemini) handle broad tasks. Copilots (GitHub Copilot, M365 Copilot) embed AI into existing workflows. The human remains in control, making final decisions.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Assistant vs copilot — standalone vs embedded in workflow</li>
          <li>General-purpose vs domain-specific assistants</li>
          <li>Context window and tool access as differentiators</li>
          <li>The user interaction pattern — chat, suggest, complete</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Evaluate assistant products for a specific workflow</li>
          <li>Design copilot integration points in an existing product</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Autonomous Agents</h4>
        <p>Products where the AI operates with significant autonomy toward a goal. Coding agents (Devin, Claude Code, Codex), sales agents (11x), customer service agents (Sierra). The key differentiator from copilots: the agent takes actions, not just suggestions.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Agent-as-product vs agent-as-feature</li>
          <li>Trust and verification for autonomous outputs</li>
          <li>The handoff problem — when should the agent escalate to a human</li>
          <li>Pricing models for agent products (per-task, per-seat, per-outcome)</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Evaluate autonomous agent products for reliability and trust</li>
          <li>Design human oversight for an agent product</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Creative Tools</h4>
        <p>AI products for generating creative content — images (Midjourney, Ideogram), video (Runway, Pika), music (Suno), and code/apps (Lovable, Bolt.new, v0). The fastest-evolving product category, with quality improving monthly.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Image, video, music, and code generation as distinct product categories</li>
          <li>Quality vs control tradeoffs in creative tools</li>
          <li>Prompt engineering for creative outputs</li>
          <li>Iterative refinement workflows</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Use creative AI tools effectively for a specific output type</li>
          <li>Design a creative workflow that combines AI generation with human refinement</li>
        </ul>
      </div>
      <div class="learn__subcategory">
        <h4 class="learn__subcategory-title">Vertical AI</h4>
        <p>AI products built for specific industries or functions. Legal (Harvey), healthcare (Abridge), marketing (Jasper, Writer), enterprise search (Glean), finance (Hebbia). Defensibility comes from domain context, proprietary data, regulatory compliance, and deep workflow integration — not from the model itself.</p>
        <p><strong>Key concepts</strong></p>
        <ul>
          <li>Domain context and proprietary data as moats</li>
          <li>Regulatory compliance as a barrier to entry (healthcare, legal, finance)</li>
          <li>Workflow integration depth determines stickiness</li>
          <li>The "thin wrapper" risk — if your product is just a UI on an API, the provider will build it</li>
        </ul>
        <p><strong>Practical skills</strong></p>
        <ul class="learn__skills">
          <li>Identify the moat in a vertical AI product</li>
          <li>Evaluate build-vs-buy for domain-specific AI capabilities</li>
        </ul>
      </div>`
  }
};
