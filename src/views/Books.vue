<template>
    <div>
        <v-card :color="$bgPrimary" :dark="$darkMode">
            <v-card-title>
                Livros
                <v-btn
                    elevation="2"
                    fab
                    dark
                    small
                    class="ml-4"
                    :color="$colorPrimary"
                    to="/books/create"
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
                :items="books"
                :search="table.search"
                :loading="loading.getBooks"
                loading-text="Carregando..."
                :dark="$darkMode"
            >
                <v-progress-linear v-show="loading.getBooks" slot="progress" :color="$colorPrimary" indeterminate />
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import API from '@/api.js'

export default {
    name: 'Books',
    data() {
        return {
            books: [],
            table: {
                search: '',
                headers: [
                    { text: 'ID', value: 'id',},
                    { text: 'Titulo', value: 'titulo' },
                    { text: 'Autor', value: 'autor.nome' },
                    { text: 'Preço', value: 'preco_formated', align:'right', sort: this.sortValue},
                ],
            },
            loading: {
                getBooks: true,
            }
        }
    },
    computed: {

    },
    mounted() {
        this.getBooks()
    },
    methods: {
        getBooks() {
            this.loading.getBooks = true

            API.getBooks()
                .then(response => {
                    this.books = response.data.reverse().map(book => {
                        book.preco_formated = 'R$ ' + book.preco.toFixed(2).replace('.',',')
                        return book
                    })
                })
                .finally(() => {
                    this.loading.getBooks = false
                })
        },
        sortValue(a, b) {
            const aa = parseFloat(a.replace(/[^0-9,-]+/g, '').replace(',','.'))
            const bb = parseFloat(b.replace(/[^0-9,-]+/g, '').replace(',','.'))
            if (aa>bb) return 1
            if (bb>aa) return -1
            return 0
        }

    }
}
</script>

<style scoped>

</style>