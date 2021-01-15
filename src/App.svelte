<script>
  // import { dark, theme } from "./store"; // dark mode
  import { toClipboard } from "copee";
  import InputText from "./components/input.svelte"; 
  import SelectColor from "./components/select-color.svelte";
  import SelectTextSize from "./components/select-text-size.svelte";
  import SelectTheme from "./components/select-theme.svelte";

  let url = 'https://dev.to/ranaemad/make-your-website-social-media-card-able-on-twitter-facebook-and-more-35la';
  let loading = false;
  let textSize = '';
  let bg = '';
  let color = '';
  let bgFrom = '';
  let bgTo = '';
  let colorFrom = '';
  let colorTo = '';
  let pattern = '';
  let theme = 'play';

  let src;
  $: if (bgFrom && bgTo) bg = bgFrom + '_' + bgTo;
  $: if ( colorFrom && colorTo) color = colorFrom + '_' + colorTo;

  $: src = encodeURI(`/card?url=${url}&bg=${bg}&color=${color}&theme=${theme}&size=${textSize}`)
  $: src && (loading = true);

  function loader(img) {
    img.onload = () => (loading = false);
  }
</script>

<!-- Note: "class:dark" is equivalent (and short for) "class:dark={dark}" or "class:dark={dark === true}" -->
<header class="max-w-4xl h-screen min-h-screen mx-auto flex items-center justify-center px-4">
  <div class="text-center">
    
    <h1 class="text-4xl md:text-5xl text-dark-blue-800 font-bold" >
        <span class="text-red-600">USECARD</span><br> Auto Social Image
    </h1>
    <div class="max-w-2xl mx-auto pt-8 text-xl text-gray-700 leading-relaxed space-y-6">
      <p >
          Generator of social meta images with 0 configuration. You no longer have to waste time creating images. 
      </p>
      <p >
       An image for each web page, only indicates the url parameter and set <code class="bg-gray-100">og:image</code> and <code class="bg-gray-100">twitter:image</code><br>
        Ex. <a href="/card?url=https://dev.to/ranaemad/make-your-website-social-media-card-able-on-twitter-facebook-and-more-35la" class="bg-gray-100 text-blue-600 text-xl" target="_blank">https://usecard.netlify.app/card?url=https://dev.to/ranaemad/make-your-website-social-media-card-able-on-twitter-facebook-and-more-35la</a>
      </p>
      
    </div>
    <div class="mt-10">
        <a href="#builder" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-semibold text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-xl">
          Build URL
        </a>
    </div>
  </div>
</header>

<div class="h-screen min-h-screen py-8 px-4">

  <main id="builder" class="max-w-4xl mx-auto space-y-6 ">

      <div class="text-center">
        <h2 class="text-2xl md:text-3xl font-bold">Customize your Image</h2>
        <p class="text-lg">Generate the URL of the custom image. You can change the colors, create gradients and select the theme of your preference.</p>
      </div>

      <div class="grid grid-cols-3 gap-2">

        <div class="col-span-3">
          <InputText bind:value={url} label="URL"/>
        </div>

        <SelectTheme bind:value={theme} label="Theme"/>

        <div>
            <label for="bgcolor" class="block font-semibold">Backgroud color</label>        
            <div class="grid grid-cols-2 gap-1">
                <SelectColor bind:value={bgFrom} name="bgcolor"/>
                <SelectColor bind:value={bgTo} />
            </div>
        </div>

        <div>
            <label for="textcolor" class="block font-semibold">Text color</label>        
            <div class="grid grid-cols-2 gap-1">
                <SelectColor bind:value={colorFrom} name="textcolor" />
                <SelectColor bind:value={colorTo} name="textcolor"/>
            </div>
        </div>

      </div>

      <div class="border rounded-xl overflow-hidden">
        <a href="{src}" title="Social Image" target="_blank" class="relative pb-1/2 block">
          <img 
            {src}
            class="rounded-xl absolute h-full w-full object-cover" 
            alt="social card"
            use:loader
            style="{ loading ? 'filter: blur(8px);' : '' }"
          >

        </a>
      </div>

      <div class="py-3 px-4 bg-gray-100 rounded-lg flex items-center text-gray-500">
        <span>http://usecard.netlify.app{src}</span> 
        <button on:click="{toClipboard( 'http://usecard.netlify.app' + src ) }" class="hover:text-gray-800">
          <svg class="h-6 w-6 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
        </button>
      </div>
  </main>

  <footer class="my-8 text-center">
      Made with &#9995; and &#128147; at &#127968; by <a href="https://twitter.com/sotoplatero" class="text-blue-500">@sotoplatero</a><br>
      <a href="https://clearbit.com" target="_black" rel="noreferer noopnener" class="text-sm text-gray-500">Logos provided by Clearbit</a> 
  </footer>

</div>
