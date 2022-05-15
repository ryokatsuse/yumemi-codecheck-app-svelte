<script lang="ts">
  import Header from './components/Header.svelte';
</script>

<div class="app">
  <Header />
  <main>
    <!-- add checkboxes, Graph -->
  </main>
</div>

<style>
  .app {
    text-align: center;
    max-width: 240px;
    margin: 0 auto;
  }

  main {
    max-width: calc(600px + 10%);
    margin: 0px auto;
  }
  @media (min-width: 640px) {
    .app {
      max-width: none;
    }
  }
</style>
