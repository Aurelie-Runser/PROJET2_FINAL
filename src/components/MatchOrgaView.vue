<template>
<div class="fixed">
  <div class="p-5 mt-0 h-screen bg-white rounded-xl overflow-hidden">
    <p class="mt-5 text-lg font-arial">Match organisé</p>
    <div class="h-8"></div>
    <info-match-orga
      image="public\terrainfoot2.jpg"
      sport="public\images\ballonfoot.png"
      nom="Terrain de Foot Municipal"
      regle="Match de foot 6 contre 6 "
    />

    <Detaillematchorga
      date="Vendredi 5 Avril "
      heure="14h30"
      participants="  12 participants "
      actuel="(7 actuellement)  "
      organisateur="Thomas Alonzo"
    />
  </div>
</div>
</template>


<script>
import infoMatchOrga from "../components/InfoMatchOrga.vue";
import Detaillematchorga from "../components/DetaillematchorgaView.vue";

export default {
  name: "MatchOrgaView",
  components: {
    infoMatchOrga,
    Detaillematchorga,
  },
};
</script>





<!--   props: {
    nom: { type: String },
    sport: { type: String },
    image: { type: String },
    regle: { type: String },
  }, -->

  
 
