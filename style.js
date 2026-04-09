const projeler = [
   
];


function imlecOlustur() {
    const imlec = document.createElement('div');
    imlec.className = 'custom-imlec';
    document.body.appendChild(imlec);
    
    document.addEventListener('mousemove', e => {
        imlec.style.left = e.clientX + 'px';
        imlec.style.top = e.clientY + 'px';
    });
    
   
    document.querySelectorAll('a, button, .proje-kart, .filtre-buton, .iletisim-buton').forEach(el => {
        el.addEventListener('mouseenter', () => imlec.classList.add('hovered'));
        el.addEventListener('mouseleave', () => imlec.classList.remove('hovered'));
    });
}

function daktiloEfekti() {
    const metin = "Ben Umay!";
    const alan = document.getElementById('daktilo-metin');
    let i = 0;
    function yaz() {
        if (i < metin.length) {
            alan.textContent += metin.charAt(i);
            i++;
            setTimeout(yaz, 120);
        }
    }
    yaz();
}


function yetenekBarlariDoldur() {
    setTimeout(() => {
        document.querySelector('.html-seviye').style.width = '85%';
        document.querySelector('.css-seviye').style.width = '75%';
        document.querySelector('.js-seviye').style.width = '60%';
    }, 1000);
}

function projeleriGoster(kategoriFiltre = 'tum') {
    const kartAlani = document.getElementById('proje-kartlari');
    const filtreliProjeler = kategoriFiltre === 'tum' ? 
        projeler : projeler.filter(proje => proje.kategori === kategoriFiltre);
    
    kartAlani.innerHTML = filtreliProjeler.map(proje => `
        <div class="proje-kart">
            <img src="${proje.resim}" alt="${proje.baslik}" class="proje-resim">
            <div class="proje-bilgi">
                <span class="proje-kategori">${proje.kategori === 'web' ? 'Web Projesi' : 'Mobil Proje'}</span>
                <h3>${proje.baslik}</h3>
                <p>Okul projesi - HTML, CSS, JavaScript kullanıldı</p>
            </div>
        </div>
    `).join('');
function filtreEventleriEkle() {
    document.querySelectorAll('.filtre-buton').forEach(buton => {
        buton.addEventListener('click', () => {
            // Aktif sınıfı güncelle
            document.querySelectorAll('.filtre-buton').forEach(b => b.classList.remove('aktif'));
            buton.classList.add('aktif');
            
           
            projeleriGoster(buton.dataset.kategori);
        });
    });
}


function geceModuEkle() {
    const temaButon = document.getElementById('tema-buton');
    const ikon = temaButon.querySelector('i');
    
    temaButon.addEventListener('click', () => {
        const html = document.documentElement;
        if (html.hasAttribute('data-theme')) {
            html.removeAttribute('data-theme');
            ikon.className = 'fas fa-moon';
        } else {
            html.setAttribute('data-theme', 'koyu');
            ikon.className = 'fas fa-sun';
        }
    });
}


function smoothScrollEkle() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const hedefId = link.getAttribute('href').substring(1);
            document.getElementById(hedefId).scrollIntoView({ behavior: 'smooth' });
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    imlecOlustur();
    daktiloEfekti();
    yetenekBarlariDoldur();
    projeleriGoster();
    filtreEventleriEkle();
    geceModuEkle();
    smoothScrollEkle();
});