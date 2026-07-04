<template>
  <section class="grid grid-3">
    <article v-for="item in featuredProjects" :key="item.title" class="card project-card">
      <p class="tag">{{ item.tag }}</p>
      <h3>{{ item.title }}</h3>
      <p class="muted">{{ item.description }}</p>
      <ul>
        <li v-for="p in item.points" :key="p">{{ p }}</li>
      </ul>
      <div class="card-footer">
        <span>{{ item.stack }}</span>
        <a :href="item.link" target="_blank" rel="noopener">View</a>
      </div>
    </article>
  </section>
</template>

<script setup>
import { featuredProjects } from '../data/featuredProjects.js'
</script>
