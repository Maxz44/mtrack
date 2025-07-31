<script lang="ts">
    let { search, mangas }: { search: string; mangas: Array<string> } =
        $props();
</script>

<div class="flex two">
    {#each mangas as manga}
        <article class="card">
            <header>
                <h3>{manga}</h3>
            </header>
        </article>
    {/each}
</div>

<style></style>
