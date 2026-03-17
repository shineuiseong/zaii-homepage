<script setup lang="ts">
import UroliftCasesSection from '../urolift/UroliftCasesSection.vue'
import UroliftIntroSection from '../urolift/UroliftIntroSection.vue'
import UroliftProcedureSection from '../urolift/UroliftProcedureSection.vue'
import UroliftProcessSection from '../urolift/UroliftProcessSection.vue'
</script>

<template>
  <section id="prostate-treatment" class="prostate-treatment section">
    <div class="container">
      <div class="prostate-treatment__head">
        <p class="prostate-treatment__eyebrow">ZAII UROLOGY HOSPITAL</p>
        <h2 class="prostate-treatment__title">전립선비대증 비수술적 치료방법</h2>
        <p class="prostate-treatment__subtitle">유로리프트(전립선결찰술)</p>
      </div>

      <UroliftIntroSection />
      <UroliftProcessSection />
      <UroliftProcedureSection />
      <UroliftCasesSection />
    </div>
  </section>
</template>

<style scoped lang="scss">
.prostate-treatment {
  background: #efeff1;
  padding: 100px 0;
}

.prostate-treatment__head {
  text-align: center;
  margin-bottom: 40px;
}

.prostate-treatment__eyebrow {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.28em;
  color: #9a9ca3;
}

.prostate-treatment__title {
  margin: 0;
  font-size: 56px;
  line-height: 1.18;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #111827;
  word-break: keep-all;
}

.prostate-treatment__subtitle {
  margin: 22px 0 0;
  font-size: 34px;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #5ca1e6;
  word-break: keep-all;
}

.prostate-treatment__study {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;
}

.prostate-treatment__study-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #b8bcc8;
  transform: translateY(-50%);
}

.prostate-treatment__study-label {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 520px;
  min-height: 78px;
  padding: 0 34px;
  border: 6px solid #e4e4e6;
  background: #808798;
  color: #ffffff;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  text-align: center;
  word-break: keep-all;
}

.prostate-treatment__image-wrap {
  border: 1px solid #8f8f93;
  background: #ffffff;
  overflow: hidden;
}

.prostate-treatment__image {
  display: block;
  width: 100%;
  height: auto;
}

/* desktop-down */
@include desktop-down {
  .prostate-treatment {
    padding: 84px 0;
  }

  .prostate-treatment__head {
    margin-bottom: 34px;
  }

  .prostate-treatment__title {
    font-size: 46px;
  }

  .prostate-treatment__subtitle {
    margin-top: 18px;
    font-size: 30px;
  }

  .prostate-treatment__study-label {
    min-width: 450px;
    min-height: 68px;
    padding: 0 28px;
    border-width: 5px;
    font-size: 21px;
  }
}

/* laptop-down */
@include laptop-down {
  .prostate-treatment {
    padding: 72px 0;
  }

  .prostate-treatment__head {
    margin-bottom: 28px;
  }

  .prostate-treatment__title {
    font-size: 36px;
  }

  .prostate-treatment__subtitle {
    margin-top: 16px;
    font-size: 25px;
  }

  .prostate-treatment__study {
    margin-bottom: 24px;
  }

  .prostate-treatment__study-label {
    min-width: 340px;
    min-height: 58px;
    padding: 0 22px;
    border-width: 4px;
    font-size: 18px;
  }
}

/* mobile */
@include mobile {
  .prostate-treatment {
    padding: 52px 0;
  }

  .prostate-treatment__head {
    margin-bottom: 22px;
  }

  .prostate-treatment__eyebrow {
    font-size: 10px;
    letter-spacing: 0.22em;
  }

  .prostate-treatment__title {
    font-size: 28px;
    line-height: 1.25;
  }

  .prostate-treatment__subtitle {
    margin-top: 14px;
    font-size: 20px;
    line-height: 1.35;
  }

  .prostate-treatment__study {
    margin-bottom: 18px;
  }

  .prostate-treatment__study-label {
    min-width: auto;
    width: calc(100% - 40px);
    min-height: 48px;
    padding: 0 16px;
    border-width: 3px;
    font-size: 15px;
  }
}
</style>
