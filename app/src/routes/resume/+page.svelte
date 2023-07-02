<script>
  import Nav from "../../components/Nav.svelte";
</script>

<main>
  <Nav />

  <p>Resume being updated.</p>
  <p>Will live here as PDF.</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
