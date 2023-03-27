# Especificaciones Prueba técnica para Juniors y Trainees de React en Live Coding

APIs:
- Facts Random: https://catfact.ninja/fact
- Imagen Random: https://cataas.com/
    buscar como recuperar imagen en la api, aquí busque el json para ver como viene la imagen
    'https://cataas.com/cat/says/${firstword}?size=50&color=red&json=true'

Recupera un hecho aleatorio de gatos de la primera api y muestra una imagen de un gato con la primera palabra del hecho de la segunda api.

Nota: sin template inicializando tu mismo el proyecto en vanilla con vite

npm create vite@latest
npm install @vitejs/plugin-react -E
npm install react react-dom -E

crear config
vite.config.js

OJO => EVITAR QUE PÁGINA ESTE EN BLANCO Para eso INSTALAR EL eslintConfig 

npm install standard -D
configurar en package.json
  "eslintConfig": {
    "extends":"./node_modules/standard/eslintrc.json"
  }


