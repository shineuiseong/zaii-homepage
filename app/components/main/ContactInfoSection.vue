<template>
  <section class="contact-section">
    <!-- =====================================================
         Map
    ====================================================== -->
    <div class="contact-map">
      <iframe
        title="자이비뇨의학과병원 위치"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2227205608992!2d127.01909511172164!3d37.50266487193854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca39016e59f8b%3A0xe1773d8de4266fb7!2z7J6Q7J2067mE64eo7J2Y7ZWZ6rO867OR7JuQ!5e0!3m2!1sko!2skr!4v1773293209805!5m2!1sko!2skr"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
      />

      <div class="map-shade" />

      <!-- =========================
           Map floating info
      ========================== -->
      <div class="map-location">
        <span class="map-location__icon">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </span>

        <div>
          <span>자이비뇨의학과병원</span>

          <strong> 서울특별시 서초구 서운로 220 </strong>
        </div>
      </div>
    </div>

    <!-- =====================================================
         Information
    ====================================================== -->
    <div class="contact-content">
      <div class="contact-inner">
        <!-- =========================
             Heading
        ========================== -->
        <header class="contact-heading">
          <span class="contact-heading__line" />

          <p class="contact-heading__eyebrow">진료 안내</p>

          <h2>
            문의 및
            <strong>진료예약</strong>
          </h2>

          <p class="contact-heading__description">
            진료 및 예약에 대해 궁금하신 사항은
            <br />
            대표번호 또는 온라인 상담을 이용해 주세요.
          </p>
        </header>

        <!-- =================================================
             Information list
        ================================================== -->
        <div class="contact-list">
          <!-- =========================
               Address
          ========================== -->
          <div class="contact-item">
            <div class="contact-item__icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                />
                <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5" />
              </svg>
            </div>

            <div class="contact-item__body">
              <span class="contact-item__label"> 주소 </span>

              <p class="contact-address">
                서울특별시 서초구 서운로 220
                <br />
                대지스포츠프라자 4층
              </p>
            </div>
          </div>

          <!-- =========================
               Reservation
          ========================== -->
          <div class="contact-item contact-item--phone">
            <div class="contact-item__icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7.3 3.5L9.6 7.6C9.9 8.1 9.8 8.8 9.3 9.2L7.8 10.5C8.9 12.8 11.2 15.1 13.5 16.2L14.8 14.7C15.2 14.2 15.9 14.1 16.4 14.4L20.5 16.7C21.1 17 21.4 17.7 21.2 18.3C20.7 20 19.1 21 17.3 21C9.4 21 3 14.6 3 6.7C3 4.9 4 3.3 5.7 2.8C6.3 2.6 7 2.9 7.3 3.5Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="contact-item__body">
              <span class="contact-item__label"> 문의 및 진료예약 </span>

              <div class="contact-phones">
                <a href="tel:0262075678"> 02-6207-5678 </a>

                <a href="tel:01026386034"> 010-2638-6034 </a>
              </div>

              <span class="contact-phone__notice"> 번호를 누르시면 바로 전화 연결됩니다. </span>
            </div>
          </div>

          <!-- =========================
               Schedule
          ========================== -->
          <div class="contact-item">
            <div class="contact-item__icon">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5" />
                <path
                  d="M12 7V12L15.5 14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div class="contact-item__body">
              <span class="contact-item__label"> 진료시간 </span>

              <div class="schedule">
                <div class="schedule-row">
                  <span>월 ~ 금</span>

                  <strong> 09:00 — 18:00 </strong>

                  <small> 17:30 접수마감 </small>
                </div>

                <div class="schedule-row">
                  <span>토요일</span>

                  <strong> 09:00 — 18:00 </strong>

                  <small> 17:30 접수마감 </small>
                </div>
              </div>

              <div class="schedule-notice">
                <span> 매월 세 번째 주 토요일 진료 </span>

                <span> 일요일 · 공휴일 휴진 </span>
              </div>
            </div>
          </div>
        </div>

        <!-- =================================================
             CTA
        ================================================== -->
        <div class="contact-actions">
          <NuxtLink to="/consultation" class="contact-action">
            <span> 온라인 상담 신청 </span>

            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>

          <a href="tel:0262075678" class="contact-action contact-action--secondary">
            <span> 전화로 진료예약 </span>

            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- =====================================================
           Decorative watermark
      ====================================================== -->
      <span class="contact-watermark" aria-hidden="true"> ZAI </span>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* =========================================================
   Section
