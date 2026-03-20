<template>
  <section id="filler-lineup" class="filler-lineup section">
    <div class="container">
      <!-- 1. 라인업 -->
      <div class="filler-lineup__block">
        <div class="filler-lineup__head">
          <p class="filler-lineup__eyebrow">ZAII MATRIX FILLER LINEUP</p>
          <h2 class="filler-lineup__title">자이의 매트릭스 필러 3가지 라인업</h2>
          <p class="filler-lineup__lead">
            환자 상태와 기대 효과에 따라 선택할 수 있도록 구성한 자이의 프리미엄 필러
            프로그램입니다.
          </p>
        </div>

        <div class="lineup-cards">
          <article class="lineup-card is-mf1">
            <div class="lineup-card__bar"></div>
            <div class="lineup-card__body">
              <div class="lineup-card__badge">BASIC</div>
              <h3 class="lineup-card__title">MF1 매트릭스 필러</h3>
              <p class="lineup-card__desc">3~5년 동안 유지되는 기본 매트릭스 필러</p>
            </div>
          </article>

          <article class="lineup-card is-mf2">
            <div class="lineup-card__bar"></div>
            <div class="lineup-card__body">
              <div class="lineup-card__badge">PREMIUM</div>
              <h3 class="lineup-card__title">MF2 매트릭스 필러 프리미엄</h3>
              <p class="lineup-card__desc">매트릭스 필러 + MPLA Filler</p>
              <p class="lineup-card__sub">유지기간과 탄탄함을 더 강화한 프리미엄 라인</p>
            </div>
          </article>

          <article class="lineup-card is-mf3">
            <div class="lineup-card__bar"></div>
            <div class="lineup-card__body">
              <div class="lineup-card__badge">VIP</div>
              <h3 class="lineup-card__title">MF3 매트릭스 필러 VIP</h3>
              <p class="lineup-card__desc">매트릭스 필러 + MPLA Filler + 세포배양치료제</p>
              <p class="lineup-card__sub">세포 재생 기반의 장기 유지 효과를 기대하는 VIP 라인</p>
            </div>
          </article>
        </div>
      </div>

      <!-- 2. 라인업 비교 -->
      <div class="filler-lineup__block">
        <div class="filler-lineup__head">
          <p class="filler-lineup__eyebrow">LINEUP COMPARISON</p>
          <h2 class="filler-lineup__title">라인업 비교</h2>
        </div>

        <div class="compare-table">
          <div class="compare-table__head">
            <div class="compare-table__cell is-label"></div>
            <div class="compare-table__cell is-mf1">MF1</div>
            <div class="compare-table__cell is-mf2">MF2</div>
            <div class="compare-table__cell is-mf3">MF3</div>
          </div>

          <div class="compare-table__row" v-for="row in lineupRows" :key="row.label">
            <div class="compare-table__cell is-label">{{ row.label }}</div>
            <div class="compare-table__cell">{{ row.mf1 }}</div>
            <div class="compare-table__cell">{{ row.mf2 }}</div>
            <div class="compare-table__cell">{{ row.mf3 }}</div>
          </div>
        </div>

        <!-- 모바일 카드 비교 -->
        <div class="compare-mobile">
          <article class="plan-card is-mf1">
            <div class="plan-card__top">
              <span class="plan-card__chip">BASIC</span>
              <h3>MF1 매트릭스 필러</h3>
            </div>
            <div class="plan-card__body">
              <div v-for="row in lineupRows" :key="`mf1-${row.label}`" class="plan-card__row">
                <span>{{ row.label }}</span>
                <strong>{{ row.mf1 }}</strong>
              </div>
            </div>
          </article>

          <article class="plan-card is-mf2">
            <div class="plan-card__top">
              <span class="plan-card__chip">PREMIUM</span>
              <h3>MF2 매트릭스 필러 프리미엄</h3>
            </div>
            <div class="plan-card__body">
              <div v-for="row in lineupRows" :key="`mf2-${row.label}`" class="plan-card__row">
                <span>{{ row.label }}</span>
                <strong>{{ row.mf2 }}</strong>
              </div>
            </div>
          </article>

          <article class="plan-card is-mf3">
            <div class="plan-card__top">
              <span class="plan-card__chip">VIP</span>
              <h3>MF3 매트릭스 필러 VIP</h3>
            </div>
            <div class="plan-card__body">
              <div v-for="row in lineupRows" :key="`mf3-${row.label}`" class="plan-card__row">
                <span>{{ row.label }}</span>
                <strong>{{ row.mf3 }}</strong>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- 3. MF2 -->
      <div class="filler-lineup__block">
        <div class="filler-lineup__head">
          <p class="filler-lineup__eyebrow">MF2 PREMIUM</p>
          <h2 class="filler-lineup__title">자이의 MF2 매트릭스 필러 프리미엄</h2>
        </div>

        <div class="premium-intro">
          <div class="premium-intro__badge">매트릭스 필러 + MPLA FILLER</div>
          <h3 class="premium-intro__title">MPLA(Microparticle PLA Filler)란?</h3>
          <p class="premium-intro__text">
            볼륨 유지와 조직 적응을 함께 고려한 보강형 필러 개념으로, 보다 탄탄한 유지력을 기대할 수
            있는 프리미엄 구성입니다.
          </p>
        </div>

        <div class="premium-feature-list">
          <article v-for="item in mf2Features" :key="item.no" class="premium-feature-item">
            <div class="premium-feature-item__no">{{ item.no }}</div>
            <p class="premium-feature-item__text">{{ item.text }}</p>
          </article>
        </div>
      </div>

      <!-- 4. MF3 -->
      <div class="filler-lineup__block">
        <div class="filler-lineup__head">
          <p class="filler-lineup__eyebrow">MF3 VIP</p>
          <h2 class="filler-lineup__title">자이의 MF3 매트릭스 필러 VIP</h2>
        </div>

        <div class="vip-banner">매트릭스 필러 + MPLA Filler + 세포배양치료제</div>

        <div class="vip-intro">
          <p>
            자신의 세포를 배양한 뒤 필러와 함께 적용하는 방식으로, 단순 볼륨 확대를 넘어 조직 적응과
            재생까지 함께 고려하는 자이의 프리미엄 프로그램입니다.
          </p>
        </div>

        <div class="vip-grid">
          <article v-for="item in vipFeatures" :key="item.no" class="vip-card">
            <span class="vip-card__no">{{ item.no }}</span>
            <p class="vip-card__text">{{ item.text }}</p>
          </article>
        </div>

        <div class="process-wrap">
          <div class="process-wrap__head">
            <h3 class="process-wrap__title">S. BIOMEDICS 세포배양과정</h3>
          </div>

          <div class="process-step-grid">
            <article v-for="step in cultureSteps" :key="step.step" class="process-step-card">
              <p class="process-step-card__step">STEP {{ step.step }}</p>
              <p class="process-step-card__text">{{ step.text }}</p>
            </article>
          </div>
        </div>

        <div class="timeline-wrap">
          <div class="timeline-wrap__head">
            <h3 class="timeline-wrap__title">자가 섬유아세포 생산 과정 및 기간</h3>
          </div>

          <div class="timeline-grid">
            <article class="timeline-card is-period">
              <h4>생산기간</h4>

              <div class="timeline-card__period-box">
                <strong>세포 배양 및 냉동</strong>
                <span>약 4주~8주</span>
              </div>

              <div class="timeline-card__period-box">
                <strong>세포 해동 및 완제품 제조</strong>
                <span>약 2주</span>
              </div>

              <p class="timeline-card__foot">
                개인 상태와 채취 조직 상태에 따라 일정은 일부 달라질 수 있습니다.
              </p>
            </article>

            <article class="timeline-card is-flow">
              <h4>생산과정</h4>
              <div class="timeline-flow">
                <div v-for="item in productionFlow" :key="item" class="timeline-flow__item">
                  {{ item }}
                </div>
              </div>
            </article>

            <article class="timeline-card is-check">
              <h4>검사항목</h4>
              <div class="check-panel">
                <div class="check-panel__box">
                  <h5>In Process Control</h5>
                  <ul>
                    <li>Viral Test</li>
                    <li>Sterility Test</li>
                    <li>Cell Morphology</li>
                    <li>Cell Counts</li>
                    <li>Cell Viability</li>
                  </ul>
                </div>

                <div class="check-panel__box">
                  <h5>QC (Final Product)</h5>
                  <ul>
                    <li>Viral Test</li>
                    <li>Sterility Test</li>
                    <li>Endotoxin Test</li>
                    <li>Mycoplasma Test</li>
                    <li>Impurity Test</li>
                    <li>Residual Antibiotics Test</li>
                    <li>Potency</li>
                    <li>Cell Counts</li>
                    <li>Cell Viability</li>
                    <li>Visual Observation</li>
                    <li>Identity</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const lineupRows = [
  {
    label: '특징',
    mf1: '매트릭스 필러 입자 1400~1500UM',
    mf2: '세포 재생을 고려한 MPLA Filler 추가',
    mf3: 'MPLA Filler + 세포배양치료제 적용'
  },
  {
    label: '유지기간',
    mf1: '3~5년',
    mf2: '반영구적 기대',
    mf3: '반영구적 기대'
  },
  {
    label: '성생활',
    mf1: '3주 후',
    mf2: '3주 후',
    mf3: '3주 후'
  },
  {
    label: '시술시간',
    mf1: '약 5분',
    mf2: '약 5분',
    mf3: '약 5분'
  },
  {
    label: '마취방법',
    mf1: '국소마취',
    mf2: '국소마취',
    mf3: '국소마취'
  },
  {
    label: '일상생활',
    mf1: '바로 가능 (당일 샤워 가능)',
    mf2: '바로 가능 (당일 샤워 가능)',
    mf3: '바로 가능 (당일 샤워 가능)'
  }
]

