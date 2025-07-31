<script lang="ts">
    let search: string = $state("");
    let mangas: Array<string> = $state([]);

    function add(e: Event) {
        e.preventDefault();
        mangas.push(search);
        search = "";
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
