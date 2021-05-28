<template>
  <div class = "wpn-frame-default" v-bind:style="{
      left: calcLeft+'px', 
      top: calcTop+'px', 
      width: statics.elementWidth+'px', 
      height: statics.elementHeight+'px',
      'border-color': calcEleColor
  }">
    <div class="con-ver" v-if="forkDepth!==null" v-bind:style="{height: calcConnectionLength+'px'}"></div>
    <h1 class = "wpn-title">{{wpn.name}}</h1>
    <div class= "rarity-circle" v-bind:style="{background: rarityColor}">{{wpn.rarity}}</div>
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
    <div class="phial" v-if="wpn.phial!==null">
      <img class="val-icon" v-bind:src="calcPhialIconPath">
      <h3 class="val-text">{{wpn.phial}}</h3>
    </div>
    <div class="phial" v-if="wpn.shelling_type!==null">
      <img class="phial-icon" v-bind:src="calcShellIconPath">
      <h3 class="phial-text">{{wpn.shelling_type}}</h3>
    </div>

    <div class=slots>{{calcSlots}}</div>
    <div class="sharpness-container" v-bind:style="{ width: 45*statics.sharpLengthMulti+2+'px'}">
      <div class="sharpness-bar">
        <span class="shrp-red"    v-bind:style="{width: wpn.sharpness[0]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-orange" v-bind:style="{width: wpn.sharpness[1]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-yellow" v-bind:style="{width: wpn.sharpness[2]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-green"  v-bind:style="{width: wpn.sharpness[3]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-blue"   v-bind:style="{width: wpn.sharpness[4]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-white"  v-bind:style="{width: wpn.sharpness[5]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-purple" v-bind:style="{width: wpn.sharpness[6]*statics.sharpLengthMulti+'px'}"></span>
      </div>
      <div class="sharpness-bar">
        <span class="shrp-red"    v-bind:style="{width: wpn.sharpness_plus[0]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-orange" v-bind:style="{width: wpn.sharpness_plus[1]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-yellow" v-bind:style="{width: wpn.sharpness_plus[2]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-green"  v-bind:style="{width: wpn.sharpness_plus[3]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-blue"   v-bind:style="{width: wpn.sharpness_plus[4]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-white"  v-bind:style="{width: wpn.sharpness_plus[5]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-purple" v-bind:style="{width: wpn.sharpness_plus[6]*statics.sharpLengthMulti+'px'}"></span>
      </div>
      <div class="sharpness-bar">
        <span class="shrp-red"    v-bind:style="{width: wpn.sharpness_plus2[0]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-orange" v-bind:style="{width: wpn.sharpness_plus2[1]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-yellow" v-bind:style="{width: wpn.sharpness_plus2[2]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-green"  v-bind:style="{width: wpn.sharpness_plus2[3]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-blue"   v-bind:style="{width: wpn.sharpness_plus2[4]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-white"  v-bind:style="{width: wpn.sharpness_plus2[5]*statics.sharpLengthMulti+'px'}"></span>
        <span class="shrp-purple" v-bind:style="{width: wpn.sharpness_plus2[6]*statics.sharpLengthMulti+'px'}"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerWeaponDefault',
  data () {
    return {
      statics: {
        marginTop: 40,
        marginLeft:20,
        elementWidth: 200,
        elementHeight: 94,

        depthShift: 65,
        sharpLengthMulti: 3
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
            switch(this.wpn.element){
        case "":
          return "#A1827F"
        case "Dragon":
          return "#711ABD"
        case "Blastblight":
          return "#CC450A"
        case "Paralysis":
          return "#B0EB00"
        case "Sleep":
          return "#94DBEB"
        case "Poison":
          return "#B655C9"
        case "Thunder":
          return "#FFFF19"
        case "Water":
          return "#006AEB"
        case "Ice":
          return "#219CD1"
        case "Fire":
          return "#DE0211"
        default:
          return "#9E604F"
      }
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
    calcPhialIconPath(){
      switch(this.wpn.phial){
        case "Power":
          return require("../assets/icons/phials/impact.png")
        case "Impact":
          return require("../assets/icons/phials/impact.png")
        case "Exhaust":
          return require("../assets/icons/phials/sleep.png")
        case "Dragon":
          return require("../assets/icons/phials/dragon.png")
        case "Element":
          return require("../assets/icons/phials/element.png")
        case "Poison":
          return require("../assets/icons/phials/poison.png")
        case "Paralysis":
          return require("../assets/icons/phials/para.png")
        default:
          return null
      }
    },
    calcShellIconPath(){
      var s = this.wpn.shelling_type.substr(0,this.wpn.shelling_type.indexOf(' '));
      switch(s){
        case "Normal":
          return require("../assets/icons/shells/normal.png")
        case "Wide":
          return require("../assets/icons/shells/wide.png")
        case "Long":
          return require("../assets/icons/shells/long.png")
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
    } 
  },
  created(){
    if(this.wpn.shelling_type==null && this.wpn.phial==null) {
      this.statics.elementHeight -= 20
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
  top: 19px;
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
}
.wpn-title {
  color: #FFF;
  font-size: 10pt;
  position: absolute;
  left: 20px;
  top: 3px;
  margin: 0;
}
.rarity-circle {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 2px;
  color: #222;
  font-size: 8pt;
  font-weight: bold;
}
.values{
  position: absolute;

  left: 3px;
  top: 25px;
}
.val-icon{
  margin-right: 2px;
  width: 18px;
  height: 18px;
}
.val-text{
  margin-right: 8px;
  font-size: 12pt;
  vertical-align: top;
  display: inline;
  color: #FFF;
}
.phial-text{
  margin-right: 8px;
  font-size: 10pt;
  vertical-align: top;
  display: inline;
  color: #FFF;
}
.phial-icon{
  margin-right: 2px;
  width: 16px;
  height: 16px;
}
.phial{
  position: absolute;
  color: #FFF;
  top: 46px;
  left: 3px;
}
.slots{
  padding: 0;
  margin: 0;
  position: absolute;
  font-size: 14pt;
  font-weight: bold;
  bottom: 4px;
  right: 12px;
  color: #FFF;
  text-align: right;
}
.sharpness-container{
  position: absolute;
  bottom: 5px;
  left: 2px;
  height: 19px;
  padding-left: 1px;
  text-align: left;
  background: var(--background-global);
}
.sharpness-bar{
  height: 5px;
  margin-top: 1px;
  display: block;
}
.shrp-red{
  background: var(--sharpness-red);
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
.shrp-orange{
  background: var(--sharpness-orange);
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
.shrp-yellow{
  background: var(--sharpness-yellow);
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
.shrp-green{
  background: var(--sharpness-green);
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
.shrp-blue{
  background: var(--sharpness-blue);
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
.shrp-white{
  background: var(--sharpness-white);
  height: 100%;
  display: inline-block;
  vertical-align: top;
}
.shrp-purple{
  background: var(--sharpness-purple);
  height: 100%;
  display: inline-block;
  vertical-align: top;
}

</style>