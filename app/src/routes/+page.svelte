<script>
  import Nav from "../components/Nav.svelte";
  let name = "Alejandro Cortes";
  import ContactLinks from "../components/ContactLinks.svelte";
</script>

<main>
  <Nav />
  <div class="name">
    <div class="content">
      <h1>{name}</h1>
      <p>
        Software Developer<br />
        Data Analyst / Engineer<br />
        Live Event Producer ( AV / IT )
      </p>
    </div>
  </div>
  <ContactLinks />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    background-color: #c4d7b2;
    margin: 0 auto;
    max-height: 40rem;
  }

  .content {
    height: 160px;
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
  }
</style>
