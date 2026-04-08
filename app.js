/**
 * STUDYGENIUS AI - THE ULTIMATE NEURAL OS
 * [INTEGRATED: ALL PREVIOUS + NEW HUGE FEATURES]
 * [NO EMOJIS] [100% INDUSTRIAL SVG]
 */

const PAGES = {
    // --- CHAT INTERFACE (The ChatGPT Style) ---
    dash: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-size: 42px; font-weight: 800; margin-bottom: 30px;">Neural <span style="color:var(--accent)">Engine</span></h1>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                <div class="glass-card" style="padding:30px; border:1px solid var(--border);">
                    <h3 style="color:var(--accent); margin-bottom:10px;">SYSTEM STATUS</h3>
                    <p style="font-size:14px; color:#888;">All nodes are synchronized. Your learning probability is at 98.4%.</p>
                </div>
                <div class="glass-card" style="padding:30px; border:1px solid var(--border);">
                    <h3 style="color:var(--accent); margin-bottom:10px;">GLOBAL RANK</h3>
                    <h2 style="font-size:36px;">#04</h2>
                    <p style="font-size:12px; color:#10b981;">+2 Positions today</p>
                </div>
            </div>
        </div>
    `,

    // --- SCANNER (The Feature ChatGPT Doesn't Have) ---
    scanner: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 20px;">VISION <span style="color:var(--accent)">MATRIX</span></h1>
            <div class="glass-card" style="height: 350px; border: 2px dashed var(--border); display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; overflow:hidden;" onclick="startScan()">
                <div id="scan-beam" style="position:absolute; top:0; left:0; width:100%; height:3px; background:var(--accent); box-shadow:0 0 20px var(--accent); display:none;"></div>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                <p style="margin-top:20px; font-weight:800; letter-spacing:2px; font-size:12px;">UPLOAD STUDY MATERIAL</p>
            </div>
            <div id="log" style="margin-top:20px; font-family:monospace; font-size:12px; color:#10b981;"></div>
        </div>
    `,

    // --- ANALYTICS (The Brain) ---
    analytics: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 20px;">PATTERN <span style="color:var(--accent)">DECODER</span></h1>
            <div class="glass-card" style="padding:30px;">
                <p style="color:#888; font-size:12px; margin-bottom:20px;">ANALYZING 2006-2026 DATASETS...</p>
                <div style="height:150px; display:flex; align-items:flex-end; gap:10px; border-bottom:1px solid var(--border);">
                    <div style="flex:1; height:40%; background:rgba(56,189,248,0.2);"></div>
                    <div style="flex:1; height:70%; background:rgba(56,189,248,0.4);"></div>
                    <div style="flex:1; height:95%; background:var(--accent); box-shadow:0 0 20px var(--accent);"></div>
                </div>
                <p style="margin-top:20px; text-align:center; font-weight:800; color:var(--accent);">94% PATTERN REPETITION IDENTIFIED</p>
            </div>
        </div>
    `
};

function navigate(id) {
    const view = document.getElementById('main-viewport');
    view.style.opacity = '0';
    setTimeout(() => {
        view.innerHTML = PAGES[id];
        view.style.opacity = '1';
    }, 150);
}

function startScan() {
    const beam = document.getElementById('scan-beam');
    const log = document.getElementById('log');
    beam.style.display = 'block';
    beam.style.animation = 'scanLoop 2s infinite linear';
    log.innerHTML = "> INITIALIZING NEURAL VISION...<br>> EXTRACTING MATHEMATICAL NODES...<br>> SYNC COMPLETE.";
}

setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-GB');
}, 1000);

const style = document.createElement('style');
style.innerHTML = `
    @keyframes scanLoop { 0% { top: 0; } 100% { top: 100%; } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);

window.onload = () => navigate('dash');
