<script setup>
import Name from "~/components/elements/section-left/Name.vue";
import Picture from "~/components/elements/section-left/Picture.vue";
import QrCode from "~/components/elements/section-left/QrCode.vue";
import Portfolio from "~/components/elements/section-left/Portfolio.vue";
import Headline from "~/components/elements/section-left/Headline.vue";
import PersonalInfo from "~/components/elements/section-left/PersonalInfo.vue";
import Languages from "~/components/elements/section-left/Languages.vue";
import Projects from "~/components/elements/section-left/Projects.vue";
import Hobbies from "~/components/elements/section-left/Hobbies.vue";
import DrivingLicense from "~/components/elements/section-left/DrivingLicense.vue";

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

    <Picture :title="name"/>

    <Name :name="name"/>

    <Headline/>

    <QrCode/>

    <Portfolio/>

    <PersonalInfo
        :personal-info="personalInfo"
        @button-toggle="$emit('buttonToggle')"
    />

    <Languages
        :languages="languages"
        @button-toggle="$emit('buttonToggle')"
    />

    <Projects
        :projects="projects"
        @button-toggle="$emit('buttonToggle')"
    />

    <Hobbies
        :hobbies="hobbies"
        @button-toggle="$emit('buttonToggle')"
    />

    <DrivingLicense
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
