<script setup lang="ts">
import AboutMe from "~/components/elements/section-right/AboutMe.vue";
import Timeline from "~/components/elements/section-right/Timeline.vue";
import TechnicalSkills from "~/components/elements/section-right/TechnicalSkills.vue";

const props = defineProps({
  sectionRight: {
    type: Object,
    default: () => {
    }
  }
});

defineEmits(['buttonToggle']);

const {
  aboutMe,
  education,
  employmentHistory,
  technicalSkills
} = props.sectionRight;

const educationData = {
  ...education,
  section: 'education',
  icon: 'education'
};

const employmentHistoryData = {
  ...employmentHistory,
  section: 'employmentHistory',
  icon: 'employment-history'
};
</script>

<template>
  <section class="section-right">

    <div class="section-right__wrapper">

      <AboutMe
          :about-me="aboutMe"
          @button-toggle="$emit('buttonToggle')"
      />

      <Timeline
          :timeline="educationData"
          @button-toggle="$emit('buttonToggle')"
      />

      <Timeline
          :timeline="employmentHistoryData"
          @button-toggle="$emit('buttonToggle')"
      />

      <TechnicalSkills
          :technical-skills="technicalSkills"
          @button-toggle="$emit('buttonToggle')"
      />
    </div>
  </section>
</template>

<style lang="scss">
.section-right {
  background-color: var(--bg-right);
  color: var(--color-right);
  transition: $transition-long;

  @include target-mq(lg) {
    flex: 2;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  &__wrapper {
    padding: 15px 15px 0;
  }
}
</style>
