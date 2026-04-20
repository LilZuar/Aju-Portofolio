<template>
  <section class="flex flex-col justify-center p-24 w-full bg-gradient-to-br from-indigo-50/50 via-white to-slate-100 text-slate-800 max-md:px-5 max-md:max-w-full">
    <div class="flex flex-wrap gap-7 items-center w-full max-w-6xl mx-auto max-md:max-w-full">
      <div class="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[458px] max-md:max-w-full">
        <div class="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm w-fit text-sm font-medium text-slate-600">
          <span>👋</span> Hello, I'm
        </div>
        <div class="flex flex-col max-w-full font-semibold w-[700px]">
          <h2 class="text-xl text-indigo-600 font-medium max-md:max-w-full">Software Engineer | Mobile Programmer</h2>
          <h1 class="mt-4 text-7xl font-bold text-slate-900 leading-[90px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">Lazuardhi Imani Ahfar</h1>
        </div>
        <p class="mt-6 text-lg text-slate-600 leading-loose max-md:max-w-full">Welcome to Azuar's Portfolio.</p>
        <!-- "See More" Button -->
        <router-link
          to="/about/aboutme"
          class="mt-8 w-fit inline-block px-8 py-4 text-white bg-indigo-600 rounded-full shadow-lg shadow-indigo-200/50 text-lg font-medium hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300"
        >
          See More
        </router-link>
      </div>
      <img
        loading="lazy"
        src="/images/aju2.png"
        alt="Portfolio hero illustration"
        class="object-contain grow shrink self-stretch my-auto aspect-[1.17] min-w-[240px] w-[396px] max-md:max-w-full drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
      />
    </div>
  </section>
</template>
