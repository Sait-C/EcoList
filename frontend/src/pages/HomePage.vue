<template>
  <div class="home">
    <main>
      <section class="hero">
        <div class="hero-content">
          <h1>Alışveriş Listenizin Etkisini Analiz Edin</h1>
          <p>Bu platformda alışveriş listenizin çevresel etkisini analiz edebilir, daha sürdürülebilir seçimler yapabilirsiniz.</p>
          <button class="primary-button">Hemen Başla</button>
        </div>
        <div class="hero-image">
          <img src="@/assets/earth-icon.svg" alt="Earth illustration" class="earth-illustration" />
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
              <div class="disposable-bottle"></div>
              <div class="reusable-bottle"></div>
            </div>
            <p>%0 daha az atık</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>