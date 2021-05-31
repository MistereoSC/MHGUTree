<template>
  <div>
    <Navbar title="About"></Navbar>
    <div class="container">
      <h1>About</h1>
      <p>Data is from the 
        <a href="https://github.com/gatheringhallstudios/MHGenDatabase">MHGU Database</a>
      </p>
      <p>and from 
        <a href="https://mhapi.info/">Poogie's Toolbox</a>
      </p>
      <h1>GitHub</h1>
      <p>See this project's source code on 
        <a href="https://github.com/MistereoSC/MHGUTree">GitHub</a>
      </p>
      <hr>
      <p class="subtext">If you have any suggestions or find any error, feel free to contact
        <a class="subtext reddit" href="https://www.reddit.com/user/mistereo_sc">/u/mistereo_sc</a>
        on Reddit!
      </p>
      <span class="deco tl"></span>
      <span class="deco tr"></span>
      <span class="deco bl"></span>
      <span class="deco br"></span>
    </div>
    <img class="background" src="../assets/background.png" >
  </div>
</template>

<script>
  import Navbar from  '../components/Navbar.vue'
  export default {
    name: 'About',
    components: {
      Navbar
    },
  }
</script>

<style scoped>
.container{
  z-index: 10;
  background: #0003;
  position: fixed;
  padding: 0px 20px 30px 20px;
  margin: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: var(--background-deco) solid;
  border-width: 4px 0;
}
.deco{
  position: absolute;
  width: 24px;
  height: 16px;
  border: var(--background-deco) solid;
  border-width: 0 0 4px 4px;
}
.deco:after{
  content: "";
  position: absolute;
  width: 12px;
  height: 6px;
  border: var(--background-deco) solid;
  border-width: 4px 4px 0 0;
  bottom: 0;
  right: 0;
}
.deco.tl{
  top:0;
  left: 0;
}
.deco.tr{
  top:0;
  right: 0;
  transform: scaleX(-1);
}
.deco.bl{
  bottom:0;
  left: 0;
  transform: scaleX(-1) rotate(180deg);
}
.deco.br{
  bottom:0;
  right: 0;
  transform: rotate(180deg);
}
h1{
  font-size: 28pt;
  margin: 30px 0 0 0;
}
p{
  font-size: 14pt;
  margin: 10px 0 0 0;
}
p.subtext{
  font-size: 12pt;
  margin: 10px;
}
p.subtext{
  color: #BBB;
}
hr{
  border-color: #FFF4;
  border-width: 4px 0 0 0;
  margin: 20px 0 0 0;
}
a, a:link, a:visited{
  color: var(--link)
}
.reddit{
  color: #FF4300;
}
a:hover, a:active{
  color:var(--link-hover)
}
.background{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
