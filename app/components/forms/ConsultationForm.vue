<template>
  <form class="consultation-form" @submit.prevent="handleSubmit">
    <!-- =====================================================
         Intro
    ====================================================== -->
    <div class="consultation-form__intro">
      <div>
        <span class="consultation-form__intro-line" />

        <h3>
          상담 정보를
          <br />
          입력해 주세요.
        </h3>
      </div>

      <p>
        <strong>*</strong>
        표시는 필수 입력 항목입니다.
      </p>
    </div>

    <!-- =====================================================
         Fields
    ====================================================== -->
    <div class="consultation-form__fields">
      <!-- =========================
           Name
      ========================== -->
      <div class="consultation-form__field">
        <label class="consultation-form__label" for="name">
          성함

          <span>*</span>
        </label>

        <input
          id="name"
          v-model.trim="form.name"
          type="text"
          class="consultation-form__input"
          placeholder="성함을 입력해 주세요."
          autocomplete="name"
        />

        <p v-if="errors.name" class="consultation-form__error">
          {{ errors.name }}
        </p>
      </div>

      <!-- =========================
           Phone
      ========================== -->
      <div class="consultation-form__field">
        <label class="consultation-form__label" for="phone">
          연락처

          <span>*</span>
        </label>

        <input
          id="phone"
          :value="form.phone"
          type="tel"
          class="consultation-form__input"
          placeholder="010-1234-5678"
          inputmode="numeric"
          autocomplete="tel"
          @input="onPhoneInput"
        />

        <p v-if="errors.phone" class="consultation-form__error">
          {{ errors.phone }}
        </p>
      </div>

      <!-- =========================
           Content
      ========================== -->
      <div class="consultation-form__field consultation-form__field--full">
        <label class="consultation-form__label" for="content"> 상담내용 </label>

        <textarea
          id="content"
          v-model.trim="form.content"
          class="consultation-form__textarea"
          placeholder="증상이나 궁금한 점을 편하게 남겨주세요."
          rows="7"
        />

        <p class="consultation-form__help">
          상담내용은 선택사항이며 증상 및 건강정보가 포함될 수 있습니다.
        </p>
      </div>
    </div>

    <!-- =====================================================
         Agreement
    ====================================================== -->
    <div class="consultation-form__agreements">
      <div class="consultation-form__agreement">
        <label>
          <input v-model="form.agreePrivacy" type="checkbox" />

          <span>
            개인정보 수집 및 이용에 동의합니다.
            <strong>(필수)</strong>

            <NuxtLink to="/privacy"> 보기 </NuxtLink>
          </span>
        </label>

        <p v-if="errors.agreePrivacy" class="consultation-form__error">
          {{ errors.agreePrivacy }}
        </p>
      </div>

      <div class="consultation-form__agreement consultation-form__agreement--sub">
        <label>
          <input v-model="form.agreeSensitive" type="checkbox" />

          <span>
            상담내용에 건강정보가 포함될 수 있음을 이해하고 동의합니다.
            <strong>(선택)</strong>
          </span>
        </label>
      </div>
    </div>

    <!-- =====================================================
         Submit
    ====================================================== -->
    <div class="consultation-form__actions">
      <button type="submit" class="consultation-form__submit" :disabled="isSubmitting">
        <span>
          {{ isSubmitting ? '접수 중입니다...' : '상담 신청하기' }}
        </span>

        <Icon v-if="isSubmitting" name="lucide:loader-circle" class="consultation-form__spinner" />

        <svg v-else viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 12H19M13 6L19 12L13 18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <p>남겨주신 정보는 상담 목적 외에는 사용되지 않습니다.</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { toast } from 'vue-sonner'

type ConsultationFormValues = {
  name: string
  phone: string
  content: string
  agreePrivacy: boolean
  agreeSensitive: boolean
}

type ConsultationFormErrors = Partial<Record<keyof ConsultationFormValues, string>>

