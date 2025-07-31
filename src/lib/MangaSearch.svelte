<script lang="ts">
    let { search, mangas }: { search: string; mangas: Array<string> } =
        $props();

    function add(e: Event) {
        e.preventDefault();
        if (can_add()) {
            mangas.push(search);
            search = "";
        }
    }

    function can_add() {
        return search.length > 0 && !mangas.includes(search);
    }
</script>

<form onsubmit={add}>
    <input placeholder="Search your manga" bind:value={search} />
    {#if can_add()}
        <button class="full">Add</button>
    {/if}
</form>

<style></style>
