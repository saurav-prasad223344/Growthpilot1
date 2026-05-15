
(function () {
  // ── Knowledge Base ──────────────────────────────────────────────────────────
  const KB = [
    // Greetings
    { k: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon", "howdy", "sup", "what's up", "whats up"],
      a: "Hey there! 👋 I'm Pilot, your GrowthPilot AI assistant. I'm here to help you grow your business! What would you like to know?" },

    // Who / What is GrowthPilot
    { k: ["what is growthpilot", "who is growthpilot", "about growthpilot", "tell me about", "what do you do", "what does growthpilot do"],
      a: "🚀 <b>GrowthPilot1</b> is a premium digital growth agency that helps businesses scale fast using cutting-edge technology.<br><br>We specialise in:<br>• 🌐 High-performance Website Development<br>• 🤖 AI Voice Agents<br>• 📈 Meta & Google Ads (Performance Marketing)<br><br>Our goal is simple — to launch your brand into <b>Hyper Growth</b>!" },

    // Founder
    { k: ["founder", "who founded", "who started", "who built", "saurav", "owner", "ceo", "creator"],
      a: "👨‍💼 <b>Saurav Prasad</b> is the Founder of GrowthPilot1.<br><br>He has <b>1.5+ years of hands-on experience</b> working with clients across web development, AI solutions, and performance marketing. He is passionate about 3D, AI, and automation, and focuses on building high-converting digital experiences that drive real, measurable growth." },

    // Services overview
    { k: ["services", "what services", "what you offer", "offerings", "what can you do"],
      a: "We offer 3 core services:<br><br>🌐 <b>Website Development</b> — High-performance, immersive websites that captivate & convert<br><br>🤖 <b>AI Voice Agents</b> — 24/7 voice automation for customer support & lead qualification<br><br>📈 <b>Meta & Google Ads</b> — Data-driven performance marketing for maximum ROI<br><br>Want details on any specific service?" },

    // Website development
    { k: ["website", "web development", "web design", "3d website", "site", "landing page"],
      a: "🌐 <b>Website Development</b><br><br>We build blazing-fast, conversion-optimised websites that stand out from the crowd.<br><br>✓ Performance-optimised & SEO-ready<br>✓ Mobile-first responsive design<br>✓ 3D & interactive immersive experiences<br>✓ High-converting landing pages<br><br>Ready to get a premium website? <a href='https://wa.me/9122257780?text=I want a website from GrowthPilot' target='_blank' style='color:#6c63ff'>Chat with us on WhatsApp →</a>" },

    // AI Voice Agents
    { k: ["ai voice", "voice agent", "ai agent", "automation", "chatbot", "voice bot", "auto"],
      a: "🤖 <b>AI Voice Agents</b><br><br>Our AI voice agents handle your calls 24/7 so you never miss a lead again!<br><br>✓ Human-like natural language processing<br>✓ Seamless CRM & calendar integration<br>✓ Multi-lingual support<br>✓ Lead qualification & appointment booking<br><br><a href='https://wa.me/9122257780?text=I want an AI Voice Agent' target='_blank' style='color:#6c63ff'>Get yours now →</a>" },

    // Ads / Marketing
    { k: ["meta ads", "google ads", "ads", "advertising", "marketing", "performance marketing", "roi", "roas", "leads", "facebook ads"],
      a: "📈 <b>Meta & Google Ads</b><br><br>We run data-driven ad campaigns engineered purely for <b>maximum ROI</b>.<br><br>✓ Precision audience targeting & retargeting<br>✓ High-converting ad creatives & copy<br>✓ Continuous A/B testing & optimisation<br>✓ 4.5x ROAS achieved for past clients<br><br><a href='https://wa.me/9122257780?text=I want to run ads with GrowthPilot' target='_blank' style='color:#6c63ff'>Start scaling now →</a>" },

    // How GrowthPilot grows business
    { k: ["how can you help", "grow my business", "help my business", "scale", "grow", "results", "how does it work"],
      a: "Here's how GrowthPilot grows your business 🚀<br><br><b>Step 1 — Strategy:</b> We deep-dive into your brand, audience & goals<br><b>Step 2 — Design:</b> High-end, conversion-focused visuals & assets<br><b>Step 3 — Development:</b> Clean, fast code + AI integration<br><b>Step 4 — Launch & Scale:</b> Fuel it with performance marketing<br><br>Past results include +145% conversion rate, 4.5x ROAS, 10x organic traffic growth!" },

    // Pricing / Cost
    { k: ["price", "cost", "pricing", "how much", "rates", "package", "budget"],
      a: "💰 Pricing is <b>customised</b> based on your specific goals and project scope.<br><br>We have flexible packages for startups and established businesses alike.<br><br>The best way to get an accurate quote is a quick call or WhatsApp message!<br><br><a href='https://wa.me/9122257780?text=I want to know pricing' target='_blank' style='color:#6c63ff'>Get a free quote →</a>" },

    // Contact
    { k: ["contact", "reach", "talk", "speak", "whatsapp", "call", "phone", "email", "connect"],
      a: "📞 You can reach us anytime!<br><br>📱 <b>WhatsApp / Call:</b> <a href='tel:+9122257780' style='color:#6c63ff'>+91 22257780</a><br>💬 <b>WhatsApp Chat:</b> <a href='https://wa.me/9122257780' target='_blank' style='color:#6c63ff'>Chat Now</a><br>📸 <b>Instagram:</b> <a href='https://www.instagram.com/growthpilot_agency' target='_blank' style='color:#6c63ff'>@growthpilot_agency</a><br>🐦 <b>Twitter:</b> <a href='https://x.com/growthpilott1' target='_blank' style='color:#6c63ff'>@growthpilott1</a>" },

    // Case studies / work
    { k: ["portfolio", "work", "case study", "case studies", "examples", "projects", "clients", "past work"],
      a: "🏆 Some of our results:<br><br>🛒 <b>E-Commerce Overhaul:</b> +145% conversion rate, 3x faster load speed<br>🏠 <b>Real Estate AI Agent:</b> 500+ calls handled, 35% more appointments<br>📊 <b>B2B SaaS Ads:</b> 4.5x ROAS, 60% lower cost per lead<br>🌱 <b>Local Business:</b> 10x organic traffic, top 3 search rankings<br><br>See more at our <a href='/work.html' style='color:#6c63ff'>Case Studies page →</a>" },

    // Why choose GrowthPilot
    { k: ["why choose", "why growthpilot", "why you", "difference", "unique", "better", "competitor"],
      a: "🏆 Why GrowthPilot1?<br><br>🚀 <b>Performance-driven:</b> Every pixel optimised for conversion<br>🧠 <b>Cutting-edge tech:</b> 3D, WebGL, AI — we keep you ahead<br>📊 <b>ROI-focused:</b> Your revenue growth is our success metric<br>⚡ <b>Fast & Scalable:</b> Solutions that grow with your business<br><br>We don't just build — we build <b>growth engines</b>!" },

    // Social media
    { k: ["instagram", "twitter", "linkedin", "social media", "social"],
      a: "Follow us on social media!<br><br>📸 <a href='https://www.instagram.com/growthpilot_agency' target='_blank' style='color:#6c63ff'>Instagram: @growthpilot_agency</a><br>🐦 <a href='https://x.com/growthpilott1' target='_blank' style='color:#6c63ff'>Twitter: @growthpilott1</a><br>💼 <a href='https://www.linkedin.com/in/growthpilot-undefined-70b343405' target='_blank' style='color:#6c63ff'>LinkedIn: GrowthPilot</a>" },

    // Bye / Thanks
    { k: ["bye", "goodbye", "thanks", "thank you", "cya", "see you", "done"],
      a: "Thanks for chatting! 🙌 If you ever need help scaling your business, we're just a message away. Have an awesome day! 🚀" },
  ];

  function getAnswer(input) {
    const q = input.toLowerCase().trim();
    for (const item of KB) {
      if (item.k.some(kw => q.includes(kw))) return item.a;
    }
    return "I'm not sure about that yet! 😊 For the best answer, feel free to reach us directly:<br><br><a href='https://wa.me/9122257780?text=I have a question about GrowthPilot' target='_blank' style='color:#6c63ff'>💬 WhatsApp Us Now</a><br><br>Or ask me about our <b>services</b>, <b>pricing</b>, <b>founder</b>, or how we can <b>grow your business</b>!";
  }

  // ── Inject CSS ───────────────────────────────────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
    #gp-chat-fab {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 99999;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #6c63ff, #a855f7);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 32px rgba(108,99,255,0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: gp-pulse 2.5s infinite;
    }
    #gp-chat-fab:hover { transform: scale(1.12); box-shadow: 0 12px 40px rgba(108,99,255,0.7); }
    @keyframes gp-pulse {
      0%,100% { box-shadow: 0 8px 32px rgba(108,99,255,0.5); }
      50% { box-shadow: 0 8px 48px rgba(168,85,247,0.8); }
    }
    #gp-chat-fab svg { width: 30px; height: 30px; fill: white; }
    #gp-chat-fab .gp-fab-close { display: none; }
    #gp-chat-fab.open .gp-fab-icon { display: none; }
    #gp-chat-fab.open .gp-fab-close { display: flex; }

    #gp-chat-bubble {
      position: fixed;
      bottom: 7rem;
      right: 2rem;
      z-index: 99998;
      background: linear-gradient(135deg,#6c63ff,#a855f7);
      color: white;
      padding: 10px 16px;
      border-radius: 20px 20px 4px 20px;
      font-size: 13px;
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      box-shadow: 0 4px 20px rgba(108,99,255,0.4);
      white-space: nowrap;
      animation: gp-fadeInUp 0.5s ease 1.5s both;
      cursor: pointer;
    }
    @keyframes gp-fadeInUp {
      from { opacity:0; transform: translateY(10px); }
      to   { opacity:1; transform: translateY(0); }
    }

    #gp-chatbox {
      position: fixed;
      bottom: 7rem;
      right: 2rem;
      z-index: 99998;
      width: 360px;
      max-height: 520px;
      background: #0f0f1a;
      border: 1px solid rgba(108,99,255,0.3);
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 24px 64px rgba(0,0,0,0.6);
      transform: scale(0.85) translateY(20px);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), opacity 0.3s ease;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
    }
    #gp-chatbox.open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: all;
    }

    #gp-chat-header {
      background: linear-gradient(135deg,#6c63ff,#a855f7);
      padding: 16px 18px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .gp-avatar {
      width: 42px; height: 42px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      display: flex; align-items: center; justify-content: center;
      font-size: 20px;
      flex-shrink: 0;
    }
    .gp-header-info { flex: 1; }
    .gp-header-name { color: white; font-weight: 700; font-size: 15px; }
    .gp-header-status { color: rgba(255,255,255,0.8); font-size: 12px; display: flex; align-items: center; gap: 5px; }
    .gp-status-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; animation: gp-blink 1.4s infinite; }
    @keyframes gp-blink { 0%,100%{opacity:1} 50%{opacity:0.4} }

    #gp-chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      scroll-behavior: smooth;
    }
    #gp-chat-messages::-webkit-scrollbar { width: 4px; }
    #gp-chat-messages::-webkit-scrollbar-track { background: transparent; }
    #gp-chat-messages::-webkit-scrollbar-thumb { background: rgba(108,99,255,0.4); border-radius: 4px; }

    .gp-msg {
      max-width: 82%;
      padding: 10px 14px;
      border-radius: 16px;
      font-size: 13.5px;
      line-height: 1.55;
      animation: gp-msgIn 0.3s ease;
    }
    @keyframes gp-msgIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
    .gp-msg.bot {
      background: rgba(108,99,255,0.15);
      border: 1px solid rgba(108,99,255,0.25);
      color: #e2e8f0;
      align-self: flex-start;
      border-bottom-left-radius: 4px;
    }
    .gp-msg.user {
      background: linear-gradient(135deg,#6c63ff,#a855f7);
      color: white;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }
    .gp-msg a { color: #a78bfa !important; }

    .gp-typing {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 10px 14px;
      background: rgba(108,99,255,0.15);
      border: 1px solid rgba(108,99,255,0.25);
      border-radius: 16px;
      border-bottom-left-radius: 4px;
      align-self: flex-start;
      width: fit-content;
    }
    .gp-typing span {
      width: 7px; height: 7px;
      background: #6c63ff;
      border-radius: 50%;
      animation: gp-dot 1.2s infinite;
    }
    .gp-typing span:nth-child(2) { animation-delay: 0.2s; }
    .gp-typing span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes gp-dot { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }

    #gp-quick-btns {
      padding: 0 16px 12px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .gp-quick-btn {
      background: rgba(108,99,255,0.15);
      border: 1px solid rgba(108,99,255,0.35);
      color: #a78bfa;
      font-size: 12px;
      padding: 5px 11px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s;
      font-family: 'Inter', sans-serif;
    }
    .gp-quick-btn:hover { background: rgba(108,99,255,0.3); color: white; }

    #gp-chat-input-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 14px;
      border-top: 1px solid rgba(108,99,255,0.2);
      background: rgba(255,255,255,0.03);
    }
    #gp-chat-input {
      flex: 1;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(108,99,255,0.3);
      border-radius: 22px;
      padding: 9px 16px;
      color: #e2e8f0;
      font-size: 13px;
      outline: none;
      font-family: 'Inter', sans-serif;
      transition: border-color 0.2s;
    }
    #gp-chat-input::placeholder { color: rgba(255,255,255,0.35); }
    #gp-chat-input:focus { border-color: #6c63ff; }
    #gp-chat-send {
      width: 38px; height: 38px;
      border-radius: 50%;
      background: linear-gradient(135deg,#6c63ff,#a855f7);
      border: none;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: transform 0.2s;
    }
    #gp-chat-send:hover { transform: scale(1.1); }
    #gp-chat-send svg { width: 18px; height: 18px; fill: white; }

    @media (max-width: 480px) {
      #gp-chatbox {
        width: calc(100vw - 2rem);
        right: 1rem;
        left: 1rem;
        bottom: 5.5rem;
        max-height: 70vh;
        border-radius: 16px;
      }
      #gp-chat-fab { bottom: 1.5rem; right: 1.5rem; width: 50px; height: 50px; }
      #gp-chat-bubble { bottom: 5.5rem; right: 1.5rem; font-size: 12px; }
    }
  `;
  document.head.appendChild(style);

  // ── Inject HTML ──────────────────────────────────────────────────────────────
  const html = `
    <div id="gp-chat-bubble">💬 Hi! How can I help you grow? 🚀</div>

    <div id="gp-chatbox" role="dialog" aria-label="GrowthPilot AI Chat">
      <div id="gp-chat-header">
        <div class="gp-avatar">🚀</div>
        <div class="gp-header-info">
          <div class="gp-header-name">Pilot — GrowthPilot AI</div>
          <div class="gp-header-status">
            <span class="gp-status-dot"></span> Always online
          </div>
        </div>
      </div>
      <div id="gp-chat-messages"></div>
      <div id="gp-quick-btns">
        <button class="gp-quick-btn" data-q="What services do you offer?">Services</button>
        <button class="gp-quick-btn" data-q="How can you grow my business?">Grow My Biz</button>
        <button class="gp-quick-btn" data-q="Who is the founder?">Founder</button>
        <button class="gp-quick-btn" data-q="What is the pricing?">Pricing</button>
        <button class="gp-quick-btn" data-q="Contact details">Contact</button>
      </div>
      <div id="gp-chat-input-row">
        <input id="gp-chat-input" type="text" placeholder="Ask me anything..." autocomplete="off" />
        <button id="gp-chat-send" aria-label="Send message">
          <svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
        </button>
      </div>
    </div>

    <button id="gp-chat-fab" aria-label="Open GrowthPilot chat">
      <span class="gp-fab-icon">
        <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
      </span>
      <span class="gp-fab-close">
        <svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </span>
    </button>
  `;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);

  // ── Logic ────────────────────────────────────────────────────────────────────
  const fab = document.getElementById("gp-chat-fab");
  const chatbox = document.getElementById("gp-chatbox");
  const messages = document.getElementById("gp-chat-messages");
  const input = document.getElementById("gp-chat-input");
  const sendBtn = document.getElementById("gp-chat-send");
  const bubble = document.getElementById("gp-chat-bubble");

  let opened = false;

  function addMsg(text, who) {
    const div = document.createElement("div");
    div.className = `gp-msg ${who}`;
    div.innerHTML = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement("div");
    t.className = "gp-typing";
    t.id = "gp-typing-indicator";
    t.innerHTML = "<span></span><span></span><span></span>";
    messages.appendChild(t);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById("gp-typing-indicator");
    if (t) t.remove();
  }

  function respond(text) {
    showTyping();
    setTimeout(() => {
      removeTyping();
      addMsg(getAnswer(text), "bot");
    }, 900 + Math.random() * 400);
  }

  function toggle() {
    opened = !opened;
    fab.classList.toggle("open", opened);
    chatbox.classList.toggle("open", opened);
    bubble.style.display = opened ? "none" : "";
    if (opened && messages.children.length === 0) {
      setTimeout(() => addMsg("Hey! 👋 I'm <b>Pilot</b>, your GrowthPilot AI assistant.<br>I can help you with our <b>services</b>, <b>pricing</b>, <b>founder info</b>, and how we can <b>grow your business</b>. What would you like to know?", "bot"), 300);
    }
    if (opened) input.focus();
  }

  fab.addEventListener("click", toggle);
  bubble.addEventListener("click", toggle);

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", e => { if (e.key === "Enter") sendMessage(); });

  document.querySelectorAll(".gp-quick-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const q = btn.dataset.q;
      addMsg(q, "user");
      respond(q);
    });
  });

  function sendMessage() {
    const txt = input.value.trim();
    if (!txt) return;
    input.value = "";
    addMsg(txt, "user");
    respond(txt);
  }

  // Auto-hide bubble after 8s
  setTimeout(() => { if (!opened) bubble.style.display = "none"; }, 8000);
})();
