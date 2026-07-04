<template>
  <section class="section">
    <div class="panel timeline">
      <p class="eyebrow">Experience</p>
      <h2>Senior-style execution with product thinking</h2>

      <div class="timeline-list">
        <article v-for="item in items" :key="item.year" class="timeline-item">
          <div class="timeline-year">{{ item.year }}</div>
          <div>
            <h3>{{ item.title }}</h3>
            <p class="muted">{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    year: '2026',
    title: 'Portfolio systems and SEO-first engineering',
    description: 'Built a performant, custom-domain portfolio with automation and analytics readiness.'
  },
  {
    year: '2025',
    title: 'Android app refinement and architecture',
    description: 'Focused on cleaner architecture, modular code, and production-ready UX.'
  },
  {
    year: '2024',
    title: 'GitHub-first showcase strategy',
    description: 'Curated public repos and project summaries for recruiter-friendly presentation.'
  }
]
</script>
