<script setup>
import Header from "~/components/common/Header.vue";
import TimelineCard from "~/components/boxes/TimelineCard.vue";

const props = defineProps({
  timeline: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(true);

const headerData = {
  shape: 'parallelogram',
  icon: props.timeline.icon,
  title: props.timeline.title,
  isToggle
};

const [timelineCollapse] = useAutoAnimate({
  easing: 'linear'
});
</script>

<template>
  <section class="timeline" :class="timeline.icon">

    <Header :header="headerData" @button-toggle="$emit('buttonToggle')"/>

    <div ref="timelineCollapse" class="timeline__collapse`">

      <div v-if="isToggle" class="timeline__wrapper">

        <TimelineCard
            v-for="(timelineCard, index) in timeline[timeline.section]"
            :timeline-card="{
              ...timelineCard,
              properties: timeline.properties,
              hr: index < timeline[timeline.section].length - 1
            }"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.timeline {

  &__wrapper {
    padding-bottom: 15px;
  }
}
</style>
