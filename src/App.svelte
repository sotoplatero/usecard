<script>
  import { dark } from "./store"; // dark mode
  import InputText from "./components/input.svelte"; 
  import SelectColor from "./components/select-color.svelte";
  import SelectTextSize from "./components/select-text-size.svelte";
  import SelectTheme from "./components/select-theme.svelte";

  let url = 'https://stackoverflow.com/questions/21646738/convert-hex-to-rgba';
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

  $: src = encodeURI(`/card.jpg?url=${url}&bg=${bg}&color=${color}&theme=${theme}&size=${textSize}`)

</script>

<!-- Note: "class:dark" is equivalent (and short for) "class:dark={dark}" or "class:dark={dark === true}" -->
<header class="max-w-4xl h-screen min-h-screen mx-auto flex items-center justify-center ">
  <div class="text-center">
    
    <h1 class="text-4xl md:text-5xl text-dark-blue-800 font-bold" >
        <span class="text-red-600">USECARD</span><br> Auto Social Image
    </h1>
    <div class="max-w-2xl mx-auto pt-8 text-xl text-gray-700 leading-relaxed space-y-6">
      <p >
          Generator of social meta images with 0 configuration. You no longer have to waste time creating images. 
      </p>
      <p >
       An image for each web page, only indicates the url parameter and set the <code class="bg-gray-100">content</code> for <code class="bg-gray-100">og:image</code> and <code class="bg-gray-100">twitter:image</code><br>
        Ex. <a href="/card.jpg?url=https://usecard.netlify.app" class="bg-gray-100 text-blue-600 text-xl" target="_blank">https://usecard.netlify.app/card.jpg?url=https://usecard.netlify.app</a>
      </p>
      
    </div>
    <div class="mt-10">
        <a href="#builder" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-semibold text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-xl">
          Build URL
        </a>
    </div>
  </div>
</header>

<div class="h-screen min-h-screen py-8">
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
            <label class="block font-semibold">Backgroud color</label>        
            <div class="grid grid-cols-2 gap-1">
                <SelectColor bind:value={bgFrom} />
                <SelectColor bind:value={bgTo} />
            </div>
        </div>

        <div>
            <label class="block font-semibold">Text color</label>        
            <div class="grid grid-cols-2 gap-1">
                <SelectColor bind:value={colorFrom}/>
                <SelectColor bind:value={colorTo}/>
            </div>
        </div>
      </div>

      <div class="">
        <a href="{src}" title="Social Image" target="_blank">
          <img src="{src}" class="rounded-xl" alt="social card">
        </a>
      </div>

      <div class="p-3 bg-gray-100 rounded-lg font-semibold">
        http://usecard.netlify.app{src}
      </div>
  </main>

  <footer class="my-8 text-center">
      Made with &#9995; and &#128147; at &#127968; by <a href="https://twitter.com/sotoplatero" class="text-blue-500">@sotoplatero</a>
  </footer>
  
</div>
