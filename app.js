// ================= INITIAL DATA & DEFAULT WORDS =================
const defaultWords = [
  // Unit 1
  { en: "afraid", uz: "qo'rqmoq", example: "She is afraid of dogs." },
  { en: "agree", uz: "rozi bo'lmoq", example: "I agree with your opinion." },
  { en: "angry", uz: "jahlda", example: "The teacher was angry with him." },
  { en: "arrive", uz: "yetib kelmoq", example: "They will arrive at the station soon." },
  { en: "attack", uz: "hujum qilmoq", example: "The dog tried to attack the postman." },
  { en: "bottom", uz: "tagi, osti", example: "The keys are at the bottom of the bag." },
  { en: "clever", uz: "aqlli", example: "She is a clever student who learns quickly." },
  { en: "cruel", uz: "shafqatsiz", example: "Do not be cruel to small animals." },
  { en: "finally", uz: "nihoyat", example: "We finally reached the top of the hill." },
  { en: "hide", uz: "yashirmoq", example: "Children like to hide under the table." },
  { en: "hunt", uz: "ovlamoq", example: "Lions usually hunt in groups." },
  { en: "lot", uz: "ko'p", example: "There are a lot of books in the library." },
  { en: "middle", uz: "o'rta", example: "He stood in the middle of the room." },
  { en: "moment", uz: "lahza", example: "Please wait a moment, I will be right back." },
  { en: "pleased", uz: "mamnun", example: "I am very pleased to meet you." },
  { en: "promise", uz: "va'da bermoq", example: "I promise to keep your secret." },
  { en: "reply", uz: "javob bermoq", example: "She did not reply to my letter." },
  { en: "safe", uz: "xavfsiz", example: "Keep your money in a safe place." },
  { en: "trick", uz: "hiyla", example: "The magician showed us a card trick." },
  { en: "well", uz: "yaxshi", example: "You speak English very well." },

  // Unit 2
  { en: "adventure", uz: "sarguzasht", example: "Traveling in Africa was a big adventure." },
  { en: "approach", uz: "yaqinlashmoq", example: "The train began to approach the station." },
  { en: "carefully", uz: "ehtiyotkorlik bilan", example: "Please carry the glass cup carefully." },
  { en: "chemical", uz: "kimyoviy", example: "Scientists mix different chemicals." },
  { en: "create", uz: "yaratmoq", example: "Artists create beautiful paintings." },
  { en: "evil", uz: "yomonlik", example: "The evil king ruled the land." },
  { en: "experiment", uz: "tajriba", example: "We did a science experiment in school." },
  { en: "kill", uz: "o'ldirmoq", example: "He killed the spider with a book." },
  { en: "laboratory", uz: "laboratoriya", example: "They work in a research laboratory." },
  { en: "laugh", uz: "kulmoq", example: "The funny joke made everyone laugh." },
  { en: "loud", uz: "baland ovozda", example: "I heard a loud noise outside." },
  { en: "nervous", uz: "asabiy", example: "He felt nervous before the exam." },
  { en: "noise", uz: "shovqin", example: "Try not to make too much noise." },
  { en: "project", uz: "loyiha", example: "We are working on a school project." },
  { en: "scare", uz: "qo'rqitmoq", example: "Spiders scare my little sister." },
  { en: "secret", uz: "sir", example: "I cannot tell you, it is a secret." },
  { en: "shout", uz: "baqirmoq", example: "Don't shout, I can hear you clearly." },
  { en: "smell", uz: "hid", example: "The flowers smell very sweet." },
  { en: "terrible", uz: "qo'rqinchli", example: "I had a terrible nightmare last night." },
  { en: "worse", uz: "yomonroq", example: "The weather is worse today than yesterday." },

  // Unit 3
  { en: "alien", uz: "begona", example: "He felt like an alien in the new city." },
  { en: "among", uz: "orasida", example: "She sat among her best friends." },
  { en: "chart", uz: "grafik, jadval", example: "The teacher drew a progress chart." },
  { en: "cloud", uz: "bulut", example: "Look at that white cloud in the sky." },
  { en: "comprehend", uz: "tushunmoq", example: "I cannot comprehend this difficult text." },
  { en: "describe", uz: "ta'riflamoq", example: "Can you describe the missing person?" },
  { en: "ever", uz: "qachon bo'lsa ham", example: "Have you ever been to Samarkand?" },
  { en: "fail", uz: "muvaffaqiyatsizlikka uchramoq", example: "If you do not study, you will fail." },
  { en: "friendly", uz: "do'stona", example: "The new neighbor is very friendly." },
  { en: "grade", uz: "baho", example: "He got a good grade in mathematics." },
  { en: "instead", uz: "o'rniga", example: "He chose tea instead of coffee." },
  { en: "library", uz: "kutubxona", example: "I borrowed a book from the library." },
  { en: "planet", uz: "sayyora", example: "Mars is known as the red planet." },
  { en: "report", uz: "hisobot", example: "She wrote a long report about history." },
  { en: "several", uz: "bir nechta", example: "I visited several museums in Tashkent." },
  { en: "solve", uz: "hal qilmoq", example: "Can you solve this math problem?" },
  { en: "suddenly", uz: "to'satdan", example: "Suddenly, the lights went out." },
  { en: "suppose", uz: "faraz qilmoq", example: "I suppose it will rain tonight." },
  { en: "universe", uz: "olam", example: "The universe contains billions of stars." },
  { en: "view", uz: "ko'rinish", example: "The hotel room has a beautiful mountain view." },

  // Unit 4
  { en: "appropriate", uz: "muvofiq", example: "It is not appropriate to wear slippers here." },
  { en: "avoid", uz: "oldini olmoq, saqlanmoq", example: "You should avoid eating fast food." },
  { en: "behave", uz: "o'zini tutmoq", example: "Children must behave in public places." },
  { en: "calm", uz: "sokin", example: "The sea was calm and peaceful today." },
  { en: "concern", uz: "tashvishlanmoq", example: "His bad health concerns his family." },
  { en: "content", uz: "mamnun", example: "He was content with his simple life." },
  { en: "expect", uz: "kutmoq", example: "I expect to pass the exam easily." },
  { en: "frequently", uz: "tez-tez", example: "He frequently visits his grandparents." },
  { en: "habit", uz: "odat", example: "Reading books is a good habit." },
  { en: "instruct", uz: "ko'rsatma bermoq", example: "The coach instructed us on what to do." },
  { en: "issue", uz: "masala", example: "Global warming is a serious issue." },
  { en: "none", uz: "hech biri", example: "None of my friends came to the party." },
  { en: "patient", uz: "sabrli", example: "Teachers need to be very patient." },
  { en: "positive", uz: "ijobiy", example: "Try to keep a positive attitude." },
  { en: "punish", uz: "jazolamoq", example: "Parents sometimes punish bad behavior." },
  { en: "represent", uz: "vakillik qilmoq", example: "A red heart represents love." },
  { en: "shake", uz: "silkitmoq", example: "Shake the bottle well before opening." },
  { en: "spread", uz: "tarqalmoq", example: "The fire spread quickly through the forest." },
  { en: "stroll", uz: "sayrga chiqmoq", example: "We strolled along the river bank." },
  { en: "village", uz: "qishloq", example: "He lives in a small mountain village." },

  // Unit 5
  { en: "aware", uz: "xabardor", example: "He was not aware of the danger." },
  { en: "badly", uz: "yomon", example: "The team played badly and lost the game." },
  { en: "belong", uz: "tegishli bo'lmoq", example: "This book belongs to me." },
  { en: "continue", uz: "davom etmoq", example: "Please continue reading the story." },
  { en: "error", uz: "xato", example: "I made a spelling error in my essay." },
  { en: "experience", uz: "tajriba", example: "She has three years of work experience." },
  { en: "field", uz: "maydon", example: "The cows are grazing in the green field." },
  { en: "hurt", uz: "jarohat olmoq", example: "He fell and hurt his knee." },
  { en: "judgment", uz: "hukm, baho", example: "Trust your own judgment when making decisions." },
  { en: "likely", uz: "ehtimol", example: "It is likely to rain this afternoon." },
  { en: "normal", uz: "oddiy", example: "It is normal to feel nervous before a test." },
  { en: "rare", uz: "noyob", example: "The museum exhibits rare ancient coins." },
  { en: "relax", uz: "rohatlanmoq", example: "I like to relax and watch a movie on weekends." },
  { en: "request", uz: "so'ramoq", example: "She requested help with her project." },
  { en: "reside", uz: "yashamoq", example: "Many students reside in college dormitories." },
  { en: "result", uz: "natija", example: "What was the result of the experiment?" },
  { en: "roll", uz: "dumalamoq", example: "The ball began to roll down the hill." },
  { en: "since", uz: "chunki", example: "Since it is raining, we should stay indoors." },
  { en: "visible", uz: "ko'rinadigan", example: "The stars are visible on a clear night." },
  { en: "wild", uz: "yovvoyi", example: "We saw wild animals during the safari tour." },

  // Unit 6
  { en: "advantage", uz: "afzallik", example: "Knowing English is a great advantage." },
  { en: "cause", uz: "sababi", example: "The heavy rain was the cause of the flood." },
  { en: "choice", uz: "tanlov", example: "You have a choice between tea and coffee." },
  { en: "community", uz: "jamoa", example: "We live in a friendly local community." },
  { en: "dead", uz: "o'lik", example: "The plants are dead because we forgot to water them." },
  { en: "distance", uz: "masofa", example: "The distance between the two cities is 100 kilometers." },
  { en: "escape", uz: "qochmoq", example: "The rabbit managed to escape from the cage." },
  { en: "face", uz: "yuz", example: "She had a happy smile on her face." },
  { en: "follow", uz: "amal qilmoq, ortidan bormoq", example: "Please follow the instructions carefully." },
  { en: "fright", uz: "qo'rquv", example: "The loud noise gave her a sudden fright." },
  { en: "ghost", uz: "arvoh", example: "Do you believe in ghosts?" },
  { en: "individual", uz: "shaxs", example: "Each individual has a unique personality." },
  { en: "pet", uz: "uy hayvoni", example: "Do you have any pets, like a cat or dog?" },
  { en: "reach", uz: "erishmoq, yetib bormoq", example: "We hope to reach our destination before dark." },
  { en: "return", uz: "qaytmoq", example: "He promised to return the borrowed book tomorrow." },
  { en: "survive", uz: "omon qolmoq", example: "Some desert plants can survive without water for a long time." },
  { en: "upset", uz: "xafa", example: "She was upset about losing her favorite keys." },
  { en: "voice", uz: "ovoz", example: "She has a beautiful singing voice." },
  { en: "weather", uz: "ob-havo", example: "The weather is very warm and sunny today." },
  { en: "wise", uz: "dono", example: "It was a wise decision to study hard for the exam." },

  // Unit 7 - Sinonimlar (Synonyms)
  { en: "small, little", uz: "kichik", example: "A mouse is a small / little animal.", synonyms: ["small", "little"] },
  { en: "big, large", uz: "katta", example: "An elephant is a big / large animal.", synonyms: ["big", "large"] },
  { en: "happy, glad", uz: "xursand", example: "I am happy / glad to see you.", synonyms: ["happy", "glad"] },
  { en: "sad, unhappy", uz: "xafa", example: "She was sad / unhappy about the bad news.", synonyms: ["sad", "unhappy"] },
  { en: "fast, quick", uz: "tez", example: "Cheetahs are fast / quick runners.", synonyms: ["fast", "quick"] },
  { en: "slow, unhurried", uz: "sekin", example: "Turtles move at a slow / unhurried pace.", synonyms: ["slow", "unhurried"] },
  { en: "good, nice", uz: "yaxshi", example: "Have a good / nice day!", synonyms: ["good", "nice"] },
  { en: "bad, poor", uz: "yomon", example: "Bad / poor weather spoiled our weekend.", synonyms: ["bad", "poor"] },
  { en: "easy, simple", uz: "oson", example: "This question is very easy / simple.", synonyms: ["easy", "simple"] },
  { en: "difficult, hard", uz: "qiyin", example: "Learning a language can be difficult / hard.", synonyms: ["difficult", "hard"] }
];

