<script setup>
import SideNavCard from "~/components/boxes/SideNavCard.vue";
import ColorModePicker from "~/components/common/ColorModePicker.vue";

const props = defineProps({
  sideNav: {
    type: Object,
    default: () => {
    }
  },
  colorModePicker: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['closeSideNav']);

const pageWrapper = ref();
const sideNav = ref([]);
const sideNavActiveSection = ref([]);

watch(() => props.sideNav, (newValue) => {
  if (newValue) {
    sideNav.value = mapSideNav(props.sideNav);

    sideNavActiveSection.value = sideNav.value
        .filter(({offsetTop}) => offsetTop <= pageWrapper.value.scrollTop)
        .pop();

    sideNav.value = sideNav.value
        .map(({url, isActive, ...rest}) => ({
          url,
          ...rest,
          isActive: url === sideNavActiveSection.value.url
        }));
  }
});

const mapSideNav = ((array) => array
    .map(({url, name}, index) => ({
      url,
      name,
      offsetTop: document.querySelector(`.${url}`).offsetTop - 70,
      isActive: !index
    })));

const onScroll = useThrottle(() => {
  if (window.innerWidth < 1210) {
    sideNavActiveSection.value = sideNav.value
        .filter(({offsetTop}) => offsetTop <= pageWrapper.value.scrollTop)
        .pop();

    sideNav.value = sideNav.value
        .map(({url, isActive, ...rest}) => ({
          url,
          ...rest,
          isActive: url === sideNavActiveSection.value.url
        }));
  }
}, 300);

const onResize = useThrottle(() => {
  if (window.innerWidth >= 1210) {
    emit('closeSideNav');
    pageWrapper.value = document.querySelector('.page__wrapper');
    pageWrapper.value.removeEventListener('scroll', onScroll);
  } else {
    pageWrapper.value = document.querySelector('.page__wrapper');
    pageWrapper.value.addEventListener('scroll', onScroll);

    sideNav.value = mapSideNav(props.sideNav);

    sideNavActiveSection.value = sideNav.value
        .filter(({offsetTop}) => offsetTop <= pageWrapper.value.scrollTop)
        .pop();

    sideNav.value = sideNav.value
        .map(({url, isActive, ...rest}) => ({
          url,
          ...rest,
          isActive: url === sideNavActiveSection.value.url
        }));
  }
}, 300);

const emitCloseSideNav = () => emit('closeSideNav');

onMounted(() => {
  if (window.innerWidth < 1210) {
    pageWrapper.value = document.querySelector('.page__wrapper');
    sideNav.value = mapSideNav(props.sideNav);
    pageWrapper.value.addEventListener('scroll', onScroll);
  }

  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  if (window.innerWidth < 1210) {
    pageWrapper.value.removeEventListener('scroll', onScroll);
  }

  window.removeEventListener('resize', onResize);
});
</script>

<template>
  <section class="side-nav" v-touch:swipe.left="emitCloseSideNav">

    <div class="side-nav__wrapper">

      <nav>

        <ul>

          <SideNavCard
              v-for="sideNavCard in sideNav"
              :side-nav-card="sideNavCard"
              @close-side-nav="$emit('closeSideNav')"
          />
        </ul>
      </nav>
    </div>

    <ColorModePicker :color-mode-picker="colorModePicker"/>
  </section>
</template>

<style lang="scss">
.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 70px);
  height: 100%;
  display: flex;
  flex-direction: column;

  @include target-mq(sm) {
    width: 80%;
  }

  @include target-mq(lg) {
    width: auto;
    height: auto;
  }

  &__wrapper {
    flex: 1;
    overflow-y: auto;

    @include target-mq(lg) {
      display: none;
    }
  }
}
</style>
