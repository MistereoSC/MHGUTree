<template>
<div>
  <div class = "wpn-frame-default" 
    @mouseover="hover = true"
    @mouseleave="hover = false"
    v-bind:style="{
      left: calcLeft+'px', 
      top: calcTop+'px', 
      width: statics.elementWidth+'px', 
      height:  statics.elementHeight+'px',
      'border-color': calcEleColor,
  }"
  v-bind:class="{ mute: filtered }"
  >
    <div class="con-ver" v-if="forkDepth!==null" v-bind:style="{height: calcConnectionLength+'px'}"></div>
    <h1 class = "wpn-title">{{wpn.name}}</h1>
    <span class= "rarity-circle" v-bind:style="{background: rarityColor}"></span>
    <hr v-bind:style="{'border-color': calcEleColor}">
    <div class="values">
      <img class="val-icon" src="../assets/icons/ico_atk.png">
      <h3 class="val-text">{{wpn.attack}}</h3>
      <img class="val-icon" src="../assets/icons/ico_def.png">
      <h3 class="val-text" v-bind:style="{color: calcDefColor}">{{wpn.defense}}</h3>
      <img class="val-icon" src="../assets/icons/ico_aff.png" >
      <h3 class="val-text" v-bind:style="{color: calcAffColor}">{{wpn.affinity}}</h3>
      <img class="val-icon" v-if="calcHasElement" v-bind:src="calcEleIconPath">
      <h3 class="val-text"  v-if="calcHasElement">{{wpn.element_attack}}</h3>    
    </div>
    <span class=slots>{{calcSlots}}</span>
  </div>

  <div v-if="hover==true && filtered==false" class="wpn-frame-hover"
    v-bind:style="{
      left: calcLeft+'px', 
      top: calcTop+statics.elementHeight+'px', 
      width: statics.elementWidth+'px', 
      'border-color': calcEleColor,
    }"
  >
    <ul class="charge-list a">
      <li class="charge-text"
        v-for="(item, index) in wpn.charges" 
        :key=index
        v-bind:style="{color: calcChargeColor(item)}"
      >
      {{item}}
      </li>
    </ul>
    <ul class="charge-list b">
      <li v-bind:style="{color: calcCoatingColor(0)}">Pow1</li>
      <li v-bind:style="{color: calcCoatingColor(1)}">Pow2</li>
      <li v-bind:style="{color: calcCoatingColor(2)}">Ele1</li>
      <li v-bind:style="{color: calcCoatingColor(3)}">Ele2</li>
      <li v-bind:style="{color: calcCoatingColor(4)}">CRan</li>
    </ul>
    <ul class="charge-list c">
      <li v-bind:style="{color: calcCoatingColor(5)}">Psn</li>
      <li v-bind:style="{color: calcCoatingColor(6)}">Par</li>
      <li v-bind:style="{color: calcCoatingColor(7)}">Sle</li>
      <li v-bind:style="{color: calcCoatingColor(8)}">Exh</li>
      <li v-bind:style="{color: calcCoatingColor(9)}">Bla</li>
    </ul>
  </div>
</div>

</template>

