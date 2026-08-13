/* ================= BASE DE DONNÉES LOGOS (100 LOGOS) ================= */
// Focus spécifique : Automobiles, Sport, Retro Gaming (selon historique et consignes), Tech, Marques...
const _D = [
    // --- SPORT & VÊTEMENTS ---
    ["Nike", "https://logo.clearbit.com/nike.com", ["Adidas", "Puma", "Nike", "Reebok"], "Sport", 1],
    ["Adidas", "https://logo.clearbit.com/adidas.com", ["Nike", "Under Armour", "Adidas", "Asics"], "Sport", 1],
    ["Puma", "https://logo.clearbit.com/puma.com", ["Puma", "Reebok", "Fila", "Umbro"], "Sport", 1],
    ["Reebok", "https://logo.clearbit.com/reebok.com", ["Under Armour", "Reebok", "Champion", "New Balance"], "Sport", 2],
    ["Under Armour", "https://logo.clearbit.com/underarmour.com", ["Nike", "Asics", "Under Armour", "Puma"], "Sport", 2],
    ["Asics", "https://logo.clearbit.com/asics.com", ["Mizuno", "Asics", "Brooks", "Saucony"], "Sport", 3],
    ["Fila", "https://logo.clearbit.com/fila.com", ["Kappa", "Fila", "Ellesse", "Lotto"], "Sport", 3],
    ["Umbro", "https://logo.clearbit.com/umbro.com", ["Umbro", "Macron", "Joma", "Hummel"], "Sport", 3],
    ["New Balance", "https://logo.clearbit.com/newbalance.com", ["Skechers", "Vans", "New Balance", "Converse"], "Sport", 2],
    ["Champion", "https://logo.clearbit.com/champion.com", ["Supreme", "Champion", "Stussy", "Obey"], "Vêtements", 2],
    ["Lacoste", "https://logo.clearbit.com/lacoste.com", ["Ralph Lauren", "Tommy Hilfiger", "Lacoste", "Hugo Boss"], "Vêtements", 1],
    ["Levi's", "https://logo.clearbit.com/levi.com", ["Wrangler", "Lee", "Diesel", "Levi's"], "Vêtements", 1],
    ["Vans", "https://logo.clearbit.com/vans.com", ["Converse", "Vans", "DC Shoes", "Element"], "Vêtements", 1],
    ["Converse", "https://logo.clearbit.com/converse.com", ["Vans", "Nike", "Converse", "Puma"], "Vêtements", 1],
    ["The North Face", "https://logo.clearbit.com/thenorthface.com", ["Patagonia", "Columbia", "The North Face", "Salomon"], "Vêtements", 2],
    ["Rolex", "https://logo.clearbit.com/rolex.com", ["Omega", "Tag Heuer", "Rolex", "Breitling"], "Vêtements", 2],
    
    // --- AUTOMOBILES ---
    ["Audi", "https://logo.clearbit.com/audi.com", ["BMW", "Audi", "Mercedes", "Porsche"], "Automobiles", 1],
    ["Ford", "https://logo.clearbit.com/ford.com", ["Chevrolet", "Toyota", "Ford", "Honda"], "Automobiles", 1],
    ["Toyota", "https://logo.clearbit.com/toyota.com", ["Nissan", "Toyota", "Mazda", "Subaru"], "Automobiles", 1],
    ["Ferrari", "https://logo.clearbit.com/ferrari.com", ["Lamborghini", "Porsche", "Ferrari", "Maserati"], "Automobiles", 2],
    ["Lamborghini", "https://logo.clearbit.com/lamborghini.com", ["Ferrari", "Bugatti", "Lamborghini", "McLaren"], "Automobiles", 2],
    ["Porsche", "https://logo.clearbit.com/porsche.com", ["Porsche", "Audi", "BMW", "Bentley"], "Automobiles", 2],
    ["Nissan", "https://logo.clearbit.com/nissan.com", ["Honda", "Toyota", "Nissan", "Mitsubishi"], "Automobiles", 1],
    ["Volkswagen", "https://logo.clearbit.com/volkswagen.com", ["Volvo", "Volkswagen", "BMW", "Opel"], "Automobiles", 1],
    ["Chevrolet", "https://logo.clearbit.com/chevrolet.com", ["Ford", "Dodge", "Chevrolet", "GMC"], "Automobiles", 2],
    ["Subaru", "https://logo.clearbit.com/subaru.com", ["Subaru", "Mitsubishi", "Suzuki", "Mazda"], "Automobiles", 3],
    ["Mazda", "https://logo.clearbit.com/mazda.com", ["Nissan", "Lexus", "Infiniti", "Mazda"], "Automobiles", 3],
    ["Bentley", "https://logo.clearbit.com/bentley.com", ["Aston Martin", "Bentley", "Rolls-Royce", "Jaguar"], "Automobiles", 3],
    ["Mercedes-Benz", "https://logo.clearbit.com/mercedes-benz.com", ["BMW", "Audi", "Mercedes-Benz", "Lexus"], "Automobiles", 1],
    ["BMW", "https://logo.clearbit.com/bmw.com", ["Mercedes", "Audi", "BMW", "Porsche"], "Automobiles", 1],
    ["Honda", "https://logo.clearbit.com/honda.com", ["Hyundai", "Suzuki", "Toyota", "Honda"], "Automobiles", 1],
    ["Hyundai", "https://logo.clearbit.com/hyundai.com", ["Honda", "Kia", "Hyundai", "Nissan"], "Automobiles", 2],
    ["Jaguar", "https://logo.clearbit.com/jaguar.com", ["Land Rover", "Jaguar", "Aston Martin", "Lotus"], "Automobiles", 3],
    ["Volvo", "https://logo.clearbit.com/volvo.com", ["Saab", "Scania", "Volvo", "Polestar"], "Automobiles", 2],
    ["Tesla", "https://logo.clearbit.com/tesla.com", ["Rivian", "Lucid", "Nio", "Tesla"], "Automobiles", 1],
    ["Bugatti", "https://logo.clearbit.com/bugatti.com", ["Pagani", "Koenigsegg", "Bugatti", "McLaren"], "Automobiles", 4],
    
    // --- GAMING (Retro & Moderne) ---
    ["Nintendo", "https://logo.clearbit.com/nintendo.com", ["Sega", "Nintendo", "Atari", "Sony"], "Gaming", 1],
    ["Sega", "https://logo.clearbit.com/sega.com", ["Capcom", "SNK", "Sega", "Konami"], "Gaming", 1],
    ["PlayStation", "https://logo.clearbit.com/playstation.com", ["Xbox", "Nintendo", "PlayStation", "Sega"], "Gaming", 1],
    ["Xbox", "https://logo.clearbit.com/xbox.com", ["PlayStation", "Xbox", "Alienware", "Razer"], "Gaming", 1],
    ["Atari", "https://logo.clearbit.com/atari.com", ["Commodore", "Amiga", "Atari", "Coleco"], "Gaming", 2],
    ["Capcom", "https://logo.clearbit.com/capcom.com", ["Konami", "Square Enix", "Capcom", "Namco"], "Gaming", 2],
    ["Konami", "https://logo.clearbit.com/konami.com", ["Sega", "Konami", "Taito", "SNK"], "Gaming", 2],
    ["SNK", "https://logo.clearbit.com/snk-corp.co.jp", ["SNK", "Capcom", "Arc System Works", "Midway"], "Gaming", 4],
    ["Electronic Arts", "https://logo.clearbit.com/ea.com", ["Ubisoft", "Activision", "Electronic Arts", "Take-Two"], "Gaming", 2],
    ["Ubisoft", "https://logo.clearbit.com/ubisoft.com", ["Bethesda", "Ubisoft", "Square Enix", "Valve"], "Gaming", 2],
    ["Blizzard", "https://logo.clearbit.com/blizzard.com", ["Valve", "Riot Games", "Blizzard", "Epic Games"], "Gaming", 2],
    ["Epic Games", "https://logo.clearbit.com/epicgames.com", ["Unity", "Unreal", "Epic Games", "Crytek"], "Gaming", 2],
    ["Bandai Namco", "https://logo.clearbit.com/bandainamcoent.com", ["Koei Tecmo", "Square Enix", "Sega", "Bandai Namco"], "Gaming", 3],
    ["Square Enix", "https://logo.clearbit.com/square-enix.com", ["Capcom", "Square Enix", "Atlus", "Level-5"], "Gaming", 3],
    ["Bethesda", "https://logo.clearbit.com/bethesdastudios.com", ["BioWare", "Obsidian", "Bethesda", "CD Projekt"], "Gaming", 3],
    ["Razer", "https://logo.clearbit.com/razer.com", ["Logitech", "Corsair", "SteelSeries", "Razer"], "Gaming", 2],
    ["Logitech", "https://logo.clearbit.com/logitech.com", ["Razer", "Logitech", "Roccat", "HyperX"], "Gaming", 1],
    ["Twitch", "https://logo.clearbit.com/twitch.tv", ["YouTube Gaming", "Mixer", "Twitch", "Discord"], "Gaming", 1],
    ["Discord", "https://logo.clearbit.com/discord.com", ["Skype", "TeamSpeak", "Slack", "Discord"], "Gaming", 1],
    ["Steam", "https://logo.clearbit.com/steampowered.com", ["Epic Games Store", "Origin", "Steam", "GOG"], "Gaming", 1],

    // --- TECHNOLOGIE ---
    ["Apple", "https://logo.clearbit.com/apple.com", ["Microsoft", "Apple", "Google", "Samsung"], "Technologie", 1],
    ["Samsung", "https://logo.clearbit.com/samsung.com", ["Sony", "LG", "Samsung", "Panasonic"], "Technologie", 1],
    ["Microsoft", "https://logo.clearbit.com/microsoft.com", ["IBM", "Intel", "Microsoft", "Dell"], "Technologie", 1],
    ["Google", "https://logo.clearbit.com/google.com", ["Yahoo", "Bing", "Google", "Baidu"], "Technologie", 1],
    ["Intel", "https://logo.clearbit.com/intel.com", ["AMD", "Nvidia", "Intel", "Qualcomm"], "Technologie", 2],
    ["AMD", "https://logo.clearbit.com/amd.com", ["Intel", "Nvidia", "ARM", "AMD"], "Technologie", 3],
    ["Nvidia", "https://logo.clearbit.com/nvidia.com", ["AMD", "Intel", "Nvidia", "Asus"], "Technologie", 2],
    ["Sony", "https://logo.clearbit.com/sony.com", ["Panasonic", "Toshiba", "Sony", "Sharp"], "Technologie", 1],
    ["LG", "https://logo.clearbit.com/lg.com", ["Samsung", "LG", "Sony", "Philips"], "Technologie", 1],
    ["HP", "https://logo.clearbit.com/hp.com", ["Dell", "Lenovo", "Acer", "HP"], "Technologie", 1],
    ["Dell", "https://logo.clearbit.com/dell.com", ["HP", "Lenovo", "Asus", "Dell"], "Technologie", 2],
    ["Lenovo", "https://logo.clearbit.com/lenovo.com", ["Acer", "Asus", "Lenovo", "MSI"], "Technologie", 2],
    ["Asus", "https://logo.clearbit.com/asus.com", ["Acer", "MSI", "Gigabyte", "Asus"], "Technologie", 3],
    ["IBM", "https://logo.clearbit.com/ibm.com", ["Oracle", "Cisco", "IBM", "SAP"], "Technologie", 3],
    ["Cisco", "https://logo.clearbit.com/cisco.com", ["Juniper", "Cisco", "Huawei", "Ericsson"], "Technologie", 4],

    // --- RÉSEAUX SOCIAUX & APPS ---
    ["Facebook", "https://logo.clearbit.com/facebook.com", ["Twitter", "Facebook", "LinkedIn", "Instagram"], "Réseaux sociaux", 1],
    ["Instagram", "https://logo.clearbit.com/instagram.com", ["Snapchat", "TikTok", "Instagram", "Pinterest"], "Réseaux sociaux", 1],
    ["Twitter", "https://logo.clearbit.com/twitter.com", ["Facebook", "Reddit", "Tumblr", "Twitter"], "Réseaux sociaux", 1],
    ["LinkedIn", "https://logo.clearbit.com/linkedin.com", ["Viadeo", "Xing", "LinkedIn", "Glassdoor"], "Réseaux sociaux", 2],
    ["Snapchat", "https://logo.clearbit.com/snapchat.com", ["Instagram", "TikTok", "WhatsApp", "Snapchat"], "Réseaux sociaux", 1],
    ["TikTok", "https://logo.clearbit.com/tiktok.com", ["Triller", "Dubsmash", "TikTok", "Vine"], "Réseaux sociaux", 1],
    ["Pinterest", "https://logo.clearbit.com/pinterest.com", ["Tumblr", "Flickr", "Pinterest", "WeHeartIt"], "Réseaux sociaux", 2],
    ["Reddit", "https://logo.clearbit.com/reddit.com", ["Digg", "4chan", "Reddit", "Quora"], "Réseaux sociaux", 2],
    ["WhatsApp", "https://logo.clearbit.com/whatsapp.com", ["Telegram", "Signal", "Viber", "WhatsApp"], "Apps", 1],
    ["Telegram", "https://logo.clearbit.com/telegram.org", ["WhatsApp", "Telegram", "Line", "WeChat"], "Apps", 2],
    ["Spotify", "https://logo.clearbit.com/spotify.com", ["Apple Music", "Deezer", "Spotify", "Tidal"], "Apps", 1],
    ["Netflix", "https://logo.clearbit.com/netflix.com", ["Hulu", "Disney+", "Amazon Prime", "Netflix"], "Apps", 1],
    ["Uber", "https://logo.clearbit.com/uber.com", ["Lyft", "Bolt", "Uber", "Grab"], "Apps", 1],
    ["Airbnb", "https://logo.clearbit.com/airbnb.com", ["Booking", "Expedia", "Airbnb", "Trivago"], "Apps", 1],

    // --- RESTAURANTS & BOISSONS ---
    ["McDonald's", "https://logo.clearbit.com/mcdonalds.com", ["Burger King", "KFC", "McDonald's", "Wendy's"], "Restaurants", 1],
    ["Burger King", "https://logo.clearbit.com/bk.com", ["McDonald's", "Five Guys", "Burger King", "Shake Shack"], "Restaurants", 1],
    ["KFC", "https://logo.clearbit.com/kfc.com", ["Popeyes", "Chick-fil-A", "KFC", "Church's"], "Restaurants", 1],
    ["Subway", "https://logo.clearbit.com/subway.com", ["Quiznos", "Jimmy John's", "Subway", "Panera"], "Restaurants", 1],
    ["Starbucks", "https://logo.clearbit.com/starbucks.com", ["Costa", "Dunkin'", "Tim Hortons", "Starbucks"], "Restaurants", 1],
    ["Domino's", "https://logo.clearbit.com/dominos.com", ["Pizza Hut", "Papa John's", "Domino's", "Little Caesars"], "Restaurants", 2],
    ["Pizza Hut", "https://logo.clearbit.com/pizzahut.com", ["Domino's", "Sbarro", "Pizza Hut", "California Pizza"], "Restaurants", 2],
    ["Coca-Cola", "https://logo.clearbit.com/coca-cola.com", ["Pepsi", "Dr Pepper", "Coca-Cola", "Sprite"], "Boissons", 1],
    ["Pepsi", "https://logo.clearbit.com/pepsi.com", ["Coca-Cola", "7UP", "Fanta", "Pepsi"], "Boissons", 1],
    ["Red Bull", "https://logo.clearbit.com/redbull.com", ["Monster", "Rockstar", "Bang", "Red Bull"], "Boissons", 1],
    ["Monster", "https://logo.clearbit.com/monsterenergy.com", ["Red Bull", "Rockstar", "NOS", "Monster"], "Boissons", 2],
    ["Gatorade", "https://logo.clearbit.com/gatorade.com", ["Powerade", "BodyArmor", "VitaminWater", "Gatorade"], "Boissons", 2],

    // --- ENTREPRISES ---
    ["Amazon", "https://logo.clearbit.com/amazon.com", ["eBay", "Alibaba", "Walmart", "Amazon"], "Entreprises", 1],
    ["Walmart", "https://logo.clearbit.com/walmart.com", ["Target", "Costco", "Carrefour", "Walmart"], "Entreprises", 2],
    ["IKEA", "https://logo.clearbit.com/ikea.com", ["Habitat", "Conforama", "IKEA", "Wayfair"], "Entreprises", 1],
    ["FedEx", "https://logo.clearbit.com/fedex.com", ["UPS", "DHL", "USPS", "FedEx"], "Entreprises", 2],
    ["Visa", "https://logo.clearbit.com/visa.com", ["Mastercard", "American Express", "Discover", "Visa"], "Entreprises", 1]
];

