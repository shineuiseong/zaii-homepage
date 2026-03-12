<template>
  <div class="policy-page">
    <section class="policy-hero section">
      <div class="container policy-hero__inner">
        <p class="policy-hero__eyebrow">TERMS OF SERVICE</p>
        <h1 class="policy-hero__title">이용약관</h1>
        <p class="policy-hero__desc">
          본 약관은 자이비뇨의학과병원(이하 ‘병원’)이 홈페이지를 통해 제공하는 온라인 상담, 예약
          문의, 비급여 안내 등 관련 서비스의 이용 조건과 절차, 병원과 이용자의 권리 및 의무에 관한
          사항을 규정함을 목적으로 합니다.
        </p>
        <p class="policy-hero__effective">시행일자 : 2018년 01월 01일</p>
      </div>
    </section>

    <section class="policy-content section">
      <div class="container">
        <div class="policy-layout">
          <aside class="policy-toc">
            <div class="policy-toc__box">
              <p class="policy-toc__title">목차</p>
              <a
                v-for="item in tocItems"
                :key="item.id"
                :href="`#${item.id}`"
                class="policy-toc__link"
              >
                {{ item.label }}
              </a>
            </div>
          </aside>

          <div class="policy-body">
            <section id="section-1" class="policy-section">
              <h2>제1조 (목적)</h2>
              <p>
                본 약관은 자이비뇨의학과병원(이하 ‘병원’)이 홈페이지를 통해 제공하는 서비스의 이용과
                관련하여 병원과 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section id="section-2" class="policy-section">
              <h2>제2조 (정의)</h2>
              <ul class="policy-list">
                <li>
                  ‘이용자’란 병원의 홈페이지에 접속하여 본 약관에 따라 병원이 제공하는 서비스를
                  이용하는 자를 말합니다.
                </li>
                <li>
                  ‘서비스’란 병원이 홈페이지를 통해 제공하는 온라인 상담, 예약 문의, 비급여 안내,
                  병원 소개 및 기타 관련 정보를 말합니다.
                </li>
              </ul>
            </section>

            <section id="section-3" class="policy-section">
              <h2>제3조 (약관의 효력 및 변경)</h2>
              <p>
                본 약관은 홈페이지에 게시함으로써 효력이 발생합니다. 병원은 필요한 경우 관련 법령을
                위반하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 홈페이지에 공지한
                날로부터 효력이 발생합니다.
              </p>
              <p>
                이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수 있으며, 변경 공지
                이후에도 서비스를 계속 이용할 경우 변경된 약관에 동의한 것으로 봅니다.
              </p>
            </section>

            <section id="section-4" class="policy-section">
              <h2>제4조 (서비스의 내용)</h2>
              <p>병원은 홈페이지를 통해 다음과 같은 서비스를 제공할 수 있습니다.</p>
              <ul class="policy-list">
                <li>병원 소개 및 의료진, 진료과목, 시술 정보 안내</li>
                <li>온라인 상담 및 예약 문의 접수</li>
                <li>비급여 진료비 안내, 개인정보처리방침, 이용약관 등 고지</li>
                <li>기타 병원이 정하는 서비스</li>
              </ul>
            </section>

            <section id="section-5" class="policy-section">
              <h2>제5조 (서비스 이용)</h2>
              <p>
                이용자는 병원이 정한 절차에 따라 상담, 예약 문의 및 기타 서비스를 이용할 수
                있습니다. 이용자는 서비스 이용 시 사실에 부합하는 정확한 정보를 제공하여야 하며,
                허위 또는 타인의 정보를 제공하여 발생하는 문제에 대한 책임은 이용자에게 있습니다.
              </p>
            </section>

            <section id="section-6" class="policy-section">
              <h2>제6조 (이용자의 의무)</h2>
              <p>이용자는 서비스 이용과 관련하여 다음 각 호의 행위를 하여서는 안 됩니다.</p>
              <ul class="policy-list">
                <li>타인의 개인정보를 도용하거나 허위 정보를 입력하는 행위</li>
                <li>병원 또는 제3자의 명예를 훼손하거나 권리를 침해하는 행위</li>
                <li>공공질서 및 미풍양속에 반하는 내용을 게시하거나 전달하는 행위</li>
                <li>병원의 홈페이지 운영을 방해하거나 보안을 침해하는 행위</li>
                <li>기타 관련 법령에 위반되는 행위</li>
              </ul>
            </section>

            <section id="section-7" class="policy-section">
              <h2>제7조 (상담 및 예약 문의에 대한 유의사항)</h2>
              <p>
                홈페이지를 통한 상담 및 예약 문의는 편의를 위한 서비스이며, 실제 진료 예약의 확정은
                병원의 별도 확인 절차를 거쳐야 할 수 있습니다.
              </p>
              <p>
                또한 홈페이지 상담 내용은 일반적인 안내를 위한 것으로, 환자의 상태에 따라 실제 진료
                및 치료 계획은 달라질 수 있습니다. 정확한 진단과 치료는 의료진의 대면 진료를 통해
                결정됩니다.
              </p>
            </section>

            <section id="section-8" class="policy-section">
              <h2>제8조 (서비스 제공의 변경 및 중단)</h2>
              <p>
                병원은 다음 각 호의 사유가 발생한 경우 서비스의 전부 또는 일부를 변경하거나 중단할
                수 있습니다.
              </p>
              <ul class="policy-list">
                <li>시스템 점검, 유지보수, 교체 또는 장애 발생</li>
                <li>통신 장애, 정전, 천재지변 등 불가항력적 사유</li>
                <li>병원의 운영상 필요에 따른 서비스 개편 또는 종료</li>
              </ul>
              <p>
                병원은 서비스 변경 또는 중단이 필요한 경우 가능한 범위 내에서 사전에 공지하도록
                노력합니다.
              </p>
            </section>

            <section id="section-9" class="policy-section">
              <h2>제9조 (저작권)</h2>
              <p>
                홈페이지에 게시된 모든 콘텐츠(문서, 이미지, 로고, 디자인, 텍스트 등)에 대한 저작권은
                병원 또는 정당한 권리자에게 있습니다.
              </p>
              <p>
                이용자는 병원의 사전 서면 동의 없이 이를 복제, 배포, 전송, 전시, 출판, 수정 또는
                상업적으로 이용할 수 없습니다.
              </p>
            </section>

            <section id="section-10" class="policy-section">
              <h2>제10조 (면책조항)</h2>
              <ul class="policy-list">
                <li>
                  병원은 천재지변, 통신망 장애, 시스템 점검 등 불가피한 사유로 인한 서비스 제공
                  장애에 대하여 책임을 지지 않습니다.
                </li>
                <li>
                  병원은 이용자가 홈페이지를 통해 제공받은 일반 정보만으로 기대한 결과를 얻지 못한
                  데 대해 책임을 지지 않습니다.
                </li>
                <li>
                  병원은 이용자가 입력한 정보의 오류, 누락 등으로 인해 발생하는 불이익에 대하여
                  책임을 지지 않습니다.
                </li>
                <li>
                  병원은 홈페이지에 연결된 외부 사이트의 내용, 정확성, 운영에 관하여 책임을 지지
                  않습니다.
                </li>
              </ul>
            </section>

            <section id="section-11" class="policy-section">
              <h2>제11조 (준거법 및 관할법원)</h2>
              <p>
                본 약관은 대한민국 법령에 따라 해석 및 적용됩니다. 서비스 이용과 관련하여 병원과
                이용자 사이에 분쟁이 발생할 경우 병원의 소재지를 관할하는 법원을 전속 관할법원으로
                합니다.
              </p>
            </section>

            <section id="section-12" class="policy-section">
              <h2>부칙</h2>
              <p>본 약관은 2018년 01월 01일부터 시행합니다.</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const tocItems = [
  { id: 'section-1', label: '제1조 목적' },
  { id: 'section-2', label: '제2조 정의' },
  { id: 'section-3', label: '제3조 약관의 효력 및 변경' },
  { id: 'section-4', label: '제4조 서비스의 내용' },
  { id: 'section-5', label: '제5조 서비스 이용' },
  { id: 'section-6', label: '제6조 이용자의 의무' },
  { id: 'section-7', label: '제7조 상담 및 예약 문의 유의사항' },
  { id: 'section-8', label: '제8조 서비스 변경 및 중단' },
  { id: 'section-9', label: '제9조 저작권' },
  { id: 'section-10', label: '제10조 면책조항' },
  { id: 'section-11', label: '제11조 준거법 및 관할법원' },
  { id: 'section-12', label: '부칙' }
]
</script>

