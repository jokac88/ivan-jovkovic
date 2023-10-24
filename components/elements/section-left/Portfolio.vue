<template>
  <section class="portfolio">

    <div class="portfolio__wrapper">

      <a
          href="https://jokac88.github.io/projects/portfolio"
          class="portfolio__button"
          target="_blank"
      >
        Portfolio
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.portfolio {

  &__wrapper {
    display: flex;
    justify-content: center;
    margin: 15px 30px;
  }

  &__button {
    position: relative;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    font-weight: 700;
    letter-spacing: 1px;
    background: $gradient-right;
    color: var(--color-left);
    z-index: 1;

    &:hover {

      @include target-mq(lg) {

        &::after {
          opacity: 1;
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 3px;
      opacity: 0;
      background: $gradient-left;
      z-index: -1;
      transition: opacity $transition-long;
    }
  }
}
</style>
