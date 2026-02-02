const cookBtn = document.getElementById('cook-btn');
const nextBtn = document.getElementById('next-btn');
const startScreen = document.getElementById('start-screen');
const terminal = document.getElementById('terminal');
const finalScreen = document.getElementById('final-screen');
const ticket1 = document.getElementById('ticket-1');
const ticket2 = document.getElementById('ticket-2');

cookBtn.addEventListener('click', function() {
    startScreen.classList.add('hidden');
    terminal.classList.remove('hidden');

    const logs = [
        "> Booting Chef_OS...",
        "> Loading 'Sausage_Dog_Module'...",
        "> Pre-heating oven to 400°F...",
        "> Optimizing teammate logic...",
        "> Deployment Status: 100% Efficient",
        "> Level 1: COMPLETED."
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < logs.length) {
            const line = document.createElement('div');
            line.textContent = logs[i];
            line.style.marginBottom = "4px";
            terminal.appendChild(line);
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                terminal.classList.add('hidden');
                finalScreen.classList.remove('hidden');
            }, 800);
        }
    }, 600);
});

// Logic to show the second ticket
nextBtn.addEventListener('click', function() {
    ticket1.classList.add('hidden');
    ticket2.classList.remove('hidden');
});