<script setup>
const props = defineProps({
  technicalSkillCard: {
    type: Object,
    default: () => {
    }
  }
});

const route = useRoute();

const htmlContent = !route.params.lang ? props.technicalSkillCard.name : `<em>"${props.technicalSkillCard.name}"</em>`
</script>

<template>
  <div
      v-if="technicalSkillCard.isVisible"
      class="technical-skill-card"
      :title="technicalSkillCard.name"
  >

    <div class="technical-skill-card__wrapper">

      <h4
          v-html="htmlContent"
          class="technical-skill-card__name"
      />

      <div :style="{borderColor: technicalSkillCard.color}" class="technical-skill-card__circle">

        <Icon
            :name="technicalSkillCard.icon"
            class="technical-skill-card__icon"
            size="100%"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.technical-skill-card {

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }

  &__name {
    font-weight: 600;
    transition: color $transition-long;
  }

  &__circle {
    border: 10px solid;
    border-radius: 50%;
    padding: 25px;
  }
}
</style>
