<template>
  <div class="upload-list">
    <h1>Liste Yükle</h1>
    <p>Alışveriş listenizi yükleyin veya aşağıya girin</p>
    <div class="upload-section">
      <div class="file-upload card">
        <div style="text-align:center;">
          <div style="font-size:3em;">📄</div>
          <button class="btn">Dosya Seç</button>
        </div>
      </div>
      <div class="manual-entry card">
        <b>Listeyi manuel gir</b>
        <ul>
          <li>Süt</li>
          <li>Domates</li>
          <li>Kot Pantolon</li>
        </ul>
      </div>
    </div>
    <div style="margin:2em 0;">
      <label>Kategori seçin:</label>
      <select>
        <option>Gıda</option>
        <option>Giyim</option>
        <option>Elektronik</option>
      </select>
    </div>
    <button class="btn">Analiz Et</button>
  </div>
</template>

<style lang="scss" scoped>
.upload-list { max-width: 700px; margin: 2em auto; text-align: center; }
.upload-section { display: flex; gap: 2em; justify-content: center; margin: 2em 0; }
.file-upload, .manual-entry { flex: 1; min-width: 220px; }
</style> 