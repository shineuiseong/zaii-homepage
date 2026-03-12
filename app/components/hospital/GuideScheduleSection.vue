<template>
  <section class="guide-schedule section">
    <div class="container">
      <div class="guide-schedule__head">
        <p class="guide-schedule__eyebrow">SCHEDULE</p>
        <h2 class="guide-schedule__title">진료시간 안내</h2>
      </div>

      <div class="guide-schedule__table-wrap">
        <table class="guide-schedule__table">
          <thead>
            <tr>
              <th>구분</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>평일 오전</td>
              <td>AM 09:00 ~ PM 12:00 <span>(11시 30분 마감)</span></td>
            </tr>
            <tr>
              <td>평일 오후</td>
              <td>PM 01:00 ~ PM 06:00 <span>(5시 30분 마감)</span></td>
            </tr>
            <tr>
              <td>토요일 <small>(매달 셋째 주)</small></td>
              <td>AM 09:00 ~ PM 06:00 <span>(5시 30분 마감)</span></td>
            </tr>
            <tr>
              <td>점심시간</td>
              <td>PM 12:00 ~ PM 01:00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="guide-schedule__notice">
        <p>일요일 / 공휴일은 휴진합니다.</p>
        <p>원활한 진료를 위해 예약제를 실시하고 있습니다. 당일 방문이라도 예약을 부탁드립니다.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.guide-schedule {
  background: #fff;
}

.guide-schedule__head {
  text-align: center;
  margin-bottom: 30px;
}

.guide-schedule__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $text-muted;
}

.guide-schedule__title {
  margin: 0;
  font-size: 42px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
}

.guide-schedule__table-wrap {
  max-width: 1300px;
  margin: 0 auto;
  border-top: 4px solid #2f2f31;
  border-bottom: 4px solid #2f2f31;
  overflow: hidden;
}

.guide-schedule__table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.guide-schedule__table thead th {
  background: #f0f4f8;
  font-size: 20px;
  font-weight: 700;
  color: $text-main;
}

.guide-schedule__table th,
.guide-schedule__table td {
  padding: 34px 24px;
  border-bottom: 1px solid rgba(17, 24, 39, 0.16);
  text-align: center;
  vertical-align: middle;
}

.guide-schedule__table thead th:first-child,
.guide-schedule__table tbody td:first-child {
  width: 45%;
  border-right: 1px solid rgba(17, 24, 39, 0.16);
}

.guide-schedule__table tbody tr:last-child td {
  border-bottom: 0;
}

.guide-schedule__table tbody td {
  font-size: 22px;
  line-height: 1.7;
  color: $text-main;
  word-break: keep-all;
}

.guide-schedule__table td span,
.guide-schedule__table td small {
  color: $text-sub;
  font-size: 0.9em;
}

.guide-schedule__notice {
  margin-top: 26px;
  text-align: center;

  p {
    margin: 0;
    font-size: 18px;
    line-height: 1.8;
    color: $text-sub;
    word-break: keep-all;
  }

  p + p {
    margin-top: 4px;
  }
}

@include desktop-down {
  .guide-schedule__title {
    font-size: 36px;
  }

  .guide-schedule__table thead th,
  .guide-schedule__table tbody td {
    font-size: 18px;
  }
}

@include laptop-down {
  .guide-schedule__title {
    font-size: 30px;
  }

  .guide-schedule__table th,
  .guide-schedule__table td {
    padding: 24px 16px;
  }

  .guide-schedule__table thead th,
  .guide-schedule__table tbody td {
    font-size: 16px;
  }

  .guide-schedule__notice p {
    font-size: 15px;
  }
}

@include mobile {
  .guide-schedule__title {
    font-size: 26px;
  }

  .guide-schedule__table {
    table-layout: auto;
  }

  .guide-schedule__table th,
  .guide-schedule__table td {
    padding: 18px 10px;
  }

  .guide-schedule__table thead th,
  .guide-schedule__table tbody td {
    font-size: 14px;
    line-height: 1.6;
  }

  .guide-schedule__notice {
    margin-top: 18px;

    p {
      font-size: 14px;
      line-height: 1.7;
    }
  }
}
</style>
