<template>
  <div id="product-list">
    <div id="list-card" class="mx-2 mb-2" v-for="i in 10" :key="i">
      <b-card
        class="text-center"
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
      >
        <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

        <button class="btn">
          <nuxt-link class="n-link" to="/products/:id" tag="a">Go somewhere</nuxt-link>
        </button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  #list-card {
    max-width: 47%;
    border-radius: 5px;
    transition: all 0.2s;
    &:hover,
    &:active {
      box-shadow: 0 0 3px #014aa3;
    }
    :first-child {
      color: #122e50;
    }
  }
}
</style>