const mf2Features = [
  { no: '01', text: '구형의 PLA 입자를 필러로 사용할 수 있도록 개발한 신개념 필러입니다.' },
  { no: '02', text: 'PLA(Polylactic Acid, 폴리유산) 기반으로 설계된 보강형 필러입니다.' },
  { no: '03', text: '경도는 더욱 강하게, 유지기간은 5~10년까지 기대할 수 있습니다.' },
  { no: '04', text: 'MPLA Filler 입자 안에서 세포 재생이 유도되는 방향으로 설계되었습니다.' },
  { no: '05', text: '입자 표면 및 입자 사이 공간으로 세포 유입과 성장을 유도합니다.' },
  { no: '06', text: '입자 사이 빈 공간들이 세포들로 채워지며 구조적 안정성을 돕습니다.' },
  {
    no: '07',
    text: '자라난 인체 세포는 필러 입자가 흡수된 뒤에도 효과 유지에 도움을 줄 수 있습니다.'
  },
  { no: '08', text: '진피층에 주입된 PLA 입자는 다른 조직으로 쉽게 이동하지 않습니다.' },
  { no: '09', text: '오랫동안 자연스럽게 볼륨 효과를 유지하는 데 유리합니다.' },
  { no: '10', text: '미국 FDA GRAS 등록 원료 기반으로 생체 적합성을 고려했습니다.' }
]

