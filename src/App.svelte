<script lang="ts">
    import MangaSearch from "./lib/MangaSearch.svelte";
    let search: string = $state("");
    let mangas: Array<string> = $state([]);
</script>

<div>
    <MangaSearch {search} {mangas} />
</div>

<style>
</style>