// ================= WEB AUDIO API SOUND SYSTEM =================
const SoundEffects = {
  ctx: null,
  
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  playTone(freq, type, duration, startTime) {
    if (!this.ctx) return;
    try {
      let osc = this.ctx.createOscillator();
      let gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);
      
      gain.gain.setValueAtTime(0.15, startTime);
      gain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    } catch (e) {
      console.warn("Audio playback failed: ", e);
    }
  },

  playCorrect() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Fast double beep (pleasant high pitches)
    this.playTone(523.25, "sine", 0.08, now); // C5
    this.playTone(659.25, "sine", 0.15, now + 0.08); // E5
  },

  playWrong() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Low double buzz
    this.playTone(220, "sawtooth", 0.15, now); // A3
    this.playTone(180, "sawtooth", 0.25, now + 0.1); // Lower pitch slide
  },

  playComplete() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Triumphant chord progression (C5 -> E5 -> G5 -> C6)
    this.playTone(523.25, "triangle", 0.15, now);
    this.playTone(659.25, "triangle", 0.15, now + 0.12);
    this.playTone(783.99, "triangle", 0.15, now + 0.24);
    this.playTone(1046.50, "triangle", 0.35, now + 0.36);
  }
};

// ================= STATE MANAGEMENT =================
let state = {
  words: [],
  xp: 0,
  streak: 0,
  lastActiveDate: null
};

// ================= EXERCISE SESSION STATE =================
let session = {
  mode: 'due', // 'due' or 'all'
  questions: [],
  currentIndex: 0,
  score: 0,
  xpEarned: 0,
  hearts: 5,
  selectedAnswer: null, // used for multiple choice / matching
  typedAnswer: "",     // used for typing input
  matchingState: {
    selectedCard: null,
    matchedCount: 0
  },
  activeTimeout: null,
  evaluating: false
};

// ================= MASCOT GRAPHICS CONTROLLER =================
const MascotExpressions = {
  neutral: `<svg class="mascot-svg neutral" viewBox="0 0 200 200" width="120" height="120">
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78E117" />
        <stop offset="100%" stop-color="#58CC02" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="rgba(0,0,0,0.1)"/>
    <path class="arm-left" d="M 50 110 Q 25 100 40 85 Q 50 95 60 110" fill="#58CC02" stroke="#3D9402" stroke-width="2"/>
    <path class="arm-right" d="M 150 110 Q 175 100 160 85 Q 150 95 140 110" fill="#58CC02" stroke="#3D9402" stroke-width="2"/>
    <ellipse cx="80" cy="175" rx="15" ry="8" fill="#FF9600"/>
    <ellipse cx="120" cy="175" rx="15" ry="8" fill="#FF9600"/>
    <circle cx="100" cy="120" r="55" fill="url(#bodyGrad)" stroke="#3D9402" stroke-width="3"/>
    <path d="M 65 130 Q 100 100 135 130 Q 100 180 65 130 Z" fill="#F1F9EB"/>
    <g class="eyes">
      <circle class="eye-bg" cx="80" cy="95" r="16" fill="white" stroke="#3D9402" stroke-width="1.5"/>
      <circle class="pupil" cx="80" cy="95" r="7" fill="#1C1C1C"/>
      <circle cx="77" cy="92" r="3" fill="white"/>
      <circle class="eye-bg" cx="120" cy="95" r="16" fill="white" stroke="#3D9402" stroke-width="1.5"/>
      <circle class="pupil" cx="120" cy="95" r="7" fill="#1C1C1C"/>
      <circle cx="117" cy="92" r="3" fill="white"/>
    </g>
    <circle cx="68" cy="112" r="6" fill="#FFA3A3" opacity="0.6"/>
    <circle cx="132" cy="112" r="6" fill="#FFA3A3" opacity="0.6"/>
    <path class="mouth" d="M 90 120 Q 100 130 110 120" stroke="#1C1C1C" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,

  happy: `<svg class="mascot-svg" viewBox="0 0 200 200" width="120" height="120">
    <defs>
      <linearGradient id="bodyGradH" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78E117" />
        <stop offset="100%" stop-color="#58CC02" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="rgba(0,0,0,0.1)"/>
    <path class="arm-left" d="M 50 110 Q 20 80 35 75 Q 50 85 60 110" fill="#58CC02" stroke="#3D9402" stroke-width="2"/>
    <path class="arm-right" d="M 150 110 Q 180 80 165 75 Q 150 85 140 110" fill="#58CC02" stroke="#3D9402" stroke-width="2"/>
    <ellipse cx="80" cy="175" rx="15" ry="8" fill="#FF9600"/>
    <ellipse cx="120" cy="175" rx="15" ry="8" fill="#FF9600"/>
    <circle cx="100" cy="120" r="55" fill="url(#bodyGradH)" stroke="#3D9402" stroke-width="3"/>
    <path d="M 65 130 Q 100 100 135 130 Q 100 180 65 130 Z" fill="#F1F9EB"/>
    <g class="eyes">
      <path d="M 68 98 Q 80 88 92 98" stroke="#1C1C1C" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M 108 98 Q 120 88 132 98" stroke="#1C1C1C" stroke-width="5" fill="none" stroke-linecap="round"/>
    </g>
    <circle cx="68" cy="112" r="6" fill="#FFA3A3" opacity="0.8"/>
    <circle cx="132" cy="112" r="6" fill="#FFA3A3" opacity="0.8"/>
    <path class="mouth" d="M 88 120 Q 100 140 112 120 Z" fill="#FF4B4B" stroke="#1C1C1C" stroke-width="3"/>
  </svg>`,

  sad: `<svg class="mascot-svg" viewBox="0 0 200 200" width="120" height="120">
    <defs>
      <linearGradient id="bodyGradS" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78E117" />
        <stop offset="100%" stop-color="#58CC02" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="rgba(0,0,0,0.1)"/>
    <path class="arm-left" d="M 50 110 Q 30 130 40 135 Q 50 120 60 110" fill="#58CC02" stroke="#3D9402" stroke-width="2"/>
    <path class="arm-right" d="M 150 110 Q 170 130 160 135 Q 150 120 140 110" fill="#58CC02" stroke="#3D9402" stroke-width="2"/>
    <ellipse cx="80" cy="175" rx="15" ry="8" fill="#FF9600"/>
    <ellipse cx="120" cy="175" rx="15" ry="8" fill="#FF9600"/>
    <circle cx="100" cy="120" r="55" fill="url(#bodyGradS)" stroke="#3D9402" stroke-width="3"/>
    <path d="M 65 130 Q 100 100 135 130 Q 100 180 65 130 Z" fill="#F1F9EB"/>
    <g class="eyes">
      <path d="M 68 92 Q 80 102 92 92" stroke="#1C1C1C" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 108 92 Q 120 102 132 92" stroke="#1C1C1C" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>
    <circle cx="68" cy="112" r="6" fill="#FFA3A3" opacity="0.4"/>
    <circle cx="132" cy="112" r="6" fill="#FFA3A3" opacity="0.4"/>
    <path class="mouth" d="M 90 130 Q 100 120 110 130" stroke="#1C1C1C" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,

  thinking: `<svg class="mascot-svg" viewBox="0 0 200 200" width="120" height="120">
    <defs>
      <linearGradient id="bodyGradT" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#78E117" />
        <stop offset="100%" stop-color="#58CC02" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="180" rx="60" ry="10" fill="rgba(0,0,0,0.1)"/>
    <path class="arm-left" d="M 50 110 Q 25 100 40 85 Q 50 95 60 110" fill="#58CC02" stroke="#3D9402" stroke-width="2"/>
    <path class="arm-right" d="M 150 110 Q 130 95 135 80 Q 140 85 140 110" fill="#58CC02" stroke="#3D9402" stroke-width="2"/>
    <ellipse cx="80" cy="175" rx="15" ry="8" fill="#FF9600"/>
    <ellipse cx="120" cy="175" rx="15" ry="8" fill="#FF9600"/>
    <circle cx="100" cy="120" r="55" fill="url(#bodyGradT)" stroke="#3D9402" stroke-width="3"/>
    <path d="M 65 130 Q 100 100 135 130 Q 100 180 65 130 Z" fill="#F1F9EB"/>
    <g class="eyes">
      <circle class="eye-bg" cx="80" cy="95" r="16" fill="white" stroke="#3D9402" stroke-width="1.5"/>
      <circle class="pupil" cx="83" cy="90" r="7" fill="#1C1C1C"/>
      <circle cx="80" cy="87" r="3" fill="white"/>
      <circle class="eye-bg" cx="120" cy="95" r="16" fill="white" stroke="#3D9402" stroke-width="1.5"/>
      <circle class="pupil" cx="123" cy="90" r="7" fill="#1C1C1C"/>
      <circle cx="120" cy="87" r="3" fill="white"/>
    </g>
    <circle cx="68" cy="112" r="6" fill="#FFA3A3" opacity="0.6"/>
    <circle cx="132" cy="112" r="6" fill="#FFA3A3" opacity="0.6"/>
    <path class="mouth" d="M 92 122 L 108 122" stroke="#1C1C1C" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`
};

