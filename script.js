if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker registriert"))
    .catch((error) =>
      console.log("Service Worker Registrierung fehlgeschlagen:", error)
    );
}
