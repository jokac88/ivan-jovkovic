<script setup lang="ts">
const props = defineProps({
  pace: {
    type: Object,
    default: () => {
    }
  }
});

const pageWrapper = ref<HTMLElement | null>(null);
const pageWrapperScrollTop = ref(props.pace.pageWrapperScrollTop);
const pageWrapperScrollHeight = ref(props.pace.pageWrapperScrollHeight);

const paceWidth = computed(() => useRound(pageWrapperScrollTop.value / pageWrapperScrollHeight.value * 100));

const onScroll = useThrottle(() => {
  if (window.innerWidth < 1210) {
    pageWrapperScrollTop.value = useRound(pageWrapper.value?.scrollTop ?? 0);
  }
}, 300);

const onResize = useThrottle(() => {
  if (window.innerWidth < 1210) {
    pageWrapper.value = document.querySelector('.page__wrapper') as HTMLElement || null;
    pageWrapper.value?.addEventListener('scroll', onScroll);
    pageWrapperScrollTop.value = useRound(pageWrapper.value?.scrollTop);
    pageWrapperScrollHeight.value = pageWrapper.value.scrollHeight - pageWrapper.value?.clientHeight;
  }
}, 300);

onMounted(() => {
  if (window.innerWidth < 1210) {
    pageWrapper.value = document.querySelector('.page__wrapper') as HTMLElement || null;
    pageWrapper.value?.addEventListener('scroll', onScroll);
    pageWrapperScrollTop.value = useRound(pageWrapper.value?.scrollTop);
    pageWrapperScrollHeight.value = pageWrapper.value?.scrollHeight - pageWrapper.value?.clientHeight;

  }

  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  if (window.innerWidth < 1210) {
    pageWrapper.value?.removeEventListener('scroll', onScroll);
  }

  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <section class="pace">

    <div class="pace__wrapper">

      <div
          class="pace__width"
          :class="{ 'pace__width--is-full': paceWidth === 100 }"
          :style="{width: `${paceWidth}%`}"
      />
    </div>
  </section>
</template>

<style lang="scss">
.pace {

  @include target-mq(lg) {
    display: none;
  }

  &__wrapper {
    height: 5px;
    background-color: var(--bg);
    transition: background-color $transition-long;
  }

  &__width {
    height: inherit;
    background: $gradient-right;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    transition: $transition-long;

    &--is-full {
      border-radius: 0;
    }
  }
}
</style>