<script>
export default {
  name: 'BannerWeaponDefault',
  data () {
    return {
      hover: false,
      statics: {
        marginTop: 40,
        marginLeft:20,
        elementWidth: 200,
        elementHeight: 54,
        depthShift: 65,
      }
    }
  },
  props: {
    posH: {
      type: Number,
      default: 0
    },
    posV: {
      type: Number,
      default: 0
    },
    shiftH: {
      type: Number,
      default: 0
    },
    wpn: {
      type: Object
    },
    fork: {
      type: Boolean,
      default: false
    },
    forkDepth: {
      type: Number,
      default: null
    },
    filtered: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    calcChargeColor(item){
      if(item.length==0 || item[item.length-1]=="*") return "#AAA"
      else return "#FFF"
    },
    calcCoatingColor(n){
      if(this.wpn.coatings[n]==false) return "#AAA"
      switch(n){
        case 0:
        case 1:
          return "#F0C830"
        case 2:
        case 3:
          return "#E55356"
        case 4:
          return "#AAA"
        case 5:
          return "#B655C9"
        case 6:
          return "#B0EB00"
        case 7:
          return "#94DBEB"
        case 8:
          return "#219CD1"
        case 9:
          return "#CC450A"
      }
    }
  },
  computed: {
    calcLeft() {
      return this.posH*this.statics.elementWidth + this.posH*this.statics.marginLeft + this.shiftH*this.statics.depthShift
    },
    calcTop() {
      return this.posV*this.statics.elementHeight + this.posV*this.statics.marginTop
    },
    rarityColor() {
      return "var(--rarity-"+this.wpn.rarity+")"
    },
    calcSlots(){
      switch(this.wpn.slots){
        case 0:
          return "- - -"
        case 1:
          return "o - -"
        case 2:
          return "oo -"
        case 3:
          return "ooo"
        default:
          return "- - -"
      }
    },
    calcAffColor(){
      var t = parseInt(this.wpn.affinity)
      if(t>0){
        return "#0CF026"
      } else if(t<0){
        return "#FF0D55"
      } else {
        return "#FFFFFF"
      }
    },
    calcDefColor(){
      var t = parseInt(this.wpn.defense)
      if(t>0){
        return "#26CEFF"
      } else if(t<0){
        return "#FF0D55"
      } else {
        return "#FFFFFF"
      }
    },
    calcEleColor(){
      var t1 = "#A1827F"
      var t2 = "#A1827F"
      switch(this.wpn.element){
        case "":
          t1 ="#A1827F"
          break
        case "Dragon":
          t1 ="#711ABD"
          break
        case "Blastblight":
          t1 = "#CC450A"
          break
        case "Paralysis":
          t1 = "#B0EB00"
          break
        case "Sleep":
          t1 = "#94DBEB"
          break
        case "Poison":
          t1 = "#B655C9"
          break
        case "Thunder":
          t1 = "#FFFF19"
          break
        case "Water":
          t1 = "#006AEB"
          break
        case "Ice":
          t1 = "#219CD1"
          break
        case "Fire":
          t1 = "#DE0211"
          break
        default:
          t1 = "#9E604F"
      }
      switch(this.wpn.element_2){
        case "":
          t2 = t1
          break
        case "Dragon":
          t2 ="#711ABD"
          break
        case "Blastblight":
          t2 = "#CC450A"
          break
        case "Paralysis":
          t2 = "#B0EB00"
          break
        case "Sleep":
          t2 = "#94DBEB"
          break
        case "Poison":
          t2 = "#B655C9"
          break
        case "Thunder":
          t2 = "#FFFF19"
          break
        case "Water":
          t2 = "#006AEB"
          break
        case "Ice":
          t2 = "#219CD1"
          break
        case "Fire":
          t2 = "#DE0211"
          break
        default:
          t2 = t1
      }
      return t1 + " " + t2 + " " + t2 + " " + t1
    },
    calcEleIconPath(){
      switch(this.wpn.element){
        case "":
          return null
        case "Dragon":
          return require("../assets/icons/stats/dragon.png")
        case "Blastblight":
          return require("../assets/icons/stats/blast.png")
        case "Paralysis":
          return require("../assets/icons/stats/para.png")
        case "Sleep":
          return require("../assets/icons/stats/sleep.png")
        case "Poison":
          return require("../assets/icons/stats/poison.png")
        case "Thunder":
          return require("../assets/icons/stats/thunder.png")
        case "Water":
          return require("../assets/icons/stats/water.png")
        case "Ice":
          return require("../assets/icons/stats/ice.png")
        case "Fire":
          return require("../assets/icons/stats/fire.png")
        default:
          return null
      }
    },
    calcHasElement(){
      if(this.wpn.element === "") {return false}
      return true
    },
    calcConnectionLength(){
      if(this.forkDepth==0){return 0}
      else { return this.statics.elementHeight*(this.forkDepth-0.5) + this.forkDepth*(this.statics.marginTop) }
    },
    calcHeight(){
      if(this.hover) return this.statics.elementHeight+50
      return this.statics.elementHeight
    }
  }
}
</script>

<style scoped>
.con-ver{
  content: "";
  position: absolute;
  width: 30px;
  border-style: solid;
  border-color: var(--connection-tree-item);
  border-left-width: 4px;
  border-bottom-width: 4px;
  border-right-width: 0px;
  border-top-width: 0px;
  display: inline-block;
  left: -36px;
  bottom: 50%;
  z-index: -1;
}
hr{
  position: absolute;
  left: -2px;
  top: 16px;
  width: 100%;
  padding: 0;
  margin: 0;
  border-style: solid;
  border-top: 1;
  border-bottom: 0;
  border-left: 0;
  border-width: 2px;
}
.wpn-frame-default {
  position: absolute;
  border: 3px;
  border-color: var(--border-tree-item);
  background: var(--background-tree-item);
  border-style: solid;
  padding: 0;
  border-radius: 8px;
  cursor: pointer;
}
.wpn-frame-default.mute:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .8;
    border-radius: 5px;
}
.wpn-frame-hover {
  position: absolute;
  border-width: 0 3px 3px 3px;
  border-color: var(--border-tree-item);
  background: var(--background-tree-item);
  border-style: solid;
  padding: 0;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
  height: 68px;
  z-index: 10;
}
.wpn-title {
  color: #FFF;
  font-size: 10pt;
  position: absolute;
  left: 14px;
  top: 1px;
  margin: 0;
  font-weight: bold;
}
.rarity-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 2px;
}
.values{
  position: absolute;
  left: 2px;
  top: 26px;
}
.val-icon{
  margin-right: 2px;
  width: 16px;
  height: 16px;
}
.val-text{
  margin-right: 5px;
  font-size: 11pt;
  vertical-align: top;
  display: inline;
  color: #FFF;
  font-weight: normal;
}
.slots{
  padding: 0;
  margin: 0;
  position: absolute;
  font-size: 12pt;
  font-weight: bold;
  top: 24px;
  right: 5px;
  color: #FFF;
  text-align: right;
}
.charge-list{
  list-style-type: none;
  text-align: left;
  padding: 0;
  position: absolute;
  margin: 0;
}
.charge-list.a{
  font-size: 10pt;
  left: 20px;
}
.charge-list.b{
  font-size: 8pt;
  right: 50px
}
.charge-list.c{
  font-size: 8pt;
  right: 20px
}
</style>