<script setup>
const props = defineProps({
  sideNavCard: {
    type: Object,
    default: () => {
    }
  }
});

const emit = defineEmits(['closeSideNav']);
const {name, url} = props.sideNavCard;

const emitCloseSideNav = () => {
  emit('closeSideNav');

  const pageWrapper = document.querySelector('.page__wrapper');
  const sectionOffsetTop = document.querySelector(`.${url}`).offsetTop - 69;

  pageWrapper.scrollTo({
    top: sectionOffsetTop,
    behavior: "smooth",
  });
};
</script>

<template>
  <li
      class="side-nav-card"
      :class="{'side-nav-card--is-active': sideNavCard.isActive}"
  >

    <h3
        class="side-nav-card__link"
        @click="emitCloseSideNav"
    >
      {{ name }}
    </h3>
  </li>
</template>

<style lang="scss">
.side-nav-card {
  position: relative;
  list-style: none;

  $self: &;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: $gradient-left;
    z-index: -1;
  }

  &--is-active {

    #{$self}__link {
      color: var(--color-left);
    }

    &::after {
      opacity: 1;
    }
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    min-height: 55px;
    font-weight: 700;
    text-align: center;
    color: var(--color-right);
  }
}
</style>
