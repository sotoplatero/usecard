<div>
	{#if label}
		<label for="email_address" class="block text-gray-700">{label}</label>
	{/if}
	<select bind:value={value} >
		{#each sizes as size}
			<option value={size} class="text-{ size } leading-3">
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