const form = reactive<ConsultationFormValues>({
  name: '',
  phone: '',
  content: '',
  agreePrivacy: false,
  agreeSensitive: false
})

const isSubmitting = ref(false)

const errors = reactive<ConsultationFormErrors>({})

/* =========================================================
   Phone
========================================================= */

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)

  if (digits.length <= 3) {
    return digits
  }

  if (digits.length <= 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`
  }

  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`
}

function onPhoneInput(event: Event) {
  const target = event.target as HTMLInputElement

  form.phone = formatPhone(target.value)
}

/* =========================================================
   Validation
========================================================= */

function resetErrors() {
  errors.name = ''

  errors.phone = ''

  errors.agreePrivacy = ''
}

function validate() {
  resetErrors()

  let valid = true

  if (!form.name) {
    errors.name = '성함을 입력해 주세요.'

    valid = false
  }

  const phoneDigits = form.phone.replace(/\D/g, '')

  if (!phoneDigits) {
    errors.phone = '연락처를 입력해 주세요.'

    valid = false
  } else if (phoneDigits.length < 10) {
    errors.phone = '연락처를 정확히 입력해 주세요.'

    valid = false
  }

  if (!form.agreePrivacy) {
    errors.agreePrivacy = '개인정보 수집 및 이용 동의가 필요합니다.'

    valid = false
  }

  if (!valid) {
    toast.error('입력한 내용을 다시 확인해 주세요.')
  }

  return valid
}

/* =========================================================
   Submit
========================================================= */

