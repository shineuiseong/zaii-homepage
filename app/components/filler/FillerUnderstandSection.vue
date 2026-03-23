<template>
  <section id="filler-understand" class="filler-understand section">
    <div class="container">
      <!-- 헤드 -->
      <div class="filler-understand__head">
        <p class="filler-understand__top">FILLER PENIS AUGMENTATION</p>
        <h2 class="filler-understand__title">필러 음경확대술의 이해</h2>
        <p class="filler-understand__intro">
          자이의 매트릭스 필러는 해부학적 층을 고려하여 주입되며, 자연스러운 볼륨감과 개선된 외형을
          목표로 합니다.
        </p>
      </div>

      <!-- 시술 원리 -->
      <div class="principle-card">
        <div class="principle-card__image">
          <img src="/images/filler/penis-filler-01.webp" alt="필러 음경확대술 시술 원리" />
        </div>

        <div class="principle-card__content">
          <p class="principle-card__eyebrow">PROCEDURE PRINCIPLE</p>
          <h3 class="principle-card__title">시술 원리</h3>

          <div class="principle-card__desc">
            <p>
              의료용 필러를 음경 피부 아래의 적절한 층에 주입하여
              <strong>둘레 볼륨을 보완</strong>하고, 보다 균형감 있는 외형을 형성하는 방식입니다.
            </p>
            <p>
              절개가 필요한 수술이 아니라 비교적 간단한 방식으로 진행되며, 시술 후에도 자연스러운
              촉감과 모양을 고려해 디자인하는 것이 중요합니다.
            </p>
            <p>
              개인의 해부학적 구조와 피부 상태에 따라 적절한 용량과 주입 범위를 조절하여
              <strong>무리하지 않은 개선 방향</strong>으로 접근합니다.
            </p>
          </div>

          <div class="principle-card__points">
            <div class="principle-point">
              <strong>01</strong>
              <span>절개 없이 비교적 간단한 방식</span>
            </div>
            <div class="principle-point">
              <strong>02</strong>
              <span>자연스러운 볼륨감 형성</span>
            </div>
            <div class="principle-point">
              <strong>03</strong>
              <span>개인 상태에 맞춘 디자인 시술</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 구조 카드 그리드 -->
      <div class="filler-understand__grid">
        <article class="info-card">
          <div class="info-card__label">BEFORE</div>
          <h3 class="info-card__title">시술 전 해부학적 구조</h3>
          <p class="info-card__text">
            시술 전 단면 구조를 통해 피부, 피하조직, 근막, 해면체 등 기본적인 해부학적 층을 이해할
            수 있습니다.
          </p>
          <div class="info-card__image">
            <img src="/images/filler/penis-filler-02.webp" alt="시술 전 해부학적 구조" />
          </div>
        </article>

        <article class="info-card is-after">
          <div class="info-card__label">AFTER</div>
          <h3 class="info-card__title">시술 후 해부학적 구조</h3>
          <p class="info-card__text">
            필러 주입 후에는 피부 아래층의 볼륨이 보완되면서 둘레감이 형성되고, 전체 단면의 외곽이
            보다 도톰하게 변화합니다.
          </p>
          <div class="info-card__image">
            <img src="/images/filler/penis-filler-03.webp" alt="시술 후 해부학적 구조" />
          </div>
        </article>

        <article class="info-card">
          <div class="info-card__label">BEFORE</div>
          <h3 class="info-card__title">시술 전 외형</h3>
          <p class="info-card__text">
            시술 전 상태의 외형을 기준으로 현재의 볼륨감과 형태를 확인하고, 필요한 개선 범위를
            계획하게 됩니다.
          </p>
          <div class="info-card__image info-card__image--compact">
            <img src="/images/filler/penis-filler-op-01.webp" alt="시술 전 외형" />
          </div>
        </article>

        <article class="info-card is-after">
          <div class="info-card__label">AFTER</div>
          <h3 class="info-card__title">시술 후 외형</h3>
          <p class="info-card__text">
            시술 후에는 보다 균형 있는 외형과 개선된 볼륨감을 기대할 수 있으며, 자연스러운 형태를
            유지하는 방향으로 디자인됩니다.
          </p>
          <div class="info-card__image info-card__image--compact">
            <img src="/images/filler/penis-filler-op-02.webp" alt="시술 후 외형" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.filler-understand {
  padding: 120px 0;
  background: linear-gradient(180deg, #f8fafc 0%, #f3f4f6 100%);
}

.filler-understand__head {
  max-width: 860px;
  margin: 0 auto 64px;
  text-align: center;
}

.filler-understand__top {
  margin: 0 0 12px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #64748b;
}

.filler-understand__title {
  margin: 0;
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #111827;
}

.filler-understand__intro {
  margin: 18px 0 0;
  font-size: 17px;
  line-height: 1.8;
  color: #4b5563;
  word-break: keep-all;
}

/* 시술 원리 */
.principle-card {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  gap: 40px;
  align-items: center;
  padding: 36px;
  margin-bottom: 56px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 32px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
}

.principle-card__image {
  background: #f8fafc;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #eef2f7;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.principle-card__content {
  min-width: 0;
}

.principle-card__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #2563eb;
}

