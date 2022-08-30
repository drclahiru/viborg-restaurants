<template>
  <div>
    <h3>
      {{ shoppingCartItem.name }}
      <i
        @click="$emit('delete-item', shoppingCartItem.id)"
        class="fas fa-times"
      ></i>
    </h3>
    <p>{{ shoppingCartItem.category }}</p>
    <p>{{ shoppingCartItem.price }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShoppingCartItem",
  props: {
    shoppingCartItem: Object,
  },
  emits: ["delete-item"],
});
</script>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
