<template>
  <section class="flex flex-col justify-center p-24 w-full bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
    <div class="flex flex-wrap gap-7 items-center w-full max-md:max-w-full">
      <div class="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[458px] max-md:max-w-full">
        <div class="flex flex-col max-w-full font-semibold w-[700px]">
          <h2 class="text-xl max-md:max-w-full">Software Engineer | Mobile Programmer</h2>
          <h1 class="mt-10 text-7xl leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">Lazuardhi Imani Ahfar</h1>
        </div>
        <p class="mt-10 text-lg leading-loose max-md:max-w-full">Welcome to Azuar's Portfolio</p>
        <!-- "See More" Button -->
        <router-link
          to="/about/aboutme"
          class="mt-5 w-32 inline-block px-6 py-3 text-white bg-black rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          See More
        </router-link>
      </div>
      <img
        loading="lazy"
        src="/images/aju2.png"
        alt="Portfolio hero illustration"
        class="object-contain grow shrink self-stretch my-auto aspect-[1.17] min-w-[240px] w-[396px] max-md:max-w-full"
      />
    </div>
  </section>
</template>
