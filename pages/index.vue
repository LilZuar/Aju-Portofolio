<script setup lang="ts">
// import Header from './components/Header.vue'
// import Hero from './components/Hero.vue'
// import ContactForm from './components/ContactForm.vue'
import data from '@/data/data'

const workItems = data.workItems;
const services = data.services;

</script>

<template>
  <div class="flex flex-col">
    <Header />
    <Hero />
    
    <!-- Services Section -->
    <section class="flex flex-col justify-center items-center px-56 py-64 w-full text-center bg-white text-zinc-800 max-md:px-8 max-md:py-36 max-md:max-w-full">
      <div class="flex flex-wrap gap-24 items-start max-md:max-w-full">
        <div v-for="service in services" :key="service.title" class="flex flex-col items-center min-w-[280px] w-[320px]">
          <img 
            :src="'/images/' + service.icon" 
            :alt="service.title" 
            loading="lazy" 
            class="object-contain max-w-full aspect-square w-[160px]" 
          />
          <div class="flex flex-col items-center mt-14 w-full max-md:mt-10">
            <h3 class="text-4xl font-semibold leading-loose">{{ service.title }}</h3>
            <p class="mt-5 text-lg leading-7">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Work Section -->
    <section id="work" class="flex flex-col items-center px-24 py-5 w-full bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
      <h2 class="text-3xl font-semibold leading-none text-center mb-10">My Latest Work</h2>
      <!-- Work items grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
        <NuxtLink 
          v-for="work in workItems" 
          :key="work.title" 
          :to="`/work/${work.title.replace(/\s+/g, '-').toLowerCase()}`"
          class="flex flex-col items-center"
        >
          <img :src="'/images/' + work.image" :alt="work.title" class="w-[450px] h-[150px] object-cover mb-4 rounded-lg shadow-md" />
          <h3 class="text-xl font-semibold">{{ work.title }}</h3>
          <p class="text-lg text-zinc-600">{{ work.subtitle }}</p>
        </NuxtLink>
      </div>
    </section>





    <!-- Contact Section -->
    <section id="contact" class="flex flex-col items-center px-24 mt-20 pb-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div class="flex flex-col items-center pt-16 border-t-2 border-black border-opacity-20 max-md:max-w-full">
        <div class="flex flex-wrap gap-10 items-start max-md:max-w-full">
          <div class="flex flex-col min-w-[240px] w-[360px]">
            <h2 class="text-3xl font-semibold leading-none text-zinc-800">Let's work together</h2>
            <p class="mt-10 text-lg leading-7 text-zinc-800">
              Hopefully we could work together in the future. If you have any question or want to discuss about project, feel free to contact me.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>