<script setup>
import Header from "~/components/common/Header.vue";

const props = defineProps({
  hobbies: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['buttonToggle']);

const isToggle = ref(true);

const headerData = {
  shape: 'rectangle',
  icon: 'hobbies',
  title: props.hobbies.title,
  isToggle
};

const [hobbiesCollapse] = useAutoAnimate({
  easing: 'linear'
});
</script>

<template>
  <section class="hobbies">

    <Header :header="headerData" @button-toggle="$emit('buttonToggle')"/>

    <div ref="hobbiesCollapse" class="hobbies__collapse">

      <div v-if="isToggle" class="hobbies__wrapper">

        <ul>

          <li v-for="hobby in hobbies.hobbies">

            <Icon
                name="arrow"
                size="20"
                class="hobbies__icon"
            />

            <h4 class="hobbies__name">{{ hobby }}</h4>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hobbies {

  &__wrapper {
    padding: 0 15px 15px;
  }

  li {
    display: flex;
    align-items: center;
    column-gap: 2px;
    padding: 0;

    & + li {
      margin-top: 20px;
    }
  }

  &__icon {
    color: var(--color-left);
    transition: color $transition-long;
  }

  &__name {
    font-weight: 600;
  }
}
</style>
