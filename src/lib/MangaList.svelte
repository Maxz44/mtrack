<script lang="ts">
    import { search, mangas } from "../store";
</script>

<div class="flex two">
    {#each $mangas as manga}
        {#if $search == "" || manga
                .toLowerCase()
                .includes($search.toLowerCase())}
            <article class="card">
                <header>
                    <h3>{manga}</h3>
                </header>
            </article>
        {/if}
    {/each}
</div>

<style></style>
