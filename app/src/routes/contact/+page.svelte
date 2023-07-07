<script>
  import Nav from "../../components/Nav.svelte";
  import ContactLinks from "../../components/ContactLinks.svelte";
</script>

<main>
  <Nav />
  <h1>Contact</h1>
  <h2>Email: Cortes.Web.Tech@gmail.com</h2>
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
</style>
