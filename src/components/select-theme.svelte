<div>
	{#if label}
		<label for="email_address" class="block text-gray-700">{label}</label>
	{/if}
	<select bind:value={value} >
		{#each themes as theme}
			<option value={theme} class="">
				{ theme }
			</option>
		{/each}
	</select>
</div>

<script>
	export let 
		label = '', 
		value;
	let themes = [ 'play' ,'frame' ];
</script>