async function handleSubmit() {
  if (isSubmitting.value) {
    return
  }

  if (!validate()) {
    return
  }

  const payload = {
    name: form.name,

    phone: form.phone.replace(/\D/g, ''),

    content: form.content,

    agreePrivacy: form.agreePrivacy,

    agreeSensitive: form.agreeSensitive
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

    form.content = ''

    form.agreePrivacy = false

    form.agreeSensitive = false
  } catch (err: any) {
    console.error('consultation error:', err)

    const message =
      err?.data?.statusMessage ||
      err?.statusMessage ||
      '상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.'

    toast.error(message)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped lang="scss">
/* =========================================================
   Form
========================================================= */

.consultation-form {
  width: 100%;
}

/* =========================================================
   Intro
========================================================= */

.consultation-form__intro {
  margin-bottom: 38px;

  display: flex;

  align-items: flex-end;

  justify-content: space-between;

  gap: 30px;

  padding-bottom: 27px;

  border-bottom: 1px solid #dfe5eb;
}

.consultation-form__intro-line {
  display: block;

  width: 32px;
  height: 2px;

  margin-bottom: 18px;

  background: #2d73b4;
}

.consultation-form__intro h3 {
  margin: 0;

  color: #172334;

  font-size: 29px;

  font-weight: 450;

  line-height: 1.3;

  letter-spacing: -0.05em;
}

.consultation-form__intro > p {
  margin: 0 0 3px;

  color: #929ba5;

  font-size: 12px;

  line-height: 1.5;
}

.consultation-form__intro > p strong {
  color: #2d73b4;

  font-weight: 600;
}

/* =========================================================
   Fields
========================================================= */

.consultation-form__fields {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  column-gap: 22px;
  row-gap: 30px;
}

.consultation-form__field {
  min-width: 0;
}

.consultation-form__field--full {
  grid-column: 1 / -1;
}

/* =========================================================
   Label
========================================================= */

.consultation-form__label {
  display: block;

  margin-bottom: 11px;

  color: #25374a;

  font-size: 14px;

  font-weight: 550;

  letter-spacing: -0.025em;
}

.consultation-form__label span {
  margin-left: 3px;

  color: #3279b9;
}

/* =========================================================
   Inputs
========================================================= */

.consultation-form__input,
.consultation-form__textarea {
  width: 100%;

  border: 0;

  border-bottom: 1px solid #ccd4dc;

  border-radius: 0;

  outline: 0;

  background: transparent;

  color: #172334;

  font-size: 16px;

  font-weight: 400;

  transition: border-color 0.25s ease;
}

.consultation-form__input {
  height: 52px;

  padding: 0 2px;
}

.consultation-form__textarea {
  min-height: 155px;

  padding: 15px 2px;

  resize: vertical;

  line-height: 1.75;
}

.consultation-form__input::placeholder,
.consultation-form__textarea::placeholder {
  color: #a7afb8;
}

.consultation-form__input:focus,
.consultation-form__textarea:focus {
  border-color: #3379b8;
}

/* =========================================================
   Help
========================================================= */

.consultation-form__help {
  margin: 9px 0 0;

  color: #9aa3ad;

  font-size: 11px;

  font-weight: 300;

  line-height: 1.6;
}

/* =========================================================
   Error
========================================================= */

.consultation-form__error {
  margin: 7px 0 0;

  color: #c84747;

  font-size: 12px;

  line-height: 1.45;
}

/* =========================================================
   Agreements
========================================================= */

.consultation-form__agreements {
  margin-top: 35px;

  padding-top: 26px;

  border-top: 1px solid #e0e5ea;
}

.consultation-form__agreement + .consultation-form__agreement {
  margin-top: 13px;
}

.consultation-form__agreement label {
  display: flex;

  align-items: flex-start;

  gap: 10px;

  cursor: pointer;
}

.consultation-form__agreement input {
  width: 17px;
  height: 17px;

  margin: 2px 0 0;

  flex: 0 0 auto;

  accent-color: #286cae;
}

.consultation-form__agreement label > span {
  color: #66717d;

  font-size: 13px;

  font-weight: 350;

  line-height: 1.6;

  letter-spacing: -0.02em;
}

.consultation-form__agreement strong {
  color: #2d73b4;

  font-weight: 550;
}

.consultation-form__agreement--sub strong {
  color: #929ba4;
}

.consultation-form__agreement a {
  margin-left: 6px;

  color: #344d67;

  font-weight: 550;

  text-decoration: underline;

  text-underline-offset: 3px;
}

/* =========================================================
   Actions
========================================================= */

.consultation-form__actions {
  margin-top: 34px;
}

.consultation-form__submit {
  width: 100%;
  height: 64px;

  padding: 0 25px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  border: 0;

  background: #12375d;

  color: #ffffff;

  cursor: pointer;

  font-size: 15px;

  font-weight: 550;

  letter-spacing: -0.025em;

  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.consultation-form__submit:hover:not(:disabled) {
  background: #1c5284;
}

.consultation-form__submit:disabled {
  cursor: not-allowed;

  opacity: 0.7;
}

.consultation-form__submit svg {
  width: 20px;
  height: 20px;

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.consultation-form__submit:hover:not(:disabled) svg {
  transform: translateX(5px);
}

.consultation-form__spinner {
  width: 19px;
  height: 19px;

  animation: consultation-spin 0.8s linear infinite;
}

.consultation-form__actions > p {
  margin: 12px 0 0;

  color: #9aa3ad;

  text-align: center;

  font-size: 11px;

  font-weight: 300;

  line-height: 1.5;
}

@keyframes consultation-spin {
  to {
    transform: rotate(360deg);
  }
}

/* =========================================================
   Mobile
========================================================= */

@include mobile {
  .consultation-form__intro {
    margin-bottom: 30px;

    align-items: flex-start;

    flex-direction: column;

    gap: 14px;
  }

  .consultation-form__intro h3 {
    font-size: 25px;
  }

  .consultation-form__fields {
    grid-template-columns: 1fr;

    row-gap: 25px;
  }

  .consultation-form__field--full {
    grid-column: auto;
  }

  .consultation-form__input {
    height: 50px;

    font-size: 15px;
  }

  .consultation-form__textarea {
    min-height: 140px;

    font-size: 15px;
  }

  .consultation-form__agreement label > span {
    font-size: 12px;
  }

  .consultation-form__submit {
    height: 58px;

    font-size: 14px;
  }
}
</style>
