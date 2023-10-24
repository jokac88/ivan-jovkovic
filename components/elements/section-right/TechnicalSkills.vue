<script setup>
import Header from "~/components/common/Header.vue";
import TechnicalSkillCard from "~/components/boxes/TechnicalSkillCard.vue";

const props = defineProps({
  technicalSkills: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(true);

const headerData = {
  shape: 'parallelogram',
  icon: 'technical-skills',
  title: props.technicalSkills.title,
  isToggle
};

const [technicalSkillsCollapse] = useAutoAnimate({
  easing: 'linear'
});
</script>

<template>
  <section class="technical-skills">

    <Header :header="headerData" @button-toggle="$emit('buttonToggle')"/>

    <div ref="technicalSkillsCollapse" class="technical-skills__collapse">

      <div v-if="isToggle" class="technical-skills__wrapper">

        <TechnicalSkillCard
            v-for="technicalSkillCard in technicalSkills.technicalSkills"
            :technical-skill-card="technicalSkillCard"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.technical-skills {

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    padding: 0 15px 15px;

    @include target-mq(sm) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
