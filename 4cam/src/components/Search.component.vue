<template>
    <div class="search">
        <input name="searchbar" id="searchbar" placeholder="Rechercher une enseigne...">
    </div>
</template>

<script>
export default {
    name: 'searchbar',
}
</script>

<style>

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
        border: 1px solid #424BB3;
        border-radius: 15px;
    }
    #searchbar:focus {
        outline: none;
        box-shadow: 0px 5px 20px #424bb380;
    }
</style>