<template>
  <div class="tree-container">
    <BannerWeaponDefault 
      v-for="item in wpntree" 
      :key="item.id" 
      :posH="item.hDepth" 
      :posV="item.globalVDepth"
      :shiftH="item.vDepth"
      :wpn="item.data"
      :forkDepth="item.relativeVDepth"
    ></BannerWeaponDefault> 
  </div>
</template>

<script>
  import BannerWeaponDefault from '../components/BannerWeaponDefault.vue'
  import Tree from '../../public/json/weapons/trees/FLAT_longsword.json'

  export default {
  name: 'P_Longsword',
  components: {
    BannerWeaponDefault
  },
  date () {
    return {
      wpntree: Tree
    }
  },
  created () {
    this.wpntree = Tree
    console.log("Weapon tree loaded for Longsword...")
    console.log(this.wpntree.length+" items loaded.")
  },
}
</script>

<style scoped>
  .tree-container{
    position: absolute;
    margin: 80px 30px;
    min-width: 4400px;
  }
</style>
