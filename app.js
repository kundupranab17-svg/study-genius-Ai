/**
 * STUDYGENIUS AI - NEURAL OS CORE v5.0
 * [STRICT_NO_EMOJIS] [300K_VALUATION_UI] [USER_TRUST_MODE]
 */

// --- GLOBAL STATE: YOUR CHATS STORAGE ---
let chatHistory = [
    { id: 1, title: "Quantum Physics Notes" },
    { id: 2, title: "Board Exam Strategy 2026" },
    { id: 3, title: "Organic Chemistry Patterns" }
];

const PAGES = {
    // --- 🏠 DASHBOARD: THE WORLDWIDE HUB ---
    dash: `
        <div style="animation: fadeIn 0.6s ease;">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:40px;">
                <div>
                    <p style="color:var(--accent); font-weight:800; font-size:10px; letter-spacing:2px;">SYSTEM_STATUS: ACTIVE</p>
                    <h1 style="font-size:48px; font-weight:800; letter-spacing:-2px; margin-top:10px;">NEURAL <span style="color:var(--accent);">CORE</span></h1>
                </div>
                <div class="glass-card" style="padding:10px 20px; border-color:var(--accent);">
                    <span style="font-size:12px; font-weight:900;">GLOBAL_RANK: #04</span>
                </div>
            </div>

            <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:20px; margin-bottom:30px;">
                <div class="glass-card" style="padding:25px;">
                    <p style="font-size:10px; color:var(--text-secondary); letter-spacing:1px;">KNOWLEDGE_RETENTION</p>
                    <h2 style="font-size:36px; margin:15px 0;">94.2%</h2>
                    <div style="width:100%; height:2px; background:rgba(255,255,255,0.05);"><div style="width:94%; height:100%; background:var(--accent);"></div></div>
                </div>
                <div class="glass-card" style="padding:25px;">
                    <p style="font-size:10px; color:var(--text-secondary); letter-spacing:1px;">ACTIVE_NODES</p>
                    <h2 style="font-size:36px; margin:15px 0;">1.2M</h2>
                    <p style="font-size:11px; color:#10b981;">WORLDWIDE_SYNC_OK</p>
                </div>
                <div class="glass-card" style="padding:25px;">
                    <p style="font-size:10px; color:var(--text-secondary); letter-spacing:1px;">NEURAL_STRESS</p>
                    <h2 style="font-size:36px; margin:15px 0; color:var(--accent);">LOW</h2>
                    <p style="font-size:11px; color:var(--text-secondary);">OPTIMAL_PERFORMANCE</p>
                </div>
            </div>

            <div class="glass-card" style="height:200px; padding:30px; background:linear-gradient(180deg, rgba(56,189,248,0.05) 0%, transparent 100%);">
                <h3 style="font-size:12px; letter-spacing:2px; margin-bottom:20px;">GLOBAL_LEARNING_HEATMAP</h3>
                <div style="display:grid; grid-template-columns:repeat(20, 1fr); gap:5px; height:80px;">
                    ${Array(100).fill('<div style="background:rgba(255,255,255,0.03); border-radius:1px;"></div>').join('')}
                </div>
            </div>
        </div>
    `,

    // --- 👁️ SCANNER: THE VISION ENGINE ---
    scanner: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-size:32px; font-weight:800; margin-bottom:30px;">VISION <span style="color:var(--accent);">MATRIX</span></h1>
            <div style="display:grid; grid-template-columns: 1.5fr 1fr; gap:25px;">
                <div class="glass-card" style="height:400px; border:2px dashed var(--glass-border); display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; overflow:hidden;" onclick="executeScan()">
                    <div id="scanner-line" style="position:absolute; top:0; left:0; width:100%; height:3px; background:var(--accent); box-shadow:0 0 25px var(--accent); display:none;"></div>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                    <p style="margin-top:20px; font-size:12px; font-weight:700; letter-spacing:2px; color:var(--text-secondary);">INITIALIZE_OPTIC_SCAN</p>
                </div>
                <div class="glass-card" style="background:#050505; border-color:#10b981;">
                    <p style="font-size:10px; color:#10b981; font-weight:900; margin-bottom:20px;">TERMINAL_LOGS</p>
                    <div id="terminal" style="font-family:monospace; font-size:11px; color:#10b981; line-height:2.2;">
                        > SYSTEM_READY...<br>
                        > SCANNER_CONNECTED...<br>
                        > AWAITING_BUFFER...
                    </div>
                </div>
            </div>
        </div>
    `,

    // --- 📈 ANALYTICS: 20-YEAR PATTERNS ---
    analytics: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-size:32px; font-weight:800; margin-bottom:30px;">PATTERN <span style="color:var(--accent);">INTELLIGENCE</span></h1>
            <div class="glass-card" style="padding:40px; margin-bottom:25px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:40px;">
                    <p style="font-size:11px; font-weight:800; color:var(--text-secondary);">HISTORICAL_TREND_ANALYSIS [2006-2026]</p>
                    <span style="color:var(--accent); font-weight:900; font-size:11px;">PROBABILITY: 94.8%</span>
                </div>
                <div style="height:200px; display:flex; align-items:flex-end; gap:20px; border-bottom:1px solid var(--glass-border);">
                    <div style="flex:1; height:30%; background:rgba(255,255,255,0.05);"></div>
                    <div style="flex:1; height:55%; background:rgba(255,255,255,0.05);"></div>
                    <div style="flex:1; height:85%; background:var(--accent); opacity:0.6;"></div>
                    <div style="flex:1; height:98%; background:var(--accent); box-shadow:0 0 30px var(--accent);"></div>
                </div>
            </div>
        </div>
    `
};

// --- CORE ENGINE FUNCTIONS ---

function navigate(id) {
    const main = document.getElementById('main-viewport');
    if(!main) return;
    
    main.style.opacity = '0';
    setTimeout(() => {
        main.innerHTML = PAGES[id] || `<h1>MODULE_OFFLINE</h1>`;
        main.style.opacity = '1';
        updateSidebar();
    }, 150);
}

function updateSidebar() {
    const list = document.getElementById('chat-list');
    if(!list) return;
    
    list.innerHTML = chatHistory.map(chat => `
        <div class="history-item" onclick="loadChat(${chat.id})">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:10px; opacity:0.5;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            ${chat.title}
        </div>
    `).join('');
}

function executeScan() {
    const bar = document.getElementById('scanner-line');
    const term = document.getElementById('terminal');
    if(!bar) return;
    
    bar.style.display = 'block';
    bar.style.animation = 'scanBar 2.5s infinite linear';
    term.innerHTML += "<br>> ANALYZING_VISUAL_STREAM...<br>> EXTRACTION_COMPLETE_100%";
}

// System Heartbeat
setInterval(() => {
    const clock = document.getElementById('clock');
    if(clock) clock.innerText = new Date().toLocaleTimeString('en-GB');
}, 1000);

// Global Styles Injection
const styles = document.createElement("style");
styles.innerHTML = `
    @keyframes scanBar { 0% { top:0; } 100% { top:100%; } }
    @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
`;
document.head.appendChild(styles);

window.onload = () => {
    navigate('dash');
};
