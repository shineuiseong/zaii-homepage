<template>
  <div class="non-benefit-page">
    <section class="non-benefit-hero section">
      <div class="container non-benefit-hero__inner">
        <p class="non-benefit-hero__eyebrow">NON-BENEFIT FEE GUIDE</p>
        <h1 class="non-benefit-hero__title">자이비뇨의학과 비급여 항목공지</h1>
        <p class="non-benefit-hero__desc">
          의료법 제 45조 제 1항 및 제 2항과 동법 시행규칙 제 42조의 제1항, 제2항, 제3항에 의하여
          비급여 진료비용을 고지합니다.
        </p>
        <p class="non-benefit-hero__desc">
          행위료는 단일 개별 항목의 비용으로 사용 갯수에 따라 달라질 수 있으며 치료재료대의 경우
          상황이나 상태에 따라 사용 개수가 달라질 수 있습니다. 이밖에도 치료재료 및 약제가 필요한
          경우 별도 산정됩니다.
        </p>
      </div>
    </section>

    <section class="non-benefit-table section">
      <div class="container">
        <div class="non-benefit-table__head">
          <h2 class="non-benefit-table__title">비급여 진료비 안내</h2>
          <p class="non-benefit-table__unit">(단위 : 원)</p>
        </div>

        <div v-for="section in feeSections" :key="section.title" class="fee-section">
          <div class="fee-section__title-wrap">
            <h3 class="fee-section__title">{{ section.title }}</h3>
          </div>

          <div class="fee-table-wrap">
            <table class="fee-table">
              <colgroup>
                <col class="fee-table__col-category" />
                <col class="fee-table__col-name" />
                <col class="fee-table__col-price" />
              </colgroup>
              <tbody>
                <template v-for="item in section.items" :key="`${section.title}-${item.group}`">
                  <tr
                    v-for="(row, rowIndex) in item.rows"
                    :key="`${section.title}-${item.group}-${row.name}-${rowIndex}`"
                  >
                    <th
                      v-if="rowIndex === 0"
                      :rowspan="item.rows.length"
                      scope="rowgroup"
                      class="fee-table__group"
                    >
                      {{ item.group }}
                    </th>

                    <td class="fee-table__name">
                      {{ row.name }}
                    </td>

                    <td class="fee-table__price">
                      {{ row.price }}
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type FeeRow = {
  name: string
  price: string
}

type FeeItemGroup = {
  group: string
  rows: FeeRow[]
}

type FeeSection = {
  title: string
  items: FeeItemGroup[]
}

const feeSections: FeeSection[] = [
  {
    title: '제증명수수료',
    items: [
      {
        group: '진단서',
        rows: [{ name: '진단서', price: '20,000' }]
      },
      {
        group: '입퇴원확인서',
        rows: [{ name: '입퇴원확인서', price: '3,000' }]
      },
      {
        group: '통원확인서',
        rows: [{ name: '통원확인서', price: '3,000' }]
      },
      {
        group: '소견서',
        rows: [{ name: '소견서', price: '30,000' }]
      },
      {
        group: '상세소견서(보험관련)',
        rows: [{ name: '상세소견서(보험관련)', price: '10,000' }]
      },
      {
        group: '소견서(보험사양식)',
        rows: [{ name: '소견서(보험사양식)', price: '500,000' }]
      },
      {
        group: '수술확인서',
        rows: [{ name: '수술확인서', price: '1,000' }]
      },
      {
        group: '영상복사',
        rows: [{ name: '영상복사', price: '20,000' }]
      },
      {
        group: '제증명사본1-5장',
        rows: [{ name: '제증명사본1-5장', price: '(장당) 1,000' }]
      },
      {
        group: '제증명사본6매이상',
        rows: [{ name: '제증명사본6매이상', price: '(장당) 100' }]
      },
      {
        group: '진단서재발행',
        rows: [{ name: '진단서재발행', price: '1,000' }]
      },
      {
        group: '진료확인서',
        rows: [{ name: '진료확인서', price: '3,000' }]
      },
      {
        group: '소견서재발행',
        rows: [{ name: '소견서재발행', price: '2,000' }]
      }
    ]
  },
  {
    title: '치료재료대',
    items: [
      {
        group: '압박용밴드',
        rows: [{ name: '압박용밴드', price: '50,000' }]
      },
      {
        group: 'Urorift system',
        rows: [{ name: 'Urorift system', price: '3,000,000' }]
      },
      {
        group: 'REZUM DELIVERY DEVICE',
        rows: [{ name: 'REZUM DELIVERY DEVICE', price: '8,000,000' }]
      }
    ]
  },
  {
    title: '처치 및 수술료',
    items: [
      {
        group: '이식형 결찰사를 이용한 전립선 결찰',
        rows: [{ name: '이식형 결찰사를 이용한 전립선 결찰', price: '3,000,000' }]
      },
      {
        group: '수증기를 이용한 경요도적 전립선 절제술',
        rows: [
          {
            name: '수증기를 이용한 경요도적 전립선 절제술',
            price: '5,000,000'
          }
        ]
      }
    ]
  },
  {
    title: '약제비',
    items: [
      {
        group: '네비도주사바이알',
        rows: [{ name: '네비도주사바이알', price: '500,000' }]
      },
      {
        group: '아르믹스주',
        rows: [{ name: '아르믹스주', price: '300,000' }]
      },
      {
        group: '파노펜주',
        rows: [{ name: '파노펜주', price: '500,000' }]
      },
      {
        group: '레드업주',
        rows: [{ name: '레드업주', price: '150,000' }]
      },
      {
        group: '인카인겔',
        rows: [{ name: '인카인겔', price: '70,000' }]
      }
    ]
  }
]
</script>

