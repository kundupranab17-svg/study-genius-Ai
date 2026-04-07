/* ==========================================
   STUDYGENIUS AI - MASTER ENGINE (FIXED)
   ========================================== */

const viewport = document.getElementById('main-viewport');

// 1. ALL PAGES DATA
PAGES.dash = `
    <div class="page-enter">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:40px;">
            <div>
                <h1 style="font-size: 36px; letter-spacing:-1px;">Commander's Control</h1>
                <p style="color: var(--text-dim); margin-top:5px;">Mission Status: <span style="color:#10b981;">Optimized for Excellence</span></p>
            </div>
            <div style="text-align:right;">
                <p style="font-size:12px; color:var(--text-dim);">SYSTEM TIME</p>
                <h3 id="clock" style="color:var(--accent);">00:00:00</h3>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 25px;">
            
            <div class="stat-card">
                <p class="stat-label">AI KNOWLEDGE ABSORBED</p>
                <h2 class="stat-value">84%</h2>
                <div class="progress-bar"><div class="progress-fill" style="width: 84%;"></div></div>
            </div>

            <div class="stat-card">
                <p class="stat-label">RANK AMONG TOPPERS</p>
                <h2 class="stat-value">#12</h2>
                <p style="font-size:12px; color:#10b981; margin-top:10px;">↑ 4 places this week</p>
            </div>

            <div class="stat-card">
                <p class="stat-label">FOCUS HOURS</p>
                <h2 class="stat-value">128.5 <span style="font-size:16px;">hrs</span></h2>
                <p style="font-size:12px; color:var(--text-dim); margin-top:10px;">Top 1% of Global Users</p>
            </div>

        </div>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px; margin-top: 40px;">
            <div class="glass-panel" style="padding:30px;">
                <h3 style="margin-bottom:20px;">AI Performance Insights</h3>
                <div style="height:200px; display:flex; align-items:flex-end; gap:15px; padding-bottom:20px; border-bottom:1px solid var(--glass-border);">
                    <div class="chart-bar" style="height:60%;"></div>
                    <div class="chart-bar" style="height:80%;"></div>
                    <div class="chart-bar" style="height:45%;"></div>
                    <div class="chart-bar" style="height:90%; background:var(--accent);"></div>
                    <div class="chart-bar" style="height:70%;"></div>
                    <div class="chart-bar" style="height:85%;"></div>
                </div>
                <p style="margin-top:20px; font-size:14px; color:var(--text-dim);">AI Prediction: You are ready for the <b>Advanced Physics Exam</b>. Probability of Success: 92%</p>
            </div>

            <div class="glass-panel" style="padding:30px;">
                <h3 style="margin-bottom:20px;">Daily Goals</h3>
                <ul style="list-style:none; font-size:14px; color:var(--text-dim);">
                    <li style="margin-bottom:15px;">✅ Solve 10 Math Problems</li>
                    <li style="margin-bottom:15px;">✅ Generate 5 Smart Notes</li>
                    <li style="margin-bottom:15px; color:var(--text-main);">⬜ Take Physics Mock Test</li>
                </ul>
                <button class="btn-upgrade" style="width:100%; margin-top:20px; font-size:12px;">UPDATE GOALS</button>
            </div>
        </div>
    </div>
`;

// 2. NAVIGATION LOGIC
function navigate(pageId) {
    console.log("Navigating to:", pageId); // Yeh check karne ke liye ki function chal raha hai
    viewport.innerHTML = PAGES[pageId];
    
    // Sidebar update
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.innerText.toLowerCase().includes(pageId === 'dash' ? 'dashboard' : pageId)) {
            link.classList.add('active');
        }
    });
}

// 3. THE GENERATE FUNCTION (The Brain)
function generateNotes() {
    console.log("Generate Button Clicked!"); // Console mein check karo ye dikhta hai ya nahi
    
    const topicField = document.getElementById('note-topic');
    const display = document.getElementById('notes-display');

    if (!topicField || !display) {
        alert("System Error: Elements not found!");
        return;
    }

    const topic = topicField.value;

    if (topic.trim() === "") {
        alert("Please enter a topic first!");
        return;
    }

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

// Initial Load
window.onload = () => navigate('dash');
