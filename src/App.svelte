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

  $: src = `/api/socialcard.jpg?url=${url}&bg=${bg}&color=${color}&&pattern=${pattern}&theme=${theme}&size=${textSize}`

</script>

<!-- Note: "class:dark" is equivalent (and short for) "class:dark={dark}" or "class:dark={dark === true}" -->
<header class="mt-32 mb-10">
    <h1 class="text-4xl md:text-6xl text-center text-dark-blue-800 font-headline leading-tight" >
        Auto Social Image
    </h1>
    <p class="pt-6 text-lg max-w-2xl mx-auto text-gray-700 leading-relaxed text-center">
        You put all your work into creating an awesome Open Source package - now it's time to make it shine! Use this generator to create beautiful looking social images for your package.
    </p>
</header>

<main class="max-w-screen-lg mx-auto px-4">

    <div class="grid grid-cols-3 lg:grid-cols-7 gap-4">

      <div class="md:col-span-4 col-span-3">
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

    <div class="mt-10 ">
      <a href="{src}" title="Social Image" target="_blank">
        <img src="{src}" class="rounded-xl" alt="social card">
      </a>
    </div>

</main>

<footer class="my-10 text-center">
    Made with &#9995; and &#128147; at &#127968; by <a href="https://twitter.com/sotoplatero" class="text-blue-500">@sotoplatero</a>
</footer>