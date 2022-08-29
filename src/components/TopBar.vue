<template>
    <v-app-bar app :dark="$darkMode" class="bg-primary">
        <v-app-bar-nav-icon @click="handleClick()" />

        <v-spacer></v-spacer>
        <v-switch
            v-model="$darkMode"
            label="Dark Mode"
            hide-details
        />
    </v-app-bar>
</template>

<script>
export default {
    name: "TopBar",
    data() {
        return {
        }
    },
    methods: {
        handleClick() {
           this.$drawer = !this.$drawer
        }
    }
}
</script>

<style scoped>

</style>