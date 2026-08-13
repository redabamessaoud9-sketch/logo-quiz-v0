/* --- BASE DE DONNÉES DES LOGOS (Auto, Retro Gaming, Sports) --- */
const logoDatabase = [
    // Auto
    { logo: "https://logo.clearbit.com/audi.com", answer: "Audi", options: ["BMW", "Audi", "Mercedes", "Porsche"], category: "Auto", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/ford.com", answer: "Ford", options: ["Chevrolet", "Toyota", "Ford", "Honda"], category: "Auto", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/toyota.com", answer: "Toyota", options: ["Nissan", "Toyota", "Mazda", "Subaru"], category: "Auto", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/ferrari.com", answer: "Ferrari", options: ["Lamborghini", "Porsche", "Ferrari", "Maserati"], category: "Auto", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/lamborghini.com", answer: "Lamborghini", options: ["Ferrari", "Bugatti", "Lamborghini", "McLaren"], category: "Auto", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/porsche.com", answer: "Porsche", options: ["Porsche", "Audi", "BMW", "Bentley"], category: "Auto", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/nissan.com", answer: "Nissan", options: ["Honda", "Toyota", "Nissan", "Mitsubishi"], category: "Auto", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/volkswagen.com", answer: "Volkswagen", options: ["Volvo", "Volkswagen", "BMW", "Opel"], category: "Auto", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/chevrolet.com", answer: "Chevrolet", options: ["Ford", "Dodge", "Chevrolet", "GMC"], category: "Auto", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/subaru.com", answer: "Subaru", options: ["Subaru", "Mitsubishi", "Suzuki", "Mazda"], category: "Auto", difficulty: "hard" },
    { logo: "https://logo.clearbit.com/mazda.com", answer: "Mazda", options: ["Nissan", "Lexus", "Infiniti", "Mazda"], category: "Auto", difficulty: "hard" },
    { logo: "https://logo.clearbit.com/bentley.com", answer: "Bentley", options: ["Aston Martin", "Bentley", "Rolls-Royce", "Jaguar"], category: "Auto", difficulty: "hard" },
    
    // Retro Gaming / Tech
    { logo: "https://logo.clearbit.com/nintendo.com", answer: "Nintendo", options: ["Sega", "Nintendo", "Atari", "Sony"], category: "Gaming", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/sega.com", answer: "Sega", options: ["Capcom", "SNK", "Sega", "Konami"], category: "Gaming", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/playstation.com", answer: "PlayStation", options: ["Xbox", "Nintendo", "PlayStation", "Sega"], category: "Gaming", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/xbox.com", answer: "Xbox", options: ["PlayStation", "Xbox", "Alienware", "Razer"], category: "Gaming", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/atari.com", answer: "Atari", options: ["Commodore", "Amiga", "Atari", "Coleco"], category: "Gaming", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/capcom.com", answer: "Capcom", options: ["Konami", "Square Enix", "Capcom", "Namco"], category: "Gaming", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/konami.com", answer: "Konami", options: ["Sega", "Konami", "Taito", "SNK"], category: "Gaming", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/snk-corp.co.jp", answer: "SNK", options: ["SNK", "Capcom", "Arc System Works", "Midway"], category: "Gaming", difficulty: "hard" },
    { logo: "https://logo.clearbit.com/ea.com", answer: "Electronic Arts", options: ["Ubisoft", "Activision", "Electronic Arts", "Take-Two"], category: "Gaming", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/ubisoft.com", answer: "Ubisoft", options: ["Bethesda", "Ubisoft", "Square Enix", "Valve"], category: "Gaming", difficulty: "normal" },

    // Sports (General Brands)
    { logo: "https://logo.clearbit.com/nike.com", answer: "Nike", options: ["Adidas", "Puma", "Nike", "Reebok"], category: "Sports", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/adidas.com", answer: "Adidas", options: ["Nike", "Under Armour", "Asics", "Adidas"], category: "Sports", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/puma.com", answer: "Puma", options: ["Puma", "Reebok", "Fila", "Umbro"], category: "Sports", difficulty: "easy" },
    { logo: "https://logo.clearbit.com/reebok.com", answer: "Reebok", options: ["Under Armour", "Reebok", "Champion", "New Balance"], category: "Sports", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/underarmour.com", answer: "Under Armour", options: ["Nike", "Asics", "Under Armour", "Puma"], category: "Sports", difficulty: "normal" },
    { logo: "https://logo.clearbit.com/asics.com", answer: "Asics", options: ["Mizuno", "Asics", "Brooks", "Saucony"], category: "Sports", difficulty: "hard" },
    { logo: "https://logo.clearbit.com/fila.com", answer: "Fila", options: ["Kappa", "Fila", "Ellesse", "Lotto"], category: "Sports", difficulty: "hard" },
    { logo: "https://logo.clearbit.com/umbro.com", answer: "Umbro", options: ["Umbro", "Macron", "Joma", "Hummel"], category: "Sports", difficulty: "hard" }
];

/* --- STATE ET LOCALSTORAGE --- */
const defaultState = {
    name: "mohamed reda",
    xp: 850,
    level: 12,
    coins: 250,
    lives: 3,
    score: 0,
    highScore: 2450,
    foundLogos: 132,
    gamesPlayed: 28,
    streak: 7,
    unlockedLevels: [1], // 1=Facile, 2=Normal, 3=Difficile, 4=Expert
    dailyClaimed: false,
    badges: { beginner: false, connoisseur: true, expert: true, legend: false },
    settings: { sound: true, music: true, dark: true, vib: true }
};

let userState = {};
let currentGame = { questions: [], currentIndex: 0, correctAnswers: 0, tempScore: 0, tempXp: 0 };

function loadProgress() {
    try {
        const saved = localStorage.getItem('logoQuizState');
        userState = saved ? JSON.parse(saved) : { ...defaultState };
    } catch (e) {
        userState = { ...defaultState };
    }
    updateUI();
}

function saveProgress() {
    try {
        localStorage.setItem('logoQuizState', JSON.stringify(userState));
    } catch (e) { console.warn("LocalStorage indisponible"); }
    updateUI();
}

/* --- NAVIGATION --- */
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Update bottom nav visual
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const btnMap = { 'home-screen': 0, 'levels-screen': 2, 'leaderboard-screen': 3, 'profile-screen': 4 };
    if(btnMap[screenId] !== undefined) {
        document.querySelectorAll('.nav-btn')[btnMap[screenId]].classList.add('active');
    }

    if(screenId === 'levels-screen') renderLevels();
    if(screenId === 'rewards-screen') renderRewards();
    if(screenId === 'leaderboard-screen') renderLeaderboard();
}

/* --- LOGIQUE DE JEU --- */
function startGame(difficulty = 'easy') {
    userState.lives = 3;
    userState.gamesPlayed++;
    
    // Filtrer par difficulté ou prendre au hasard
    let pool = logoDatabase.sort(() => 0.5 - Math.random()).slice(0, 10); // 10 questions par partie
    
    currentGame = {
        questions: pool,
        currentIndex: 0,
        correctAnswers: 0,
        tempScore: 0,
        tempXp: 0
    };
    
    showScreen('game-screen');
    loadQuestion();
    
    // Active le bouton Jouer de la nav
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[1].classList.add('active');
}

function loadQuestion() {
    if(userState.lives <= 0 || currentGame.currentIndex >= currentGame.questions.length) {
        finishGame();
        return;
    }

    const q = currentGame.questions[currentGame.currentIndex];
    document.getElementById('current-q').innerText = currentGame.currentIndex + 1;
    document.getElementById('total-q').innerText = currentGame.questions.length;
    document.getElementById('q-progress').style.width = `${((currentGame.currentIndex + 1) / currentGame.questions.length) * 100}%`;
    
    document.getElementById('logo-image').src = q.logo;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Shuffle options
    let opts = [...q.options].sort(() => 0.5 - Math.random());
    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(btn, opt, q.answer);
        optionsContainer.appendChild(btn);
    });

    updateGameHeader();
}

function checkAnswer(btn, selected, correct) {
    // Désactiver les boutons
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    
    if (selected === correct) {
        btn.classList.add('correct');
        currentGame.correctAnswers++;
        currentGame.tempScore += 100;
        currentGame.tempXp += 25;
        userState.foundLogos++;
        checkAchievements();
    } else {
        btn.classList.add('wrong');
        userState.lives--;
        // Montrer la bonne réponse
        document.querySelectorAll('.option-btn').forEach(b => {
            if(b.innerText === correct) b.classList.add('correct');
        });
    }

    setTimeout(() => {
        nextQuestion();
    }, 1000);
}

function nextQuestion() {
    currentGame.currentIndex++;
    loadQuestion();
}

function useHint() {
    if(userState.coins >= 50) {
        userState.coins -= 50;
        updateGameHeader();
        const q = currentGame.questions[currentGame.currentIndex];
        const btns = document.querySelectorAll('.option-btn');
        let hidden = 0;
        btns.forEach(b => {
            if(b.innerText !== q.answer && hidden < 2 && !b.disabled) {
                b.style.visibility = 'hidden';
                hidden++;
            }
        });
    }
}

function skipQuestion() {
    nextQuestion();
}

function finishGame() {
    userState.score += currentGame.tempScore;
    if(userState.score > userState.highScore) userState.highScore = userState.score;
    updateXP(currentGame.tempXp);
    saveProgress();

    document.getElementById('end-score').innerText = currentGame.tempScore;
    document.getElementById('end-correct').innerText = `${currentGame.correctAnswers} / ${currentGame.questions.length}`;
    document.getElementById('end-xp').innerText = `+${currentGame.tempXp} XP`;

    // Unlock logic simple
    if(currentGame.correctAnswers >= 8 && !userState.unlockedLevels.includes(2)) unlockLevel(2);

    showScreen('end-screen');
}

/* --- SYSTÈME D'EXPÉRIENCE --- */
function updateXP(amount) {
    userState.xp += amount;
    let nextLvlXP = userState.level * 150 + 500;
    
    while(userState.xp >= nextLvlXP) {
        userState.xp -= nextLvlXP;
        userState.level++;
        nextLvlXP = userState.level * 150 + 500;
    }
}

function updateGameHeader() {
    document.getElementById('game-lives').innerText = userState.lives;
    document.getElementById('game-score').innerText = userState.score + currentGame.tempScore;
    document.getElementById('game-coins').innerText = userState.coins;
}

/* --- INTERFACES & MISE A JOUR UI --- */
function updateUI() {
    let nextLvlXP = userState.level * 150 + 500;
    let xpPercent = (userState.xp / nextLvlXP) * 100;

    // Home
    document.getElementById('home-name').innerText = userState.name;
    document.getElementById('home-level').innerText = userState.level;
    document.getElementById('home-xp').innerText = userState.xp;
    document.getElementById('home-next-xp').innerText = nextLvlXP;
    document.getElementById('home-streak').innerText = userState.streak;
    document.getElementById('home-xp-bar').style.width = `${xpPercent}%`;
    document.getElementById('reward-xp-text').innerText = `${userState.xp} / ${nextLvlXP} XP`;

    // Profile
    document.getElementById('prof-name').innerText = userState.name;
    document.getElementById('prof-level').innerText = userState.level;
    document.getElementById('prof-xp').innerText = userState.xp;
    document.getElementById('prof-next-xp').innerText = nextLvlXP;
    document.getElementById('prof-xp-bar').style.width = `${xpPercent}%`;
    
    document.getElementById('prof-best-score').innerText = userState.highScore;
    document.getElementById('prof-logos').innerText = userState.foundLogos;
    document.getElementById('prof-streak').innerText = userState.streak;
    document.getElementById('prof-games').innerText = userState.gamesPlayed;
}

function renderLevels() {
    const container = document.getElementById('levels-container');
    container.innerHTML = '';
    const levelsData = [
        { id: 1, name: "FACILE", logos: 10, req: 0 },
        { id: 2, name: "NORMAL", logos: 20, req: 1 },
        { id: 3, name: "DIFFICILE", logos: 30, req: 2 },
        { id: 4, name: "EXPERT", logos: 40, req: 3 }
    ];

    levelsData.forEach(lvl => {
        const isUnlocked = userState.unlockedLevels.includes(lvl.id);
        const html = `
            <div class="level-card ${isUnlocked ? '' : 'locked'}">
                <div class="level-info">
                    <h3>Niveau ${lvl.id} - ${lvl.name}</h3>
                    <p>${lvl.logos} logos</p>
                </div>
                <div class="level-status">
                    ${isUnlocked ? '<span class="color-gold">⭐⭐⭐</span>' : '🔒'}
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function unlockLevel(lvlId) {
    if(!userState.unlockedLevels.includes(lvlId)) {
        userState.unlockedLevels.push(lvlId);
    }
}

/* --- RÉCOMPENSES ET BADGES --- */
function renderRewards() {
    // Quotidiennes
    const grid = document.getElementById('daily-grid');
    grid.innerHTML = '';
    const rewards = [50, 75, 100, 150, 200, 250, 500];
    
    for(let i=0; i<7; i++) {
        let statusClass = '';
        if(i < userState.streak % 7) statusClass = 'claimed';
        else if (i === userState.streak % 7 && !userState.dailyClaimed) statusClass = 'today';
        
        grid.innerHTML += `
            <div class="day-box ${statusClass}">
                <div>Jour ${i+1}</div>
                <div class="color-gold mt-2">${rewards[i]} XP</div>
            </div>
        `;
    }

    document.getElementById('claim-reward-btn').disabled = userState.dailyClaimed;

    // Badges
    const badgesContainer = document.getElementById('badges-container');
    badgesContainer.innerHTML = '<h3>Badges</h3>';
    const badgesDef = [
        { id: 'beginner', name: 'Débutant', desc: 'Joue 10 parties', max: 10, val: userState.gamesPlayed, icon: '🥉' },
        { id: 'connoisseur', name: 'Connaisseur', desc: 'Trouve 50 logos', max: 50, val: userState.foundLogos, icon: '🥈' },
        { id: 'expert', name: 'Expert', desc: 'Trouve 100 logos', max: 100, val: userState.foundLogos, icon: '🥇' },
        { id: 'legend', name: 'Légende', desc: 'Trouve 200 logos', max: 200, val: userState.foundLogos, icon: '👑' }
    ];

    badgesDef.forEach(b => {
        let percent = Math.min(100, (b.val / b.max) * 100);
        let unlocked = b.val >= b.max;
        badgesContainer.innerHTML += `
            <div class="badge-item">
                <div class="badge-icon ${unlocked ? '' : 'locked'}">${b.icon}</div>
                <div class="badge-info">
                    <h4>${b.name} ${unlocked ? '✅' : ''}</h4>
                    <p class="text-muted" style="font-size:0.8rem">${b.desc}</p>
                    <div class="xp-bar-container">
                        <div class="xp-bar" style="width: ${percent}%"></div>
                    </div>
                    <div style="font-size:0.7rem; text-align:right;">${b.val} / ${b.max}</div>
                </div>
            </div>
        `;
    });
}

function claimDailyReward() {
    if(!userState.dailyClaimed) {
        const rewards = [50, 75, 100, 150, 200, 250, 500];
        let amount = rewards[userState.streak % 7];
        updateXP(amount);
        userState.dailyClaimed = true;
        userState.streak++;
        saveProgress();
        renderRewards();
    }
}

function checkAchievements() {
    if(userState.gamesPlayed >= 10) userState.badges.beginner = true;
    if(userState.foundLogos >= 50) userState.badges.connoisseur = true;
    if(userState.foundLogos >= 100) userState.badges.expert = true;
    if(userState.foundLogos >= 200) userState.badges.legend = true;
}

/* --- CLASSEMENT --- */
function renderLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    const bots = [
        { name: "PlayerOne", score: 9850 },
        { name: "QuizMaster", score: 8740 },
        { name: "LogoKing", score: 7620 },
        { name: userState.name, score: userState.highScore },
        { name: "Player5", score: 5980 }
    ].sort((a, b) => b.score - a.score);

    container.innerHTML = '';
    bots.forEach((p, index) => {
        let rankStr = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        container.innerHTML += `
            <div class="leaderboard-item">
                <div class="rank">${rankStr}</div>
                <div class="lb-name">${p.name}</div>
                <div class="lb-score">${p.score} XP</div>
            </div>
        `;
    });
}

/* --- PARAMÈTRES --- */
function resetProgress() {
    if(confirm("Voulez-vous vraiment réinitialiser toute votre progression ?")) {
        localStorage.removeItem('logoQuizState');
        loadProgress();
        showScreen('home-screen');
    }
}

// Initialisation
window.onload = () => {
    loadProgress();
    showScreen('home-screen');
};
