<template>
  <form class="consultation-form" @submit.prevent="handleSubmit">
    <div class="consultation-form__intro">
      <p class="consultation-form__intro-title">간단한 정보만 남겨주세요</p>
      <p class="consultation-form__intro-desc">
        성함과 연락처를 남겨주시면 확인 후 빠르게 상담 도와드리겠습니다.
      </p>
    </div>

    <div class="consultation-form__section">
      <div class="consultation-form__section-head">
        <h3 class="consultation-form__section-title">기본 정보</h3>
        <p class="consultation-form__section-desc">필수 항목만 먼저 입력해주세요.</p>
      </div>

      <div class="consultation-form__grid">
        <div class="consultation-form__field consultation-form__field--half">
          <label class="consultation-form__label" for="name">
            성함 <span class="consultation-form__required">*</span>
          </label>
          <input
            id="name"
            v-model.trim="form.name"
            type="text"
            class="consultation-form__input"
            placeholder="성함을 입력해주세요"
            autocomplete="name"
          />
          <p v-if="errors.name" class="consultation-form__error">{{ errors.name }}</p>
        </div>

        <div class="consultation-form__field consultation-form__field--half">
          <label class="consultation-form__label" for="phone">
            연락처 <span class="consultation-form__required">*</span>
          </label>
          <input
            id="phone"
            :value="form.phone"
            type="tel"
            class="consultation-form__input"
            placeholder="예: 010-1234-5678"
            inputmode="numeric"
            autocomplete="tel"
            @input="onPhoneInput"
          />
          <p v-if="errors.phone" class="consultation-form__error">{{ errors.phone }}</p>
        </div>
      </div>
    </div>

    <div class="consultation-form__section">
      <div class="consultation-form__section-head">
        <h3 class="consultation-form__section-title">추가 정보</h3>
        <p class="consultation-form__section-desc">잘 모르시면 ‘모름’을 선택하셔도 됩니다.</p>
      </div>

      <div class="consultation-form__grid">
        <div class="consultation-form__field consultation-form__field--half">
          <label class="consultation-form__label" for="age">나이</label>
          <div class="consultation-form__select-wrap">
            <select id="age" v-model="form.age" class="consultation-form__select">
              <option value="모름">모름</option>
              <option value="40대 이하">40대 이하</option>
              <option value="50대">50대</option>
              <option value="60대">60대</option>
              <option value="70대">70대</option>
              <option value="80대 이상">80대 이상</option>
            </select>
            <Icon name="lucide:chevron-down" class="consultation-form__select-icon" />
          </div>
        </div>

        <div class="consultation-form__field consultation-form__field--half">
          <label class="consultation-form__label" for="insurance">실비보험 유무</label>
          <div class="consultation-form__select-wrap">
            <select id="insurance" v-model="form.insurance" class="consultation-form__select">
              <option value="모름">모름</option>
              <option value="있음">있음</option>
              <option value="없음">없음</option>
            </select>
            <Icon name="lucide:chevron-down" class="consultation-form__select-icon" />
          </div>
        </div>

        <div class="consultation-form__field consultation-form__field--full">
          <label class="consultation-form__label" for="region">지역</label>
          <div class="consultation-form__select-wrap">
            <select id="region" v-model="form.region" class="consultation-form__select">
              <option value="모름">모름</option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="인천">인천</option>
              <option value="강원">강원</option>
              <option value="충청">충청</option>
              <option value="전라">전라</option>
              <option value="경상">경상</option>
              <option value="제주">제주</option>
              <option value="기타">기타</option>
            </select>
            <Icon name="lucide:chevron-down" class="consultation-form__select-icon" />
          </div>
        </div>

        <div class="consultation-form__field consultation-form__field--full">
          <label class="consultation-form__label" for="content">상담내용</label>
          <textarea
            id="content"
            v-model.trim="form.content"
            class="consultation-form__textarea"
            placeholder="증상이나 궁금한 점을 편하게 적어주세요&#10;예: 야간뇨가 심하고 소변 줄기가 약해졌습니다."
            rows="6"
          />
          <p class="consultation-form__field-help">
            상담내용은 선택 입력이며, 건강 상태나 증상 관련 정보가 포함될 수 있습니다.
          </p>
        </div>
      </div>
    </div>

    <div class="consultation-form__agree-list">
      <div class="consultation-form__agree">
        <label class="consultation-form__agree-label">
          <input v-model="form.agreePrivacy" type="checkbox" class="consultation-form__checkbox" />
          <span class="consultation-form__agree-text">
            개인정보 수집 및 이용에 동의합니다. <strong>(필수)</strong>
            <NuxtLink to="/privacy" class="consultation-form__privacy-link"> 보기 </NuxtLink>
          </span>
        </label>
        <p v-if="errors.agreePrivacy" class="consultation-form__error">
          {{ errors.agreePrivacy }}
        </p>
      </div>

      <div class="consultation-form__agree consultation-form__agree--sub">
        <label class="consultation-form__agree-label">
          <input
            v-model="form.agreeSensitive"
            type="checkbox"
            class="consultation-form__checkbox"
          />
          <span class="consultation-form__agree-text">
            상담내용에 건강정보가 포함될 수 있음을 이해하고 동의합니다. <strong>(선택)</strong>
          </span>
        </label>
      </div>
    </div>

    <div class="consultation-form__actions">
      <button
        type="submit"
        class="consultation-form__submit"
        :class="{ 'consultation-form__submit--loading': isSubmitting }"
        :disabled="isSubmitting"
      >
        <span class="consultation-form__submit-content">
          <Icon
            v-if="isSubmitting"
            name="lucide:loader-circle"
            class="consultation-form__submit-spinner"
          />
          {{ isSubmitting ? '접수 중입니다...' : '상담 신청하기' }}
        </span>
      </button>

      <p class="consultation-form__helper">
        남겨주신 정보는 상담 목적 외에는 사용되지 않으며, 관련 법령에 따라 안전하게 관리됩니다.
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { toast } from 'vue-sonner'

