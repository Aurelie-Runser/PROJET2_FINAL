<template>
    <div class="w-56 h-auto mx-4 p-2 rounded-2xl overflow-hidden shadow-md shadow-gray-500 font-normal">
        <figure>
            <img src="../../public/basket1.jpg" alt="Terrain de basket"
                 class="w-full h-28 object-cover rounded-2xl">
            <figcaption class="my-3 text-sm">Terrain</figcaption> <!-- Ajoutez ici la base donné-->
        </figure>
        <div class="flex justify-between items-center text-lg">
            <div class="flex items-center">
                <fleche class="mx-1 w-5"/>
                <p>100 m</p>    <!--base de donnée-->
            </div>
            <div class="flex items-center">
                <etoile class="mx-1"/>
                <p>3.8</p>      <!--base de donnée-->
            </div>
            <div>
                <plus/>
            </div>
        </div>
    </div>
</template>

<script>
import fleche from "../components/icons/flecheDistance.vue"
import etoile from "../components/icons/etoile.vue"
import plus from "../components/icons/buttonPlusTerrain.vue"

export default{
    name:"cartTerrain",
    components:{fleche, etoile, plus},
    data(){
      return {
      } 
    },
}
</script>
