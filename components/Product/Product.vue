<template>
  <div class="main-container">
    <div class="product-content">
      <div class="top-area">
        <div class="img-area">
          <img :src="imgSrc[imgIndex]" class="full-size-image" />
          <div class="small-size-images-area">
            <img
              v-for="(link,index) in imgSrc"
              :key="index"
              :src="link"
              class="small-size-images"
              @click="changeFullImage(index)"
            />
          </div>
        </div>
        <div class="info-area">
          <h4>Product title Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
          <span>ID: 123456789</span>
          <h5>$ 99.99</h5>
          <b-form-spinbutton style="color: #003c86" id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
          <span>Stock : 80</span>
          <div class="mt-3">
            <button class="btn ml-4" variant="danger">
              <nuxt-link class="n-link" to="#" tag="a">Buy now</nuxt-link>
            </button>
            <button class="btn ml-2" variant="warning">
              <nuxt-link class="n-link" to="#" tag="a">Add to cart</nuxt-link>
            </button>
          </div>
        </div>
      </div>
      <div class="product-description">
        <b-tabs content-class="mt-3">
          <b-tab title="Description" active>
            <p>I'm the first tab</p>
          </b-tab>
          <b-tab title="Features">
            <p>I'm the second tab</p>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: [
        "https://static.wixstatic.com/media/04839a_b4d0c16c316d49b68c12dee6f0920ce4.jpg",
        "https://octopus-electronics.com/uploads/products/1553687764Screenshot_2019-03-16_UPDATE_PRODUCT.png",
        "https://static.wixstatic.com/media/04839a_b4d0c16c316d49b68c12dee6f0920ce4.jpg",
        "https://octopus-electronics.com/uploads/products/1553687764Screenshot_2019-03-16_UPDATE_PRODUCT.png",
        "https://static.wixstatic.com/media/04839a_b4d0c16c316d49b68c12dee6f0920ce4.jpg",
        "https://octopus-electronics.com/uploads/products/1553687764Screenshot_2019-03-16_UPDATE_PRODUCT.png"
      ],
      imgIndex: 0,
      value: 7
    };
  },
  methods: {
    changeFullImage(index) {
      this.imgIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;

  .product-content {
    display: flex;
    flex-direction: column;
    width: 100%;

    .top-area {
      display: flex;

      .img-area {
        display: flex;
        flex-direction: column;
        width: 60%;

        .full-size-image {
          min-width: 300px;
          height: 400px;
          padding: 20px;
        }
        .small-size-images-area {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 20px;

          .small-size-images {
            width: 100px;
            height: 100px;
            margin-bottom: 10px;
          }
        }
      }

      .info-area {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 20px 20px 0 0;
      }
    }

    .product-description {
      margin: 20px;
    }
  }
}
</style>