<script>
    export let platform;
    export let file;

    let text = "Скачать для"
    if (platform === "portable edition") {
        text = "Скачать"
    }

    let icon = platform.split(' ')[0];
</script>

<a href="download/{file}" download>
    <button type="button" class="inline-block w-full px-6 px-10 py-5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center">
        <img src="assets/{icon}.png" alt="" class="h-10 mr-2">
        <span class="mt-2.5">{text} {platform}</span>
    </button>
</a>