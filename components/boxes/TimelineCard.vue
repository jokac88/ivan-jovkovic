<script setup lang="ts">
const props = defineProps({
  timelineCard: {
    type: Object,
    default: () => {
    }
  }
});
</script>

<template>
  <div v-if="timelineCard.isVisible" class="timeline-card">

    <div class="timeline-card__wrapper">

      <div class="timeline-card__item">

        <p class="timeline-card__property">{{ timelineCard.properties.year }}</p>

        <p class="timeline-card__value">{{ timelineCard.year }}</p>
      </div>

      <div v-if="timelineCard.college || timelineCard.club" class="timeline-card__item">

        <p class="timeline-card__property">{{ timelineCard.properties.college || timelineCard.properties.club }}</p>

        <p v-html="timelineCard.college || timelineCard.club" class="timeline-card__value"/>
      </div>

      <div v-if="timelineCard.company" class="timeline-card__item">

        <p class="timeline-card__property">{{ timelineCard.properties.company }}</p>

        <p v-html="timelineCard.company" class="timeline-card__value"/>
      </div>

      <div v-if="timelineCard.course || timelineCard.position" class="timeline-card__item">

        <p class="timeline-card__property">{{ timelineCard.properties.course || timelineCard.properties.position }}</p>

        <p v-html="timelineCard.course || timelineCard.position" class="timeline-card__value"/>
      </div>

      <div v-if="timelineCard.department" class="timeline-card__item">

        <p class="timeline-card__property">{{ timelineCard.properties.department }}</p>

        <p class="timeline-card__value">{{ timelineCard.department }}</p>
      </div>

      <div v-if="timelineCard.degree" class="timeline-card__item">

        <p class="timeline-card__property">{{ timelineCard.properties.degree }}</p>

        <p class="timeline-card__value">{{ timelineCard.degree }}</p>
      </div>

      <div v-if="timelineCard.description" class="timeline-card__item timeline-card__item--is-description">

        <p class="timeline-card__property">{{ timelineCard.properties.description }}</p>

        <p
            v-if="timelineCard.description.text"
            class="timeline-card__value"
        >
          {{ timelineCard.description.text }}
        </p>

        <ul>

          <li
              v-for="technology in timelineCard.description.technologies || timelineCard.description"
              v-html="technology"
          />
        </ul>
      </div>
    </div>

    <hr v-if="timelineCard.hr" class="hr__gradient hr__gradient--is-small"/>
  </div>
</template>

<style lang="scss">
.timeline-card {

  &__wrapper {
    display: grid;
    grid-row-gap: 15px;
    padding: 0 15px;

    @include target-mq(sm) {
      grid-template-columns: repeat(2, 1fr);
      grid-column-gap: 15px;
    }
  }

  &__item {

    &--is-description {

      @include target-mq(sm) {
        grid-column: 1/-1;
      }
    }
  }

  &__property {
    padding-bottom: 5px;
    font-weight: 600;
  }

  ul {
    padding-left: 25px;
  }

  &__value + ul {
    margin-top: 15px;
  }
}
</style>