type ConsultationFormValues = {
  name: string
  phone: string
  age: string
  insurance: string
  region: string
  content: string
  agreePrivacy: boolean
  agreeSensitive: boolean
}

type ConsultationFormErrors = Partial<Record<keyof ConsultationFormValues, string>>

const form = reactive<ConsultationFormValues>({
  name: '',
  phone: '',
  age: '모름',
  insurance: '모름',
  region: '모름',
  content: '',
  agreePrivacy: true,
  agreeSensitive: false
})

const isSubmitting = ref(false)

const errors = reactive<ConsultationFormErrors>({})

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 3) return digits
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
}

function onPhoneInput(event: Event) {
  const target = event.target as HTMLInputElement
  form.phone = formatPhone(target.value)
}

function resetErrors() {
  errors.name = ''
  errors.phone = ''
  errors.agreePrivacy = ''
}

function validate() {
  resetErrors()
  let valid = true

  if (!form.name) {
    errors.name = '성함을 입력해주세요.'
    valid = false
  }

  const phoneDigits = form.phone.replace(/\D/g, '')
  if (!phoneDigits) {
    errors.phone = '연락처를 입력해주세요.'
    valid = false
  } else if (phoneDigits.length < 10) {
    errors.phone = '연락처를 정확히 입력해주세요.'
    valid = false
  }

  if (!form.agreePrivacy) {
    errors.agreePrivacy = '개인정보 수집 및 이용 동의가 필요합니다.'
    valid = false
  }

  if (!valid) {
    toast.error('입력한 내용을 다시 확인해주세요.')
  }

  return valid
}