// Formatage de la BDD
const logoDatabase = _D.map((item, index) => ({
    id: index + 1, name: item[0], image: item[1], options: item[2],
    category: item[3], difficulty: item[4] === 1 ? 'easy' : item[4] === 2 ? 'normal' : item[4] === 3 ? 'hard' : 'expert',
    level: item[4]
}));

/* ================= ÉTAT DE L'APPLICATION (STATE) ================= */
const defaultState = {
    name: "mohamed reda",
    xp: 850,
    level: 12,
    coins: 250,
    highScore: 2450,
    foundLogos: 132,
    gamesPlayed: 28,
    streak: 7,
    lastClaimDate: null,
    unlockedLevels: [1], // 1=Facile, 2=Normal, 3=Difficile, 4=Expert
    badges: { beginner: false, connoisseur: true, expert: true, legend: false },
    stats: { correctAnswers: 0, wrongAnswers: 0 },
    settings: { sound: true, music: true, dark: true, vib: true }
};

let userState = {};
let currentGame = {
    questions: [], currentIndex: 0, lives: 3, 
    correctCount: 0, tempScore: 0, tempXp: 0, tempCoins: 0,
    streak: 0, startTime: 0, difficultyLevel: 1
};

/* ================= INITIALISATION ================= */
document.addEventListener("DOMContentLoaded", () => {
    loadProgress();
    showScreen('home-screen');
    checkDailyLogin();
});

