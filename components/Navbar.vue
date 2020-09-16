<template>
  <header id="nav">
    <nav>
      <input type="checkbox" id="res-menu" />
      <label for="res-menu">
        <i id="sing-one" class="fa fa-bars"></i>
        <i id="sing-two" class="fa fa-times"></i>
      </label>
      <ul>
        <li>
          <nuxt-link class="n-link" to="/" tag="a">Anasayfa</nuxt-link>
        </li>
        <li>
          <nuxt-link class="n-link" to="/" tag="a">PROFİL</nuxt-link>
        </li>
        <li>
          <nuxt-link class="n-link" to="/" tag="a">KATEGORİLER</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="div-btn">
      <button class="n-btn btn">
        Çıkış
        <nuxt-link to="/" tag="a"></nuxt-link>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        let navbar = document.querySelector("#nav");
        let button = document.querySelector(".n-btn");
        let nav_classes = navbar.classList;
        if (document.documentElement.scrollTop >= 50) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #122e50;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 31;
  transition: 0.4s;
  padding: 1rem 2.5rem;

  #res-menu {
    display: none;
  }
  label #sing-one,
  label #sing-two {
    float: left;
    display: none;
    color: #fff;
    font-size: 25px;
    line-height: 50px;
    cursor: pointer;
  }

  nav {
    ul {
      padding-top: 0;
      left: 0;
      li {
        display: inline-block;
        padding: 0 0 5px 0;
        margin-right: 40px;
        .n-link {
          text-transform: uppercase;
          text-decoration: none;
          color: white;
          transition: all 0.4s;

          &:hover,
          &:active {
            text-shadow: 1px 0 20px #1da1f2;
            color: #64e0ff;
            font-size: 16.2px;
          }
        }
      }
    }
  }

  .div-btn {
    margin-top: 17px;
    margin-left: auto;
    max-height: 50px;

    .n-btn {
      text-transform: uppercase;
      color: #96d7ff;
      background-color: transparent;
      border: 1px solid #96d7ff;
      border-radius: 5px;
      transition: all 0.2s;

      &:hover {
        color: #014aa3 !important;
        border-color: #96d7ff !important;
        background-color: #fff !important;
        box-shadow: 1px 0 10px #96d7ff !important;
        text-shadow: 1px 0 15px #96d7ff !important;
        font-size: 16.1px;
      }
    }
  }
}

.shrink {
  padding: 0 25px;
}
</style>>