// JSON dosyasındaki kart verilerini yükleme
fetch('data/cards.json')
    .then(response => response.json())
    .then(cards => {
        const button = document.getElementById('tarot-card-btn');
        const cardImage = document.getElementById('card-image');
        const cardDescription = document.getElementById('card-description');

        // Kart çekme işlevi
        button.addEventListener('click', function() {
            const randomCard = cards[Math.floor(Math.random() * cards.length)];
            cardImage.src = randomCard.image;
            cardDescription.textContent = randomCard.description;
        });
    })
    .catch(error => console.error('Kart verileri yüklenemedi:', error));


   // Menü toggling (mobilde hamburger menüsü)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}



function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}



// Menü toggling (mobilde hamburger menüsü)
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Tema değiştirme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides; // Döngüsel hareket
    const slider = document.getElementById('slider1');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slider okları için event listener
document.querySelector('.prev').addEventListener('click', () => goToSlide(currentIndex - 1));
document.querySelector('.next').addEventListener('click', () => goToSlide(currentIndex + 1));

// Otomatik kaydırma
setInterval(() => goToSlide(currentIndex + 1), 3000);

// Sayfa kaydırıldığında fade-in animasyonu
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});

// Sıkça Sorulan Sorular (FAQ) toggle
const faqItems = document.querySelectorAll('.faq-item h3');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
    });
});





// Tarot kartları JSON verisi
// const tarotKartlari = [
//     {
//         "isim": "Bebek",
//         "aciklama": "Yeni başlangıçlar, saf enerji, yolculuk.",
//         "gorsel": "images/tarot-cards/bebek.jpeg"
//     },
//     {
//         "isim": "Büyücü",
//         "aciklama": "Yaratıcılık, beceri, kaynakları kullanma.",
//         "gorsel": "images/tarot-cards/"
//     },

//     {
//       "tarotKartlari": [
  
//         {
//           "isim": "Bebek",
//           "aciklama": "Yeni başlangıçlar, saf enerji, yolculuk.",
//           "gorsel": "images/tarot-cards/bebek.jpeg"
//         },
//         {
//           "isim": "Büyücü",
//           "aciklama": "Yaratıcılık, beceri, kaynakları kullanma.",
//           "gorsel": "images/tarot-cards/buyücu.jpeg"
//         },
//         {
//           "isim": "Yüksek Rahibe",
//           "aciklama": "Sezgi, içsel bilgi, bilinçaltı.",
//           "gorsel": "images/tarot-cards/yuksek-rahibe.jpeg"
//         },
//         {
//           "isim": "İmparatoriçe",
//           "aciklama": "Doğurganlık, zenginlik, duygusal denge.",
//           "gorsel": "images/tarot-cards/imparatorice.jpeg"
//         },
//         {
//           "isim": "İmparator",
//           "aciklama": "Güç, liderlik, düzen.",
//           "gorsel": "images/tarot-cards/imparator.jpeg"
//         },
//         {
//           "isim": "Rahip",
//           "aciklama": "Düşünce, moral değerler, öğreti.",
//           "gorsel": "images/tarot-cards/rahip.jpeg"
//         },
//         {
//           "isim": "Aşıklar",
//           "aciklama": "Sevgi, birliktelik, önemli bir karar.",
//           "gorsel": "images/tarot-cards/asiklar.jpeg"
//         },
//         {
//           "isim": "Savaşçı",
//           "aciklama": "Cesaret, cesaret, savaşa hazırlık.",
//           "gorsel": "images/tarot-cards/savasci.jpeg"
//         },
//         {
//           "isim": "Kader Çarkı",
//           "aciklama": "Değişim, dönüşüm, döngüler.",
//           "gorsel": "images/tarot-cards/kader-carki.jpeg"
//         },
//         {
//           "isim": "Adalet",
//           "aciklama": "Denge, dürüstlük, adalet.",
//           "gorsel": "images/tarot-cards/adalet.jpeg"
//         },
//         {
//           "isim": "Asırlık Çalışma",
//           "aciklama": "Bir şeyin sona ermesi, tamamlanma.",
//           "gorsel": "images/tarot-cards/asirlik-calisma.jpeg"
//         },
//         {
//           "isim": "Yıldız",
//           "aciklama": "Umudu yenileme, yenilik, şifa.",
//           "gorsel": "images/tarot-cards/yildiz.jpeg"
//         },
//         {
//           "isim": "Ay",
//           "aciklama": "Bilinçaltı, korkular, yanılsamalar.",
//           "gorsel": "images/tarot-cards/ay.jpeg"
//         },
//         {
//           "isim": "Güneş",
//           "aciklama": "Başarı, mutluluk, aydınlanma.",
//           "gorsel": "images/tarot-cards/gunes.jpeg"
//         },
//         {
//           "isim": "Mahşer",
//           "aciklama": "Diriliş, uyanış, yenilik.",
//           "gorsel": "images/tarot-cards/mahsher.jpeg"
//         },
//         {
//           "isim": "Dünya",
//           "aciklama": "Tamamlanma, denge, bütünlük.",
//           "gorsel": "images/tarot-cards/dunya.jpeg"
//         },
    
       
  
  
  
