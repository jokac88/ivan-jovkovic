<script setup lang="ts">
import Header from "~/components/common/Header.vue";

const props = defineProps({
  personalInfo: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(true);

const headerData = {
  shape: 'rectangle',
  icon: 'personal-info',
  title: props.personalInfo.title,
  isToggle
};

const [personalInfoCollapse] = useAutoAnimate({
  easing: 'linear'
});
</script>

<template>
  <section class="personal-info">

    <Header :header="headerData" @button-toggle="$emit('buttonToggle')"/>

    <div ref="personalInfoCollapse" class="personal-info__collapse">

      <div v-if="isToggle" class="personal-info__wrapper">

        <p class="personal-info__property">{{ personalInfo.dateOfBirth.property }}</p>

        <p v-html="personalInfo.dateOfBirth.value" class="personal-info__value"/>

        <p class="personal-info__property">{{ personalInfo.city.property }}</p>

        <p class="personal-info__value">{{ personalInfo.city.value }}</p>

        <p class="personal-info__property">{{ personalInfo.nationality.property }}</p>

        <p class="personal-info__value">{{ personalInfo.nationality.value }}</p>

        <p class="personal-info__property">{{ personalInfo.residence.property }}</p>

        <p class="personal-info__value">{{ personalInfo.residence.value }}</p>

        <p class="personal-info__property">{{ personalInfo.mobile.property }}</p>

        <a
            :href="`tel: +381691975777`"
            class="personal-info__value personal-info__link"
        >
          +381 (0)69/19-75-777
        </a>

        <p class="personal-info__property">{{ personalInfo.email.property }}</p>

        <a
            :href="`mailto: ivan.jovkovic88@gmail.com`"
            class="personal-info__value personal-info__link"
        >
          ivan.jovkovic88@gmail.com
        </a>

        <p class="personal-info__property">{{ personalInfo.website.property }}</p>

        <a
            href="https://jokac88.github.io/ivan-jovkovic/"
            class="personal-info__value personal-info__link"
            target="_blank"
        >
          https://jokac88.github.io/ivan-jovkovic/
        </a>

        <p v-html="personalInfo.linkedin.property" class="personal-info__property"/>

        <a
            href="https://www.linkedin.com/in/ivanjovkovic/"
            class="personal-info__value personal-info__link"
            target="_blank"
        >
          https://www.linkedin.com/in/ivanjovkovic/
        </a>

        <p v-html="personalInfo.github.property" class="personal-info__property"/>

        <a
            href="https://github.com/jokac88"
            class="personal-info__value personal-info__link"
            target="_blank"
        >
          https://github.com/jokac88
        </a>

        <p v-html="personalInfo.skype.property" class="personal-info__property"/>

        <p class="personal-info__value">{{ personalInfo.skype.value }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.personal-info {

  &__wrapper {
    padding: 0 20px 15px;
  }

  &__property {
    font-weight: 600;
  }

  &__value {
    padding-bottom: 15px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  &__link {
    display: inline-block;
    padding-bottom: 0;
    margin-bottom: 15px;
    border-bottom: 1px solid transparent;
    color: var(--color-left);
    transition: color $transition-short;

    &:hover {
      border-color: var(--color-left);
    }
  }
}
</style>
