<template>
  <div class="task">
    <h3>
      {{ restaurant.name }}
    </h3>
    <p>{{ restaurant.address1 }}</p>
    <p>{{ restaurant.address2 }}</p>
    <Button @btn-click="getMenu(restaurant.id)" class="btn" />
    <Menu :menu="menu" />
  </div>
</template>

<script   lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import Button from "./Button.vue";
import Menu from "./Menu.vue";

export default defineComponent({
  name: "Restaurant",
  props: {
    restaurant: Object,
  },
  components: {
    Button,
    Menu,
  },
  data() {
    return {
      menu: [],
    };
  },
  methods: {
    getMenu(id: number) {
      axios
        .get(
          `https://private-anon-20b4edd8c6-pizzaapp.apiary-mock.com/restaurants/${id}/menu`
        )
        .then((res) => {
          this.menu = res.data;
        })
        .catch((err) => console.log(err.message));
    },
  },
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
