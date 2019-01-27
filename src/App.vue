<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	created() {
		this.resize();
	},
	methods: {
		resize() {
            $(window).resize(() => {
                let w = $(window).width();
                $('html').css({fontSize: w / 375 * 100 + 'px'});
                $('body').css({fontSize: '0.12rem'});
            });
        }
	}
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
}
</style>
