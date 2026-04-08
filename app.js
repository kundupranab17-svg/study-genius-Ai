const UI = {
    dash: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-family:'Space Grotesk'; font-size:40px; margin-bottom:40px;">Neural <span style="color:var(--accent)">Dashboard</span></h1>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
                <div style="background:var(--card); padding:30px; border-radius:15px; border:1px solid var(--border);">
                    <p class="tag">INTELLECT_QUOTIENT</p>
                    <h2 style="font-size:48px; font-family:'Space Grotesk';">142</h2>
                    <div style="width:100%; height:4px; background:#222; margin-top:20px;"><div style="width:85%; height:100%; background:var(--accent);"></div></div>
                </div>
                <div style="background:var(--card); padding:30px; border-radius:15px; border:1px solid var(--border);">
                    <p class="tag">SUCCESS_PROBABILITY</p>
                    <h2 style="font-size:48px; font-family:'Space Grotesk';">99.1%</h2>
                </div>
            </div>
        </div>
    `,
    
    scanner: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-family:'Space Grotesk'; font-size:40px; margin-bottom:40px;">Vision <span style="color:var(--accent)">System</span></h1>
            <div style="background:#000; border:2px dashed var(--accent); height:350px; border-radius:20px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:crosshair; position:relative; overflow:hidden;" onclick="runScan()">
                <div id="scan-bar" style="position:absolute; top:0; left:0; width:100%; height:2px; background:var(--accent); box-shadow:0 0 20px var(--accent); display:none;"></div>
                <p style="color:var(--accent); font-family:monospace; letter-spacing:3px; font-size:12px;">AWAITING_NEURAL_INPUT</p>
            </div>
            <div id="log" style="margin-top:20px; font-family:monospace; font-size:11px; color:#10b981; line-height:2;"></div>
        </div>
    `,

    analytics: `
        <div style="animation: fadeIn 0.5s ease;">
            <h1 style="font-family:'Space Grotesk'; font-size:40px; margin-bottom:40px;">Data <span style="color:var(--accent)">Stream</span></h1>
            <div style="background:var(--card); padding:40px; border-radius:20px; border:1px solid var(--border);">
                <p class="tag">HISTORICAL_REPETITION_CORE</p>
                <div style="height:200px; display:flex; align-items:flex-end; gap:20px; margin-top:30px; border-bottom:1px solid #333; padding-bottom:10px;">
                    <div style="flex:1; height:35%; background:rgba(0,242,255,0.1);"></div>
                    <div style="flex:1; height:60%; background:rgba(0,242,255,0.2);"></div>
                    <div style="flex:1; height:98%; background:var(--accent); box-shadow:0 0 30px var(--accent);"></div>
                </div>
                <p style="font-size:10px; color:#555; text-align:center; margin-top:15px;">BOARD_DATASET_ANALYSIS_SYNCED [2006-2026]</p>
            </div>
        </div>
    `
};

function load(id) {
    const stage = document.getElementById('display-zone');
    stage.style.opacity = '0';
    setTimeout(() => {
        stage.innerHTML = UI[id] || `<h1>Offline</h1>`;
        stage.style.opacity = '1';
    }, 150);
}

function runScan() {
    const bar = document.getElementById('scan-bar');
    const log = document.getElementById('log');
    bar.style.display = 'block';
    bar.style.animation = 'scanAnim 2.5s infinite linear';
    log.innerHTML = "> ACCESSING_OPTIC_DRIVERS...<br>> ANALYZING_PATTERNS...<br>> PATTERN_MATCH_FOUND_88.4%";
}

setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString('en-GB');
}, 1000);

const style = document.createElement('style');
style.innerHTML = `
    @keyframes scanAnim { 0% { top:0; } 100% { top:100%; } }
    @keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
`;
document.head.appendChild(style);

window.onload = () => load('dash');
