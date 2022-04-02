<template>
  <div id="footer-area">
    <div id="footer-container">
      <div class="footer-section">
        <img class="footer-logo" src="@/assets/logo.png" alt="bbubbush logo">
        <span class="footer-logo-text">Making the world a better place.</span>
        <!-- <div class="footer-social-list">
          <div class="footer-social-icon">
            <div class="footer-social-facebook">
              <div class="facebook1"></div>
              <div class="facebook2"></div>
              <div class="facebook3"></div>
              <div class="facebook4"></div>
              <div class="facebook5"></div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="footer-section">
        <div class="footer-nav-title">COMPANY</div>
        <div class="footer-nav-list">
          <div class="footer-nav-item">About</div>
          <div class="footer-nav-item">Twitter</div>
          <div class="footer-nav-item">Blog</div>
        </div>
      </div>
      <div class="footer-section">
        <div class="footer-nav-title">PRODUCT</div>
        <div class="footer-nav-list">
          <div class="footer-nav-item">Pricing</div>
          <div class="footer-nav-item">Features</div>
          <div class="footer-nav-item">Templates</div>
        </div>
      </div>
      <div class="footer-section">
        <div class="footer-nav-title">RESOURCES</div>
        <div class="footer-nav-list">
          <div class="footer-nav-item">Testimonials</div>
          <div class="footer-nav-item">Terms</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
#footer-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: static;
  border-radius: 0px;
}

#footer-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px 0px;

  position: static;
  width: 1000px;
  height: 229px;
  left: 140px;
  top: 0px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}

.footer-section {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 240px;
  height: 143px;
  left: 0px;
  top: 32px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px;
}

.footer-logo {
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: static;
  width: 36px;
  height: 50px;
  left: 0px;
  top: 0px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 0px;
}

.footer-logo-text {
  position: static;
  width: 240px;
  height: 21px;
  left: 0px;
  top: 66px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */

  color: #678398;


  /* Inside auto layout */
  flex: none;
  order: 2;
  align-self: stretch;
  flex-grow: 0;
  margin: 16px 0px;
}

.footer-social-list {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 0px;

  position: static;
  width: 240px;
  height: 40px;
  left: 0px;
  top: 103px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  margin: 16px 0px;
}

.footer-social-icon {
  position: static;
  width: 24px;
  height: 24px;
  left: 0px;
  top: 8px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px;
}

.footer-social-facebook {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 0px;
  top: 0px;

  border-radius: 0px;
}

.facebook1 {
  position: absolute;
  left: 20.83%;
  right: 50%;
  top: 37.5%;
  bottom: 33.33%;

  border: 2px solid #678398;
}

.facebook2 {
  position: absolute;
  left: 20.83%;
  right: 50%;
  top: 66.67%;
  bottom: 4.17%;

  border: 2px solid #678398;
}

.facebook3 {
  position: absolute;
  left: 50%;
  right: 20.83%;
  top: 37.5%;
  bottom: 33.33%;

  border: 2px solid #678398;
}

.facebook4 {
  position: absolute;
  left: 50%;
  right: 20.83%;
  top: 8.33%;
  bottom: 62.5%;

  border: 2px solid #678398;
}

.facebook5 {
  position: absolute;
  left: 20.83%;
  right: 50%;
  top: 8.33%;
  bottom: 62.5%;

  border: 2px solid #678398;
}

.footer-nav-title {
  position: static;
  width: 200px;
  height: 31px;
  left: 0px;
  top: 0px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #678398;


  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 10px 0px;
}

.footer-nav-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 200px;
  height: 89px;
  left: 0px;
  top: 41px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin: 10px 0px;
}

.footer-nav-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  margin-top: 1rem;
  position: static;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #678398;
}
</style>
