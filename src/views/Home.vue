<template>
  <div class="home">
    <AddProducts />
  </div>
</template>

<script>
// @ is an alias to /src
import AddProducts from "@/components/AddProducts.vue";

export default {
  name: "Home",
  components: {
    AddProducts,
  },
};
</script>