function updateDashboardMascot(expression, speechText) {
  const container = document.getElementById("dashboard-mascot");
  if (container && MascotExpressions[expression]) {
    container.innerHTML = MascotExpressions[expression];
  }
  const textEl = document.getElementById("mascot-text");
  if (textEl && speechText) {
    textEl.textContent = speechText;
  }
}

// ================= DATA STORAGE (PLATFORM COMPATIBILITY) =================
const STORAGE_KEY = 'leitner-words-v1';

const StorageHelper = {
  async get(key) {
    if (window.storage && typeof window.storage.get === 'function') {
      try {
        const res = await window.storage.get(key, false);
        return res && res.value ? JSON.parse(res.value) : null;
      } catch (e) {
        console.error("Platform storage.get failed:", e);
      }
    }
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  },

  async set(key, val) {
    const stringVal = JSON.stringify(val);
    if (window.storage && typeof window.storage.set === 'function') {
      try {
        await window.storage.set(key, stringVal, false);
        return;
      } catch (e) {
        console.error("Platform storage.set failed:", e);
      }
    }
    localStorage.setItem(key, stringVal);
  }
};

async function loadData() {
  const localWords = await StorageHelper.get(STORAGE_KEY);
  const localXp = localStorage.getItem("yodla_xp");
  const localStreak = localStorage.getItem("yodla_streak");
  const localLastActive = localStorage.getItem("yodla_last_active_date");

  if (localWords && Array.isArray(localWords) && localWords.length > 0) {
    // Merge missing defaults for users who already have local data
    const existingEn = new Set(localWords.map(w => w.en.toLowerCase().trim()));
    const missingDefaults = defaultWords.filter(dw => !existingEn.has(dw.en.toLowerCase().trim()));
    
    const newWordsToAdd = missingDefaults.map((item, idx) => {
      const globalIdx = defaultWords.findIndex(dw => dw.en.toLowerCase().trim() === item.en.toLowerCase().trim());
      let unitNum = 1;
      if (globalIdx >= 20 && globalIdx < 40) unitNum = 2;
      else if (globalIdx >= 40 && globalIdx < 60) unitNum = 3;
      else if (globalIdx >= 60 && globalIdx < 80) unitNum = 4;
      else if (globalIdx >= 80 && globalIdx < 100) unitNum = 5;
      else if (globalIdx >= 100 && globalIdx < 120) unitNum = 6;
      else if (globalIdx >= 120) unitNum = 7;
      
      return {
        id: "word_new_" + globalIdx + "_" + Date.now(),
        en: item.en.trim(),
        uz: item.uz.trim(),
        example: item.example.trim(),
        synonyms: item.synonyms ? [...item.synonyms] : null,
        box: 1,
        unit: unitNum,
        nextReviewDate: new Date().toISOString(),
        nextReview: new Date().toISOString()
      };
    });
    
    const combinedWords = [...localWords, ...newWordsToAdd];
    
    state.words = combinedWords.map((w, idx) => {
      if (!w.id) w.id = "word_" + idx + "_" + Date.now();
      if (!w.box) w.box = 1;
      if (!w.nextReviewDate) w.nextReviewDate = w.nextReview || new Date().toISOString();
      if (!w.nextReview) w.nextReview = w.nextReviewDate;
      
      // Force align unit based on the original defaultWords index to correct any corruption
      const defaultIdx = defaultWords.findIndex(dw => dw.en.toLowerCase().trim() === w.en.toLowerCase().trim());
      if (defaultIdx !== -1) {
        if (defaultIdx < 20) w.unit = 1;
        else if (defaultIdx < 40) w.unit = 2;
        else if (defaultIdx < 60) w.unit = 3;
        else if (defaultIdx < 80) w.unit = 4;
        else if (defaultIdx < 100) w.unit = 5;
        else if (defaultIdx < 120) w.unit = 6;
        else w.unit = 7;

        if (defaultWords[defaultIdx].synonyms) {
          w.synonyms = defaultWords[defaultIdx].synonyms;
        }
      } else {
        if (!w.unit) w.unit = 1;
      }
      return w;
    });

    if (newWordsToAdd.length > 0) {
      await saveData();
    }
  } else {
    // Populate with defaults and map unit numbers based on index (20 words per unit)
    state.words = defaultWords.map((item, idx) => {
      let unitNum = 1;
      if (idx >= 20 && idx < 40) unitNum = 2;
      else if (idx >= 40 && idx < 60) unitNum = 3;
      else if (idx >= 60 && idx < 80) unitNum = 4;
      else if (idx >= 80 && idx < 100) unitNum = 5;
      else if (idx >= 100 && idx < 120) unitNum = 6;
      else if (idx >= 120) unitNum = 7;

      return {
        id: "word_" + idx + "_" + Date.now(),
        en: item.en.trim(),
        uz: item.uz.trim(),
        example: item.example.trim(),
        synonyms: item.synonyms ? [...item.synonyms] : null,
        box: 1,
        unit: unitNum,
        nextReviewDate: new Date().toISOString(),
        nextReview: new Date().toISOString()
      };
    });
    await saveData();
  }

  state.xp = localXp ? parseInt(localXp) : 0;
  state.streak = localStreak ? parseInt(localStreak) : 0;
  state.lastActiveDate = localLastActive || null;

  // Process Streak reset if missed yesterday
  checkStreakValidity();
}

async function saveData() {
  await StorageHelper.set(STORAGE_KEY, state.words);
  localStorage.setItem("yodla_xp", state.xp.toString());
  localStorage.setItem("yodla_streak", state.streak.toString());
  if (state.lastActiveDate) {
    localStorage.setItem("yodla_last_active_date", state.lastActiveDate);
  }
}

function checkStreakValidity() {
  if (!state.lastActiveDate) return;
  
  const todayStr = getLocalDateString(new Date());
  const lastActive = new Date(state.lastActiveDate);
  const today = new Date(todayStr);
  
  // Calculate difference in days
  const diffTime = Math.abs(today - lastActive);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays > 1 && state.lastActiveDate !== todayStr) {
    state.streak = 0; // Streak broken
    saveData();
  }
}

function getLocalDateString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// ================= LEITNER LOGIC & STATS =================
function getDueWords() {
  const now = new Date();
  return state.words.filter(w => !w.nextReviewDate || new Date(w.nextReviewDate) <= now);
}

