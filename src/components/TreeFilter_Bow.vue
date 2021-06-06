<template>
  <div>
    <div class="main"> 
      <h1 class="nav-toggle" v-on:click="ddActive = !ddActive">&#9881; Filter</h1>
    </div>
    <div class="dropdown" v-if='ddActive'>
      <div class="dropdown-container">
        <div class="row">
        <div class="row">
          <h4>Atk >=</h4>
          <input type="number" min="0" max="400" step="5" v-model="selAtk">
          <h4>Def >=</h4>
          <input type="number" min="0" max="100" step="5" v-model="selDef">
          <h4>Aff >=</h4>
          <input type="number" min="-100" max="100" step="5" v-model="selAff">
          <h4>Ele >=</h4>
          <input type="number" min="0" max="100" step="5" v-model="selEle">
        </div>
          <h4>Element:</h4>
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
          <input type="radio" value="Blastblight" name="element" v-model="selElement"> 
            <label for="Blastblight">Blast</label>
        </div>
        <div class="row">
          <h4>Slots:</h4>
          <input type="radio" value="0" name="slots" v-model="selSlots" :checked="selSlots==0">
            <label for="0">0+</label>
          <input type="radio" value="1" name="slots" v-model="selSlots">
            <label for="1">1+</label>
          <input type="radio" value="2" name="slots" v-model="selSlots">
            <label for="2">2+</label>
          <input type="radio" value="3" name="slots" v-model="selSlots">
            <label for="3">3</label>
        </div>

        <div class="col-container">
          <div class="col">
            <h4 class="sub-title">Charges:</h4>
            <div class="row">
              <h4>1:</h4>
              <span class="charge-span" v-on:click="updateCharge(0,0)" v-bind:style="{'border-color':calcSelectionColor(0,0)}">R</span>
              <span class="charge-span" v-on:click="updateCharge(0,1)" v-bind:style="{'border-color':calcSelectionColor(0,1)}">P</span>
              <span class="charge-span" v-on:click="updateCharge(0,2)" v-bind:style="{'border-color':calcSelectionColor(0,2)}">S</span>
              <span class="charge-span" v-on:click="updateCharge(0,3)" v-bind:style="{'border-color':calcSelectionColor(0,3)}">H</span>
            </div>
            <div class="row">
              <h4>2:</h4>
              <span class="charge-span" v-on:click="updateCharge(1,0)" v-bind:style="{'border-color':calcSelectionColor(1,0)}">R</span>
              <span class="charge-span" v-on:click="updateCharge(1,1)" v-bind:style="{'border-color':calcSelectionColor(1,1)}">P</span>
              <span class="charge-span" v-on:click="updateCharge(1,2)" v-bind:style="{'border-color':calcSelectionColor(1,2)}">S</span>
              <span class="charge-span" v-on:click="updateCharge(1,3)" v-bind:style="{'border-color':calcSelectionColor(1,3)}">H</span>
            </div>
            <div class="row">
              <h4>3:</h4>
              <span class="charge-span" v-on:click="updateCharge(2,0)" v-bind:style="{'border-color':calcSelectionColor(2,0)}">R</span>
              <span class="charge-span" v-on:click="updateCharge(2,1)" v-bind:style="{'border-color':calcSelectionColor(2,1)}">P</span>
              <span class="charge-span" v-on:click="updateCharge(2,2)" v-bind:style="{'border-color':calcSelectionColor(2,2)}">S</span>
              <span class="charge-span" v-on:click="updateCharge(2,3)" v-bind:style="{'border-color':calcSelectionColor(2,3)}">H</span>
            </div>
            <div class="row">
              <h4>4:</h4>
              <span class="charge-span" v-on:click="updateCharge(3,0)" v-bind:style="{'border-color':calcSelectionColor(3,0)}">R</span>
              <span class="charge-span" v-on:click="updateCharge(3,1)" v-bind:style="{'border-color':calcSelectionColor(3,1)}">P</span>
              <span class="charge-span" v-on:click="updateCharge(3,2)" v-bind:style="{'border-color':calcSelectionColor(3,2)}">S</span>
              <span class="charge-span" v-on:click="updateCharge(3,3)" v-bind:style="{'border-color':calcSelectionColor(3,3)}">H</span>
              <span class="charge-span" v-on:click="updateCharge(3,4)" v-bind:style="{'border-color':calcSelectionColor(3,4)}">/</span>
            </div>

          </div>
          <div class="col">
            <h4 class="sub-title">Coatings:</h4><br>
            <div class="col-vert">
                <input type="checkbox" name="coatings" v-model="selCoatings[0]">
                  <label>Pow1</label><br>
                <input type="checkbox" name="coatings" v-model="selCoatings[1]">
                  <label>Pow2</label><br>
                <input type="checkbox" name="coatings" v-model="selCoatings[2]">
                  <label>Ele1</label><br>
                <input type="checkbox" name="coatings" v-model="selCoatings[3]">
                  <label>Ele2</label><br>
                <input type="checkbox" name="coatings" v-model="selCoatings[4]">
                  <label>CRan</label><br>
            </div>
            <div class="col-vert">
                <input type="checkbox" name="coatings" v-model="selCoatings[5]">
                  <label>Psn</label><br>
                <input type="checkbox" name="coatings" v-model="selCoatings[6]">
                  <label>Par</label><br>
                <input type="checkbox" name="coatings" v-model="selCoatings[7]">
                  <label>Sle</label><br>
                <input type="checkbox" name="coatings" v-model="selCoatings[8]">
                  <label>Exh</label><br>
                <input type="checkbox" name="coatings" v-model="selCoatings[9]">
                  <label>Bla</label><br>
            </div>
          </div>

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
  data () {
    return {
      ddActive: false,
      selSlots: 0,
      selCoatings: [false,false,false,false,false,false,false,false,false,false],
      selCharge: [
        [true,true,true,true],
        [true,true,true,true],
        [true,true,true,true],
        [true,true,true,true,true],
      ],
      selElement: "Any",
      selAff: -100,
      selDef: 0,
      selEle: 0,
      selAtk: 0,
    }
  },
  methods: {
    resetFilter(){
      this.selElement = "Any"
      this.selSlots = 0
      this.selCoatings= [false,false,false,false,false,false,false,false,false,false]
      this.selCharge= [
        [true,true,true,true],
        [true,true,true,true],
        [true,true,true,true],
        [true,true,true,true,true],
      ],
      this.selDef = this.selEle = this. selAtk = 0
      this.selAff = -100
      this.$emit('reset')
    },
    applyFilter(){
      this.ddActive=false;
      var tmp = {
        element: this.selElement,
        slots: this.selSlots,
        coatings: this.selCoatings,
        charges: this.selCharge,
        aff: this.selAff,
        def: this.selDef,
        ele: this.selEle,
        atk: this.selAtk,
      }
      this.$emit('apply',tmp)
    },
    calcSelectionColor(c,n){
      if(this.selCharge[c][n]) return "#58D000"
      else return "#C00C38"
    },
    updateCharge(c,n){
      this.selCharge[c][n] = !this.selCharge[c][n]
    }
  }
}
</script>

