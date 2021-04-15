<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style scoped>
.content {
  grid-area: content;
  background-color: azure;
  padding: 20px;
}
</style>