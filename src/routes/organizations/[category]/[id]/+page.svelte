<script>
	export let data;
	const item = data.item;
</script>

<h1 class="tf26-page-title">{item.title}</h1>

<p class="text-sm text-gray-600">
	{new Date(item.date).toLocaleDateString('ja-JP', {
		month: '2-digit',
		day: '2-digit'
	})}
</p>

<div class="mt-4 leading-relaxed">
	{item.body}
</div>
