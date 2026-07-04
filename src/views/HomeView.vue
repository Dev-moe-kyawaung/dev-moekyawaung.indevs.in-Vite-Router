<template>
  <main>
    <HeroSection />
    <StatsStrip />

    <section class="section">
      <div class="panel page-title">
        <p class="eyebrow">Selected Work</p>
        <h2>Featured GitHub repos and product case studies</h2>
        <p class="muted">
          Only the best, high-signal work is surfaced here: Android, Vue, civic-tech, and data-heavy projects.
        </p>
      </div>
    </section>

    <FeaturedProjects />
    <RepoMarquee />
    <ExperienceTimeline />
    <SkillsCloud />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import StatsStrip from '../components/StatsStrip.vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'
import RepoMarquee from '../components/RepoMarquee.vue'
import ExperienceTimeline from '../components/ExperienceTimeline.vue'
import SkillsCloud from '../components/SkillsCloud.vue'
</script>
