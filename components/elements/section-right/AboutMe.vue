<script setup lang="ts">
import Header from "~/components/common/Header.vue";

const props = defineProps({
  aboutMe: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(true);

const headerData = {
  shape: 'parallelogram',
  icon: 'about-me',
  title: props.aboutMe.title,
  isToggle
};

const [aboutMeCollapse] = useAutoAnimate({
  easing: 'linear'
});
</script>

<template>
  <section class="about-me">

    <Header :header="headerData" @button-toggle="$emit('buttonToggle')"/>

    <div ref="aboutMeCollapse" class="about-me__collapse">

      <div v-if="isToggle" class="about-me__wrapper">

        <p v-html="aboutMe.text" class="about-me__text"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.about-me {

  &__wrapper {
    padding: 0 15px 15px;
  }

  &__text {
    text-indent: 30px;
    text-align: justify;
    text-align-last: left;
    line-height: 1.4;
  }
}
</style>