========================================================= */

.contact-section {
  position: relative;

  width: 100%;
  min-height: 820px;

  display: grid;

  grid-template-columns:
    minmax(0, 1.04fr)
    minmax(580px, 0.96fr);

  overflow: hidden;

  background: #0d223b;

  color: #ffffff;
}

/* =========================================================
   Map
========================================================= */

.contact-map {
  position: relative;

  min-width: 0;
  min-height: 820px;

  overflow: hidden;

  background: #e7e9ea;
}

.contact-map iframe {
  position: absolute;

  inset: -2px;

  width: calc(100% + 4px);
  height: calc(100% + 4px);

  border: 0;

  filter: saturate(0.72) contrast(0.94);

  transition: filter 0.5s ease;
}

.contact-map:hover iframe {
  filter: saturate(0.95) contrast(0.98);
}

/* =========================================================
   Map shade
========================================================= */

.map-shade {
  position: absolute;

  z-index: 1;

  inset: 0;

  pointer-events: none;

  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 72%, rgba(13, 34, 59, 0.08) 100%);
}

/* =========================================================
   Map location
========================================================= */

.map-location {
  position: absolute;

  z-index: 3;

  left: clamp(28px, 4vw, 72px);
  bottom: 48px;

  display: flex;

  align-items: center;

  gap: 16px;

  padding: 18px 23px 18px 18px;

  background: rgba(255, 255, 255, 0.95);

  box-shadow: 0 16px 45px rgba(13, 34, 59, 0.16);

  backdrop-filter: blur(12px);

  color: #17283b;
}

.map-location__icon {
  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  background: #1f5f9c;

  color: #ffffff;
}

.map-location__icon svg {
  width: 21px;
  height: 21px;
}

.map-location div {
  display: flex;

  flex-direction: column;

  gap: 5px;
}

.map-location div span {
  color: #75808b;

  font-size: 12px;

  font-weight: 450;

  letter-spacing: -0.02em;
}

.map-location div strong {
  color: #17283b;

  font-size: 15px;

  font-weight: 600;

  letter-spacing: -0.035em;

  word-break: keep-all;
}

/* =========================================================
   Content
========================================================= */

.contact-content {
  position: relative;

  min-width: 0;

  display: flex;

  align-items: center;

  overflow: hidden;

  background:
    radial-gradient(circle at 85% 15%, rgba(55, 119, 179, 0.12), rgba(55, 119, 179, 0) 32%), #0d223b;
}

.contact-inner {
  position: relative;

  z-index: 3;

  width: 100%;
  max-width: 760px;

  padding: 78px clamp(48px, 5.5vw, 105px);
}

/* =========================================================
   Heading
========================================================= */

