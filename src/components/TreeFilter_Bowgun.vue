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
        </div>
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
      this.selDef = this. selAtk = 0
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
    height: 80px;
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