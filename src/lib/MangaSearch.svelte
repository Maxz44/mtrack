<script lang="ts">
    import { search, mangas } from "../store";

    function add(e: Event) {
        e.preventDefault();
        if (can_add()) {
            mangas.update((n) => n.set($search, []));
            search.set("");
        }
    }

    function can_add(): Boolean {
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
    <button class="full success" disabled={!can_add()}>Create</button>
</form>

<style></style>