function updateLeitnerBoxProgress() {
  const drawersEl = document.getElementById('drawers');
  if (!drawersEl) return;

  // Get active unit filter
  const unitSelect = document.getElementById("dashboard-unit-select");
  const selectedUnitValue = unitSelect ? unitSelect.value : 'all';
  
  let pool = [...state.words];
  if (selectedUnitValue !== 'all') {
    const units = selectedUnitValue.split(',').map(Number);
    pool = pool.filter(w => units.includes(w.unit));
  }

  drawersEl.innerHTML = '';
  
  for (let box = 1; box <= 5; box++) {
    const boxWords = pool.filter(w => w.box === box);
    const dueCount = boxWords.filter(w => !w.nextReviewDate || new Date(w.nextReviewDate) <= new Date()).length;
    
    const div = document.createElement('div');
    div.className = 'drawer' + (dueCount > 0 ? ' has-due' : '') + (boxWords.length === 0 ? ' disabled' : '');
    div.innerHTML = `
      <div class="handle"></div>
      <div class="num">${box}-QUTI</div>
      <span class="count">${boxWords.length}</span>
      <div class="due">${dueCount > 0 ? dueCount + ' ta shay' : '&nbsp;'}</div>
    `;
    
    if (boxWords.length > 0) {
      div.addEventListener('click', () => {
        SoundEffects.init();
        startSession('box' + box);
      });
    }
    
    drawersEl.appendChild(div);
  }

  const total = state.words.length;
  const due = pool.filter(w => !w.nextReviewDate || new Date(w.nextReviewDate) <= new Date()).length;
  const mastered = state.words.filter(w => w.box === 5).length;
  
  // Update stats cards in UI if they exist
  const statTotalEl = document.getElementById('stat-total');
  const statDueEl = document.getElementById('stat-due');
  const statMasteredEl = document.getElementById('stat-mastered');
  
  if (statTotalEl) statTotalEl.textContent = total;
  if (statDueEl) statDueEl.textContent = due;
  if (statMasteredEl) statMasteredEl.textContent = mastered;

  // Sidebar navigation stats
  const navXpEl = document.getElementById("nav-xp");
  const navStreakEl = document.getElementById("nav-streak");
  const statsXpEl = document.getElementById("stats-xp");
  const statsStreakEl = document.getElementById("stats-streak");

  if (navXpEl) navXpEl.textContent = state.xp;
  if (navStreakEl) navStreakEl.textContent = `${state.streak} kun`;
  if (statsXpEl) statsXpEl.textContent = state.xp;
  if (statsStreakEl) statsStreakEl.textContent = state.streak;

  // Adjust mascot speech bubble text based on due count
  const mascotGreeting = due > 0 
    ? `Sandig'ingizda takrorlash uchun ${due} ta so'z tayyor! Tegishli qutini bosib, takrorlashni boshlang.`
    : `Ajoyib! Tanlangan mavzuda hozircha muddati kelgan so'zlar yo'q. Erkin mashqlar orqali shug'ullanishingiz mumkin!`;
  
  const textEl = document.getElementById("mascot-text");
  if (textEl && !session.active) {
    textEl.textContent = mascotGreeting;
  }
}

// ================= SPEECH SYNTHESIS HELPER =================
function speakWord(englishWord) {
  if ('speechSynthesis' in window) {
    // Cancel currently playing speech
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(englishWord);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // slightly slower for learners
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("Speech synthesis not supported in this browser.");
  }
}

// ================= NAVIGATION SYSTEM =================
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      SoundEffects.init(); // Initialize audio context on first click
      
      const targetPageId = item.getAttribute("data-target");
      switchPage(targetPageId);
      
      // Update active nav class
      navItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
}

function switchPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.classList.remove("active"));
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
    
    // Page specific triggers
    if (pageId === "dashboard-page") {
      updateDashboardMascot("neutral", getRandomGreeting());
      updateLeitnerBoxProgress();
    } else if (pageId === "vocab-page") {
      renderVocabList();
    }
  }
}

function getRandomGreeting() {
  const greetings = [
    "Salom! Bugun yangi so'zlarni yodlashga tayyormisiz? Qani, boshlaylik!",
    "Qalay ketyapti? Har kuni ozgina shug'ullanish katta natija beradi!",
    "Ingliz tili - kelajak tili. Keling, yana bir necha so'z o'rganamiz!",
    "Miya mashg'ulotlar uchun tayyor! Bugun qaysi mavzudan boshlaymiz?",
    "Ajoyib kun! Lug'at boyligimizni oshirishning ayni vaqti!"
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

// ================= LUG'AT (VOCABULARY) MANAGEMENT =================
let vocabSearchQuery = "";
let vocabBoxFilter = "all";

function initVocabControls() {
  const searchInput = document.getElementById("search-input");
  const boxFilter = document.getElementById("box-filter");
  const openAddBtn = document.getElementById("btn-open-add-modal");
  const closeAddBtn = document.getElementById("btn-close-modal");
  const cancelAddBtn = document.getElementById("btn-cancel-modal");
  const addForm = document.getElementById("add-word-form");
  const addModal = document.getElementById("add-word-modal");
  const unitSelect = document.getElementById("dashboard-unit-select");

  if (unitSelect) {
    unitSelect.addEventListener("change", () => {
      updateLeitnerBoxProgress();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      vocabSearchQuery = e.target.value.toLowerCase().trim();
      renderVocabList();
    });
  }

  if (boxFilter) {
    boxFilter.addEventListener("change", (e) => {
      vocabBoxFilter = e.target.value;
      renderVocabList();
    });
  }

  if (openAddBtn) {
    openAddBtn.addEventListener("click", () => {
      addModal.classList.add("active");
    });
  }

  const closeModalFunc = () => {
    addModal.classList.remove("active");
    addForm.reset();
  };

  if (closeAddBtn) closeAddBtn.addEventListener("click", closeModalFunc);
  if (cancelAddBtn) cancelAddBtn.addEventListener("click", closeModalFunc);

  if (addForm) {
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const en = document.getElementById("word-en").value.trim();
      const uz = document.getElementById("word-uz").value.trim();
      const example = document.getElementById("word-example").value.trim();

      if (en && uz) {
        const newWord = {
          id: "word_" + Date.now(),
          en: en,
          uz: uz,
          example: example,
          box: 1,
          nextReviewDate: new Date().toISOString()
        };
        state.words.unshift(newWord); // Add to beginning of list
        saveData();
        updateLeitnerBoxProgress();
        closeModalFunc();
        renderVocabList();
        
        // Show success alert
        alert(`"${en}" so'zi muvaffaqiyatli qo'shildi!`);
      }
    });
  }
}

function renderVocabList() {
  const listContainer = document.getElementById("vocab-grid-list");
  if (!listContainer) return;

  listContainer.innerHTML = "";

  const filteredWords = state.words.filter(w => {
    const matchesSearch = w.en.toLowerCase().includes(vocabSearchQuery) || w.uz.toLowerCase().includes(vocabSearchQuery);
    const matchesBox = vocabBoxFilter === "all" || w.box.toString() === vocabBoxFilter;
    return matchesSearch && matchesBox;
  });

  if (filteredWords.length === 0) {
    listContainer.innerHTML = `<div class="no-words-placeholder">Hech qanday so'z topilmadi.</div>`;
    return;
  }

  filteredWords.forEach(word => {
    const card = document.createElement("div");
    card.className = "vocab-word-card";
    
    // Draw Leitner level stars
    let levelDotsHTML = "";
    for (let i = 1; i <= 5; i++) {
      levelDotsHTML += `<span class="level-dot ${i <= word.box ? 'active' : ''}"></span>`;
    }

    const isSynonym = Array.isArray(word.synonyms) && word.synonyms.length > 1;
    const badgeHTML = isSynonym ? `<span style="background: rgba(28, 176, 246, 0.15); color: var(--secondary); font-size: 11px; padding: 2px 8px; border-radius: 8px; font-weight: 800; margin-left: 6px;">✨ Sinonimlar</span>` : '';

    card.innerHTML = `
      <div>
        <div class="card-top">
          <div class="card-en-word" data-en="${word.en}">
            <span>${word.en}</span> ${badgeHTML}
            <button class="speak-mini-btn" title="Talaffuz qilish">🔊</button>
          </div>
          <button class="btn-delete-word" data-id="${word.id}" title="So'zni o'chirish">🗑️</button>
        </div>
        <div class="card-uz-word">${word.uz}</div>
        ${word.example ? `<div class="card-example">"${word.example}"</div>` : ''}
      </div>
      <div class="card-footer-info">
        <div class="leitner-level-badge">
          ${levelDotsHTML}
        </div>
        <span class="box-number-badge">${word.box}-quti</span>
      </div>
    `;

    // Speak button
    const enWordEl = card.querySelector(".card-en-word");
    enWordEl.addEventListener("click", () => speakWord(word.en));

    // Delete button
    const delBtn = card.querySelector(".btn-delete-word");
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm(`"${word.en}" so'zini lug'atdan o'chirib tashlamoqchimisiz?`)) {
        state.words = state.words.filter(w => w.id !== word.id);
        saveData();
        updateLeitnerBoxProgress();
        renderVocabList();
      }
    });

    listContainer.appendChild(card);
  });
}

// ================= EXERCISE SESSION LOGIC =================
function initExerciseControls() {
  const btnStartDue = document.getElementById("btn-start-due");
  const btnStartAll = document.getElementById("btn-start-all");
  const btnExit = document.getElementById("btn-exit-exercise");
  const btnFooter = document.getElementById("btn-footer-action");
  const btnSummaryDone = document.getElementById("btn-summary-done");
  const btnFlashcardNo = document.getElementById("btn-flashcard-no");
  const btnFlashcardYes = document.getElementById("btn-flashcard-yes");

  if (btnStartDue) {
    btnStartDue.addEventListener("click", () => {
      SoundEffects.init();
      startSession('due');
    });
  }

  if (btnStartAll) {
    btnStartAll.addEventListener("click", () => {
      SoundEffects.init();
      startSession('all');
    });
  }

  if (btnExit) {
    btnExit.addEventListener("click", () => {
      if (confirm("Mashqni to'xtatib, chiqib ketmoqchimisiz? To'plangan XP saqlanmaydi.")) {
        exitSession();
      }
    });
  }

  if (btnFooter) {
    btnFooter.addEventListener("click", () => {
      handleFooterAction();
    });
  }

  if (btnSummaryDone) {
    btnSummaryDone.addEventListener("click", () => {
      exitSession();
    });
  }

  if (btnFlashcardNo) {
    btnFlashcardNo.addEventListener("click", () => {
      handleFlashcardAction(false);
    });
  }

  if (btnFlashcardYes) {
    btnFlashcardYes.addEventListener("click", () => {
      handleFlashcardAction(true);
    });
  }

  // Hook game mode cards on dashboard
  const miniStartBtns = document.querySelectorAll(".btn-mini-start");
  miniStartBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const mode = btn.getAttribute("data-mode");
      SoundEffects.init();
      startSession(mode);
    });
  });

  const modeCards = document.querySelectorAll(".game-mode-card");
  modeCards.forEach(card => {
    card.addEventListener("click", () => {
      const mode = card.getAttribute("data-mode");
      SoundEffects.init();
      startSession(mode);
    });
  });
}