/* ================= SAUVEGARDE & CHARGEMENT ================= */
function loadProgress() {
    try {
        const saved = localStorage.getItem('logoQuizState_v2');
        if (saved) {
            userState = JSON.parse(saved);
            // Patch for old saves
            if(!userState.stats) userState.stats = { correctAnswers: userState.foundLogos, wrongAnswers: 0 };
        } else {
            userState = JSON.parse(JSON.stringify(defaultState));
        }
    } catch (e) {
        userState = JSON.parse(JSON.stringify(defaultState));
    }
    applySettings();
    updateUI();
}

function saveProgress() {
    try {
        localStorage.setItem('logoQuizState_v2', JSON.stringify(userState));
    } catch (e) { console.warn("LocalStorage indisponible"); }
    updateUI();
}

function resetProgress() {
    if(confirm("Voulez-vous vraiment réinitialiser toute votre progression ? Cette action est irréversible.")) {
        localStorage.removeItem('logoQuizState_v2');
        loadProgress();
        showScreen('home-screen');
    }
}

/* ================= NAVIGATION ================= */
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    
    // Update bottom nav visual
    document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active');
        if(b.getAttribute('data-target') === screenId) b.classList.add('active');
    });

    if(screenId === 'levels-screen') renderLevels();
    if(screenId === 'rewards-screen') { switchRewardTab('daily'); renderRewards(); renderBadges(); }
    if(screenId === 'leaderboard-screen') renderLeaderboard();
    if(screenId === 'profile-screen') renderProfile();
}

