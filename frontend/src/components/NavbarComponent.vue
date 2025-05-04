<template>
  <nav class="navbar">
    <div class="logo">Sürdürülebilirlik</div>
    <ul>
      <li><router-link to="/">Anasayfa</router-link></li>
      <li><router-link to="/liste-yukle">Liste Yükle</router-link></li>
      <li><router-link to="/analiz-sonucu">Analiz Sonucu</router-link></li>
      <li><router-link to="/alternatifler">Alternatifler</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.navbar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1.5em 2em; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  .logo { font-weight: bold; color: $primary; font-size: 1.3em; }
  ul { display: flex; gap: 2em; list-style: none; margin: 0; padding: 0;
    li a { color: $text; text-decoration: none; font-weight: 500;
      &.router-link-exact-active { color: $primary; border-bottom: 2px solid $primary; }
    }
  }
}
</style> 