//         {
//           "isim": "Değnek Ası",
//           "aciklama": "Yeni başlangıçlar, ilham, yaratıcılık.",
//           "gorsel": "images/tarot-cards/degnek_asi.jpeg"
//         },
//         {
//           "isim": "Değnek İkili",
//           "aciklama": "Seçenekler, planlama, keşif.",
//           "gorsel": "images/tarot-cards/degnek_ikili.jpeg"
//         },
//         {
//           "isim": "Değnek Üçlü",
//           "aciklama": "Gelişim, fırsatlar, genişleme.",
//           "gorsel": "images/tarot-cards/degnek_uclu.jpeg"
//         },
//         {
//           "isim": "Değnek Dörtlü",
//           "aciklama": "Kutlama, uyum, topluluk.",
//           "gorsel": "images/tarot-cards/degnek_dortlu.jpeg"
//         },
//         {
//           "isim": "Değnek Beşli",
//           "aciklama": "Rekabet, çatışma, mücadele.",
//           "gorsel": "images/tarot-cards/degnek_besli.jpeg"
//         },
//         {
//           "isim": "Değnek Altılı",
//           "aciklama": "Zafer, başarı, tanınma.",
//           "gorsel": "images/tarot-cards/degnek_altili.jpeg"
//         },
//         {
//           "isim": "Değnek Yedili",
//           "aciklama": "Savunma, direnç, mücadele.",
//           "gorsel": "images/tarot-cards/degnek_yedili.jpeg"
//         },
//         {
//           "isim": "Değnek Sekizli",
//           "aciklama": "Hız, hareket, ilerleme.",
//           "gorsel": "images/tarot-cards/degnek_sekizli.jpeg"
//         },
//         {
//           "isim": "Değnek Dokuzlu",
//           "aciklama": "Direnç, sınır koyma, savunma.",
//           "gorsel": "images/tarot-cards/degnek_dokuzlu.jpeg"
//         },
//         {
//           "isim": "Değnek Onlu",
//           "aciklama": "Yük, sorumluluk, zorluk.",
//           "gorsel": "images/tarot-cards/degnek_onlu.jpeg"
//         },
//         {
//           "isim": "Değnek Savaşçısı",
//           "aciklama": "Heyecan, macera, cesaret.",
//           "gorsel": "images/tarot-cards/degnek_savascisi.jpeg"
//         },
//         {
//           "isim": "Değnek Şövalyesi",
//           "aciklama": "Enerji, tutku, keşif.",
//           "gorsel": "images/tarot-cards/degnek_sovalyesi.jpeg"
//         },
//         {
//           "isim": "Değnek Kraliçesi",
//           "aciklama": "Karizma, liderlik, çekicilik.",
//           "gorsel": "images/tarot-cards/degnek_kralicesi.jpeg"
//         },
//         {
//           "isim": "Değnek Kralı",
//           "aciklama": "Liderlik, vizyon, güç.",
//           "gorsel": "images/tarot-cards/degnek_krali.jpeg"
//         },
    
  
//         {
//           "isim": "Kupa Ası",
//           "aciklama": "Aşk, duygusal yenilik, mutluluk.",
//           "gorsel": "images/tarot-cards/kupa_asi.jpeg"
//         },
//         {
//           "isim": "Kupa İkili",
//           "aciklama": "Ortaklık, uyum, birliktelik.",
//           "gorsel": "images/tarot-cards/kupa_ikili.jpeg"
//         },
//         {
//           "isim": "Kupa Üçlü",
//           "aciklama": "Kutlama, dostluk, iş birliği.",
//           "gorsel": "images/tarot-cards/kupa_uclu.jpeg"
//         },
//         {
//           "isim": "Kupa Dörtlü",
//           "aciklama": "Tatminsizlik, içsel değerlendirme.",
//           "gorsel": "images/tarot-cards/kupa_dortlu.jpeg"
//         },
//         {
//           "isim": "Kupa Beşli",
//           "aciklama": "Hayal kırıklığı, kayıp, keder.",
//           "gorsel": "images/tarot-cards/kupa_besli.jpeg"
//         },
//         {
//           "isim": "Kupa Altılı",
//           "aciklama": "Geçmişe özlem, nostalji, anılar.",
//           "gorsel": "images/tarot-cards/kupa_altili.jpeg"
//         },
//         {
//           "isim": "Kupa Yedili",
//           "aciklama": "Hayaller, seçenekler, kafa karışıklığı.",
//           "gorsel": "images/tarot-cards/kupa_yedili.jpeg"
//         },
       
