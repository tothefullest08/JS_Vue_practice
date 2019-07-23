<template>
    <div>
        <h3>New Quote</h3>
    </div>
</template>
<script>
export default {
    destroyed() {
        console.log('Destroyed')
    },
    deactivated() {
        console.log('Deactivated!')
    },
    activated() {
        console.log('Activated')
    },
}
</script>
<style scoped>
</style>