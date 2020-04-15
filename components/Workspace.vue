<template>
    <Transition name="routerTransitionRoot">
        <RouterView />
    </Transition>
</template>

<script>
export default {
    name: "Workspace"
}
</script>

<style lang="stylus" scoped>
    .routerTransitionRoot-enter-active, .routerTransitionRoot-leave-active
        transition-property: all
        transition-timing-function: linear
        transition-duration: 0.4s

    .routerTransitionRoot-enter
        transform: translate(100vw, 0)

    .routerTransitionRoot-leave-to
        transform: translate(70vw, 0)

</style>
