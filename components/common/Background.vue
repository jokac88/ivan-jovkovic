<template>
  <div class="background"/>
</template>

<style lang="scss">
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("assets/svg/background.svg") rgb(var(--bg-rgb));
  transition: background $transition-long;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--bg-rgb), .8);
    transition: background-color $transition-long;
  }
}
</style>
