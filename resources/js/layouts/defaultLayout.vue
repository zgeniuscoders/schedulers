<template>
    <aside-component />
    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div class="px-6 pt-6 2xl:container">
            <slot/>
        </div>
    </div>
</template>
<script setup>
import asideComponent from "../components/asideComponent.vue"
</script>