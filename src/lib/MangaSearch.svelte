<script lang="ts">
    import { search, mangas } from "../store";

    function add(e: Event) {
        e.preventDefault();
        if (can_add()) {
            mangas.update((n) => n.set($search, []));
            search.set("");
        }
    }

    function can_add() {
        let manga_names = Array.from($mangas.keys());
        return (
            $search.length > 0 &&
            !manga_names
                .map((x) => x.toLowerCase())
                .includes($search.toLowerCase())
        );
    }
</script>

<form onsubmit={add}>
    <input
        autocapitalize="on"
        placeholder="Search your manga"
        bind:value={$search}
    />
    {#if can_add()}
        <button class="full">Add</button>
    {/if}
</form>

<style></style>
