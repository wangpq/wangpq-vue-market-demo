<template>
  <transition :name="transition">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  props: {
    transition: {
      type : String,
      default: "slide-y"
    },
  }
}
</script>
