<template>
    <div>
        <div class="loader-wrapper">
            <span class="loader"></span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.loader-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    width: 64px;
    height: 64px;
    position: relative;
    background-image:
        linear-gradient(blue 16px, transparent 0),
        linear-gradient(#FF3D00 16px, transparent 0),
        linear-gradient(#FF3D00 16px, transparent 0),
        linear-gradient(blue 16px, transparent 0);
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: left top, left bottom, right top, right bottom;
    animation: rotate 1s linear infinite;
}

@keyframes rotate {
    0% {
        width: 64px;
        height: 64px;
        transform: rotate(0deg)
    }

    50% {
        width: 30px;
        height: 30px;
        transform: rotate(180deg)
    }

    100% {
        width: 64px;
        height: 64px;
        transform: rotate(360deg)
    }
}</style>
