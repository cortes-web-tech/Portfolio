<script>
  import Nav from "../components/Nav.svelte";
  let name = "Alejandro Cortes";
  import "../style/homepage.css";
</script>

<main>
  <Nav />
  <h1 class="name">{name}</h1>
  <h2>Software Developer</h2>
  <h2>Data Engineer</h2>
  <h2>Live Event Producer (AV/IT)</h2>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
