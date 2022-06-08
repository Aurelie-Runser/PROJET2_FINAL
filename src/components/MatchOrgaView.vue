<template>
  <div class="fixed">
    <div class="p-5 mt-0 h-screen bg-white rounded-xl overflow-hidden">
      <p class="mt-5 text-lg font-arial">Match organisé</p>
      <div class="h-8"></div>
      <info-match-orga
        :image="image"
        :sport="sport"
        :nom="nom"
        :regle="regle"
      />

      <Detaillematchorga
        :date="date"
        :heure="heure"
        :participants="participants"
        :actuel="actuel"
        :organisateur="organisateur"
        :notevue="notevue"
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
  props: {
    date: { type: String },
    nom: { type: String },
    sport: { type: String },
    image: { type: String },
    regle: { type: String },
    heure: { type: String },
    participants: { type: String },
    actuel: { type: String },
    organisateur: { type: String },
    notevue: { type: String },
  },
};
</script>





<!--   props: {
    nom: { type: String },
    sport: { type: String },
    image: { type: String },
    regle: { type: String },
  }, -->

  
 
