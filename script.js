// Function to populate the list of 114 Surahs with their details
function loadSurahs() {
    const surahs = [
        { name: "Al-Fatihah", place: "Makkah", ayah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
        { name: "Al-Baqarah", place: "Madina", ayah: "الٓمٓ" },
        // ... Add the remaining Surahs here
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
        // ... Add more miracles up to 50
        "The Qur'an's linguistic excellence"
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
        // ... Add more blessings up to 50
        "Promise of paradise"
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
        // ... Add more verses up to 50
        { verse: "Surah Al-Falaq (113:1-5)", instructions: "Recite for protection against magic and evil." }
    ];
    const shifaListElement = document.getElementById("shifa-list");
    shifaVerses.forEach(shifa => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${shifa.verse}</strong> - ${shifa.instructions}`;
        shifaListElement.appendChild(listItem);
    });
}

// Function to populate the list of other important parts of the Qur'an
function loadImportantParts() {
    const importantParts = [
        "Surah Yasin - The heart of the Qur'an",
        "Surah Al-Kahf - Protection from Dajjal",
        "Surah Al-Mulk - Protection from the punishment of the grave",
        // ... Add more important parts
        "Surah Ar-Rahman - Known for its emphasis on Allah's mercy"
    ];
    const importantPartsListElement = document.getElementById("important-parts-list");
    importantParts.forEach(part => {
        const listItem = document.createElement("li");
        listItem.textContent = part;
        importantPartsListElement.appendChild(listItem);
    });
}

// Call the functions to load data
document.addEventListener("DOMContentLoaded", function () {
    loadSurahs();
    loadMiracles();
    loadBlessings();
    loadShifaVerses();
    loadImportantParts();
});
