<script lang="ts">
    let { imgSrc, alt, caption } = $props();
</script>

<main>
    <img class="image" src={imgSrc} alt={alt}>
    {#if caption !== ""}
        <div class="caption">
            <p class="caption-text">{caption}</p>
        </div>  
    {/if}
</main>

<style>
    main {
        position: relative;
        width: 100%;
    }

    .image {
        width: 100%;
        position: relative;
    }

    .caption {
        position: absolute;
        bottom: 0.25rem;
        width: 94%;
        font-size: 14px;
        color: white;
        background: linear-gradient(to bottom, transparent, black);
        z-index: 100;
        padding: 3%;
        opacity: 0;
    }

    main:hover {
        .caption {
            opacity: 1;
        } 
    }

    .caption-text {
        margin-block-start: 2em;
        margin-block-end: 0.5em;
    }
</style>