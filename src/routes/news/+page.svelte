<script>
	export let data;
</script>

<h1>お知らせ一覧</h1>

<ul>
	{#each data.news as item}
		<li class="mb-4">
			<a href="/news/{item.id}">
				<div>
					<p class="font-bold">{item.title}</p>
					<p class="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
					<p>{item.heading}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
