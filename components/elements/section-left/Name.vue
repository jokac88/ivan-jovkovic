<script setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <section class="name">

    <div class="name__wrapper">

      <h1 class="name__text">{{ name }}</h1>
    </div>
  </section>
</template>

<style lang="scss">
.name {
  position: relative;
  background: $gradient-right;

  &__wrapper {
    padding: 15px;
  }

  &__text {
    text-align: center;
    letter-spacing: 4px;
  }
}
</style>
