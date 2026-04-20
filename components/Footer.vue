<!-- components/Footer.vue -->
<script setup lang="ts">
const socials = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/LilZuar' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/lazuardhii/' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/azuar.afr/' },
]
</script>

<template>
    <footer class="w-full bg-slate-900 text-slate-200 py-16 px-6 md:px-16 lg:px-32">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
        <!-- Branding -->
        <div>
        <h2 class="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">Aju Portfolio</h2>
        <p class="text-slate-400 leading-relaxed max-w-sm">
            Building impactful digital experiences with modern web technologies.
        </p>
        </div>

        <!-- Social -->
        <div>
        <h3 class="text-lg font-semibold mb-6">Connect</h3>
        <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-indigo-400 transition-colors flex items-center gap-2 group"
            >
            <div class="p-2 bg-slate-800 rounded-full group-hover:bg-slate-800/80 transition-colors">
                <Icon :name="social.icon" class="text-xl" />
            </div>
            <span class="hidden sm:inline font-medium">{{ social.name }}</span>
            </a>
        </div>
        </div>
    </div>

    <!-- Bottom -->
    <div class="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>© {{ new Date().getFullYear() }} Lazuardhi Imani Ahfar. All rights reserved.</p>
        <p class="mt-2 md:mt-0">Designed with modern aesthetics.</p>
    </div>
    </footer>
</template>

