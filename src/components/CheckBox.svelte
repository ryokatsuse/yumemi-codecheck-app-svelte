<script>
  let prefChecked = []
  export let prefItems;
  console.log(prefChecked)
</script>

<div class="container">
  <label><input type="checkbox" bind:group={prefChecked} value={prefItems.prefCode} />{prefItems.prefName}</label>
</div>

<style>
  
</style>
