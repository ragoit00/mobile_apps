<template>
    <div 
      class="toggle-switch" 
      :class="{ checked: modelValue }" 
      @click="toggle" >
      </div>
  </template>
  
  <script>
  export default {
    props: {
      modelValue: {
        required: true,
        type: Boolean,
      },
    },
    methods: {
      toggle() {
        this.$emit('update:modelValue', !this.modelValue);
      },
    },
  };
  </script>
  
