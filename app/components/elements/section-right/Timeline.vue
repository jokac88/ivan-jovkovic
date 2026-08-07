<script setup lang="ts">
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
    <CommonHeader :header="headerData" @button-toggle="$emit('buttonToggle')"/>
    <div ref="timelineCollapse" class="timeline__collapse`">
      <div v-if="isToggle" class="timeline__wrapper">
        <BoxesTimelineCard
            v-for="(timelineCard, index) in timeline[timeline.section]"
            :timeline-card="{
              ...timelineCard,
              properties: timeline.properties,
              hr: (index as number) < timeline[timeline.section].length - 1
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
