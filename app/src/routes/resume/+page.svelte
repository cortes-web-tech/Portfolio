<script>
  import Nav from "../../components/Nav.svelte";
  import Resume from "../../Resume.pdf";
</script>

<main>
  <Nav />
  <embed class="portfolio" type="application/pdf" src={Resume} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    /* max-width: 440px; */
    margin: 0 auto;
  }

  .portfolio {
    height: 800px;
    width: 800px;
  }

  embed:focus {
    outline: none;
  }
</style>
