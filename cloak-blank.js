<script>
  function openCloakedBlank() {
    const win = window.open("about:blank", "_blank");
    const url = window.location.href;

    const content = `
      <script>
        document.title = 'Google Docs';
        var link = document.createElement('link');
        link.rel = 'icon';
        link.href = 'https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x16.png';
        document.head.appendChild(link);
        location.replace('${url}');
      <\/script>
    `;

    win.document.write(content);
    win.document.close();
  }
</script>

<!-- Button to activate -->
<button onclick="openCloakedBlank()">🚪 Launch in about:blank</button>
