<template>
    <Header />
    <section class="flex flex-col items-center justify-center px-24 py-10 w-full bg-gray-50 text-zinc-800 max-md:px-5">
      <!-- Hero Section -->
      <div class="text-center mb-12">
  <h1 class="text-5xl font-bold leading-tight text-zinc-800 max-md:text-3xl">About Me</h1>
  <p class="mt-4 text-lg text-zinc-600 max-md:text-base">
    If you want to see a summarized version of me, you can check it here.
  </p>
  <a 
    href="/resume/Lazuardhi_Ahfar_Resume.pdf" 
    download="Lazuardhi_Imani_Ahfar.pdf"
    class="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-all"
  >
    Download My CV
  </a>
</div>

  
      <!-- Content Section -->
      <div class="flex flex-col gap-12 w-full max-w-4xl">
        <!-- Introduction -->
        <div class="text-lg leading-relaxed">
          <h2 class="text-2xl font-semibold mb-4 text-zinc-800">Introduction</h2>
          <p>
            I'm a passionate software developer with a strong background in HTML, Dart, SQL, Java, and Swift. If you looking for a developar that always eager to learn and grow , I'm the guy you looking for.
          </p>
        </div>
  
        <!-- Skills Section -->
        <div class="text-lg leading-relaxed">
          <h2 class="text-2xl font-semibold mb-4 text-zinc-800">Skills</h2>
          <ul class="list-disc list-inside text-zinc-600">
            <li>Proficient in Swift for iOS development.</li>
            <li>Experienced with Vue.js, Nuxt.js, and Laravel for building dynamic web applications.</li>
            <li>Experienced with Flutter and Dart language for developing mobile apps.</li>
            <li>Ability to integrate APIs and manage data using modern libraries.</li>
          </ul>
        </div>
  
         <!-- Experience Section -->
        <div class="text-lg leading-relaxed">
            <h2 class="text-2xl font-semibold mb-4 text-zinc-800">Experience</h2>
            <ul class="list-disc list-inside text-zinc-600">
            <li>
                <strong>Junior IOS Developer</strong> - Apple Academy Developer (Mar 2024 - Dec 2024) <br />
                Collaborated with talented learners at the Apple Developer Academy @BINUS to address real-world problems through innovative solutions. Contributed to seven diverse projects, ranging from games to functional apps, utilizing technologies such as SwiftUI, UIKit, ARKit, and more. Took on leadership roles as a Project Manager for two projects, while serving as a coder for others, demonstrating versatility and adaptability in different team dynamics.
            </li>
            <li class="mt-2">
                <strong>HRIS Internship</strong> - PT.Pralon (Mar 2023 - Mar 2024) <br />
                Embarked on my first internship experience, where I gained valuable insights into the dynamics of working in a professional environment. Contributed to large-scale projects, including the development of a payroll feature for the HRIS platform, a recruitment website, and an HRIS mobile app. Achieved recognition for my contributions by winning an award and advancing to the grand finals of the prestigious Pralon Improvement Awards.
            </li>
            <li class="mt-2">
                <strong>Mobile Developer Part-Time</strong> - SDMKita (Jun 2022 - Sep 2023) <br />
                Developed a mobile application for the company's client using the Flutter framework, integrating APIs and MySQL for backend functionality, and implementing Dart for the frontend. Gained valuable experience by participating in client meetings, enhancing communication and project alignment skills.
            </li>
            </ul>
        </div>

        <!-- Education Section -->
        <div class="text-lg mb-16 leading-relaxed">
            <h2 class="text-2xl font-semibold mb-4 text-zinc-800">Education</h2>
            <ul class="list-disc list-inside text-zinc-600">
            <li>
                <strong>Bachelor's Degree in Computer Science</strong> <br />
                BINUS University (2020 - Present) <br />
                Courses: Software Engineering, Mobile App Development, and Web Development.
            </li>
            </ul>
        </div>

      </div>
    </section>
    <!-- Contact Section -->
    <section id="contact" class="flex flex-col items-center px-24 mt-20 pb-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div class="flex flex-col items-center pt-16 border-t-2 border-black border-opacity-20 max-md:max-w-full">
        <div class="flex flex-wrap gap-10 items-start max-md:max-w-full">
          <div class="flex flex-col min-w-[240px] w-[360px]">
            <h2 class="text-3xl font-semibold leading-none text-zinc-800">Let's work together</h2>
            <p class="mt-10 text-lg leading-7 text-zinc-800">
              This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  </template>
  
  