.principle-card__title {
  margin: 0 0 18px;
  font-size: 32px;
  font-weight: 800;
  line-height: 1.25;
  color: #111827;
}

.principle-card__desc {
  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.85;
    color: #4b5563;
    word-break: keep-all;
  }

  p + p {
    margin-top: 14px;
  }

  strong {
    font-weight: 700;
    color: #1f2937;
  }
}

.principle-card__points {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  margin-top: 24px;
}

.principle-point {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 16px;
  background: #f8fbff;
  border: 1px solid #dbeafe;

  strong {
    flex: 0 0 auto;
    min-width: 42px;
    font-size: 15px;
    font-weight: 800;
    color: #2563eb;
  }

  span {
    font-size: 15px;
    font-weight: 600;
    line-height: 1.6;
    color: #1f2937;
    word-break: keep-all;
  }
}

/* 하단 카드 그리드 */
.filler-understand__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.info-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 28px;
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.05);
}

.info-card__label {
  display: inline-flex;
  align-self: flex-start;
  padding: 7px 12px;
  border-radius: 999px;
  background: #eff6ff;
  color: #2563eb;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.info-card.is-after .info-card__label {
  background: #fef2f2;
  color: #dc2626;
}

.info-card__title {
  margin: 16px 0 12px;
  font-size: 26px;
  font-weight: 800;
  line-height: 1.35;
  color: #111827;
  letter-spacing: -0.02em;
}

.info-card__text {
  margin: 0 0 18px;
  font-size: 15px;
  line-height: 1.8;
  color: #4b5563;
  word-break: keep-all;
}

.info-card__image {
  margin-top: auto;
  border-radius: 20px;
  overflow: hidden;
  background: #f8fafc;
  border: 1px solid #eef2f7;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.info-card__image--compact {
  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
}

/* 반응형 */
@include laptop-down {
  .filler-understand {
    padding: 84px 0;
  }

  .filler-understand__head {
    margin-bottom: 48px;
  }

  .filler-understand__title {
    font-size: 34px;
  }

  .principle-card {
    grid-template-columns: 1fr;
    gap: 28px;
    padding: 24px;
    border-radius: 24px;
  }

  .principle-card__title {
    font-size: 28px;
  }

  .filler-understand__grid {
    gap: 20px;
  }

  .info-card {
    padding: 20px;
    border-radius: 22px;
  }

  .info-card__title {
    font-size: 22px;
  }
}

@include mobile {
  .filler-understand {
    padding: 60px 0;
  }

  .filler-understand__head {
    margin-bottom: 36px;
  }

  .filler-understand__top {
    font-size: 12px;
  }

  .filler-understand__title {
    font-size: 28px;
  }

  .filler-understand__intro {
    margin-top: 14px;
    font-size: 15px;
    line-height: 1.75;
    text-align: left;
  }

  .principle-card {
    gap: 22px;
    padding: 18px;
    margin-bottom: 36px;
    border-radius: 20px;
  }

  .principle-card__image {
    border-radius: 16px;
  }

  .principle-card__eyebrow {
    font-size: 12px;
  }

  .principle-card__title {
    margin-bottom: 14px;
    font-size: 24px;
  }

  .principle-card__desc {
    p {
      font-size: 14px;
      line-height: 1.75;
    }

    p + p {
      margin-top: 12px;
    }
  }

  .principle-card__points {
    gap: 10px;
    margin-top: 18px;
  }

  .principle-point {
    align-items: flex-start;
    padding: 12px 14px;
    border-radius: 14px;

    strong {
      min-width: 36px;
      font-size: 14px;
    }

    span {
      font-size: 14px;
      line-height: 1.6;
    }
  }

  .filler-understand__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .info-card {
    padding: 18px;
    border-radius: 18px;
  }

  .info-card__title {
    margin: 14px 0 10px;
    font-size: 20px;
  }

  .info-card__text {
    margin-bottom: 14px;
    font-size: 14px;
    line-height: 1.7;
  }

  .info-card__image {
    border-radius: 14px;
  }
}
</style>
