<script>
  import Nav from "../../components/Nav.svelte";
</script>

<main>
  <Nav />
  <h1>Contact</h1>
  <h2>Web Developer</h2>
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
