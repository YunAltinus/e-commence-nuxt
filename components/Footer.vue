<template>
  <footer class="mt-5 pt-5 footer">
    <b-container>
      <b-row class="mb-4">
        <b-col
          class="my-3"
          md="6"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio itaque ullam voluptates quaerat quam dignissimos provident a, atque animi.</b-col>
        <b-col
          class="my-3"
          md="6"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officiis itaque perferendis accusantium numquam totam, ducimus facilis maiores excepturi similique.</b-col>
      </b-row>
      <div id="contact" class="pt-3">
        <ul>
          <li class="m-4">
            <a href="/">
              <i class="fa fa-facebook white-text fa-2x"></i>
            </a>
          </li>
          <li class="m-4">
            <a href="/">
              <i class="fa fa-instagram white-text fa-2x" />
            </a>
          </li>
          <li class="m-4">
            <a href="/">
              <i class="fa fa-twitter white-text fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    </b-container>
    <div id="yunaltinus" class="py-4 px-4">
      <div>E-commence</div>
      <div id="copy">
        <span style="font-size: 10px;">&copy;</span>
        {{ new Date().getFullYear() }} | Tüm hakları saklıdır.
      </div>

      <div id="developer-contact">
        <a href="https://github.com/YunAltinus" target="_blank">By Yunus Altın</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background: #0f2642;
  color: white;

  #contact {
    border-top: 1px solid #678;

    ul {
      text-align: center;

      li {
        display: inline-block;
        text-align: center;

        a {
          text-align: center;
          color: white;
          text-decoration: none;
          .fa-twitter {
            transition: all 0.6s;

            &:hover {
              color: #1da1f2;
            }
          }
          .fa-facebook {
            transition: all 0.6s;

            &:hover {
              background: linear-gradient(
                30deg,
                rgba(2, 103, 226, 1) 44%,
                rgba(23, 168, 252, 1) 74%
              );
              text-shadow: none;
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          .fa-instagram {
            transition: all 0.6s;

            &:hover {
              background: linear-gradient(
                45deg,
                rgba(255, 223, 158, 1) 0%,
                rgba(229, 105, 105, 1) 50%,
                rgba(138, 73, 161, 1) 100%
              ) !important;
              text-shadow: none !important;
              background-clip: text !important;
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
            }
          }
        }
      }
    }
  }

  #yunaltinus {
    color: #ddd;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    background: linear-gradient(
      0deg,
      rgba(15, 36, 59, 1) 2%,
      rgba(16, 33, 50, 1) 65%
    );
    text-align: center;
    border-top: 1px solid #151a20;
    .copy {
      padding-right: 10px;
    }

    #developer-contact {
      a {
        color: rgba(58, 83, 90, 0.4);
      }
    }
  }
}
</style>