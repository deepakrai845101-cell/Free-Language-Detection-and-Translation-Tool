/**
 * Language Detection, Origin & Translation Tool
 * Pure Vanilla JavaScript Implementation
 * India & USA Focus
 */

// Main Language Database
const languages = [
    // Indian Languages (22 Scheduled Languages)
    {
        id: "hi",
        name: "Hindi",
        keywords: ["है", "हो", "की", "के", "में", "यह", "वह", "एक", "से", "हैं"],
        countries: ["India", "Nepal", "Fiji", "Mauritius"],
        states: ["Uttar Pradesh", "Madhya Pradesh", "Bihar", "Rajasthan", "Delhi", "Haryana"],
        family: "Indo-Aryan",
        script: "Devanagari",
        speakers: "≈ 600 million",
        dictionary: {
            "नमस्ते": "Hello",
            "धन्यवाद": "Thank you",
            "कैसे": "How",
            "हैं": "Are",
            "आप": "You",
            "मैं": "I",
            "खुश": "Happy",
            "दिन": "Day",
            "शुभ": "Good",
            "रात्रि": "Night"
        }
    },
    {
        id: "bh",
        name: "Bhojpuri",
        keywords: ["हम", "तोहार", "बानी", "का", "रउआ", "कइल", "बा", "हई", "जी", "का हो"],
        countries: ["India", "Nepal", "Mauritius"],
        states: ["Bihar", "Uttar Pradesh", "Jharkhand"],
        family: "Indo-Aryan",
        script: "Devanagari",
        speakers: "≈ 50 million",
        dictionary: {
            "हम": "मैं",
            "तोहार": "तुम्हारा",
            "बानी": "हूँ",
            "का": "क्या",
            "रउआ": "तुम",
            "कइल": "किया",
            "बा": "है",
            "हई": "है",
            "नमस्कार": "नमस्ते",
            "धन्यबाद": "धन्यवाद"
        }
    },
    {
        id: "bn",
        name: "Bengali",
        keywords: ["আমি", "তুমি", "সে", "এবং", "কিন্তু", "হয়", "নয়", "একটি", "যে"],
        countries: ["India", "Bangladesh"],
        states: ["West Bengal", "Tripura", "Assam"],
        family: "Indo-Aryan",
        script: "Bengali",
        speakers: "≈ 230 million",
        dictionary: {
            "হ্যালো": "Hello",
            "ধন্যবাদ": "Thank you",
            "কেমন": "How",
            "আছেন": "Are",
            "আপনি": "You"
        }
    },
    {
        id: "ta",
        name: "Tamil",
        keywords: ["நான்", "நீ", "அவன்", "ஒரு", "மற்றும்", "ஆனால்", "இது", "அது"],
        countries: ["India", "Sri Lanka", "Singapore", "Malaysia"],
        states: ["Tamil Nadu", "Puducherry"],
        family: "Dravidian",
        script: "Tamil",
        speakers: "≈ 80 million",
        dictionary: {
            "வணக்கம்": "Hello",
            "நன்றி": "Thank you",
            "எப்படி": "How",
            "இருங்கள்": "Are",
            "நீங்கள்": "You"
        }
    },
    {
        id: "te",
        name: "Telugu",
        keywords: ["నేను", "నీవు", "అతను", "మరియు", "కానీ", "ఇది", "ఆ", "ఒక"],
        countries: ["India"],
        states: ["Andhra Pradesh", "Telangana"],
        family: "Dravidian",
        script: "Telugu",
        speakers: "≈ 85 million",
        dictionary: {
            "నమస్కారం": "Hello",
            "ధన్యవాదాలు": "Thank you",
            "ఎలా": "How",
            "ఉన్నారు": "Are",
            "మీరు": "You"
        }
    },
    {
        id: "mr",
        name: "Marathi",
        keywords: ["मी", "तू", "तो", "आणि", "पण", "होय", "नाही", "एक"],
        countries: ["India"],
        states: ["Maharashtra", "Goa"],
        family: "Indo-Aryan",
        script: "Devanagari",
        speakers: "≈ 95 million",
        dictionary: {
            "नमस्कार": "Hello",
            "धन्यवाद": "Thank you",
            "कसे": "How",
            "आहात": "Are",
            "तुम्ही": "You"
        }
    },
    {
        id: "ur",
        name: "Urdu",
        keywords: ["میں", "تم", "وہ", "اور", "لیکن", "ہے", "نہیں", "ایک"],
        countries: ["India", "Pakistan", "USA"],
        states: ["Uttar Pradesh", "Bihar", "Delhi", "Jammu and Kashmir"],
        family: "Indo-Aryan",
        script: "Arabic",
        speakers: "≈ 70 million",
        dictionary: {
            "سلام": "Hello",
            "شکریہ": "Thank you",
            "کیسے": "How",
            "ہیں": "Are",
            "آپ": "You"
        }
    },
    {
        id: "gu",
        name: "Gujarati",
        keywords: ["હું", "તું", "તે", "અને", "પણ", "છે", "નથી", "એક"],
        countries: ["India"],
        states: ["Gujarat", "Dadra and Nagar Haveli", "Daman and Diu"],
        family: "Indo-Aryan",
        script: "Gujarati",
        speakers: "≈ 60 million",
        dictionary: {
            "નમસ્તે": "Hello",
            "આભાર": "Thank you",
            "કેમ": "How",
            "છો": "Are",
            "તમે": "You"
        }
    },
    {
        id: "pa",
        name: "Punjabi",
        keywords: ["ਮੈਂ", "ਤੂੰ", "ਉਹ", "ਅਤੇ", "ਪਰ", "ਹੈ", "ਨਹੀਂ", "ਇੱਕ"],
        countries: ["India", "Pakistan"],
        states: ["Punjab", "Haryana", "Delhi"],
        family: "Indo-Aryan",
        script: "Gurmukhi",
        speakers: "≈ 125 million",
        dictionary: {
            "ਸਤ ਸ੍ਰੀ ਅਕਾਲ": "Hello",
            "ਧੰਨਵਾਦ": "Thank you",
            "ਕਿਵੇਂ": "How",
            "ਹੋ": "Are",
            "ਤੁਸੀਂ": "You"
        }
    },
    {
        id: "ml",
        name: "Malayalam",
        keywords: ["ഞാൻ", "നീ", "അവൻ", "ഒപ്പം", "പക്ഷേ", "ഇത്", "അത്", "ഒരു"],
        countries: ["India"],
        states: ["Kerala", "Lakshadweep", "Puducherry"],
        family: "Dravidian",
        script: "Malayalam",
        speakers: "≈ 38 million",
        dictionary: {
            "നമസ്കാരം": "Hello",
            "നന്ദി": "Thank you",
            "എങ്ങനെ": "How",
            "ആണ്": "Are",
            "നിങ്ങൾ": "You"
        }
    },
    {
        id: "kn",
        name: "Kannada",
        keywords: ["ನಾನು", "ನೀನು", "ಅವನು", "ಮತ್ತು", "ಆದರೆ", "ಇದು", "ಅದು", "ಒಂದು"],
        countries: ["India"],
        states: ["Karnataka"],
        family: "Dravidian",
        script: "Kannada",
        speakers: "≈ 50 million",
        dictionary: {
            "ನಮಸ್ಕಾರ": "Hello",
            "ಧನ್ಯವಾದ": "Thank you",
            "ಹೇಗೆ": "How",
            "ಇದ್ದೀರ": "Are",
            "ನೀವು": "You"
        }
    },
    {
        id: "or",
        name: "Odia",
        keywords: ["ମୁଁ", "ତୁ", "ସେ", "ଏବଂ", "କିନ୍ତୁ", "ଅଛି", "ନାହିଁ", "ଗୋଟିଏ"],
        countries: ["India"],
        states: ["Odisha"],
        family: "Indo-Aryan",
        script: "Odia",
        speakers: "≈ 35 million",
        dictionary: {
            "ନମସ୍କାର": "Hello",
            "ଧନ୍ୟବାଦ": "Thank you",
            "କିପରି": "How",
            "ଅଛନ୍ତି": "Are",
            "ଆପଣ": "You"
        }
    },
    {
        id: "as",
        name: "Assamese",
        keywords: ["মই", "তই", "সি", "আৰু", "কিন্তু", "আছে", "নাই", "এটা"],
        countries: ["India"],
        states: ["Assam"],
        family: "Indo-Aryan",
        script: "Bengali-Assamese",
        speakers: "≈ 15 million",
        dictionary: {
            "নমস্কাৰ": "Hello",
            "ধন্যবাদ": "Thank you",
            "কেমন": "How",
            "আছা": "Are",
            "আপুনি": "You"
        }
    },
    // Additional Indian languages with minimal data
    {
        id: "sa",
        name: "Sanskrit",
        keywords: ["अहम्", "त्वम्", "सः", "च", "परन्तु", "अस्ति", "न", "एकः"],
        countries: ["India"],
        states: ["Uttarakhand"],
        family: "Indo-Aryan",
        script: "Devanagari",
        speakers: "≈ 25,000",
        dictionary: {
            "नमस्ते": "Hello",
            "धन्यवादः": "Thank you"
        }
    },
    // USA Languages
    {
        id: "en",
        name: "English",
        keywords: ["the", "and", "is", "in", "to", "of", "that", "it", "with", "for"],
        countries: ["USA", "UK", "Canada", "Australia", "India", "Many others"],
        states: ["All states"],
        family: "Germanic",
        script: "Latin",
        speakers: "≈ 1.5 billion",
        dictionary: {
            "hello": "नमस्ते",
            "thank": "धन्यवाद",
            "how": "कैसे",
            "are": "हैं",
            "you": "आप",
            "good": "अच्छा",
            "morning": "सुबह",
            "night": "रात"
        }
    },
    {
        id: "es",
        name: "Spanish",
        keywords: ["el", "la", "de", "que", "y", "en", "un", "ser", "se", "no"],
        countries: ["USA", "Spain", "Mexico", "Argentina", "Many others"],
        states: ["California", "Texas", "Florida", "New York", "Arizona"],
        family: "Romance",
        script: "Latin",
        speakers: "≈ 580 million",
        dictionary: {
            "hola": "Hello",
            "gracias": "Thank you",
            "cómo": "How",
            "estás": "Are you",
            "bien": "Good",
            "día": "Day",
            "noche": "Night"
        }
    },
    {
        id: "fr",
        name: "French",
        keywords: ["le", "de", "un", "à", "être", "et", "en", "avoir", "que", "pour"],
        countries: ["USA", "France", "Canada", "Belgium", "Switzerland", "Many others"],
        states: ["Louisiana", "Maine", "Vermont", "New Hampshire"],
        family: "Romance",
        script: "Latin",
        speakers: "≈ 300 million",
        dictionary: {
            "bonjour": "Hello",
            "merci": "Thank you",
            "comment": "How",
            "allez-vous": "Are you",
            "bien": "Good",
            "jour": "Day",
            "nuit": "Night"
        }
    },
    {
        id: "zh",
        name: "Chinese",
        keywords: ["的", "了", "在", "是", "我", "有", "和", "就", "不", "人"],
        countries: ["USA", "China", "Taiwan", "Singapore", "Malaysia"],
        states: ["California", "New York", "Texas", "Washington"],
        family: "Sino-Tibetan",
        script: "Han",
        speakers: "≈ 1.3 billion",
        dictionary: {
            "你好": "Hello",
            "谢谢": "Thank you",
            "怎么": "How",
            "吗": "Question particle",
            "好": "Good"
        }
    },
    {
        id: "ar",
        name: "Arabic",
        keywords: ["ال", "في", "من", "على", "أن", "هو", "هي", "مع", "ما", "إذا"],
        countries: ["USA", "Egypt", "Saudi Arabia", "UAE", "Many others"],
        states: ["Michigan", "Illinois", "Texas", "California", "New York"],
        family: "Afro-Asiatic",
        script: "Arabic",
        speakers: "≈ 310 million",
        dictionary: {
            "مرحبا": "Hello",
            "شكرا": "Thank you",
            "كيف": "How",
            "حال": "Condition",
            "أنت": "You"
        }
    },
    {
        id: "ru",
        name: "Russian",
        keywords: ["и", "в", "не", "он", "на", "я", "что", "тот", "быть", "с"],
        countries: ["USA", "Russia", "Ukraine", "Belarus", "Kazakhstan"],
        states: ["New York", "California", "Washington", "Illinois"],
        family: "Indo-European",
        script: "Cyrillic",
        speakers: "≈ 260 million",
        dictionary: {
            "привет": "Hello",
            "спасибо": "Thank you",
            "как": "How",
            "дела": "Things",
            "ты": "You"
        }
    }
];