function startSession(mode) {
  if (session.activeTimeout) {
    clearTimeout(session.activeTimeout);
    session.activeTimeout = null;
  }
  session.evaluating = false;

  session.mode = mode;
  session.currentIndex = 0;
  session.score = 0;
  session.xpEarned = 0;
  session.hearts = 5;
  session.selectedAnswer = null;
  session.typedAnswer = "";
  session.matchingState.selectedCard = null;
  session.matchingState.matchedCount = 0;

  // 1. Pick words based on selected Unit
  const unitSelect = document.getElementById("dashboard-unit-select");
  const selectedUnitValue = unitSelect ? unitSelect.value : 'all';
  
  // Filter active words database by selected unit
  let poolWords = [...state.words];
  if (selectedUnitValue !== 'all') {
    const units = selectedUnitValue.split(',').map(Number);
    poolWords = poolWords.filter(w => units.includes(w.unit));
  }

  let selectedWords = [];
  
  if (mode.startsWith('box')) {
    // Leitner Box Drawer Mode
    const targetBox = parseInt(mode.replace('box', ''));
    let boxPool = poolWords.filter(w => w.box === targetBox);
    
    if (boxPool.length === 0) {
      alert("Bu qutida so'zlar mavjud emas!");
      return;
    }
    
    // Always review all words in this box so they can practice infinitely!
    selectedWords = shuffleArray(boxPool);
  } else if (mode === 'due') {
    const due = poolWords.filter(w => !w.nextReviewDate || new Date(w.nextReviewDate) <= new Date());
    if (due.length === 0) {
      alert("Tanlangan Unit(lar) bo'yicha takrorlash uchun muddati kelgan so'zlar yo'q. Erkin mashq orqali shug'ullanishingiz mumkin!");
      return;
    }
    selectedWords = shuffleArray([...due]);
  } else {
    // All modes (Free Practice or specific games)
    if (poolWords.length === 0) {
      alert("Tanlangan Unitda so'zlar topilmadi!");
      return;
    }
    
    // Practice ALL words in the selected unit pool (no 10-word limit)
    selectedWords = shuffleArray([...poolWords]);
  }

  // 2. Generate questions. Box mode forces flashcard game
  const gameMode = mode.startsWith('box') ? 'flashcard' : mode;
  session.questions = generateQuestionsForWords(selectedWords, gameMode);
  session.totalUnique = selectedWords.length;

  // 3. Setup UI
  updateHeartsUI();
  updateProgressUI();
  document.getElementById("exercise-xp-count").textContent = 0;
  
  // Switch to exercise screen
  switchPage("exercise-page");
  renderCurrentQuestion();
}

