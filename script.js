// Function to populate the list of 114 Surahs with their details
function loadSurahs() {
    const surahs = [
        { name: "Al-Fatihah", place: "Makkah", ayah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
        { name: "Al-Baqarah", place: "Madina", ayah: "الٓمٓ" },
        { name: "Al-Imran", place: "Madina", ayah: "الٓمٓ" },
        { name: "An-Nisa", place: "Madina", ayah: "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ" },
        { name: "Al-Ma'idah", place: "Madina", ayah: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ" },
        { name: "Al-An'am", place: "Makkah", ayah: "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ" },
        { name: "Al-A'raf", place: "Makkah", ayah: "الٓمٓصٓ" },
        { name: "Al-Anfal", place: "Madina", ayah: "يَسْأَلُونَكَ عَنِ الْأَنفَالِ" },
        { name: "At-Tawbah", place: "Madina", ayah: "بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ" },
        { name: "Yunus", place: "Makkah", ayah: "الرٓ" },
        { name: "Hud", place: "Makkah", ayah: "الرٓ كِتَابٌ أُحْكِمَتْ آيَاتُهُ" },
        { name: "Yusuf", place: "Makkah", ayah: "الرٓ تِلْكَ آيَاتُ الْكِتَابِ" },
        { name: "Ar-Ra'd", place: "Madina", ayah: "الٓمٓرَ" },
        { name: "Ibrahim", place: "Makkah", ayah: "الٓرَ كِتَابٌ أَنْزَلْنَاهُ" },
        { name: "Al-Hijr", place: "Makkah", ayah: "الرٓ تِلْكَ آيَاتُ الْكِتَابِ" },
        { name: "An-Nahl", place: "Makkah", ayah: "أَتَى أَمْرُ اللَّهِ فَلَا تَسْتَعْجِلُوهُ" },
        { name: "Al-Isra", place: "Makkah", ayah: "سُبْحَانَ الَّذِي أَسْرَى" },
        { name: "Al-Kahf", place: "Makkah", ayah: "الْحَمْدُ لِلَّهِ الَّذِي أَنْزَلَ" },
        { name: "Maryam", place: "Makkah", ayah: "كٓهيعٓصٓ" },
        { name: "Taha", place: "Makkah", ayah: "طه" },
        // ... Add more Surahs to complete the list
        { name: "An-Nas", place: "Madina", ayah: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ" }
    ];
    const surahsListElement = document.getElementById("surahs-list");
    surahs.forEach(surah => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${surah.name}</strong> (${surah.place}) - <span class="arabic">${surah.ayah}</span>`;
        surahsListElement.appendChild(listItem);
    });
}

// Function to populate the list of 50 Miracles of the Qur'an
function loadMiracles() {
    const miracles = [
        "The miracle of the moon splitting",
        "The preservation of the Qur'an",
        "The Qur'an's challenge to produce a chapter like it",
        "The linguistic excellence of the Qur'an",
        "The Qur'an's scientific insights",
        "The protection against corruption and alteration",
        "The impact on the hearts of believers and non-believers",
        "The prophecies in the Qur'an that have come true",
        "The Qur'an's guidance for all aspects of life",
        "The miracle of the night journey (Isra and Mi'raj)",
        "The Qur'an's effect on its reciters and listeners",
        "The miraculous preservation of its original text",
        "The consistency of the Qur'an despite being revealed over 23 years",
        "The Qur'an's description of embryological development",
        "The knowledge of the unknown provided by the Qur'an",
        "The Qur'an's references to natural phenomena",
        "The Qur'an's description of historical events",
        "The transformative power of the Qur'an on societies",
        "The Qur'an's description of human psychology",
        "The healing power of the Qur'an",
        // ... Add more miracles up to 50
        "The Qur'an's description of the water cycle"
    ];
    const miraclesListElement = document.getElementById("miracles-list");
    miracles.forEach(miracle => {
        const listItem = document.createElement("li");
        listItem.textContent = miracle;
        miraclesListElement.appendChild(listItem);
    });
}

// Function to populate the list of 50 Blessings of the Qur'an
function loadBlessings() {
    const blessings = [
        "Guidance for humanity",
        "Peace and tranquility",
        "Healing for the heart",
        "Wisdom and understanding",
        "Protection from evil",
        "Spiritual growth and development",
        "Closeness to Allah",
        "Forgiveness of sins",
        "Increase in knowledge",
        "Remembrance of Allah",
        "Protection from Hellfire",
        "Increase in faith",
        "Protection on the Day of Judgment",
        "Contentment and patience",
        "Rescue from distress",
        "Increase in good deeds",
        "Encouragement for justice and fairness",
        "Reward in the Hereafter",
        "Assurance of Paradise",
        "Protection against the devil",
        // ... Add more blessings up to 50
        "Guidance towards moral conduct"
    ];
    const blessingsListElement = document.getElementById("blessings-list");
    blessings.forEach(blessing => {
        const listItem = document.createElement("li");
        listItem.textContent = blessing;
        blessingsListElement.appendChild(listItem);
    });
}

// Function to populate the list of 50 Shifa (healing) verses
function loadShifaVerses() {
    const shifaVerses = [
        { verse: "Surah Al-Fatihah (1:1-7)", instructions: "Recite for general healing and protection." },
        { verse: "Surah Al-Baqarah (2:255)", instructions: "Recite Ayat-ul-Kursi for protection against evil." },
        { verse: "Surah Al-Baqarah (2:286)", instructions: "Recite for relief from anxiety and stress." },
        { verse: "Surah Al-Imran (3:8)", instructions: "Recite to seek steadfastness in faith." },
        { verse: "Surah Al-Imran (3:26-27)", instructions: "Recite for gaining power and sustenance." },
        { verse: "Surah An-Nisa (4:103)", instructions: "Recite for maintaining prayers." },
        { verse: "Surah Al-Maidah (5:3)", instructions: "Recite for clarity and insight." },
        { verse: "Surah Al-An'am (6:162-163)", instructions: "Recite for sincerity in worship." },
        { verse: "Surah Al-A'raf (7:54)", instructions: "Recite for understanding the greatness of Allah." },
        { verse: "Surah Al-Anfal (8:2-4)", instructions: "Recite for humility and devotion." },
        { verse: "Surah Yunus (10:57)", instructions: "Recite for healing of the heart." },
        { verse: "Surah Yusuf (12:86)", instructions: "Recite for patience in adversity." },
        { verse: "Surah Ar-Ra'd (13:28)", instructions: "Recite for tranquility and peace." },
        { verse: "Surah Ibrahim (14:41)", instructions: "Recite for forgiveness." },
        { verse: "Surah Al-Hijr (15:9)", instructions: "Recite for protection of the Qur'an." },
        { verse: "Surah Al-Isra (17:82)", instructions: "Recite for healing and mercy." },
        { verse: "Surah Al-Kahf (18:10)", instructions: "Recite for protection from trials." },
        { verse: "Surah Maryam (19:9)", instructions: "Recite for miraculous healing and strength." },
        { verse: "Surah Taha (20:25-28)", instructions: "Recite for relief from difficulties in communication." },
        { verse: "Surah Al-Anbiya (21:83)", instructions: "Recite for healing from affliction." },
        { verse: "Surah Al-Hajj (22:35)", instructions: "Recite for humility and sincerity." },
        { verse: "Surah Al-Mu'minun (23:97-98)", instructions: "Recite for protection from the whispers of Shaytan." },
        { verse: "Surah An-Nur (24:35)", instructions: "Recite for spiritual enlightenment." },
        { verse: "Surah Ash-Shu'ara (26:80)", instructions: "Recite for healing from physical ailments." },
        { verse: "Surah An-Naml (27:62)", instructions: "Recite for help in times of distress." },
        { verse: "Surah Al-Qasas (28:24)", instructions: "Recite for relief from exhaustion." },
        { verse: "Surah Al-Ankabut (29:69)", instructions: "Recite for success in righteous endeavors." },
        { verse: "Surah Ar-Rum (30:22)", instructions: "Recite for understanding and appreciation of diversity." },
        { verse: "Surah Luqman (31:18-19)", instructions: "Recite for humility and modesty." },
        { verse: "Surah As-Sajda (32:16)", instructions: "Recite for night prayers and forgiveness." },
        { verse: "Surah Al-Ahzab (33:56)", instructions: "Recite for invoking blessings on the Prophet (SAW)." },
        { verse: "Surah Saba (34:39)", instructions: "Recite for sustenance and provision." },
        { verse: "Surah Fatir (35:29)", instructions: "Recite for reward and righteousness." },
        { verse: "Surah Yasin (36:58)", instructions: "Recite for peace and blessings in Paradise." },
        { verse: "Surah As-Saffat (37:180-182)", instructions: "Recite for glorification of Allah." },
        { verse: "Surah Sad (38:24)", instructions: "Recite for justice and fair dealing." },
        { verse: "Surah Az-Zumar (39:53)", instructions: "Recite for forgiveness and mercy from Allah." },
        { verse: "Surah Ghafir (40:44)", instructions: "Recite for protection from harm and enemies." },
        { verse: "Surah Fussilat (41:44)", instructions: "Recite for healing through the Qur'an." },
        { verse: "Surah Ash-Shura (42:43)", instructions: "Recite for patience and perseverance." },
        { verse: "Surah Az-Zukhruf (43:36-37)", instructions: "Recite for protection against Satan's companionship." },
        { verse: "Surah Al-Dukhan (44:3-4)", instructions: "Recite for protection from calamity." },
        { verse: "Surah Al-Jathiyah (45:15)", instructions: "Recite for personal accountability and justice." },
        { verse: "Surah Al-Ahqaf (46:15)", instructions: "Recite for supplication for parents." },
        { verse: "Surah Muhammad (47:19)", instructions: "Recite for seeking forgiveness and knowledge." },
        { verse: "Surah Al-Fath (48:1)", instructions: "Recite for victory and success." },
        { verse: "Surah Al-Hujurat (49:13)", instructions: "Recite for equality and human dignity." },
        { verse: "Surah Qaf (50:16)", instructions: "Recite for awareness of Allah's presence." },
        { verse: "Surah Adh-Dhariyat (51:56)", instructions: "Recite for understanding life's purpose." },
        { verse: "Surah At-Tur (52:48-49)", instructions: "Recite for patience in adversity." },
        { verse: "Surah An-Najm (53:39-40)", instructions: "Recite for fairness in recompense." },
        { verse: "Surah Al-Qamar (54:17)", instructions: "Recite for ease in remembering the Qur'an." },
        { verse: "Surah Ar-Rahman (55:13)", instructions: "Recite for reflection on Allah's blessings." },
        { verse: "Surah Al-Waqi'a (56:88-89)", instructions: "Recite for assurance of a good end." },
        { verse: "Surah Al-Hadid (57:16)", instructions: "Recite for softening of the heart." },
        { verse: "Surah Al-Mujadila (58:22)", instructions: "Recite for strength in faith." },
        { verse: "Surah Al-Hashr (59:21)", instructions: "Recite for contemplating the Qur'an." },
        { verse: "Surah Al-Mumtahina (60:8)", instructions: "Recite for fair treatment of others." },
        { verse: "Surah As-Saff (61:13)", instructions: "Recite for divine help and victory." },
        { verse: "Surah Al-Jumu'a (62:9)", instructions: "Recite for observing the Friday prayer." },
        { verse: "Surah Al-Munafiqun (63:8)", instructions: "Recite for humility and sincerity." },
        { verse: "Surah At-Taghabun (64:11)", instructions: "Recite for understanding that all is from Allah." },
        { verse: "Surah At-Talaq (65:2-3)", instructions: "Recite for reliance on Allah." },
        { verse: "Surah At-Tahrim (66:8)", instructions: "Recite for sincere repentance." },
        { verse: "Surah Al-Mulk (67:15)", instructions: "Recite for understanding Allah's provision." },
        { verse: "Surah Al-Qalam (68:4)", instructions: "Recite for good character." },
        { verse: "Surah Al-Haqqah (69:44-47)", instructions: "Recite for understanding the authenticity of the Qur'an." },
        { verse: "Surah Al-Ma'arij (70:5)", instructions: "Recite for patience." },
        { verse: "Surah Nuh (71:28)", instructions: "Recite for seeking forgiveness for oneself and others." },
        { verse: "Surah Al-Jinn (72:1)", instructions: "Recite for protection from evil beings." },
        { verse: "Surah Al-Muzzammil (73:20)", instructions: "Recite for understanding the significance of night worship." },
        { verse: "Surah Al-Muddathir (74:7)", instructions: "Recite for steadfastness in the face of challenges." },
        { verse: "Surah Al-Qiyamah (75:36-40)", instructions: "Recite for reflection on the resurrection." },
        { verse: "Surah Al-Insan (76:9)", instructions: "Recite for sincerity in charity." },
        { verse: "Surah Al-Mursalat (77:50)", instructions: "Recite for the truth of the Qur'an." },
        { verse: "Surah An-Naba (78:40)", instructions: "Recite for understanding the consequences of actions." },
        { verse: "Surah An-Nazi'at (79:45)", instructions: "Recite for awareness of the Day of Judgment." },
        { verse: "Surah Abasa (80:38-39)", instructions: "Recite for humility before Allah." },
        { verse: "Surah At-Takwir (81:1-29)", instructions: "Recite for awareness of the signs of the Day of Judgment." },
        { verse: "Surah Al-Infitar (82:13-14)", instructions: "Recite for understanding the destiny of the righteous and the wicked." },
        { verse: "Surah Al-Mutaffifin (83:1-3)", instructions: "Recite for fairness in trade and transactions." },
        { verse: "Surah Al-Inshiqaq (84:25)", instructions: "Recite for ultimate return to Allah." },
        { verse: "Surah Al-Buruj (85:11)", instructions: "Recite for reward and success for the steadfast believers." },
        { verse: "Surah At-Tariq (86:4)", instructions: "Recite for understanding that everyone has a guardian." },
        { verse: "Surah Al-A'la (87:14-15)", instructions: "Recite for the purification of the soul." },
        { verse: "Surah Al-Ghashiyah (88:8-9)", instructions: "Recite for understanding the faces of joy in Paradise." },
        { verse: "Surah Al-Fajr (89:27-30)", instructions: "Recite for assurance of the peaceful soul entering Paradise." },
        { verse: "Surah Al-Balad (90:4)", instructions: "Recite for resilience in the face of hardship." },
        { verse: "Surah Ash-Shams (91:9-10)", instructions: "Recite for purification and self-improvement." },
        { verse: "Surah Al-Lail (92:5-7)", instructions: "Recite for generosity and good deeds." },
        { verse: "Surah Ad-Duha (93:11)", instructions: "Recite for gratitude and remembrance of Allah's favor." },
        { verse: "Surah Ash-Sharh (94:5-6)", instructions: "Recite for relief from difficulties." },
        { verse: "Surah At-Tin (95:4-5)", instructions: "Recite for understanding human creation in the best form." },
        { verse: "Surah Al-Alaq (96:1-5)", instructions: "Recite for seeking knowledge and wisdom." },
        { verse: "Surah Al-Qadr (97:3)", instructions: "Recite for blessings and mercy on the Night of Decree." },
        { verse: "Surah Al-Bayyina (98:7-8)", instructions: "Recite for the reward of the righteous." },
        { verse: "Surah Az-Zalzalah (99:7-8)", instructions: "Recite for awareness of even the smallest deeds." },
        { verse: "Surah Al-Adiyat (100:9-11)", instructions: "Recite for understanding human ingratitude." },
        { verse: "Surah Al-Qari'ah (101:6-9)", instructions: "Recite for insight into the weighing of deeds." },
        { verse: "Surah At-Takathur (102:1-2)", instructions: "Recite for warning against worldly rivalry." },
        { verse: "Surah Al-Asr (103:2-3)", instructions: "Recite for reflection on time and righteous deeds." },
        { verse: "Surah Al-Humazah (104:1-2)", instructions: "Recite for protection from slander and arrogance." },
        { verse: "Surah Al-Fil (105:4-5)", instructions: "Recite for understanding divine intervention." },
        { verse: "Surah Quraish (106:3-4)", instructions: "Recite for gratitude for sustenance and safety." },
        { verse: "Surah Al-Ma'un (107:1-3)", instructions: "Recite for reflection on acts of kindness and charity." },
        { verse: "Surah Al-Kawthar (108:1-3)", instructions: "Recite for invoking blessings and abundance." },
        { verse: "Surah Al-Kafirun (109:6)", instructions: "Recite for affirming commitment to faith." },
        { verse: "Surah An-Nasr (110:2-3)", instructions: "Recite for gratitude upon receiving help and victory." },
        { verse: "Surah Al-Masad (111:1-5)", instructions: "Recite for understanding the consequences of enmity against Allah's message." },
        { verse: "Surah Al-Ikhlas (112:1-4)", instructions: "Recite for affirming the oneness of Allah." },
        { verse: "Surah Al-Falaq (113:1-5)", instructions: "Recite for seeking protection from all forms of harm." },
        { verse: "Surah An-Nas (114:1-6)", instructions: "Recite for seeking protection from evil influences." }
    ];

    const shifaListElement = document.getElementById("shifa-list");
    shifaVerses.forEach(shifa => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${shifa.verse}</strong> - ${shifa.instructions}`;
        shifaListElement.appendChild(listItem);
    });
}
