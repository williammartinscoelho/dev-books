<template>
    <div>
        <v-card :color="$bgPrimary" :dark="$darkMode">
            <v-card-title>
                Autores
                <v-btn
                    elevation="2"
                    fab
                    dark
                    small
                    class="ml-4"
                    :color="$colorPrimary"
                    to="/authors/create"
                >
                    <v-icon dark>
                        mdi-plus
                    </v-icon>
                </v-btn>
                <v-spacer />
                <v-text-field
                    v-model="table.search"
                    append-icon="mdi-magnify"
                    label="Buscar"
                    single-line
                    hide-details
                    :color="$colorPrimary"
                />
            </v-card-title>

            <v-data-table
                class="bg-primary"
                :headers="table.headers"
                :items="authors"
                :search="table.search"
                :loading="loading.getAuthors"
                loading-text="Carregando..."
                :dark="$darkMode"
            >
                <v-progress-linear v-show="loading.getAuthors" slot="progress" :color="$colorPrimary" indeterminate />
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import API from '@/api.js'

export default {
    name: 'Authors',
    data() {
        return {
            authors: [],
            table: {
                search: '',
                headers: [
                    { text: 'ID', value: 'id',},
                    { text: 'Nome', value: 'nome' },
                    { text: 'Email', value: 'email' },
                ],
            },
            loading: {
                getAuthors: true,
            }
        }
    },
    computed: {

    },
    mounted() {
        this.getAuthors()
    },
    methods: {
        getAuthors() {
            this.loading.getAuthors = true

            API.getAuthors()
                .then(response => {
                    this.authors = response.data.reverse()
                })
                .finally(() => {
                    this.loading.getAuthors = false
                })
        }
    }
}
</script>

<style scoped>

</style>