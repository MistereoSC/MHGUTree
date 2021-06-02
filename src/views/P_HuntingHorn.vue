<template>
  <div>
    <Navbar title="Hunting Horn"></Navbar>
    <Filter 
      @reset="filterReset" 
      @apply="filterApply"
      special="HH"
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
        special="HH"
      ></BannerWeaponDefault> 
    </div>
  </div>
</template>

<script>
  import Navbar from  '../components/Navbar.vue'
  import Filter from  '../components/TreeFilter.vue'
  import BannerWeaponDefault from '../components/BannerWeaponDefault.vue'
  import Tree from '../../public/json/weapons/trees/FLAT_huntinghorn.json'

  export default {
  name: 'P_HuntingHorn',
  components: {
    Navbar,
    Filter,
    BannerWeaponDefault
  },
  data () {
    return {
      wpntree: Tree,
    }
  },
  created () {
    this.wpntree = Tree
    for(var i = 0; i <this.wpntree.length; i++){
      this.wpntree[i].filtered=false
    }
    console.log(this.wpntree.length+" items loaded for Hunting Horn.")
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
        if(t.shell!=="Any"){
          if(this.wpntree[i].data.shelling_type.substr(0,this.wpntree[i].data.shelling_type.indexOf(' ')) !== t.shell){ 
              this.wpntree[i].filtered=true;
              continue;
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
        for(var c=0;c<8;c++){
          var n = "";
          switch(c){
            case 0:
              n="C"
              break
            case 1:
              n="B"
              break
            case 2:
              n="G"
              break
            case 3:
              n="O"
              break
            case 4:
              n="P"
              break
            case 5:
              n="R"
              break
            case 6:
              n="W"
              break
            case 7:
              n="Y"
              break
          }
          if(t.notes[c]==1){
            if(this.wpntree[i].data.notes[0] !== n && this.wpntree[i].data.notes[1] !== n && this.wpntree[i].data.notes[2] !== n){
              this.wpntree[i].filtered=true;
              continue
            }
          }
          if(t.notes[c]==2){
              if(this.wpntree[i].data.notes[0] == n || this.wpntree[i].data.notes[1] == n || this.wpntree[i].data.notes[2] == n){
              this.wpntree[i].filtered=true;
              continue
            }
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
    min-width: 3680px;
  }
</style>
