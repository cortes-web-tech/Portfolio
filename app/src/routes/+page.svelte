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
    /* #F7FFE5 */
    /* #E1ECC8 */
    /* #C4D7B2 */
    /* #A0C49D */
    text-align: center;
    padding: 1em;
    max-width: 240px;
    background-color: #c4d7b2;
    margin: 0 auto;
    min-height: 44.5rem;
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
