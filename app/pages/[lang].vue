<script setup lang="ts">
definePageMeta({
  validate: async ({params}) => {
    return ['cir', 'lat'].includes(<string>params.lang);
  }
});
const route = useRoute();
useHead({
  htmlAttrs: {
    lang: route.params.lang === 'cir' ? 'sr-Cyrl-RS' : 'sr-Cyrl-RS',
  },
  title: route.params.lang === 'cir' ? 'Иван Јовковић | Front-End Developer' : 'Ivan Jovković | Front-End Developer'
});
</script>

<template>
  <App/>
</template>
