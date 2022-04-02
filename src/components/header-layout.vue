<template>
  <div id="nav-bar">
    <div id="nav-container">
      <div class="nav-section">
        <div class="nav-link-list">
          <img class="nav-logo" src="@/assets/logo.png" alt="bbubbush logo">
          <span class="nav-title">bb-crypto</span>

        </div>
      </div>
      <div class="nav-section">
        <div class="nav-link-list">
          <router-link to="/aes" class="nav-link-item">AES</router-link>
          <router-link to="/sha" class="nav-link-item">SHA</router-link>
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
#nav-bar {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: static;
  border-radius: 0px;
}

#nav-container {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px;

  position: static;
  width: 1100px;
  height: 86px;
  left: 90px;
  top: -1px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}

.nav-section {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: static;
  width: 107px;
  height: 38px;
  left: 0px;
  top: 24px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 127px;
}

.nav-link-list {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 0px 0px 27px;

  position: static;
  width: 117px;
  height: 19px;
  left: 0px;
  top: 0px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 24px;
}

.nav-link-item {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 34px;
  height: 19px;
  left: 83px;
  top: 0px;

  border-radius: 0px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 24px;
}

.nav-logo {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  position: static;
  width: 36px;
  height: 50px;
  left: 0px;
  top: -10px;

  /* background: url(logo.png); */
  border-radius: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
}

.nav-title {
  position: static;
  width: 98px;
  height: 30px;
  left: 44px;
  top: 0px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  /* identical to box height, or 167% */
  text-align: center;

  color: #0A2A42;


  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;

}

</style>
