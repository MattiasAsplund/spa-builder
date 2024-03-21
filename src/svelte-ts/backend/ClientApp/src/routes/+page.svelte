<script lang="ts">
    import { onMount } from 'svelte';
    let status = "Have not read";
    onMount(async () => {
        fetch("/api/OidcConfiguration")
        .then(result => result.json())
        .then(json => {
            status = "Did read";
        
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{status}</p>