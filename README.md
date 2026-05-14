# RCP para Tod@s — Andes Salud

App web mobile-first para talleres presenciales de **RCP básico y uso de DEA**, dirigida a personas no personal de salud. Los participantes acceden desde su celular escaneando un QR durante el taller.

## Escanea para acceder

<p align="center">
  <img src="public/qr-taller-rcp.png" alt="QR Taller RCP" width="300" />
  <br>
  <a href="https://nicoveraz.github.io/rcp-para-todos/">nicoveraz.github.io/rcp-para-todos</a>
</p>

## Funcionalidades

- **Guía RCP paso a paso** — 6 pasos con detalle expandible, basado en guías AHA 2025
- **Metrónomo RCP** — Audio/visual a 100-120 BPM, ciclo 30:2 con alerta de ventilaciones
- **Guía uso DEA** — Instrucciones paso a paso del desfibrilador externo automático
- **Simulador DEA** — Interfaz interactiva con voz sintetizada (es-CL): encender, parches, análisis, descarga/no descarga. Escenarios desfibrilable y no desfibrilable
- **Timer de práctica** — Cronómetro con presets (1-5 min), contador de rondas y tiempo total para simulación con robot

## Stack

- [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)
- Mobile-first, PWA-ready
- Web Audio API (metrónomo, alertas)
- Web Speech API (voz simulador DEA)
- GitHub Pages (deploy automático)

## Desarrollo

```bash
# Requisito: Node >= 18
nvm use v25

npm install
npm run dev
```

El servidor inicia en `http://localhost:4321/rcp-para-todos/`

## Público objetivo

- Adultos (v0.1)
- Personas sin formación en salud
- Talleres presenciales con robots de simulación

## Licencia

Uso interno Andes Salud.
