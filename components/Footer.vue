<!-- components/Footer.vue -->
<script setup lang="ts">
const socials = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com/yourusername' },
  { name: 'Instagram', icon: 'mdi:instagram', url: 'https://instagram.com/yourusername' },
  { name: 'Facebook', icon: 'mdi:facebook', url: 'https://facebook.com/yourusername' },
]
</script>

<template>
    <footer class="w-full bg-zinc-900 text-zinc-200 py-12 px-6 md:px-16 lg:px-32">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
        <!-- Branding -->
        <div>
        <h2 class="text-2xl font-bold mb-4">Aju Portfolio</h2>
        <p class="text-zinc-400 leading-relaxed">
            Lazuardhi Imani Ahfar
        </p>
        </div>

        <!-- Social -->
        <div>
        <h3 class="text-lg font-semibold mb-4">Connect</h3>
        <div class="flex flex-col sm:flex-row sm:space-x-5 space-y-4 sm:space-y-0">
            <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-white transition flex items-center gap-2"
            >
            <Icon :name="social.icon" class="text-2xl" />
            <span class="hidden sm:inline">{{ social.name }}</span>
            </a>
        </div>
        </div>
    </div>

    <!-- Bottom -->
    <div class="mt-12 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
        © {{ new Date().getFullYear() }} My Portfolio. All rights reserved.
    </div>
    </footer>
    </template>

