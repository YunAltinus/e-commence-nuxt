<template>
  <b-list-group id="sidebar-list">
    <b-list-group-item class="sidebar-list-item" v-for="i in 5" :key="i">
      <i class="fa fa-angle-double-right mr-1"></i>Cras justo odio
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#sidebar-list .sidebar-list-item {
  transition: all 0.2s ease-out;

  &:hover,
  &:active {
    margin-right: -8px;

    border-left: 6px solid #0f2642;
    background-color: #f7f9fc;
    i {
      font-size: 20px;
    }
  }
}
</style>>