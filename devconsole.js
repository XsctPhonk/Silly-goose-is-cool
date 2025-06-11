<div style="margin-top:2em;">
  <h2>🧪 Developer Console Script Runner</h2>
  <textarea id="devScript" placeholder="Paste JS here..." style="width:100%;height:100px;background:black;color:#0ff;"></textarea>
  <br/>
  <button onclick="evalDevScript()">Run</button>
</div>

<script>
  function evalDevScript() {
    try {
      const script = document.getElementById("devScript").value;
      eval(script);
    } catch (e) {
      alert(\"Error: \" + e.message);
    }
  }
</script>
