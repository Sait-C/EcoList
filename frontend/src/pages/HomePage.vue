<template>
  <div class="home">
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Alışveriş Listenizin Etkisini Analiz Edin</h1>
          <p>Bu platformda alışveriş listenizin çevresel etkisini analiz edebilir, daha sürdürülebilir seçimler yapabilirsiniz.</p>
          <p class="hero-cta">🌱 Küçük değişimlerle büyük farklar yaratabilirsiniz. 🛒 Alışveriş listenizi dönüştürerek ne kadar sürdürülebilir olabileceğinizi görmek ister misiniz? Hadi başlayalım! 🚀</p>
          <button class="primary-button">Hemen Başla</button>
        </div>
        <div class="hero-image">
          <img src="@/assets/earth-list.svg" alt="Earth and checklist illustration" class="earth-illustration" />
        </div>
      </section>

      <section class="about-section">
        <div class="about-content">
          <h2>Biz Kimiz?</h2>
          <p class="about-description">
            Eco, sürdürülebilir yaşamı destekleyen ve çevresel etkiyi azaltmayı hedefleyen bir platformdur. 
            Amacımız, günlük alışveriş alışkanlıklarınızın çevreye olan etkisini görünür kılmak ve 
            daha bilinçli seçimler yapmanıza yardımcı olmaktır.
          </p>
          
          <div class="goals-grid">
            <div class="goal-card">
              <div class="goal-icon">🎯</div>
              <h3>Misyonumuz</h3>
              <p>Her bireyin çevresel etkisini anlamasını ve azaltmasını sağlamak için güçlü araçlar sunmak.</p>
            </div>
            
            <div class="goal-card">
              <div class="goal-icon">💡</div>
              <h3>Vizyonumuz</h3>
              <p>Sürdürülebilir tüketim alışkanlıklarını teşvik ederek daha yeşil bir gelecek yaratmak.</p>
            </div>
            
            <div class="goal-card">
              <div class="goal-icon">🤝</div>
              <h3>Değerlerimiz</h3>
              <p>Şeffaflık, bilimsel doğruluk ve sürdürülebilir yaşam pratiklerini desteklemek.</p>
            </div>
          </div>

          <div class="how-it-works">
            <h3>Nasıl Çalışır?</h3>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <p>Alışveriş listenizi girin</p>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <p>Çevresel etki analizini görün</p>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <p>Sürdürülebilir alternatifleri keşfedin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="analysis-section">
        <h2>Analiz Sonucu</h2>
        <div class="analysis-content">
          <div class="carbon-footprint">
            <h3>Toplam Karbon Ayak İzi</h3>
            <div class="chart">
              <div class="pie-chart">
                <div class="slice-1"></div>
                <div class="slice-2"></div>
              </div>
            </div>
            <p>Yaklaşık 23 kg CO₂ salınımı</p>
          </div>
          
          <div class="impact-analysis">
            <h3>En Çok Zarar Veren Ürün</h3>
            <div class="product-impact">
              <div class="product-icons">
                <span class="meat-icon">🥩</span>
                <span class="carrot-icon">🥕</span>
              </div>
              <h4>Sığır Eti</h4>
              <p>15 kg CO₂ / kg</p>
            </div>
          </div>
        </div>
      </section>

      <section class="alternatives-section">
        <h2>Sürdürülebilir Alternatifler</h2>
        <div class="alternatives-content">
          <div class="alternative-item">
            <div class="bottle-comparison">
              <div class="disposable-bottle">🥤</div>
              <div class="reusable-bottle">🧉</div>
            </div>
            <h4>Plastik Şişe → Cam Şişe</h4>
            <p>%100 daha az plastik atık</p>
            <p class="alternative-detail">Yeniden kullanılabilir cam şişe ile yılda 365 plastik şişe atığını önleyin</p>
          </div>

          <div class="alternative-item">
            <div class="food-comparison">
              <div class="meat">🥩</div>
              <div class="plant-based">🥗</div>
            </div>
            <h4>Kırmızı Et → Mercimek</h4>
            <p>%70 daha az karbon emisyonu</p>
            <p class="alternative-detail">1 kg kırmızı et yerine mercimek tüketerek 15 kg CO₂ tasarrufu sağlayın</p>
          </div>

          <div class="alternative-item">
            <div class="transport-comparison">
              <div class="car">🚗</div>
              <div class="bike">🚲</div>
            </div>
            <h4>Araba → Bisiklet</h4>
            <p>%90 daha az karbon ayak izi</p>
            <p class="alternative-detail">5 km'lik mesafede araba yerine bisiklet kullanarak 2.5 kg CO₂ tasarrufu</p>
          </div>

          <div class="alternative-item">
            <div class="packaging-comparison">
              <div class="plastic-bag">🛍️</div>
              <div class="cotton-bag">👜</div>
            </div>
            <h4>Plastik Poşet → Bez Çanta</h4>
            <p>%95 daha az plastik kullanımı</p>
            <p class="alternative-detail">Tek kullanımlık poşetler yerine bez çanta ile yılda 500 plastik poşeti önleyin</p>
          </div>

          <div class="alternative-item">
            <div class="energy-comparison">
              <div class="regular-bulb">💡</div>
              <div class="led-bulb">✨</div>
            </div>
            <h4>Normal Ampul → LED</h4>
            <p>%85 daha az enerji tüketimi</p>
            <p class="alternative-detail">LED ampul kullanarak yılda 50 kg CO₂ emisyonunu azaltın</p>
          </div>

          <div class="alternative-item">
            <div class="water-comparison">
              <div class="bottled-water">💧</div>
              <div class="tap-water">🚰</div>
            </div>
            <h4>Şişe Su → Musluk Suyu</h4>
            <p>%80 daha az plastik atık</p>
            <p class="alternative-detail">Filtreli su şişesi kullanarak yılda 300 plastik şişe atığını önleyin</p>
          </div>

          <div class="alternative-item">
            <div class="paper-comparison">
              <div class="paper-towel">🧻</div>
              <div class="cloth-towel">🧺</div>
            </div>
            <h4>Kağıt Havlu → Bez Havlu</h4>
            <p>%75 daha az ağaç tüketimi</p>
            <p class="alternative-detail">Bez havlu kullanarak yılda 1 ağacın kesilmesini önleyin</p>
          </div>

          <div class="alternative-item">
            <div class="coffee-comparison">
              <div class="disposable-cup">☕</div>
              <div class="reusable-cup">🫖</div>
            </div>
            <h4>Tek Kullanımlık Bardak → Termos</h4>
            <p>%85 daha az atık</p>
            <p class="alternative-detail">Termos kullanarak yılda 250 tek kullanımlık bardak atığını önleyin</p>
          </div>

          <div class="alternative-item">
            <div class="cleaning-comparison">
              <div class="chemical-cleaner">🧪</div>
              <div class="natural-cleaner">🍋</div>
            </div>
            <h4>Kimyasal Temizleyici → Doğal Temizleyici</h4>
            <p>%90 daha az kimyasal atık</p>
            <p class="alternative-detail">Sirke ve limon kullanarak hem doğayı hem bütçenizi koruyun</p>
          </div>
        </div>
      </section>

      <section class="eco-tips">
        <h2>Eko İpuçları</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <div class="tip-icon">🌱</div>
            <h3>Yerel Ürünler</h3>
            <ul class="tip-list">
              <li>Mevsiminde yetişen sebze ve meyveleri tercih edin</li>
              <li>Mahalle pazarlarından alışveriş yapın</li>
              <li>Yerel üreticilerin ürünlerini seçin</li>
            </ul>
            <p class="tip-impact">Etki: %40 daha az karbon emisyonu</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🌞</div>
            <h3>Mevsimsel Beslenme</h3>
            <ul class="tip-list">
              <li>Yazın domates, kışın portakal tüketin</li>
              <li>Dondurulmuş gıdalar yerine taze ürünleri tercih edin</li>
              <li>Mevsim dışı ürünlerden kaçının</li>
            </ul>
            <p class="tip-impact">Etki: %30 daha az enerji tüketimi</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">♻️</div>
            <h3>Sıfır Atık</h3>
            <ul class="tip-list">
              <li>Alışverişlerde bez çanta kullanın</li>
              <li>Cam kavanozları saklama kabı olarak değerlendirin</li>
              <li>Kompost yaparak organik atıkları değerlendirin</li>
            </ul>
            <p class="tip-impact">Etki: %60 daha az atık üretimi</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">💧</div>
            <h3>Su Tasarrufu</h3>
            <ul class="tip-list">
              <li>Diş fırçalarken musluğu kapatın</li>
              <li>Duş süresini 5 dakika ile sınırlayın</li>
              <li>Bulaşık makinesini tam dolu çalıştırın</li>
            </ul>
            <p class="tip-impact">Etki: %25 daha az su tüketimi</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🔌</div>
            <h3>Enerji Tasarrufu</h3>
            <ul class="tip-list">
              <li>Kullanılmayan cihazların fişini çekin</li>
              <li>LED ampuller kullanın</li>
              <li>Çamaşırları soğuk suda yıkayın</li>
            </ul>
            <p class="tip-impact">Etki: %20 daha az enerji tüketimi</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🚶</div>
            <h3>Ulaşım</h3>
            <ul class="tip-list">
              <li>Kısa mesafelerde yürüyün veya bisiklet kullanın</li>
              <li>Toplu taşıma araçlarını tercih edin</li>
              <li>Araç paylaşımı yapın</li>
            </ul>
            <p class="tip-impact">Etki: %45 daha az karbon emisyonu</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">👕</div>
            <h3>Sürdürülebilir Moda</h3>
            <ul class="tip-list">
              <li>İkinci el kıyafetleri tercih edin</li>
              <li>Kaliteli ve dayanıklı parçalar seçin</li>
              <li>Kıyafetlerinizi tamir edin veya dönüştürün</li>
            </ul>
            <p class="tip-impact">Etki: %35 daha az tekstil atığı</p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">🌿</div>
            <h3>Doğal Temizlik</h3>
            <ul class="tip-list">
              <li>Sirke ve karbonat ile temizlik yapın</li>
              <li>Doğal sabun ve şampuan kullanın</li>
              <li>Kendi temizlik ürünlerinizi yapın</li>
            </ul>
            <p class="tip-impact">Etki: %50 daha az kimyasal atık</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false
    }
  },
  methods: {
    toggleFlip() {
      this.isFlipped = !this.isFlipped;
    }
  }
}
</script>

