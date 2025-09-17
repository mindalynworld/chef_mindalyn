<script>
    import Gallery from "$lib/Components/Gallery.svelte";
    import Toggle from "$lib/Components/Toggle.svelte";
    import { foodGalleryData, filmGalleryData, craftGalleryData } from '../../static/config/gallery-data.ts';

    let selectedOption = $state('option1');
</script>

<main>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <h1>Chef Mindalyn</h1>
    <!-- <p>For my memories, for your inspiration</p> -->
    <Toggle bind:selectedOption={selectedOption}></Toggle>

    <div class="gallery {selectedOption == 'option1' ? 'show' : 'hide'}">
        <Gallery galleryData={foodGalleryData}></Gallery>
    </div>

    <div class="gallery {selectedOption == 'option2' ? 'show' : 'hide'}">
        <Gallery galleryData={filmGalleryData}></Gallery>
    </div>

    <div class="gallery {selectedOption == 'option3' ? 'show' : 'hide'}">
        <Gallery galleryData={craftGalleryData}></Gallery>
    </div>
</main>

<style>
    main {
        font-family: "Roboto Mono";
        background: transparent;
    }

    .gallery {
        &.show {
            display: contents;
        }

        &.hide {
            display: none;
        }
    }
</style>