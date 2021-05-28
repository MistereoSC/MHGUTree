<template>
  <div>
    <SelectMenu :title='getMenuTitle'></SelectMenu>
    <router-view/>
  </div>
</template>

<script>
import SelectMenu from './components/SelectMenu'
export default {
  name: 'App',
  components: {
    SelectMenu
  },
  computed: {
    getMenuTitle(){
      switch(this.$route.name){
        case 'Tree_GS':
          return 'Great Sword'
        case 'Tree_LS':
          return 'Long Sword'
        case 'Tree_SNS':
          return 'Sword and Shield'
        case 'Tree_DB':
          return 'Dual Blades'
        case 'Tree_H':
          return 'Hammer'
        case 'Tree_HH':
          return 'Hunting Horn'
        case 'Tree_L':
          return 'Lance'
        case 'Tree_GL':
          return 'Gunlance'
        case 'Tree_SA':
          return 'Switch Axe'
        case 'Tree_CB':
          return 'Charge Blade'
        case 'Tree_IG':
          return 'Insect Glaive'
        case 'Tree_LBG':
          return 'Light Bowgun'
        case 'Tree_HBG':
          return 'Heavy Bowgun'
        case 'Tree_B':
          return 'Bow'
        default: 
          return '404'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F0F0F0;
}


</style>
