// src/ui-injector.js
console.log("[Kick Turbo] Cargando módulo: UI Injector...");

(function () {
	// A FUTURO: Esto vendrá de una API o de chrome.storage
	const STREAMER_MAPPING = {
		losherederosdealberdi: "https://ceneka.net/LosHerederosDeAlberdi",
		// Si no está en la lista, el botón no aparece
	};

	let currentPath = "";

	function getStreamerName() {
		// Kick url es tipo kick.com/nombre-streamer
		const parts = window.location.pathname.split("/");
		return parts[1] || null;
	}

	function injectDonationButton() {
		const streamer = getStreamerName();
		const cenekaLink = STREAMER_MAPPING[streamer];

		// 1. Validamos si tenemos link para este streamer
		if (!cenekaLink) return;

		// 2. Buscamos el contenedor del chat input
		// Buscamos el area donde se escribe el mensaje o los botones de abajo.
		const chatContainer =
			document.querySelector("#quick-emotes-holder")?.parentElement ||
			document.querySelector(".chat-input-area");

		// Si ya existe el botón, no hacemos nada
		if (document.getElementById("kick-turbo-donate-btn")) return;

		if (chatContainer) {
			const btn = document.createElement("a");
			btn.id = "kick-turbo-donate-btn";
			btn.href = cenekaLink;
			btn.target = "_blank";
			btn.innerText = "Donar";

			chatContainer.appendChild(btn);
			console.log("[Kick Turbo] Botón de donación inyectado para: " + streamer);
		}
	}

	// Observer para detectar cambio de URL (Navegación entre canales)
	setInterval(() => {
		if (window.location.pathname !== currentPath) {
			currentPath = window.location.pathname;
			// Damos un tiempo a que cargue el DOM de la nueva página
			setTimeout(injectDonationButton, 2000);
		}
		// Reintentar si el DOM tardó en cargar
		if (!document.getElementById("kick-turbo-donate-btn")) {
			injectDonationButton();
		}
	}, 1000);
})();
