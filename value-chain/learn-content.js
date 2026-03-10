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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>GPU vs TPU vs custom silicon — different hardware for different workloads</li>
        <li>Memory bandwidth is the bottleneck, not raw FLOPS</li>
        <li>Quantization lets large models run on smaller hardware</li>
        <li>Cloud GPU (CoreWeave, Lambda) vs hyperscaler (AWS, GCP, Azure) pricing</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Estimate GPU requirements for a given model size</li>
        <li>Compare cloud GPU pricing across providers</li>
        <li>Decide when local inference makes sense vs cloud APIs</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>Data quality dominates model quality — the shift from "more data" to "better data"</li>
        <li>Scaling laws predict performance from compute budget, data size, and model size</li>
        <li>Synthetic data generation is increasingly central to training pipelines</li>
        <li>Base models can complete text but do not follow instructions — that comes at L03</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Evaluate base model capabilities from training data and benchmark results</li>
        <li>Understand what a model learned vs what it was trained to do</li>
        <li>Read a model card and understand its limitations</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>SFT (Supervised Fine-Tuning) teaches models to follow instructions</li>
        <li>RLHF and DPO align models with human preferences</li>
        <li>LoRA and QLoRA enable fine-tuning on a single consumer GPU</li>
        <li>Model merging combines multiple fine-tuned models without additional training</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Run a LoRA fine-tuning job on a specific dataset</li>
        <li>Evaluate fine-tuned model quality against the base model</li>
        <li>Decide between fine-tuning, few-shot prompting, and RAG for a given use case</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>Time to first token (TTFT) vs throughput (tokens/second) — different metrics for different use cases</li>
        <li>Quantization (GPTQ, AWQ, GGUF) reduces model size 2–4x with minimal quality loss</li>
        <li>Continuous batching and KV-cache optimization drive serving engine performance</li>
        <li>Inference is modality-agnostic — text, image, video, audio all follow similar patterns</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Choose between cloud API, self-hosted, and local inference for a given use case</li>
        <li>Set up Ollama or llama.cpp for local model inference</li>
        <li>Compare inference cost across providers for a given workload</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>Fallback chains provide reliability when a provider goes down</li>
        <li>Task-type routing dispatches simple vs complex vs code requests to different models</li>
        <li>Cost-aware routing tracks spend and downgrades models when budgets are tight</li>
        <li>Routing makes model diversity practical — cheap models for routine, expensive for hard</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Set up a basic routing proxy with LiteLLM or OpenRouter</li>
        <li>Define fallback chains for production reliability</li>
        <li>Implement cost-based routing rules</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>Agent loops: plan, execute tools, observe results, iterate until done</li>
        <li>Task decomposition breaks complex work into atomic steps with clear contracts</li>
        <li>Agent SDKs (Anthropic Agent SDK, OpenAI Agents API) provide first-party orchestration primitives</li>
        <li>Retry logic, timeout handling, and cost budgets are production essentials</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Design a multi-step agent workflow for a specific use case</li>
        <li>Define handoff contracts between workflow stages</li>
        <li>Set up human-in-the-loop approval gates</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>RAG: chunk documents, embed them, store in vector DB, retrieve at query time</li>
        <li>Chunking strategy directly affects retrieval quality — size, overlap, boundaries</li>
        <li>Volatile state (conversation) vs durable state (decisions, docs) need different storage</li>
        <li>Context hygiene: audit what is in the window, remove noise, deduplicate</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Build a basic RAG pipeline with embedding, storage, and retrieval</li>
        <li>Design a chunking strategy for a specific document type</li>
        <li>Implement context lifecycle management — creation, mutation, archival</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>MCP (Model Context Protocol) standardizes tool discovery and invocation</li>
        <li>Function calling turns model outputs into structured tool invocations</li>
        <li>Marketplace models (ChatGPT plugins, GPT Store) commoditize tool access</li>
        <li>Tool permissions and audit trails are critical for production safety</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Set up an MCP server for a specific tool integration</li>
        <li>Implement function calling with structured output validation</li>
        <li>Audit and restrict tool permissions in a production deployment</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>Golden test sets catch regressions before they reach users</li>
        <li>Guardrails validate outputs at runtime — format, safety, business logic</li>
        <li>Static analysis, property-based testing, and other automated verification methods matter more as code volume explodes</li>
        <li>Evals should run in CI — a prompt change that degrades quality does not ship</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Build a golden test set for a specific AI workflow</li>
        <li>Set up Promptfoo or Braintrust for automated evaluation</li>
        <li>Implement runtime guardrails with output validation</li>
      </ul>`
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
      <p><strong>Key concepts</strong></p>
      <ul>
        <li>Product archetypes: chatbot, copilot, agent, search, creative, platform, vertical</li>
        <li>Defensibility comes from domain context, proprietary data, or deep workflow integration</li>
        <li>"Uses AI" is not a moat — the model provider will likely build your feature</li>
        <li>Thin wrappers over APIs compete on UX alone, which is fragile</li>
      </ul>
      <p><strong>Practical skills</strong></p>
      <ul class="learn__skills">
        <li>Classify a product by its archetype and identify its moat</li>
        <li>Design a product integration that creates lock-in through context and workflow</li>
        <li>Evaluate build-vs-buy decisions for AI capabilities</li>
      </ul>`
  }
};
