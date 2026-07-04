<template>
  <main class="section">
    <div class="grid gap-20">
      <div class="panel page-title">
        <p class="eyebrow">Projects</p>
        <h2>Senior-level project presentation</h2>
        <p class="muted">
          Structure your repos like case studies: problem, stack, solution, and measurable impact.
        </p>
      </div>

      <FeaturedProjects />
      <RepoMarquee />
    </div>
  </main>
</template>

<script setup>
import FeaturedProjects from '../components/FeaturedProjects.vue'
import RepoMarquee from '../components/RepoMarquee.vue'
</script>
