<template>
  <div class="search">
    <input
      name="searchbar"
      id="searchbar"
      placeholder="Rechercher une enseigne..."
      @click="changeBackground()"
      v-model="value"
      @blur="focusOut"
    />
  </div>
</template>

<script>
export default {
  name: "searchbar",
  data() {
    return {
      focused: false,
    };
  },
  props: {
    value: {
      type: String,
      required: false,
    },
  },
  watch: {
    value() {
      this.$emit("input", this.value);
    },
  },
  methods: {
    changeBackground() {
      this.$emit("clicked", true);
      this.focused = true;
    },
    focusOut() {
			this.$emit('blur', true)
      this.focused = false;
    },
  },
};
</script>

<style lang="scss">
.search {
  width: 100%;
  position: absolute;
  margin: 70px auto;
}
#searchbar {
  height: 50px;
  width: 90%;
  top: 0px;
  padding-left: 10px;
  border: 1px solid #424bb3;
  border-radius: 15px;
  &:focus {
    outline: none;
    box-shadow: 0px 5px 20px #424bb380;
  }
}
</style>