// Script Detection Ranges (Unicode)
const scriptRanges = {
    "Devanagari": [/[\u0900-\u097F]/g, "Hindi, Bhojpuri, Marathi, Sanskrit"],
    "Bengali": [/[\u0980-\u09FF]/g, "Bengali, Assamese"],
    "Tamil": [/[\u0B80-\u0BFF]/g, "Tamil"],
    "Telugu": [/[\u0C00-\u0C7F]/g, "Telugu"],
    "Gujarati": [/[\u0A80-\u0AFF]/g, "Gujarati"],
    "Gurmukhi": [/[\u0A00-\u0A7F]/g, "Punjabi"],
    "Malayalam": [/[\u0D00-\u0D7F]/g, "Malayalam"],
    "Kannada": [/[\u0C80-\u0CFF]/g, "Kannada"],
    "Odia": [/[\u0B00-\u0B7F]/g, "Odia"],
    "Arabic": [/[\u0600-\u06FF]/g, "Arabic, Urdu, Persian"],
    "Cyrillic": [/[\u0400-\u04FF]/g, "Russian, Ukrainian, Bulgarian"],
    "Han": [/[\u4E00-\u9FFF]/g, "Chinese, Japanese Kanji"],
    "Latin": [/[a-zA-Z]/g, "English, Spanish, French, German"],
    "Greek": [/[\u0370-\u03FF]/g, "Greek"],
    "Hebrew": [/[\u0590-\u05FF]/g, "Hebrew"]
};

