<template>
  <section class="location-transport">
    <div class="container">
      <!-- 자가용 -->
      <div class="transport-row">
        <div class="transport-left">
          <div class="transport-icon">
            <Icon name="lucide:car" size="36" />
          </div>
          <h3>자가용 이용 시</h3>
        </div>

        <div class="transport-divider" aria-hidden="true"></div>

        <div class="transport-right">
          <p><strong>서울특별시 서초구 서운로 220</strong></p>
          <p>대지스포츠프라자 4층 · 건물 주차 가능</p>
        </div>
      </div>

      <!-- 지하철 -->
      <div class="transport-row">
        <div class="transport-left">
          <div class="transport-icon">
            <Icon name="lucide:train" size="36" />
          </div>
          <h3>지하철 이용 시</h3>
        </div>

        <div class="transport-divider" aria-hidden="true"></div>

        <div class="transport-right">
          <div class="subway-heading">
            <span class="badge sinbundang">신분당선</span>
            <span>또는</span>
            <span class="badge line9">9호선</span>
            <strong>신논현역 9번 출구</strong>
          </div>

          <div class="walking-guide">
            <h4>9번 출구에서 병원까지, 이렇게 오세요</h4>
            <ol class="walking-steps">
              <li><strong>9번 출구의 오른쪽 계단</strong>으로 올라오세요.</li>
              <li>
                큰길을 따라 쭉 내려오시면 <strong>왼쪽에 GS칼텍스 주유소</strong>가 보입니다.
                주유소를 지나 계속 걸어오세요.
              </li>
              <li>
                조금 더 내려오면 <strong>왼쪽에 현대오일뱅크 주유소</strong>가 보입니다.
                <strong>주유소를 끼고 왼쪽으로 돌아 서운로로 들어오세요.</strong>
              </li>
              <li>
                조금만 걸어오시면 <strong>서운로 220, 대지스포츠프라자</strong>가 보입니다.
                <strong>4층 자이비뇨의학과병원</strong>으로 올라오세요.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <!-- 정류장과 운행 방향: 서울대중교통(bus.go.kr), 2026-10-29 확인.
           8541번은 이 구간 새벽 운행으로 진료 방문 안내에서 제외. -->
      <div class="transport-row">
        <div class="transport-left">
          <div class="transport-icon">
            <Icon name="lucide:bus" size="36" />
          </div>
          <h3>버스 이용 시</h3>
        </div>

        <div class="transport-divider" aria-hidden="true"></div>

        <div class="transport-right">
          <p class="bus-intro">
            이용하시는 버스 번호와 방면을 확인하고, 아래 정류장에서 내려 주세요.
          </p>

          <div class="bus-stops">
            <article class="bus-stop">
              <h4>KCC사옥 하차 <span class="stop-number">정류장 번호 22162</span></h4>
              <p class="stop-direction">신논현역·강남역 방면</p>
              <div class="transport-line">
                <span class="badge express">광역버스</span>
                <span>M4403, M4434, M4448, M4449, M5422, M5438</span>
              </div>
              <div class="transport-line">
                <span class="badge city">간선버스</span>
                <span>643</span>
              </div>
              <p class="stop-walk">
                내리신 뒤 <strong>신논현역 방향</strong>으로 걸어오세요.
                <strong>현대오일뱅크 주유소를 끼고 오른쪽으로 돌아 서운로로 들어오세요.</strong>
                조금만 걸으시면 병원이 보입니다.
              </p>
            </article>

            <article class="bus-stop">
              <h4>제일약품사옥 하차 <span class="stop-number">정류장 번호 22194</span></h4>
              <p class="stop-direction">고속터미널 방면 · 신논현역 쪽에서 오실 때</p>
              <div class="transport-line">
                <span class="badge city">간선버스</span>
                <span>640(신월동 방면), 643(양천차고지 방면)</span>
              </div>
              <p class="stop-walk">
                가까운 <strong>횡단보도로 현대오일뱅크 주유소가 있는 쪽으로 건너오세요.</strong>
                주유소 옆 서운로로 들어와 조금만 걸으시면 병원이 보입니다.
              </p>
            </article>

            <article class="bus-stop">
              <h4>
                신논현역7번출구.교보타워사거리 하차
                <span class="stop-number">정류장 번호 22172</span>
              </h4>
              <p class="stop-direction">강남역 쪽으로 진행하는 정류장</p>
              <div class="transport-line">
                <span class="badge express">광역버스</span>
                <span>9711(양재역 방면)</span>
              </div>
              <div class="transport-line">
                <span class="badge city">간선버스</span>
                <span>146(상계주공7단지 방면)</span>
              </div>
              <div class="transport-line">
                <span class="badge local">지선버스</span>
                <span>4312(개포동 방면)</span>
              </div>
              <p class="stop-walk">
                <strong>교보타워를 지나 신논현역 9번 출구 쪽</strong>으로 이동하세요. 위의 지하철
                도보 안내처럼 <strong>GS칼텍스 주유소를 지나</strong> 걸어오신 뒤,
                <strong>현대오일뱅크 주유소를 끼고 왼쪽으로 돌아</strong> 오시면 됩니다.
              </p>
            </article>
          </div>

          <p class="transport-note">
            <a href="https://bus.go.kr/" target="_blank" rel="noopener noreferrer">
              서울시 버스 노선·정류장 확인
              <Icon name="lucide:external-link" size="16" />
            </a>
          </p>
          <p class="arrival-info">
            <strong>도착지: 서운로 220, 대지스포츠프라자 4층</strong>
            길을 찾기 어려우시면 <a href="tel:0262075678">02-6207-5678</a>로 전화 주세요.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.location-transport {
  border-top: 2px solid #222;
  margin-top: 60px;
}

