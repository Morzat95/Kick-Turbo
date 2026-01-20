// src/fix-player.js
console.log("[Kick Turbo] Cargando módulo: Player Fix...");

(function () {
	"use strict";

	const CONFIG = {
		TOLERANCIA_SALTO: 5,
		TIEMPO_ESPERA_INTERACCION: 2000,
	};

	let lastKnownTime = 0;
	let isUserInteracting = false;
	let interactionTimeout;
	let currentVideoElement = null;

	// Detectar Interacción
	function registrarInteraccion(evt) {
		isUserInteracting = true;
		clearTimeout(interactionTimeout);
		interactionTimeout = setTimeout(() => {
			isUserInteracting = false;
		}, CONFIG.TIEMPO_ESPERA_INTERACCION);
	}

	["mousedown", "keydown", "touchstart", "click"].forEach((evt) => {
		window.addEventListener(evt, registrarInteraccion, { capture: true });
	});

	// Proteger Video
	function protegerVideo(video) {
		if (video.dataset.kickTurboAttached) return;
		video.dataset.kickTurboAttached = "true";
		lastKnownTime = video.currentTime;

		video.addEventListener("timeupdate", () => {
			if (!video.seeking) lastKnownTime = video.currentTime;
		});

		video.addEventListener("seeking", () => {
			const currentTime = video.currentTime;
			const diferencia = Math.abs(currentTime - lastKnownTime);

			if (diferencia > CONFIG.TOLERANCIA_SALTO && !isUserInteracting) {
				if (lastKnownTime > 1) {
					console.warn(
						`[Kick Turbo] Salto bloqueado. Restaurando a ${lastKnownTime}`,
					);
					video.pause();
					video.currentTime = lastKnownTime;
					setTimeout(() => video.play().catch((e) => {}), 500);
				}
			} else if (isUserInteracting) {
				lastKnownTime = currentTime;
			}
		});
	}

	// Observer para SPA (Single Page App)
	setInterval(() => {
		const video = document.querySelector("video");
		if (video && video !== currentVideoElement) {
			currentVideoElement = video;
			protegerVideo(video);
		}
	}, 1000);
})();
