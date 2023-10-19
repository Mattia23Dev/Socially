<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Mattia23Dev/Socially.git">
    <img src="/src/assets/icons/app-icons/png/1024x1024.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Socially</h3>

  <p align="center">
    Tutti i social in una finestra!
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Releases](#releases)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

[![Socially Screen Shot][product-screenshot]](https://getsocially.app)

Socially è un'applicazione che combina tutti i messaggi diretti e le chat dei social media in un'unica finestra. Lo scopo di questa app è aumentare la produttività e ridurre la necessità di aprire più schede del browser.
### Built With

- [Electron](https://github.com/electron/electron)
- [React.JS](https://reactjs.org)
- [Electron JSON Config](https://github.com/de-luca/electron-json-config)
- [React Toastify](https://github.com/fkhadra/react-toastify)

<!-- GETTING STARTED -->

## Getting Started

Per una copia in locale, prima di tutto dovrete installare Node JS e NPM, successivamente:

1. Clone the repo

```sh
git clone https://github.com/Mattia23Dev/Socially.git
```

2. Install NPM packages

```sh
npm install
```

Se devi sviluppare il progetto, cambia la linea 6 del package.json a:
```json
"main": "src/electron.js",
```

 E nel file `src/electron.js`, assicurati che hai settato 'isDev' su true:

```javascript
let isDev = true;
```

Per partire il progetto digitate sul terminale:

```sh
npm start
```

E poi l'app electron:

```sh
npm run electron
```

## Contact

Mattia Noris - mattianoris.business@gmail.com

[product-screenshot]: https://getsocially.app/assets/img/champnew.png