//         {
//           "isim": "Kupa Sekizli",
//           "aciklama": "Geride bırakmak, arayış, değişim.",
//           "gorsel": "images/tarot-cards/kupa_sekizli.jpeg"
//         },
//         {
//           "isim": "Kupa Dokuzlu",
//           "aciklama": "Duygusal tatmin, mutluluk, hayallerin gerçekleşmesi.",
//           "gorsel": "images/tarot-cards/kupa_dokuzlu.jpeg"
//         },
//         {
//           "isim": "Kupa Onlu",
//           "aciklama": "Aile, mutluluk, tam bir denge.",
//           "gorsel": "images/tarot-cards/kupa_onlu.jpeg"
//         },
//         {
//           "isim": "Kupa Savaşçısı",
//           "aciklama": "Romantizm, duygusal ifade, sevgi.",
//           "gorsel": "images/tarot-cards/kupa_savascisi.jpeg"
//         },
//         {
//           "isim": "Kupa Şövalyesi",
//           "aciklama": "Duygusal hareketlilik, sevgi teklifi, yenilik.",
//           "gorsel": "images/tarot-cards/kupa_sovalyesi.jpeg"
//         },
//         {
//           "isim": "Kupa Kraliçesi",
//           "aciklama": "Empati, sezgi, duygusal denge.",
//           "gorsel": "images/tarot-cards/kupa_kralicesi.jpeg"
//         },
//         {
//           "isim": "Kupa Kralı",
//           "aciklama": "Duygusal olgunluk, liderlik, sevgi.",
//           "gorsel": "images/tarot-cards/kupa_krali.jpeg"
//         },
  
