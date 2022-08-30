<template>
  <div class="task" @click="addOrder(item)">
    <h3>
      {{ item.name }}
    </h3>
    <p>{{ item.category }}</p>
    <p>{{ item.price }}</p>
    <hr class="line" />
  </div>
</template>

<script  lang="ts">
import { defineComponent, PropType } from "vue";
import { useOrderStore, OrderItemType } from "@/stores/order";

export default defineComponent({
  name: "MenuItem",
  props: {
    item: Object as PropType<OrderItemType>,
  },
  data() {
    return { order: useOrderStore() };
  },
  methods: {
    addOrder(item: OrderItemType) {
      useOrderStore().create(item);
    },
  },
});
</script>
