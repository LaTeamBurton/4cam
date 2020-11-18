<template>
  <input name="searchbar" id="searchbar" placeholder="Rechercher une enseigne...">
</template>

<script>
export default {
    name: 'searchbar',
}
</script>

<style>
    #searchbar {
        height: 50px;
        width: 90%;
        color: blue;
        padding-left: 10px;
        border: 1px solid #424BB3;
        border-radius: 15px;
    }
    #searchbar:focus {
        outline: none;
        box-shadow: 0px 5px 20px #424bb380;
    }
</style>