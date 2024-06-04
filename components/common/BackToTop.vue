<script setup lang="ts">
const props = defineProps({
  backToTop: {
    type: Object,
    default: () => {
    }
  }
});

const pageWrapper = ref<HTMLElement | null>(null);
const element = ref();
const currentScrollYPosition = ref(0);

const isVisible = computed(() => currentScrollYPosition.value >= 600);

const onScroll = useThrottle(() => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  currentScrollYPosition.value = window.innerWidth >= 1210 ? scrollTop : pageWrapper.value?.scrollTop ?? 0;
}, 300);

const onResize = useThrottle(() => {
  element.value = window.innerWidth >= 1210 ? window : pageWrapper.value;
  element.value.addEventListener('scroll', onScroll);

  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  currentScrollYPosition.value = window.innerWidth >= 1210 ? scrollTop : pageWrapper.value?.scrollTop ?? 0;
}, 300);

function scrollToTop() {
  element.value.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  pageWrapper.value = document.querySelector('.page__wrapper') as HTMLElement || null;
  element.value = window.innerWidth >= 1210 ? window : pageWrapper.value;
  element.value.addEventListener('scroll', onScroll);
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  element.value.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <button
      class="back-to-top"
      :class="{
        'back-to-top--is-visible': isVisible,
        'back-to-top--is-hidden': backToTop.sideNavIsVisible
      }"
      @click="scrollToTop"
      aria-label="Back to top"
  >

    <Icon
        name="back-to-top"
        alt="back-to-top"
        size="30"
    />
  </button>
</template>

<style lang="scss">
.back-to-top {
  position: fixed;
  right: 15px;
  bottom: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  padding: 0;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 15px -5px rgba(0, 0, 0, .75);
  background: $gradient-right;
  z-index: 1;
  transition: $transition-long;

  @include target-mq(lg) {
    cursor: pointer;
  }

  &:hover {

    @include target-mq(lg) {

      &::after {
        opacity: 1;
      }
    }
  }

  &--is-visible {
    bottom: 15px;
  }

  &--is-hidden {
    right: -50px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    opacity: 0;
    background: $gradient-left;
    z-index: -1;

    @include target-mq(lg) {
      transition: opacity $transition-long;
    }
  }

  .icon {
    color: var(--color-left);
    transition: color $transition-long;
  }
}
</style>
