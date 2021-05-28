<template>
  <div>
    <div class="main"> 
      <button class="nav_toggle" v-on:click="ddActive = !ddActive">
        <span class = "menu_icon">&#9776;</span>
      </button>
      <h1>{{title}}</h1>
    </div>
    <div class="dropdown" v-if='ddActive'>
      <h3>Trees</h3>
      <div class="nav-list">
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/greatsword">Great Sword</router-link>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/longsword">Long Sword</router-link>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/swordandshield">Sword and Shield</router-link>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/dualblades">Dual Blades</router-link>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/hammer">Hammer</router-link>
        <p class="nav-item d" >Hunting Horn</p>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/lance">Lance</router-link>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/gunlance">Gunlance</router-link>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/switchaxe">Switch Axe</router-link>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/chargeblade">Charge Blade</router-link>
        <router-link 
          v-on:click="ddActive = false" 
          class="nav-item" 
          to="/insectglaive">Insect Glaive</router-link>
        <p class="nav-item d" >Light Bowgun</p>
        <p class="nav-item d" >Heavy Bowgun</p>
        <p class="nav-item d" >Bow</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectMenu',
    props: {
      title: String,
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
    z-index: 101;
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
    z-index: 100;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
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
  .nav-item:not(.d):hover{
    color: #e03232;
  }
  .d{
        color: #333;
        text-decoration: none;
        cursor: default;
  }
</style>