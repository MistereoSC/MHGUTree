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
  }"
  v-bind:class="{ mute: filtered }"
  >
    <div class="con-ver" v-if="forkDepth!==null" v-bind:style="{height: calcConnectionLength+'px'}"></div>
    <h1 class = "wpn-title">{{wpn.name}}</h1>
    <span class= "rarity-circle" v-bind:style="{background: rarityColor}"></span>
    <hr>
    <div class="values">
      <img class="val-icon" src="../assets/icons/ico_atk.png">
      <h3 class="val-text">{{wpn.attack}}</h3>
      <img class="val-icon" src="../assets/icons/ico_def.png">
      <h3 class="val-text" v-bind:style="{color: calcDefColor}">{{wpn.defense}}</h3>
      <img class="val-icon" src="../assets/icons/ico_aff.png" >
      <h3 class="val-text" v-bind:style="{color: calcAffColor}">{{wpn.affinity}}</h3>  
    </div>
    <div class="more-values">
      <p class="darker">Dev:</p>
      <p>{{wpn.deviation}}</p>
      <p class="darker">Rec:</p>
      <p>{{wpn.recoil}}</p>
      <p class="darker">Rel:</p>
      <p>{{wpn.reload_speed}}</p>
    </div>
    <span class=slots>{{calcSlots}}</span>
  </div>

  <div v-if="hover==true && filtered==false" class="wpn-frame-hover"
    v-bind:style="{
      left: calcLeft+'px', 
      top: calcTop+statics.elementHeight+'px', 
      width: statics.elementWidth+'px', 
    }"
  >
  <div class="col-container">
    <div class="col-vert vbr">
      <p>Nrm</p>
      <p>Prc</p>
      <p>Pel</p>
      <p>Crg</p>
      <p>Cls</p>
    </div>
    <div class="col-vert">
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.nrm[0])}">{{wpn.ammo.nrm[0].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.prc[0])}">{{wpn.ammo.prc[0].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.pel[0])}">{{wpn.ammo.pel[0].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.crg[0])}">{{wpn.ammo.crg[0].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.cls[0])}">{{wpn.ammo.cls[0].replace("*","")}}</p>
    </div>
    <div class="col-vert">
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.nrm[1])}">{{wpn.ammo.nrm[1].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.prc[1])}">{{wpn.ammo.prc[1].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.pel[1])}">{{wpn.ammo.pel[1].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.crg[1])}">{{wpn.ammo.crg[1].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.cls[1])}">{{wpn.ammo.cls[1].replace("*","")}}</p>
    </div>
    <div class="col-vert">
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.nrm[2])}">{{wpn.ammo.nrm[2].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.prc[2])}">{{wpn.ammo.prc[2].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.pel[2])}">{{wpn.ammo.pel[2].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.crg[2])}">{{wpn.ammo.crg[2].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.cls[2])}">{{wpn.ammo.cls[2].replace("*","")}}</p>
    </div>
    <div class="col-vert vbr">
      <p>Rcv</p>
      <p>Psn</p>
      <p>Par</p>
      <p>Sle</p>
      <p>Exh</p>
    </div>
    <div class="col-vert">
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.rcv[0])}">{{wpn.ammo.rcv[0].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.psn[0])}">{{wpn.ammo.psn[0].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.sle[0])}">{{wpn.ammo.sle[0].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.par[0])}">{{wpn.ammo.par[0].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.exh[0])}">{{wpn.ammo.exh[0].replace("*","")}}</p>
    </div>
    <div class="col-vert">
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.rcv[1])}">{{wpn.ammo.rcv[1].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.psn[1])}">{{wpn.ammo.psn[1].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.sle[1])}">{{wpn.ammo.sle[1].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.par[1])}">{{wpn.ammo.par[1].replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.exh[1])}">{{wpn.ammo.exh[1].replace("*","")}}</p>
    </div>
    <div class="col-vert vbr">
      <p>F</p>
      <p>W</p>
      <p>T</p>
      <p>I</p>
      <p>D</p>
    </div>
    <div class="col-vert">
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.fir)}">{{wpn.ammo.fir.replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.wat)}">{{wpn.ammo.wat.replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.thn)}">{{wpn.ammo.thn.replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.ice)}">{{wpn.ammo.ice.replace("*","")}}</p>
      <p v-bind:style="{color: calcAmmoCol(wpn.ammo.dra)}">{{wpn.ammo.dra.replace("*","")}}</p>
    </div>

    </div>
    <div class="col-container">
      <div class="col-vert vbr">
        <h5>Special:</h5>
        <p v-for="(item,index) in wpn.special_ammo" :key="index" >{{item}}</p>
      </div>
      <div class="col-vert vbr">
        <h5>Rapid:</h5>
        <p v-for="(item,index) in wpn.rapid_fire" :key="index" >{{item}}</p>
      </div>
    </div>
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
        elementHeight: 64,
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
    calcAmmoCol(n){
      if(n.charAt(n.length-1)=="*") return "#92BFED"
      return "#FFF"
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
  border-color: var(--border-tree-item);
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
  height: 144px;
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
.more-values{
  position: absolute;
  font-size: 8pt;
  left: 5px;
  top: 44px;
}
.more-values>p{
  display: inline;
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


  .row{
    margin: 0;
    position: relative;
    text-align: left;
  }
  .col-container{
    text-align: left;
  }
  .col-vert{
    display: inline-block;
    text-align: left;
    vertical-align: top;
    text-align: left;
  }
  .col-vert>p{
    margin:0 3px 0 0px;
    font-size: 8pt;
    text-align: center;
  }
  .col-vert>h5{
    margin: 4px 0 0 0;
    text-align: center;
  }
  .vbr{
    padding: 0 5px 0 5px;
    display: inline-block;
  }
  p.darker{
    color: #AAA;
    margin-left:3px
  }
</style>