<template>
  <section class="history-intro section">
    <div class="container history-intro__inner">
      <p class="history-intro__eyebrow">OUR JOURNEY</p>
      <h2 class="history-intro__title">
        오직 전립선 치료의 깊이를 쌓아온 <span>자이비뇨의학과병원</span>
      </h2>
      <p class="history-intro__desc">
        수술 경험의 양보다 중요한 것은 환자에게 적합한 치료 방향을 제시하는 판단력입니다.
        자이비뇨의학과병원은 한 분야를 오래 깊게 다뤄온 경험을 바탕으로 더 정교하고 안정적인 치료를
        이어가고 있습니다.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.history-intro {
  padding-top: 64px;
  padding-bottom: 24px;
}

.history-intro__inner {
  text-align: center;
}

.history-intro__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $text-muted;
}

.history-intro__title {
  margin: 0;
  font-size: 36px;
  line-height: 1.3;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;

  span {
    color: $color-primary;
  }
}

.history-intro__desc {
  max-width: 860px;
  margin: 14px auto 0;
  font-size: 17px;
  line-height: 1.8;
  color: $text-sub;
  word-break: keep-all;
}

@include laptop-down {
  .history-intro {
    padding-top: 44px;
  }

  .history-intro__title {
    font-size: 30px;
  }

  .history-intro__desc {
    font-size: 16px;
  }
}

@include mobile {
  .history-intro {
    padding-top: 36px;
    padding-bottom: 18px;
  }

  .history-intro__eyebrow {
    font-size: 12px;
    letter-spacing: 0.14em;
  }

  .history-intro__title {
    font-size: 24px;
  }

  .history-intro__desc {
    font-size: 15px;
    line-height: 1.7;
  }
}
</style>
