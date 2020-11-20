<template>
  <div class="markets">
		<ul v-for="market in markets" v-bind:key="market.nom">
			<li><Market v-bind:market="this.market"/></li>
		</ul>
	</div>
</template>

<script>
import Market from '../components/Market.vue'
export default {
	name: 'List',
	components: {
		Market
	},
	data() {
		return {
			market: {}
		}
	},
Metods: {
		getMarkets() {
			this.$store.dispatch('getMarkets')
		}
	},
	created() {
		this.getMarkets()
		// this.market = this.$store.getters.getMarkets
		// console.log(this.market);
	},
	computed: {
		markets() {
			return this.$store.getters.getMarkets
		}
	}
}
</script>

<style>

</style>