<script lang="ts">
    import type { PageData } from './$types';
    import Timetable from '$lib/components/Timetable.svelte';
    
    let { data }: { data: PageData } = $props();
</script>

<div class="page">
    <h1>イベントタイムテーブル</h1>
    <Timetable events={data.events} />
</div>

<style>
    .page {
        min-height: 100vh;
        background: #f5f5f5;
    }
    
    h1 {
        text-align: center;
        padding: 20px;
        margin: 0;
        color: #333;
    }
</style>