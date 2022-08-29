import axios from "axios";
import { store } from "@/store";

const axios_instance = axios.create({
    baseURL: 'http://cdc-react.herokuapp.com/api',
    timeout: 10000, //ms
});


const api = {
    getAuthors() {
        return axios_instance.get('/autores')
            .catch(error => {
                console.error(error.response)
                store.snackbar.text = `${error.response.data.status} - ${error.response.data.message}`
                store.snackbar.show = true
                store.snackbar.color = 'red'
            })
    },

    postAuthor(author) {
        return axios_instance.post('/autores', author)
            .catch(error => {
                console.error(error.response)
                store.snackbar.text = `${error.response.data.status} - ${error.response.data.message}`
                store.snackbar.show = true
                store.snackbar.color = 'red'
            })
    },

    getBooks() {
        return axios_instance.get('/livros')
            .catch(error => {
                console.error(error.response)
                store.snackbar.text = `${error.response.data.status} - ${error.response.data.message}`
                store.snackbar.show = true
                store.snackbar.color = 'red'
            })
    },

    postBook(book) {
        return axios_instance.post('/livros', book)
            .catch(error => {
                console.error(error.response)
                store.snackbar.text = `${error.response.data.status} - ${error.response.data.message}`
                store.snackbar.show = true
                store.snackbar.color = 'red'
            })
    }
}

export default api