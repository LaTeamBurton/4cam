<template>
  <nav>
    <ul>
      <li>
        <router-link :to="{ name: 'HomePage' }">Carte</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'List' }">Liste</router-link>
      </li>
    </ul>
    
  </nav>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>

</style>