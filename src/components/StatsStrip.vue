<template>
  <section class="section">
    <div class="grid grid-3">
      <article class="card page-title" v-for="item in stats" :key="item.label">
        <h3>{{ item.value }}</h3>
        <p class="muted">{{ item.label }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: 'Android', label: 'Production-minded app development' },
  { value: 'Vue 3', label: 'Modern frontend and portfolio UI' },
  { value: 'SEO', label: 'Search-ready custom domain site' }
]
</script>
