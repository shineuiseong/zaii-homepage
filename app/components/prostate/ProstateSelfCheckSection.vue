<template>
  <section id="prostate-self-check" class="prostate-self-check section">
    <div class="container">
      <div class="prostate-self-check__head">
        <h2 class="prostate-self-check__title">전립선비대증 자가진단 프로그램</h2>

        <p class="prostate-self-check__desc">
          지난 한달간 소변볼 때를 생각해 5번쯤 소변을 본다고 했을때,
        </p>
        <p class="prostate-self-check__desc prostate-self-check__desc--accent">
          다음 불편한 증상이 몇 번이나 나타났는지 질문 사항마다 해당칸에 표시 하세요.
        </p>
      </div>

      <div class="prostate-self-check__panel">
        <div
          v-for="(question, qIndex) in questions"
          :key="question.id"
          class="prostate-self-check__question"
        >
          <div
            class="prostate-self-check__question-title"
            :class="{
              'is-blue': qIndex % 2 === 0,
              'is-gray': qIndex % 2 === 1
            }"
          >
            {{ qIndex + 1 }}. {{ question.text }}
          </div>

          <div class="prostate-self-check__options">
            <label
              v-for="option in question.options"
              :key="`${question.id}-${option.score}`"
              class="prostate-self-check__option"
              :class="{ 'is-selected': answers[qIndex] === option.score }"
            >
              <input
                type="radio"
                :name="question.id"
                :value="option.score"
                :checked="answers[qIndex] === option.score"
                @change="setAnswer(qIndex, option.score)"
              />
              <span class="prostate-self-check__radio" />
              <span class="prostate-self-check__label">{{ option.label }}</span>
            </label>
          </div>
        </div>

        <div class="prostate-self-check__score-guide">
          전혀 없음 0점, 5번에 1번 이하 1점, 절반 이하 2점, 절반 정도 3점, 절반 이상 4점, 거의 항상
          5점
        </div>

        <div class="prostate-self-check__actions">
          <button type="button" class="prostate-self-check__submit" @click="handleSubmit">
            자가진단 결과 확인하기
          </button>
        </div>

        <p v-if="showValidation" class="prostate-self-check__validation">
          모든 문항을 선택해 주세요.
        </p>

        <div v-if="showResult && result" class="prostate-self-check__result">
          <div class="prostate-self-check__result-head">
            <p class="prostate-self-check__result-eyebrow">SELF CHECK RESULT</p>
            <h3 class="prostate-self-check__result-title">자가진단 결과</h3>
          </div>

          <div class="prostate-self-check__result-score">
            <span class="prostate-self-check__result-score-number">{{ totalScore }}</span>
            <span class="prostate-self-check__result-score-unit">점</span>
          </div>

          <div
            class="prostate-self-check__result-badge"
            :class="{
              'is-mild': result.level === '경증',
              'is-moderate': result.level === '중등도',
              'is-severe': result.level === '중증'
            }"
          >
            {{ result.level }}
          </div>

          <p class="prostate-self-check__result-desc">
            {{ result.desc }}
          </p>

          <div class="prostate-self-check__result-note">
            본 자가진단은 참고용이며, 정확한 상태 확인을 위해서는 전문의 진료가 필요합니다.
          </div>
        </div>

        <div class="prostate-self-check__reserve-box">
          <p>
            저희 자이비뇨의학과병원에서는 환자분들의 원활한 진료를 위해 예약제를 운영하고 있기
            때문에
          </p>
          <p><strong>02)6207-5678</strong> 로 예약 후 방문해 주시기를 바랍니다.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Option = {
  label: string
  score: number
}

type Question = {
  id: string
  text: string
  options: Option[]
}

const defaultOptions: Option[] = [
  { label: '전혀없음', score: 0 },
  { label: '5번 중 1번 이하', score: 1 },
  { label: '절반이하', score: 2 },
  { label: '절반정도', score: 3 },
  { label: '절반이상', score: 4 },
  { label: '거의항상', score: 5 }
]

const nightOptions: Option[] = [
  { label: '없음', score: 0 },
  { label: '1번', score: 1 },
  { label: '2번', score: 2 },
  { label: '3번', score: 3 },
  { label: '4번', score: 4 },
  { label: '5번', score: 5 }
]

