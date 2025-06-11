<div style="margin-top:2em;">
  <h2>🔎 Search Something</h2>
  <input type="text" id="searchTerm" placeholder="What are you curious about?" />
  <button onclick="webSearch()">Search</button>
</div>

<script>
  function webSearch() {
    const query = document.getElementById("searchTerm").value;
    if (!query) return;

    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
</script>
