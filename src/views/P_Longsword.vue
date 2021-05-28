<template>
  <div>
    <Navbar title="Long Sword"></Navbar>
    <Filter 
      @reset="filterReset" 
      @apply="filterApply"
    ></Filter>
    <div class="tree-container">
      <BannerWeaponDefault 
        v-for="item in wpntree" 
        :key="item.id" 
        :posH="item.hDepth" 
        :posV="item.globalVDepth"
        :shiftH="item.vDepth"
        :wpn="item.data"
        :forkDepth="item.relativeVDepth"
        :filtered="item.filtered"
      ></BannerWeaponDefault> 
    </div>
  </div>
</template>

<script>
  import Navbar from  '../components/Navbar.vue'
  import Filter from  '../components/TreeFilter.vue'
  import BannerWeaponDefault from '../components/BannerWeaponDefault.vue'
  import Tree from '../../public/json/weapons/trees/FLAT_longsword.json'

  export default {
  name: 'P_Longsword',
  components: {
    Navbar,
    Filter,
    BannerWeaponDefault
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
    console.log(this.wpntree.length+" items loaded for Long Sword.")
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
        if(t.sharp!=="Any"){
          switch(t.sharp){
            case 'Green':
              if(this.wpntree[i].data.sharpness[4] > 0 || this.wpntree[i].data.sharpness[5] > 0 || this.wpntree[i].data.sharpness[6] > 0){ 
                this.wpntree[i].filtered=true;
              continue;
              }
              break
            case 'Blue':
              if(this.wpntree[i].data.sharpness[4] == 0 && this.wpntree[i].data.sharpness[5] == 0 && this.wpntree[i].data.sharpness[6] == 0){ 
                this.wpntree[i].filtered=true;
              continue;
              }
              break
            case 'White':
              if(this.wpntree[i].data.sharpness[5] == 0 && this.wpntree[i].data.sharpness[6] == 0){ 
                this.wpntree[i].filtered=true;
              continue;
              }
              break
            case 'Purple':
              if(this.wpntree[i].data.sharpness[6] == 0){ 
                this.wpntree[i].filtered=true;
              continue;
              }
              break
            default:
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