const vipFeatures = [
  { no: '01', text: '섬유아세포 조직을 배양해 원하는 부위에 주입하는 방식입니다.' },
  { no: '02', text: '국내 개발 세포 배양 기술 기반의 프리미엄 프로그램입니다.' },
  { no: '03', text: '식약처 승인 기반 기술을 토대로 진행되는 방식입니다.' },
  { no: '04', text: '필러 입자 사이사이에 배양된 섬유아세포 이식을 유도합니다.' },
  { no: '05', text: '섬유아세포는 이식 후에도 재생되며 장기 유지 효과를 기대합니다.' }
]

const cultureSteps = [
  { step: '01', text: '원부자재 출입구' },
  { step: '02', text: '세포 배양기' },
  { step: '03', text: '조직 전처리' },
  { step: '04', text: '진피 섬유아세포 배양' },
  { step: '05', text: '품질테스트 (QC)' },
  { step: '06', text: '배양세포 동결 보관' },
  { step: '07', text: '제품화 및 완제보관' }
]

const productionFlow = [
  '조직 채취 (진피 포함 3mm x 8mm)',
  '조직 전처리',
  '세포(진피 섬유아세포) 배양',
  '배양세포 동결 보관',
  '진피 섬유아세포 배양',
  '세포 수확 및 분병 포장'
]
</script>

