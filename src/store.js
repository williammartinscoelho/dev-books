import { reactive } from 'vue'


export const store = reactive({
    darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
    snackbar: {
        text: '',
        show: false,
        color: ''
    },
    drawer: true,
})