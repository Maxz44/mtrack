<script lang="ts">
    import { path, resolve } from "elegua";
    import MangaInfo from "./lib/MangaInfo.svelte";
    import MangaList from "./lib/MangaList.svelte";
    import MangaSearch from "./lib/MangaSearch.svelte";
</script>

<div>
    {#if resolve($path, "/")}
        <MangaSearch />
        <MangaList />
    {:else if resolve($path, /\/manga\/(.+)/)}
        <MangaInfo />
    {:else}
        <h1>404 Error</h1>
        <pre>{$path}</pre>
    {/if}
</div>

<style>
</style>