/* ================= LOGIQUE DE JEU ================= */
function startQuickGame() {
    // Par défaut le niveau le plus élevé débloqué
    let maxLvl = Math.max(...userState.unlockedLevels);
    startGame(maxLvl);
}

function startGame(levelId) {
    if(!userState.unlockedLevels.includes(levelId)) return; // Sécurité

    userState.gamesPlayed++;
    
    // Filtrer la base de données selon le niveau de difficulté
    let pool = logoDatabase.filter(l => l.level === levelId);
    // Si pas assez de logos dans ce niveau, on complète avec les niveaux inférieurs
    if(pool.length < 20) {
        let supplement = logoDatabase.filter(l => l.level < levelId).sort(() => 0.5 - Math.random());
        pool = [...pool, ...supplement];
    }
    
    // Sélectionner exactement 20 questions aléatoires
    pool = pool.sort(() => 0.5 - Math.random()).slice(0, 20);
    
    currentGame = {
        questions: pool,
        currentIndex: 0,
        lives: 3,
        correctCount: 0,
        tempScore: 0,
        tempXp: 0,
        tempCoins: 0,
        streak: 0,
        difficultyLevel: levelId
    };
    
    showScreen('game-screen');
    loadQuestion();
    
    // Active le bouton Jouer de la nav
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.nav-btn')[1].classList.add('active');
}

