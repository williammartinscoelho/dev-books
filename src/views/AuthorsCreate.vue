<template>
    <v-card :color="$bgPrimary" :dark="$darkMode">
        <v-card-title>Novo Autor</v-card-title>

        <v-form v-model="form.valid" ref="form" @submit.prevent="handleSubmit()">
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            v-model="form.nome"
                            :rules="rules.nameRules"
                            label="Nome"
                            required
                            autocomplete="false"
                        />
                    </v-col>

                    <v-col cols="12">
                        <v-text-field
                            v-model="form.email"
                            :rules="rules.emailRules"
                            label="E-mail"
                            required
                            autocomplete="false"
                        />
                    </v-col>

                    <v-col cols="12">
                        <v-text-field
                            v-model="form.senha"
                            :rules="rules.passwordRules"
                            label="Senha"
                            type="password"
                            required
                            autocomplete="false"
                        />
                    </v-col>

                    <v-col cols="12" class="align-end">
                        <v-btn type="submit" elevation="0" :color="$colorPrimary" dark :loading="loading.postAuthors">Salvar</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>

<script>
import API from '@/api.js'

export default {
    name: "AuthorsCreate",
    data() {
        return {
            form: {
                valid: false,
                nome: 'William Coelho',
                email: 'william@coelho.com',
                senha: '123456789+'
            },
            rules: {
                nameRules: [
                    v => !!v || 'Nome é obrigatório!',
                    v => v.length <= 30 || 'Nome deve ter menos de 30 caracteres!',
                    v => v.length >= 3 || 'Nome deve ter mais de 3 caracteres!',
                ],

                emailRules: [
                    v => !!v || 'E-mail é obrigatório!',
                    v => /.+@.+/.test(v) || 'E-mail must be valid',
                ],

                passwordRules: [
                    v => !!v || 'Senha é obrigatório!',
                    v => v.length >= 8 || 'Senha deve ter mais de 8 caracteres!'
                ]
            },
            loading: {
                postAuthor: false
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.form.validate()

            if (this.form.valid) {
                this.postAuthor()
            }
        },
        postAuthor() {
            this.loading.postAuthor = true
            API.postAuthor(this.form)
                .then(r => {
                    this.$snackbarText = 'Criado com sucesso!'
                    this.$snackbarColor = 'success'
                    this.$snackbarShow = true
                    this.clearForm()
                    console.log(r)
                })
                .finally(() => {
                    this.loading.postAuthor = false
                })
        },
        clearForm() {
            this.form.email = ''
            this.form.nome = ''
            this.form.senha = ''
        }
    }
}
</script>

<style scoped>

</style>