// DOM Elements
let detectionInput, detectBtn, detectionResult, resultDetails;
let translationInput, translationOutput, sourceLanguage, targetLanguage, translateBtn, clearTranslationBtn, swapLanguagesBtn;
let languageSelect, explorerResult, explorerDetails;
let mobileMenuBtn, navMobile, faqQuestions;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    initializeDOMElements();
    
    // Setup event listeners
    setupEventListeners();
    
    // Populate dropdowns
    populateLanguageDropdowns();
    
    // Initialize FAQ functionality
    initFAQ();
});

function initializeDOMElements() {
    // Detection Tool
    detectionInput = document.getElementById('detectionInput');
    detectBtn = document.getElementById('detectBtn');
    detectionResult = document.getElementById('detectionResult');
    resultDetails = document.getElementById('resultDetails');
    
    // Translation Tool
    translationInput = document.getElementById('translationInput');
    translationOutput = document.getElementById('translationOutput');
    sourceLanguage = document.getElementById('sourceLanguage');
    targetLanguage = document.getElementById('targetLanguage');
    translateBtn = document.getElementById('translateBtn');
    clearTranslationBtn = document.getElementById('clearTranslationBtn');
    swapLanguagesBtn = document.getElementById('swapLanguages');
    
    // Explorer Tool
    languageSelect = document.getElementById('languageSelect');
    explorerResult = document.getElementById('explorerResult');
    explorerDetails = document.getElementById('explorerDetails');
    
    // Mobile Navigation
    mobileMenuBtn = document.getElementById('mobileMenuBtn');
    navMobile = document.getElementById('navMobile');
    
    // FAQ Elements
    faqQuestions = document.querySelectorAll('.faq-question');
}

