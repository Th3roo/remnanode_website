document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal');

    function addToTerminal(html) {
        const div = document.createElement('div');
        div.innerHTML = html;
        terminal.appendChild(div);
        terminal.scrollTop = terminal.scrollHeight;
    }

    const neofetchOutput = `<div style="display:flex; gap: 20px; margin-top: 20px; margin-bottom: 20px;">
        <div class="arch-logo" style="white-space: pre;">
   <span class="arch-blue">      /\\</span>
   <span class="arch-blue">     /  \\</span>
   <span class="arch-blue">    /    \\</span>
   <span class="arch-blue">   /      \\</span>
   <span class="arch-blue">  /   ,,   \\</span>
   <span class="arch-blue"> /   |  |  -\\</span>
   <span class="arch-blue">/_-''    ''-_\\</span>
        </div>
        <div class="info">
            <span class="arch-blue">guest@void</span><br>
            -----------------<br>
            <span class="arch-blue">OS</span>: Arch Linux (Foxgirl Edition)<br>
            <span class="arch-blue">Host</span>: Unknown<br>
            <span class="arch-blue">Kernel</span>: 6.6.6-arch1-1<br>
            <span class="arch-blue">Uptime</span>: Forever<br>
            <span class="arch-blue">Shell</span>: zsh 5.9<br>
            <span class="arch-blue">Terminal</span>: kitty<br>
            <span class="arch-blue">Vibe</span>: Soviet Nostalgia<br>
        </div>
    </div>`;

    const foxgirlContent = `
    <div style="margin-top: 20px;">
        <p>A friendly fox girl is here to guide you through the gloomy corridors of the Soviet backrooms.</p>
        <div style="display: flex; gap: 20px; margin-top: 10px;">
            <img src="foxgirl1.webp" style="max-width: 200px; border: 2px solid var(--red); border-radius: 10px;">
            <img src="foxgirl2.webp" style="max-width: 200px; border: 2px solid var(--red); border-radius: 10px;">
        </div>
        <p style="margin-top: 10px;">Is it a trap or a sign of hope? Beware of their mischievous smiles.</p>
    </div>
    `;

    const bootLines = [
        'Starting system...',
        'Loading kernel modules...',
        'Mounting filesystems...',
        'Checking integrity...',
        'Loading Foxgirl assets...',
        'Welcome to Arch Linux!'
    ];

    let delay = 500;

    // Boot sequence
    bootLines.forEach(line => {
        setTimeout(() => {
            addToTerminal(`<div class="output" style="color:var(--green)">[ OK ] ${line}</div>`);
        }, delay);
        delay += Math.random() * 300 + 200; // Random delay for realism
    });

    // Neofetch
    setTimeout(() => {
        const prompt = `<div class="line">
            <span class="prompt">guest@void</span>
            <span class="path">[~]</span>
            <span class="command">$ neofetch</span>
        </div>`;
        addToTerminal(prompt);
        addToTerminal(neofetchOutput);
    }, delay + 500);

    // Foxgirl content
    setTimeout(() => {
        const prompt = `<div class="line">
            <span class="prompt">guest@void</span>
            <span class="path">[~]</span>
            <span class="command">$ cat ~/foxgirls/info.txt</span>
        </div>`;
        addToTerminal(prompt);
        addToTerminal(foxgirlContent);
    }, delay + 1500);

    // Final static prompt
    setTimeout(() => {
        const prompt = `<div class="line">
            <span class="prompt">guest@void</span>
            <span class="path">[~]</span>
            <span class="command">$ <span class="cursor">&nbsp;</span></span>
        </div>`;
        addToTerminal(prompt);
    }, delay + 2500);

});
