<template>
  <div
    class="task"
    :key="shoppingCartItem.id"
    v-for="shoppingCartItem in shoppingCartItems"
  >
    <ShoppingCartItem
      @delete-item="deleteItem"
      :shoppingCartItem="shoppingCartItem"
    />
  </div>
  <!-- Move to a component -->
  <form @submit.prevent="getPreviousOrder">
    <input type="number" placeholder="e.g. 1234412" v-model="orderId" />
    <input class="btn" type="submit" value="Fetch last order" />
  </form>
  <!-- TODO: Need RxDB for this part -->
  <!-- <button @click="saveOrder" class="btn">Save</button> -->
  <button @click="sendOrder" class="btn">Proceed to payment</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import ShoppingCartItem from "./ShoppingCartItem.vue";
import { useOrderStore } from "@/stores/order";

export default defineComponent({
  name: "ShoppingCart",
  components: {
    ShoppingCartItem,
  },
  data() {
    return {
      shoppingCartItems: useOrderStore().order,
      orderId: 0,
    };
  },
  methods: {
    deleteItem(id: number) {
      useOrderStore().delete(id);
    },
    sendOrder() {
      axios
        .post(
          "https://private-anon-20b4edd8c6-pizzaapp.apiary-mock.com/orders/",
          this.shoppingCartItems
        )
        .then((response) => (this.orderId = response.data.id))
        .catch((err) => console.log(err.message));
    },
    getPreviousOrder(e: Event) {
      axios
        .get(
          `https://private-anon-20b4edd8c6-pizzaapp.apiary-mock.com/orders/${this.orderId}`
        )
        .then((res) => {
          this.shoppingCartItems = res.data;
        })
        .catch((err) => console.log(err.message));
    },
  },
});
</script>
