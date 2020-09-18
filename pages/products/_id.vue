<template>
  <b-container id="product-container">
    <b-row>
      <b-col class="text-center">
        <Product />
      </b-col>
      <b-col lg="3" class="mb-3">
        <SideBar class="mt-2" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideBar from "~/components/SideBar";
import Product from "~/components/Product/Product";

export default {
  components: {
    SideBar,
    Product
  }
};
</script>

<style lang="scss" scoped>
#product-container {
  margin-top: 140px;
}
</style>