function generateQuestionsForWords(wordsList, mode) {
  const generated = [];
  
  wordsList.forEach((word, idx) => {
    // Choose game type based on session mode
    let chosenType = 1;

    if (mode === 'due' || mode === 'all') {
      // Mixed practice
      let allowedTypes = [1, 2, 3, 4, 6, 8];
      if (word.example && word.example.toLowerCase().includes(word.en.toLowerCase())) {
        allowedTypes.push(7);
      }
      chosenType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
      if (idx === 4 || idx === 8) {
        chosenType = 5; // Matching game
      }
    } else {
      // Specific game mode
      if (mode === 'flashcard') {
        chosenType = 'flashcard';
      } else if (mode === 'choice') {
        chosenType = (idx % 2 === 0) ? 1 : 2;
      } else if (mode === 'typing') {
        const typingTypes = [3, 6, 8];
        chosenType = typingTypes[idx % typingTypes.length]; // alternate typing UZ->EN, listen, and typing EN->UZ
      } else if (mode === 'tiles') {
        chosenType = 4;
      } else if (mode === 'matching') {
        chosenType = 5;
      } else if (mode === 'blank') {
        chosenType = (word.example && word.example.toLowerCase().includes(word.en.toLowerCase())) ? 7 : 1;
      } else if (mode === 'listen') {
        chosenType = 6;
      }
    }

    const questionObj = {
      word: word,
      type: chosenType
    };

    const hasSynonyms = Array.isArray(word.synonyms) && word.synonyms.length > 1;

    if (chosenType === 'flashcard') {
      questionObj.promptText = hasSynonyms ? "So'zni eslang va aylantirib tekshiring (Sinonimlar):" : "So'zni eslang va aylantirib tekshiring:";
    }
    else if (chosenType === 1) {
      // Multiple Choice EN -> UZ
      let promptEn = word.en;
      if (hasSynonyms) {
        const synVar = idx % 3;
        if (synVar === 0) promptEn = word.synonyms.join(' / ');
        else if (synVar === 1) promptEn = word.synonyms[0];
        else promptEn = word.synonyms[1];
      }
      questionObj.promptText = `"${promptEn}" so'zining to'g'ri tarjimasini tanlang:`;
      questionObj.correctAnswer = word.uz;
      questionObj.options = generateOptions(word.uz, 'uz', wordsList);
    } 
    else if (chosenType === 2) {
      // Multiple Choice UZ -> EN
      if (hasSynonyms) {
        const synVar = idx % 2;
        if (synVar === 0) {
          questionObj.promptText = `"${word.uz}" so'zining ikkala inglizcha sinonimini tanlang:`;
          questionObj.correctAnswer = word.synonyms.join(', ');
        } else {
          questionObj.promptText = `"${word.uz}" so'zining to'g'ri inglizcha sinonimini tanlang:`;
          questionObj.correctAnswer = word.synonyms[idx % word.synonyms.length];
        }
      } else {
        questionObj.promptText = `"${word.uz}" so'zining to'g'ri inglizcha muqobilini tanlang:`;
        questionObj.correctAnswer = word.en;
      }
      questionObj.options = generateOptions(questionObj.correctAnswer, 'en', wordsList);
    }
    else if (chosenType === 3) {
      // Typing UZ -> EN
      if (hasSynonyms) {
        questionObj.promptText = `"${word.uz}" so'zining inglizcha sinonimini (${word.synonyms.join(' / ')}) yozing:`;
        questionObj.targetWord = word.uz;
        questionObj.correctAnswer = word.synonyms.join(', ');
      } else {
        questionObj.promptText = `Ushbu so'zning inglizcha tarjimasini yozing:`;
        questionObj.targetWord = word.uz;
        questionObj.correctAnswer = word.en;
      }
    }
    else if (chosenType === 4) {
      // Letter Tiles UZ -> EN
      let tileWord = word.en;
      if (hasSynonyms) {
        tileWord = word.synonyms[idx % word.synonyms.length];
        questionObj.promptText = `"${word.uz}" (${tileWord}) harflarini to'g'ri tartibda terib, so'zni hosil qiling:`;
      } else {
        questionObj.promptText = `Harflarni to'g'ri tartibda terib, so'zni hosil qiling:`;
      }
      questionObj.targetWord = word.uz;
      questionObj.correctAnswer = tileWord;
      // Scramble letters
      let letterList = tileWord.toLowerCase().replace(/[^a-z']/g, '').split('');
      questionObj.tiles = shuffleArray(letterList);
    }
    else if (chosenType === 5) {
      // Matching Game: needs 4 words. We fetch 3 other random words from wordsList
      const matchingWords = [word];
      const others = wordsList.filter(w => w.id !== word.id);
      const shuffledOthers = shuffleArray(others);
      for (let i = 0; i < Math.min(3, shuffledOthers.length); i++) {
        matchingWords.push(shuffledOthers[i]);
      }
      
      // Fallback if the unit pool has less than 4 words
      if (matchingWords.length < 4) {
        const globalOthers = state.words.filter(w => !matchingWords.map(mw => mw.id).includes(w.id));
        const shuffledGlobalOthers = shuffleArray(globalOthers);
        for (let i = 0; i < shuffledGlobalOthers.length && matchingWords.length < 4; i++) {
          matchingWords.push(shuffledGlobalOthers[i]);
        }
      }
      
      questionObj.promptText = "So'zlarni mos juftliklari bilan toping:";
      // matchingWords contains up to 4 words. We split into English cards and Uzbek cards
      questionObj.matchingPairs = matchingWords.map(w => ({ en: w.en, uz: w.uz }));
    }
    else if (chosenType === 6) {
      // Listen and Type EN
      let listenWord = word.en;
      if (hasSynonyms) {
        listenWord = word.synonyms[idx % word.synonyms.length];
      }
      questionObj.promptText = "Eshitgan so'zingizni yozing:";
      questionObj.correctAnswer = listenWord;
    }
    else if (chosenType === 7) {
      // Fill in the Blank
      questionObj.promptText = "Gapdagi bo'shliqni to'ldiring:";
      
      // Replace the word in the example sentence with a blank.
      const escapedWord = word.en.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
      
      questionObj.sentence = word.example.replace(regex, "_____");
      questionObj.correctAnswer = word.en;
      questionObj.options = generateOptions(word.en, 'en', wordsList);
    }
    else if (chosenType === 8) {
      // Typing EN -> UZ
      let promptEn = word.en;
      if (hasSynonyms) {
        const synVar = idx % 2;
        promptEn = (synVar === 0) ? word.synonyms.join(' / ') : word.synonyms[idx % word.synonyms.length];
      }
      questionObj.promptText = `"${promptEn}" so'zining o'zbekcha tarjimasini yozing:`;
      questionObj.targetWord = promptEn;
      questionObj.correctAnswer = word.uz;
    }

    generated.push(questionObj);
  });

  return generated;
}

// Generate 4 multiple choice options: 1 correct + 3 distractors
function generateOptions(correctVal, lang, pool = state.words) {
  const options = [correctVal];
  const list = pool.map(w => lang === 'uz' ? w.uz : w.en);
  const filtered = list.filter(item => item !== correctVal);
  const shuffled = shuffleArray([...new Set(filtered)]); // remove duplicates and shuffle
  
  for (let i = 0; i < Math.min(3, shuffled.length); i++) {
    options.push(shuffled[i]);
  }
  
  // Fallback if selected pool has less than 4 unique words
  if (options.length < 4) {
    const fallbackList = state.words.map(w => lang === 'uz' ? w.uz : w.en).filter(item => !options.includes(item));
    const fallbackShuffled = shuffleArray([...new Set(fallbackList)]);
    for (let i = 0; i < fallbackShuffled.length && options.length < 4; i++) {
      options.push(fallbackShuffled[i]);
    }
  }

  // If still not enough, pad with dummy options
  while (options.length < 4) {
    options.push(lang === 'uz' ? "tarjima_" + options.length : "word_" + options.length);
  }

  return shuffleArray(options);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function updateHeartsUI() {
  const container = document.getElementById("hearts-container");
  if (!container) return;
  
  container.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "❤️";
    if (i >= session.hearts) {
      heart.classList.add("lost");
    }
    container.appendChild(heart);
  }
}

function updateProgressUI() {
  const progressInner = document.getElementById("exercise-progress");
  if (progressInner) {
    let pct = 0;
    if (session.mode === 'flashcard' || session.mode.startsWith('box')) {
      const total = session.totalUnique || 1;
      pct = Math.round((session.score / total) * 100);
    } else {
      const total = session.questions.length || 1;
      pct = Math.round((session.currentIndex / total) * 100);
    }
    pct = Math.max(0, Math.min(100, pct));
    progressInner.style.width = `${pct}%`;
  }
}

function renderCurrentQuestion() {
  const wrapper = document.getElementById("question-wrapper");
  const btnFooter = document.getElementById("btn-footer-action");
  const footerMessage = document.getElementById("footer-message-area");
  const footer = document.getElementById("exercise-footer");
  const flashcardFooter = document.getElementById("flashcard-footer-buttons");

  if (!wrapper || !btnFooter) return;

  // Reset state variables
  session.selectedAnswer = null;
  session.typedAnswer = "";
  session.matchingState.selectedCard = null;
  session.matchingState.matchedCount = 0;
  session.evaluating = false;

  // Reset Footer to normal state
  btnFooter.disabled = true;
  btnFooter.innerHTML = `<span class="btn-content">Tekshirish</span>`;
  btnFooter.className = "btn btn-primary btn-3d btn-footer";
  
  const question = session.questions[session.currentIndex];

  if (question.type === 'flashcard') {
    btnFooter.style.display = "none";
    if (flashcardFooter) {
      flashcardFooter.style.display = "flex";
    }
  } else if (question.type === 1 || question.type === 2 || question.type === 5 || question.type === 7) {
    btnFooter.style.display = "none"; // Hide button initially for auto-checking modes
    if (flashcardFooter) {
      flashcardFooter.style.display = "none";
    }
  } else {
    btnFooter.style.display = "block"; // Show button for typing/tiles/listening
    if (flashcardFooter) {
      flashcardFooter.style.display = "none";
    }
  }

  footerMessage.innerHTML = "";
  footer.className = "exercise-footer";

  // Update mini cabinet box indicators at the top of the exercise page
  const miniCabinet = document.getElementById("exercise-mini-cabinet");
  if (miniCabinet) {
    if (session.mode === 'flashcard' || session.mode.startsWith('box')) {
      miniCabinet.style.display = 'flex';
      const miniBoxes = miniCabinet.querySelectorAll(".mini-box");
      miniBoxes.forEach(boxEl => {
        boxEl.classList.remove("active");
        if (question && question.word && parseInt(boxEl.getAttribute("data-box")) === question.word.box) {
          boxEl.classList.add("active");
        }
      });
    } else {
      miniCabinet.style.display = 'none';
    }
  }

  // Prompt Text
  let html = `<h3 class="question-prompt">${question.promptText}</h3>`;

  if (question.type === 'flashcard') {
    // --- Study Flashcard ---
    const word = question.word;
    html += `
      <div class="flashcard-wrapper">
        <div class="flashcard" id="flashcard-element">
          <div class="flashcard-front">
            <span class="flashcard-title">Inglizcha</span>
            <div class="flashcard-word">${word.en}</div>
            <div class="flashcard-hint">🔄 Aylantirish uchun bosing</div>
          </div>
          <div class="flashcard-back">
            <span class="flashcard-title">O'zbekcha tarjimasi</span>
            <div class="flashcard-word">${word.uz}</div>
            ${word.example ? `<div class="flashcard-example">"${word.example}"</div>` : ''}
            <div class="flashcard-hint">🔊 Talaffuz qilish</div>
          </div>
        </div>
      </div>
    `;

    wrapper.innerHTML = html;

    const flashcardEl = document.getElementById("flashcard-element");
    if (flashcardEl) {
      flashcardEl.addEventListener("click", () => {
        flashcardEl.classList.toggle("flipped");
        // Automatically speak on flip to back
        if (flashcardEl.classList.contains("flipped")) {
          speakWord(word.en);
        }
      });
    }
  }
  else if (question.type === 1 || question.type === 2) {
    // --- Multiple Choice Options ---
    html += `<div class="options-grid">`;
    question.options.forEach((opt, idx) => {
      html += `
        <button class="option-btn" data-option="${opt}">
          <span class="option-number">${idx + 1}</span>
          <span class="option-text">${opt}</span>
        </button>
      `;
    });
    html += `</div>`;

    wrapper.innerHTML = html;

    // Attach click listeners to option buttons
    const btns = wrapper.querySelectorAll(".option-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (session.evaluating) return;
        btns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        session.selectedAnswer = btn.getAttribute("data-option");
        
        // Immediately check and disable choices
        btns.forEach(b => b.disabled = true);
        checkAnswer();
      });
    });
  } 
  else if (question.type === 3 || question.type === 8) {
    // --- Typing Recall (UZ->EN or EN->UZ) ---
    html += `
      <div class="typing-wrapper">
        <div class="target-prompt-word">${question.targetWord}</div>
        <input type="text" class="typing-input" id="type-answer-input" autocomplete="off" autofocus placeholder="Javobingizni yozing...">
      </div>
    `;

    wrapper.innerHTML = html;

    const input = document.getElementById("type-answer-input");
    input.addEventListener("input", (e) => {
      session.typedAnswer = e.target.value;
      btnFooter.disabled = e.target.value.trim().length === 0;
    });

    // Handle Enter keypress for checking
    input.addEventListener("keypress", (e) => {
      if (e.key === 'Enter' && !btnFooter.disabled) {
        handleFooterAction();
      }
    });
  }
  else if (question.type === 4) {
    // --- Letter Tiles Game ---
    html += `
      <div class="tiles-question-area">
        <div class="target-prompt-word">${question.targetWord}</div>
        <div class="tiles-holder-line" id="tiles-holder"></div>
        <div class="tiles-container" id="tiles-pool"></div>
      </div>
    `;

    wrapper.innerHTML = html;

    const holder = document.getElementById("tiles-holder");
    const pool = document.getElementById("tiles-pool");

    // Populate scrambled letter tiles
    question.tiles.forEach((letter, idx) => {
      const tile = document.createElement("button");
      tile.className = "tile";
      tile.textContent = letter;
      tile.setAttribute("data-index", idx);
      
      tile.addEventListener("click", () => {
        if (session.evaluating) return;
        if (!tile.classList.contains("used")) {
          // Add to holder
          tile.classList.add("used");
          
          const placedTile = document.createElement("button");
          placedTile.className = "tile";
          placedTile.textContent = letter;
          placedTile.setAttribute("data-pool-index", idx);
          
          placedTile.addEventListener("click", () => {
            if (session.evaluating) return;
            // Remove from holder and restore in pool
            placedTile.remove();
            tile.classList.remove("used");
            
            // Check if holder is empty
            const currentAnswer = Array.from(holder.querySelectorAll(".tile")).map(t => t.textContent).join('');
            session.typedAnswer = currentAnswer;
            btnFooter.disabled = currentAnswer.length === 0;
          });

          holder.appendChild(placedTile);
          
          // Update selected answer
          const currentAnswer = Array.from(holder.querySelectorAll(".tile")).map(t => t.textContent).join('');
          session.typedAnswer = currentAnswer;
          btnFooter.disabled = false;
        }
      });

      pool.appendChild(tile);
    });
  }
  else if (question.type === 5) {
    // --- Matching Game ---
    // Make 8 cards: 4 English and 4 Uzbek
    const pairs = question.matchingPairs;
    const cards = [];
    pairs.forEach((pair, idx) => {
      cards.push({ id: `en_${idx}`, text: pair.en, type: 'en', pairIndex: idx });
      cards.push({ id: `uz_${idx}`, text: pair.uz, type: 'uz', pairIndex: idx });
    });

    const scrambledCards = shuffleArray(cards);

    html += `<div class="matching-grid" id="matching-cards-grid">`;
    scrambledCards.forEach(card => {
      html += `
        <button class="match-card" data-id="${card.id}" data-type="${card.type}" data-pair="${card.pairIndex}">
          ${card.text}
        </button>
      `;
    });
    html += `</div>`;

    wrapper.innerHTML = html;

    const cardElements = wrapper.querySelectorAll(".match-card");
    cardElements.forEach(card => {
      card.addEventListener("click", () => {
        if (session.evaluating) return;
        if (card.classList.contains("correct") || card.classList.contains("selected")) return;

        const sel = session.matchingState.selectedCard;

        if (!sel) {
          // First card selected
          card.classList.add("selected");
          session.matchingState.selectedCard = card;
        } else {
          // Second card selected. Check if it's opposite language
          const firstType = sel.getAttribute("data-type");
          const secondType = card.getAttribute("data-type");

          if (firstType !== secondType) {
            // Opposite types. Check if they form the correct pair
            const firstPairIdx = sel.getAttribute("data-pair");
            const secondPairIdx = card.getAttribute("data-pair");

            if (firstPairIdx === secondPairIdx) {
              // CORRECT MATCH!
              sel.classList.remove("selected");
              sel.classList.add("correct");
              card.classList.add("correct");
              session.matchingState.matchedCount++;
              
              // Soft correct sound beep
              SoundEffects.playTone(523.25, "sine", 0.05, SoundEffects.ctx ? SoundEffects.ctx.currentTime : 0);

              if (session.matchingState.matchedCount === pairs.length) {
                // Immediately check answer
                checkAnswer();
              }
            } else {
              // WRONG MATCH
              card.classList.add("wrong");
              sel.classList.add("wrong");
              
              // Soft wrong buzz
              SoundEffects.playTone(180, "sawtooth", 0.1, SoundEffects.ctx ? SoundEffects.ctx.currentTime : 0);

              // Delay to clear wrong style
              setTimeout(() => {
                card.classList.remove("wrong", "selected");
                sel.classList.remove("wrong", "selected");
              }, 400);
            }
            session.matchingState.selectedCard = null;
          } else {
            // Clicked same language. Change selection to this card
            sel.classList.remove("selected");
            card.classList.add("selected");
            session.matchingState.selectedCard = card;
          }
        }
      });
    });
  }
  else if (question.type === 6) {
    // --- Listen and Type ---
    html += `
      <div class="listen-wrapper">
        <button class="listen-btn" id="listen-voice-btn" title="So'zni eshitish">
          <span class="listen-btn-icon">🔊</span>
        </button>
        <input type="text" class="typing-input" id="type-answer-input" autocomplete="off" autofocus placeholder="Eshitganingizni yozing...">
      </div>
    `;

    wrapper.innerHTML = html;

    const voiceBtn = document.getElementById("listen-voice-btn");
    voiceBtn.addEventListener("click", () => {
      speakWord(question.correctAnswer);
    });

    // Auto speak immediately on loading listen page
    setTimeout(() => {
      speakWord(question.correctAnswer);
    }, 400);

    const input = document.getElementById("type-answer-input");
    input.addEventListener("input", (e) => {
      session.typedAnswer = e.target.value;
      btnFooter.disabled = e.target.value.trim().length === 0;
    });

    // Handle Enter
    input.addEventListener("keypress", (e) => {
      if (e.key === 'Enter' && !btnFooter.disabled) {
        handleFooterAction();
      }
    });
  }
  else if (question.type === 7) {
    // --- Fill in the Blank ---
    html += `
      <div class="blank-sentence-area">
        ${question.sentence}
      </div>
      <div class="options-grid">
    `;
    question.options.forEach((opt, idx) => {
      html += `
        <button class="option-btn" data-option="${opt}">
          <span class="option-number">${idx + 1}</span>
          <span class="option-text">${opt}</span>
        </button>
      `;
    });
    html += `</div>`;

    wrapper.innerHTML = html;

    // Attach click listeners to option buttons
    const btns = wrapper.querySelectorAll(".option-btn");
    const blankSpace = wrapper.querySelector(".blank-space");
    
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (session.evaluating) return;
        btns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        
        const ans = btn.getAttribute("data-option");
        session.selectedAnswer = ans;
        if (blankSpace) blankSpace.textContent = ans;
        
        // Immediately check and disable choices
        btns.forEach(b => b.disabled = true);
        checkAnswer();
      });
    });
  }
}