function loadQuestion() {
    if(currentGame.lives <= 0 || currentGame.currentIndex >= currentGame.questions.length) {
        finishGame();
        return;
    }

    const q = currentGame.questions[currentGame.currentIndex];
    currentGame.startTime = Date.now(); // Pour bonus de rapidité

    // UI Updates
    document.getElementById('current-q').innerText = currentGame.currentIndex + 1;
    document.getElementById('total-q').innerText = currentGame.questions.length;
    document.getElementById('q-progress').style.width = `${((currentGame.currentIndex) / currentGame.questions.length) * 100}%`;
    
    updateGameHeader();

    // Image logic
    const imgEl = document.getElementById('logo-image');
    const loader = document.getElementById('img-loader');
    const fallback = document.getElementById('logo-fallback');
    
    imgEl.style.display = 'none';
    fallback.style.display = 'none';
    loader.style.display = 'block';

    imgEl.onload = () => { loader.style.display = 'none'; imgEl.style.display = 'block'; };
    imgEl.onerror = () => { loader.style.display = 'none'; fallback.style.display = 'flex'; fallback.innerHTML = `<span>${q.name.charAt(0)}</span>`; };
    imgEl.src = q.image;
    
    // Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Shuffle options (en s'assurant que la bonne réponse y est)
    let opts = [...new Set([q.name, ...q.options])].slice(0, 4); // Sécurité
    opts = opts.sort(() => 0.5 - Math.random());

    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(btn, opt, q.name);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('btn-hint').disabled = userState.coins < 50;
}

function checkAnswer(btn, selected, correct) {
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    document.getElementById('btn-hint').disabled = true;
    document.getElementById('btn-skip').disabled = true;
    
    const timeTaken = (Date.now() - currentGame.startTime) / 1000;

    if (selected === correct) {
        btn.classList.add('correct');
        vibrate(50);
        
        // Calculs
        currentGame.correctCount++;
        userState.foundLogos++;
        userState.stats.correctAnswers++;
        currentGame.streak++;
        
        let pts = 100;
        let xpGained = 25;
        let coinsGained = 10;
        
        // Bonus
        if(timeTaken < 3) { pts += 25; showToast("🔥 Rapide ! +25", "success"); }
        else if (currentGame.streak > 2) { pts += 20; showToast("🔥 Série ! +20", "success"); }
        else { showToast("✓ Bonne réponse", "success"); }

        currentGame.tempScore += pts;
        currentGame.tempXp += xpGained;
        currentGame.tempCoins += coinsGained;

    } else {
        btn.classList.add('wrong');
        vibrate([50, 100, 50]);
        currentGame.lives--;
        currentGame.streak = 0;
        userState.stats.wrongAnswers++;
        
        showToast("✕ Mauvaise réponse", "error");

        // Montrer la bonne réponse
        document.querySelectorAll('.option-btn').forEach(b => {
            if(b.innerText === correct) b.classList.add('correct');
        });
    }

    updateGameHeader();

    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function showToast(msg, type) {
    const toast = document.getElementById('feedback-toast');
    toast.innerText = msg;
    toast.className = `feedback-toast show ${type}`;
    setTimeout(() => toast.classList.remove('show'), 1200);
}

function nextQuestion() {
    currentGame.currentIndex++;
    document.getElementById('btn-skip').disabled = false;
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
            if(b.innerText !== q.name && hidden < 2 && !b.disabled) {
                b.classList.add('hidden');
                b.disabled = true;
                hidden++;
            }
        });
        document.getElementById('btn-hint').disabled = true;
    }
}

