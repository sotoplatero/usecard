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
<div class="w-3/5 max-w-screen-lg mx-auto">
    
    <header class="mt-32">
        <h1 class="text-4xl md:text-5xl text-center text-gray-800 font-bold" >
            Auto Social Image
        </h1>
        <p class="pt-6 text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed text-center">
            You put all your work into creating an awesome Open Source package - now it's time to make it shine! Use this generator to create beautiful looking social images for your package.
        </p>
    </header>

    <main class="space-y-4">

        <div class="flex space-x-4">
          <div class="flex-grow">
            <InputText bind:value={url} label="URL"/>
          </div>
        </div>

        <div class="grid grid-cols-4 space-x-4">
            <div >
                <SelectTheme bind:value={theme} label="Theme"/>
            </div>
            <div >
              <SelectTextSize label="Text Size" bind:value={textSize}/>
            </div>
            <div>
                <label class="block font-semibold">Text color</label>        
                <div class="flex space-x-1">
                    <SelectColor bind:value={colorFrom}/>
                    <SelectColor bind:value={colorTo}/>
                </div>
            </div>
            <div>
                <label class="block font-semibold">Backgroud color</label>        
                <div class="flex space-x-1">
                    <SelectColor bind:value={bgFrom} />
                    <SelectColor bind:value={bgTo} />
                </div>
            </div>
        </div>
        <div class="">
            <a href="{src}">
                <img src="{src}" class="rounded-xl" alt="social card">
            </a>
        </div>
    </main>

    <footer class="my-10">
        Made with <span class="text-xl">&#9996;</span> by <a href="https://twitter.com/sotoplatero" class="text-blue-600">@sotoplatero</a>
    </footer>
</div>