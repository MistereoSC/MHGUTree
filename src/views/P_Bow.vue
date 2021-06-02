<template>
  <div>
    <Navbar title="Bow"></Navbar>
    <Filter 
      @reset="filterReset" 
      @apply="filterApply"
    ></Filter>
    <div class="tree-container">
      <BannerWeapon
        v-for="item in wpntree" 
        :key="item.id" 
        :posH="item.hDepth" 
        :posV="item.globalVDepth"
        :shiftH="item.vDepth"
        :wpn="item.data"
        :forkDepth="item.relativeVDepth"
        :filtered="item.filtered"
      ></BannerWeapon> 
    </div>
  </div>
</template>

<script>
  import Navbar from  '../components/Navbar.vue'
  import Filter from  '../components/TreeFilter_Bow.vue'
  import BannerWeapon from '../components/BannerWeaponBow.vue'
  import Tree from '../../public/json/weapons/trees/FLAT_bow.json'

  export default {
  name: 'P_Bow',
  components: {
    Navbar,
    Filter,
    BannerWeapon,
  },
  data () {
    return {
      wpntree: Tree
    }
  },
  created () {
    this.wpntree = Tree
    for(var i = 0; i <this.wpntree.length; i++){
      this.wpntree[i].filtered=false
    }
    console.log(this.wpntree.length+" items loaded for Bow.")
  },
  methods: {
    filterApply(t){
      for(var i = 0; i <this.wpntree.length; i++){
        this.wpntree[i].filtered=false;
        if(t.slots>0){
          if(this.wpntree[i].data.slots<t.slots){ 
            this.wpntree[i].filtered=true;
            continue;
          }
        }
        if(t.element!=="Any"){
          if(t.element == "None"){
            if(this.wpntree[i].data.element !== ""){ 
              this.wpntree[i].filtered=true;
              continue;
            }
          }
          else{
            if(this.wpntree[i].data.element !== t.element){ 
              this.wpntree[i].filtered=true;
              continue;
            }
          }
        }
        for(var c=0;c<10;c++){
          if(t.coatings[c]&&!this.wpntree[i].data.coatings[c]){
              this.wpntree[i].filtered=true;
              continue;
          }
        }
        for(c=0;c<4;c++){
          if(!t.charges[c][0] && this.wpntree[i].data.charges[c].substr(0,this.wpntree[i].data.charges[c].indexOf(' '))=="Rapid"){
            this.wpntree[i].filtered=true;
            continue;
          }
          if(!t.charges[c][1] && this.wpntree[i].data.charges[c].substr(0,this.wpntree[i].data.charges[c].indexOf(' '))=="Pierce"){
            this.wpntree[i].filtered=true;
            continue;
          }
          if(!t.charges[c][2] && this.wpntree[i].data.charges[c].substr(0,this.wpntree[i].data.charges[c].indexOf(' '))=="Spread"){
            this.wpntree[i].filtered=true;
            continue;
          }
          if(!t.charges[c][3] && this.wpntree[i].data.charges[c].substr(0,this.wpntree[i].data.charges[c].indexOf(' '))=="Heavy"){
            this.wpntree[i].filtered=true;
            continue;
          }
        }
        if(!t.charges[3][4] && this.wpntree[i].data.charges[3]==""){
          this.wpntree[i].filtered=true;
          continue;
        }
      }
    },
    filterReset(){
      for(var i = 0; i <this.wpntree.length; i++){
        this.wpntree[i].filtered=false
      }
    }
  }
}
</script>

<style scoped>
  .tree-container{
    position: absolute;
    margin: 80px 30px;
    min-width: 4400px;
  }
</style>
