<script>
    import DownloadButton from './DownloadButton.svelte';
</script>

<div class="container my-32 px-6 mx-auto">

    <!-- Section: Design Block -->
    <section class="mb-16 text-gray-800">
        <h2 class="text-3xl font-bold text-center mb-12">Скачать</h2>
        <div class="flex space-x-2 justify-center">
            <DownloadButton platform="macos" file="matb_0.1.0_universal.dmg"/>
            <DownloadButton platform="windows" file="matb_0.1.0_universal.msi"/>
            <DownloadButton platform="linux" file="tochno_ne_poslanie_nahui.txt"/>
        </div>
    </section>
  </div>