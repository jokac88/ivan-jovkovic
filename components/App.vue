<script setup lang="ts">
import Background from "~/components/common/Background.vue";
import Loading from "~/components/common/Loading.vue";
import SideNav from "~/components/common/SideNav.vue";
import Page from "~/components/common/Page.vue";
import BackToTop from "~/components/common/BackToTop.vue";
import data from "~/store/data.json";
import type {SideNavTypes, ProjectTypes, SectionTypes, DataTypes} from "~/types/types";

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
            .find((item2, index2) => index1 === index2);

        return {...item1, ...findByIndex}
      });
};

const buttonToggle = () => {
  if (window.innerWidth < 1210) {
    setTimeout(() => {
      pageWrapper.value = document.querySelector('.page__wrapper') as HTMLElement || null;
      pageWrapperScrollTop.value = useRound(pageWrapper.value?.scrollTop);
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
  document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  document.body.style.overflowY = 'hidden';
});

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
  }, 1500);
});
</script>

<template>
  <section class="app">

    <Background/>

    <Transition>

      <Loading v-if="isLoading"/>
    </Transition>

    <SideNav
        :side-nav="sideNav"
        :color-mode-picker="getData.colorModePicker"
        @close-side-nav="sideNavIsVisible = false"
    />

    <Page
        :data="getData"
        @button-toggle="buttonToggle"
        @toggle-side-nav="sideNavIsVisible = !sideNavIsVisible"
        @open-side-nav="sideNavIsVisible = true"
        @close-side-nav="sideNavIsVisible = false"
    />

    <BackToTop :back-to-top="backToTop"/>
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
