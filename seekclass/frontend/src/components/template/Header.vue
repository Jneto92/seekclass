<template>
  <header class="header">
    <a class="toggle" @click="toggleMenu" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title">
      <router-link to="/">{{ title }}</router-link>
    </h1>
    <NotificationDropdown v-if="!hideNotification"/>
    <UserDropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from "./UserDropdown";
import NotificationDropdown from "./NotificationDropdown"
export default {
  name: "Header",
  components: {
    UserDropdown,
	NotificationDropdown
  },
  props: {
    title: String,
    hideToggle: Boolean,
    hideUserDropdown: Boolean,
	hideNotification: Boolean
  },
  computed: {
    icon() {
      return this.$store.state.isMenuVisible
        ? "fa-angle-left"
        : "fa-angle-down";
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
};
</script>

<style scoped>
.header {
  grid-area: header;
  background-color: rgb(62, 151, 62);
  display: flex;
  justify-content: center;
  align-items: center;
}
Header.header > h1 {
  color: white;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}

.title {
  
  flex-grow: 1;
  
}
.title a {
  color: #fff;
  text-decoration: none;
}

.title a:hover{
  color: #fff;
  text-decoration: none;
}
header.header > a.toggle {
  width: 60px;
  height: 100%;
  color: #fff;
  justify-self: flex-start;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
}
header.header > a.toggle:hover {
  background-color: rgb(11, 78, 11);
}


</style>