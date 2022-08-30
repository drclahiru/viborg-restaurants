<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <Restaurants @menu-item="getMenuItem" :restaurants="restaurants" />
      </div>
      <div class="col-6">
        <ShoppingCart />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Restaurants from "./components/Restaurants.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Restaurants,
    ShoppingCart,
  },
  data() {
    return {
      restaurants: [],
      shoppingCartItems: [],
    };
  },
  methods: {
    getMenuItem(itemId: number) {
      console.log(itemId);
    },
  },
  mounted() {
    axios
      .get(
        "https://private-anon-20b4edd8c6-pizzaapp.apiary-mock.com/restaurants/"
      )
      .then((res) => {
        this.restaurants = res.data;
      })
      .catch((err) => console.log(err.message));
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 1000px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
