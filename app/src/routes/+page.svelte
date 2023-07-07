<script>
  import Nav from "../components/Nav.svelte";
  let name = "Alejandro Cortes";
  import "../style/homepage.css";
  import ContactLinks from "../components/ContactLinks.svelte";
</script>

<main>
  <Nav />
  <div class="name">
    <h1>{name}</h1>
    <h2>Software Developer</h2>
    <h2>Data Analyst / Engineer</h2>
    <h2>Live Event Producer ( AV / IT )</h2>
    <ContactLinks />
  </div>
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
    max-height: 40rem;
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

  h2 {
    color: #f7ffe5;
  }

  .name {
    color: #f7ffe5;
    opacity: 0%;
    padding-top: 0;
    animation: name;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  @keyframes name {
    0% {
      opacity: 0%;
      padding-top: 100px;
    }
    50% {
      opacity: 100%;
    }
    100% {
      opacity: 100%;
      padding-top: 0px;
    }
  }
</style>