<style scoped lang="scss">
.policy-page {
  background: #fff;
}

.policy-hero {
  padding-bottom: 24px;
}

.policy-hero__inner {
  text-align: center;
}

.policy-hero__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $text-muted;
}

.policy-hero__title {
  margin: 0;
  font-size: 46px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
}

.policy-hero__desc {
  max-width: 980px;
  margin: 18px auto 0;
  font-size: 17px;
  line-height: 1.8;
  color: $text-sub;
  word-break: keep-all;
}

.policy-hero__effective {
  margin: 20px 0 0;
  font-size: 15px;
  font-weight: 700;
  color: $color-primary;
}

.policy-content {
  padding-top: 0;
}

.policy-layout {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 32px;
  align-items: start;
}

.policy-toc {
  position: sticky;
  top: 120px;
}

.policy-toc__box {
  padding: 24px 20px;
  border: 1px solid #e5edf7;
  border-radius: 18px;
  background: #f8fbff;
}

.policy-toc__title {
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 800;
  color: $text-main;
}

.policy-toc__link {
  display: block;
  padding: 9px 0;
  font-size: 15px;
  color: $text-sub;
  transition: color 0.2s ease;

  &:hover {
    color: $color-primary;
  }
}

.policy-body {
  min-width: 0;
}

.policy-section + .policy-section {
  margin-top: 44px;
}

