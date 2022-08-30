<template>
  <div :key="item.id" v-for="item in menu">
    <MenuItem :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuItem from "./MenuItem.vue";

export default defineComponent({
  name: "Menu",
  props: {
    menu: Object,
  },
  components: {
    MenuItem,
  },
});
</script>

<style scope>
hr.new4 {
  border: 1px solid black;
}

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