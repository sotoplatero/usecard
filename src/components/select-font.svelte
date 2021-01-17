<div>
	{#if label}
		<label for="email_address" class="block text-gray-700 font-semibold">{label}</label>
	{/if}
	<select bind:value={value} class="w-full">
		{#each fonts.sort() as font}
			<option value={font} class="">
				{ font }
			</option>
		{/each}
	</select>
</div>

<script>
	export let 
		label = '', 
		value;
	let fonts = [ 'Inter' ,'Work Sans', 'Space Mono', 'Space Grotesk', 'Rubik', 'Libre Franklin', 'Cormorant', 'Fira Sans', 'Chivo', 'Eczar', 'Alegreya Sans', 'Alegreya', 'Source Sans Pro', 'Source Serif Pro', 'Roboto', 'Roboto Slab', 'BioRhyme', 'Inknut Antiqua', 'Poppins', 'Archivo Narrow ', 'Libre Baskerville', 'Playfair Display', 'Karla', 'Lora', 'Proza Libre', 'Spectral', 'IBM Plex Sans', 'Crimson Text', 'Montserrat', 'Lato', 'PT Sans ', 'PT Serif', 'Cardo ', 'Neuton', 'Open Sans', 'Inconsolata', 'Cabin', 'Raleway', 'Anonymous Pro', 'Merriweather' ];
</script>