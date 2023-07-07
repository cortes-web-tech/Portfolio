<script>
  import Nav from "../../components/Nav.svelte";
  import "../../style/style.css";
</script>

<main>
  <Nav />
  <div class="portfolio">
    <div class="--portfolio">
      <!-- <a href="/inSession"> -->
      <div class="notReady">
        <div class="text">
          <h4>inSession</h4>
          <small>CRUD, Databases</small>
          <br />
          <small>Coming soon™️</small>
        </div>
      </div>
      <!-- </a> -->
      <div class="notReady">
        <div class="text">
          <h4>Data App</h4>
          <small>D3, Rechartjs, react-vis</small>
          <br />
          <small>Coming soon™️</small>
        </div>
      </div>
    </div>
    <div class="--portfolio">
      <a href="https://www.viewmytravels.com" target="_blank">
        <div class="card">
          <div class="text">
            <h4>View My Travels</h4>
            <small>📍🗺</small>
            <br />
            <small>A Data visualization app.</small>
          </div>
        </div>
      </a>
      <div class="notReady">
        <div class="text">
          <h4>KnottyLevie</h4>
          <small>(eCommerce Site)</small>
          <br />
          <small>Coming soon™️</small>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
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
    height: 14rem;
    border: 0px solid #a0c49d;
    border-radius: 50px;
    background-color: #a0c49d;
    margin: 1em;
    padding: 10px;
  }

  .card:hover {
    background-color: #f7ffe5;
    color: #a0c49d;
  }

  .notReady {
    height: 14rem;
    border: 0px solid #a0c49d;
    border-radius: 50px;
    background-color: #a0c49d;
    margin: 1em;
    padding: 10px;
  }
  /* #F7FFE5 */
  /* #E1ECC8 */
  /* #C4D7B2 */
  /* #A0C49D */
  .notReady:hover {
    background-color: #50949d;
    color: #a0c49d;
  }

  .text {
    text-align: center;
    justify-items: end;
  }
</style>
