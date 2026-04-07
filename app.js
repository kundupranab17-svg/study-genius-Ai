/* ==========================================
   STUDYGENIUS AI - CORE ENGINE (STEP 2)
   ========================================== */

const viewport = document.getElementById('main-viewport');

// 1. CONTENT STORAGE: Har section ka premium data
const PAGES = {
    dash: `
        <div class="page-enter">
            <h1 style="font-size: 32px; margin-bottom: 10px;">Commander's Dashboard</h1>
            <p style="color: var(--text-gray);">Target: ₹3,00,000/month. Status: Building Foundation.</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 35px;">
                <div style="background: var(--panel); padding: 30px; border-radius: 20px; border: 1px solid var(--border);">
                    <p style="font-size: 12px; color: var(--text-gray); letter-spacing: 1px;">GLOBAL USERS</p>
                    <h2 style="font-size: 36px; color: var(--accent); margin-top: 10px;">0</h2>
                </div>
                <div style="background: var(--panel); padding: 30px; border-radius: 20px; border: 1px solid var(--border);">
                    <p style="font-size: 12px; color: var(--text-gray); letter-spacing: 1px;">AI REVENUE (USD)</p>
                    <h2 style="font-size: 36px; color: #10b981; margin-top: 10px;">$0.00</h2>
                </div>
            </div>
            
            <div style="margin-top: 40px; padding: 25px; background: rgba(56, 189, 248, 0.05); border-radius: 20px; border: 1px dashed var(--accent);">
                <h3 style="color: var(--accent);">Mission Briefing</h3>
                <p style="margin-top: 10px; color: var(--text-gray); line-height: 1.6;">
                    Humne Step 1 (Layout) aur Step 2 (Navigation) complete kar liya hai. 
                    Agla target "AI Exam Engine" ko activate karna hai taaki users pay karna shuru karein.
                </p>
            </div>
        </div>
    `,
    exams: `
        <div class="page-enter">
            <h1>🛡️ AI Mock Exams</h1>
            <p style="color: var(--text-gray); margin-bottom: 30px;">High-intensity simulations powered by StudyGenius AI.</p>
            <div style="display: grid; gap: 15px;">
                <div style="padding: 20px; background: var(--panel); border: 1px solid var(--border); border-radius: 15px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <h3 style="color: var(--accent);">Physics: Quantum Mechanics</h3>
                        <p style="font-size: 13px; color: var(--text-gray);">25 Questions | 40 Minutes</p>
                    </div>
                    <button class="btn-upgrade" style="box-shadow: none;">START</button>
                </div>
            </div>
        </div>
    `,
    notes: `
        <div class="page-enter">
            <h1>🧠 Smart AI Notes</h1>
            <p style="color: var(--text-gray);">Generate world-class study material in seconds.</p>
            <div style="margin-top: 30px;">
                <input type="text" placeholder="Enter topic (e.g. Organic Chemistry)" style="width: 100%; padding: 15px; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; color: white; outline: none;">
                <button class="btn-upgrade" style="margin-top: 15px; width: 100%;">GENERATE WITH AI</button>
            </div>
        </div>
    `,
    pricing: `
        <div class="page-enter" style="text-align: center;">
            <h1 style="font-size: 40px;">Choose Your Power Plan</h1>
            <p style="color: var(--text-gray); margin-bottom: 40px;">Unlock the $4,000/mo potential.</p>
            
            <div style="display: flex; justify-content: center; gap: 25px; flex-wrap: wrap;">
                <div style="background: var(--panel); padding: 40px; border-radius: 25px; border: 2px solid var(--accent); width: 320px;">
                    <h2 style="color: var(--accent);">$49<span style="font-size: 16px; color: var(--text-gray);">/mo</span></h2>
                    <h3 style="margin: 15px 0;">ELITE ACCESS</h3>
                    <ul style="text-align: left; list-style: none; color: var(--text-gray); font-size: 14px; line-height: 2;">
                        <li>✅ Unlimited AI Exams</li>
                        <li>✅ 24/7 Personal AI Tutor</li>
                        <li>✅ Priority GPU Servers</li>
                    </ul>
                    <button class="btn-upgrade" style="width: 100%; margin-top: 30px;">GET ELITE</button>
                </div>
            </div>
        </div>
    `
};

