<script lang="ts">
    import { search, mangas } from "../store";

    let mangas_name: string[] = $derived(Array.from($mangas.keys()));
</script>

<div class="flex two">
    {#each mangas_name as manga}
        {#if $search == "" || manga
                .toLowerCase()
                .includes($search.toLowerCase())}
            <span>
                <a class="button full" href="/manga/{manga}">
                    <h3>{manga}</h3>
                </a>
            </span>
        {/if}
    {/each}
</div>

<style></style>
