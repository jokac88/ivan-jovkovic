<script setup>
import Header from "~/components/common/Header.vue";

const props = defineProps({
  drivingLicense: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(true);

const headerData = {
  shape: 'rectangle',
  icon: 'driving-license',
  title: props.drivingLicense.title,
  isToggle
};

const [drivingLicenseCollapse] = useAutoAnimate({
  easing: 'linear'
});
</script>

<template>
  <section class="driving-license">

    <Header :header="headerData" @button-toggle="$emit('buttonToggle')"/>

    <div ref="drivingLicenseCollapse" class="driving-license__collapse">

      <div v-if="isToggle" class="driving-license__wrapper">

        <p v-html="drivingLicense.text" class="driving-license__text"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.driving-license {

  &__wrapper {
    padding: 0 20px 15px;
  }
}
</style>
