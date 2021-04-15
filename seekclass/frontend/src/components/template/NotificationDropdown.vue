<template>
    <div class="user-dropdown1">
      <div class="user-dropdown-img1">
        <div style="font-size: 25px">
          <a href=""><i class="fa fa-bell" aria-hidden="false"></i></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	name: 'NotificationDropdown',
}
</script>

<style scoped>
.user-dropdown1 {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}
.user-dropdown1:hover {
  background-color: rgb(11, 78, 11);
}
.user-dropdown-img1 {
  margin: 0px 10px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-dropdown-img1 > i {
  justify-content: center;
}
</style>