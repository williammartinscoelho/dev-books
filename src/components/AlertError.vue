<template>
    <v-snackbar
        v-model="$snackbarShow"
        right
        top
        tile
        :color="$snackbarColor"
    >
        {{ $snackbarText }}

        <template v-slot:action="{ attrs }">
            <v-btn
                text
                v-bind="attrs"
                @click="$snackbarShow = false"
            >
                Fechar
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    name: "AlertError"
}
</script>

<style scoped>

</style>