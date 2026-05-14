# Changelog

Todos los cambios relevantes de este proyecto se documentan aquí.

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/).

## [0.2.0] - 2026-05-14

### Agregado

- Splash screen con términos y condiciones al primer ingreso
- Sección de características de compresiones en Guía RCP (paso 5) y Guía DEA
- Página de Preguntas Frecuentes con 6 preguntas sobre RCP y DEA
- Botón FAQ en menú principal
- Página combinada "Herramientas de Práctica" con tabs Metrónomo / Timer

### Cambiado

- Metrónomo y Timer unificados en una sola página con tabs
- Metrónomo y Timer pueden correr simultáneamente al cambiar de tab (indicador ● en tab inactivo)
- Guía DEA paso 6: frecuencia de compresiones actualizada a 110/min
- FAQ movido de Guía DEA a página independiente
- Ícono paso 2 "Comprobar respuesta" reemplazado por Material Symbols "communication"

### Corregido

- Botón detener metrónomo no respondía por overlay de animación

### Eliminado

- Páginas individuales /metronomo y /timer (reemplazadas por /herramientas)

## [0.1.0] - 2026-05-14

### Agregado

- Página de inicio con menú de navegación y logos Andes Salud
- Guía RCP paso a paso (6 pasos, adultos, basado en AHA 2025)
- Metrónomo RCP con audio (100-120 BPM), pulso visual y ciclo 30:2
- Guía de uso de DEA con tips por paso
- Simulador DEA interactivo con voz sintetizada (es-CL), escenarios desfibrilable/no desfibrilable
- Timer de práctica con presets 1-5 min, contador de rondas y tiempo total
- Código QR con logo Andes Salud para acceso desde celular
- Deploy automático a GitHub Pages via GitHub Actions
- PWA manifest para instalación en celular
