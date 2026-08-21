<script setup lang="ts">
const headline = '{{ Senior Software Engineer }}';
</script>

<template>
  <section class="headline">
    <div class="headline__wrapper">
      <h2 class="headline__text">{{ headline }}</h2>
    </div>
  </section>
</template>

<style lang="scss">
.headline {

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
  }

  &__text {
    font-weight: 600;
  }
}
</style>
