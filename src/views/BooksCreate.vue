<template>
    <v-card :color="$bgPrimary" :dark="$darkMode">
        <v-card-title>Novo Livro</v-card-title>

        <v-form v-model="form.valid" ref="form" @submit.prevent="handleSubmit()">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            v-model="form.titulo"
                            :rules="rules.title"
                            label="Titulo"
                            required
                            autocomplete="false"
                            :color="$colorPrimary"
                        />
                    </v-col>

                    <v-col cols="12">
                        <v-text-field
                            v-model="form.preco"
                            :rules="rules.value"
                            label="Preço"
                            required
                            autocomplete="false"
                            :color="$colorPrimary"
                        />
                    </v-col>

                    <v-col cols="12">
                        <v-autocomplete
                            v-model="form.autorId"
                            label="Autor"
                            :items="authors"
                            item-text="nome"
                            item-value="id"
                            required
                            :loading="loading.getAuthors"
                            :disabled="authors.length === 0"
                            :color="$colorPrimary"
                            :item-color="$colorPrimary"
                            :dark="$darkMode"
                        />
                    </v-col>

                    <v-col cols="12" class="align-end">
                        <v-btn
                            type="submit"
                            elevation="0"
                            :color="$colorPrimary"
                            dark
                            :loading="loading.postBook"
                        >
                            Salvar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
        <pre>{{form}}</pre>
    </v-card>
</template>

<script>
import API from "@/api";

export default {
    name: "BooksCreate",
    data() {
        return {
            form: {
                valid: false,
                titulo: '',
                autorId: '',
                preco: ''
            },
            authors: [],
            rules: {
                title: [
                    v => !!v || 'Titulo é obrigatório!',
                    v => v.length <= 30 || 'Titulo deve ter menos de 30 caracteres!',
                    v => v.length >= 3 || 'Titulo deve ter mais de 3 caracteres!',
                ],

                value: [
                    v => !!v || 'Preço é obrigatório!',
                ]
            },
            loading: {
                getAuthors: false,
                postBook: false,
            }
        }
    },
    mounted() {
        this.getAuthors()
    },
    methods: {
        getAuthors() {
            this.loading.getAuthors = true
            API.getAuthors()
                .then(r => {
                    this.authors = r.data.reverse()
                })
                .finally(() =>{
                    this.loading.getAuthors = false
                })
        },
        handleSubmit() {
            this.postBook()
        },
        postBook() {
            this.loading.postBook = true
            API.postBook(this.form)
                .then(r => {
                    this.$snackbarText = 'Criado com sucesso!'
                    this.$snackbarColor = 'success'
                    this.$snackbarShow = true
                    console.log(r)
                })
                .finally(() => {
                    this.loading.postBook = false
                })
        }
    }
}
</script>

<style scoped>

</style>