.transport-row {
  display: flex;
  align-items: flex-start;
  padding: 40px 0;
  border-bottom: 1px solid #e5e5e5;
}

.transport-left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 0 0 260px;

  h3 {
    font-size: 22px;
    font-weight: 700;
  }
}

.transport-icon {
  flex: 0 0 70px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #7c88a8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.transport-divider {
  flex: 0 0 1px;
  align-self: stretch;
  min-height: 60px;
  background: #ddd;
  margin: 0 40px;
}

.transport-right {
  flex: 1;
  min-width: 0;
  font-size: 18px;
  line-height: 1.8;
  color: #333;
  word-break: keep-all;
  overflow-wrap: anywhere;

  h4 {
    font-size: 20px;
    font-weight: 700;
    color: #222;
  }
}

.subway-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  strong {
    font-size: 22px;
  }
}

.walking-guide {
  margin-top: 20px;
  padding: 24px;
  background: #f5f7fa;
  border-radius: 8px;
}

.walking-steps {
  list-style: decimal;
  padding-left: 1.5em;
  margin-top: 14px;

  li {
    padding-left: 4px;

    & + li {
      margin-top: 14px;
    }

    &::marker {
      font-weight: 700;
      color: #455777;
    }
  }
}

.bus-intro {
  margin-bottom: 20px;
}

.bus-stops {
  display: grid;
  gap: 20px;
}

.bus-stop {
  padding: 24px;
  border: 1px solid #dde2e9;
  border-radius: 8px;
}

.stop-number {
  display: block;
  font-size: 16px;
  font-weight: 400;
  color: #555;
}

.stop-direction {
  margin: 8px 0 16px;
  font-weight: 600;
  color: #455777;
}

.transport-line {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 10px;
}

.badge {
  display: inline-block;
  flex-shrink: 0;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  color: white;
}

.line9 {
  background: #886b2d;
}

.sinbundang {
  background: #9c2e2e;
}

.express {
  background: #b53e32;
}

.city {
  background: #405aba;
}

.local {
  background: #327b3b;
}

.stop-walk {
  border-top: 1px solid #e5e5e5;
  padding-top: 16px;
  margin-top: 16px;
}

.transport-note {
  margin-top: 20px;
  font-size: 16px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 44px;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}

.arrival-info {
  margin-top: 16px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 8px;

  strong {
    display: block;
    margin-bottom: 6px;
  }

  a {
    display: inline-block;
    min-height: 44px;
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}

// 좁은 PC·태블릿 화면에서 고정 빠른 메뉴가 길안내를 가리지 않도록 여백 확보.
@media (min-width: 768px) and (max-width: 1440px) {
  .location-transport > .container {
    padding-right: 124px;
  }
}

@include laptop-down {
  .transport-left {
    flex-basis: 220px;
    gap: 14px;
  }

  .transport-divider {
    margin: 0 24px;
  }
}

@include mobile {
  .transport-row {
    flex-direction: column;
    gap: 20px;
    padding: 28px 0;
  }

  .transport-divider {
    display: none;
  }

  .transport-left {
    flex-basis: auto;
  }

  .transport-right {
    width: 100%;
  }

  .walking-guide,
  .bus-stop,
  .arrival-info {
    padding: 20px 16px;
  }

  .transport-line {
    flex-wrap: wrap;
    gap: 6px 10px;
  }
}
</style>
