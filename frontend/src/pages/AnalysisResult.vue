<template>
  <div class="analysis-result">
    <section class="hero">
      <div>
        <h1>Alışveriş Listenizin Etkisini Analiz Edin</h1>
        <p>Bu platformda alışveriş listenizin çevresel etkisini analiz edebilir, daha sürdürülebilir seçimler yapabilirsiniz.</p>
        <router-link to="/liste-yukle" class="btn">Hemen Başla</router-link>
      </div>
      <BrandLogo />
    </section>
    <section class="cards">
      <div class="card">
        <h3>Toplam Karbon Ayak İzi</h3>
        <div>Yaklaşık 23 kg CO₂ salınımı</div>
      </div>
      <div class="card">
        <h3>En Çok Zarar Veren Ürün</h3>
        <div>Sığır Eti</div>
        <div>15 kg CO₂ / kg</div>
      </div>
    </section>
    <section class="cards">
      <div class="card">
        <h3>Sürdürülebilir Alternatifler</h3>
        <div style="display:flex;align-items:center;gap:2em;">
          <div><img src="@/assets/images/logo.png" style="width:40px;"/> %0 daha az atik</div>
          <div><img src="@/assets/images/logo.png" style="width:40px;"/> %90 daha az atik</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BrandLogo from '@/components/custom/logo/BrandLogo.vue';
</script>

<style lang="scss" scoped>
.analysis-result { max-width: 900px; margin: 2em auto; }
.hero { display: flex; align-items: center; justify-content: space-between; padding: 2em 0; }
.cards { display: flex; gap: 2em; margin-top: 2em; }
</style> 