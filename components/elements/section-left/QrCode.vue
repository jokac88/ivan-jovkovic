<template>
  <section class="qr-code">

    <div class="qr-code__wrapper">

      <div class="border__gradient border__gradient--is-small">

        <NuxtImg
            src="/svg/qr-code.svg"
            alt="/svg/qr-code.svg"
            class="qr-code__icon"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.qr-code {

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
  }

  &__icon {
    width: 120px;
    height: 120px;
    border-radius: 3px;
    background-color: var(--bg-qr);
    transition: background-color $transition-long;
  }
}
</style>
<script setup lang="ts">
</script>
