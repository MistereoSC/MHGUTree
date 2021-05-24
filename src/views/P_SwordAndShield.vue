<template>
  <div class="main-w">
    <div class="tree-container">
      <BannerWeaponDefault 
        v-for="item in wpntree" 
        :key="item.id" 
        :posH="item.hDepth" 
        :posV="item.globalVDepth"
        :shiftH="item.vDepth"
        :wpn="item.data"
      ></BannerWeaponDefault> 
    </div>
  </div>

</template>

<script>
  import BannerWeaponDefault from '../components/BannerWeaponDefault.vue'
  import Tree from '../../public/json/weapons/trees/FLAT_swordandshield.json'

  export default {
  name: 'P_SwordAndShield',
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
    console.log("Weapon tree loaded for Sword and Shield...")
    console.log(this.wpntree.length+" items loaded.")
  },
}
</script>

<style scoped>
  .tree-container{
    position: absolute;
    margin-left: 10px;
  }
</style>
