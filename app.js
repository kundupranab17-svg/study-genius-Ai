/**
 * STUDYGENIUS AI - MASTER CONTROL ENGINE
 * Founder: Commander
 * Version: 2.0 (Premium SVG Edition)
 */

// 1. MODULES REPOSITORY: Har feature ka premium UI yahan store hai
const PAGES = {
    dash: `
        <div style="animation: fadeIn 0.4s ease-out;">
            <h1 style="font-size: 42px; font-weight: 800; margin-bottom: 10px; letter-spacing: -1.5px;">Intelligence <span style="color:var(--accent)">Hub</span></h1>
            <p style="color: var(--text-dim); margin-bottom: 40px;">Real-time system monitoring and global ranking.</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                <div class="glass-card">
                    <div style="display:flex; justify-content:space-between; align-items:start;">
                        <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 1px;">KNOWLEDGE BASE</p>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </div>
                    <h2 style="font-size: 36px; margin: 15px 0;">87.4%</h2>
                    <div style="width:100%; height:6px; background:rgba(255,255,255,0.05); border-radius:10px;">
                        <div style="width:87%; height:100%; background:var(--accent); box-shadow: 0 0 15px var(--accent);"></div>
                    </div>
                </div>

                <div class="glass-card">
                    <div style="display:flex; justify-content:space-between; align-items:start;">
                        <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 1px;">GLOBAL RANK</p>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                    </div>
                    <h2 style="font-size: 36px; margin: 15px 0;">#04</h2>
                    <p style="color: #10b981; font-size: 12px; font-weight: 700;">↑ Top 0.01% globally</p>
                </div>

                <div class="glass-card">
                    <div style="display:flex; justify-content:space-between; align-items:start;">
                        <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 1px;">AI PREDICTION</p>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                    </div>
                    <h2 style="font-size: 36px; margin: 15px 0;">HIGH</h2>
                    <p style="color: var(--accent); font-size: 12px;">Pattern Match: 98%</p>
                </div>
            </div>
        </div>
    `,
    scanner: `
        <div style="animation: fadeIn 0.5s ease-out;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                <h1 style="font-size: 32px; font-weight: 800;">AI Vision <span style="color:var(--accent)">Scanner</span></h1>
            </div>
            <p style="color: var(--text-dim); margin-bottom: 30px;">Digitize handwritten notes and textbooks instantly using Neural Extraction.</p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
                <div class="glass-card" style="border: 2px dashed var(--border); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px; cursor: pointer; transition: 0.3s;" onclick="document.getElementById('fileInput').click()" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    <p style="font-weight: 700; margin-top:15px;">Drop Files or Click to Scan</p>
                    <input type="file" id="fileInput" style="display:none">
                </div>
                <div class="glass-card">
                    <h3 style="margin-bottom: 15px; font-size: 14px; text-transform:uppercase; letter-spacing:1px; color:var(--accent);">Neural Extraction Result</h3>
                    <div id="scan-result" style="height: 200px; background: rgba(0,0,0,0.2); border-radius: 12px; padding: 15px; color: var(--text-dim); font-size: 14px; overflow-y: auto; border: 1px solid var(--border);">
                        System online. Waiting for input...
                    </div>
                </div>
            </div>
        </div>
    `,
    notes: `
        <div style="animation: fadeIn 0.4s ease-out;">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <h1 style="font-size: 32px; font-weight: 800;">Smart <span style="color:var(--accent)">Notes</span></h1>
            </div>
            <div class="glass-card" style="margin-bottom: 25px;">
                <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                    <input id="topic-input" placeholder="Topic: e.g. Quantum Physics" style="background: rgba(0,0,0,0.3); border: 1px solid var(--border); padding: 15px; border-radius: 12px; color: white; outline:none; font-size:14px;">
                    <select id="board-select" style="background: #0f172a; border: 1px solid var(--border); padding: 15px; border-radius: 12px; color: white; cursor:pointer;">
                        <option>CBSE</option><option>ICSE</option><option>IGCSE</option><option>State Board</option>
                    </select>
                    <select id="lang-select" style="background: #0f172a; border: 1px solid var(--border); padding: 15px; border-radius: 12px; color: white; cursor:pointer;">
                        <option>English</option><option>Hindi</option><option>Hinglish</option>
                    </select>
                </div>
                <button class="btn-action" style="width: 100%; height: 50px; font-weight:800; text-transform:uppercase; letter-spacing:1px;" onclick="generateNotes()">Generate Elite Notes</button>
            </div>
            <div id="notes-output"></div>
        </div>
    `,
    cheatsheet: `<div class="glass-card" style="text-align:center; padding:80px;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="margin-bottom:20px; opacity:0.5;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg><h1>Cheat Sheets</h1><p style="color:var(--text-dim);">Generating rapid revision material...</p></div>`,
    revision: `<div class="glass-card" style="text-align:center; padding:80px;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="margin-bottom:20px; opacity:0.5;"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg><h1>Revision Maps</h1><p style="color:var(--text-dim);">Building visual concept networks...</p></div>`,
    exams: `<div class="glass-card" style="text-align:center; padding:80px;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="margin-bottom:20px; opacity:0.5;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><h1>AI Mock Tests</h1><p style="color:var(--text-dim);">Initializing secure proctored environment...</p></div>`,
    analytics20: `<div class="glass-card" style="text-align:center; padding:80px;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="margin-bottom:20px; opacity:0.5;"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg><h1>20-Year Analysis</h1><p style="color:var(--text-dim);">Scanning board exam patterns (2006-2026)...</p></div>`,
    practice: `<div class="glass-card" style="text-align:center; padding:80px;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="margin-bottom:20px; opacity:0.5;"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><h1>Practice Papers</h1><p style="color:var(--text-dim);">Generating custom question sets...</p></div>`,
    planner: `<div class="glass-card" style="text-align:center; padding:80px;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="margin-bottom:20px; opacity:0.5;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><h1>AI Study Planner</h1><p style="color:var(--text-dim);">Optimizing your schedule for peak performance...</p></div>`,
    focus: `<div class="glass-card" style="text-align:center; padding:80px;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="margin-bottom:20px; opacity:0.5;"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg><h1>Focus Mode</h1><p style="color:var(--text-dim);">Deep work chamber activated. Distractions blocked.</p></div>`,
    flashcards: `<div class="glass-card" style="text-align:center; padding:80px;"><svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" style="margin-bottom:20px; opacity:0.5;"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg><h1>Flashcards</h1><p style="color:var(--text-dim);">Creating active recall decks...</p></div>`
};

