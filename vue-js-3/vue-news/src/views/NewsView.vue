<template>
  <div><list-item></list-item></div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixIn from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem,
  },
  mixins: [ListMixIn],
};
</script>

<style></style>
