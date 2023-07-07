<script>
  import Nav from "../../components/Nav.svelte";
  import ContactLinks from "../../components/ContactLinks.svelte";
  import "../../style/style.css";
</script>

<main>
  <Nav />
  <div class="content">
    <h1>Florida based software engineer.</h1>
    <p>
      Throughout the years I've built several web apps. Some of which you can
      view on my <a href="/work">portfolio</a>.
      <br />
      The past few years I've been focused on producing live/hybrid events.
      <br />
      Now I'm seeking a technical role.
      <br />
    </p>
  </div>
  <ContactLinks />
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
  h1 {
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }
  .content {
    height: 160px;
  }

  p {
    color: #f7ffe5;
  }
  p a {
    color: #f7ffe5;
  }

  p a:hover {
    color: #a0c49d;
  }
</style>