function handleFooterAction() {
  const btnFooter = document.getElementById("btn-footer-action");
  
  if (session.activeTimeout) {
    // If the timeout is already running, skip the wait and proceed immediately
    clearTimeout(session.activeTimeout);
    session.activeTimeout = null;
    
    session.currentIndex++;
    if (session.currentIndex >= session.questions.length) {
      finishSession();
    } else {
      updateProgressUI();
      renderCurrentQuestion();
    }
    return;
  }
  
  if (!session.evaluating) {
    checkAnswer();
  }
}

function handleFlashcardAction(isKnown) {
  const question = session.questions[session.currentIndex];
  if (!question) return;
  
  if (isKnown) {
    SoundEffects.playCorrect();
    session.score++;
    session.xpEarned += 10;
    document.getElementById("exercise-xp-count").textContent = session.xpEarned;
    
    // Update Leitner box: moves 1 box forward
    updateWordLeitner(question.word, true);
    
    // Advance index to remove from active loop
    session.currentIndex++;
  } else {
    SoundEffects.playWrong();
    // Keep in same box
    updateWordLeitner(question.word, false);
    
    // Push the current question back into the remaining list at a random index (min 3 questions later)
    const remainingCount = session.questions.length - (session.currentIndex + 1);
    const newQuestion = {
      word: question.word,
      type: 'flashcard',
      promptText: question.promptText
    };
    
    if (remainingCount > 3) {
      const insertRangeSize = session.questions.length - (session.currentIndex + 4) + 1;
      const insertOffset = Math.floor(Math.random() * insertRangeSize);
      const insertIndex = session.currentIndex + 4 + insertOffset;
      session.questions.splice(insertIndex, 0, newQuestion);
    } else {
      session.questions.push(newQuestion);
    }
    
    // Advance index so we display the next question in the queue
    session.currentIndex++;
  }

  // Check if we finished all questions (including re-queued ones)
  if (session.currentIndex >= session.questions.length) {
    finishSession();
  } else {
    updateProgressUI();
    renderCurrentQuestion();
  }
}