const questions: Question[] = [
  {
    id: 'q1',
    text: '소변을 보고 난후에도 소변이 남아 있는 느낌이 드시는 경우가 있었나요?',
    options: defaultOptions
  },
  {
    id: 'q2',
    text: '소변을 보고 난후 2시간 이내에 다시 소변을 봐야 했던 적이 있었나요?',
    options: defaultOptions
  },
  {
    id: 'q3',
    text: '소변을 보는 도중 소변 줄기가 끊어져 다시 힘을 주어 소변을 본 적 있었나요?',
    options: defaultOptions
  },
  {
    id: 'q4',
    text: '소변이 마려울때 참기 어려운 경우가 있었나요?',
    options: defaultOptions
  },
  {
    id: 'q5',
    text: '소변 줄기가 약하거나 가늘게 나오는 경우가 있었나요?',
    options: defaultOptions
  },
  {
    id: 'q6',
    text: '소변을 볼 때 금방 나오지 않고 힘을 주어야 소변이 나오는 경우가 있었나요?',
    options: defaultOptions
  },
  {
    id: 'q7',
    text: '밤에 잠을 자다 소변을 보기 위해 일어난 적이 하루밤에 몇번이 있었나요?',
    options: nightOptions
  }
]

const answers = ref<number[]>(Array(questions.length).fill(-1))
const showResult = ref(false)
const showValidation = ref(false)

const totalScore = computed(() => {
  return answers.value.reduce((sum, value) => sum + (value >= 0 ? value : 0), 0)
})

const result = computed(() => {
  if (answers.value.some((value) => value < 0)) return null

  if (totalScore.value <= 7) {
    return {
      level: '경증',
      desc: '현재 증상은 비교적 가벼운 단계로 보입니다. 다만 증상이 반복되거나 점점 심해진다면 조기에 진료를 받아 정확한 상태를 확인하는 것이 좋습니다.'
    }
  }

  if (totalScore.value <= 19) {
    return {
      level: '중등도',
      desc: '일상생활에 영향을 줄 수 있는 단계입니다. 배뇨 불편감이 지속될 가능성이 높으므로 비뇨의학과 진료를 통해 정확한 진단과 치료 방향을 상담받는 것을 권장합니다.'
    }
  }

  return {
    level: '중증',
    desc: '증상이 비교적 심한 단계로 보입니다. 방치할 경우 삶의 질 저하뿐 아니라 방광 기능 저하로 이어질 수 있으므로 빠른 시일 내에 전문의 진료를 받아보시는 것이 좋습니다.'
  }
})

const setAnswer = (index: number, score: number) => {
  answers.value[index] = score
  showValidation.value = false
}

const handleSubmit = () => {
  if (answers.value.some((value) => value < 0)) {
    showValidation.value = true
    showResult.value = false
    return
  }

  showValidation.value = false
  showResult.value = true
}
</script>

<style scoped lang="scss">
.prostate-self-check {
  background: #7d8495;
  padding: 96px 0 110px;
}

.prostate-self-check__head {
  text-align: center;
  margin-bottom: 46px;
}

.prostate-self-check__title {
  margin: 0;
  font-size: 60px;
  line-height: 1.16;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #ffffff;
  word-break: keep-all;
}

.prostate-self-check__desc {
  margin: 24px 0 0;
  font-size: 24px;
  line-height: 1.65;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.96);
  word-break: keep-all;
}

.prostate-self-check__desc--accent {
  margin-top: 4px;
  color: #ffe55e;
  font-weight: 700;
}

.prostate-self-check__panel {
  max-width: 1420px;
  margin: 0 auto;
}

.prostate-self-check__question + .prostate-self-check__question {
  margin-top: 0;
}

.prostate-self-check__question-title {
  padding: 28px 34px;
  font-size: 23px;
  line-height: 1.45;
  font-weight: 700;
  color: #ffffff;
  word-break: keep-all;

  &.is-blue {
    background: #5f9bd2;
  }

  &.is-gray {
    background: #9199b4;
  }
}

.prostate-self-check__options {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 0;
  padding: 26px 28px;
  background: #ffffff;
}

.prostate-self-check__option {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 8px;
  cursor: pointer;
  text-align: center;
  user-select: none;
}

.prostate-self-check__option input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.prostate-self-check__radio {
  width: 22px;
  height: 22px;
  border: 2px solid #8e8e93;
  border-radius: 50%;
  flex: 0 0 auto;
  background: #fff;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.prostate-self-check__label {
  font-size: 19px;
  line-height: 1.45;
  font-weight: 600;
  color: #22252b;
  word-break: keep-all;
}

