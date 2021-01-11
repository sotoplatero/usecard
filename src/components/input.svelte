<div class="">
	{#if label}
		<label for="email_address" class="block text-gray-700">{label}</label>
	{/if}
	<input 
		type="text" 
		name="email_address" 
		id="email_address" 
		bind:value={value}
		placeholder=""
	>
</div>

<script>
	export let 
		label = '', 
		value, 
		placeholder = '';
</script>