function skipQuestion() {
    currentGame.streak = 0; // Reset streak
    nextQuestion();
}

function finishGame() {
    // Calcul de la précision et bonus de perfection
    const accuracy = Math.round((currentGame.correctCount / currentGame.questions.length) * 100) || 0;
    if(accuracy === 100) {
        currentGame.tempScore += 500;
        currentGame.tempXp += 100;
        currentGame.tempCoins += 50;
    }

    userState.score = (userState.score || 0) + currentGame.tempScore;
    if(currentGame.tempScore > userState.highScore) userState.highScore = currentGame.tempScore;
    
    userState.coins += currentGame.tempCoins;
    addXP(currentGame.tempXp);

    // Débloquer le niveau suivant si assez de bonnes réponses (ex: 15/20)
    let levelUnlocked = false;
    if(currentGame.correctCount >= 15 && currentGame.difficultyLevel < 4) {
        const nextLvl = currentGame.difficultyLevel + 1;
        if(!userState.unlockedLevels.includes(nextLvl)) {
            userState.unlockedLevels.push(nextLvl);
            levelUnlocked = true;
        }
    }

    checkAchievements();
    saveProgress();

    // Remplir l'écran de fin
    document.getElementById('end-score-val').innerText = currentGame.tempScore;
    document.getElementById('end-correct').innerText = `${currentGame.correctCount} / ${currentGame.questions.length}`;
    document.getElementById('end-accuracy').innerText = `${accuracy}%`;
    document.getElementById('end-xp').innerText = `+${currentGame.tempXp} XP`;
    document.getElementById('end-coins-won').innerText = `+${currentGame.tempCoins} 🪙`;

    // Titre et étoiles
    let stars = "⭐";
    if(accuracy >= 50) stars = "⭐⭐";
    if(accuracy >= 80) stars = "⭐⭐⭐";
    if(accuracy === 100) stars = "🌟🌟🌟";
    document.getElementById('end-stars').innerText = stars;

    const title = document.getElementById('end-title');
    if(accuracy < 50) { title.innerText = "DOMMAGE !"; title.className = "glow-text text-center title-large color-danger"; }
    else { title.innerText = "FÉLICITATIONS !"; title.className = "glow-text text-center title-large color-green"; }

    const rewardBox = document.getElementById('end-reward-box');
    if(levelUnlocked) {
        document.getElementById('end-reward-text').innerText = `Niveau ${currentGame.difficultyLevel + 1} Débloqué !`;
        rewardBox.style.display = 'block';
    } else {
        rewardBox.style.display = 'none';
    }

    showScreen('end-screen');
}

function replayGame() {
    startGame(currentGame.difficultyLevel);
}

function updateGameHeader() {
    document.getElementById('game-lives').innerText = currentGame.lives;
    document.getElementById('game-score').innerText = currentGame.tempScore;
    document.getElementById('game-coins').innerText = userState.coins;
}

/* ================= SYSTÈME D'EXPÉRIENCE ================= */
function getXPForLevel(level) {
    // Niveau 1 -> 0, Niveau 2 -> 500, Niveau 3 -> 1000, Niveau 4 -> 1600...
    if(level === 1) return 0;
    return (level - 1) * 500 + Math.floor(Math.pow(level, 1.5) * 50);
}

function addXP(amount) {
    userState.xp += amount;
    let nextLvlXP = getXPForLevel(userState.level + 1);
    
    let leveledUp = false;
    while(userState.xp >= nextLvlXP) {
        userState.level++;
        nextLvlXP = getXPForLevel(userState.level + 1);
        leveledUp = true;
    }

    if(leveledUp) {
        userState.coins += 150; // Récompense de niveau
        showLevelUpModal(userState.level, 150);
    }
}

function showLevelUpModal(level, reward) {
    document.getElementById('modal-level').innerText = level;
    document.getElementById('modal-reward').innerText = reward;
    document.getElementById('level-up-modal').classList.add('active');
}
function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

/* ================= INTERFACES & UI ================= */
function updateUI() {
    let currentLvlXP = getXPForLevel(userState.level);
    let nextLvlXP = getXPForLevel(userState.level + 1);
    let progressXP = userState.xp - currentLvlXP;
    let targetXP = nextLvlXP - currentLvlXP;
    let xpPercent = (progressXP / targetXP) * 100;

    // Home
    document.getElementById('home-name').innerText = userState.name;
    document.getElementById('home-level').innerText = userState.level;
    document.getElementById('home-xp').innerText = userState.xp;
    document.getElementById('home-next-xp').innerText = nextLvlXP;
    document.getElementById('home-streak').innerText = userState.streak;
    document.getElementById('home-score').innerText = userState.highScore;
    document.getElementById('home-coins').innerText = userState.coins;
    document.getElementById('home-found').innerText = userState.foundLogos;
    
    document.getElementById('home-xp-bar').style.width = `${xpPercent}%`;
    document.getElementById('home-reward-bar').style.width = `${xpPercent}%`;
    document.getElementById('reward-xp-text').innerText = `${userState.xp} / ${nextLvlXP} XP`;

    // Settings
    document.getElementById('set-sound').checked = userState.settings.sound;
    document.getElementById('set-music').checked = userState.settings.music;
    document.getElementById('set-dark').checked = userState.settings.dark;
    document.getElementById('set-vib').checked = userState.settings.vib;
}

