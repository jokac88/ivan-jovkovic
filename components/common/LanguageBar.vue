<script setup lang="ts">
import LanguageBarCard from "~/components/boxes/LanguageBarCard.vue";

const props = defineProps({
  languageBar: {
    type: Object,
    default: () => {
    }
  }
});
</script>

<template>
  <section class="language-bar">

    <div class="language-bar__wrapper">

      <ul>

        <LanguageBarCard v-for="languageBarCard in languageBar" :language-bar-card="languageBarCard"/>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.language-bar {
  flex: 1;

  ul {
    display: flex;
    justify-content: flex-end;
    column-gap: 15px;
    padding: 0;
    margin: 0;

    @include target-mq(lg) {
      flex-direction: column;
      row-gap: 15px;
      column-gap: 0;
    }

    li {
      display: flex;
      list-style: none;

      @include target-mq(lg) {
        justify-content: flex-end;
      }
    }
  }
}
</style>
