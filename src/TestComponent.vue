<script lang="ts" setup>
import {ref} from "vue";

const counter = ref(10);
</script>
<template>
  <button @click="counter++">{{counter}}</button>
</template>