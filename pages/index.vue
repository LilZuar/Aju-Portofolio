<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import ContactForm from '@/components/ContactForm.vue'
import data from '@/data/data'

const workItems = data.workItems
const services = data.services
</script>

<template>
  <div class="flex flex-col font-sans">
    <!-- Header & Hero -->
    <Hero />

    <!-- Services Section -->
    <section class="w-full bg-white text-zinc-800 py-24 px-6 md:px-16 lg:px-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold">Services</h2>
        <p class="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
          I help businesses and individuals build impactful digital experiences.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-16">
        <div
          v-for="service in services"
          :key="service.title"
          class="flex flex-col items-center w-[280px] md:w-[320px] p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            :src="'/images/' + service.icon"
            :alt="service.title + ' icon'"
            loading="lazy"
            class="object-contain w-32 h-32 mb-8"
          />
          <h3 class="text-2xl font-semibold mb-4">{{ service.title }}</h3>
          <p class="text-base text-zinc-600">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section id="work" class="w-full bg-gray-50 text-zinc-800 py-24 px-6 md:px-16 lg:px-32">
      <h2 class="text-4xl font-bold text-center mb-16">My Latest Work</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <NuxtLink
          v-for="work in workItems.slice(0, 3)"
          :key="work.title"
          :to="`/work/${work.title.replace(/\s+/g, '-').toLowerCase()}`"
          class="flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition duration-300"
        >
          <img
            :src="'/images/' + work.image"
            :alt="work.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ work.title }}</h3>
            <p class="text-zinc-600">{{ work.subtitle }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

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