function setupEventListeners() {
    // Detection Tool
    detectBtn.addEventListener('click', detectLanguage);
    
    // Translation Tool
    translateBtn.addEventListener('click', translateText);
    clearTranslationBtn.addEventListener('click', clearTranslation);
    swapLanguagesBtn.addEventListener('click', swapLanguages);
    
    // Explorer Tool
    languageSelect.addEventListener('change', showLanguageInfo);
    
    // Mobile Navigation
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.header-container') && !event.target.closest('.nav-mobile')) {
            navMobile.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navMobile.classList.remove('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function populateLanguageDropdowns() {
    // Populate source language dropdown (for translation)
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.id;
        option.textContent = lang.name;
        sourceLanguage.appendChild(option);
    });
    
    // Add auto-detect option at the beginning
    const autoOption = document.createElement('option');
    autoOption.value = "auto";
    autoOption.textContent = "Auto Detect";
    sourceLanguage.insertBefore(autoOption, sourceLanguage.firstChild);
    
    // Populate language explorer dropdown
    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang.id;
        option.textContent = lang.name;
        languageSelect.appendChild(option);
    });
}

// Language Detection Logic
function detectLanguage() {
    const text = detectionInput.value.trim();
    
    if (!text) {
        showDetectionResult(null, "Please enter some text to detect language.");
        return;
    }
    
    // Method 1: Keyword matching (primary)
    const detectedByKeywords = detectByKeywords(text);
    
    // Method 2: Script detection (secondary)
    const detectedByScript = detectByScript(text);
    
    // Combine results - prioritize keyword matching
    let detectedLang = detectedByKeywords;
    
    // If keyword matching failed, try script detection
    if (!detectedLang && detectedByScript) {
        detectedLang = detectedByScript;
    }
    
    // If still no detection, show fallback message
    if (!detectedLang) {
        showDetectionResult(null, "Language could not be detected with confidence. Try providing more text or check if the language is in our database.");
        return;
    }
    
    // Show the detection result
    showDetectionResult(detectedLang);
}

