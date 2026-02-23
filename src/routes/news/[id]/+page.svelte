<script>
  export let data;
  const item = data.item;
</script>

<h1 class="tf26-page-title">{item.title}</h1>

<p class="text-gray-600 text-sm">
  {new Date(item.date).toLocaleDateString()}
</p>

<div class="mt-4 leading-relaxed">
  {item.body}
</div>