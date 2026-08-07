<script setup lang="ts">
const props = defineProps({
  sectionLeft: {
    type: Object,
    default: () => {
    }
  }
});
defineEmits(['buttonToggle']);

const {
  name,
  personalInfo,
  languages,
  projects,
  hobbies,
  drivingLicense
} = props.sectionLeft;
</script>

<template>
  <section class="section-left">
    <ElementsSectionLeftPicture :title="name"/>
    <ElementsSectionLeftName :name="name"/>
    <ElementsSectionLeftHeadline/>
    <ElementsSectionLeftQrCode/>
<!--    <ElementsSectionLeftPortfolio/>-->
    <ElementsSectionLeftPersonalInfo
      :personal-info="personalInfo"
      @button-toggle="$emit('buttonToggle')"
    />
    <ElementsSectionLeftLanguages
      :languages="languages"
      @button-toggle="$emit('buttonToggle')"
    />
    <ElementsSectionLeftProjects
      :projects="projects"
      @button-toggle="$emit('buttonToggle')"
    />
    <ElementsSectionLeftHobbies
      :hobbies="hobbies"
      @button-toggle="$emit('buttonToggle')"
    />
    <ElementsSectionLeftDrivingLicense
      :driving-license="drivingLicense"
      @button-toggle="$emit('buttonToggle')"
    />
  </section>
</template>

<style lang="scss">
.section-left {
  background-color: var(--bg-left);
  color: var(--color-left);
  transition: $transition-long;

  @include target-mq(lg) {
    flex: 1;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
}
</style>
