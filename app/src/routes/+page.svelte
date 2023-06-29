<script>
  import Nav from "../components/Nav.svelte";
  let name = "Alejandro Cortes";
</script>

<main>
  <Nav />
  <h1>{name}</h1>
  <h2>Web Developer</h2>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: cornflowerblue;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
