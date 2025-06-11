<script>
  const cloaks = {
    "Google Search": {
      title: "Google",
      icon: "https://www.google.com/favicon.ico"
    },
    "Google Docs": {
      title: "Untitled document - Google Docs",
      icon: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x16.png"
    },
    "Google Classroom": {
      title: "Classes",
      icon: "https://ssl.gstatic.com/classroom/ic_product_classroom_32.png"
    }
  };

  // Change this to your desired cloak
  const selected = "Google Docs";
  document.title = cloaks[selected].title;

  const link = document.createElement("link");
  link.rel = "icon";
  link.href = cloaks[selected].icon;
  document.head.appendChild(link);
</script>
