<script lang="ts">
    import { match, goto } from "elegua";
    import { mangas } from "../store";

    let manga_name = decodeURI($match[1]);

    function delete_manga(e: Event) {
        e.preventDefault();
        mangas.update((n) => {
            n.delete(manga_name);
            return n;
        });
        goto("/");
    }
</script>

<div class="flex four">
    <span class="fourth">
        <a href="/" class="button">back</a>
        <button onclick={delete_manga} class="error">Delete</button>
    </span>
    <h1 class="three-fourth">{manga_name}</h1>
</div>

<style></style>
