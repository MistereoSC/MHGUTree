<template>
  <div>
    <Navbar title="Heavy Bowgun"></Navbar>
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
  import Tree from '../../public/json/weapons/trees/FLAT_heavybowgun.json'

  export default {
  name: 'P_HeavyBowgun',
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
    console.log(this.wpntree.length+" items loaded for Heavy Bowgun.")
  },
  methods: {
    filterApply(t){
      for(var i = 0; i <this.wpntree.length; i++){
        this.wpntree[i].filtered=false;
        if(parseInt(this.wpntree[i].data.affinity)<t.aff){
          this.wpntree[i].filtered=true;
          continue;
        }
        if(this.wpntree[i].data.defense<t.def){
          this.wpntree[i].filtered=true;
          continue;
        }
        if(this.wpntree[i].data.attack<t.atk){
          this.wpntree[i].filtered=true;
          continue;
        }
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
