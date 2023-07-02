<script>
  import Nav from "../../components/Nav.svelte";
  import "../../style/style.css";
</script>

<main>
  <Nav />
  <div class="portfolio">
    <div class="--portfolio">
      <a href="/inSession">
        <div class="card">
          <div class="text">
            <h4>inSession</h4>

            <small>CRUD, Databases</small>
          </div>
        </div>
      </a>
      <div class="card">
        <div class="text">
          <h4>Data App</h4>

          <small>D3, Rechartjs, react-vis</small>
        </div>
      </div>
    </div>
    <div class="--portfolio">
      <a href="http://localhost:5173" target="_blank">
        <div class="card">
          <div class="text">
            <h4>View My Tavels</h4>
            <p>📍🗺</p>
          </div>
        </div>
      </a>
      <div class="card">
        <div class="text">
          <h4>KnottyLevie</h4>
          <p>(eCommerce Site)</p>
        </div>
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

  .text {
    text-align: end;
    justify-items: end;
  }
</style>
