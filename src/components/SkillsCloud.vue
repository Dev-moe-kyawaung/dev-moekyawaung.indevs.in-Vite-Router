<template>
  <section class="section">
    <div class="panel">
      <p class="eyebrow">Skills</p>
      <h2>Core technical stack</h2>

      <div class="skills">
        <span v-for="skill in skills" :key="skill" class="skill-chip">{{ skill }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  'Kotlin',
  'Java',
  'Android Jetpack',
  'MVVM',
  'Room',
  'Retrofit',
  'Vue 3',
  'Vite',
  'Vue Router',
  'GitHub Actions',
  'REST APIs',
  'SEO',
  'Cloudflare',
  'Git',
  'CI/CD'
]
</script>
