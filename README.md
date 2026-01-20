# 🚀 Kick Turbo

![Version](https://img.shields.io/badge/version-1.0.0-green) ![Platform](https://img.shields.io/badge/platform-Chrome-blue) ![Manifest](https://img.shields.io/badge/manifest-v3-orange)

**Kick Turbo** es una extensión de Chrome diseñada para mejorar la calidad de vida de los espectadores en [Kick.com](https://kick.com).

Su función principal es solucionar los frustrantes problemas de sincronización del reproductor (el famoso salto automático al "Vivo"), además de integrar herramientas comunitarias para facilitar el apoyo a los creadores.

## ⚡ Funcionalidades Principales

### 🛠️ Anti-Jump Player Fix (Estabilizador de Reproducción)

El reproductor nativo de Kick tiende a forzar un salto al momento actual de la transmisión ("Live Edge") cuando detecta pequeños errores de buffer o inestabilidad en la red.

- **La Solución:** Kick Turbo detecta tu intención. Si estás viendo una repetición o has pausado el stream, la extensión bloquea los intentos forzados de salto y mantiene el video exactamente donde tú lo dejaste.
- **Smart Detection:** Diferencia entre un error del reproductor y una interacción legítima del usuario.

### 💸 Botón de Donación Rápido

Integra un botón de acceso directo a plataformas de donación (como Ceneka) directamente en la interfaz del chat.

- Elimina la fricción de tener que buscar enlaces en biografías o escanear códigos QR.
- Se integra visualmente con el diseño "Neon Green" de Kick.

---

## 📥 Instalación

Actualmente, la extensión está en proceso de revisión en la Chrome Web Store. Mientras tanto, puedes instalarla en "Modo Desarrollador":

### Método Manual (Developer Mode)

1. **Descarga el código:**
   Clona este repositorio o descarga el archivo ZIP y descomprímelo.

   ```bash
   git clone [https://github.com/Morzat95/Kick-Turbo](https://github.com/Morzat95/Kick-Turbo)
   ```

2. Abre las extensiones de Chrome: Escribe chrome://extensions/ en la barra de direcciones de tu navegador.

3. Activa el Modo de Desarrollador: Activa el interruptor en la esquina superior derecha que dice "Modo de desarrollador".

4. Carga la extensión: Haz clic en el botón "Cargar descomprimida" (Load Unpacked) y selecciona la carpeta donde descargaste este proyecto (asegúrate de seleccionar la carpeta raíz que contiene el archivo manifest.json).

5. ¡Listo! Verás el icono de Kick Turbo en tu barra de herramientas. Ve a Kick.com y disfruta sin interrupciones.

## 🗺️ Roadmap (Próximamente)

Estamos trabajando activamente para convertir Kick Turbo en la suite definitiva para Kick:

[ ] Timestamps Comunitarios: Sistema colaborativo para marcar momentos destacados (Intros, Gameplay, Highlights) en la barra de reproducción de los VODs (similar a SponsorBlock).

[ ] Integración de Superchats: Visualización destacada de donaciones y alertas dentro del chat nativo.

[ ] Panel de Configuración: Interfaz para que cada usuario active o desactive módulos según sus preferencias.

[ ] Soporte Multi-Plataforma: Soporte para enlaces de Cafecito, PayPal y MercadoPago.

## 🔒 Privacidad y Seguridad

Kick Turbo funciona localmente en tu navegador.

No recopila datos personales.

No rastrea tu historial de navegación fuera de Kick.com.

No almacena información de tarjetas de crédito ni credenciales.

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si eres desarrollador y quieres mejorar el código:

Haz un Fork del proyecto.

Crea una rama para tu Feature (git checkout -b feature/AmazingFeature).

Haz Commit de tus cambios (git commit -m 'Add some AmazingFeature').

Haz Push a la rama (git push origin feature/AmazingFeature).

Abre un Pull Request.

## ⚖️ Disclaimer

Kick Turbo es un proyecto independiente desarrollado por la comunidad y no está afiliado, asociado, autorizado, respaldado ni conectado oficialmente de ninguna manera con Kick.com ni con ninguna de sus subsidiarias o afiliadas.