// 2. NAVIGATION ENGINE: Switching without reload
function navigate(pageId) {
    // Content update
    viewport.innerHTML = PAGES[pageId];

    // Sidebar Active State update
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        // Check if the link text contains the pageId
        if (link.innerText.toLowerCase().includes(pageId === 'dash' ? 'dashboard' : pageId)) {
            link.classList.add('active');
        }
    });
}

// 3. INITIAL LOAD: Pehle Dashboard dikhao
window.onload = () => {
    navigate('dash');
};
/* ==========================================
   STUDYGENIUS AI - STEP 3: EXAM ENGINE
   ========================================== */

// 1. QUESTION DATABASE (Mock Data for now, later we connect to Gemini API)
const questionBank = {
    physics: [
        { q: "What is the escape velocity of Earth?", a: "11.2 km/s", options: ["9.8 km/s", "11.2 km/s", "15.0 km/s", "42.1 km/s"] },
        { q: "Who proposed the Theory of Relativity?", a: "Albert Einstein", options: ["Isaac Newton", "Max Planck", "Albert Einstein", "Stephen Hawking"] },
        { q: "Unit of Electrical Resistance is?", a: "Ohm", options: ["Volt", "Ampere", "Ohm", "Watt"] }
    ]
};

let currentScore = 0;

// 2. START EXAM FUNCTION
function startExam(subject) {
    const questions = questionBank[subject];
    let examHtml = `
        <div class="page-enter">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:30px;">
                <h1>${subject.toUpperCase()} - Live Simulation</h1>
                <div id="timer" style="color:var(--accent); font-weight:800; font-size:20px; background:rgba(56,189,248,0.1); padding:10px 20px; border-radius:10px; border:1px solid var(--accent);">20:00</div>
            </div>
    `;

    questions.forEach((item, index) => {
        examHtml += `
            <div style="background: var(--panel); padding: 25px; border-radius: 18px; border: 1px solid var(--border); margin-bottom: 20px;">
                <p style="font-size: 18px; margin-bottom: 15px;">${index + 1}. ${item.q}</p>
                <div style="display: grid; gap: 10px;">
                    ${item.options.map(opt => `
                        <button class="opt-btn" onclick="selectOption(this, '${opt}', '${item.a}')" 
                                style="text-align:left; padding:12px; background:rgba(255,255,255,0.05); border:1px solid var(--border); border-radius:10px; color:var(--text-gray); cursor:pointer; transition:0.2s;">
                            ${opt}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    });

    examHtml += `
        <button class="btn-upgrade" onclick="calculateResult()" style="width:100%; height:60px; font-size:18px; margin-top:20px;">SUBMIT SIMULATION</button>
    </div>`;
    
    document.getElementById('main-viewport').innerHTML = examHtml;
    startTimer(1200); // 20 minutes
}

// 3. OPTION SELECTION LOGIC
function selectOption(btn, selected, correct) {
    // Reset other buttons in the same question block
    const parent = btn.parentElement;
    parent.querySelectorAll('.opt-btn').forEach(b => {
        b.style.borderColor = 'var(--border)';
        b.style.background = 'rgba(255,255,255,0.05)';
    });

    // Mark selected
    btn.style.borderColor = 'var(--accent)';
    btn.style.background = 'rgba(56,189,248,0.1)';
    
    if(selected === correct) {
        btn.setAttribute('data-correct', 'true');
    } else {
        btn.setAttribute('data-correct', 'false');
    }
}

// 4. TIMER LOGIC
function startTimer(seconds) {
    let timer = seconds;
    const timerElement = document.getElementById('timer');
    const interval = setInterval(() => {
        let mins = Math.floor(timer / 60);
        let secs = timer % 60;
        timerElement.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        if (--timer < 0) {
            clearInterval(interval);
            calculateResult();
        }
    }, 1000);
}