.prostate-self-check__option.is-selected .prostate-self-check__radio {
  border-color: #377fd0;
  box-shadow: inset 0 0 0 5px #377fd0;
}

.prostate-self-check__option.is-selected .prostate-self-check__label {
  color: #1f4f8e;
  font-weight: 800;
}

.prostate-self-check__score-guide {
  margin-top: 34px;
  padding: 28px 30px;
  background: #666666;
  text-align: center;
  font-size: 24px;
  line-height: 1.6;
  font-weight: 700;
  color: #ffffff;
  word-break: keep-all;
}

.prostate-self-check__actions {
  display: flex;
  justify-content: center;
  margin-top: 46px;
}

.prostate-self-check__submit {
  min-width: 620px;
  min-height: 122px;
  padding: 0 44px;
  border: 0;
  border-radius: 999px;
  background: #f3df63;
  box-shadow: 0 0 0 10px rgba(255, 232, 107, 0.16);
  font-size: 34px;
  line-height: 1.2;
  font-weight: 800;
  color: #1b1d22;
  word-break: keep-all;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.02);
  }
}

.prostate-self-check__validation {
  margin: 24px 0 0;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #ffe55e;
}

.prostate-self-check__result {
  margin-top: 42px;
  padding: 42px 36px;
  background: #ffffff;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 16px 40px rgba(34, 40, 58, 0.12);
}

.prostate-self-check__result-head {
  margin-bottom: 20px;
}

.prostate-self-check__result-eyebrow {
  margin: 0 0 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.28em;
  color: #7e8698;
}

.prostate-self-check__result-title {
  margin: 0;
  font-size: 34px;
  line-height: 1.2;
  font-weight: 800;
  color: #181b22;
}

.prostate-self-check__result-score {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
}

.prostate-self-check__result-score-number {
  font-size: 72px;
  line-height: 1;
  font-weight: 900;
  color: #111827;
}

.prostate-self-check__result-score-unit {
  font-size: 28px;
  line-height: 1.2;
  font-weight: 700;
  color: #4b5563;
}

.prostate-self-check__result-badge {
  width: fit-content;
  margin: 22px auto 20px;
  padding: 12px 24px;
  border-radius: 999px;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 800;

  &.is-mild {
    background: #eaf4ff;
    color: #1f6fb7;
  }

  &.is-moderate {
    background: #fff3d8;
    color: #c07a00;
  }

  &.is-severe {
    background: #ffe3e3;
    color: #d63c3c;
  }
}

.prostate-self-check__result-desc {
  max-width: 980px;
  margin: 0 auto;
  font-size: 21px;
  line-height: 1.75;
  font-weight: 500;
  color: #4b4f58;
  word-break: keep-all;
}

.prostate-self-check__result-note {
  margin-top: 22px;
  font-size: 16px;
  line-height: 1.7;
  color: #7a7f89;
}

.prostate-self-check__reserve-box {
  margin-top: 42px;
  padding: 38px 28px;
  background: #4b5563;
  text-align: center;
  color: #ffffff;

  p {
    color: #fff;
    margin: 0;
    font-size: 23px;
    line-height: 1.7;
    font-weight: 600;
    word-break: keep-all;
  }

  p + p {
    margin-top: 6px;
  }

  strong {
    color: #ffe55e;
    font-size: 28px;
    font-weight: 900;
  }
}

@include desktop-down {
  .prostate-self-check {
    padding: 82px 0 96px;
  }

  .prostate-self-check__title {
    font-size: 48px;
  }

  .prostate-self-check__desc {
    font-size: 20px;
  }

  .prostate-self-check__question-title {
    padding: 22px 24px;
    font-size: 20px;
  }

  .prostate-self-check__options {
    padding: 20px 18px;
  }

  .prostate-self-check__label {
    font-size: 16px;
  }

  .prostate-self-check__score-guide {
    font-size: 20px;
  }

  .prostate-self-check__submit {
    min-width: 520px;
    min-height: 100px;
    font-size: 28px;
  }

  .prostate-self-check__result-score-number {
    font-size: 60px;
  }

  .prostate-self-check__result-desc {
    font-size: 18px;
  }

  .prostate-self-check__reserve-box p {
    font-size: 20px;
  }

  .prostate-self-check__reserve-box strong {
    font-size: 24px;
  }
}