function detectByKeywords(text) {
    let bestMatch = null;
    let highestScore = 0;
    
    languages.forEach(lang => {
        let score = 0;
        const lowerText = text.toLowerCase();
        
        // Check for each keyword in the text
        lang.keywords.forEach(keyword => {
            if (lowerText.includes(keyword.toLowerCase())) {
                score++;
            }
        });
        
        // Additional weight for longer keywords
        lang.keywords.forEach(keyword => {
            if (keyword.length > 3 && lowerText.includes(keyword.toLowerCase())) {
                score += 0.5;
            }
        });
        
        // Normalize score by text length (to avoid bias for longer texts)
        const normalizedScore = score / Math.min(text.length / 10, 1);
        
        if (normalizedScore > highestScore) {
            highestScore = normalizedScore;
            bestMatch = lang;
        }
    });
    
    // Require a minimum score to consider it a match
    return highestScore >= 0.5 ? bestMatch : null;
}

function detectByScript(text) {
    for (const [scriptName, [regex, description]] of Object.entries(scriptRanges)) {
        if (regex.test(text)) {
            // Find a language that uses this script
            for (const lang of languages) {
                if (lang.script === scriptName) {
                    return lang;
                }
            }
            
            // If no exact match, return a generic language based on script
            return {
                name: `Language using ${scriptName} script`,
                countries: ["Multiple countries"],
                states: ["Various regions"],
                family: "Detected by script",
                script: scriptName
            };
        }
    }
    
    return null;
}

