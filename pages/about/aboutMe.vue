<template>
  <div class="font-sans text-slate-800 bg-slate-50 min-h-screen">
    <!-- Hero / About Header -->
    <section class="flex flex-col items-center justify-center w-full bg-gradient-to-br from-indigo-50/50 via-white to-slate-100 py-32 px-6">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">Lazuardhi Imani Ahfar</h1>
        <p class="mt-8 text-xl text-slate-600 leading-relaxed">
          Mobile Developer specializing in iOS (SwiftUI) with experience building scalable applications and intelligent features such as face recognition. Skilled in Clean Architecture, API integration, and performance optimization, with a strong focus on delivering reliable and user-focused mobile experiences.
        </p>
        <a
          href="/resume/CV.pdf"
          download="Lazuardhi_Imani_Ahfar_Resume.pdf"
          class="inline-flex items-center justify-center gap-3 mt-10 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg shadow-indigo-200/50 hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300"
        >
          <Icon name="mdi:download" class="text-2xl" />
          Download Full CV
        </a>
      </div>
    </section>

    <!-- Detailed CV Sections -->
    <div class="max-w-5xl mx-auto py-20 px-6 lg:px-8 space-y-24">

      <!-- Experience Section -->
      <section>
        <div class="flex items-center gap-4 mb-10">
          <div class="p-3 bg-indigo-100 text-indigo-600 rounded-2xl shadow-sm">
            <Icon name="mdi:briefcase-outline" class="text-3xl" />
          </div>
          <h2 class="text-3xl font-bold text-slate-800">Work Experience</h2>
        </div>
        
        <div class="relative border-l-2 border-indigo-100 space-y-10 pl-8 ml-4">
          <!-- Experience 1 -->
          <div class="relative group">
            <div class="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-indigo-500 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
            <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-slate-800">iOS Developer Internship</h3>
                  <p class="text-lg text-indigo-600 font-medium">Jelajah Data Semesta</p>
                </div>
                <div class="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-100 w-fit">
                  Oct 2025 - Apr 2026
                </div>
              </div>
              <ul class="list-disc list-outside ml-5 text-slate-600 leading-relaxed space-y-2">
                <li>Delivered 5+ iOS features using SwiftUI & Clean Architecture, improving modularity and reducing feature integration time.</li>
                <li>Implemented Core Data & Combine, improving data handling efficiency and app responsiveness.</li>
                <li>Integrated 10+ REST APIs using Moya, creating a scalable and maintainable networking layer.</li>
                <li>Managed app distribution in enterprise environments, and automated build & release pipelines using Fastlane & Firebase App Distribution.</li>
              </ul>
            </div>
          </div>

          <!-- Experience 2 -->
          <div class="relative group">
            <div class="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-indigo-400 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
            <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-slate-800">Junior Developer Intern</h3>
                  <p class="text-lg text-indigo-600 font-medium">Apple Developer Academy @ BINUS</p>
                </div>
                <div class="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-100 w-fit">
                  Mar 2024 - Dec 2024
                </div>
              </div>
              <ul class="list-disc list-outside ml-5 text-slate-600 leading-relaxed space-y-2">
                <li>Contributed to 7+ projects (including 2 games) using SwiftUI, UIKit, and ARKit in collaborative environments.</li>
                <li>Led a team as Project Manager, delivering a full product and pitching to Apple Singapore stakeholders.</li>
                <li>Served as Tech Lead, mentoring team members and improving code quality through best practices.</li>
                <li>Completed 1 end-to-end solo project, managing the full development lifecycle independently.</li>
              </ul>
            </div>
          </div>

          <!-- Experience 3 -->
          <div class="relative group">
            <div class="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-indigo-300 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
            <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-slate-800">HRIS Programmer Intern</h3>
                  <p class="text-lg text-indigo-600 font-medium">PT Pralon</p>
                </div>
                <div class="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-100 w-fit">
                  Mar 2023 - Mar 2024
                </div>
              </div>
              <ul class="list-disc list-outside ml-5 text-slate-600 leading-relaxed space-y-2">
                <li>Contributed to development of 3 internal systems (HRIS, Recruitment Website, Mobile App).</li>
                <li>Built face recognition-based attendance system, improving authentication accuracy.</li>
                <li>Developed payroll feature, supporting automated salary processing and operational efficiency.</li>
                <li><strong>Achievements:</strong> 3rd Place & Top 5 Finalist in Pralon Improvement Awards for system improvements.</li>
              </ul>
            </div>
          </div>

          <!-- Experience 4 -->
          <div class="relative group">
            <div class="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-400 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
            <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-slate-800">Mobile Developer Freelance</h3>
                  <p class="text-lg text-indigo-600 font-medium">SDMKita</p>
                </div>
                <div class="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-100 w-fit">
                  Jun 2023 - Sep 2023
                </div>
              </div>
              <ul class="list-disc list-outside ml-5 text-slate-600 leading-relaxed space-y-2">
                <li>Developed a client-facing mobile application using Flutter & Dart, integrating APIs with a MySQL backend.</li>
                <li>Translated business requirements into functional features, ensuring usability and timely delivery.</li>
                <li>Collaborated with stakeholders directly via meetings to outline architecture and features.</li>
              </ul>
            </div>
          </div>

          <!-- Org Experience -->
          <div class="relative group">
            <div class="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-slate-300 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
            <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-slate-800">Organisational Experience</h3>
                  <p class="text-lg text-slate-600 font-medium">HIMTI Binus University</p>
                </div>
                <div class="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-100 w-fit">
                  Mar 2021 - Mar 2023
                </div>
              </div>
              <p class="text-slate-600 leading-relaxed text-justify">
                Served as Vice Chairman for events and Technical Committee. Coordinated sponsorship outreach and partner relations for multiple major events. Developed strong skills in communication, leadership, and event management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section>
        <div class="flex items-center gap-4 mb-10">
          <div class="p-3 bg-violet-100 text-violet-600 rounded-2xl shadow-sm">
            <Icon name="mdi:school-outline" class="text-3xl" />
          </div>
          <h2 class="text-3xl font-bold text-slate-800">Education</h2>
        </div>
        
        <div class="relative border-l-2 border-violet-100 space-y-10 pl-8 ml-4">
          <div class="relative group">
            <div class="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-white bg-violet-500 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
            <div class="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-2xl font-bold text-slate-800">Bachelor of Computer Science</h3>
                  <p class="text-lg text-violet-600 font-medium">Universitas Bina Nusantara (BINUS)</p>
                </div>
                <div class="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-sm font-medium border border-slate-100 w-fit">
                  Aug 2020 - Aug 2025
                </div>
              </div>
              <p class="text-slate-600 leading-relaxed">
                <strong>GPA:</strong> 3.50/4.00 <br/><br/>
                Built a face recognition attendance system for my thesis using Flutter, applying mobile architecture, API integration, and performance optimization to deliver an efficient application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section>
        <div class="flex items-center gap-4 mb-10">
          <div class="p-3 bg-sky-100 text-sky-600 rounded-2xl shadow-sm">
            <Icon name="mdi:lightning-bolt-outline" class="text-3xl" />
          </div>
          <h2 class="text-3xl font-bold text-slate-800">Skills & Tooling</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Mobile Development -->
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 class="text-xl font-bold text-slate-800 mb-6">Mobile Development</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-xl border border-indigo-100/50">SwiftUI</span>
              <span class="px-4 py-2 bg-indigo-50 text-indigo-700 font-medium rounded-xl border border-indigo-100/50">Swift</span>
              <span class="px-4 py-2 bg-sky-50 text-sky-700 font-medium rounded-xl border border-sky-100/50">Flutter</span>
              <span class="px-4 py-2 bg-sky-50 text-sky-700 font-medium rounded-xl border border-sky-100/50">Dart</span>
            </div>
          </div>

          <!-- Architecture & iOS -->
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 class="text-xl font-bold text-slate-800 mb-6">Architecture & iOS</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-purple-50 text-purple-700 font-medium rounded-xl border border-purple-100/50">Clean Architecture</span>
              <span class="px-4 py-2 bg-rose-50 text-rose-700 font-medium rounded-xl border border-rose-100/50">Combine</span>
              <span class="px-4 py-2 bg-orange-50 text-orange-700 font-medium rounded-xl border border-orange-100/50">Core Data</span>
              <span class="px-4 py-2 bg-yellow-50 text-yellow-700 font-medium rounded-xl border border-yellow-100/50">UIKit</span>
            </div>
          </div>

          <!-- DevOps & Tools -->
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 class="text-xl font-bold text-slate-800 mb-6">DevOps & Backend</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-200/50">Git</span>
              <span class="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-200/50">Fastlane</span>
              <span class="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-200/50">Firebase</span>
              <span class="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-xl border border-slate-200/50">Crashlytics</span>
              <span class="px-4 py-2 bg-emerald-50 text-emerald-700 font-medium rounded-xl border border-emerald-100/50">REST API</span>
              <span class="px-4 py-2 bg-emerald-50 text-emerald-700 font-medium rounded-xl border border-emerald-100/50">MySQL</span>
            </div>
          </div>

          <!-- Advanced Skills -->
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 class="text-xl font-bold text-slate-800 mb-6">Advanced</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-cyan-50 text-cyan-700 font-medium rounded-xl border border-cyan-100/50">Face Recognition</span>
              <span class="px-4 py-2 bg-fuchsia-50 text-fuchsia-700 font-medium rounded-xl border border-fuchsia-100/50">Machine Learning</span>
              <span class="px-4 py-2 bg-teal-50 text-teal-700 font-medium rounded-xl border border-teal-100/50">Push Notification</span>
            </div>
          </div>
        </div>
      </section>

    </div>

    <!-- Contact Section -->
    <section id="contact" class="w-full bg-white py-24 px-6 md:px-16 lg:px-32 border-t border-slate-100">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div class="flex-1">
          <h2 class="text-5xl font-bold text-slate-800 tracking-tight">Let's work <br/> <span class="text-indigo-600">together</span></h2>
          <p class="mt-8 text-xl text-slate-600 leading-relaxed max-w-md">
            Hopefully we could work together in the future. If you have any questions or want to discuss about a project, feel free to contact me.
          </p>
        </div>
        <div class="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  </div>
</template>
