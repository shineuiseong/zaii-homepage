<template>
  <div class="policy-page">
    <section class="policy-hero section">
      <div class="container policy-hero__inner">
        <p class="policy-hero__eyebrow">PRIVACY POLICY</p>
        <h1 class="policy-hero__title">개인정보처리방침</h1>
        <p class="policy-hero__desc">
          자이비뇨의학과병원(이하 ‘병원’)은 개인정보보호법 제30조에 따라 정보주체의 개인정보를
          보호하고 이와 관련한 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이
          개인정보처리방침을 수립·공개합니다.
        </p>
        <p class="policy-hero__desc">
          병원은 관련 법령에 따라 개인정보를 적법하게 수집·이용하고 안전하게 관리하며,
          개인정보처리방침 변경 시 홈페이지를 통해 공지합니다.
        </p>
        <p class="policy-hero__effective">시행일자 : 2026년 03월 18일</p>
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
              <h2>1. 수집하는 개인정보 항목 및 수집 방법</h2>
              <p>
                병원은 진료, 상담, 예약, 문의 응대 등 서비스 제공을 위하여 필요한 최소한의
                개인정보를 수집합니다.
              </p>
              <p>
                온라인상담 등 홈페이지 이용 과정에서 입력되는 상담내용에는 증상, 병력, 검사 관련
                정보 등 건강에 관한 내용이 포함될 수 있으며, 이는 관계 법령상 민감정보에 해당할 수
                있습니다. 병원은 해당 정보를 상담 목적 범위 내에서만 최소한으로 처리합니다.
              </p>

              <h3>가. 온라인 상담 / 예약 / 문의 시</h3>
              <p>
                병원은 홈페이지의 온라인상담, 예약문의, 비용문의 등 이용 과정에서 다음 정보를 수집할
                수 있습니다.
              </p>
              <p class="policy-note-inline">
                ※ 필수항목 : 이름, 연락처<br />
                ※ 선택항목 : 나이, 실비보험 유무, 지역, 상담내용, 예약희망일시
              </p>

              <div class="policy-table-wrap">
                <table class="policy-table">
                  <colgroup>
                    <col style="width: 28%" />
                    <col style="width: 42%" />
                    <col style="width: 30%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>수집 항목</th>
                      <th>수집 방법</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>온라인 상담 / 예약</td>
                      <td>
                        이름, 연락처, 나이(선택), 실비보험 유무(선택), 지역(선택), 상담내용(선택),
                        예약희망일시(선택)
                      </td>
                      <td>홈페이지 입력폼</td>
                    </tr>
                    <tr>
                      <td>비용문의 / 일반문의</td>
                      <td>이름, 연락처, 문의내용</td>
                      <td>홈페이지 입력폼, 전화, 카카오톡 등</td>
                    </tr>
                    <tr>
                      <td>자동 수집 정보</td>
                      <td>접속 로그, 쿠키, 접속 IP, 브라우저 정보</td>
                      <td>웹사이트 이용 과정에서 자동 생성</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>나. 진료 시</h3>
              <p>
                병원은 의료법 등 관계 법령에 따라 진료를 위하여 성명, 주소, 연락처, 주민등록번호,
                진료기록, 병력, 가족력, 검사결과 등 진료에 필요한 개인정보 및 민감정보를 수집할 수
                있습니다.
              </p>

              <h3>다. 진료비 수납 시</h3>
              <p>
                병원은 진료비 결제 및 수납 처리 과정에서 카드사명, 카드번호 일부, 승인정보 등 결제에
                필요한 정보를 처리할 수 있습니다.
              </p>

              <h3>라. 수집 방법</h3>
              <p>
                홈페이지, 서면양식, 전화, 팩스, 이메일, 카카오톡 상담, 내원 접수 및 진료 과정 등을
                통해 개인정보를 수집할 수 있습니다.
              </p>
            </section>

            <section id="section-2" class="policy-section">
              <h2>2. 개인정보의 수집 및 이용 목적</h2>
              <p>병원은 수집한 개인정보를 다음 목적을 위해 이용합니다.</p>
              <ul class="policy-list">
                <li>진료, 검사, 예약 조회 및 본인 확인</li>
                <li>진단 및 치료 서비스 제공</li>
                <li>진료비 청구, 수납, 환급 등 원무 서비스 처리</li>
                <li>진료 관련 고지사항 전달 및 민원, 고충 처리</li>
                <li>온라인 상담 답변 및 예약 문의 응대</li>
                <li>의료법 등 관계 법령에 따른 기록 보존 및 행정 대응</li>
                <li>웹사이트 이용 통계, 보안 관리, 서비스 개선</li>
              </ul>
            </section>

            <section id="section-3" class="policy-section">
              <h2>3. 개인정보의 제공 및 공유</h2>
              <p>
                병원은 정보주체의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 다음의
                경우에는 예외로 합니다.
              </p>
              <ul class="policy-list">
                <li>정보주체가 사전에 동의한 경우</li>
                <li>법령에 특별한 규정이 있거나 법적 절차에 따른 요청이 있는 경우</li>
                <li>
                  통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로
                  제공하는 경우
                </li>
              </ul>
            </section>

            <section id="section-4" class="policy-section">
              <h2>4. 개인정보의 보유 및 이용기간</h2>
              <p>
                병원은 개인정보의 수집 및 이용 목적이 달성되면 지체 없이 파기합니다. 다만 관계
                법령에 따라 일정 기간 보존이 필요한 경우에는 해당 법령에 따라 보존합니다.
              </p>

              <div class="policy-table-wrap">
                <table class="policy-table">
                  <colgroup>
                    <col style="width: 30%" />
                    <col style="width: 40%" />
                    <col style="width: 30%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>목적</th>
                      <th>항목</th>
                      <th>보유기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>온라인 상담 / 문의 응대</td>
                      <td>
                        이름, 연락처, 나이(선택), 실비보험 유무(선택), 지역(선택), 상담내용(선택)
                      </td>
                      <td>상담 완료 후 3개월 이내 파기</td>
                    </tr>
                    <tr>
                      <td>예약 관리</td>
                      <td>이름, 연락처, 예약희망정보</td>
                      <td>예약 처리 완료 후 3개월 이내 파기</td>
                    </tr>
                    <tr>
                      <td>진료 관련 기록</td>
                      <td>성명, 주소, 주민등록번호, 진료정보 등</td>
                      <td>의료법 등 관계 법령에 따른 보존기간</td>
                    </tr>
                    <tr>
                      <td>접속기록</td>
                      <td>접속 로그, IP 등</td>
                      <td>관련 법령에 따른 기간</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p class="policy-note">
                ※ 진료기록 등은 의료법 시행규칙 등 관계 법령에서 정한 기간 동안 보존될 수 있습니다.
              </p>
            </section>

            <section id="section-5" class="policy-section">
              <h2>5. 개인정보의 파기절차 및 파기방법</h2>
              <p>
                병원은 개인정보의 보유기간이 경과하거나 처리목적이 달성된 경우 해당 정보를 지체 없이
                파기합니다.
              </p>
              <ul class="policy-list">
                <li>전자적 파일 형태의 정보는 복구 또는 재생이 불가능한 방법으로 삭제합니다.</li>
                <li>종이에 출력된 개인정보는 분쇄 또는 소각 등의 방법으로 파기합니다.</li>
              </ul>
            </section>

            <section id="section-6" class="policy-section">
              <h2>6. 정보주체의 권리·의무 및 행사방법</h2>
              <p>
                정보주체는 병원에 대해 언제든지 개인정보 열람, 정정, 삭제, 처리정지 등을 요구할 수
                있습니다. 다만 법령에 따라 보존이 의무화된 정보는 요청이 있더라도 삭제 또는 정정이
                제한될 수 있습니다.
              </p>
              <p>
                관련 요청은 병원을 직접 방문하거나 개인정보관리책임자에게 연락하여 접수할 수 있으며,
                병원은 지체 없이 조치하겠습니다.
              </p>
            </section>

            <section id="section-7" class="policy-section">
              <h2>7. 쿠키 등 자동 수집 장치의 설치·운영 및 거부</h2>
              <p>
                병원 홈페이지는 이용자 편의 향상과 사이트 운영 분석을 위해 쿠키를 사용할 수
                있습니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
              </p>
              <ul class="policy-list">
                <li>쿠키는 웹사이트 방문 및 이용 형태를 분석하는 데 사용될 수 있습니다.</li>
                <li>브라우저 설정을 통해 쿠키 저장을 허용하거나 거부할 수 있습니다.</li>
                <li>쿠키 저장을 거부할 경우 일부 기능 이용에 제한이 있을 수 있습니다.</li>
              </ul>
            </section>

            <section id="section-8" class="policy-section">
              <h2>8. 영상정보처리기기 운영·관리</h2>
              <p>
                병원은 시설안전, 화재 및 범죄 예방, 환자와 직원의 안전을 위하여 영상정보처리기기를
                운영할 수 있습니다.
              </p>
              <ul class="policy-list">
                <li>설치 목적 : 환자 및 시설 안전, 범죄 예방</li>
                <li>설치 위치 : 로비, 복도, 상담실, 치료실, 회복실, 수술실 등</li>
                <li>촬영 시간 : 24시간</li>
                <li>보관 및 관리 : 관련 내부 기준 및 법령에 따라 안전하게 관리</li>
              </ul>
              <p>
                영상정보 열람 등 요청은 관계 법령이 허용하는 범위 내에서 처리되며, 보관기간 경과 시
                복원 불가능한 방법으로 파기합니다.
              </p>
            </section>

            <section id="section-9" class="policy-section">
              <h2>9. 개인정보의 안전성 확보 조치</h2>
              <p>병원은 개인정보의 안전성 확보를 위해 다음과 같은 조치를 시행합니다.</p>
              <ul class="policy-list">
                <li>개인정보 취급 직원 최소화 및 정기 교육</li>
                <li>내부관리계획 수립 및 시행</li>
                <li>접근권한 관리 및 접근 통제</li>
                <li>개인정보 저장 및 전송 시 암호화 적용</li>
                <li>보안프로그램 설치 및 주기적 점검</li>
                <li>개인정보 보관 장소에 대한 물리적 출입 통제</li>
              </ul>
            </section>

            <section id="section-10" class="policy-section">
              <h2>10. 개인정보관리책임자</h2>
              <p>
                병원은 개인정보 처리와 관련한 업무를 총괄하여 책임지고, 개인정보 관련 불만처리 및
                피해구제 등을 위하여 아래와 같이 개인정보관리책임자를 지정하고 있습니다.
              </p>

              <div class="policy-contact-box">
                <p><strong>개인정보관리책임자</strong> : 변재상</p>
                <p><strong>전화번호</strong> : 02-6207-5678</p>
                <p><strong>이메일</strong> : privacy@zaiiuro.com</p>
                <p><strong>주소</strong> : 서울특별시 서초구 서운로 220 4층</p>
              </div>
            </section>

            <section id="section-11" class="policy-section">
              <h2>11. 권익침해 구제방법</h2>
              <p>
                정보주체는 개인정보 침해와 관련하여 아래 기관에 상담 또는 신고를 문의할 수 있습니다.
              </p>
              <ul class="policy-list">
                <li>개인정보분쟁조정위원회</li>
                <li>개인정보침해신고센터</li>
                <li>대검찰청 사이버수사 관련 부서</li>
                <li>경찰청 사이버범죄 신고 시스템</li>
              </ul>
            </section>

            <section id="section-12" class="policy-section">
              <h2>12. 고지의 의무</h2>
              <p>
                본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 병원은 홈페이지를 통해
                변경사항을 공지합니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const tocItems = [
  { id: 'section-1', label: '1. 수집 항목 및 방법' },
  { id: 'section-2', label: '2. 수집 및 이용 목적' },
  { id: 'section-3', label: '3. 제공 및 공유' },
  { id: 'section-4', label: '4. 보유 및 이용기간' },
  { id: 'section-5', label: '5. 파기절차 및 방법' },
  { id: 'section-6', label: '6. 권리 및 행사방법' },
  { id: 'section-7', label: '7. 쿠키 운영 및 거부' },
  { id: 'section-8', label: '8. 영상정보처리기기' },
  { id: 'section-9', label: '9. 안전성 확보 조치' },
  { id: 'section-10', label: '10. 개인정보관리책임자' },
  { id: 'section-11', label: '11. 권익침해 구제방법' },
  { id: 'section-12', label: '12. 고지의 의무' }
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

.policy-section h3 {
  margin: 20px 0 10px;
  font-size: 20px;
  line-height: 1.4;
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

.policy-note {
  margin-top: 12px !important;
  font-size: 15px !important;
  color: $text-muted !important;
}

.policy-note-inline {
  margin-top: 12px !important;
  font-size: 15px !important;
  color: $text-muted !important;
}

.policy-table-wrap {
  margin-top: 18px;
  overflow: hidden;
  border: 1px solid #dbe5f0;
  border-radius: 16px;
}

.policy-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.policy-table thead tr {
  background: #f5f9ff;
}

.policy-table th,
.policy-table td {
  padding: 18px 16px;
  border-bottom: 1px solid #e7edf5;
  border-right: 1px solid #e7edf5;
  font-size: 16px;
  line-height: 1.7;
  vertical-align: top;
  word-break: keep-all;
}

.policy-table th:last-child,
.policy-table td:last-child {
  border-right: 0;
}

.policy-table tbody tr:last-child td {
  border-bottom: 0;
}

.policy-table th {
  font-weight: 800;
  color: $text-main;
}

.policy-table td {
  color: $text-sub;
}

.policy-contact-box {
  margin-top: 18px;
  padding: 22px 20px;
  border-radius: 16px;
  background: #f8fbff;
  border: 1px solid #e5edf7;
}

.policy-contact-box p + p {
  margin-top: 8px;
}

.policy-contact-box strong {
  color: $text-main;
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

  .policy-section h3 {
    font-size: 18px;
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

  .policy-section h3 {
    font-size: 17px;
  }

  .policy-section p,
  .policy-list li {
    font-size: 15px;
    line-height: 1.75;
  }

  .policy-table-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 12px;
  }

  .policy-table {
    min-width: 760px;
  }

  .policy-table th,
  .policy-table td {
    padding: 14px 12px;
    font-size: 14px;
  }

  .policy-contact-box {
    padding: 18px 16px;
    border-radius: 12px;
  }
}
</style>
