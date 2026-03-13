<template>
  <section class="contact-info section">
    <div class="container">
      <div class="contact-info__grid">
        <div class="contact-info__content">
          <div class="contact-info__group">
            <p class="contact-info__eyebrow">CONTACT</p>
            <h2 class="contact-info__title">문의 및 예약 안내</h2>
          </div>

          <div class="contact-info__list">
            <div class="contact-row">
              <div class="contact-row__label">대표번호</div>

              <div class="contact-row__value">
                <div class="contact-row__phones">
                  <a href="tel:0262075678" class="contact-phone-card">
                    <div class="contact-phone-card__main">
                      <span class="contact-phone-card__number">02-6207-5678</span>
                      <span class="contact-phone-card__badge">전화연결</span>
                    </div>
                  </a>

                  <a href="tel:01026386034" class="contact-phone-card">
                    <div class="contact-phone-card__main">
                      <span class="contact-phone-card__number">010-2638-6034</span>
                      <span class="contact-phone-card__badge">전화연결</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div class="contact-row">
              <div class="contact-row__label">온라인상담</div>
              <div class="contact-row__value">
                <a href="/consultation" class="contact-row__link">온라인상담 신청하기</a>
              </div>
            </div>

            <div class="contact-row contact-row--schedule">
              <div class="contact-row__label">진료시간</div>
              <div class="contact-row__value">
                <ul class="schedule-list">
                  <li>
                    <span class="schedule-list__day">월~금</span>
                    <span class="schedule-list__time">09:00 ~ 18:00 (17:30 마감)</span>
                  </li>
                  <li>
                    <span class="schedule-list__day">토요일</span>
                    <span class="schedule-list__time">09:00 ~ 18:00 (17:30 마감)</span>
                  </li>
                  <li class="schedule-list__notice">(매달 세번째주 토요일 진료)</li>
                  <li class="schedule-list__notice">(일요일, 공휴일 휴진)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-info__map">
          <div class="contact-info__map-frame">
            <iframe
              title="자이비뇨의학과 위치"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2227205608992!2d127.01909511172164!3d37.50266487193854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca39016e59f8b%3A0xe1773d8de4266fb7!2z7J6Q7J2067mE64eo7J2Y7ZWZ6rO867OR7JuQ!5e0!3m2!1sko!2skr!4v1773293209805!5m2!1sko!2skr"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            />
          </div>

          <div class="contact-info__address">
            <p class="contact-info__address-label">오시는 길</p>
            <p class="contact-info__address-text">서울특별시 서초구 서운로 220 4층</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-info {
  background: #222326;
  color: #ffffff;
}

.contact-info__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.88fr);
  gap: 40px;
  align-items: start;
}

.contact-info__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-info__group {
  margin-bottom: 28px;
}

.contact-info__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.48);
}

.contact-info__title {
  margin: 0;
  font-size: 34px;
  line-height: 1.2;
  font-weight: 800;
  color: #ffffff;
  word-break: keep-all;
}

.contact-info__list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-row {
  display: grid;
  grid-template-columns: 140px minmax(0, 1fr);
  gap: 18px;
  align-items: baseline;
}

.contact-row__label {
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
  word-break: keep-all;
}

.contact-row__value {
  min-width: 0;
}

.contact-row__phones {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-phone-card {
  display: block;
  padding: 16px 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.contact-phone-card:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

.contact-phone-card__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.contact-phone-card__number {
  font-size: 30px;
  font-weight: 900;
  line-height: 1.1;
  color: #ffffff;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}

.contact-phone-card__badge {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.86);
  font-size: 13px;
  font-weight: 800;
  line-height: 1;
}

.contact-row__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  height: 50px;
  padding: 0 20px;
  border-radius: 12px;
  background: #ffffff;
  color: #111827;
  font-size: 16px;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.contact-row__link:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
  background: #f7f7f7;
}

.schedule-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.schedule-list li {
  display: flex;
  align-items: baseline;
  gap: 16px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.86);
}

.schedule-list__day {
  width: 96px;
  flex: 0 0 96px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.68);
}

.schedule-list__time {
  font-size: 18px;
  font-weight: 800;
  color: #ffffff;
  font-variant-numeric: tabular-nums;
}

.schedule-list__notice {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.58);
}

.contact-info__map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 28px;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
}

.contact-info__map-frame {
  overflow: hidden;
  border-radius: 16px;
  background: #2e3137;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.18);
  height: 320px;
}

.contact-info__map-frame iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.contact-info__address {
  margin-top: 16px;
}

.contact-info__address-label {
  margin: 0 0 6px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.56);
}

.contact-info__address-text {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
  word-break: keep-all;
  line-height: 1.5;
}

@include desktop-down {
  .contact-info__grid {
    gap: 32px;
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.82fr);
  }

  .contact-info__title {
    font-size: 30px;
  }

  .contact-phone-card__number {
    font-size: 27px;
  }

  .schedule-list__time {
    font-size: 17px;
  }

  .contact-info__map-frame {
    height: 300px;
  }
}

@include laptop-down {
  .contact-info__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .contact-info__map {
    padding-left: 0;
    padding-top: 28px;
    border-left: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .contact-info__title {
    font-size: 28px;
  }

  .contact-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .contact-phone-card__number {
    font-size: 25px;
  }

  .contact-info__map-frame {
    height: 300px;
  }
}

@include mobile {
  .contact-info__group {
    margin-bottom: 22px;
  }

  .contact-info__eyebrow {
    font-size: 12px;
    letter-spacing: 0.14em;
  }

  .contact-info__title {
    font-size: 24px;
  }

  .contact-info__list {
    gap: 20px;
  }

  .contact-row__label {
    font-size: 15px;
  }

  .contact-phone-card {
    padding: 14px 14px;
    border-radius: 12px;
  }

  .contact-phone-card__main {
    gap: 10px;
    align-items: center;
  }

  .contact-phone-card__number {
    font-size: 20px;
  }

  .contact-phone-card__badge {
    min-height: 30px;
    padding: 0 10px;
    font-size: 11px;
  }

  .contact-row__link {
    width: 100%;
    min-width: 0;
    height: 48px;
    font-size: 15px;
  }

  .schedule-list li {
    gap: 10px;
    font-size: 15px;
  }

  .schedule-list__day {
    width: 84px;
    flex-basis: 84px;
  }

  .schedule-list__time {
    font-size: 16px;
  }

  .schedule-list__notice {
    font-size: 13px;
  }

  .contact-info__map-frame {
    height: 260px;
    border-radius: 14px;
  }

  .contact-info__address-text {
    font-size: 15px;
  }
}
</style>
