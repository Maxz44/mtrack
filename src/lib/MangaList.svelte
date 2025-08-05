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
                <button class="full">
                    <h3>{manga}</h3>
                </button>
            </span>
        {/if}
    {/each}
</div>

<style></style>
