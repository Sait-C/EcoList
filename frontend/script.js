function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

const infoData = {
    dogayiKoru: {
        title: "Doğayı Koru 🌿",
        text: "Doğayı korumak için geri dönüşüm yapın, plastik kullanımını azaltın ve sürdürülebilir ürünler tercih edin."
    },
    aiAnaliz: {
        title: "AI Analiz 🤖",
        text: "Yapay zeka ile alışveriş listenizi analiz edin; çevreye zararlı ürünleri tespit ederek alternatifler önerir."
    },
    karbonAyak: {
        title: "Karbon Ayak İzi 🌎",
        text: "Karbon ayak izi, faaliyetlerimizin çevreye saldığı karbon miktarını gösterir. Daha az et tüketimi ve geri dönüşüm ile bu izi küçültebilirsiniz."
    },
    geriDonusum: {
        title: "Geri Dönüşüm ♻️",
        text: "Atıkları ayrıştırın: kağıt, plastik, cam ve metali geri dönüşüme kazandırın."
    },
    suTasarrufu: {
        title: "Su Tasarrufu 💧",
        text: "Su musluklarını kapatın, kısa duşlar alın ve damlatan muslukları hemen onarın."
    },
    dogalUrun: {
        title: "Doğa Dostu Ürünler 🌱",
        text: "Organik, yerel ve doğa dostu ürünler kullanarak kimyasal atıkları azaltabilirsiniz."
    }
};

const checks = [
    {
        item: 'plastik şişe',
        message: 'Plastik şişeler doğada çözünmesi yüzyıllar süren atıklardır.',
        images: ['https://i.ibb.co/nBfJqzL/turtle.jpg', 'https://i.ibb.co/ZmMP3hD/microplastic.jpg'],
        alternative: 'Matara kullanın ve mavi geri dönüşüm kutusuna atın.'
    }
];

function openInfo(key) {
    document.getElementById('modalTitle').innerText = infoData[key].title;
    document.getElementById('modalText').innerText = infoData[key].text;
    document.getElementById('infoModal').style.display = 'flex';
}

function aiAnalyze() {
    const list = document.getElementById('listInput').value.toLowerCase();
    const feedback = document.getElementById('aiFeedback');
    feedback.innerHTML = '';
    let found = false;
    checks.forEach(c => {
        if (list.includes(c.item)) {
            found = true;
            feedback.innerHTML += `
                <p>✅ <strong>${c.item}</strong> bulundu:</p>
                <p>${c.message}</p>
                <div class="impact-images">
                    <img src="${c.images[0]}" class="round-img">
                    <img src="${c.images[1]}" class="round-img">
                </div>
                <button class="btn2" onclick="showAlternative('${c.alternative}')">Ne Yapmalıyım?</button>
                <hr>
            `;
        }
    });
    if (!found) {
        feedback.innerHTML = '<p>🎉 Listenizde çevreye zararlı ürün bulunamadı!</p>';
    }
    feedback.classList.remove('hidden');
}

function showAlternative(text) {
    document.getElementById('alternativeContent').innerText = text;
    document.getElementById('alternativeModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
    document.getElementById('alternativeModal').style.display = 'none';
}
