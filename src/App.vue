<template>
  <div id="header">
    <header-layout />
  </div>
  <div id="content">
    <router-view />  
  </div>
  <div id="footer">
    <footer-layout />
  </div>
  
</template>

<script>
import HeaderLayout from '@/components/header-layout.vue'
import FooterLayout from '@/components/footer-layout.vue'
export default {
  name: 'App',
  components: {
    HeaderLayout, FooterLayout
  }
}
</script>

<style>
/* main-frame */
#app {
  position: flex;
  justify-content: center;
  align-items: center;
  min-width: 1280px;
  height: 100%;
  background: #FFFFFF;
}

#header {
  display: block;
  padding: 1.5rem 0rem;
  position: relative;
  min-width: 100%;
  min-height: 100px;
  margin: 0 auto;
}

#content {
  display: block;
  padding: 0rem;
  position: relative;
  min-width: 100%;
  margin: 0 auto;
}

#footer {
  display: block;
  padding: 3rem 0rem;
  position: relative;
  min-width: 100%;
  margin: 0 auto;
}
</style>
