/* ==========================================
   STUDYGENIUS AI - FULL ENGINE (v1.2)
   ========================================== */

const viewport = document.getElementById('main-viewport');

// 1. DATA CENTER
const questionBank = {
    physics: [
        { q: "What is the escape velocity of Earth?", a: "11.2 km/s", options: ["9.8 km/s", "11.2 km/s", "15.0 km/s", "42.1 km/s"] },
        { q: "Unit of Electrical Resistance is?", a: "Ohm", options: ["Volt", "Ampere", "Ohm", "Watt"] }
    ]
};

// 2. PAGES STRUCTURE
const PAGES = {
    dash: `
        <div class="page-enter">
            <h1>Commander's Dashboard</h1>
            <p style="color: var(--text-gray);">Target: ₹3,00,000/month. Status: Online.</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 35px;">
                <div style="background: var(--panel); padding: 30px; border-radius: 20px; border: 1px solid var(--border);">
                    <p style="font-size: 12px; color: var(--text-gray);">AI REVENUE</p>
                    <h2 style="font-size: 32px; color: #10b981; margin-top: 10px;">$0.00</h2>
                </div>
                <div style="background: var(--panel); padding: 30px; border-radius: 20px; border: 1px solid var(--border);">
                    <p style="font-size: 12px; color: var(--text-gray);">SYSTEM STATUS</p>
                    <h2 style="font-size: 32px; color: var(--accent); margin-top: 10px;">ACTIVE</h2>
                </div>
            </div>
        </div>`,
    
    exams: `
        <div class="page-enter">
            <h1>🛡️ AI Mock Exams</h1>
            <p style="color: var(--text-gray); margin-bottom: 20px;">High-intensity simulations.</p>
            <button class="btn-upgrade" onclick="startExam('physics')">START PHYSICS EXAM</button>
        </div>`,

    notes: `
        <div class="page-enter">
            <h1>🧠 Smart AI Notes</h1>
            <p style="color: var(--text-gray); margin-bottom:30px;">Generate world-class study material.</p>
            <div style="display:flex; gap:10px;">
                <input type="text" id="note-topic" placeholder="Enter topic (e.g. Gravity)" 
                       style="flex:1; padding: 15px; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; color: white; outline: none;">
                <button class="btn-upgrade" onclick="generateNotes()">GENERATE</button>
            </div>
            <div id="notes-display" style="margin-top:30px;"></div>
        </div>`,

    pricing: `
        <div class="page-enter" style="text-align: center;">
            <h1>Elite Pricing</h1>
            <div style="background: var(--panel); padding: 40px; border-radius: 25px; border: 2px solid var(--accent); width: 300px; margin: 30px auto;">
                <h2 style="color: var(--accent);">$49/mo</h2>
                <button class="btn-upgrade" style="width: 100%; margin-top: 20px;">GET ELITE</button>
            </div>
        </div>`
};

// 3. NAVIGATION ENGINE
function navigate(pageId) {
    viewport.innerHTML = PAGES[pageId];
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.innerText.toLowerCase().includes(pageId === 'dash' ? 'dashboard' : pageId)) {
            link.classList.add('active');
        }
    });
}

// 4. SMART NOTES ENGINE
function generateNotes() {
    const topic = document.getElementById('note-topic').value;
    if(!topic) return alert("Enter a topic!");

    const display = document.getElementById('notes-display');
    display.innerHTML = `<p style="color:var(--accent);">StudyGenius AI is thinking...</p>`;

    setTimeout(() => {
        display.innerHTML = `
            <div style="background:rgba(255,255,255,0.05); padding:20px; border-radius:15px; border-left:4px solid var(--accent);">
                <h3>Notes for: ${topic}</h3>
                <p style="margin-top:10px; color:var(--text-gray);">1. Detailed summary generated.<br>2. Key points analyzed.<br>3. Exam strategy included.</p>
            </div>`;
    }, 2000);
}

// 5. EXAM ENGINE
function startExam(subject) {
    const q = questionBank[subject][0];
    viewport.innerHTML = `
        <div class="page-enter">
            <h2>Exam: ${subject.toUpperCase()}</h2>
            <div style="background:var(--panel); padding:20px; border-radius:15px; margin-top:20px;">
                <p>${q.q}</p>
                <button class="btn-upgrade" style="margin-top:10px;" onclick="alert('Correct!')">${q.a}</button>
            </div>
        </div>`;
}

// Start on Dashboard
window.onload = () => navigate('dash');

// Spinner Animation Fix
const style = document.createElement('style');
style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
document.head.appendChild(style);
