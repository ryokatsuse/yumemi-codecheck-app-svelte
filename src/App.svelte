<script lang="ts">
  import Header from './components/Header.svelte';
  import CheckBox from './components/CheckBox.svelte';
  import {api} from './api'
  const API_KEY = process.env.API_KEY

  const fetchPrefectures = async () => {
    const response = await api.getPrefectures(API_KEY)

    if (response.ok) {
      const body = await response.json();
      const res = body.result
      return res;
    }

    const error: Error = new Error('データを取得できませんでした。');
    throw error;
  };

</script>

<div class="app">
  <Header />
  <main>
    {#await fetchPrefectures()}
      <p>ロード中</p>
      {:then response}
      {#each response as item}
        <CheckBox prefItems={item} />
      {/each}
    {/await}
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
