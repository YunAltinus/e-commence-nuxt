<template>
  <b-container id="container">
    <b-row>
      <b-col md="4">
        <SideBar class="mt-2" />
      </b-col>
      <b-col class="con-div">
        <h2 class="text-center mt-4 mt-md-0">YENİ ÜRÜNLER</h2>
        <ProductList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideBar from "~/components/Home/SideBar";
import ProductList from "~/components/Home/ProductList";

export default {
  components: {
    SideBar,
    ProductList
  }
};
</script>

<style lang="scss" scoped>
#container {
  margin-top: 140px;
  .con-div {
    text-align: center;
    h2 {
      color: #122E50;
    }
  }
}
</style>
