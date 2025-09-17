<script lang="ts">
    let { imgSrc, alt, caption } = $props();
</script>

<main>
    <img src={imgSrc} alt={alt}>
</main>

<style>
    img {
        width: 100%;
    }
</style>