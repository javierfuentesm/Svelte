<script>
  let someText = `Frontend developer`;
  let count = 0;
  const handleClick = () => {
    count += 1;
  };
</script>

<style>
  p {
    color: var(--theme-color);
    font-size: 25px;
  }
</style>

<div class="About">
  <p>{someText}</p>
  <button on:click = {handleClick}>Click {count === 0 ? '' : count}</button>
</div>