.contact-heading {
  position: relative;

  padding-bottom: 34px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.contact-heading__line {
  display: block;

  width: 34px;
  height: 2px;

  margin-bottom: 22px;

  background: #4d94d1;
}

.contact-heading__eyebrow {
  margin: 0 0 12px;

  color: #6fa7d8;

  font-size: 12px;

  font-weight: 500;

  letter-spacing: 0.16em;
}

.contact-heading h2 {
  margin: 0;

  color: #ffffff;

  font-size: clamp(38px, 3.2vw, 56px);

  font-weight: 300;

  line-height: 1.15;

  letter-spacing: -0.055em;
}

.contact-heading h2 strong {
  font-weight: 650;
}

.contact-heading__description {
  margin: 20px 0 0;

  color: rgba(255, 255, 255, 0.53);

  font-size: 14px;

  font-weight: 300;

  line-height: 1.75;

  letter-spacing: -0.02em;

  word-break: keep-all;
}

/* =========================================================
   Contact list
========================================================= */

.contact-list {
  width: 100%;
}

.contact-item {
  position: relative;

  display: grid;

  grid-template-columns:
    44px
    minmax(0, 1fr);

  gap: 19px;

  padding: 27px 0;

  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

/* =========================================================
   Icon
========================================================= */

.contact-item__icon {
  width: 36px;
  height: 36px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: rgba(123, 174, 219, 0.86);
}

.contact-item__icon svg {
  width: 25px;
  height: 25px;
}

/* =========================================================
   Body
========================================================= */

.contact-item__body {
  min-width: 0;
}

.contact-item__label {
  display: block;

  margin-bottom: 10px;

  color: rgba(255, 255, 255, 0.55);

  font-size: 12px;

  font-weight: 450;

  letter-spacing: -0.015em;
}

/* =========================================================
   Address
========================================================= */

.contact-address {
  margin: 0;

  color: rgba(255, 255, 255, 0.93);

  font-size: 17px;

  font-weight: 450;

  line-height: 1.55;

  letter-spacing: -0.035em;

  word-break: keep-all;
}

/* =========================================================
   Phones
========================================================= */

.contact-phones {
  display: flex;

  align-items: baseline;

  flex-wrap: wrap;

  column-gap: 24px;
  row-gap: 6px;
}

.contact-phones a {
  position: relative;

  color: #ffffff;

  font-size: clamp(25px, 2vw, 34px);

  font-weight: 550;

  line-height: 1.1;

  letter-spacing: -0.035em;

  font-variant-numeric: tabular-nums;

  text-decoration: none;

  transition: color 0.25s ease;
}

.contact-phones a + a::before {
  content: '';

  position: absolute;

  top: 50%;
  left: -13px;

  width: 1px;
  height: 22px;

  transform: translateY(-50%);

  background: rgba(255, 255, 255, 0.18);
}

.contact-phones a:hover {
  color: #7eb6e4;
}

.contact-phone__notice {
  display: block;

  margin-top: 9px;

  color: rgba(255, 255, 255, 0.36);

  font-size: 11px;

  font-weight: 300;
}

/* =========================================================
   Schedule
========================================================= */

.schedule {
  display: flex;

  flex-direction: column;

  gap: 8px;
}

.schedule-row {
  display: grid;

  grid-template-columns:
    74px
    150px
    minmax(0, 1fr);

  align-items: baseline;

  gap: 13px;
}

.schedule-row > span {
  color: rgba(255, 255, 255, 0.58);

  font-size: 14px;

  font-weight: 400;
}

.schedule-row strong {
  color: #ffffff;

  font-size: 17px;

  font-weight: 550;

  letter-spacing: -0.02em;

  font-variant-numeric: tabular-nums;
}

.schedule-row small {
  color: rgba(255, 255, 255, 0.4);

  font-size: 11px;

  font-weight: 300;
}

.schedule-notice {
  margin-top: 13px;

  display: flex;

  flex-wrap: wrap;

  gap: 7px 17px;

  color: rgba(255, 255, 255, 0.43);

  font-size: 11px;

  font-weight: 300;
}

.schedule-notice span {
  position: relative;

  padding-left: 10px;
}

.schedule-notice span::before {
  content: '';

  position: absolute;

  top: 50%;
  left: 0;

  width: 3px;
  height: 3px;

  transform: translateY(-50%);

  border-radius: 50%;

  background: #5d9dd2;
}

/* =========================================================
   Actions
========================================================= */

.contact-actions {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  margin-top: 32px;

  border: 1px solid rgba(255, 255, 255, 0.18);
}

.contact-action {
  position: relative;

  min-height: 62px;

  padding: 0 22px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 18px;

  background: #ffffff;

  color: #142a43;

  font-size: 14px;

  font-weight: 550;

  letter-spacing: -0.025em;

  text-decoration: none;

  transition:
    background 0.3s ease,
    color 0.3s ease;
}

.contact-action + .contact-action {
  border-left: 1px solid rgba(255, 255, 255, 0.18);
}

.contact-action svg {
  width: 18px;
  height: 18px;

  flex-shrink: 0;

  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.contact-action:hover svg {
  transform: translateX(5px);
}

.contact-action--secondary {
  background: rgba(255, 255, 255, 0.055);

  color: #ffffff;
}

.contact-action--secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

.contact-action:not(.contact-action--secondary):hover {
  background: #edf5fb;
}

/* =========================================================
   Watermark
========================================================= */

.contact-watermark {
  position: absolute;

  z-index: 1;

  right: -35px;
  bottom: -48px;

  color: rgba(255, 255, 255, 0.018);

  font-size: clamp(170px, 15vw, 300px);

  font-weight: 700;

  line-height: 0.8;

  letter-spacing: -0.09em;

  pointer-events: none;

  user-select: none;
}

/* =========================================================
   Desktop
========================================================= */

@media (max-width: 1450px) {
  .contact-section {
    grid-template-columns:
      minmax(0, 1fr)
      minmax(540px, 0.92fr);
  }

  .contact-inner {
    padding-left: 55px;
    padding-right: 55px;
  }

  .contact-phones a {
    font-size: 27px;
  }
}

/* =========================================================
   Laptop
========================================================= */

@media (max-width: 1180px) {
  .contact-section {
    min-height: 760px;

    grid-template-columns:
      minmax(0, 0.9fr)
      minmax(500px, 1fr);
  }

  .contact-map {
    min-height: 760px;
  }

  .contact-inner {
    padding: 60px 40px;
  }

  .contact-heading h2 {
    font-size: 42px;
  }

  .contact-heading__description br {
    display: none;
  }

  .contact-phones {
    flex-direction: column;

    align-items: flex-start;

    gap: 6px;
  }

  .contact-phones a + a::before {
    display: none;
  }

  .schedule-row {
    grid-template-columns:
      66px
      142px
      1fr;
  }

  .map-location {
    left: 25px;
    bottom: 30px;
  }
}

/* =========================================================
   Tablet
========================================================= */

@media (max-width: 900px) {
  .contact-section {
    display: flex;

    flex-direction: column;

    min-height: 0;
  }

  .contact-content {
    order: 1;
  }

  .contact-map {
    order: 2;

    min-height: 460px;
  }

  .contact-inner {
    max-width: none;

    padding: 72px 42px;
  }

  .contact-heading {
    max-width: 620px;
  }

  .contact-list {
    max-width: 720px;
  }

  .contact-actions {
    max-width: 720px;
  }
}

/* =========================================================
   Mobile
========================================================= */

@media (max-width: 767px) {
  .contact-content {
    background:
      radial-gradient(circle at 90% 5%, rgba(55, 119, 179, 0.12), rgba(55, 119, 179, 0) 30%),
      #0d223b;
  }

  .contact-inner {
    padding: 66px 21px 58px;
  }

  /* =========================
     Heading
  ========================== */

  .contact-heading {
    padding-bottom: 28px;
  }

  .contact-heading__line {
    width: 28px;
    height: 2px;

    margin-bottom: 18px;
  }

  .contact-heading__eyebrow {
    margin-bottom: 10px;

    font-size: 11px;
  }

  .contact-heading h2 {
    font-size: 35px;

    line-height: 1.2;
  }

  .contact-heading__description {
    margin-top: 16px;

    font-size: 13px;
  }

  .contact-heading__description br {
    display: none;
  }

  /* =========================
     Items
  ========================== */

  .contact-item {
    grid-template-columns:
      35px
      minmax(0, 1fr);

    gap: 12px;

    padding: 24px 0;
  }

  .contact-item__icon {
    width: 30px;
    height: 30px;
  }

  .contact-item__icon svg {
    width: 21px;
    height: 21px;
  }

  .contact-item__label {
    margin-bottom: 9px;

    font-size: 11px;
  }

  .contact-address {
    font-size: 15px;
  }

  /* =========================
     Phone
  ========================== */

  .contact-phones {
    gap: 6px;
  }

  .contact-phones a {
    font-size: 25px;
  }

  /* =========================
     Schedule
  ========================== */

  .schedule {
    gap: 11px;
  }

  .schedule-row {
    grid-template-columns:
      62px
      minmax(0, 1fr);

    gap: 8px;
  }

  .schedule-row > span {
    font-size: 13px;
  }

  .schedule-row strong {
    font-size: 15px;
  }

  .schedule-row small {
    grid-column: 2;

    margin-top: -5px;

    font-size: 10px;
  }

  .schedule-notice {
    flex-direction: column;

    gap: 5px;

    margin-top: 14px;
  }

  /* =========================
     Actions
  ========================== */

  .contact-actions {
    grid-template-columns: 1fr;

    margin-top: 26px;
  }

  .contact-action {
    min-height: 58px;

    padding: 0 18px;

    font-size: 13px;
  }

  .contact-action + .contact-action {
    border-left: 0;

    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }

  /* =========================
     Map
  ========================== */

  .contact-map {
    min-height: 400px;
  }

  .map-location {
    left: 18px;
    right: 18px;
    bottom: 20px;

    padding: 14px 17px 14px 14px;
  }

  .map-location__icon {
    width: 38px;
    height: 38px;
  }

  .map-location div strong {
    font-size: 13px;
  }

  .contact-watermark {
    right: -20px;
    bottom: 0;

    font-size: 150px;
  }
}

/* =========================================================
   Small Mobile
========================================================= */

@media (max-width: 390px) {
  .contact-inner {
    padding-left: 18px;
    padding-right: 18px;
  }

  .contact-heading h2 {
    font-size: 32px;
  }

  .contact-phones a {
    font-size: 23px;
  }

  .contact-map {
    min-height: 370px;
  }
}
</style>
