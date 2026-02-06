// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Liya :)",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Python Übung",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['6️⃣', '7️⃣', '💐', '❤️', '💙'],  // Heart emojis
        bears: ['6️⃣', '7️⃣', '💐', '❤️', '💙']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Willst du dich wieder treffen?🤨🧐",                                    // First interaction
            yesBtn: "Joa why not",                                             // Text for "Yes" button
            noBtn: "Ne lass mal",                                               // Text for "No" button
            secretAnswer: "YESSSS UNBEDINGT!!!"           // Secret hover message
        },
        second: {
            text: "Wie sehr hast du Lust dich zu treffen🥸?",                          // For the love meter
            startText: "Hmm, da muss man bissi überlegen...",                                   // Text before the percentage
            nextBtn: "Drück auf mich"                                         // Text for the next button
        },
        third: {
            text: "Willst du mein Valentinstagsdate sein? 🌹", // The big question!
            yesBtn: "Jaaa!!!",                                             // Text for "Yes" button
            noBtn: "Ne diggi :/"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "YEAHHHH ICH KANN NICHT WARTENNN!! 🥳🥰🔥🚀",  // Shows when they go past 5000%
        high: "'M READDYYY 🔥🔥",              // Shows when they go past 1000%
        normal: "Yessirrr, lass was machen ☺️🤭"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Ich freu mich schon, dich wieder zu sehen!!!🤩",
        message: "Der 14.02.2026 it is, ansonsten können wir natürlich auch vor-/nachfeiern :)",
        emojis: "🥳🎊🙌"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#0D1A63",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#740A03",        // Gradient end (should complement backgroundStart)
        buttonBackground: "8A244B",     // Button color (should stand out against the background)
        buttonHover: "D02752",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#000000"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
