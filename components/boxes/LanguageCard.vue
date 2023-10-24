<script setup>
const props = defineProps({
  languageCard: {
    type: Object,
    default: () => {
    }
  }
});
</script>

<template>
  <div class="language-card">

    <p class="language-card__name">{{ languageCard.name }}</p>

    <div class="language-card__meter">

      <span :style="{ width: languageCard.percentage }"/>
    </div>

    <p class="language-card__level">{{ languageCard.level }}</p>
  </div>
</template>

<style lang="scss">
.language-card {

  & + & {
    padding-top: 10px;
  }

  &__name {
    padding: 0 10px 5px;
    font-weight: 600;
  }

  &__meter {
    position: relative;
    height: 30px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, .2);
    background-color: var(--bg-meter);
    transition: background-color $transition-long;

    & > span {
      display: block;
      height: 100%;
      border-radius: 20px;
      box-shadow: inset 0 2px 9px rgba(255, 255, 255, .2),
      inset 0 -2px 6px rgba(0, 0, 0, .4);
      background-color: var(--color-right);
      background-size: 30px 30px;
      background-image: linear-gradient(
              135deg,
              rgb(2, 190, 138) 25%,
              transparent 25%,
              transparent 50%,
              rgb(2, 190, 138) 50%,
              rgb(2, 190, 138) 75%,
              transparent 75%,
              transparent
      );
      animation: animate-stripes 3s linear infinite;
      transition: background-color $transition-long;
    }

    @keyframes animate-stripes {
      0% {
        background-position: 0 0;
      }

      100% {
        background-position: 60px 0;
      }
    }
  }

  &__level {
    padding: 5px 10px 0;
    text-align: right;
  }
}
</style>
