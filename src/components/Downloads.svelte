<script>
    import DownloadButton from './DownloadButton.svelte';
</script>

<div class="container my-32 px-6 mx-auto">

    <!-- Section: Design Block -->
    <section class="mb-16 text-gray-800">
        <h2 class="text-3xl font-bold text-center mb-12">Скачать</h2>
        <div class="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4">
            <DownloadButton platform="macos" file="matb_0.1.0_universal.dmg"/>
            <DownloadButton platform="windows" file="matb_0.1.0_universal.msi"/>
            <DownloadButton platform="linux" file="matb-0.1.0-amd64.deb"/>
            <DownloadButton platform="portable edition" file="matb-0.1.0-portable.png"/>
            <DownloadButton platform="android" file="matb-0.1.0-universal.apk"/>
            <DownloadButton platform="meta quest" file="matb-0.1.0-meta.zip"/>
            <a href="pwa/index.html" class="col-span-full">
                <button type="button" class="inline-block w-full px-6 px-10 py-5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
                    <img src="assets/web.png" alt="" class="h-10 mr-4">
                    <span class="mt-2.5">Веб-версия для других платформ (добавить на домашний экран)</span>
                </button>
            </a>
        </div>
    </section>
  </div>