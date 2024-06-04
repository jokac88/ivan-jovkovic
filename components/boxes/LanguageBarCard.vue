<script setup lang="ts">
const props = defineProps({
  languageBarCard: {
    type: Object,
    default: () => {
    }
  }
});
</script>

<template>
  <li class="language-bar-card">

    <NuxtLink
        :to="!languageBarCard.code ? '/' : { name: 'lang', params: { lang: languageBarCard.code }}"
        class="language-bar-card__link"
        activeClass="language-bar-card__link--is-active"
        exactActiveClass="language-bar-card__link--is-active"
        :title="languageBarCard.title"
    >
      {{ languageBarCard.name }}

      <Icon
          :name="languageBarCard.code ? 'sr' : 'en'"
          :alt="languageBarCard.code ? 'sr' : 'en'"
      />
    </NuxtLink>
  </li>
</template>

<style lang="scss">
.language-bar-card {

  &__link {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-size: .85rem;
    font-weight: 600;
    color: var(--color-left);
    transition: opacity $transition-long;

    @include target-mq(lg) {
      column-gap: 10px;
      font-size: .95rem;
      color: var(--color-right);
    }

    &:not(&--is-active) {
      opacity: .5;

      &:hover {
        opacity: 1;
      }
    }
  }

  .icon {
    width: 30px;
    height: 100%;

    @include target-mq(lg) {
      width: 35px;
    }
  }
}
</style>
