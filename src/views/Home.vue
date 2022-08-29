<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" md="6">
                <InfoCard
                    :qtd="qtdAuthors"
                    text="Quantidade de autores cadastrados"
                    icon="mdi-account"
                    :loading="loading.getAuthors"
                />
            </v-col>

            <v-col cols="12" md="6">
                <InfoCard
                    :qtd="qtdBooks"
                    text="Quantidade de livros cadastrados"
                    icon="mdi-book"
                    :loading="loading.getBooks"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '@/api.js'
import InfoCard from "@/components/InfoCard";

export default {
    name: 'Home',
    components: {
        InfoCard

    },
    data() {
        return {
            authors: [],
            books: [],
            loading: {
                getAuthors: true,
                getBooks: true,
            }
        }
    },
    computed: {
        qtdAuthors() {
            return this.authors.length
        },
        qtdBooks() {
            return this.books.length
        }
    },
    mounted() {
        this.getAuthors()
        this.getBooks()
    },
    methods: {
        getBooks() {
            API.getBooks()
                .then(r => {
                    this.books = r.data
                })
                .finally(() => {
                    this.loading.getBooks = false
                })
        },
        getAuthors() {
            API.getAuthors()
                .then(r => {
                    this.authors = r.data
                })
                .finally(() => {
                    this.loading.getAuthors = false
                })
        }
    },
}
</script>

<style scoped>

</style>
