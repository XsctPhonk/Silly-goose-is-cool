<button id="cloakToggle" style="position:fixed;bottom:8px;right:8px;background:black;color:#0ff;border:none;padding:4px;opacity:0.1;">
  🕶 Cloak
</button>

<script>
  const cloakToggles = {
    cloaked: {
      title: "Google Docs",
      icon: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x16.png"
    },
    default: {
      title: "DataDagger",
      icon: "/favicon.ico"
    }
  };

  let isCloaked = false;
  document.getElementById("cloakToggle").addEventListener("click", () => {
    isCloaked = !isCloaked;
    const state = isCloaked ? cloakToggles.cloaked : cloakToggles.default;

    document.title = state.title;
    let icon = document.querySelector("link[rel='icon']");
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }
    icon.href = state.icon;
  });
</script>
