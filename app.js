/**
 * STUDYGENIUS AI - ELITE NEURAL ENGINE (FINAL)
 * [NO EMOJIS] [100% SVG] [HIGH-TECH INTERFACES]
 */

const PAGES = {
    // --- 📊 DASHBOARD: COMMAND CENTER ---
    dash: `
        <div style="animation: fadeIn 0.6s ease-out;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
                <div>
                    <h1 style="font-size: 48px; font-weight: 800; letter-spacing: -3px;">SYSTEM <span style="color:var(--accent);">OVERVIEW</span></h1>
                    <p style="color:var(--text-dim); font-size:14px; letter-spacing:1px;">CORE_STATUS: <span style="color:#10b981;">OPERATIONAL</span></p>
                </div>
                <div class="glass-card" style="padding: 12px 24px; border-color: var(--accent); background: rgba(56,189,248,0.05);">
                    <div style="display:flex; align-items:center; gap:10px;">
                        <div style="width:8px; height:8px; background:#10b981; border-radius:50%; box-shadow:0 0 10px #10b981;"></div>
                        <span style="font-size: 11px; font-weight: 800; color: var(--accent); letter-spacing: 2px;">NEURAL LINK ACTIVE</span>
                    </div>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;">
                <div class="glass-card" style="border-top: 4px solid var(--accent);">
                    <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                        <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 2px;">KNOWLEDGE BASE</p>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <h2 style="font-size: 54px; font-weight: 800; margin-bottom:15px;">87<span style="font-size:24px; color:var(--accent);">.4%</span></h2>
                    <div style="width:100%; height:6px; background:rgba(255,255,255,0.05); border-radius:10px;">
                        <div style="width:87%; height:100%; background:var(--accent); box-shadow: 0 0 20px var(--accent);"></div>
                    </div>
                </div>

                <div class="glass-card">
                    <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 2px; margin-bottom:20px;">GLOBAL RANKING</p>
                    <h2 style="font-size: 54px; font-weight: 800; margin-bottom:15px;">#04</h2>
                    <p style="color:#10b981; font-size:12px; font-weight:800; letter-spacing:1px;">TOP 0.01% PERCENTILE</p>
                </div>

                <div class="glass-card">
                    <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 2px; margin-bottom:20px;">NEURAL ACCURACY</p>
                    <h2 style="font-size: 54px; font-weight: 800; margin-bottom:15px;">99<span style="font-size:24px; color:var(--accent);">.1</span></h2>
                    <p style="color:var(--accent); font-size:12px; font-weight:800; letter-spacing:1px;">PATTERN_LOCK_STABLE</p>
                </div>
            </div>
        </div>
    `,

    // --- 👁️ SCANNER: THE VISION SYSTEM ---
    scanner: `
        <div style="animation: fadeIn 0.5s ease;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom: 40px;">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <h1 style="font-size: 38px; font-weight: 800; letter-spacing: -1.5px;">AI VISION <span style="color:var(--accent)">SCANNER</span></h1>
            </div>
            
            <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 30px;">
                <div class="glass-card" style="height: 450px; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px dashed var(--border); position: relative; overflow: hidden; cursor: pointer;" onclick="startDeepScan()">
                    <div id="scan-beam" style="position:absolute; top:0; left:0; width:100%; height:4px; background:var(--accent); box-shadow: 0 0 30px var(--accent); display:none; z-index:10;"></div>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1" style="opacity:0.5;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <h2 style="font-size: 20px; font-weight: 800; margin-top:30px; letter-spacing:1px;">UPLOADING_ZONE</h2>
                    <p style="color:var(--text-dim); font-size:13px; margin-top:10px;">CLICK TO INITIALIZE NEURAL EXTRACTION</p>
                </div>

                <div class="glass-card" style="background: rgba(0,0,0,0.4); border-color: rgba(16, 185, 129, 0.3);">
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:25px; border-bottom:1px solid rgba(16, 185, 129, 0.2); padding-bottom:15px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                        <span style="font-size: 11px; font-weight: 900; color:#10b981; letter-spacing: 2px;">NEURAL_LOGS</span>
                    </div>
                    <div id="scan-log" style="font-family: 'Courier New', monospace; font-size: 12px; color: #10b981; line-height: 2.2; opacity:0.9;">
                        [SYS] KERNEL_LOADED...<br>
                        [SYS] VISION_DRIVERS: OK<br>
                        [SYS] READY_FOR_STREAM...
                    </div>
                </div>
            </div>
        </div>
    `,

    // --- 📊 ANALYTICS: 20-YEAR PATTERN DECODER ---
    analytics: `
        <div style="animation: fadeIn 0.5s ease;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom: 40px;">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                <h1 style="font-size: 38px; font-weight: 800; letter-spacing: -1.5px;">PATTERN <span style="color:var(--accent)">DECODER</span></h1>
            </div>

            <div class="glass-card" style="background: linear-gradient(180deg, rgba(56,189,248,0.08) 0%, transparent 100%); margin-bottom:30px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 50px;">
                    <div>
                        <h2 style="font-size: 22px; font-weight: 800; letter-spacing: -0.5px;">HISTORICAL DATASET [2006-2026]</h2>
                        <p style="color:var(--text-dim); font-size:12px; margin-top:5px;">CROSS-BOARD PATTERN ANALYSIS ACTIVE</p>
                    </div>
                    <div style="display:flex; align-items:center; gap:10px; padding:8px 16px; background:rgba(255,255,255,0.03); border-radius:10px; border:1px solid var(--border);">
                        <div style="width:8px; height:8px; background:var(--accent); border-radius:50%;"></div>
                        <span style="font-size:10px; font-weight:900; color:var(--accent);">94.2% REPETITION PROBABILITY</span>
                    </div>
                </div>
                
                <div style="height: 250px; display: flex; align-items: flex-end; gap: 25px; padding-bottom:15px; border-bottom: 1px solid var(--border);">
                    <div style="flex:1; height: 35%; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
                    <div style="flex:1; height: 50%; background: rgba(255,255,255,0.05); border-radius: 4px;"></div>
                    <div style="flex:1; height: 75%; background: var(--accent); border-radius: 4px; opacity:0.5;"></div>
                    <div style="flex:1; height: 95%; background: var(--accent); border-radius: 4px; box-shadow: 0 0 40px rgba(56,189,248,0.5);">
                        <div style="position:absolute; top:-40px; left:50%; transform:translateX(-50%); color:var(--accent); font-weight:900; font-size:11px; white-space:nowrap; letter-spacing:1px;">PREDICTED ZONE</div>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 20px; color: var(--text-dim); font-size: 11px; font-weight: 800; letter-spacing:2px;">
                    <span>2006</span><span>2011</span><span>2016</span><span>2021</span><span>2026</span>
                </div>
            </div>
        </div>
    `,

    // --- 📓 NOTES: SMART GENERATOR ---
    notes: `
        <div style="animation: fadeIn 0.4s ease;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom: 40px;">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                <h1 style="font-size: 38px; font-weight: 800; letter-spacing: -1.5px;">SMART <span style="color:var(--accent)">NOTES</span></h1>
            </div>
            <div class="glass-card" style="padding:40px;">
                <input id="topic" placeholder="SPECIFY RESEARCH TOPIC..." style="width:100%; background:rgba(0,0,0,0.4); border:1px solid var(--border); padding:22px; border-radius:15px; color:white; margin-bottom:25px; outline:none; font-family:'Courier New', monospace; font-size:16px; letter-spacing:1px; border-left: 5px solid var(--accent);">
                <button class="btn-action" style="width:100%; height:65px; letter-spacing:4px; font-size:16px; font-weight:900;" onclick="generateNotes()">GENERATE ELITE DRAFT</button>
            </div>
            <div id="notes-output" style="margin-top:30px;"></div>
        </div>
    `,

    // --- 🛡️ EXAMS & OTHERS (SYNCED PLACEHOLDERS) ---
    exams: `<div class="glass-card" style="padding:100px; text-align:center;"><h1>PROCTORED EXAM CHAMBER</h1><p style="color:var(--text-dim); margin-top:20px; letter-spacing:2px;">INITIALIZING SECURE PROTOCOLS...</p></div>`,
    practice: `<div class="glass-card" style="padding:100px; text-align:center;"><h1>PRACTICE LAB</h1><p style="color:var(--text-dim); margin-top:20px; letter-spacing:2px;">GENERATING DATASETS...</p></div>`,
    planner: `<div class="glass-card" style="padding:100px; text-align:center;"><h1>NEURAL PLANNER</h1><p style="color:var(--text-dim); margin-top:20px; letter-spacing:2px;">OPTIMIZING TIME SLOTS...</p></div>`,
    focus: `<div class="glass-card" style="padding:100px; text-align:center;"><h1>DEEP WORK CHAMBER</h1><p style="color:var(--text-dim); margin-top:20px; letter-spacing:2px;">BINAURAL_SYNC: ACTIVE</p></div>`
};

