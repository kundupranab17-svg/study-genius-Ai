const PAGES = {
    dash: `
        <div style="animation: fadeIn 0.4s ease;">
            <h1 style="font-size: 42px; font-weight: 800; margin-bottom: 10px;">System <span style="color:var(--accent)">Dashboard</span></h1>
            <p style="color:var(--text-dim); margin-bottom:40px;">Real-time intelligence feed.</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                <div class="glass-card"><h3>87.4%</h3><p style="color:var(--text-dim); font-size:12px;">Knowledge Mastery</p></div>
                <div class="glass-card"><h3>#04</h3><p style="color:var(--text-dim); font-size:12px;">Global Student Rank</p></div>
                <div class="glass-card"><h3 style="color:var(--accent);">98.2%</h3><p style="color:var(--text-dim); font-size:12px;">Exam Probability Match</p></div>
            </div>
        </div>
    `,
    scanner: `
        <div style="animation: fadeIn 0.4s ease;">
            <h1>AI Vision <span style="color:var(--accent)">Scanner</span></h1>
            <p style="color:var(--text-dim); margin-bottom:30px;">Drop photos or PDFs to digitize content.</p>
            <div class="glass-card" style="border: 2px dashed var(--border); padding: 60px; text-align:center; cursor:pointer;" onclick="alert('System: AI Camera Initializing...')">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" style="margin-bottom:15px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <p>Click to Upload Study Material</p>
            </div>
        </div>
    `,
    notes: `
        <div style="animation: fadeIn 0.4s ease;">
            <h1>Smart <span style="color:var(--accent)">Notes</span> Generator</h1>
            <div class="glass-card" style="margin-top:20px;">
                <input id="topic" placeholder="Enter Topic (e.g. Organic Chemistry)" style="width:100%; background:rgba(0,0,0,0.2); border:1px solid var(--border); padding:15px; border-radius:10px; color:white; margin-bottom:15px; outline:none;">
                <button class="btn-action" style="width:100%" onclick="generate()">Generate Elite Content</button>
            </div>
            <div id="output" style="margin-top:20px;"></div>
        </div>
    `,
    analytics: `
        <div style="animation: fadeIn 0.4s ease;">
            <h1>20-Year <span style="color:var(--accent)">Pattern Decoder</span></h1>
            <p style="color:var(--text-dim); margin-bottom:30px;">Analyzing 20 years of board papers to find High-Yield questions.</p>
            <div class="glass-card">
                <div style="height:200px; display:flex; align-items:flex-end; gap:10px; border-bottom:1px solid var(--border); padding-bottom:10px;">
                    <div style="flex:1; background:var(--accent); height:40%; border-radius:5px 5px 0 0;"></div>
                    <div style="flex:1; background:var(--accent); height:70%; border-radius:5px 5px 0 0;"></div>
                    <div style="flex:1; background:var(--accent); height:95%; border-radius:5px 5px 0 0; box-shadow:0 0 15px var(--accent);"></div>
                    <div style="flex:1; background:var(--accent); height:55%; border-radius:5px 5px 0 0;"></div>
                </div>
                <p style="margin-top:15px; text-align:center; color:var(--accent); font-weight:800;">TOP PREDICTION: Thermodynamics (12% weightage)</p>
            </div>
        </div>
    `,
    exams: `<div class="glass-card"><h1>Mock Exam Chamber</h1><p>Initializing secure proctored environment...</p></div>`,
    practice: `<h1>Practice Question Sets</h1><div class="glass-card">Generating custom sets based on your level...</div>`,
    planner: `<h1>AI Daily Planner</h1><div class="glass-card">Calculating peak productivity slots...</div>`,
    focus: `<h1>Focus Mode</h1><div class="glass-card">Blocking distractions and playing neural binaural beats...</div>`
};

function navigate(id) {
    const view = document.getElementById('main-viewport');
    view.style.opacity = '0';
    setTimeout(() => {
        view.innerHTML = PAGES[id];
        view.style.opacity = '1';
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('active');
            if(l.getAttribute('onclick').includes(id)) l.classList.add('active');
        });
    }, 150);
}

function generate() {
    const topic = document.getElementById('topic').value;
    const out = document.getElementById('output');
    if(!topic) return;
    out.innerHTML = `<div class="glass-card" style="color:var(--accent)">Analyzing neural data for ${topic}...</div>`;
    setTimeout(() => {
        out.innerHTML = `<div class="glass-card" style="border-left:4px solid var(--accent)">
            <h2>${topic} Master Guide</h2>
            <p style="margin-top:10px; color:var(--text-dim); line-height:1.6;">AI has extracted the most important points for ${topic}. Study this to save 80% of your time.</p>
        </div>`;
    }, 1500);
}

setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-GB');
}, 1000);

window.onload = () => navigate('dash');
