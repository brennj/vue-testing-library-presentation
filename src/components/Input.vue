<template>
  <div class="fancyInput">
    <label :for="id" v-if="$slots.default"><slot /></label>
    <input
      :id="id"
      v-bind="$attrs"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ["id"],
  inheritAttrs: false
};
</script>

<style scoped>
.fancyInput {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
}
</style>