@include laptop-down {
  .prostate-self-check {
    padding: 70px 0 84px;
  }

  .prostate-self-check__head {
    margin-bottom: 32px;
  }

  .prostate-self-check__title {
    font-size: 36px;
  }

  .prostate-self-check__desc {
    margin-top: 16px;
    font-size: 16px;
    line-height: 1.65;
  }

  .prostate-self-check__question-title {
    padding: 18px 18px;
    font-size: 17px;
  }

  .prostate-self-check__options {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px 10px;
    padding: 16px 14px;
  }

  .prostate-self-check__option {
    justify-content: flex-start;
    padding: 8px 6px;
  }

  .prostate-self-check__label {
    font-size: 15px;
  }

  .prostate-self-check__score-guide {
    margin-top: 24px;
    padding: 20px 16px;
    font-size: 16px;
    line-height: 1.7;
  }

  .prostate-self-check__actions {
    margin-top: 30px;
  }

  .prostate-self-check__submit {
    min-width: 0;
    width: 100%;
    max-width: 520px;
    min-height: 76px;
    padding: 0 22px;
    font-size: 22px;
  }

  .prostate-self-check__result {
    padding: 28px 20px;
  }

  .prostate-self-check__result-title {
    font-size: 28px;
  }

  .prostate-self-check__result-score-number {
    font-size: 52px;
  }

  .prostate-self-check__result-score-unit {
    font-size: 22px;
  }

  .prostate-self-check__result-badge {
    font-size: 18px;
  }

  .prostate-self-check__result-desc {
    font-size: 16px;
    line-height: 1.7;
  }

  .prostate-self-check__reserve-box {
    margin-top: 30px;
    padding: 28px 18px;
  }

  .prostate-self-check__reserve-box p {
    font-size: 16px;
  }

  .prostate-self-check__reserve-box strong {
    font-size: 22px;
  }
}

@include mobile {
  .prostate-self-check {
    padding: 52px 0 62px;
  }

  .prostate-self-check__head {
    margin-bottom: 24px;
  }

  .prostate-self-check__title {
    font-size: 28px;
    line-height: 1.25;
  }

  .prostate-self-check__desc {
    margin-top: 12px;
    font-size: 14px;

    br {
      display: none;
    }
  }

  .prostate-self-check__question-title {
    padding: 14px 14px;
    font-size: 15px;
    line-height: 1.55;
  }

  .prostate-self-check__options {
    grid-template-columns: 1fr;
    gap: 6px;
    padding: 12px 12px;
  }

  .prostate-self-check__option {
    padding: 8px 4px;
  }

  .prostate-self-check__radio {
    width: 18px;
    height: 18px;
  }

  .prostate-self-check__label {
    font-size: 14px;
  }

  .prostate-self-check__score-guide {
    margin-top: 18px;
    padding: 16px 12px;
    font-size: 13px;
    line-height: 1.65;
  }

  .prostate-self-check__actions {
    margin-top: 22px;
  }

  .prostate-self-check__submit {
    min-height: 60px;
    padding: 0 16px;
    font-size: 18px;
    box-shadow: 0 0 0 6px rgba(255, 232, 107, 0.14);
  }

  .prostate-self-check__validation {
    font-size: 14px;
  }

  .prostate-self-check__result {
    margin-top: 24px;
    padding: 22px 14px;
    border-radius: 18px;
  }

  .prostate-self-check__result-eyebrow {
    font-size: 10px;
    letter-spacing: 0.2em;
  }

  .prostate-self-check__result-title {
    font-size: 22px;
  }

  .prostate-self-check__result-score-number {
    font-size: 42px;
  }

  .prostate-self-check__result-score-unit {
    font-size: 18px;
  }

  .prostate-self-check__result-badge {
    margin: 16px auto 14px;
    padding: 10px 18px;
    font-size: 15px;
  }

  .prostate-self-check__result-desc {
    font-size: 14px;
    line-height: 1.7;
  }

  .prostate-self-check__result-note {
    font-size: 12px;
  }

  .prostate-self-check__reserve-box {
    margin-top: 22px;
    padding: 20px 14px;
  }

  .prostate-self-check__reserve-box p {
    font-size: 14px;
    line-height: 1.65;
  }

  .prostate-self-check__reserve-box strong {
    font-size: 18px;
  }
}
</style>
