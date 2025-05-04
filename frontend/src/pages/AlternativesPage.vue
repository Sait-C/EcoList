<template>
  <div class="alternatives">
    <h1>Plastik Şişe ve Çevresel Etkisi</h1>
    <p>Plastik şişeler doğada çözülmesi yüzlerce yıl süren ciddi çevre sorunlarına yol açar.</p>
    <section class="impact-cards">
      <div class="card"><b>450 Yılda Yok Olur</b><br>Plastik şişeler doğada ortalama 450 yıl kalır.</div>
      <div class="card"><b>Deniz Canlılarına Zarar</b><br>Deniz kaplumbağaları ve kuşlar plastikleri yutarak zarar görebilir.</div>
      <div class="card"><b>Mikroplastik Sorunu</b><br>Çözülen plastikler mikroplastiklere dönüşerek zincirleme zarar verir.</div>
    </section>
    <section class="card alt-section">
      <h2>Sürdürülebilir Alternatif</h2>
      <div style="display:flex;gap:2em;">
        <div><b>Matara Kullan</b><br>%90 daha az atık üretirsiniz.</div>
        <div><b>Cam Şişe</b><br>Cam şişeler doğada plastiklere göre çok daha hızlı dönüşür.</div>
      </div>
    </section>
    <section class="card disposal-section">
      <h2>Eğer Doğaya Atarsanız...</h2>
      <div style="display:flex;align-items:center;gap:2em;">
        <div style="font-size:3em;">🐢</div>
        <div>
          <div>1 yıl: Çöpler birikir</div>
          <div>10 yıl: Mikroplastikler ortaya çıkar</div>
          <div>50 yıl: Canlı yaşamı zarar görür</div>
        </div>
      </div>
      <div style="margin-top:1em;display:flex;gap:1em;">
        <button class="btn">Bir Sonraki Ürüne Bak</button>
        <router-link to="/analiz-sonucu" class="btn">Analiz Sonucu Sayfasına Geri Dön</router-link>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.alternatives { max-width: 900px; margin: 2em auto; }
.impact-cards { display: flex; gap: 2em; margin: 2em 0; }
.alt-section { margin: 2em 0; }
.disposal-section { margin: 2em 0; }
</style> 