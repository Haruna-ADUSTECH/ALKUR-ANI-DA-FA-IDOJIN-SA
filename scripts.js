// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Function to load content into sections
function loadContent(sectionId, contentArray) {
  const section = document.getElementById(sectionId);
  const ul = document.createElement('ul');

  contentArray.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = item; // Use innerHTML to support Arabic and HTML tags
    ul.appendChild(li);
  });

  section.appendChild(ul);
}

// Lists of content for each category
const surahsList = [
  "1. الفاتحة (Al-Fatiha) - Revealed in Makkah",
  "2. البقرة (Al-Baqarah) - Revealed in Madina",
  "3. آل عمران (Aal-E-Imran) - Revealed in Madina",
  "4. النساء (An-Nisa) - Revealed in Madina",
  "5. المائدة (Al-Ma'idah) - Revealed in Madina",
  "6. الأنعام (Al-An'am) - Revealed in Makkah",
  "7. الأعراف (Al-A'raf) - Revealed in Makkah",
  "8. الأنفال (Al-Anfal) - Revealed in Madina",
  "9. التوبة (At-Tawbah) - Revealed in Madina",
  "10. يونس (Yunus) - Revealed in Makkah",
  // Continue listing all 114 Surahs...
  "113. الفلق (Al-Falaq) - Revealed in Makkah",
  "114. الناس (An-Naas) - Revealed in Makkah"
];

const miraclesList = [
  "1. The miracle of preservation – The Qur'an remains unchanged since its revelation.",
  "2. Scientific insights on embryology – As mentioned in Surah المؤمنون (Al-Mu’minun), Ayat 12-14.",
  "3. The splitting of the moon – As mentioned in Surah القمر (Al-Qamar), Ayat 1.",
  "4. The linguistic miracle – The unparalleled eloquence and literary beauty of the Qur'an.",
  "5. Mention of the expanding universe – Surah الذاريات (Adh-Dhariyat), Ayat 47.",
  // Continue listing all 50 miracles...
  "49. The accurate description of natural phenomena unknown at the time.",
  "50. Prophecies about the future that have been fulfilled."
];

const blessingsList = [
  "1. <strong>سورة الفاتحة (Al-Fatiha)</strong> - Recitation brings healing and mercy.",
  "2. <strong>سورة البقرة (Al-Baqarah)</strong> - Offers protection from Shaytan.",
  "3. <strong>سورة يس (Yasin)</strong> - Known as the heart of the Qur'an, brings immense rewards.",
  "4. <strong>سورة الملك (Al-Mulk)</strong> - Prevents punishment in the grave.",
  "5. <strong>سورة الإخلاص (Al-Ikhlas)</strong> - Equals one-third of the Qur'an in reward.",
  // Continue listing all 50 blessings...
  "49. Reciting Surah الفلق (Al-Falaq) and Surah الناس (An-Naas) provides protection against evil.",
  "50. Surah الكهف (Al-Kahf) recited on Fridays brings light between two Fridays."
];

const shifaList = [
  "1. <strong>سورة الفاتحة (Al-Fatiha) [1:1-7]</strong> - Recite over the sick with the intention for healing.",
  "2. <strong>آية الكرسي (Ayat al-Kursi) [2:255]</strong> - Recite for protection and healing.",
  "3. <strong>سورة الإسراء (Al-Isra) [17:82]</strong> - 'And We send down of the Qur'an that which is healing and mercy...'",
  "4. <strong>سورة الفلق (Al-Falaq) [113]</strong> and <strong>سورة الناس (An-Naas) [114]</strong> - Recite for protection from harm.",
  "5. <strong>سورة مريم (Maryam) [19:1-11]</strong> - For relief from anxiety and stress.",
  // Continue listing all 50 shifa verses...
  "49. Surah الكهف (Al-Kahf) [18:10] - Recite for spiritual protection and guidance.",
  "50. Surah الفتح (Al-Fath) [48:29] - For success and victory in difficult situations."
];

const otherImportantPartsList = [
  "1. The last two Ayat of <strong>سورة البقرة (Al-Baqarah)</strong> - For divine protection.",
  "2. <strong>سورة الكهف (Al-Kahf)</strong> - Recite every Friday for protection from the Dajjal.",
  "3. <strong>سورة الملك (Al-Mulk)</strong> - Recite before sleep to be saved from the punishment of the grave.",
  "4. <strong>سورة الإخلاص (Al-Ikhlas), الفلق (Al-Falaq), الناس (An-Naas)</strong> - Recite three times morning and evening for protection.",
  "5. <strong>سورة الرحمن (Ar-Rahman)</strong> - Known as the 'Bride of the Qur'an,' a chapter of mercy.",
  // Continue listing all other important parts...
  "49. Surah الواقعة (Al-Waqi'ah) - Recite daily to protect against poverty.",
  "50. Surah الحشر (Al-Hashr) - The last three verses for forgiveness and mercy."
];

// Load all content on window load
window.onload = function () {
  loadContent('section1', surahsList);
  loadContent('section2', miraclesList);
  loadContent('section3', blessingsList);
  loadContent('section4', shifaList);
  loadContent('section5', otherImportantPartsList);
};
