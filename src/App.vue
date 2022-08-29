<template>
    <v-app id="app" :style="$styles">
        <SideBar />

        <TopBar />

        <v-main class="bg-secondary">
            <div class="box-main">
                <router-view />
            </div>
        </v-main>
        <AlertError />
    </v-app>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import SideBar from '@/components/SideBar'
import AlertError from '@/components/AlertError'

export default {
    name: 'App',
    components: {AlertError, SideBar, TopBar},
}
</script>

<style>
.bg-primary {
    background: var(--bg-primary) !important;
}

.bg-secondary {
    background: var(--bg-secondary) !important;
}

.font-color-primary {
    color: var(--font-color-primary) !important;
}

@media only screen and (min-width: 960px) {
    .box-main {
        padding: 20px 40px;
    }
}
</style>