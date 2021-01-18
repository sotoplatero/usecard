<div class="">
	{#if label}
		<label for="email_address" class="block text-gray-700 font-semibold">{label}</label>
	{/if}
	<input 
		type="text" 
		name="url" 
		id="url" 
		bind:value={value}
		class="w-full"
		on:focus={ e => e.target.select() }
	>
</div>

<script>
	export let 
		label = '', 
		value, 
		placeholder = '';
</script>