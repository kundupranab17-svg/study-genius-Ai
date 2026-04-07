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