<style scoped>
.home {
  padding: 2rem;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
}

.hero-content {
  flex: 1;
  padding-right: 2rem;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.earth-illustration {
  max-width: 300px;
}

.alternatives-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.alternative-item {
  text-align: center;
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.alternative-item:hover {
  transform: translateY(-5px);
}

.alternative-detail {
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.5rem;
  line-height: 1.4;
}

h4 {
  font-size: 1.2rem;
  color: #333;
  margin: 1rem 0 0.5rem;
}

.bottle-comparison,
.food-comparison,
.transport-comparison,
.packaging-comparison,
.energy-comparison,
.water-comparison,
.paper-comparison,
.coffee-comparison,
.cleaning-comparison {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.tip-card {
  text-align: left;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-5px);
}

.tip-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tip-list {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
}

.tip-list li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.4;
}

.tip-list li:before {
  content: "•";
  color: #4CAF50;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.tip-impact {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  color: #4CAF50;
  font-weight: 500;
  font-size: 0.9rem;
}

.primary-button {
  background: #4CAF50;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.primary-button:hover {
  background: #45a049;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #444;
}

p {
  color: #666;
  line-height: 1.6;
}

.about-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
  margin: 2rem 0;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #444;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
}

.goals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.goal-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.goal-card:hover {
  transform: translateY(-5px);
}

