(function () {
  function addFloatingButton() {
    // Prevent duplicates (important in SPA-style routing)
    if (document.getElementById("plantstore-fab")) return;

    const button = document.createElement("button");
    button.id = "plantstore-fab";
    button.innerText = "🌿 Fern";

    Object.assign(button.style, {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      padding: "14px 18px",
      borderRadius: "999px",
      border: "none",
      backgroundColor: "#16a34a",
      color: "#ffffff",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      zIndex: "9999",
    });

    button.onclick = () => {
      window.location.href = "https://buildwithfern.com";
    };

    document.body.appendChild(button);
  }

  // Run after page load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addFloatingButton);
  } else {
    addFloatingButton();
  }
})();