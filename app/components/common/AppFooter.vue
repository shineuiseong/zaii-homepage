<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer__links" aria-label="푸터 메뉴">
        <a href="/privacy" class="footer__link footer__link--strong">개인정보처리방침</a>
        <a href="/terms" class="footer__link">이용약관</a>
        <a href="/non-benefit-fee" class="footer__link">비급여수가표</a>
      </nav>

      <div class="footer__info">
        <p class="footer__line">
          <span>자이비뇨의학과병원</span>
          <span class="footer__divider">|</span>
          <span>대표 : 변재상</span>
          <span class="footer__divider">|</span>
          <span>서울특별시 서초구 서초동 1302-2 대지스포츠프라자 4층</span>
        </p>

        <p class="footer__line">
          <span>사업자등록번호 : 452-90-01235</span>
          <span class="footer__divider">|</span>
          <span>진료 문의 : 02-6207-5678</span>
          <span class="footer__divider">|</span>
          <span>상담 문의 : 010-2638-6034</span>
          <span class="footer__divider">|</span>
          <span>팩스번호 : 02-6207-5670</span>
        </p>
      </div>

      <p class="footer__copyright">COPYRIGHT(C)2020. 자이비뇨의학과병원. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: #2f2f31;
  color: rgba(255, 255, 255, 0.72);
}

.footer .container {
  padding-top: 48px;
  padding-bottom: 48px;
}

.footer__links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin-bottom: 32px;
}

.footer__link {
  font-size: 18px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.74);
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
}

.footer__link--strong {
  color: #ffffff;
}

.footer__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__line {
  margin: 0;
  font-size: 17px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.62);
  word-break: keep-all;
}

.footer__divider {
  display: inline-block;
  margin: 0 10px;
  color: rgba(255, 255, 255, 0.32);
}

.footer__copyright {
  margin: 28px 0 0;
  font-size: 15px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
}

@include desktop-down {
  .footer .container {
    padding-top: 42px;
    padding-bottom: 42px;
  }

  .footer__links {
    gap: 32px;
    margin-bottom: 28px;
  }

  .footer__link {
    font-size: 17px;
  }

  .footer__line,
  .footer__copyright {
    font-size: 12px;
  }
}

@include laptop-down {
  .footer .container {
    padding-top: 36px;
    padding-bottom: 36px;
  }

  .footer__links {
    gap: 24px;
    margin-bottom: 24px;
  }

  .footer__link {
    font-size: 16px;
  }

  .footer__line {
    font-size: 15px;
    line-height: 1.7;
  }

  .footer__divider {
    margin: 0 8px;
  }

  .footer__copyright {
    margin-top: 24px;
    font-size: 15px;
  }
}

@include mobile {
  .footer .container {
    padding-top: 28px;
    padding-bottom: 28px;
  }

  .footer__links {
    gap: 18px 20px;
    margin-bottom: 20px;
  }

  .footer__link {
    font-size: 15px;
  }

  .footer__line {
    font-size: 14px;
    line-height: 1.65;
  }

  .footer__divider {
    margin: 0 6px;
  }

  .footer__copyright {
    margin-top: 20px;
    font-size: 10px;
    line-height: 1.5;
  }
}
</style>
