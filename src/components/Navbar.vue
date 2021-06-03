<template>
  <div>
    <div class="main"> 
      <button class="nav_toggle" v-on:click="ddActive = !ddActive">
        <span class = "menu_icon">&#9776;</span>
      </button>
      <h1>{{title}}</h1>
    </div>
    <div class="dropdown" v-if='ddActive'>
      <router-link 
          class="nav-item msc" 
          to="/about">About</router-link>
      <h3>Trees</h3>
      <div class="nav-list">
        <router-link 
          class="nav-item bm" 
          to="/greatsword">Great Sword</router-link>
        <router-link 
          class="nav-item bm" 
          to="/longsword">Long Sword</router-link>
        <router-link 
          class="nav-item bm" 
          to="/swordandshield">Sword and Shield</router-link>
        <router-link 
          class="nav-item bm" 
          to="/dualblades">Dual Blades</router-link>
        <router-link 
          class="nav-item bm" 
          to="/hammer">Hammer</router-link>
        <router-link 
          class="nav-item bm" 
          to="/huntinghorn">Hunting Horn</router-link>
        <router-link 
          class="nav-item bm" 
          to="/lance">Lance</router-link>
        <router-link 
          class="nav-item bm" 
          to="/gunlance">Gunlance</router-link>
        <router-link 
          class="nav-item bm" 
          to="/switchaxe">Switch Axe</router-link>
        <router-link 
          class="nav-item bm" 
          to="/chargeblade">Charge Blade</router-link>
        <router-link 
          class="nav-item bm" 
          to="/insectglaive">Insect Glaive</router-link>
        <router-link 
          class="nav-item gm" 
          to="/lightbowgun">Light Bowgun</router-link>
        <router-link 
          class="nav-item gm" 
          to="/heavybowgun">Heavy Bowgun</router-link>
        <router-link 
          class="nav-item gm" 
          to="/bow">Bow</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectMenu',
    props: {
      title: {
        type: String,
        default: "Unknown"
      }
    },
    data () {
      return {
        ddActive: false,
      }
    }
  }
</script>

<style scoped>
  .main{
    background: var(--background-tree-item);
    height: 50px;
    width: 500px;
    position: fixed;
    top: 0px;
    z-index: 111;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
  }
  h1{
    color: #FFF;
    padding-top: 8px;
    margin: 0;
    text-align: left;
    position: absolute;
    display: inline;
    left: 55px;
  }
  .nav_toggle {
    position: absolute;
    display: inline;
    left: 5px;
    top: 7px;
    width: 36px;
    height: 36px;
    font-size: 14pt;
  }
  .dropdown{
    position: fixed;
    background: var(--background-bright-tree-item);
    width: 280px;
    top: 50px;
    z-index: 110;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
    padding-top: 10px;
  }
  
  h3{
    color: #909090;
    text-align: left;
    margin: 8px 0 6px 10px;
    padding: 0;
  }
  .nav-list{
    margin-bottom: 20px;
  }
  .nav-item{
    text-align: left;
    display: block;
    color: #F0F0F0;
    font-weight: bold;
    margin: 2px 0 5px 30px;
    text-decoration: none;
  }
  .nav-item.bm:not(.d):hover{
    color: #e03232;
  }
  .nav-item.gm:not(.d):hover{
    color: #6C77DD;
  }
  .nav-item.msc:not(.d):hover{
    color: #6AB981;
  }
  .d{
        color: #333;
        text-decoration: none;
        cursor: default;
  }
</style>