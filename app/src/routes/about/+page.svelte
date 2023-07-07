<script>
  import Nav from "../../components/Nav.svelte";
  import githubLogo from "../../images/github.png";
  import linkedInLogo from "../../images/LinkedIn.png";
  import ContactLinks from "../../components/ContactLinks.svelte";
  import "../../style/style.css";
</script>

<main>
  <Nav />
  <h2>Florida based software engineer.</h2>
  <p>
    Throughout the years I've built several web apps. Some of which you can view
    on my <a href="/work">portfolio</a>.
    <br />
    The past few years I've been focused on producing live/hybrid events.
    <br />
    Now I'm seeking a technical role.
    <br />
  </p>
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
