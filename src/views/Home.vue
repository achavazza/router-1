<template>
    <div>
        <h1>Home</h1>
        {{ userStore.userData?.email }}
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
</script>