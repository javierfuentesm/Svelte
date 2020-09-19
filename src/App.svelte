<script>
  import About from "./components/About.svelte";
  import Text from './components/Text.svelte'
  import Person from './components/Person.svelte'
  import Skills from './components/Skills.svelte'
  import Input from './components/Input.svelte'
  export let name;
  export let lastName = "Fuentes";

  const data = {
    name:"Javier",
    lastName: "Fuentes",
    age:26
  }
</script>

<style>
  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
  }
  :global(:root) {
    --theme-color: purple;
  }
  :global(body.dark-mode){
    background-color: #1d3040;
    color: #bfc2c7
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name} {lastName}!</h1>
  <About />
  <Text anotherText="Hola!!"/>
  <Text/>
  <Person {...data} />
  <Skills/>
  <Input />

</main>
