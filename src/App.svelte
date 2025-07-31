<script lang="ts">
    import MangaList from "./lib/MangaList.svelte";
    import MangaSearch from "./lib/MangaSearch.svelte";

    let search: string = $state("");
    let mangas: Array<string> = $state([]);
</script>

<div>
    <MangaSearch {search} {mangas} />
    <MangaList {search} {mangas} />
</div>

<style>
</style>
