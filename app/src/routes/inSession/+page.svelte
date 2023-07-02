<script>
  import Nav from "../../components/Nav.svelte";
  import "../../style/style.css";
</script>

<main>
  <Nav />
  <div class="inSession">
    inSession is an open source presentation management solution.
  </div>
</main>

<style>
  .inSession {
    font-size: 26px;
  }
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