/* ================= NIVEAUX ================= */
function renderLevels() {
    const container = document.getElementById('levels-container');
    container.innerHTML = '';
    const levelsData = [
        { id: 1, name: "FACILE", desc: "Logos très connus" },
        { id: 2, name: "NORMAL", desc: "Marques populaires" },
        { id: 3, name: "DIFFICILE", desc: "Un peu plus pointu" },
        { id: 4, name: "EXPERT", desc: "Pour les vrais pros" }
    ];

    levelsData.forEach(lvl => {
        const isUnlocked = userState.unlockedLevels.includes(lvl.id);
        
        let card = document.createElement('div');
        card.className = `level-card card ${isUnlocked ? '' : 'locked'}`;
        if(isUnlocked) card.onclick = () => startGame(lvl.id);
        
        card.innerHTML = `
            <div class="level-header">
                <div>
                    <span class="text-muted font-small">Niveau ${lvl.id}</span>
                    <h3 class="level-title">${lvl.name}</h3>
                </div>
                <div class="level-stars ${isUnlocked ? 'color-gold' : 'empty'}">⭐⭐⭐</div>
            </div>
            <p class="text-muted font-small">${lvl.desc}</p>
            ${!isUnlocked ? '<div class="level-lock-icon">🔒</div>' : ''}
        `;
        container.appendChild(card);
    });
}

/* ================= RÉCOMPENSES & QUOTIDIEN ================= */
function switchRewardTab(tab) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
}

function checkDailyLogin() {
    const today = new Date().toDateString();
    if(userState.lastClaimDate !== today) {
        // Nouvelle journée
        if(userState.lastClaimDate) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if(userState.lastClaimDate !== yesterday.toDateString()) {
                // Streak cassé
                userState.streak = 1; // On remet à 1 pour aujourd'hui
            }
        } else {
            userState.streak = 1;
        }
        // Pas encore réclamé aujourd'hui
        document.getElementById('claim-reward-btn').disabled = false;
        document.getElementById('claim-status').innerText = "Récompense disponible !";
    } else {
        // Déjà réclamé
        document.getElementById('claim-reward-btn').disabled = true;
        document.getElementById('claim-status').innerText = "Reviens demain !";
    }
}

function renderRewards() {
    const grid = document.getElementById('daily-grid');
    grid.innerHTML = '';
    const rewards = [50, 75, 100, 150, 200, 250, 500];
    
    const today = new Date().toDateString();
    const canClaim = userState.lastClaimDate !== today;
    // Streak affiché: si déjà claim aujourd'hui, on est au jour 'streak', sinon on est au jour 'streak' à claim
    let currentDayIndex = (userState.streak - 1) % 7; 

    for(let i=0; i<7; i++) {
        let statusClass = 'future';
        if(i < currentDayIndex) statusClass = 'claimed';
        else if(i === currentDayIndex) {
            statusClass = canClaim ? 'today' : 'claimed';
        }
        
        grid.innerHTML += `
            <div class="day-box ${statusClass}">
                <div>Jour ${i+1}</div>
                <div class="color-gold mt-1">+${rewards[i]} XP</div>
            </div>
        `;
    }
}

function claimDailyReward() {
    const today = new Date().toDateString();
    if(userState.lastClaimDate !== today) {
        const rewards = [50, 75, 100, 150, 200, 250, 500];
        let currentDayIndex = (userState.streak - 1) % 7;
        let amount = rewards[currentDayIndex];
        
        addXP(amount);
        userState.lastClaimDate = today;
        userState.streak++;
        
        saveProgress();
        checkDailyLogin();
        renderRewards();
        
        // Petite animation
        document.getElementById('claim-reward-btn').innerText = "RÉCUPÉRÉ ✓";
        setTimeout(() => { document.getElementById('claim-reward-btn').innerText = "RÉCUPÉRER"; }, 2000);
    }
}

