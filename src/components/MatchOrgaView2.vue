<template>
  <div class="fixed">
    <div class="p-5 mt-0 h-screen bg-white rounded-xl overflow-hidden">
      <p class="mt-5 text-lg font-arial">Match organisé</p>
      <div class="h-8"></div>
      <info-match-orga
        image="public\terrainfoot2.jpg"
        sport="public\images\ballonfoot.png"
        nom="Test"
        regle="Match de foot 6 contre 6 "
      />

      <Detaillematchorga
        date="Vendredi 10 Juin "
        heure="8h00"
        participants="  74 participants "
        actuel="(68 actuellement)  "
        organisateur="David Malsot"
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

  
 
