<template>
  <section class="location-transport">
    <div class="container">
      <!-- 자가용 -->
      <div class="transport-row">
        <div class="transport-left">
          <div class="transport-icon">
            <Icon name="lucide:car" size="36" />
          </div>
          <h3>자가용 이용시</h3>
        </div>

        <div class="transport-divider"></div>

        <div class="transport-right">건물 주차 가능</div>
      </div>

      <!-- 지하철 -->
      <div class="transport-row">
        <div class="transport-left">
          <div class="transport-icon">
            <Icon name="lucide:train" size="36" />
          </div>
          <h3>지하철 이용시</h3>
        </div>

        <div class="transport-divider"></div>

        <div class="transport-right">
          <div class="transport-line">
            <span class="badge line9">9호선</span>
            <span class="badge sinbundang">신분당선</span>
            신논현역 9번 출구
          </div>

          <div class="transport-line">
            <span class="badge line7">7호선</span>
            논현역 4번출구
          </div>
        </div>
      </div>

      <!-- 버스 -->
      <div class="transport-row">
        <div class="transport-left">
          <div class="transport-icon">
            <Icon name="lucide:bus" size="36" />
          </div>
          <h3>버스 이용시</h3>
        </div>

        <div class="transport-divider"></div>

        <div class="transport-right">
          <div class="transport-line">
            <span class="badge express">광역버스</span>
            M4403, M4434, M4448, M4449, M5422, M5438, 9711
          </div>

          <div class="transport-line">
            <span class="badge city">간선버스</span>
            640, 643, 146, 664, 421
          </div>

          <div class="transport-line">
            <span class="badge local">지선버스</span>
            3422, 4312, 8541 (맞춤버스)(공휴일 제외)
          </div>
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
  align-items: center;
  padding: 40px 0;
  border-bottom: 1px solid #e5e5e5;
}

.transport-left {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 260px;

  h3 {
    font-size: 22px;
    font-weight: 700;
  }
}

.transport-icon {
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
  width: 1px;
  height: 60px;
  background: #ddd;
  margin: 0 40px;
}

.transport-right {
  flex: 1;
  font-size: 18px;
  line-height: 1.8;
}

.transport-line {
  margin-bottom: 12px;
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  margin-right: 10px;
}

.line9 {
  background: #b28c39;
}
.sinbundang {
  background: #9c2e2e;
}
.line7 {
  background: #6f7f28;
}

.express {
  background: #d85b4c;
}
.city {
  background: #4f6cd6;
}
.local {
  background: #56a85e;
}

@include mobile {
  .transport-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .transport-divider {
    display: none;
  }

  .transport-left {
    width: auto;
  }
}
</style>
