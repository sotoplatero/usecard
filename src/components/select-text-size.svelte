<div>
	{#if label}
		<label for="email_address" class="block text-gray-700 font-semibold">{label}</label>
	{/if}
	<select bind:value={value} class="w-full">
		<option></option>
		{#each sizes as size}
			<option value={size} class="">
				{ size }
			</option>
		{/each}
	</select>
</div>

<script>
	export let 
		label = '', 
		value;
	let sizes = [ 'xl' ,'2xl','3xl','4xl','5xl','6xl','7xl','8xl','9xl' ];
</script>