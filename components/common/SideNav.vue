<script setup lang="ts">
import SideNavCard from "~/components/boxes/SideNavCard.vue";
import ColorModePicker from "~/components/common/ColorModePicker.vue";
import type {SideNavTypes, SectionTypes,ColorModePickerTypes} from "~/types/types";

interface PropsTypes {
  sideNav: SideNavTypes[];
  colorModePicker: ColorModePickerTypes[];
}

const props = defineProps<PropsTypes>();

const emit = defineEmits(['closeSideNav']);

const pageWrapper = ref<HTMLElement | null>(null);
const sideNav = ref<SideNavTypes[]>([]);
const sideNavActiveSection = ref<SideNavTypes>({});

watch(() => props.sideNav, (newValue) => {
  if (newValue) {
    sideNav.value = mapSideNav(props.sideNav);

    const scrollTop = pageWrapper.value?.scrollTop ?? 0;

    sideNavActiveSection.value = sideNav.value
        .filter(({offsetTop}) => offsetTop !== undefined && offsetTop <= scrollTop)
        .pop() ?? {};

    sideNav.value = sideNav.value.map(({url, isActive, ...rest}) => ({
          url,
          ...rest,
          isActive: url === sideNavActiveSection.value.url
        }));
  }
});

const mapSideNav = ((array: SectionTypes[]) => array.map(({url, name}, index) => {
  const element = document.querySelector(`.${url}`) as HTMLElement | null;

  return {
    url,
    name,
    offsetTop: element ? element.offsetTop - 70 : 0,
    isActive: !index
  }
}));

const onScroll = useThrottle(() => {
  if (window.innerWidth < 1210) {
    const scrollTop = pageWrapper.value?.scrollTop ?? 0;

    sideNavActiveSection.value = sideNav.value
        .filter(({offsetTop}) => offsetTop !== undefined && offsetTop <= scrollTop)
        .pop() ?? {};

    sideNav.value = sideNav.value.map(({url, isActive, ...rest}) => ({
          url,
          ...rest,
          isActive: url === sideNavActiveSection.value.url
        }));
  }
}, 300);

const onResize = useThrottle(() => {
  if (window.innerWidth >= 1210) {
    emit('closeSideNav');
    pageWrapper.value = document.querySelector('.page__wrapper') as HTMLElement || null;
    pageWrapper.value?.removeEventListener('scroll', onScroll);
  } else {
    pageWrapper.value = document.querySelector('.page__wrapper') as HTMLElement || null;
    pageWrapper.value?.addEventListener('scroll', onScroll);
    const scrollTop = pageWrapper.value?.scrollTop;

    sideNav.value = mapSideNav(props.sideNav);

    sideNavActiveSection.value = sideNav.value
        .filter(({offsetTop}) => offsetTop !== undefined && offsetTop <= scrollTop)
        .pop() ?? {};

    sideNav.value = sideNav.value.map(({url, isActive, ...rest}) => ({
          url,
          ...rest,
          isActive: url === sideNavActiveSection.value.url
        }));
  }
}, 300);

const emitCloseSideNav = () => emit('closeSideNav');

onMounted(() => {
  if (window.innerWidth < 1210) {
    pageWrapper.value = document.querySelector('.page__wrapper') as HTMLElement || null;
    sideNav.value = mapSideNav(props.sideNav);
    pageWrapper.value?.addEventListener('scroll', onScroll);
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
  <section class="side-nav">

    <div class="side-nav__wrapper">

      <nav>

        <ul>

          <SideNavCard
              v-for="sideNavCard in sideNav"
              :side-nav-card="sideNavCard"
              @close-side-nav="emitCloseSideNav"
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
