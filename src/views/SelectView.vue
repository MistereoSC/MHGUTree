<template>
  <div>
    <div class="top-container">
      <ul class="top-list">
        <li class="BM"   v-on:click="currentSel='Great Sword'">Great Sword</li>
        <li class="BM"   v-on:click="currentSel='Long Sword'">Long Sword</li>
        <li class="BM"   v-on:click="currentSel='Sword and Shield'">S&amp;S</li>
        <li class="BM"   v-on:click="currentSel='Dual Blades'">Dual Blades</li>
        <li class="BM"   v-on:click="currentSel='Hammer'">Hammer</li>
        <li class="BM d" >Hunting Horn</li>
        <li class="BM"   v-on:click="currentSel='Lance'">Lance</li>
        <li class="BM"   v-on:click="currentSel='Gunlance'">Gunlance</li>
        <li class="BM"   v-on:click="currentSel='Switch Axe'">Switch Axe</li>
        <li class="BM"   v-on:click="currentSel='Charge Blade'">Charge Blade</li>
        <li class="BM"   v-on:click="currentSel='Insect Glaive'">Insect Glaive</li>
        <li class="GM d" >LBG</li>
        <li class="GM d" >HGB</li>
        <li class="GM d" >Bow</li>
      </ul>
    </div>
    <div>
      <h3 class="top-title">{{currentSel}}</h3>
    </div>
    <div>
      <GS   v-if="currentSel == 'Great Sword'"></GS>
      <LS   v-if="currentSel == 'Long Sword'"></LS>
      <SNS  v-if="currentSel == 'Sword and Shield'"></SNS>
      <DB   v-if="currentSel == 'Dual Blades'"></DB>
      <H    v-if="currentSel == 'Hammer'"></H>
      <HH   v-if="currentSel == 'Hunting Horn'"></HH>
      <L    v-if="currentSel == 'Lance'"></L>
      <GL   v-if="currentSel == 'Gunlance'"></GL>
      <SA   v-if="currentSel == 'Switch Axe'"></SA>
      <CB   v-if="currentSel == 'Charge Blade'"></CB>
      <IG   v-if="currentSel == 'Insect Glaive'"></IG>
      <LBG  v-if="currentSel == 'Light Bowgun'"></LBG>
      <HBG  v-if="currentSel == 'Heavy Bowgun'"></HBG>
      <B    v-if="currentSel == 'Bow'"></B>
    </div>
  </div>
</template>

<script>
import GS from '../views/P_Greatsword.vue'
import LS from '../views/P_Longsword.vue'
import SNS from '../views/P_SwordAndShield.vue'
import DB from '../views/P_Dualblades.vue'
import H from '../views/P_Hammer.vue'
import HH from '../views/P_Switchaxe.vue'
import L from '../views/P_Lance.vue'
import GL from '../views/P_Gunlance.vue'
import SA from '../views/P_Switchaxe.vue'
import CB from '../views/P_Chargeblade.vue'
import IG from '../views/P_InsectGlaive.vue'
import LBG from '../views/P_Switchaxe.vue'
import HBG from '../views/P_Switchaxe.vue'
import B from '../views/P_Switchaxe.vue'

export default {
  name: 'SelectView',
  components: {
    GS,
    LS,
    SNS,
    DB,
    H,
    HH,
    L,
    GL,
    SA,
    CB,
    IG,
    LBG,
    HBG,
    B

  },
  data() {
    return {
      currentSel: "Great Sword"
    }
  }
}
</script>

<style scoped>
  .top-container{
    height: 40px;
    background: var(--background-tree-item);
    min-width: 4400px;
    margin: 0;
    padding: 0;
  }
  .top-list{
    height: 100%;
    list-style-type: none;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .top-title{
    font-size: 28pt;
    color: #F0F0F0;
    margin: 6px 0px 10px 200px;
  }
  li {
    width: 125px;
    height: 100%;
    padding-top: 10px;
    float: left;
    display: block;
    color: #CCC;
    font-weight: bold;
  }
  .GM:hover {
    background: #40F5;
  }
  .BM:hover {
    background: #F005;
  }
  .d:hover {
    background: #0000;
  }
  .d{
    color: #707070;
  }
</style>