// 2. NAVIGATION ENGINE: Pages switch karne ke liye
function navigate(pageId) {
    const viewport = document.getElementById('main-viewport');
    if (!viewport) return;

    // Smooth transition effect
    viewport.style.opacity = '0';
    viewport.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        viewport.innerHTML = PAGES[pageId] || `<div class="glass-card"><h1>Module Offline</h1></div>`;
        viewport.style.opacity = '1';
        viewport.style.transform = 'translateY(0)';
        
        // Sidebar links highlight update
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            // Check if onclick attribute contains the pageId
            const clickAttr = link.getAttribute('onclick');
            if (clickAttr && clickAttr.includes(`'${pageId}'`)) {
                link.classList.add('active');
            }
        });
    }, 150);
}

// 3. FEATURE LOGIC: Notes Generate karne ka demo
function generateNotes() {
    const topic = document.getElementById('topic-input').value;
    const board = document.getElementById('board-select').value;
    const lang = document.getElementById('lang-select').value;
    const output = document.getElementById('notes-output');

    if(!topic) {
        alert("Commander, please enter a topic first!");
        return;
    }

    // Loading State with SVG
    output.innerHTML = `
        <div class="glass-card" style="border-color: var(--accent); color: var(--accent); display: flex; align-items: center; gap: 15px;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 2s linear infinite;">
                <line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line>
            </svg>
            <p style="font-weight: 700;">AI is analyzing ${board} patterns for "${topic}" in ${lang}...</p>
        </div>
    `;
    
    setTimeout(() => {
        output.innerHTML = `
            <div class="glass-card" style="border-left: 5px solid var(--accent); animation: fadeIn 0.5s ease; background: rgba(56, 189, 248, 0.03);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                    <h2 style="color:var(--accent); text-transform:uppercase; letter-spacing:1px;">${topic} - Master Notes</h2>
                    <span style="font-size: 10px; padding: 4px 10px; background: rgba(56, 189, 248, 0.1); border-radius: 20px; color: var(--accent); border: 1px solid var(--accent); font-weight: 800;">${board} VALIDATED</span>
                </div>
                <div style="color: var(--text-dim); line-height: 1.8;">
                    <p style="margin-bottom:15px;"><b>Key Concept:</b> This topic has been a high-priority area in ${board} exams for the last 5 years.</p>
                    <ul style="padding-left: 20px;">
                        <li style="margin-bottom:10px;">Deep Neural Extraction complete for requested module.</li>
                        <li style="margin-bottom:10px;">Simplified explanations generated in ${lang}.</li>
                        <li style="margin-bottom:10px;">Ready for Cheat Sheet conversion.</li>
                    </ul>
                </div>
                <button class="btn-action" style="margin-top:20px; padding: 10px 20px; font-size:12px;">Download PDF</button>
            </div>
        `;
    }, 2000);
}

// 4. UTILITIES
// Real-time Clock logic
setInterval(() => {
    const clock = document.getElementById('clock');
    if(clock) {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString('en-US', { hour12: false });
    }
}, 1000);

// CSS Spin Animation for Loading
const style = document.createElement('style');
style.innerHTML = `
    @keyframes spin { 100% { transform: rotate(360deg); } }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);

// 5. BOOTUP SEQUENCE
window.onload = () => {
    console.log("StudyGenius AI: Systems Online.");
    navigate('dash'); // Load Dashboard by default
};