// Normalized compare for Uzbek text
function normalizeUzbek(str) {
  return str.toLowerCase()
    .trim()
    .replace(/o['‘`’ʻʼ´]/g, 'o')
    .replace(/g['‘`’ʻʼ´]/g, 'g')
    .replace(/['‘`’ʻʼ´]/g, '')
    .replace(/\s+/g, ' ');
}

// Normalized compare for English text
function normalizeEnglish(str) {
  return str.toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ');
}

function isEnglishMatch(userTyped, correctAnswer, wordObj) {
  const uNorm = normalizeEnglish(userTyped);
  const cNorm = normalizeEnglish(correctAnswer);
  if (uNorm === cNorm) return true;
  
  if (wordObj && wordObj.synonyms && Array.isArray(wordObj.synonyms)) {
    const synNorms = wordObj.synonyms.map(s => normalizeEnglish(s));
    if (synNorms.includes(uNorm)) return true;
    if (synNorms.every(s => uNorm.includes(s))) return true;
  }
  return false;
}

function checkAnswer() {
  const question = session.questions[session.currentIndex];
  let isCorrect = false;
  let correctExplanation = "";

  if (question.type === 1 || question.type === 2 || question.type === 7) {
    // Multiple Choice & Fill in the Blank
    isCorrect = (session.selectedAnswer.toLowerCase() === question.correctAnswer.toLowerCase());
    correctExplanation = question.correctAnswer;
  }
  else if (question.type === 3 || question.type === 6 || question.type === 8) {
    // Typing & Listen Type
    const userTyped = session.typedAnswer.toLowerCase().trim();
    const correctVal = question.correctAnswer.toLowerCase().trim();

    if (question.type === 6 || question.type === 3) {
      // English typing checks
      isCorrect = isEnglishMatch(userTyped, correctVal, question.word);
      correctExplanation = question.correctAnswer;
    } else {
      // Uzbek typing: can match multiple definitions separated by commas
      const userNorm = normalizeUzbek(userTyped);
      const correctDefs = correctVal.split(',').map(d => normalizeUzbek(d.trim()));
      isCorrect = correctDefs.some(def => userNorm === def || def.includes(userNorm) && userNorm.length > 3);
      correctExplanation = question.correctAnswer;
    }
  }
  else if (question.type === 4) {
    // Letter Tiles
    const userTiles = session.typedAnswer.toLowerCase().replace(/[^a-z']/g, '');
    const correctWord = question.correctAnswer.toLowerCase().replace(/[^a-z']/g, '');
    isCorrect = (userTiles === correctWord);
    correctExplanation = question.correctAnswer;
  }
  else if (question.type === 5) {
    // Matching game is always correct when you reach check stage
    isCorrect = true;
  }

  // Calculate Leitner update and session update
  const footerMessage = document.getElementById("footer-message-area");
  const footer = document.getElementById("exercise-footer");
  const btnFooter = document.getElementById("btn-footer-action");

  // Show correct/wrong card styles inside question block if possible
  // E.g., multiple choice selection turns green or red
  const selectedBtn = document.querySelector(".option-btn.selected");

  // Disable inputs and interactions during evaluation
  session.evaluating = true;
  btnFooter.disabled = false; // Make continue available
  btnFooter.innerHTML = `<span class="btn-content">Davom etish</span>`;
  btnFooter.style.display = "block"; // Show continue button for all evaluated questions
  btnFooter.className = isCorrect ? "btn btn-primary btn-3d btn-footer" : "btn btn-danger btn-3d btn-footer";

  const inputEl = document.getElementById("type-answer-input");
  if (inputEl) {
    inputEl.disabled = true;
    inputEl.blur();
  }
  const optionBtns = document.querySelectorAll(".option-btn");
  optionBtns.forEach(btn => btn.disabled = true);
  
  const matchCards = document.querySelectorAll(".match-card");
  matchCards.forEach(c => c.disabled = true);

  const tilesPool = document.getElementById("tiles-pool");
  if (tilesPool) {
    tilesPool.querySelectorAll(".tile").forEach(t => t.disabled = true);
  }
  const tilesHolder = document.getElementById("tiles-holder");
  if (tilesHolder) {
    tilesHolder.querySelectorAll(".tile").forEach(t => t.disabled = true);
  }

  if (isCorrect) {
    SoundEffects.playCorrect();
    footer.classList.add("correct-footer");
    
    let explanationHTML = `<p>Siz to'g'ri topdingiz!</p>`;
    if (question.word.example) {
      explanationHTML = `<p class="footer-msg-example">Misol: <strong>${question.word.example}</strong></p>`;
    }

    footerMessage.innerHTML = `
      <div class="message-icon">✓</div>
      <div class="message-details">
        <h4>Ajoyib!</h4>
        ${explanationHTML}
      </div>
    `;

    // Visual correct highlight on selection button
    if (selectedBtn) {
      selectedBtn.style.borderColor = "var(--primary)";
      selectedBtn.style.backgroundColor = "var(--success-bg)";
    }

    session.score++;
    session.xpEarned += 10;
    document.getElementById("exercise-xp-count").textContent = session.xpEarned;

    // Up Leitner Box for this word
    updateWordLeitner(question.word, true);

  } else {
    SoundEffects.playWrong();
    footer.classList.add("wrong-footer");
    footerMessage.innerHTML = `
      <div class="message-icon">✗</div>
      <div class="message-details">
        <h4>Xato!</h4>
        <p>To'g'ri javob: <strong>${correctExplanation}</strong></p>
      </div>
    `;

    // Visual wrong highlight on selection button
    if (selectedBtn) {
      selectedBtn.style.borderColor = "var(--danger)";
      selectedBtn.style.backgroundColor = "var(--danger-bg)";
    }

    // Highlight correct option as well to help them learn
    const correctBtn = Array.from(optionBtns).find(btn => btn.getAttribute("data-option") === question.correctAnswer);
    if (correctBtn) {
      correctBtn.style.borderColor = "var(--primary)";
      correctBtn.style.backgroundColor = "var(--success-bg)";
    }

    session.hearts--;
    updateHeartsUI();

    // Reset/Keep Leitner Box for this word
    updateWordLeitner(question.word, false);

    // Push the current question back into the remaining list at a random index (min 3 questions later)
    const remainingCount = session.questions.length - (session.currentIndex + 1);
    const newQuestion = { ...question };
    
    if (newQuestion.type === 4) {
      let letterList = newQuestion.word.en.toLowerCase().replace(/[^a-z']/g, '').split('');
      newQuestion.tiles = shuffleArray(letterList);
    }

    if (remainingCount > 3) {
      const insertRangeSize = session.questions.length - (session.currentIndex + 4) + 1;
      const insertOffset = Math.floor(Math.random() * insertRangeSize);
      const insertIndex = session.currentIndex + 4 + insertOffset;
      session.questions.splice(insertIndex, 0, newQuestion);
    } else {
      session.questions.push(newQuestion);
    }

    // Check if game over (hearts = 0)
    if (session.hearts <= 0) {
      if (session.activeTimeout) {
        clearTimeout(session.activeTimeout);
      }
      session.activeTimeout = setTimeout(() => {
        session.activeTimeout = null;
        showGameOver();
      }, 2000);
      return;
    }
  }

  // Auto-advance
  const delay = isCorrect ? 1200 : 2500;
  
  if (session.activeTimeout) {
    clearTimeout(session.activeTimeout);
  }
  
  session.activeTimeout = setTimeout(() => {
    session.activeTimeout = null;
    session.currentIndex++;
    if (session.currentIndex >= session.questions.length) {
      finishSession();
    } else {
      updateProgressUI();
      renderCurrentQuestion();
    }
  }, delay);
}

function updateWordLeitner(wordObj, isCorrect) {
  // Find in state words
  const idx = state.words.findIndex(w => w.id === wordObj.id);
  if (idx === -1) return;

  const w = state.words[idx];
  
  if (isCorrect) {
    // Increase box up to 5
    w.box = Math.min(5, (w.box || 1) + 1);
  } else {
    // Keep in same box, as requested by user
    w.box = w.box || 1;
  }

  // Calculate next review date based on box level
  // 1-box: 1 day, 2-box: 2 days, 3-box: 4 days, 4-box: 8 days, 5-box: 16 days
  const intervals = { 1: 1, 2: 2, 3: 4, 4: 8, 5: 16 };
  const addDaysCount = intervals[w.box] || 1;
  
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + addDaysCount);
  w.nextReviewDate = nextDate.toISOString();
  
  saveData();
}

function finishSession() {
  SoundEffects.playComplete();

  // Save progress (XP & Streak)
  state.xp += session.xpEarned;
  
  // Calculate Streak
  const todayStr = getLocalDateString(new Date());
  if (state.lastActiveDate === null) {
    state.streak = 1;
  } else {
    const yesterdayStr = getLocalDateString(new Date(Date.now() - 86400000));
    if (state.lastActiveDate === yesterdayStr) {
      state.streak += 1;
    } else if (state.lastActiveDate !== todayStr) {
      // Broken streak
      state.streak = 1;
    }
  }
  state.lastActiveDate = todayStr;
  saveData();
  updateLeitnerBoxProgress();

  // Show summary page
  showSummaryPage(false);
}

function showGameOver() {
  // Save whatever partial XP was earned
  state.xp += session.xpEarned;
  
  // Update last active even if failed to encourage them
  const todayStr = getLocalDateString(new Date());
  state.lastActiveDate = todayStr;
  saveData();
  updateLeitnerBoxProgress();

  showSummaryPage(true);
}

function showSummaryPage(isGameOver) {
  const title = document.getElementById("summary-title-text");
  const subtitle = document.getElementById("summary-motivation-text");
  const xpValue = document.getElementById("summary-xp");
  const accuracyValue = document.getElementById("summary-accuracy");
  const streakValue = document.getElementById("summary-streak");
  const mascotSvg = document.querySelector("#summary-page .mascot-svg");

  if (isGameOver) {
    if (title) title.textContent = "Jonlaringiz tugadi!";
    if (subtitle) subtitle.textContent = "Hafa bo'lmang, xatolar ustida ishlab, yana bir bor urinib ko'ring!";
    if (mascotSvg) {
      mascotSvg.className = "mascot-svg";
      // Render sad eyes
      mascotSvg.querySelector(".eyes").innerHTML = `
        <path d="M 68 92 Q 80 102 92 92" stroke="#1C1C1C" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M 108 92 Q 120 102 132 92" stroke="#1C1C1C" stroke-width="4" fill="none" stroke-linecap="round"/>
      `;
      mascotSvg.querySelector(".mouth").outerHTML = `<path class="mouth" d="M 90 130 Q 100 120 110 130" stroke="#1C1C1C" stroke-width="4" fill="none" stroke-linecap="round"/>`;
    }
  } else {
    if (title) title.textContent = "Ajoyib natija!";
    if (subtitle) subtitle.textContent = "Bugungi mashg'ulotni muvaffaqiyatli yakunladingiz!";
    if (mascotSvg) {
      mascotSvg.className = "mascot-svg celebrating";
      // Render happy eyes
      mascotSvg.querySelector(".eyes").innerHTML = `
        <path d="M 68 98 Q 80 88 92 98" stroke="#1C1C1C" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M 108 98 Q 120 88 132 98" stroke="#1C1C1C" stroke-width="5" fill="none" stroke-linecap="round"/>
      `;
      mascotSvg.querySelector(".mouth").outerHTML = `<path class="mouth" d="M 88 120 Q 100 140 112 120 Z" fill="#FF4B4B" stroke="#1C1C1C" stroke-width="3"/>`;
    }
    
    // Confetti animation triggers
    triggerConfetti();
  }

  if (xpValue) xpValue.textContent = `+${session.xpEarned} XP`;
  if (streakValue) streakValue.textContent = `${state.streak} kun`;
  
  const pct = Math.round((session.score / Math.max(1, session.currentIndex)) * 100);
  if (accuracyValue) accuracyValue.textContent = `${pct}%`;

  switchPage("summary-page");
}

function triggerConfetti() {
  const container = document.getElementById("confetti-container");
  if (!container) return;
  
  container.innerHTML = "";
  const colors = ["#58CC02", "#1CB0F6", "#FFC800", "#FF9600", "#FF4B4B"];
  
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * -20}px`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 2.5}s`;
    piece.style.transform = `scale(${Math.random() * 0.8 + 0.4})`;
    container.appendChild(piece);
  }
}

function exitSession() {
  if (session.activeTimeout) {
    clearTimeout(session.activeTimeout);
    session.activeTimeout = null;
  }
  session.evaluating = false;

  // Exit back to dashboard
  switchPage("dashboard-page");
  // Update sidebar active classes
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(i => {
    if (i.getAttribute("data-target") === "dashboard-page") {
      i.classList.add("active");
    } else {
      i.classList.remove("active");
    }
  });
}

// ================= APP INITIALIZATION =================
document.addEventListener("DOMContentLoaded", async () => {
  // 1. Load Data
  await loadData();

  // 2. Initialize modules
  initNavigation();
  initVocabControls();
  initExerciseControls();

  // 3. Render dashboard values
  updateLeitnerBoxProgress();
  updateDashboardMascot("neutral", getRandomGreeting());

  // Show dashboard
  switchPage("dashboard-page");
});
