<script>
  import Header from './components/Header.svelte';
  import Navbar from './components/Navbar.svelte';
  import Description from './components/Description.svelte';
  import Testimonials from './components/Testimonials.svelte';
  import Downloads from './components/Downloads.svelte';
</script>

<main>
  <Navbar/>
  <Header/>
  <Description/>
  <Testimonials/>
  <Downloads/>
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
