<script>
  document.addEventListener("keydown", function (e) {
    const safeURL = "https://classroom.google.com";
    const escapeKeys = ["Escape", "q", "`"]; // Customize your hotkeys

    if (escapeKeys.includes(e.key)) {
      window.location.href = safeURL;
    }
  });
</script>
