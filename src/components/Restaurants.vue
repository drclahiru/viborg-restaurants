<template>
  <div :key="restaurant.id" v-for="restaurant in restaurants">
    <Restaurant :restaurant="restaurant" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Restaurant from "./Restaurant.vue";

export default defineComponent({
  name: "Restaurants",
  props: {
    restaurants: Object,
  },
  components: {
    Restaurant,
  },
});
</script>
