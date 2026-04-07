/* ==========================================
   STUDYGENIUS AI - MASTER ENGINE (FIXED)
   ========================================== */

const viewport = document.getElementById('main-viewport');

// 1. ALL PAGES DATA (Huge Design)
const PAGES = {
    dash: `
        <div class="page-enter">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:40px;">
                <div>
                    <h1 style="font-size: 42px; font-weight:800; letter-spacing:-2px;">Commander's Control</h1>
                    <p style="color: #94a3b8; margin-top:5px;">Mission Status: <span style="color:#10b981; font-weight:bold;">OPTIMIZED</span></p>
                </div>
                <div style="text-align:right; background:rgba(56,189,248,0.1); padding:10px 20px; border-radius:12px; border:1px solid rgba(56,189,248,0.2);">
                    <p style="font-size:10px; color:#38bdf8; letter-spacing:1px; font-weight:800;">SYSTEM CLOCK</p>
                    <h3 id="clock" style="color:#fff; font-family:monospace;">00:00:00</h3>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
                <div class="stat-card">
                    <p style="font-size:11px; color:#94a3b8; letter-spacing:1px;">AI KNOWLEDGE POWER</p>
                    <h2 style="font-size:36px; margin:10px 0;">84%</h2>
                    <div style="width:100%; height:8px; background:rgba(255,255,255,0.1); border-radius:10px; overflow:hidden;">
                        <div style="width:84%; height:100%; background:#38bdf8; box-shadow:0 0 15px #38bdf8;"></div>
                    </div>
                </div>
                <div class="stat-card">
                    <p style="font-size:11px; color:#94a3b8; letter-spacing:1px;">GLOBAL RANKING</p>
                    <h2 style="font-size:36px; margin:10px 0;">#12</h2>
                    <p style="color:#10b981; font-size:12px;">Top 0.1% of Scholars</p>
                </div>
                <div class="stat-card">
                    <p style="font-size:11px; color:#94a3b8; letter-spacing:1px;">DEEP FOCUS TIME</p>
                    <h2 style="font-size:36px; margin:10px 0;">128.5<span style="font-size:18px;">h</span></h2>
                </div>
            </div>
        </div>
    `,
    notes: `
        <div class="page-enter">
            <h1 style="font-size:32px; margin-bottom:20px;">Smart Notes Generator</h1>
            <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:24px; border:1px solid rgba(255,255,255,0.1);">
                <input id="note-topic" placeholder="Enter any topic (e.g. Quantum Physics)..." 
                       style="width:100%; padding:20px; background:rgba(0,0,0,0.2); border:1px solid rgba(255,255,255,0.1); border-radius:15px; color:white; font-size:16px; margin-bottom:20px;">
                <button class="btn-upgrade" onclick="generateNotes()" style="width:100%; padding:20px; font-size:18px;">GENERATE COSMIC NOTES</button>
            </div>
            <div id="notes-display" style="margin-top:30px;"></div>
        </div>
    `,
    exams: `<h1>AI Mock Exams</h1><p style="color:#94a3b8;">Feature launching in Phase 2...</p>`,
    pricing: `<h1>Elite Membership</h1><p style="color:#94a3b8;">Unlock God-Mode for $49/mo</p>`
};

// 2. NAVIGATION LOGIC
function navigate(pageId) {
    const viewport = document.getElementById('main-viewport');
    viewport.innerHTML = PAGES[pageId];
    
    // Update Active Link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.innerText.toLowerCase().includes(pageId)) link.classList.add('active');
    });
}

// 3. CLOCK LOGIC
setInterval(() => {
    const clock = document.getElementById('clock');
    if(clock) clock.innerText = new Date().toLocaleTimeString();
}, 1000);

    // Show Thinking State
    display.innerHTML = `<p style="color:#38bdf8; font-weight:bold; animation: pulse 1.5s infinite;">StudyGenius AI is thinking about "${topic}"...</p>`;

    // Simulate AI delay
    setTimeout(() => {
        display.innerHTML = `
            <div class="page-enter" style="background:rgba(255,255,255,0.05); padding:25px; border-radius:15px; border-left:5px solid #38bdf8;">
                <h3 style="color:#38bdf8;">Deep Dive: ${topic}</h3>
                <p style="margin-top:15px; color:#9ca3af; line-height:1.7;">
                    StudyGenius AI has analyzed <b>${topic}</b>. Here is your premium summary:<br><br>
                    • Core principles and historical context identified.<br>
                    • Expert-level insights for high-tier exams.<br>
                    • Key formulas and diagrams suggested for review.
                </p>
            </div>`;
    }, 2000);
}

// Global pulse animation for "Thinking" state
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes pulse { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
`;
document.head.appendChild(styleSheet);

// 4. INITIAL LOAD
window.onload = () => navigate('dash');
