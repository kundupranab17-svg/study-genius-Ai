/* ==========================================
   STUDYGENIUS AI - MASTER ENGINE (FIXED)
   ========================================== */

const viewport = document.getElementById('main-viewport');

// 1. ALL PAGES DATA
const PAGES = {
    dash: `
        <div class="page-enter">
            <h1>StudyGenius AI Dashboard</h1>
            <p style="color: var(--text-gray);">Target: ₹3,00,000/month. Status: Online.</p>
        </div>`,
    
    exams: `
        <div class="page-enter">
            <h1>🛡️ AI Mock Exams</h1>
            <p style="color: var(--text-gray); margin-bottom: 20px;">Ready for simulation?</p>
            <button class="btn-upgrade" onclick="alert('Exam system loading...')">START PHYSICS</button>
        </div>`,

    notes: `
        <div class="page-enter">
            <h1>🧠 Smart AI Notes</h1>
            <p style="color: var(--text-gray); margin-bottom:30px;">Generate world-class study material.</p>
            <div style="display:flex; gap:10px;">
                <input type="text" id="note-topic" placeholder="Example: Black Hole" 
                       style="flex:1; padding: 15px; background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: white; outline: none;">
                <button class="btn-upgrade" id="gen-btn" onclick="generateNotes()">GENERATE</button>
            </div>
            <div id="notes-display" style="margin-top:30px;"></div>
        </div>`,

    pricing: `
        <div class="page-enter" style="text-align: center;">
            <h1>Elite Pricing</h1>
            <div style="background: rgba(17, 24, 39, 0.7); padding: 40px; border-radius: 25px; border: 2px solid #38bdf8; width: 300px; margin: 30px auto;">
                <h2 style="color: #38bdf8;">$49/mo</h2>
                <button class="btn-upgrade" style="width: 100%; margin-top: 20px;">UPGRADE NOW</button>
            </div>
        </div>`
};

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
