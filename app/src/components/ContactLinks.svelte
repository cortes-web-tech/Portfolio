<script>
  import githubLogo from "../images/github.png";
  import linkedInLogo from "../images/LinkedIn.png";
</script>

<main>
  <div class="skills">
    <a href="https://github.com/cortes-web-tech" target="_blank"
      ><img class="logo" alt="Github profile" src={githubLogo} /></a
    >
    <a
      href="https://www.linkedin.com/in/alejandro-cortes-157051156/"
      target="_blank"
      ><img class="logo" alt="Github profile" src={linkedInLogo} /></a
    >
  </div>

  <svg class="smile" viewBox="-20 3 100 30" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path
        id="MyPath"
        fill="none"
        stroke="none"
        d="M 10 10 C 20 22, 40 20, 50 10"
      />
    </defs>

    <text>
      <textPath href="#MyPath" font-size="2.5"
        >Contact me at: <a href="mailto: cortes.web.tech@gmail.com"
          >Cortes.Web.Tech@gmail.com</a
        ></textPath
      >
    </text>
  </svg>
</main>

<style>
  main {
    position: relative;
    margin-top: 100px;
  }
  .skills {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
  }

  .logo {
    border-radius: 50%;
    height: 100px;
  }

  .smile {
    fill: black;
  }

  a:hover {
    fill: #007bb5;
  }

  .tongue {
    /* opacity: 0%; */
    /* animation: showTongue; */
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
  @keyframes showTongue {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
