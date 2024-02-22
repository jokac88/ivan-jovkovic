<template>
  <section class="logo">

    <NuxtImg
        src="/svg/logo.svg"
        alt="/svg/logo.svg"
        class="logo__icon"
    />
  </section>
</template>

<style lang="scss">
.logo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 2;

  &__icon {
    width: 180px;

    @include target-mq(lg) {
      width: 260px;
    }
  }
}
</style>
