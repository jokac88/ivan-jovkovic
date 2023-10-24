<script setup>
const props = defineProps({
  projectCard: {
    type: Object,
    default: () => {
    }
  }
});
</script>

<template>
  <a
      v-if="projectCard.isVisible"
      :href="projectCard.url"
      :title="projectCard.title || projectCard.name"
      class="project-card"
      target="_blank"
  >

    <Icon
        :name="projectCard.icon"
        :alt="projectCard.icon"
        size="64"
        color="white"
    />

    <span v-html="projectCard.name" class="project-card__name"/>
  </a>
</template>

<style lang="scss">
.project-card {
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;

  @include target-mq(lg) {
    transition: bottom $transition-short;

    &:hover {
      bottom: 5px;
    }
  }

  &__name {
    font-weight: 600;
    color: var(--color-left);
  }
}
</style>