<style scoped lang="scss">
.filler-lineup {
  background: #f6f8fb;
  padding: 72px 0 88px;
}

.filler-lineup__block + .filler-lineup__block {
  margin-top: 72px;
}

.filler-lineup__head {
  margin-bottom: 28px;
}

.filler-lineup__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.22em;
  color: #8b97aa;
  text-transform: uppercase;
}

.filler-lineup__title {
  margin: 0;
  font-size: 38px;
  line-height: 1.28;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #0f172a;
  word-break: keep-all;
}

.filler-lineup__lead {
  margin: 14px 0 0;
  font-size: 16px;
  line-height: 1.7;
  color: #5f6b7a;
  word-break: keep-all;
}

/* lineup */
.lineup-cards {
  display: grid;
  gap: 16px;
}

.lineup-card {
  display: flex;
  gap: 18px;
  align-items: stretch;
  padding: 22px 22px 22px 18px;
  border-radius: 22px;
  background: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

.lineup-card__bar {
  width: 6px;
  border-radius: 999px;
  flex: 0 0 auto;
}

.lineup-card.is-mf1 .lineup-card__bar {
  background: #63a0d8;
}

.lineup-card.is-mf2 .lineup-card__bar {
  background: #6f88d2;
}

.lineup-card.is-mf3 .lineup-card__bar {
  background: #8f97b4;
}

.lineup-card__body {
  min-width: 0;
}

.lineup-card__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #eff4fb;
  color: #5c6a7d;
  font-size: 11px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.lineup-card__title {
  margin: 10px 0 0;
  font-size: 24px;
  line-height: 1.35;
  font-weight: 800;
  color: #111827;
  word-break: keep-all;
}

.lineup-card__desc {
  margin: 8px 0 0;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 700;
  color: #374151;
  word-break: keep-all;
}

.lineup-card__sub {
  margin: 4px 0 0;
  font-size: 14px;
  line-height: 1.65;
  color: #6b7280;
  word-break: keep-all;
}

/* compare */
.compare-table {
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid #dde5ee;
  background: #fff;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.05);
}

.compare-table__head,
.compare-table__row {
  display: grid;
  grid-template-columns: 140px repeat(3, minmax(0, 1fr));
}

.compare-table__cell {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 82px;
  padding: 16px 14px;
  border-right: 1px solid #e5eaf0;
  border-bottom: 1px solid #e5eaf0;
  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  font-weight: 600;
  color: #253041;
  word-break: keep-all;
}

.compare-table__cell:last-child {
  border-right: 0;
}

.compare-table__row:last-child .compare-table__cell {
  border-bottom: 0;
}

.compare-table__head .compare-table__cell {
  min-height: 70px;
  font-size: 16px;
  font-weight: 800;
  color: #fff;
}

.compare-table__cell.is-label {
  background: #f8fafc;
  color: #344256;
  font-size: 15px;
  font-weight: 800;
}

.compare-table__head .compare-table__cell.is-label {
  color: transparent;
  background: #f8fafc;
}

.compare-table__head .compare-table__cell.is-mf1 {
  background: #63a0d8;
}

.compare-table__head .compare-table__cell.is-mf2 {
  background: #6f88d2;
}

.compare-table__head .compare-table__cell.is-mf3 {
  background: #8f97b4;
}

.compare-mobile {
  display: none;
}

/* mobile compare card */
.plan-card {
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #dde4ed;
  box-shadow: 0 12px 28px rgba(17, 34, 68, 0.05);
}

.plan-card__top {
  padding: 16px 16px 14px;
  color: #fff;
}

.plan-card__chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 0 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.plan-card__top h3 {
  margin: 10px 0 0;
  font-size: 20px;
  line-height: 1.35;
  font-weight: 800;
  word-break: keep-all;
}

.plan-card.is-mf1 .plan-card__top {
  background: #63a0d8;
}

.plan-card.is-mf2 .plan-card__top {
  background: #6f88d2;
}

.plan-card.is-mf3 .plan-card__top {
  background: #8f97b4;
}

.plan-card__body {
  padding: 8px 16px 14px;
}

.plan-card__row {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 10px;
  padding: 12px 0;
  border-bottom: 1px solid #edf1f5;
}

.plan-card__row:last-child {
  border-bottom: 0;
}

.plan-card__row span {
  font-size: 13px;
  font-weight: 800;
  color: #6b7280;
}

.plan-card__row strong {
  font-size: 14px;
  line-height: 1.6;
  color: #1f2937;
  word-break: keep-all;
}

/* premium */
.premium-intro {
  padding: 28px 28px 26px;
  border-radius: 24px;
  background: #fff;
  border: 1px solid #dde4ec;
  box-shadow: 0 14px 32px rgba(18, 32, 61, 0.05);
}

.premium-intro__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  background: linear-gradient(90deg, #67b9b3 0%, #5aa9a5 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  word-break: keep-all;
}

.premium-intro__title {
  margin: 18px 0 0;
  font-size: 30px;
  line-height: 1.35;
  font-weight: 800;
  color: #111827;
  word-break: keep-all;
}

.premium-intro__text {
  margin: 12px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: #5f6b7a;
  word-break: keep-all;
}

.premium-feature-list {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.premium-feature-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #dde4ee;
  box-shadow: 0 8px 20px rgba(17, 34, 68, 0.04);
}

.premium-feature-item__no {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #6b8fe0 0%, #5f7fd7 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
}

.premium-feature-item__text {
  margin: 2px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: #46515f;
  font-weight: 500;
  word-break: keep-all;
}

/* vip */
.vip-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 12px 18px;
  border-radius: 18px;
  background: linear-gradient(90deg, #67b9b3 0%, #5caeaa 100%);
  color: #fff;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 700;
  text-align: center;
  word-break: keep-all;
}

.vip-intro {
  margin-top: 18px;
  padding: 22px 24px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #dde4ed;
  text-align: center;

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.75;
    font-weight: 500;
    color: #4b5563;
    word-break: keep-all;
  }
}

