<template>
  <section class="loading">

    <div class="loading__wrapper--loader">

      <NuxtImg
          src="/svg/loader.svg"
          alt="/svg/loader.svg"
          class="loading__loader"
      />
    </div>

    <div class="loading__wrapper--logo">

      <NuxtImg
          src="/svg/logo.svg"
          alt="/svg/logo.svg"
          class="loading__logo"
      />
    </div>
  </section>
</template>

<style lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: url("assets/svg/background.svg") rgb(var(--bg-rgb));
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--bg-rgb), .8);
    z-index: -1;
  }

  &__wrapper--loader {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__wrapper--logo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  &__loader {
    width: 280px;

    @include target-mq(lg) {
      width: 400px;
    }
  }

  &__logo {
    width: 180px;

    @include target-mq(lg) {
      width: 260px;
    }
  }
}
</style>