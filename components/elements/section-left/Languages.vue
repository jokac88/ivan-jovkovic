<script setup>
import Header from "~/components/common/Header.vue";
import LanguageCard from "~/components/boxes/LanguageCard.vue";

const props = defineProps({
  languages: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(true);

const headerData = {
  shape: 'rectangle',
  icon: 'languages',
  title: props.languages.title,
  isToggle
};

const [languagesCollapse] = useAutoAnimate({
  easing: 'linear'
});
</script>

<template>
  <section class="languages">

    <Header :header="headerData" @button-toggle="$emit('buttonToggle')"/>

    <div ref="languagesCollapse" class="languages__collapse">

      <div v-if="isToggle" class="languages__wrapper">

        <LanguageCard
            v-for="languageCard in languages.languages" :language-card="languageCard"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.languages {

  &__wrapper {
    padding: 0 20px 15px;
  }
}
</style>
