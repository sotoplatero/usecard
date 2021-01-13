<div class="w-full">
	{#if label}
		<label for="" class="block text-gray-700 font-semibold">{label}</label>
	{/if}
	<select bind:value={value} class="w-full bg-{value}" >
		<option></option>
		{#each colors as color}
			<option value={Object.keys(color)} class="bg-{ Object.keys(color) }">
				&nbsp;
			</option>
		{/each}
	</select>
</div>

<script>
	export let 
		label = '', 
		cl = '', 
		value;

	let colors = [
		{'gray-50': '#F9FAFB'},
		{'gray-100': '#F3F4F6'},
		{'gray-200': '#E5E7EB'},
		{'gray-300': '#D1D5DB'},
		{'gray-400': '#9CA3AF'},
		{'gray-500': '#6B7280'},
		{'gray-600': '#4B5563'},
		{'gray-700': '#374151'},
		{'gray-800': '#1F2937'},
		{'gray-900': '#111827'},
		{'red-50': '#FEF2F2'},
		{'red-100': '#FEE2E2'},
		{'red-200': '#FECACA'},
		{'red-300': '#FCA5A5'},
		{'red-400': '#F87171'},
		{'red-500': '#EF4444'},
		{'red-600': '#DC2626'},
		{'red-700': '#B91C1C'},
		{'red-800': '#991B1B'},
		{'red-900': '#7F1D1D'},
		{'yellow-50': '#FFFBEB'},
		{'yellow-100': '#FEF3C7'},
		{'yellow-200': '#FDE68A'},
		{'yellow-300': '#FCD34D'},
		{'yellow-400': '#FBBF24'},
		{'yellow-500': '#F59E0B'},
		{'yellow-600': '#D97706'},
		{'yellow-700': '#B45309'},
		{'yellow-800': '#92400E'},
		{'yellow-900': '#78350F'},		
		{'green-50': '#ECFDF5'},
		{'green-100': '#D1FAE5'},
		{'green-200': '#A7F3D0'},
		{'green-300': '#6EE7B7'},
		{'green-400': '#34D399'},
		{'green-500': '#10B981'},
		{'green-600': '#059669'},
		{'green-700': '#047857'},
		{'green-800': '#065F46'},
		{'green-900': '#064E3B'},		
		{'blue-50': '#EFF6FF'},
		{'blue-100': '#DBEAFE'},
		{'blue-200': '#BFDBFE'},
		{'blue-300': '#93C5FD'},
		{'blue-400': '#60A5FA'},
		{'blue-500': '#3B82F6'},
		{'blue-600': '#2563EB'},
		{'blue-700': '#1D4ED8'},
		{'blue-800': '#1E40AF'},
		{'blue-900': '#1E3A8A'},		
		{'indigo-50': '#EFF6FF'},
		{'indigo-100': '#DBEAFE'},
		{'indigo-200': '#BFDBFE'},
		{'indigo-300': '#93C5FD'},
		{'indigo-400': '#60A5FA'},
		{'indigo-500': '#3B82F6'},
		{'indigo-600': '#2563EB'},
		{'indigo-700': '#1D4ED8'},
		{'indigo-800': '#1E40AF'},
		{'indigo-900': '#1E3A8A'},		
		{'purple-50': '#EFF6FF'},
		{'purple-100': '#DBEAFE'},
		{'purple-200': '#BFDBFE'},
		{'purple-300': '#93C5FD'},
		{'purple-400': '#60A5FA'},
		{'purple-500': '#3B82F6'},
		{'purple-600': '#2563EB'},
		{'purple-700': '#1D4ED8'},
		{'purple-800': '#1E40AF'},
		{'purple-900': '#1E3A8A'},		
		{'pink-50': '#EFF6FF'},
		{'pink-100': '#DBEAFE'},
		{'pink-200': '#BFDBFE'},
		{'pink-300': '#93C5FD'},
		{'pink-400': '#60A5FA'},
		{'pink-500': '#3B82F6'},
		{'pink-600': '#2563EB'},
		{'pink-700': '#1D4ED8'},
		{'pink-800': '#1E40AF'},
		{'pink-900': '#1E3A8A'},		
	];
</script>