<script setup>
import Header from "~/components/common/Header.vue";
import ProjectCard from "~/components/boxes/ProjectCard.vue";

const props = defineProps({
  projects: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(true);

const headerData = {
  shape: 'rectangle',
  icon: 'projects',
  title: props.projects.title,
  isToggle
};

const [projectsCollapse] = useAutoAnimate({
  easing: 'linear'
});
</script>

<template>
  <section class="projects">

    <Header :header="headerData" @button-toggle="$emit('buttonToggle')"/>

    <div ref="projectsCollapse" class="projects__collapse">

      <div v-if="isToggle" class="projects__wrapper">

        <ProjectCard
            v-for="projectCard in projects.projects"
            :project-card="projectCard"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.projects {

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    padding: 0 20px 15px;

    @include target-mq(sm) {
      grid-template-columns: repeat(4, 1fr);
    }

    @include target-mq(lg) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
