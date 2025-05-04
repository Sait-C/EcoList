<template>
  <div>
    <section class="hero">
      <div>
        <h1>Alışveriş Listenizin Çevresel Etkisini Analiz Edin</h1>
        <p>Bu platformda alışveriş listenizi yükleyerek çevresel etkisini analiz edebilir, sürdürülebilir alternatifler öğrenebilirsiniz.</p>
        <router-link to="/liste-yukle" class="btn">Hemen Başla</router-link>
      </div>
      <img src="@/assets/logo.png" alt="Earth" style="width:180px;" />
    </section>
    <section class="cards">
      <!-- Placeholder for AnalysisSummary, Alternatives, InfoCard -->
      <div class="card">Analiz Özeti</div>
      <div class="card">Alternatifler</div>
      <div class="card">Nasıl Çalışır?</div>
    </section>
    <section class="about card">
      <h2>Hakkımızda</h2>
      <p>Sürdürülebilir yaşam için alışveriş alışkanlıklarınızı dönüştürmek istiyoruz...</p>
    </section>
    <section class="info-center">
      <div class="card">Karbon Ayak İzi Nedir?</div>
      <div class="card">Gıda İsrafını Azaltmanın 5 Yolu</div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero { display: flex; align-items: center; justify-content: space-between; padding: 2em 0; }
.cards { display: flex; gap: 2em; margin-top: 2em; }
.info-center { display: flex; gap: 2em; margin-top: 2em; }
.about { margin-top: 2em; }
</style> 