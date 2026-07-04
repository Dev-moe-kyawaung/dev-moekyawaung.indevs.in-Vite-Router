<template>
  <section class="card marquee">
    <div class="marquee-head">
      <h3>Auto-updating GitHub repos</h3>
      <p class="muted">Latest repositories can be pulled from a static JSON or directly from GitHub API.</p>
    </div>

    <div class="marquee-track">
      <span v-for="repo in repos" :key="repo.name" class="pill">
        {{ repo.name }}
      </span>
    </div>
  </section>
</template>

<script setup>
const repos = [
  { name: 'Android-Projects' },
  { name: 'Vue-Portfolio' },
  { name: 'Civic-Dashboard' },
  { name: 'AI-Tools' },
  { name: 'Portfolio-CV' }
]
</script>
