<template>
    <v-navigation-drawer v-model="$drawer" app :dark="$darkMode" :color="$bgPrimary">
        <template v-slot:prepend>
            <v-list-item two-line>
                <div class="box-icon">
                    <img class="icon" src="../assets/e-book.png" alt="Logo">
                </div>

                <v-list-item-content>
                    <v-list-item-title class="font-color-primary">Dev Books</v-list-item-title>
                    <v-list-item-subtitle class="font-color-primary">By: William M. Coelho</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>

        <v-divider />

        <v-list nav rounded>
            <v-list-item-group v-model="selectedItem" :color="$colorPrimary">
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text" />
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

export default {
    name: 'SideBar',
    data() {
        return {
            selectedItem: 1,
            items: [
                { text: 'Home', icon: 'mdi-home', to:'/' },
                { text: 'Autores', icon: 'mdi-account', to:'/authors' },
                { text: 'Livros', icon: 'mdi-book', to:'/books' },
            ],
        }
    },
}
</script>

<style scoped>
.box-icon {
    width: 40px;
    height: 40px;
    padding: 5px;
    background: var(--color-primary);
    border-radius: 5px;
    margin-right: 10px;
}

.box-icon .icon {
    width: 100%;
}

.v-item--active {
    background: var(--color-primary);
    color: #FFF;
}

.v-item--active::before {
    opacity: 0;
}
</style>