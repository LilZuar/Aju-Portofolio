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
    const templateID = 'template_9201qsm'; // Replace with your EmailJS template ID
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
  <form @submit="handleSubmit" class="flex flex-col min-w-[240px] w-[530px] max-md:max-w-full">
    <div class="flex flex-col w-full text-lg leading-loose max-w-[530px] text-zinc-800 max-md:max-w-full">
      <label for="name" class="sr-only">Name</label>
      <input
        id="name"
        type="text"
        v-model="form.name"
        class="flex-1 shrink gap-2.5 px-8 py-5 w-full whitespace-nowrap bg-zinc-100 max-md:px-5 max-md:max-w-full"
        placeholder="Name"
        required
      />
      
      <label for="email" class="sr-only">Email</label>
      <input
        id="email"
        type="email"
        v-model="form.email"
        class="flex-1 shrink gap-2.5 px-8 py-5 mt-5 w-full whitespace-nowrap bg-zinc-100 max-md:px-5 max-md:max-w-full"
        placeholder="Email"
        required
      />
      
      <label for="message" class="sr-only">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        class="flex-1 shrink gap-2.5 px-8 py-5 mt-5 w-full h-[200px] leading-7 bg-zinc-100 max-md:px-5 max-md:max-w-full"
        placeholder="Type your message here"
        required
      ></textarea>
    </div>
    
    <button
      type="submit"
      class="gap-2.5 self-start px-20 py-6 mt-10 text-xl font-semibold text-center text-white whitespace-nowrap bg-zinc-800 max-md:px-5 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
    >
      Submit
    </button>
  </form>
</template>