// --- CORE ENGINE FUNCTIONS ---

function navigate(id) {
    const view = document.getElementById('main-viewport');
    if(!view) return;

    view.style.opacity = '0';
    view.style.transform = 'translateY(15px)';

    setTimeout(() => {
        view.innerHTML = PAGES[id] || `<h1>404: MODULE_NOT_FOUND</h1>`;
        view.style.opacity = '1';
        view.style.transform = 'translateY(0)';
        
        // Update Sidebar Active State
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const clickAttr = link.getAttribute('onclick');
            if(clickAttr && clickAttr.includes(`'${id}'`)) {
                link.classList.add('active');
            }
        });
    }, 180);
}

function startDeepScan() {
    const beam = document.getElementById('scan-beam');
    const log = document.getElementById('scan-log');
    if(!beam) return;

    beam.style.display = 'block';
    beam.style.animation = 'scanLoop 2.5s infinite ease-in-out';
    
    log.innerHTML += "<br>> ANALYZING_VISUAL_DATA...";
    setTimeout(() => { log.innerHTML += "<br>> PATTERN_MATCH: 100%"; }, 1200);
    setTimeout(() => { log.innerHTML += "<br>> OCR_EXTRACTION_SUCCESS"; }, 2000);
}

function generateNotes() {
    const topic = document.getElementById('topic').value;
    const out = document.getElementById('notes-output');
    if(!topic) return;

    out.innerHTML = `
        <div class="glass-card" style="color:var(--accent); border-style:dashed; border-color:var(--accent); display:flex; align-items:center; gap:15px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 2s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line></svg>
            NEURAL ENGINE SYNTHESIZING DATA FOR: ${topic.toUpperCase()}...
        </div>
    `;
    
    setTimeout(() => {
        out.innerHTML = `
            <div class="glass-card" style="border-left: 5px solid var(--accent); animation: fadeIn 0.5s ease; background: rgba(56,189,248,0.02);">
                <div style="display:flex; justify-content:space-between; margin-bottom:20px;">
                    <h2 style="letter-spacing:2px; font-weight:800;">${topic.toUpperCase()} // MASTER_DRAFT</h2>
                    <span style="font-size:10px; background:rgba(56,189,248,0.1); padding:5px 12px; border-radius:20px; color:var(--accent); font-weight:900;">BOARD_READY</span>
                </div>
                <p style="color:var(--text-dim); line-height:1.8; font-size:15px;">
                    Intelligence extraction complete. This module contains high-priority patterns identified from historical board datasets. 
                    Simplified neural nodes have been generated for rapid recall.
                </p>
                <div style="margin-top:25px; display:flex; gap:15px;">
                    <button class="btn-action" style="padding:10px 20px; font-size:12px;">EXPORT PDF</button>
                    <button class="btn-action" style="padding:10px 20px; font-size:12px; background:transparent; border:1px solid var(--accent); color:var(--accent);">ADD TO PLANNER</button>
                </div>
            </div>
        `;
    }, 2000);
}

// System Heartbeat
setInterval(() => {
    const clock = document.getElementById('clock');
    if(clock) clock.innerText = new Date().toLocaleTimeString('en-GB');
}, 1000);

// Animation Styles Injection
const globalStyles = document.createElement("style");
globalStyles.innerText = `
    @keyframes scanLoop { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }
    @keyframes spin { 100% { transform: rotate(360deg); } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(globalStyles);

// Boot sequence
window.onload = () => navigate('dash');