async function handleSubmit() {
  if (isSubmitting.value) return
  if (!validate()) return

  const payload = {
    ...form,
    phone: form.phone.replace(/\D/g, '')
  }

  isSubmitting.value = true

  try {
    await $fetch('/api/consultation', {
      method: 'POST',
      body: payload
    })

    toast.success('상담 신청이 접수되었습니다.')

    form.name = ''
    form.phone = ''
    form.age = '모름'
    form.insurance = '모름'
    form.region = '모름'
    form.content = ''
    form.agreePrivacy = true
    form.agreeSensitive = false
  } catch (err: any) {
    console.error('consultation error:', err)

    const message =
      err?.data?.statusMessage ||
      err?.statusMessage ||
      '상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'

    toast.error(message)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
.consultation-form {
  width: 100%;
}

.consultation-form__intro {
  margin-bottom: 24px;
  padding: 20px 22px;
  border-radius: 20px;
  background: linear-gradient(135deg, #f4f8ff 0%, #eef5ff 100%);
  border: 1px solid #dbe8ff;
}

.consultation-form__intro-title {
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
  color: #111827;
}

.consultation-form__intro-desc {
  margin: 8px 0 0;
  font-size: 15px;
  line-height: 1.6;
  color: #5b6472;
}

.consultation-form__section {
  padding: 24px;
  border: 1px solid #e7edf6;
  border-radius: 24px;
  background: #fff;
}

.consultation-form__section + .consultation-form__section {
  margin-top: 18px;
}

.consultation-form__section-head {
  margin-bottom: 18px;
}

.consultation-form__section-title {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.3;
  color: #111827;
}

.consultation-form__section-desc {
  margin: 6px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #6b7280;
}

.consultation-form__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 18px;
}

.consultation-form__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.consultation-form__field--half {
  grid-column: span 1;
}

.consultation-form__field--full {
  grid-column: 1 / -1;
}

.consultation-form__label {
  font-size: 15px;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
}

.consultation-form__required {
  color: #2563eb;
}

.consultation-form__field-help {
  margin: 2px 0 0;
  font-size: 13px;
  line-height: 1.5;
  color: #7b8494;
}

.consultation-form__input,
.consultation-form__select,
.consultation-form__textarea {
  width: 100%;
  border: 1px solid #dbe3ef;
  border-radius: 18px;
  background: #fff;
  color: #111827;
  font-size: 16px;
  line-height: 1.4;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.consultation-form__input,
.consultation-form__select {
  height: 58px;
}

.consultation-form__input {
  padding: 0 18px;
}

.consultation-form__select-wrap {
  position: relative;
}

.consultation-form__select {
  appearance: none;
  -webkit-appearance: none;
  padding: 0 50px 0 18px;
  cursor: pointer;
}

.consultation-form__select-icon {
  position: absolute;
  top: 50%;
  right: 18px;
  width: 18px;
  height: 18px;
  color: #64748b;
  pointer-events: none;
  transform: translateY(-50%);
}

.consultation-form__textarea {
  min-height: 170px;
  padding: 16px 18px;
  resize: vertical;
}

.consultation-form__input::placeholder,
.consultation-form__textarea::placeholder {
  color: #9aa3b2;
}

.consultation-form__input:focus,
.consultation-form__select:focus,
.consultation-form__textarea:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
}

.consultation-form__agree-list {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.consultation-form__agree {
  padding: 18px 20px;
  border-radius: 18px;
  background: #f8fbff;
  border: 1px solid #e1ebfb;
}

.consultation-form__agree--sub {
  background: #fbfcfe;
  border-color: #e8edf5;
}

.consultation-form__agree-label {
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  color: #374151;
  line-height: 1.6;
  cursor: pointer;
}

.consultation-form__agree-text {
  display: inline;
}

.consultation-form__checkbox {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: #2563eb;
  flex: 0 0 auto;
}

.consultation-form__privacy-link {
  margin-left: 6px;
  color: #2563eb;
  font-weight: 700;
  text-decoration: underline;
}

.consultation-form__actions {
  margin-top: 26px;
}

.consultation-form__submit {
  width: 100%;
  height: 60px;
  border: 0;
  border-radius: 18px;
  background: linear-gradient(135deg, #0d57c6 0%, #1f6fe8 100%);
  color: #fff;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    opacity 0.18s ease,
    background-color 0.18s ease;
  box-shadow: 0 14px 30px rgba(13, 87, 198, 0.22);
}

.consultation-form__submit:hover {
  transform: translateY(-2px);
}

.consultation-form__submit:disabled,
.consultation-form__submit--loading {
  cursor: not-allowed;
  opacity: 0.92;
  transform: none;
}

.consultation-form__submit-content {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.consultation-form__submit-spinner {
  width: 20px;
  height: 20px;
  animation: consultation-spin 0.9s linear infinite;
}

@keyframes consultation-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.consultation-form__helper {
  margin: 12px 0 0;
  text-align: center;
  font-size: 13px;
  line-height: 1.5;
  color: #7b8494;
}

.consultation-form__error {
  font-size: 14px;
  color: #dc2626;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .consultation-form__intro {
    margin-bottom: 18px;
    padding: 18px 16px;
    border-radius: 18px;
  }

  .consultation-form__intro-title {
    font-size: 18px;
  }

  .consultation-form__intro-desc {
    font-size: 14px;
  }

  .consultation-form__section {
    padding: 18px 16px;
    border-radius: 20px;
  }

  .consultation-form__section + .consultation-form__section {
    margin-top: 14px;
  }

  .consultation-form__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .consultation-form__field--half,
  .consultation-form__field--full {
    grid-column: auto;
  }

  .consultation-form__label {
    font-size: 14px;
  }

  .consultation-form__input,
  .consultation-form__select {
    height: 54px;
    font-size: 15px;
    border-radius: 16px;
  }

  .consultation-form__input {
    padding: 0 16px;
  }

  .consultation-form__select {
    padding: 0 46px 0 16px;
  }

  .consultation-form__select-icon {
    right: 16px;
    width: 17px;
    height: 17px;
  }

  .consultation-form__textarea {
    min-height: 140px;
    padding: 14px 16px;
    font-size: 15px;
    border-radius: 16px;
  }

  .consultation-form__field-help {
    font-size: 12px;
  }

  .consultation-form__agree-list {
    margin-top: 18px;
    gap: 10px;
  }

  .consultation-form__agree {
    padding: 16px;
    border-radius: 16px;
  }

  .consultation-form__agree-label {
    font-size: 14px;
  }

  .consultation-form__submit {
    height: 56px;
    font-size: 17px;
    border-radius: 16px;
  }

  .consultation-form__helper {
    font-size: 12px;
  }
}
</style>
