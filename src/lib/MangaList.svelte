<script lang="ts">
    import { search, mangas } from "../store";
</script>

<div class="flex two">
    {#each $mangas as manga}
        <article class="card">
            <header>
                <h3>{manga}</h3>
            </header>
        </article>
    {/each}
</div>

<style></style>
