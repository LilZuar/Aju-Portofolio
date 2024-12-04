<template>
  <Header />
  <!-- Check if work is defined -->
  <section v-if="work && work.title" class="flex flex-col justify-center p-10 w-full bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
    <div class="flex flex-wrap gap-7 items-center w-full max-md:max-w-full">
      <div class="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[458px] max-md:max-w-full">
        <div class="flex flex-col max-w-full font-semibold w-[700px]">
          <h1 class="mt-10 text-7xl leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            {{ work.title }}
          </h1>
        </div>
        <p class="mt-10 text-lg leading-loose max-md:max-w-full">
          {{ work.subtitle }}
        </p>
      </div>
      <img
        loading="lazy"
        :src="'/images/' + work.image"
        :alt="work.title"
        class="object-contain grow shrink self-stretch my-auto aspect-[1.17] min-w-[240px] w-[396px] max-md:max-w-full"
      />
    </div>
  </section>

  <!-- Description section placed below -->
  <section v-if="work && work.description" class="p-16 w-full bg-zinc-50 text-zinc-800 max-md:px-5 max-md:max-w-full">
    <div class="flex flex-col items-center w-full max-md:max-w-full">
      <h2 class="text-3xl font-semibold leading-none text-center mb-10">Description</h2>
      <p class="mt-6 text-lg text-zinc-600 leading-relaxed max-md:max-w-full">
        {{ work.description }}
      </p>
    </div>
  </section>

  <!-- Fallback if work is not found -->
  <div v-else class="text-center py-20">
    <p class="text-xl text-red-500">Work not found.</p>
    <p class="text-lg text-zinc-800">Requested link: {{ $route.params.slug }}</p>
    <NuxtLink to="/" class="text-blue-500 hover:underline">Back</NuxtLink>
  </div>
</template>



<script setup>
import { useRoute } from 'vue-router';
import { useAsyncData } from 'nuxt/app';

const route = useRoute();

// Fetch data asynchronously
const { data: work, error } = await useAsyncData('work', () => {
  const workItems = [
    { title: "Check Mate", subtitle: "IOS app for daily reminder", image: "CheckMate.png", description: "CheckMate is a location-based and time-based reminder app designed to help users keep track of important items. It’s particularly useful for individuals who frequently forget essential belongings when leaving specific locations. CheckMate leverages location detection to trigger reminders if a user exits a designated area without a specified item. Additionally, users can set reminders based on time, receiving notifications when scheduled." },
    { title: "Day Out", subtitle: "IOS app to check weather for outdoor family activity", image: "DayOut.png" },
    { title: "Sing Eling", subtitle: "IOS Games that help you to learn Javanese", image: "SingEling.png" },
  ];

  const slug = route.params.slug.replace(/-/g, ' ').trim().toLowerCase();

  console.log("Transformed Slug:", slug);

  const work = workItems.find(item => item.title.trim().toLowerCase() === slug);

  console.log("Matched Work:", work);

  return work || { title: "Not Found", subtitle: "The requested work was not found.", image: "" };
});

// Handle errors if any
if (error.value) {
  console.error('Error:', error.value);
}
</script>
