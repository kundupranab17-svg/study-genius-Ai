/**
 * STUDYGENIUS AI - THE ULTIMATE NEURAL OS
 * [INTEGRATED: ALL PREVIOUS + NEW HUGE FEATURES]
 * [NO EMOJIS] [100% INDUSTRIAL SVG]
 */

const PAGES = {
    // DASHBOARD: Stat Cards like a high-end SaaS
    dash: `
        <div style="animation: slideIn 0.4s ease-out;">
            <h1 style="font-size:32px; font-weight:800; margin-bottom:40px; letter-spacing:-1px;">System <span style="color:var(--accent)">Intelligence</span></h1>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
                <div style="background:#111; border:1px solid var(--border-color); padding:25px; border-radius:16px;">
                    <p style="font-size:10px; font-weight:800; color:var(--text-dim); letter-spacing:1px; margin-bottom:15px;">GLOBAL_RANK</p>
                    <h2 style="font-size:42px;">#04</h2>
                    <p style="color:#10b981; font-size:12px; margin-top:10px;">Top 0.1% Globally</p>
                </div>
                <div style="background:#111; border:1px solid var(--border-color); padding:25px; border-radius:16px;">
                    <p style="font-size:10px; font-weight:800; color:var(--text-dim); letter-spacing:1px; margin-bottom:15px;">SYNC_STABILITY</p>
                    <h2 style="font-size:42px;">99.1%</h2>
                    <div style="width:100%; height:4px; background:#222; margin-top:15px;"><div style="width:99%; height:100%; background:var(--accent);"></div></div>
                </div>
            </div>
        </div>
    `,

    // SCANNER: High-tech scanning interface
    scanner: `
        <div style="animation: slideIn 0.4s ease-out;">
            <h1 style="font-size:28px; font-weight:800; margin-bottom:30px;">Vision <span style="color:var(--accent)">Matrix</span></h1>
            <div style="background:#111; border:2px dashed #333; height:300px; border-radius:20px; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; overflow:hidden;" onclick="triggerScan()">
                <div id="scanner-line" style="position:absolute; top:0; left:0; width:100%; height:2px; background:var(--accent); box-shadow:0 0 15px var(--accent); display:none;"></div>
                <svg style="width:48px; height:48px; stroke:var(--accent); fill:none; stroke-width:1; opacity:0.5;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <p style="margin-top:20px; font-size:13px; font-weight:600; color:var(--text-dim);">UPLOAD NEURAL DATASET</p>
            </div>
            <div id="terminal-output" style="margin-top:20px; font-family:monospace; font-size:11px; color:#10b981; line-height:1.8;"></div>
        </div>
    `,

    // ANALYTICS: Data-rich mapping
    analytics: `
        <div style="animation: slideIn 0.4s ease-out;">
            <h1 style="font-size:28px; font-weight:800; margin-bottom:30px;">Pattern <span style="color:var(--accent)">Analyzer</span></h1>
            <div style="background:#111; border:1px solid var(--border-color); padding:30px; border-radius:20px;">
                <p style="font-size:11px; color:var(--text-dim); margin-bottom:30px;">HISTORICAL_REPETITION_CHART (2006 - 2026)</p>
                <div style="height:180px; display:flex; align-items:flex-end; gap:15px; border-bottom:1px solid #222;">
                    <div style="flex:1; height:30%; background:rgba(56,189,248,0.1);"></div>
                    <div style="flex:1; height:55%; background:rgba(56,189,248,0.2);"></div>
                    <div style="flex:1; height:90%; background:var(--accent); box-shadow:0 0 20px var(--accent);"></div>
                </div>
                <div style="display:flex; justify-content:space-between; margin-top:15px; color:#555; font-size:10px; font-weight:800;">
                    <span>2006</span><span>2016</span><span>2026</span>
                </div>
            </div>
        </div>
    `
};

// --- CORE LOGIC ---

function render(id) {
    const target = document.getElementById('content-area');
    target.style.opacity = '0';
    setTimeout(() => {
        target.innerHTML = PAGES[id] || `<h1>Module Error</h1>`;
        target.style.opacity = '1';
    }, 150);
}

function triggerScan() {
    const line = document.getElementById('scanner-line');
    const term = document.getElementById('terminal-output');
    line.style.display = 'block';
    line.style.animation = 'scanMove 2s infinite linear';
    term.innerHTML = "> BOOTING_VISION_ENGINE...<br>> EXTRACTING_HANDWRITTEN_NODES...<br>> SYNC_SUCCESSFUL_CBSE_2026";
}

// Global Animation Injection
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes scanMove { 0% { top:0; } 100% { top:100%; } }
    @keyframes slideIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
`;
document.head.appendChild(styleSheet);

window.onload = () => render('dash');
