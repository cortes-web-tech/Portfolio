<script>
  import Nav from "../../components/Nav.svelte";
  import "../../style/style.css";
</script>

<main>
  <Nav />
  <div>Projects</div>
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
