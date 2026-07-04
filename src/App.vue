<template>
  <div class="site-shell">
    <nav class="topbar">
      <a class="brand" href="/">Moe Kyaw Aung</a>
      <div class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </nav>

    <RouterView />

    <footer class="footer">
      <p>© 2026 Moe Kyaw Aung. Built with Vue, Vite, and GitHub Pages.</p>
    </footer>
  </div>
</template>