.goal-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.how-it-works {
  text-align: center;
  margin-top: 4rem;
}

.steps {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
}

.step-number {
  width: 40px;
  height: 40px;
  background: #4CAF50;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .steps {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  
  .goal-card {
    margin: 0 1rem;
  }

  .alternatives-content {
    grid-template-columns: 1fr;
  }

  .earth-illustration {
    max-width: 300px;
  }
}

.hero-cta {
  font-size: 1.1rem;
  color: #4CAF50;
  font-weight: 500;
  margin: 1.5rem 0;
  line-height: 1.8;
  max-width: 800px;
}

.hero-cta span {
  font-size: 1.3rem;
  margin: 0 0.2rem;
}

.flip-container {
  perspective: 1000px;
  cursor: pointer;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.flipper {
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.flipped {
  transform: rotateY(180deg);
}

.front, .back {
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.front {
  z-index: 2;
}

.back {
  transform: rotateY(180deg);
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  overflow-y: auto;
  max-height: 600px;
}

.tree-diagram {
  padding: 1rem;
}

.diagram-title {
  font-size: 1.5rem;
  color: #4CAF50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.branch {
  margin-bottom: 2rem;
}

.branch-title {
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #4CAF50;
}

.sub-branches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.sub-branch {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
}

.sub-title {
  color: #4CAF50;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.sub-branch ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sub-branch li {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.sub-branch li:before {
  content: "•";
  color: #4CAF50;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .sub-branches {
    grid-template-columns: 1fr;
  }
  
  .back {
    max-height: 500px;
  }
}
</style>