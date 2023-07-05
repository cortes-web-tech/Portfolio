<script>
  import Nav from "../../components/Nav.svelte";
  import "../../style/style.css";
</script>

<main>
  <Nav />
  <div class="portfolio">
    <div class="--portfolio">
      <a href="/inSession">
        <div class="notReady">
          <div class="text">
            <h4>inSession</h4>
            <small>CRUD, Databases</small>
          </div>
          <br />
          <small>Coming soon™️</small>
        </div>
      </a>
      <div class="notReady">
        <div class="text">
          <h4>Data App</h4>
          <small>D3, Rechartjs, react-vis</small>
        </div>
        <br />
        <small>Coming soon™️</small>
      </div>
    </div>
    <div class="--portfolio">
      <a href="https://www.viewmytravels.com" target="_blank">
        <div class="card">
          <div class="text">
            <h4>View My Travels</h4>
            <small>📍🗺</small>
          </div>
          <small>A Data visualization app.</small>
        </div>
      </a>
      <div class="notReady">
        <div class="text">
          <h4>KnottyLevie</h4>
          <small>(eCommerce Site)</small>
        </div>
        <br />
        <small>Coming soon™️</small>
      </div>
    </div>
  </div>
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

  .portfolio {
    position: relative;
    font-size: 2em;
    display: flex;
    padding: 1em;
  }

  .--portfolio {
    flex: 1;
  }

  .portfolio a {
    color: #f7ffe5;
    text-decoration: none;
  }
  .card {
    height: 15rem;
    border: 0px solid #a0c49d;
    background-color: #a0c49d;
    margin: 1em;
    padding: 10px;
  }

  .card:hover {
    background-color: #f7ffe5;
    color: #a0c49d;
  }

  .notReady {
    height: 15rem;
    border: 0px solid #a0c49d;
    background-color: #a0c49d;
    margin: 1em;
    padding: 10px;
  }
  /* #F7FFE5 */
  /* #E1ECC8 */
  /* #C4D7B2 */
  /* #A0C49D */
  .notReady:hover {
    background-color: #f7ffe5;
    color: grey;
  }

  .text {
    text-align: end;
    justify-items: end;
  }
</style>