<style scoped>
  .main{
    z-index: 101;
    background: var(--background-accent);
    height: 38px;
    width: 1000px;
    position: fixed;
    top: 0px;
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
    z-index: 100;
    position: fixed;
    background: var(--background-accent);
    width: 860px;
    height: 200px;
    top: 36px;
    clip-path: polygon(0 0, 100% 0, 77% 100%, 0 100%);
    border: solid #000;
    border-width: 4px 0;
  }
  .dropdown-container{
    position: absolute;
    width: 90%;
    height: 90%;
    top: 14px;
    text-align: left;
  }
  .row{
    margin: 0;
    position: relative;
    text-align: left;
  }
  .col{
    margin-right: 40px;
    display: inline-block;
    text-align: center;
    vertical-align: top;
    margin-top: 6px;
  }
  .col-vert{
    display: inline-block;
    text-align: left;
    vertical-align: top;
    align-content: left;
    padding-right: 5px;
  }
  .button-row{
    position: absolute;
    bottom: 14px;
    right: 120px;
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
  .charge-span{
    width: 15px;
    height: 15px;
    font-size: 10pt;
    margin-left: 3px;
    border-radius: 50%;
    border: 3px solid #999;
    display: inline-block;
    background: #333;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
  }
  .col-container{
    padding-left: 50px
  }
  .col>.row>label {
    font-size: 10pt;
  }
  [type="checkbox"]{
    margin: 0 1px 0 5px;
  }
  
</style>