.policy-section h2 {
  margin: 0 0 16px;
  font-size: 30px;
  line-height: 1.3;
  font-weight: 800;
  color: $text-main;
}

.policy-section p {
  margin: 0;
  font-size: 17px;
  line-height: 1.85;
  color: $text-sub;
  word-break: keep-all;
}

.policy-section p + p {
  margin-top: 12px;
}

.policy-list {
  margin: 14px 0 0;
  padding-left: 20px;
}

.policy-list li {
  font-size: 17px;
  line-height: 1.85;
  color: $text-sub;
  word-break: keep-all;
}

@include desktop-down {
  .policy-hero__title {
    font-size: 40px;
  }

  .policy-layout {
    grid-template-columns: 240px minmax(0, 1fr);
    gap: 28px;
  }

  .policy-section h2 {
    font-size: 27px;
  }
}

@include laptop-down {
  .policy-hero__title {
    font-size: 34px;
  }

  .policy-hero__desc {
    font-size: 16px;
  }

  .policy-layout {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .policy-toc {
    position: static;
  }

  .policy-section + .policy-section {
    margin-top: 36px;
  }

  .policy-section h2 {
    font-size: 24px;
  }

  .policy-section p,
  .policy-list li {
    font-size: 16px;
  }
}

@include mobile {
  .policy-hero__eyebrow {
    font-size: 12px;
    letter-spacing: 0.16em;
  }

  .policy-hero__title {
    font-size: 28px;
  }

  .policy-hero__desc {
    margin-top: 14px;
    font-size: 15px;
    line-height: 1.75;
    text-align: left;
  }

  .policy-hero__effective {
    font-size: 14px;
  }

  .policy-toc__box {
    padding: 20px 16px;
    border-radius: 14px;
  }

  .policy-toc__title {
    font-size: 16px;
  }

  .policy-toc__link {
    font-size: 14px;
  }

  .policy-section + .policy-section {
    margin-top: 30px;
  }

  .policy-section h2 {
    font-size: 22px;
    margin-bottom: 12px;
  }

  .policy-section p,
  .policy-list li {
    font-size: 15px;
    line-height: 1.75;
  }
}
</style>
