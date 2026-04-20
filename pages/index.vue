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
    <section class="w-full bg-white text-slate-800 py-24 px-6 md:px-16 lg:px-32">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Services</h2>
        <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          I help businesses and individuals build impactful digital experiences.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-16">
        <div
          v-for="service in services"
          :key="service.title"
          class="flex flex-col items-center w-[280px] md:w-[320px] p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
        >
          <div class="p-4 bg-indigo-50/50 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
            <img
              :src="'/images/' + service.icon"
              :alt="service.title + ' icon'"
              loading="lazy"
              class="object-contain w-24 h-24"
            />
          </div>
          <h3 class="text-2xl font-bold text-slate-800 mb-4">{{ service.title }}</h3>
          <p class="text-base text-slate-600 text-center leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section id="work" class="w-full bg-slate-50 text-slate-800 py-24 px-6 md:px-16 lg:px-32">
      <h2 class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">My Latest Work</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <NuxtLink
          v-for="work in workItems.slice(0, 3)"
          :key="work.title"
          :to="`/work/${work.title.replace(/\s+/g, '-').toLowerCase()}`"
          class="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 overflow-hidden transition-all duration-300"
        >
          <div class="overflow-hidden">
            <img
              :src="'/images/' + work.image"
              :alt="work.title"
              class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors">{{ work.title }}</h3>
            <p class="text-slate-600 leading-relaxed">{{ work.subtitle }}</p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="w-full bg-white py-24 px-6 md:px-16 lg:px-32">
      <div class="max-w-6xl mx-auto border-t border-slate-200 pt-20 flex flex-col lg:flex-row gap-16">
        <div class="flex-1">
          <h2 class="text-5xl font-bold text-slate-800 tracking-tight">Let's work <br/> <span class="text-indigo-600">together</span></h2>
          <p class="mt-8 text-xl text-slate-600 leading-relaxed max-w-md">
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