//         {
//           "isim": "Kılıç Ası",
//           "aciklama": "Yeni fikirler, zeka, netlik.",
//           "gorsel": "images/tarot-cards/kilic_asi.jpeg"
//         },
//         {
//           "isim": "Kılıç İkili",
//           "aciklama": "Düşünceler, kararsızlık, seçim yapma.",
//           "gorsel": "images/tarot-cards/kilic_ikili.jpeg"
//         },
//         {
//           "isim": "Kılıç Üçlü",
//           "aciklama": "Acı, kırıklık, ihanet.",
//           "gorsel": "images/tarot-cards/kilic_uclu.jpeg"
//         },
//         {
//           "isim": "Kılıç Dörtlü",
//           "aciklama": "Dinlenme, geri çekilme, iyileşme.",
//           "gorsel": "images/tarot-cards/kilic_dortlu.jpeg"
//         },
//         {
//           "isim": "Kılıç Beşli",
//           "aciklama": "Kayıp, mağlubiyet, çatışma.",
//           "gorsel": "images/tarot-cards/kilic_besli.jpeg"
//         },
//         {
//           "isim": "Kılıç Altılı",
//           "aciklama": "Kaçış, iyileşme, geçiş.",
//           "gorsel": "images/tarot-cards/kilic_altili.jpeg"
//         },
//         {
//           "isim": "Kılıç Yedili",
//           "aciklama": "Strateji, hile, gizli planlar.",
//           "gorsel": "images/tarot-cards/kilic_yedili.jpeg"
//         },
//         {
//           "isim": "Kılıç Sekizli",
//           "aciklama": "Kısıtlanma, zorluk, tuzak.",
//           "gorsel": "images/tarot-cards/kilic_sekizli.jpeg"
//         },
//         {
//           "isim": "Kılıç Dokuzlu",
//           "aciklama": "Korku, kaygı, uykusuzluk.",
//           "gorsel": "images/tarot-cards/kilic_dokuzlu.jpeg"
//         },
//         {
//           "isim": "Kılıç Onlu",
//           "aciklama": "Son, acı, felaket.",
//           "gorsel": "images/tarot-cards/kilic_onlu.jpeg"
//         },
//         {
//           "isim": "Kılıç Savaşçısı",
//           "aciklama": "Kararlılık, cesaret, zeka.",
//           "gorsel": "images/tarot-cards/kilic_savascisi.jpeg"
//         },
//         {
//           "isim": "Kılıç Şövalyesi",
//           "aciklama": "Hız, cesaret, liderlik.",
//           "gorsel": "images/tarot-cards/kilic_sovalyesi.jpeg"
//         },
//         {
//           "isim": "Kılıç Kraliçesi",
//           "aciklama": "Bilinçli, zeki, tarafsız.",
//           "gorsel": "images/tarot-cards/kilic_kralicesi.jpeg"
//         },
//         {
//           "isim": "Kılıç Kralı",
//           "aciklama": "Adalet, zeka, liderlik.",
//           "gorsel": "images/tarot-cards/kilic_krali.jpeg"
//         },
    
        
//         {
//           "isim": "Tılsım Ası",
//           "aciklama": "Yeni fırsatlar, maddi başarı, başlangıç.",
//           "gorsel": "images/tarot-cards/tilsim_asi.jpeg"
//         },
//         {
//           "isim": "Tılsım İkili",
//           "aciklama": "Denge, esneklik, bir denge arayışı.",
//           "gorsel": "images/tarot-cards/tilsim_ikili.jpeg"
//         },
//         {
//           "isim": "Tılsım Üçlü",
//           "aciklama": "İşbirliği, başarı, ekip çalışması.",
//           "gorsel": "images/tarot-cards/tilsim_uclu.jpeg"
//         },
//         {
//           "isim": "Tılsım Dörtlü",
//           "aciklama": "Sahiplenme, maddi güvenlik, koruma.",
//           "gorsel": "images/tarot-cards/tilsim_dortlu.jpeg"
//         },
//         {
//           "isim": "Tılsım Beşli",
//           "aciklama": "Zorluklar, kayıplar, eksiklik.",
//           "gorsel": "images/tarot-cards/tilsim_besli.jpeg"
//         },
//         {
//           "isim": "Tılsım Altılı",
//           "aciklama": "Hibe, yardım, eşitlik.",
//           "gorsel": "images/tarot-cards/tilsim_altili.jpeg"
//         },
//         {
//           "isim": "Tılsım Yedili",
//           "aciklama": "Beklemek, sabır, değerlendirme.",
//           "gorsel": "images/tarot-cards/tilsim_yedili.jpeg"
//         },
//         {
//           "isim": "Tılsım Sekizli",
//           "aciklama": "Çalışkanlık, beceri, öğrenme.",
//           "gorsel": "images/tarot-cards/tilsim_sekizli.jpeg"
//         },
//         {
//           "isim": "Tılsım Dokuzlu",
//           "aciklama": "Tatmin, başarı, lüks.",
//           "gorsel": "images/tarot-cards/tilsim_dokuzlu.jpeg"
//         },
//         {
//           "isim": "Tılsım Onlu",
//           "aciklama": "Aile, güvenlik, başarı.",
//           "gorsel": "images/tarot-cards/tilsim_onlu.jpeg"
//         },
//         {
//           "isim": "Tılsım Savaşçısı",
//           "aciklama": "Çalışma, dikkat, beceri.",
//           "gorsel": "images/tarot-cards/tilsim_savascisi.jpeg"
//         },
//         {
//           "isim": "Tılsım Şövalyesi",
//           "aciklama": "Sadakat, çalışkanlık, pratiklik.",
//           "gorsel": "images/tarot-cards/tilsim_sovalyesi.jpeg"
//         },
//         {
//           "isim": "Tılsım Kraliçesi",
//           "aciklama": "Zenginlik, güven, pratiklik.",
//           "gorsel": "images/tarot-cards/tilsim_kralicesi.jpeg"
//         },
//         {
//           "isim": "Tılsım Kralı",
//           "aciklama": "Maddi başarı, güvenlik, liderlik.",
//           "gorsel": "images/tarot-cards/tilsim_krali.jpeg"
//         },
//           {
//               "isim": "Tılsım Kralı",
//               "aciklama": "Maddi başarı, güvenlik, liderlik.",
//               "gorsel": "images/tarot-cards/tilsim_krali.jpeg"
//             }
//           ]
//       }
// ];

















