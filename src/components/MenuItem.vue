<template>
  <div class="task" @click="addOrder(item)">
    <h3>
      {{ item.name }}
    </h3>
    <p>{{ item.category }}</p>
    <p>{{ item.price }}</p>
    <hr class="line">
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import { useOrderStore } from "../stores/order";

export default defineComponent({
  name: "MenuItem",
  props: {
    item: Object,
  },
  data() {
    return { order: useOrderStore() };
  },
  methods: {
    addOrder(item: Object) {
      useOrderStore().create(item);
    },
  },
});
</script>
