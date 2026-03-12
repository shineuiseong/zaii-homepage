<template>
  <section class="urolift-achievement">
    <div class="container">
      <div class="urolift-achievement__image">
        <img
          src="/images/urolift/urolift-achievement-banner.png"
          alt="자이비뇨의학과병원 전립선 치료 10000례"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.urolift-achievement {
  padding: 80px 0;
  background: #f7fbff;
}

.urolift-achievement__image {
  overflow: hidden;
  border-radius: 8px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

@include laptop-down {
  .urolift-achievement {
    padding: 60px 0;
  }
}

@include mobile {
  .urolift-achievement {
    padding: 44px 0;
  }
}
</style>
