const PAGES = {
    dash: `
        <div style="animation: fadeIn 0.4s ease-out;">
            <h1 style="font-size: 42px; font-weight: 800; margin-bottom: 10px; letter-spacing: -1.5px;">Welcome, Commander.</h1>
            <p style="color: var(--text-dim); margin-bottom: 40px;">Here is your AI-powered learning overview for today.</p>
            
            <div class="stat-grid">
                <div class="glass-card">
                    <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 1px;">KNOWLEDGE BASE</p>
                    <h2 style="font-size: 36px; margin: 15px 0;">87.4%</h2>
                    <div style="width:100%; height:6px; background:rgba(255,255,255,0.05); border-radius:10px;">
                        <div style="width:87%; height:100%; background:var(--accent); box-shadow: 0 0 15px var(--accent);"></div>
                    </div>
                </div>
                <div class="glass-card">
                    <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 1px;">GLOBAL RANK</p>
                    <h2 style="font-size: 36px; margin: 15px 0;">#04</h2>
                    <p style="color: #10b981; font-size: 12px; font-weight: 700;">↑ Top 0.01% globally</p>
                </div>
                <div class="glass-card">
                    <p style="font-size: 11px; font-weight: 800; color: var(--text-dim); letter-spacing: 1px;">AI TOKENS USED</p>
                    <h2 style="font-size: 36px; margin: 15px 0;">12.5k</h2>
                </div>
            </div>

            <div style="margin-top: 30px;" class="glass-card">
                <h3 style="margin-bottom: 15px;">AI Strategy Recommendation</h3>
                <p style="color: var(--text-dim); line-height: 1.6;">Based on your last mock exam, the AI suggests focusing on <b>Organic Chemistry</b> and <b>Quantum Mechanics</b> today to maintain your rank.</p>
            </div>
        </div>
    `,
    notes: `
        <div style="animation: fadeIn 0.4s ease-out; max-width: 900px;">
            <h1 style="font-size: 36px; font-weight: 800; margin-bottom: 30px;">AI Smart Notes</h1>
            <div class="glass-card" style="margin-bottom: 30px;">
                <p style="margin-bottom: 15px; font-weight: 600; font-size: 14px;">What do you want to master today?</p>
                <div style="display:flex; gap: 15px;">
                    <input id="topic" placeholder="e.g. Black Hole Thermodynamics..." style="flex: 1; padding: 16px; background: rgba(0,0,0,0.3); border: 1px solid var(--border); border-radius: 12px; color: white; outline: none; font-size: 15px;">
                    <button class="btn-primary" onclick="generateAI()">GENERATE</button>
                </div>
            </div>
            <div id="ai-output"></div>
        </div>
    `,
    exams: `<div class="glass-card"><h1>🛡️ AI Mock Exams</h1><p style="margin-top:20px; color:var(--text-dim);">Simulating real-world exam environments with AI proctoring. <b>Launching Soon.</b></p></div>`,
    stats: `<div class="glass-card"><h1>📈 Detailed Analytics</h1><p style="margin-top:20px; color:var(--text-dim);">Connecting to your learning data...</p></div>`
};

// Main Engine
function navigate(id) {
    const viewport = document.getElementById('main-viewport');
    viewport.innerHTML = PAGES[id];

    // CSS Update for Active State
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.innerText.toLowerCase().includes(id) || (id === 'dash' && link.innerText === '📊 Overview')) {
            link.classList.add('active');
        }
    });
}

function generateAI() {
    const topic = document.getElementById('topic').value;
    const output = document.getElementById('ai-output');
    if(!topic) return;

    output.innerHTML = `<div class="glass-card" style="border-color: var(--accent);"><p style="color: var(--accent); font-weight: 700;">System: StudyGenius AI is analyzing ${topic}...</p></div>`;

    setTimeout(() => {
        output.innerHTML = `
            <div class="glass-card" style="animation: fadeIn 0.5s ease; border-left: 5px solid var(--accent);">
                <h2 style="color: var(--accent); margin-bottom: 15px;">${topic.toUpperCase()}</h2>
                <div style="color: var(--text-dim); line-height: 1.8;">
                    <p>• <b>Contextual Analysis:</b> AI has processed the core fundamental pillars of ${topic}.</p>
                    <p>• <b>Key Insights:</b> Professional-grade summaries and exam-focused bullet points have been compiled.</p>
                    <p>• <b>Next Steps:</b> Review the formula sheet and take a mock test for 100% retention.</p>
                </div>
            </div>
        `;
    }, 2000);
}

// System Heartbeat
setInterval(() => {
    const clock = document.getElementById('system-clock');
    if(clock) clock.innerText = new Date().toLocaleTimeString();
}, 1000);

// Initialize
window.onload = () => navigate('dash');
