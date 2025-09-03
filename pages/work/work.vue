<template>
    <div class="min-h-screen flex flex-col bg-zinc-50 text-zinc-800">
      <!-- Work Section -->
      <main class="flex-1 px-6 md:px-16 lg:px-32 py-16">
        <h1 class="text-4xl font-bold text-center mb-12">My Work</h1>
  
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <!-- Loop Work Items -->
          <NuxtLink
            v-for="(item, index) in workItems"
            :key="index"
            :to="`/work/${item.title.toLowerCase().replace(/\s+/g, '-')}`"
            class="block rounded-xl shadow-md bg-white hover:shadow-lg transition overflow-hidden"
          >
            <img
              :src="'/images/' + item.image"
              :alt="item.title"
              loading="lazy"
              class="w-full h-48 object-contain bg-white p-4"
            />
            <div class="p-6">
              <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2>
              <p class="text-zinc-600 text-justify leading-relaxed line-clamp-3">
                {{ item.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </main>
      <!-- Contact Section -->
        <section id="contact" class="w-full bg-white py-24 px-6 md:px-16 lg:px-32">
        <div class="max-w-5xl mx-auto border-t border-zinc-200 pt-16 flex flex-col lg:flex-row gap-12">
            <div class="flex-1">
            <h2 class="text-4xl font-bold text-zinc-800">Let's work together</h2>
            <p class="mt-6 text-lg text-zinc-600 leading-relaxed">
                I’d love to collaborate on your next project. If you have questions or ideas,
                feel free to reach out through the form.
            </p>
            </div>
            <div class="flex-1">
            <ContactForm />
            </div>
        </div>
        </section>
    </div>
  </template>
  
  <script setup>
  import data from '@/data/data'
  
  // ambil data work dari file data.js
  const workItems = data.workItems
  </script>
  
  <style scoped>
  /* optional: supaya line-clamp jalan */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  