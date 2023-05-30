# Laboratorio 9 — App Calculadora

## Introducción
Este proyecto es una calculadora web que permite realizar operaciones matemáticas simples. Puedes ingresar expresiones matemáticas y obtener el resultado de forma rápida y precisa. La calculadora utiliza la biblioteca mathjs para evaluar las expresiones matemáticas y mostrar el resultado en tiempo real.. La pagina puede ser encontrada en: https://calculadora-app-23.web.app

## Tecnologías Implementadas
- ⚛ **React**: Utilizado para construir la interfaz de usuario y manejar la lógica del proyecto.
- 💅 **CSS**: Utilizado para el diseño y estilo de los componentes y la página en general.
- 📦 **Webpack**: Utilizado como el empaquetador de módulos para el proyecto.
- 📄 **JavaScript**: Se utilizaron scripts de JavaScript para controlar tanto los componentes como la pagina principal del proyecto "App".
- 📦 **package.json**: Archivo de configuración que define las dependencias y scripts del proyecto.
- 🌐 **Google Fonts**: Se utilizaron fuentes de Google Fonts para estilizar el texto en la página.

## Features
- 📱 **Responsive**: El diseño y la implementación son totalmente responsivos, lo que permite que la página se adapte y se vea correctamente en diferentes dispositivos y tamaños de pantalla.
- 🧮 **Operaciones matemáticas**: La calculadora admite operaciones de suma, resta, multiplicación y división. Además, se ha implementado la operación "módulo" para calcular el resto de una división.
- ⌨️ **Entrada por teclado**: Puedes utilizar el teclado para ingresar los números y operadores en la calculadora. Los dígitos del 0 al 9, los operadores +, -, *, / y el signo = están habilitados para ingresar mediante el teclado.
- 🔄 **Borrado de entrada**: La calculadora cuenta con un botón "Clear" que permite borrar la entrada actual y reiniciar el cálculo.
- 📄 **Eslint-airbnb**: El código de la calculadora sigue las reglas y pautas de estilo definidas por eslint-airbnb, lo que garantiza un código limpio y legible.

## Estructura
- App.js: El archivo principal de la aplicación React que define el componente App que representa la estructura de la página de la calculadora.
- App.css: El archivo de estilos para el componente App que define la apariencia y diseño de la calculadora.
- components/Button.js: El componente Button que representa un botón de la calculadora.
- components/ButtonClear.js: El componente ButtonClear que representa el botón "Clear" de la calculadora.
- components/Display.js: El componente Display que muestra la entrada y el resultado de la calculadora.
- components: La carpeta que contiene todos los componentes utilizados en la calculadora.

## Archivos Principales
- *App.js*: El archivo principal de la aplicación React que define el componente App que representa la estructura de la página de la aplicación Weather App.
- *index.js*: El archivo principal de entrada que renderiza el componente App en el elemento root del documento HTML.
- *App.css*: El archivo principal de la aplicación React que define el componente App que representa la estructura de la página de la aplicación clon de Tesla.
- *index.html*: El archivo HTML principal que estructura la página del proyecto.


## Instrucciones de Ejecución
1. Clona el repositorio en tu máquina local usando:
```javascript
https://github.com/mariaRam2003/Laboratorio9.git
```
2. Ejecuta el comando el siguiente comando para instalar las dependencias:
```javascript
npm install
```
3. Ejecuta el comando el siguiente comando para iniciar la aplicación en el servidor de desarrollo:
```javascript
npm start
```
4. Abre tu navegador web y visita http://localhost:3000 para ver la calculadora en acción.
