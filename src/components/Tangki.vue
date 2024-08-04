<template>
  Tangki<br/>
  <div>Jari-jari: {{ state.diameter / 2 }} cm</div>
  <div>Tinggi: {{ state.height / 2 }} cm</div>
  <div>Volume: {{ calcVolume()/1000 }} liter</div>
</template>

<script>
  import {reactive} from '@vue/reactivity'

  export default{
    props: [],

    setup(){
      const state = reactive({
        height: 100,
        diameter: 80        
      })

      const calcVolume = ()=>{
        let circleArea = 22/7 * ((state.diameter / 2) ** 2)        
        return circleArea * state.height
      }
      return {
        state,
        calcVolume
      }
    }
  }
</script>