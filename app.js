/**
 * STUDYGENIUS AI - THE ULTIMATE NEURAL OS
 * [INTEGRATED: ALL PREVIOUS + NEW HUGE FEATURES]
 * [NO EMOJIS] [100% INDUSTRIAL SVG]
 */

const PAGES = {
    // --- 📊 DASHBOARD: PREVIOUS STATS + NEW GLOBAL HEATMAP ---
    dash: `
        <div style="animation: fadeIn 0.6s ease-out;">
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 30px;">
                <div class="glass-card" style="padding:15px; border-left: 3px solid var(--accent);">
                    <p style="font-size:9px; letter-spacing:1.5px; color:var(--text-dim);">SYSTEM_UPTIME</p>
                    <h4 style="margin-top:5px; font-family:monospace;">142:08:55:02</h4>
                </div>
                <div class="glass-card" style="padding:15px;">
                    <p style="font-size:9px; letter-spacing:1.5px; color:var(--text-dim);">NEURAL_LOAD</p>
                    <h4 style="margin-top:5px; color:#10b981;">0.0004 MS</h4>
                </div>
                <div class="glass-card" style="padding:15px;">
                    <p style="font-size:9px; letter-spacing:1.5px; color:var(--text-dim);">SYNC_STATUS</p>
                    <h4 style="margin-top:5px;">GLOBAL_ENCRYPTED</h4>
                </div>
                <div class="glass-card" style="padding:15px;">
                    <p style="font-size:9px; letter-spacing:1.5px; color:var(--text-dim);">ACTIVE_NODES</p>
                    <h4 style="margin-top:5px;">1.2M ACTIVE</h4>
                </div>
            </div>

            <h1 style="font-size: 52px; font-weight: 800; letter-spacing: -3px; margin-bottom: 30px;">NEURAL <span style="color:var(--accent);">COMMAND</span></h1>
            
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px;">
                <div>
                    <div class="glass-card" style="margin-bottom:25px; background: rgba(56,189,248,0.02);">
                        <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                            <h3 style="font-size:12px; letter-spacing:2px; font-weight:800;">GLOBAL_KNOWLEDGE_HEATMAP</h3>
                            <span style="color:var(--accent); font-size:10px; font-weight:900;">REALTIME_STREAM</span>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(15, 1fr); gap: 6px; height: 120px;">
                            ${Array(60).fill('<div style="background:rgba(56,189,248,0.1); border-radius:1px; transition:0.3s;" onmouseover="this.style.background=\'var(--accent)\'" onmouseout="this.style.background=\'rgba(56,189,248,0.1)\'"></div>').join('')}
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div class="glass-card">
                            <p style="font-size:10px; color:var(--text-dim); letter-spacing:1px;">KNOWLEDGE_PERCENTILE</p>
                            <h2 style="font-size:32px; margin:10px 0;">87.4%</h2>
                            <div style="width:100%; height:4px; background:rgba(255,255,255,0.05);"><div style="width:87%; height:100%; background:var(--accent);"></div></div>
                        </div>
                        <div class="glass-card">
                            <p style="font-size:10px; color:var(--text-dim); letter-spacing:1px;">STREAK_STABILITY</p>
                            <h2 style="font-size:32px; margin:10px 0;">99.1%</h2>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <p style="font-size:10px; font-weight:900; color:var(--text-dim); letter-spacing:2px; margin-bottom:5px;">CORE_ACTIONS</p>
                    <button class="btn-action" style="text-align:left; display:flex; align-items:center; gap:12px; height:55px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                        TIME_DILATION_MODE
                    </button>
                    <button class="btn-action" style="text-align:left; display:flex; align-items:center; gap:12px; height:55px; background:rgba(255,255,255,0.05); color:white; border:1px solid var(--border);">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                        QUANTUM_SEARCH
                    </button>
                    <button class="btn-action" style="text-align:left; display:flex; align-items:center; gap:12px; height:55px; background:rgba(255,255,255,0.05); color:white; border:1px solid var(--border);">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        EXAM_SECURITY_BYPASS
                    </button>
                    <button class="btn-action" style="text-align:left; display:flex; align-items:center; gap:12px; height:55px; background:rgba(255,255,255,0.05); color:white; border:1px solid var(--border);">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        NEURAL_STIMULANT
                    </button>
                </div>
            </div>
        </div>
    `,

    // --- 👁️ SCANNER: PREVIOUS BEAM + NEW ACTION GRID ---
    scanner: `
        <div style="animation: fadeIn 0.5s ease;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:30px;">
                <h1 style="font-size: 32px; font-weight: 800; letter-spacing:-1px;">VISION <span style="color:var(--accent)">MATRIX</span></h1>
                <div style="display:flex; gap:10px;">
                    <button class="btn-action" style="padding:8px 15px; font-size:10px;">BATCH_MODE</button>
                    <button class="btn-action" style="padding:8px 15px; font-size:10px; background:transparent; border:1px solid var(--border); color:white;">OCR_SETTINGS</button>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 25px;">
                <div class="glass-card" style="height: 400px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px dashed var(--accent); position: relative; overflow: hidden; cursor: crosshair;" onclick="startDeepScan()">
                    <div id="scan-beam" style="position:absolute; top:0; left:0; width:100%; height:4px; background:var(--accent); box-shadow: 0 0 30px var(--accent); display:none; z-index:10;"></div>
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1" style="opacity:0.4;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <h2 style="font-size: 14px; font-weight: 900; margin-top:20px; letter-spacing:2px;">DRAG_DATA_FILE_HERE</h2>
                </div>
                <div class="glass-card" style="background:rgba(0,0,0,0.4);">
                    <p style="font-size:10px; font-weight:900; color:#10b981; margin-bottom:20px; letter-spacing:2px;">LIVE_TERMINAL</p>
                    <div id="scan-log" style="font-family:monospace; font-size:11px; color:#10b981; line-height:2;">
                        > VISION_CORE_ACTIVE<br>
                        > RESOLUTION_SET: 8K<br>
                        > AWAITING_BUFFER...
                    </div>
                </div>
            </div>
        </div>
    `,

    // --- 📈 ANALYTICS: PREVIOUS CHART + NEW PROBABILITY MATRIX ---
    analytics: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 30px;">PATTERN <span style="color:var(--accent)">DECODER</span></h1>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 30px;">
                <div class="glass-card" style="border-bottom: 2px solid #10b981;"><p style="font-size:9px; color:var(--text-dim);">PROBABILITY</p><h3 style="color:#10b981;">98.2%</h3></div>
                <div class="glass-card"><p style="font-size:9px; color:var(--text-dim);">REPETITION</p><h3>CRITICAL</h3></div>
                <div class="glass-card"><p style="font-size:9px; color:var(--text-dim);">VOLATILITY</p><h3>0.02%</h3></div>
                <div class="glass-card"><p style="font-size:9px; color:var(--text-dim);">RANK_IMP</p><h3 style="color:var(--accent);">P0_MAX</h3></div>
            </div>
            <div class="glass-card" style="height:300px; background: linear-gradient(0deg, rgba(56,189,248,0.05) 0%, transparent 100%);">
                <div style="height:100%; display:flex; align-items:flex-end; gap:20px; border-bottom:1px solid var(--border); padding-bottom:10px;">
                    <div style="flex:1; height:30%; background:rgba(255,255,255,0.05);"></div>
                    <div style="flex:1; height:50%; background:rgba(255,255,255,0.05);"></div>
                    <div style="flex:1; height:80%; background:var(--accent); opacity:0.6;"></div>
                    <div style="flex:1; height:95%; background:var(--accent); box-shadow:0 0 30px var(--accent);"></div>
                </div>
            </div>
        </div>
    `,

    // --- 📓 NOTES: PREVIOUS GENERATOR ---
    notes: `
        <div style="animation: fadeIn 0.4s ease;">
            <h1 style="font-size: 32px; font-weight: 800; margin-bottom: 30px;">SMART <span style="color:var(--accent)">NOTES</span></h1>
            <div class="glass-card" style="padding:30px; margin-bottom:20px;">
                <input id="topic" placeholder="INPUT_RESEARCH_SUBJECT..." style="width:100%; background:rgba(0,0,0,0.4); border:1px solid var(--border); padding:20px; border-radius:10px; color:white; outline:none; font-family:monospace; font-size:16px;">
                <button class="btn-action" style="width:100%; margin-top:15px; height:55px; font-weight:900; letter-spacing:2px;" onclick="generateNotes()">EXECUTE_EXTRACTION</button>
            </div>
            <div id="notes-output"></div>
        </div>
    `,

    exams: `<div class="glass-card" style="padding:100px; text-align:center;"><h1>PROCTORED_CHAMBER_V2</h1><p style="color:var(--text-dim); margin-top:20px; letter-spacing:2px;">SECURE_TUNNEL_ESTABLISHED</p></div>`,
    practice: `<div class="glass-card" style="padding:100px; text-align:center;"><h1>PRACTICE_MATRIX</h1><button class="btn-action" style="margin-top:20px;">GENERATE_QUESTION_SET</button></div>`,
    planner: `<div class="glass-card" style="padding:100px; text-align:center;"><h1>TEMPORAL_PLANNER</h1></div>`,
    focus: `<div class="glass-card" style="padding:100px; text-align:center;"><h1>BINAURAL_CORE</h1></div>`
};

// --- CORE FUNCTIONS (UNCHANGED BUT REFINED) ---
function navigate(id) {
    const view = document.getElementById('main-viewport');
    if(!view) return;
    view.style.opacity = '0';
    setTimeout(() => {
        view.innerHTML = PAGES[id] || `<h1>MODULE_OFFLINE</h1>`;
        view.style.opacity = '1';
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
            if(l.getAttribute('onclick').includes(`'${id}'`)) l.classList.add('active');
        });
    }, 150);
}

function startDeepScan() {
    const beam = document.getElementById('scan-beam');
    const log = document.getElementById('scan-log');
    if(!beam) return;
    beam.style.display = 'block';
    beam.style.animation = 'scanLoop 2.5s infinite ease-in-out';
    log.innerHTML += "<br>> ANALYZING_VISUAL_STREAM...";
    setTimeout(() => { log.innerHTML += "<br>> PATTERN_MATCH_100%"; }, 1500);
}

function generateNotes() {
    const topic = document.getElementById('topic').value;
    const out = document.getElementById('notes-output');
    if(!topic) return;
    out.innerHTML = `<div class="glass-card" style="color:var(--accent); border-style:dashed;">NEURAL_ENGINE_SYNTHESIZING: ${topic.toUpperCase()}...</div>`;
    setTimeout(() => {
        out.innerHTML = `<div class="glass-card" style="border-left:4px solid var(--accent); animation:fadeIn 0.5s ease;">
            <h2 style="letter-spacing:1px;">${topic.toUpperCase()} // MASTER_DRAFT</h2>
            <p style="color:var(--text-dim); line-height:1.8; margin-top:15px;">Historical board patterns and elite research data consolidated into this neural draft.</p>
        </div>`;
    }, 2000);
}

setInterval(() => {
    const clock = document.getElementById('clock');
    if(clock) clock.innerText = new Date().toLocaleTimeString('en-GB');
}, 1000);

const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes scanLoop { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(styleSheet);

window.onload = () => navigate('dash');
