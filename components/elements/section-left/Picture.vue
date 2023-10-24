<script setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <section class="picture">

    <div class="picture__wrapper">

      <div class="border__gradient border__gradient--is-small">

        <NuxtImg
            format="webp"
            src="/images/ivan-jovkovic.png"
            alt="/images/ivan-jovkovic.png"
            quality="100"
            class="picture__img"
            :title="title"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.picture {
  display: flex;
  justify-content: center;

  &__wrapper {
    padding: 15px;
  }

  &__img {
    width: 150px;
    height: 190px;
    border-radius: 3px;
  }
}
</style>
