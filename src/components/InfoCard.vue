<template>
    <div class="card">
        <div class="box-icon">
            <div class="icon">
                <v-icon dark>{{ icon }}</v-icon>
            </div>
        </div>

        <div class="box-info">
            <div class="qtd">
                <v-progress-circular v-if="loading" indeterminate size="16" width="2" />
                <span v-else>{{ qtd }}</span>
            </div>
            <div class="text">{{ text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoCard",
    props: {
        qtd: {
            type: [String, Number],
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        loading: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    background: var(--bg-primary);
    padding: 25px;
    display: flex;
    color: var(--font-color-primary);
    border-radius: 5px;
}

.box-icon {
    margin-right: 25px;
    background: var(--bg-secondary);
    padding: 12px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box-icon .icon {
    width: 35px;
    height: 35px;
    background: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

.box-info .qtd {
    font-weight: bold;
    font-size: 20px;
}

.box-info .text {
    opacity: 0.8;
}
</style>