.vip-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 20px;
}

.vip-card {
  padding: 20px 18px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid #e1e7ef;
  box-shadow: 0 8px 20px rgba(20, 30, 50, 0.04);
}

.vip-card__no {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(180deg, #72a7de 0%, #658bd4 100%);
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  line-height: 1;
}

.vip-card__text {
  margin: 12px 0 0;
  font-size: 15px;
  line-height: 1.7;
  color: #334155;
  font-weight: 600;
  word-break: keep-all;
}

/* process */
.process-wrap,
.timeline-wrap {
  margin-top: 56px;
}

.process-wrap__head,
.timeline-wrap__head {
  margin-bottom: 22px;
  text-align: center;
}

.process-wrap__title,
.timeline-wrap__title {
  margin: 0;
  font-size: 30px;
  line-height: 1.35;
  font-weight: 800;
  color: #111827;
  word-break: keep-all;
}

.process-step-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.process-step-card {
  padding: 20px 16px;
  border: 1px solid #d9e5f2;
  border-radius: 18px;
  background: #fff;
  text-align: center;
  box-shadow: 0 8px 20px rgba(21, 35, 59, 0.04);
}

.process-step-card__step {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 78px;
  height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  background: #eef5fc;
  color: #5b9ae0;
  font-size: 11px;
  line-height: 1;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.process-step-card__text {
  margin: 12px 0 0;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 700;
  color: #191f2b;
  word-break: keep-all;
}

/* timeline */
.timeline-grid {
  display: grid;
  grid-template-columns: 0.95fr 1fr 1fr;
  gap: 18px;
}

.timeline-card {
  padding: 22px 20px;
  border-radius: 22px;
  background: #fff;
  border: 1px solid #dce3ec;
  box-shadow: 0 12px 28px rgba(15, 30, 54, 0.05);

  h4 {
    margin: 0 0 16px;
    font-size: 22px;
    line-height: 1.3;
    font-weight: 800;
    color: #111827;
    text-align: center;
  }
}

.timeline-card__period-box {
  padding: 16px 14px;
  border-radius: 16px;
  background: #eff7ea;
  border: 1px solid #d4e5ce;
  text-align: center;

  strong {
    display: block;
    font-size: 16px;
    line-height: 1.5;
    color: #2d3d2d;
  }

  span {
    display: block;
    margin-top: 8px;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 800;
    color: #495a45;
  }
}

.timeline-card__period-box + .timeline-card__period-box {
  margin-top: 12px;
}

.timeline-card__foot {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.65;
  color: #6b7280;
  text-align: center;
}

.timeline-flow {
  display: grid;
  gap: 10px;
}

.timeline-flow__item {
  position: relative;
  padding: 14px 14px;
  border-radius: 14px;
  background: #f4f1fa;
  border: 1px solid #e4dcef;
  font-size: 14px;
  line-height: 1.6;
  font-weight: 700;
  color: #4b5563;
  text-align: center;
  word-break: keep-all;
}

.timeline-flow__item:not(:last-child)::after {
  content: '↓';
  display: block;
  margin-top: 8px;
  color: #8d7eb6;
  font-size: 15px;
  font-weight: 800;
}

.check-panel {
  display: grid;
  gap: 12px;
}

.check-panel__box {
  padding: 16px 16px 14px;
  border-radius: 16px;
  background: #f3f8fc;
  border: 1px solid #d9e7f3;

  h5 {
    margin: 0 0 10px;
    font-size: 17px;
    line-height: 1.3;
    font-weight: 800;
    color: #3b4a5c;
  }

  ul {
    margin: 0;
    padding-left: 18px;
  }

  li {
    font-size: 14px;
    line-height: 1.65;
    color: #5b6573;
  }
}

/* responsive */
@include desktop-down {
  .filler-lineup {
    padding: 64px 0 78px;
  }

  .filler-lineup__block + .filler-lineup__block {
    margin-top: 64px;
  }

  .filler-lineup__title {
    font-size: 34px;
  }

  .premium-intro__title,
  .process-wrap__title,
  .timeline-wrap__title {
    font-size: 28px;
  }

  .timeline-grid {
    grid-template-columns: 1fr;
  }
}

@include laptop-down {
  .filler-lineup {
    padding: 56px 0 72px;
  }

  .filler-lineup__block + .filler-lineup__block {
    margin-top: 56px;
  }

  .filler-lineup__title {
    font-size: 30px;
  }

  .lineup-card {
    padding: 18px 18px 18px 16px;
    border-radius: 18px;
  }

  .lineup-card__title {
    font-size: 21px;
  }

  .lineup-card__desc {
    font-size: 15px;
  }

  .lineup-card__sub {
    font-size: 13px;
  }

  .compare-table {
    display: none;
  }

  .compare-mobile {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .process-step-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@include tablet-only {
  .vip-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@include mobile {
  .filler-lineup {
    padding: 48px 0 60px;
  }

  .filler-lineup__block + .filler-lineup__block {
    margin-top: 48px;
  }

  .filler-lineup__head {
    margin-bottom: 22px;
  }

  .filler-lineup__eyebrow {
    margin-bottom: 8px;
    font-size: 10px;
    letter-spacing: 0.18em;
  }

  .filler-lineup__title {
    font-size: 24px;
    line-height: 1.35;
  }

  .filler-lineup__lead {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.7;
  }

  .lineup-cards {
    gap: 12px;
  }

  .lineup-card {
    gap: 12px;
    padding: 16px 14px 16px 12px;
    border-radius: 16px;
  }

  .lineup-card__bar {
    width: 5px;
  }

  .lineup-card__badge {
    min-height: 24px;
    padding: 0 8px;
    font-size: 10px;
  }

  .lineup-card__title {
    margin-top: 8px;
    font-size: 18px;
    line-height: 1.4;
  }

  .lineup-card__desc {
    margin-top: 6px;
    font-size: 14px;
    line-height: 1.65;
  }

  .lineup-card__sub {
    margin-top: 4px;
    font-size: 13px;
    line-height: 1.6;
  }

  .plan-card__top {
    padding: 14px 14px 12px;
  }

  .plan-card__top h3 {
    font-size: 18px;
  }

  .plan-card__body {
    padding: 6px 14px 12px;
  }

  .plan-card__row {
    grid-template-columns: 76px minmax(0, 1fr);
    gap: 8px;
    padding: 10px 0;
  }

  .plan-card__row span {
    font-size: 12px;
  }

  .plan-card__row strong {
    font-size: 13px;
    line-height: 1.55;
  }

  .premium-intro {
    padding: 20px 16px 18px;
    border-radius: 18px;
  }

  .premium-intro__badge {
    width: 100%;
    min-height: 42px;
    padding: 8px 14px;
    font-size: 13px;
    text-align: center;
    line-height: 1.45;
  }

  .premium-intro__title {
    margin-top: 14px;
    font-size: 22px;
    line-height: 1.4;
  }

  .premium-intro__text {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.7;
  }

  .premium-feature-list {
    gap: 10px;
    margin-top: 16px;
  }

  .premium-feature-item {
    gap: 10px;
    padding: 14px 12px;
    border-radius: 14px;
  }

  .premium-feature-item__no {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    font-size: 14px;
  }

  .premium-feature-item__text {
    font-size: 14px;
    line-height: 1.65;
  }

  .vip-banner {
    min-height: 46px;
    padding: 10px 14px;
    border-radius: 16px;
    font-size: 15px;
    line-height: 1.55;
  }

  .vip-intro {
    margin-top: 14px;
    padding: 18px 14px;
    border-radius: 16px;

    p {
      font-size: 14px;
      line-height: 1.75;
    }
  }

  .vip-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 16px;
  }

  .vip-card {
    padding: 16px 14px;
    border-radius: 16px;
  }

  .vip-card__no {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  .vip-card__text {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.65;
  }

  .process-wrap,
  .timeline-wrap {
    margin-top: 44px;
  }

  .process-wrap__head,
  .timeline-wrap__head {
    margin-bottom: 16px;
  }

  .process-wrap__title,
  .timeline-wrap__title {
    font-size: 22px;
    line-height: 1.4;
  }

  .process-step-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .process-step-card {
    padding: 16px 14px;
    border-radius: 14px;
  }

  .process-step-card__step {
    min-width: 72px;
    height: 26px;
    font-size: 10px;
  }

  .process-step-card__text {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.6;
  }

  .timeline-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .timeline-card {
    padding: 18px 14px;
    border-radius: 16px;

    h4 {
      margin-bottom: 14px;
      font-size: 18px;
    }
  }

  .timeline-card__period-box {
    padding: 14px 12px;
    border-radius: 14px;

    strong {
      font-size: 14px;
    }

    span {
      font-size: 20px;
    }
  }

  .timeline-card__foot {
    font-size: 12px;
  }

  .timeline-flow__item {
    padding: 12px;
    font-size: 13px;
    line-height: 1.55;
  }

  .check-panel__box {
    padding: 14px 12px 12px;
    border-radius: 14px;

    h5 {
      font-size: 15px;
    }

    li {
      font-size: 13px;
      line-height: 1.6;
    }
  }
}
</style>
