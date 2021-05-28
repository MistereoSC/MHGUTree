<template>
  <div>
    <div class="main"> 
      <h1 class="nav-toggle" v-on:click="ddActive = !ddActive">&#9881; Filter</h1>
    </div>
    <div class="dropdown" v-if='ddActive'>
      <div class="dropdown-container">
        <div class="row">
          <div class="row-text">
            <h4>Element:</h4>
          </div>
          <input type="radio" value="Any" name="element" v-model="selElement" :checked="selElement=='Any'">
            <label for="Any">Any</label>
          <input type="radio" value="None" name="element" v-model="selElement">
            <label for="None">None</label>
          <input type="radio" value="Fire" name="element" v-model="selElement">
            <label for="Fire">Fire</label>
          <input type="radio" value="Ice" name="element" v-model="selElement">
            <label for="Ice">Ice</label>
          <input type="radio" value="Water" name="element" v-model="selElement">
            <label for="Water">Water</label>
          <input type="radio" value="Thunder" name="element" v-model="selElement">
            <label for="Thunder">Thunder</label>
          <input type="radio" value="Dragon" name="element" v-model="selElement"> 
            <label for="Dragon">Dragon</label>
          <input type="radio" value="Sleep" name="element" v-model="selElement">
            <label for="Sleep">Sleep</label>
          <input type="radio" value="Paralysis" name="element" v-model="selElement">
            <label for="Paralysis">Paralysis</label>
          <input type="radio" value="Poison" name="element" v-model="selElement">
            <label for="Poison">Poison</label>
        </div>
        <div class="row" v-if="special=='SA'">
          <div class="row-text">
            <h4>Phial:</h4>
          </div>
          <input type="radio" value="Any"       name="phial" v-model="selPhial" :checked="selPhial=='Any'">
            <label for="Any">Any</label>
          <input type="radio" value="Power"     name="phial" v-model="selPhial">
            <label for="Power">Power</label>
          <input type="radio" value="Element"   name="phial" v-model="selPhial">
            <label for="Element">Element</label>
          <input type="radio" value="Dragon"    name="phial" v-model="selPhial">
            <label for="Dragon">Dragon</label>
          <input type="radio" value="Exhaust"   name="phial" v-model="selPhial">
            <label for="Exhaust">Exhaust</label>
          <input type="radio" value="Paralysis" name="phial" v-model="selPhial">
            <label for="Paralysis">Paralysis</label>
          <input type="radio" value="Poison"    name="phial" v-model="selPhial">
            <label for="Poison">Poison</label>
        </div>
        <div class="row" v-if="special=='CB'">
          <div class="row-text">
            <h4>Phial:</h4>
          </div>
          <input type="radio" value="Any"     name="phial" v-model="selPhial" :checked="selPhial=='Any'">
            <label for="Any">Any</label>
          <input type="radio" value="Impact"  name="phial" v-model="selPhial">
            <label for="Impact">Impact</label>
          <input type="radio" value="Element" name="phial" v-model="selPhial">
            <label for="Element">Element</label>
        </div>
        <div class="row" v-if="special=='GL'">
          <div class="row-text">
            <h4>Shelling:</h4>
          </div>
          <input type="radio" value="Any"     name="shell" v-model="selShell" :checked="selShell=='Any'">
            <label for="Any">Any</label>
          <input type="radio" value="Normal"  name="shell" v-model="selShell">
            <label for="Normal">Normal</label>
          <input type="radio" value="Long"    name="shell" v-model="selShell">
            <label for="Long">Long</label>
          <input type="radio" value="Wide"    name="shell" v-model="selShell">
            <label for="Wide">Wide</label>
        </div>
        <div class="row">
          <div class="row-text">
            <h4>Slots:</h4>
          </div>
          <input type="radio" value="0" name="slots" v-model="selSlots" :checked="selSlots==0">
            <label for="0">0+</label>
          <input type="radio" value="1" name="slots" v-model="selSlots">
            <label for="1">1+</label>
          <input type="radio" value="2" name="slots" v-model="selSlots">
            <label for="2">2+</label>
          <input type="radio" value="3" name="slots" v-model="selSlots">
            <label for="3">3</label>
        </div>
        <div class="row">
          <div class="row-text">
            <h4>Nat. Sharpness:</h4>
          </div>
          <input type="radio" value="Any"     name="sharp" v-model="selNatSharp" :checked="selNatSharp=='Any'">
            <label for="Any">Any</label>
          <input type="radio" value="Blue"    name="sharp" v-model="selNatSharp">
            <label for="Blue">Blue+</label>
          <input type="radio" value="White"   name="sharp" v-model="selNatSharp">
            <label for="White">White+</label>
          <input type="radio" value="Purple"  name="sharp" v-model="selNatSharp">
            <label for="Purple">Purple</label>
          <input type="radio" value="Green"   name="sharp" v-model="selNatSharp">
            <label for="Green">Green</label>
        </div>
        <div class="row button-row">
          <button class="dropdown-button" v-on:click="resetFilter">
            <span class = "menu_icon">Reset</span>
          </button>
          <button class="dropdown-button" v-on:click="applyFilter">
            <span class = "menu_icon">Apply</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TreeFilter',
  props: {
    special: {
      type: String,
      default: "NA"
    }
  },
  data () {
    return {
      ddActive: false,
      selSlots: 0,
      selElement: "Any",
      selPhial: "Any",
      selShell: "Any",
      selNatSharp: "Any"
    }
  },
  methods: {
    resetFilter(){
      this.selElement = this.selPhial = this.selShell = this.selNatSharp = "Any"
      this.selSlots = 0
      this.$emit('reset')
    },
    applyFilter(){
      this.ddActive=false;
      var tmp = {
        element: this.selElement,
        phial: this.selPhial,
        shell: this.selShell,
        slots: this.selSlots,
        sharp: this.selNatSharp
      }
      this.$emit('apply',tmp)
    }
  }
}
</script>

<style scoped>
  .main{
    background: var(--background-accent);
    height: 38px;
    width: 1000px;
    position: fixed;
    top: 0px;
    z-index: 91;
    clip-path: polygon(0 0, 100% 0, 96% 100%, 0 100%);
  }
  .nav-toggle {
    color: #FFF;
    margin: 0;
    padding-top: 2px;
    position: absolute;
    left: 520px;
    font-size: 18pt;
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: #8e97ac;
  }
  .dropdown{
    position: fixed;
    background: var(--background-accent);
    width: 860px;
    height: 130px;
    top: 36px;
    z-index: 90;
    clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
  }
  .dropdown-container{
    position: absolute;
    width: 90%;
    height: 90%;
    top: 14px;
  }
  .row{
    margin: 0;
    position: relative;
    text-align: left;
  }
  .button-row{
    position: absolute;
    bottom: 14px;
    right: 50px;
    padding: 0;
  }
  .dropdown-button{
    height: 28px;
    width: 80px;
    font-weight: bold;
    font-size: 13pt;
    margin-left: 5px;
  }
  .row-text{
    display: inline-block;
    width: 140px;
    text-align: right;
  }
  h4{
    display: inline;
    padding: 0;
    margin: 0 10px 0 5px;
  }
</style>