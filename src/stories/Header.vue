<script lang="ts" setup>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
import ToggleButton from "../components/ToggleButton.vue";
</script>

<template>
  <header>
    <div class="bg-image"></div>
    <div class="header">
      <h1 class="logo"><b>netflix</b>roulette</h1>
      <div class="content">
        <h1 class="title">Find your movie</h1>
        <div class="search">
          <TextInput />
          <Button label="Search" />
        </div>
        <ToggleButton
          className="toggle"
          :buttons="['Title', 'Gengre']"
          label="search by"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo {
  color: var(--primary);
  font-size: 1.5rem;
}
b {
  font-weight: bold;
}
header {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  position: relative;
}
.bg-image {
  background-image: url("../../src//assets/header.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(2px);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.bg-image:before {
  background-color: var(--color-background-blur);
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}
.header {
  z-index: 9999;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 48px;
}
.title {
  text-transform: uppercase;
  letter-spacing: 0.3rem;
}
.content {
  padding: 32px 48px;
}
.search {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 16px;
  margin-top: 24px;
}
.toggle {
  margin-top: 24px;
}
</style>