<style scoped lang="scss">
.non-benefit-page {
  background: #fff;
}

.non-benefit-hero {
  padding-bottom: 32px;
}

.non-benefit-hero__inner {
  text-align: center;
}

.non-benefit-hero__eyebrow {
  margin: 0 0 10px;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $text-muted;
}

.non-benefit-hero__title {
  margin: 0;
  font-size: 46px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
  word-break: keep-all;
}

.non-benefit-hero__desc {
  max-width: 980px;
  margin: 18px auto 0;
  font-size: 17px;
  line-height: 1.8;
  color: $text-sub;
  word-break: keep-all;
}

.non-benefit-table {
  padding-top: 0;
}

.non-benefit-table__head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
  padding-bottom: 14px;
  border-bottom: 2px solid rgba(15, 63, 120, 0.18);
}

.non-benefit-table__title {
  margin: 0;
  font-size: 34px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
}

.non-benefit-table__unit {
  margin: 0;
  font-size: 15px;
  color: $text-muted;
}

.fee-section + .fee-section {
  margin-top: 48px;
}

.fee-section__title-wrap {
  margin-bottom: 16px;
}

.fee-section__title {
  margin: 0;
  font-size: 30px;
  line-height: 1.2;
  font-weight: 800;
  color: $text-main;
}

.fee-table-wrap {
  overflow: hidden;
  border: 1px solid #d8e1ec;
  border-radius: 18px;
  background: #fff;
}

.fee-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.fee-table__col-category {
  width: 27%;
}

.fee-table__col-name {
  width: 43%;
}

.fee-table__col-price {
  width: 30%;
}

.fee-table tbody tr:not(:last-child) {
  border-bottom: 1px solid #e7edf5;
}

.fee-table th,
.fee-table td {
  padding: 22px 24px;
  font-size: 17px;
  line-height: 1.6;
  vertical-align: middle;
}

.fee-table__group {
  background: linear-gradient(180deg, #2f6fb8 0%, #24599a 100%);
  color: #ffffff;
  font-weight: 800;
  text-align: center;
  word-break: keep-all;
}

.fee-table__name {
  background: #f8fbff;
  color: $text-main;
  font-weight: 600;
  word-break: keep-all;
}

.fee-table__price {
  text-align: right;
  color: $text-main;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  word-break: keep-all;
}

@include desktop-down {
  .non-benefit-hero__title {
    font-size: 40px;
  }

  .non-benefit-table__title {
    font-size: 30px;
  }

  .fee-section__title {
    font-size: 26px;
  }

  .fee-table th,
  .fee-table td {
    padding: 20px;
    font-size: 16px;
  }
}

@include laptop-down {
  .non-benefit-hero__title {
    font-size: 34px;
  }

  .non-benefit-hero__desc {
    font-size: 16px;
  }

  .non-benefit-table__head {
    flex-direction: column;
    align-items: start;
    margin-bottom: 22px;
  }

  .non-benefit-table__title {
    font-size: 28px;
  }

  .fee-section + .fee-section {
    margin-top: 40px;
  }

  .fee-section__title {
    font-size: 24px;
  }

  .fee-table__col-category {
    width: 30%;
  }

  .fee-table__col-name {
    width: 38%;
  }

  .fee-table__col-price {
    width: 32%;
  }

  .fee-table th,
  .fee-table td {
    padding: 18px 16px;
    font-size: 15px;
  }
}

@include mobile {
  .non-benefit-hero__eyebrow {
    font-size: 12px;
    letter-spacing: 0.16em;
  }

  .non-benefit-hero__title {
    font-size: 28px;
  }

  .non-benefit-hero__desc {
    margin-top: 14px;
    font-size: 15px;
    line-height: 1.7;
    text-align: left;
  }

  .non-benefit-table__title {
    font-size: 24px;
  }

  .non-benefit-table__unit {
    font-size: 14px;
  }

  .fee-section + .fee-section {
    margin-top: 32px;
  }

  .fee-section__title {
    font-size: 22px;
  }

  .fee-table-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 14px;
  }

  .fee-table {
    min-width: 760px;
  }

  .fee-table th,
  .fee-table td {
    padding: 16px 14px;
    font-size: 14px;
  }
}
</style>