function showDetectionResult(lang, errorMessage = null) {
    const placeholder = detectionResult.querySelector('.result-placeholder');
    const detailsDiv = detectionResult.querySelector('.result-details');
    
    if (errorMessage || !lang) {
        placeholder.innerHTML = `<p>${errorMessage}</p>`;
        placeholder.style.display = 'block';
        detailsDiv.style.display = 'none';
        return;
    }
    
    // Hide placeholder, show details
    placeholder.style.display = 'none';
    detailsDiv.style.display = 'block';
    
    // Populate the result fields
    document.getElementById('resultLanguage').textContent = lang.name;
    document.getElementById('resultCountries').textContent = Array.isArray(lang.countries) ? lang.countries.join(', ') : lang.countries;
    document.getElementById('resultStates').textContent = Array.isArray(lang.states) ? lang.states.join(', ') : lang.states;
    document.getElementById('resultFamily').textContent = lang.family;
    document.getElementById('resultScript').textContent = lang.script;
    
    // Scroll to results for better UX
    detectionResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Translation Logic
function translateText() {
    const text = translationInput.value.trim();
    
    if (!text) {
        translationOutput.value = "Please enter text to translate.";
        return;
    }
    
    let sourceLangId = sourceLanguage.value;
    
    // If auto-detect is selected, try to detect the language
    if (sourceLangId === "auto") {
        const detected = detectByKeywords(text) || detectByScript(text);
        if (detected && detected.id) {
            sourceLangId = detected.id;
            // Update the dropdown to show what was detected
            sourceLanguage.value = sourceLangId;
        } else {
            translationOutput.value = "Could not auto-detect source language. Please select manually.";
            return;
        }
    }
    
    const targetLangId = targetLanguage.value;
    
    // Check if translation is supported for this pair
    if (!isTranslationSupported(sourceLangId, targetLangId)) {
        translationOutput.value = `Translation from ${getLangName(sourceLangId)} to ${getLangName(targetLangId)} is not supported. Please try a different pair.`;
        return;
    }
    
    // Perform translation
    const translatedText = performTranslation(text, sourceLangId, targetLangId);
    translationOutput.value = translatedText;
}

function isTranslationSupported(sourceId, targetId) {
    // Define supported translation pairs
    const supportedPairs = [
        ['hi', 'en'], ['en', 'hi'], // Hindi ↔ English
        ['bh', 'hi'], ['hi', 'bh'], // Bhojpuri ↔ Hindi
        ['es', 'en'], ['en', 'es'], // Spanish ↔ English
        ['fr', 'en'], ['en', 'fr']  // French ↔ English
    ];
    
    return supportedPairs.some(pair => 
        (pair[0] === sourceId && pair[1] === targetId)
    );
}

function getLangName(langId) {
    const lang = languages.find(l => l.id === langId);
    return lang ? lang.name : langId;
}

function performTranslation(text, sourceId, targetId) {
    const sourceLang = languages.find(l => l.id === sourceId);
    const targetLang = languages.find(l => l.id === targetId);
    
    if (!sourceLang || !targetLang || !sourceLang.dictionary || !targetLang.dictionary) {
        return "Translation dictionary not available for this language pair.";
    }
    
    // For this basic implementation, we do simple word-by-word translation
    // Split text into words
    const words = text.split(/\s+/);
    let translatedWords = [];
    
    // Special case: If translating between Hindi and Bhojpuri
    if ((sourceId === 'hi' && targetId === 'bh') || (sourceId === 'bh' && targetId === 'hi')) {
        return translateHindiBhojpuri(text, sourceId, targetId);
    }
    
    // For other pairs, do simple word lookup
    words.forEach(word => {
        const cleanWord = word.replace(/[.,!?;:()"]/g, '').toLowerCase();
        
        // Try to find the word in the dictionary
        let translatedWord = word; // Default to original word
        
        if (sourceLang.dictionary[cleanWord]) {
            // If we have a direct translation
            translatedWord = sourceLang.dictionary[cleanWord];
        } else if (targetLang.dictionary) {
            // For reverse lookup (if translating to English)
            if (targetId === 'en') {
                // Find English word for the source word
                for (const [key, value] of Object.entries(sourceLang.dictionary)) {
                    if (value.toLowerCase() === cleanWord) {
                        translatedWord = key;
                        break;
                    }
                }
            }
        }
        
        // Preserve original capitalization for proper nouns
        if (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
            translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
        }
        
        translatedWords.push(translatedWord);
    });
    
    return translatedWords.join(' ');
}

function translateHindiBhojpuri(text, sourceId, targetId) {
    // Special dictionary for Hindi-Bhojpuri translations
    const hindiBhojpuriDict = {
        // Hindi to Bhojpuri
        'मैं': 'हम',
        'तुम्हारा': 'तोहार',
        'हूँ': 'बानी',
        'क्या': 'का',
        'तुम': 'रउआ',
        'किया': 'कइल',
        'है': 'बा',
        'नमस्ते': 'नमस्कार',
        'धन्यवाद': 'धन्यबाद',
        
        // Bhojpuri to Hindi (reverse)
        'हम': 'मैं',
        'तोहार': 'तुम्हारा',
        'बानी': 'हूँ',
        'का': 'क्या',
        'रउआ': 'तुम',
        'कइल': 'किया',
        'बा': 'है',
        'नमस्कार': 'नमस्ते',
        'धन्यबाद': 'धन्यवाद'
    };
    
    const words = text.split(/\s+/);
    const translatedWords = words.map(word => {
        const cleanWord = word.replace(/[.,!?;:()"]/g, '');
        
        if (hindiBhojpuriDict[cleanWord]) {
            let translatedWord = hindiBhojpuriDict[cleanWord];
            
            // Preserve original capitalization
            if (word[0] === word[0].toUpperCase()) {
                translatedWord = translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
            }
            
            return translatedWord;
        }
        
        return word;
    });
    
    return translatedWords.join(' ');
}

function clearTranslation() {
    translationInput.value = '';
    translationOutput.value = '';
}

function swapLanguages() {
    const sourceValue = sourceLanguage.value;
    const targetValue = targetLanguage.value;
    
    // Don't swap if auto-detect is selected
    if (sourceValue === "auto") {
        alert("Cannot swap when Auto Detect is selected. Please choose a specific source language.");
        return;
    }
    
    // Swap the values
    sourceLanguage.value = targetValue;
    targetLanguage.value = sourceValue;
    
    // Also swap the text in the boxes
    const tempText = translationInput.value;
    translationInput.value = translationOutput.value;
    translationOutput.value = tempText;
}

// Language Explorer Logic
function showLanguageInfo() {
    const langId = languageSelect.value;
    
    if (!langId) {
        const placeholder = explorerResult.querySelector('.result-placeholder');
        placeholder.innerHTML = '<p>Select a language from the dropdown to view detailed information.</p>';
        placeholder.style.display = 'block';
        explorerDetails.style.display = 'none';
        return;
    }
    
    const lang = languages.find(l => l.id === langId);
    
    if (!lang) {
        const placeholder = explorerResult.querySelector('.result-placeholder');
        placeholder.innerHTML = '<p>Language information not found.</p>';
        placeholder.style.display = 'block';
        explorerDetails.style.display = 'none';
        return;
    }
    
    // Hide placeholder, show details
    const placeholder = explorerResult.querySelector('.result-placeholder');
    placeholder.style.display = 'none';
    explorerDetails.style.display = 'block';
    
    // Populate the explorer fields
    document.getElementById('explorerLanguage').textContent = lang.name;
    document.getElementById('explorerCountries').textContent = Array.isArray(lang.countries) ? lang.countries.join(', ') : lang.countries;
    document.getElementById('explorerStates').textContent = Array.isArray(lang.states) ? lang.states.join(', ') : lang.states;
    document.getElementById('explorerSpeakers').textContent = lang.speakers || 'Data not available';
    document.getElementById('explorerScript').textContent = lang.script;
    document.getElementById('explorerFamily').textContent = lang.family;
}

// Mobile Navigation
function toggleMobileMenu() {
    navMobile.classList.toggle('active');
}

// FAQ Functionality
function initFAQ() {
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
}

// Utility function to get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check for URL parameters on load (for deep linking)
window.addEventListener('load', function() {
    const toolParam = getUrlParameter('tool');
    if (toolParam === 'detect') {
        document.querySelector('#detection').scrollIntoView();
    } else if (toolParam === 'translate') {
        document.querySelector('#translation').scrollIntoView();
    }
});
