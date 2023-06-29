<script>
  import Nav from "../../components/Nav.svelte";

  import "../../style/style.css";
</script>

<main>
  <Nav />
  <h1>About</h1>
  <p>Florida based software engineer</p>
  <p>
    Throughout the years I've built several web apps that you can view on my <a
      href="/work">portfolio</a
    >.
  </p>

  <p>Below are some of my favorite tools to use.</p>
  <div class="skills">
    <ul>
      <li>JavaScript</li>
      <li>PHP</li>
      <li>MySql</li>
      <li>React</li>
      <li>Svelte</li>
      <li>AWS</li>
      <li>Git/Github</li>
      <li>CI/CD</li>
    </ul>
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
  p a {
    color: #f7ffe5;
  }

  p a:hover {
    color: #a0c49d;
  }
</style>