/* ================= BADGES ================= */
function renderBadges() {
    const badgesContainer = document.getElementById('badges-container');
    badgesContainer.innerHTML = '';
    const badgesDef = [
        { id: 'beginner', name: 'Débutant', desc: 'Joue 10 parties', max: 10, val: userState.gamesPlayed, icon: '🥉' },
        { id: 'connoisseur', name: 'Connaisseur', desc: 'Trouve 50 logos', max: 50, val: userState.foundLogos, icon: '🥈' },
        { id: 'expert', name: 'Expert', desc: 'Trouve 100 logos', max: 100, val: userState.foundLogos, icon: '🥇' },
        { id: 'legend', name: 'Légende', desc: 'Trouve 200 logos', max: 200, val: userState.foundLogos, icon: '👑' }
    ];

    badgesDef.forEach(b => {
        let percent = Math.min(100, (b.val / b.max) * 100);
        let unlocked = userState.badges[b.id] || (b.val >= b.max);
        
        badgesContainer.innerHTML += `
            <div class="badge-item ${unlocked ? 'unlocked' : ''}">
                <div class="badge-icon">${b.icon}</div>
                <div class="badge-info">
                    <h4>${b.name} <span>${unlocked ? '✅' : '🔒'}</span></h4>
                    <p class="badge-desc">${b.desc}</p>
                    <div class="xp-bar-container" style="height:6px; margin:0;">
                        <div class="xp-bar ${unlocked ? 'reward-bar' : ''}" style="width: ${percent}%;"></div>
                    </div>
                    <div style="font-size:0.75rem; text-align:right; margin-top:4px;" class="text-muted">${b.val} / ${b.max}</div>
                </div>
            </div>
        `;
    });
}

function checkAchievements() {
    if(userState.gamesPlayed >= 10 && !userState.badges.beginner) userState.badges.beginner = true;
    if(userState.foundLogos >= 50 && !userState.badges.connoisseur) userState.badges.connoisseur = true;
    if(userState.foundLogos >= 100 && !userState.badges.expert) userState.badges.expert = true;
    if(userState.foundLogos >= 200 && !userState.badges.legend) userState.badges.legend = true;
}

/* ================= PROFIL ================= */
function renderProfile() {
    let currentLvlXP = getXPForLevel(userState.level);
    let nextLvlXP = getXPForLevel(userState.level + 1);
    let xpPercent = ((userState.xp - currentLvlXP) / (nextLvlXP - currentLvlXP)) * 100;

    document.getElementById('prof-name').innerText = userState.name;
    document.getElementById('prof-level').innerText = userState.level;
    document.getElementById('prof-xp').innerText = userState.xp;
    document.getElementById('prof-next-xp').innerText = nextLvlXP;
    document.getElementById('prof-xp-bar').style.width = `${xpPercent}%`;
    
    document.getElementById('prof-best-score').innerText = userState.highScore;
    document.getElementById('prof-logos').innerText = userState.foundLogos;
    document.getElementById('prof-streak').innerText = userState.streak;
    document.getElementById('prof-games').innerText = userState.gamesPlayed;
    
    document.getElementById('prof-correct').innerText = userState.stats.correctAnswers;
    document.getElementById('prof-wrong').innerText = userState.stats.wrongAnswers;
}

/* ================= CLASSEMENT ================= */
function renderLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    const bots = [
        { name: "PlayerOne", score: 9850 },
        { name: "QuizMaster", score: 8740 },
        { name: "LogoKing", score: 7620 },
        { name: "Anna_99", score: 6200 },
        { name: "GamerPro", score: 5100 }
    ];
    
    // Ajouter le joueur actuel
    bots.push({ name: userState.name, score: userState.highScore, isMe: true });
    
    // Trier
    bots.sort((a, b) => b.score - a.score);

    container.innerHTML = '';
    bots.forEach((p, index) => {
        let rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : '';
        let rankStr = index === 0 ? '1' : index === 1 ? '2' : index === 2 ? '3' : `${index + 1}`;
        
        container.innerHTML += `
            <div class="leaderboard-item ${p.isMe ? 'is-me' : ''}">
                <div class="rank ${rankClass}">#${rankStr}</div>
                <div class="lb-name">${p.name} ${p.isMe ? '(Toi)' : ''}</div>
                <div class="lb-score">${p.score} XP</div>
            </div>
        `;
    });
}

/* ================= PARAMÈTRES & UTILITAIRES ================= */
function toggleSetting(key) {
    userState.settings[key] = !userState.settings[key];
    saveProgress();
    applySettings();
}

function applySettings() {
    // Mode sombre
    if(!userState.settings.dark) {
        document.documentElement.style.setProperty('--bg-dark', '#f0f0f5');
        document.documentElement.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.9)');
        document.documentElement.style.setProperty('--text-main', '#1a1a1a');
        document.documentElement.style.setProperty('--secondary', '#e0e0e0');
    } else {
        document.documentElement.style.setProperty('--bg-dark', '#0a0616');
        document.documentElement.style.setProperty('--bg-card', 'rgba(22, 14, 42, 0.85)');
        document.documentElement.style.setProperty('--text-main', '#ffffff');
        document.documentElement.style.setProperty('--secondary', '#2a1b42');
    }
}

function vibrate(ms) {
    if(userState.settings.vib && navigator.vibrate) {
        navigator.vibrate(ms);
    }
}
