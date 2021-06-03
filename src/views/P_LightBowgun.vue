<template>
  <div>
    <Navbar title="Light Bowgun"></Navbar>
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
  import Filter from  '../components/TreeFilter_Bowgun.vue'
  import BannerWeapon from '../components/BannerWeaponBowgun.vue'
  import Tree from '../../public/json/weapons/trees/FLAT_lightbowgun.json'

  export default {
  name: 'P_LightBowgun',
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
    console.log(this.wpntree.length+" items loaded for Light Bowgun.")
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