// 5. RESULT CALCULATION
function calculateResult() {
    const selectedOptions = document.querySelectorAll('button[data-correct="true"]');
    const score = selectedOptions.length;
    
    document.getElementById('main-viewport').innerHTML = `
        <div class="page-enter" style="text-align:center; padding-top:50px;">
            <div style="font-size:80px;">🏆</div>
            <h1 style="font-size:40px; margin-top:20px;">Simulation Complete</h1>
            <p style="color:var(--text-gray); font-size:20px; margin-top:10px;">You scored <span style="color:var(--accent); font-weight:800;">${score} out of 3</span></p>
            <div style="margin-top:30px;">
                <button class="btn-upgrade" onclick="navigate('dash')">RETURN TO COMMAND CENTER</button>
            </div>
        </div>
    `;
}
/* ==========================================
   STUDYGENIUS AI - STEP 4: SMART NOTES LOGIC
   ========================================== */

function generateNotes() {
    const topic = document.getElementById('note-topic').value;
    if(!topic) {
        alert("Please enter a topic first, Commander!");
        return;
    }

    const notesDisplay = document.getElementById('notes-display');
    
    // 1. SHOW AI LOADING EFFECT
    notesDisplay.innerHTML = `
        <div style="text-align:center; padding:40px;">
            <div class="spinner" style="width:40px; height:40px; border:4px solid var(--border); border-top:4px solid var(--accent); border-radius:50%; margin:0 auto; animation: spin 1s linear infinite;"></div>
            <p style="margin-top:20px; color:var(--accent); font-weight:600;">StudyGenius AI is scanning global databases for "${topic}"...</p>
        </div>
    `;

    // 2. SIMULATE AI GENERATION (3 Seconds Delay)
    setTimeout(() => {
        notesDisplay.innerHTML = `
            <div class="page-enter" style="background:rgba(255,255,255,0.03); padding:30px; border-radius:20px; border:1px solid var(--border); border-left:5px solid var(--accent);">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                    <h2 style="color:var(--accent);">Topic: ${topic}</h2>
                    <button onclick="window.print()" style="background:none; border:1px solid var(--border); color:var(--text-gray); padding:5px 15px; border-radius:8px; cursor:pointer;">PDF Export</button>
                </div>
                <div style="line-height:1.8; color:var(--text-gray);">
                    <p><b>Core Concept:</b> This is a premium summary generated by StudyGenius AI. It covers the fundamental principles of ${topic}.</p>
                    <ul style="margin:20px 0 0 20px;">
                        <li>Detailed analysis of historical context and modern applications.</li>
                        <li>Key mathematical formulas and theoretical frameworks included.</li>
                        <li>Strategic points for high-tier examinations (SAT/JEE/A-Levels).</li>
                    </ul>
                    <p style="margin-top:20px; padding:15px; background:rgba(56,189,248,0.1); border-radius:10px; color:var(--text-white);">
                        <i>Note: Upgrade to ELITE PRO to unlock the full 20-page deep-dive report for this topic.</i>
                    </p>
                </div>
            </div>
        `;
    }, 3000);
}

// Update the Navigate function to include Notes UI structure
// Ye update PAGES.notes ke andar input box ko ID deta hai
PAGES.notes = `
    <div class="page-enter">
        <h1>🧠 Smart AI Notes</h1>
        <p style="color: var(--text-gray); margin-bottom:30px;">Generate world-class study material in seconds.</p>
        <div style="margin-top: 30px; display:flex; gap:10px;">
            <input type="text" id="note-topic" placeholder="Enter topic (e.g. Quantum Physics)" 
                   style="flex:1; padding: 18px; background: var(--panel); border: 1px solid var(--border); border-radius: 12px; color: white; outline: none; font-size:16px;">
            <button class="btn-upgrade" onclick="generateNotes()" style="height:auto;">GENERATE</button>
        </div>
        <div id="notes-display" style="margin-top:40px;">
            </div>
    </div>
`;

// CSS for Spinner (Add this to your index.html <style> or a separate block)
const extraStyle = document.createElement('style');
extraStyle.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
document.head.appendChild(extraStyle);
