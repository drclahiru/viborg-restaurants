<template>
  <button @click="onClick()" class="btn">Menu</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
});
</script>
