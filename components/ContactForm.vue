<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = async (e: Event) => {
  e.preventDefault(); // Prevent default form submission

  try {
    const serviceID = 'service_fxwwz2g'; // Replace with your EmailJS service ID
    const templateID = 'template_3hysv9j'; // Replace with your EmailJS template ID
    const publicKey = 'K78H7lM7IV1u_LsGA'; // Replace with your EmailJS user ID

    // Send email using EmailJS
    await emailjs.send(serviceID, templateID, form.value, publicKey);

    alert('Your message has been sent successfully!');
    form.value = { name: '', email: '', message: '' }; // Reset form fields
  } catch (error) {
    console.error('Failed to send message:', error);
    alert('Something went wrong. Please try again later.');
  }
};
</script>

<template>
  <form @submit="handleSubmit" class="flex flex-col min-w-[240px] w-full lg:w-[530px] max-md:max-w-full">
    <div class="flex flex-col w-full text-lg leading-loose max-w-[530px] text-slate-800 max-md:max-w-full gap-5">
      <label for="name" class="sr-only">Name</label>
      <input
        id="name"
        type="text"
        v-model="form.name"
        class="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
        placeholder="Name"
        required
      />
      
      <label for="email" class="sr-only">Email</label>
      <input
        id="email"
        type="email"
        v-model="form.email"
        class="w-full px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-400"
        placeholder="Email"
        required
      />
      
      <label for="message" class="sr-only">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        class="w-full h-[200px] px-8 py-5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all leading-7 placeholder:text-slate-400 resize-none"
        placeholder="Type your message here"
        required
      ></textarea>
    </div>
    
    <button
      type="submit"
      class="mt-8 px-12 py-5 w-fit text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg shadow-indigo-200/50 hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Send Message
    </button>
  </form>
</template>