// JSON'dan blog verilerini yükleme
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const blogContent = document.querySelector('.blog-content');
    posts.forEach(post => {
      const article = document.createElement('article');
      article.classList.add('blog-card');
      article.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="blog-info">
          <h2><a href="#">${post.title}</a></h2>
          <p>${post.description}</p>
          <p class="blog-meta">Yayın Tarihi: ${post.date}</p>
        </div>
      `;
      blogContent.appendChild(article);
    });
  })
  .catch(error => console.error('Blog yazıları yüklenemedi:', error));




  document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.choice'); // Kart seçim butonlarını al
    const resultDiv = document.getElementById('results');
    const showResultsButton = document.getElementById('show-results');
    const cardArea = document.querySelector('.card-area');


    // Kartları tanımlıyoruz
    const tarotDeck = {
        1: ['Ölüm Kartı', 'Aşk Kartı', 'Zafer Kartı'],  // 1 kart
        3: ['Geçmiş Kartı', 'Şimdi Kartı', 'Gelecek Kartı'],  // 3 kart
        5: ['Kart 1', 'Kart 2', 'Kart 3', 'Kart 4', 'Kart 5'] // 5 kart
    };

    // Butonlara tıklama olayı
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const numCards = parseInt(this.getAttribute('data-cards'));  // Hangi sayıda kart seçildiğini al
            showResultsButton.classList.remove('hidden');
            resultDiv.classList.add('hidden'); // Sonuçları gizle

            // Kartları seç
            const cards = tarotDeck[numCards];
            cardArea.innerHTML = ''; // Kartları sıfırla

            // Seçilen kartları göster
            cards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card');
                cardDiv.innerHTML = `
                    <div class="card-content">
                        <h3>${card}</h3>
                        <p>Bu kart hakkında detaylı açıklama yapılacak.</p>
                    </div>
                `;
                cardArea.appendChild(cardDiv);
            });

            // Sonuçları gösterme
            showResultsButton.addEventListener('click', function() {
                resultDiv.classList.remove('hidden');
                resultDiv.innerHTML = `<p>Seçilen kartlar: ${cards.join(', ')}</p>`;
            });
        });
    });
});



function toggleMenu() {
    const sidebar = document.getElementById("sidebar-menu");
    const overlay = document.getElementById("menu-overlay");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}


//////////////////////////////////////




























