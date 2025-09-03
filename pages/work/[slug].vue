<template>
  <!-- Work Detail Section -->
  <section
    v-if="work && work.title && work.title !== 'Not Found'"
    class="w-full bg-white text-zinc-800"
  >
    <!-- Hero Glide Image -->
    <div class="w-full">
      <img
        :src="'/images/' + work.glide"
        :alt="work.title"
        loading="lazy"
        class="w-full max-h-[300px] object-contain rounded-b-2xl shadow-md"
      />

      <h1 class="mt-6 text-4xl md:text-6xl font-bold text-zinc-800 text-center">
        {{ work.title }}
      </h1>
    </div>

    <!-- Subtitle + Screenshot -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 px-6 md:px-16 lg:px-32">
      <!-- Text -->
      <div>
        <h2 class="text-2xl md:text-3xl font-semibold text-zinc-800 mb-4">
          {{ work.subtitle }}
        </h2>
        <p class="text-lg text-zinc-600 leading-relaxed text-justify">
          {{ work.description }}
        </p>
      </div>

      <!-- Banner / Screenshot -->
      <div class="flex justify-center">
        <img
          :src="'/images/' + work.image"
          :alt="work.title"
          loading="lazy"
          class="rounded-xl shadow-lg object-contain max-h-[300px] w-full bg-white p-4"
        />
      </div>
    </div>

    <!-- === New Sections === -->

    <!-- Job Desc Section -->
    <section class="px-6 md:px-16 lg:px-32 py-12 border-t">
      <h2 class="text-2xl font-semibold text-zinc-800 mb-4">Job Description</h2>
      <ul class="list-disc list-inside space-y-2 text-lg text-zinc-600">
        <p class="text-lg text-zinc-600 leading-relaxed text-justify">
          {{ work.jobDesc }}
        </p>
      </ul>
    </section>

    <!-- Preview Section -->
    <!-- <section class="px-6 md:px-16 lg:px-32 py-12 border-t">
      <h2 class="text-2xl font-semibold text-zinc-800 mb-4">Preview</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          v-for="(img, index) in work.preview"
          :key="index"
          :src="'/images/' + img"
          alt="Preview image"
          class="rounded-xl shadow-md object-contain w-full bg-white p-2"
        />
      </div>
    </section> -->
  </section>

  <!-- Fallback if work is not found -->
  <section v-else class="flex flex-col items-center justify-center py-32 px-6 text-center">
    <h2 class="text-4xl font-bold text-red-500 mb-4">Work not found</h2>
    <p class="text-lg text-zinc-600 mb-6">
      Requested link: <span class="font-mono">{{ $route.params.slug }}</span>
    </p>
    <NuxtLink
      to="/"
      class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Back to Home
    </NuxtLink>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAsyncData } from 'nuxt/app'
import data from '@/data/data'

const route = useRoute()

// Fetch data asynchronously
const { data: work, error } = await useAsyncData('work', () => {
  const slug = route.params.slug.replace(/-/g, ' ').trim().toLowerCase()

  const work = data.workItems.find(
    (item) => item.title.trim().toLowerCase() === slug
  )

  return (
    work || {
      title: 'Not Found',
      subtitle: 'The requested work was not found.',
      image: '',
      glide: '',
      description: '',
      jobDesc: [],
      preview: []
    }
  )
})

// Handle errors if any
if (error.value) {
  console.error('Error:', error.value)
}
</script>
