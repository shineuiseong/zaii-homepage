<template>
  <section class="history-timeline section">
    <div class="container">
      <div class="timeline">
        <article v-for="item in items" :key="item.period" class="timeline-item">
          <div class="timeline-item__period">
            {{ item.period }}
          </div>

          <div class="timeline-item__content">
            <h3 class="timeline-item__title">
              {{ item.title }}
            </h3>

            <ul v-if="item.points?.length" class="timeline-item__list">
              <li v-for="point in item.points" :key="point">
                {{ point }}
              </li>
            </ul>

            <p v-if="item.note" class="timeline-item__note">
              {{ item.note }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  items: {
    period: string
    title: string
    points?: string[]
    note?: string
  }[]
}>()
</script>

<style scoped lang="scss">
.history-timeline {
  padding-top: 6px;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 29%;
  width: 1px;
  background: linear-gradient(180deg, rgba(47, 111, 184, 0.18) 0%, rgba(47, 111, 184, 0.45) 100%);
}

.timeline-item {
  display: grid;
  grid-template-columns: 29% 71%;
  align-items: start;
}

.timeline-item + .timeline-item {
  margin-top: 8px;
}

.timeline-item__period {
  position: relative;
  padding: 10px 34px 10px 0;
  font-size: 32px;
  line-height: 1.15;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #55a7e7;
  text-align: right;
  word-break: keep-all;
}

.timeline-item__period::after {
  content: '';
  position: absolute;
  top: 20px;
  right: -7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid $color-primary;
  box-sizing: border-box;
}

.timeline-item__content {
  padding: 6px 0 20px 38px;
}

.timeline-item__title {
  margin: 0 0 10px;
  font-size: 23px;
  line-height: 1.45;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;
}

.timeline-item__list {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 14px;
    font-size: 16px;
    line-height: 1.75;
    color: $text-sub;
    word-break: keep-all;
  }

  li::before {
    content: '';
    position: absolute;
    top: 11px;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #7cbdf0;
  }
}

.timeline-item__note {
  margin: 10px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: $text-muted;
}

@include desktop-down {
  .timeline-item__period {
    font-size: 28px;
  }

  .timeline-item__title {
    font-size: 21px;
  }

  .timeline-item__list li {
    font-size: 15px;
  }
}

@include laptop-down {
  .timeline::before {
    left: 0;
  }

  .timeline-item {
    grid-template-columns: 1fr;
  }

  .timeline-item + .timeline-item {
    margin-top: 20px;
  }

  .timeline-item__period {
    padding: 0 0 0 28px;
    font-size: 28px;
    text-align: left;
  }

  .timeline-item__period::after {
    top: 8px;
    left: -7px;
    right: auto;
  }

  .timeline-item__content {
    padding: 10px 0 0 28px;
  }

  .timeline-item__title {
    font-size: 20px;
    margin-bottom: 8px;
  }

  .timeline-item__list li {
    font-size: 15px;
    line-height: 1.7;
  }
}

@include mobile {
  .timeline-item__period {
    font-size: 24px;
  }

  .timeline-item__title {
    font-size: 18px;
  }

  .timeline-item__list li {
    font-size: 14px;
  }
}
</style>
