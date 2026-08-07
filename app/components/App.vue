<script setup lang="ts">
import data from "~/store/data.json";
import type { SideNavTypes, ProjectTypes, SectionTypes, DataTypes } from "~~/types/types";

const isLoading = ref(true);
const pageWrapper = ref<HTMLElement | null>(null);
const pageWrapperScrollHeight = ref(0);
const pageWrapperScrollTop = ref(0);
const sideNav = ref<SideNavTypes[]>([]);
const sideNavIsVisible = ref(false);
const backToTop = reactive({sideNavIsVisible});

const mapArraysOfObjects = (array1: (SideNavTypes | ProjectTypes)[], array2: (SideNavTypes | ProjectTypes)[]) => {
  return array1
    .map((item1, index1) => {
      const findByIndex = array2
        .find((_, index2) => index1 === index2);

      return {...item1, ...findByIndex}
    });
};

const buttonToggle = () => {
  if (window.innerWidth < 1210) {
    setTimeout(() => {
      pageWrapper.value = document.querySelector('.page__wrapper') as HTMLElement || null;
      pageWrapperScrollTop.value = Math.round(pageWrapper.value?.scrollTop);
      pageWrapperScrollHeight.value = pageWrapper.value?.scrollHeight - pageWrapper.value?.clientHeight;

      sideNav.value = mapSectionsOffset(sideNav.value);
    }, 300);
  }
};

// const openSideNav = () => sideNavIsVisible.value = true;
//
// const closeSideNav = () => sideNavIsVisible.value = false;

const mapSectionsOffset = (array: SectionTypes[]) => array.map(({url, name, offsetTop, ...rest}) => {
  const element = document.querySelector(`.${url}`) as HTMLElement | null;

  return {
    url,
    name,
    offsetTop: element ? element.offsetTop - 70 : 0,
    ...rest
  };
});

const route = useRoute();
type LanguageKeys = 'cir' | 'lat';
const lang = route.params.lang as LanguageKeys;
const getData: DataTypes = data[lang] || data.en;
const {languageBar, projects, technicalSkills, navigation} = data;

sideNav.value = mapArraysOfObjects(getData.navigation, navigation);

getData.pace = {
  pageWrapperScrollHeight,
  pageWrapperScrollTop
};

getData.topBar = {
  languageBar,
  sideNavIsVisible
};

getData.projects = {
  title: getData.projects?.title || '',
  projects: mapArraysOfObjects(getData.projects?.projects || [], projects)
};

getData.employmentHistory.employmentHistory = getData.employmentHistory.employmentHistory
  .filter(({isVisible}) => isVisible);

getData.technicalSkills = {
  title: getData.technicalSkills?.title || '',
  technicalSkills: technicalSkills.filter(({isVisible}) => isVisible)
};

onBeforeMount(() => {
  document.documentElement.style.overflowY = 'scroll';
  document.documentElement.style.position = 'fixed';
  document.documentElement.style.width = '100%';
});

onMounted(() => {
  setTimeout(() => {
    document.documentElement.style.position = '';
    document.documentElement.style.width = '';
    isLoading.value = false;
  }, 1500);
});
</script>

<template>
  <section class="app">
    <CommonBackground/>
        <Transition>
          <CommonLoading v-if="isLoading"/>
        </Transition>
        <CommonSideNav
          :side-nav="sideNav"
          :color-mode-picker="getData.colorModePicker"
          @close-side-nav="sideNavIsVisible = false"
        />
        <CommonPage
          :data="getData"
          @button-toggle="buttonToggle"
          @toggle-side-nav="sideNavIsVisible = !sideNavIsVisible"
          @open-side-nav="sideNavIsVisible = true"
          @close-side-nav="sideNavIsVisible = false"
        />
        <CommonBackToTop :back-to-top="backToTop"/>
  </section>
</template>

<style lang="scss">
.app {
  display: flex;

  @include target-mq(lg) {
    justify-content: center;
    align-items: center;
  }
}
</style>
