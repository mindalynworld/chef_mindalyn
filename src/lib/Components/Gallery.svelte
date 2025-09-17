<script lang="ts">
    import Card from './Card.svelte';

    let { galleryData } = $props();

    let colLength = Math.round(galleryData.length / 3);
</script>

<main>
    <div class="masonry wrapper switcher">
        <!-- Column 1 -->
        <div class="flow">
            {#each galleryData as {imgSrc, alt, caption}, i}
            {#if i < colLength}
                <Card imgSrc={imgSrc} alt={alt} caption={caption}></Card>
            {/if}
            {/each}
        </div>

        <!-- Column 2 -->
        <div class="flow">
            {#each galleryData as {imgSrc, alt, caption}, i}
            {#if i >= colLength && i < colLength*2}
                <Card imgSrc={imgSrc} alt={alt} caption={caption}></Card>
            {/if}
            {/each}
        </div>

        <!-- Column 3 -->
        <div class="flow">
            {#each galleryData as {imgSrc, alt, caption}, i}
            {#if i >= colLength*2}
                <Card imgSrc={imgSrc} alt={alt} caption={caption}></Card>
            {/if}
            {/each}
        </div>
</div>

</main>

<style>

    main {
        padding: 1em 0;
        background: transparent;
    }

    .masonry {
        --gutter: 0.25em;
        --flow-space: var(--gutter);
        --switcher-target-container-width: 28rem;
    }

    .switcher {
        display: flex;
        flex-wrap: wrap;
        gap: var(--gutter, 1em);
        align-items: var(--switcher-vertical-alignment, flex-start);
    }

    .switcher > * {
        flex-grow: 1;
        flex-basis: calc(
            (var(--switcher-target-container-width, 40rem) - 100%) * 999
        );
    }

    .flow > * + * {
        margin-block-start: var(--flow-space, 1em);
    }

    .wrapper {
        max-width: 80rem;
        margin-inline: auto;
        padding-inline: var(--gutter);
    }
</style>