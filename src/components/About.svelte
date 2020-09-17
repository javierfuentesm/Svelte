<script>
  let someText = `Frontend developer`;
  let count = 0;
  let styles = { darkMode: false}

  const handleClick = () => {
    count += 1;
  };
  const toggle =()=>{
    styles.darkMode = !styles.darkMode
    window.document.body.classList.toggle("dark-mode")

  }
</script>

<style>
  p {
    color: var(--theme-color);
    font-size: 25px;
  }
</style>

<div class="About">

  {#if !styles.darkMode}
    <p>{someText}</p>
    {:else}
    <p><span>Hello DarkMode</span></p>
    {/if}
  <button on:click = {handleClick}>Click {count === 0 ? '' : count}</button>
  <button on:click = {toggle}>DarkMode</button>
</div>
