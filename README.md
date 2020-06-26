# Librería para encriptar información en Nodejs / Typescript

_Librería desarrollada y planificada para realizar las actividades de encriptar y desencriptar con base al protocolo AES-128-CBC._

## Comenzando 🚀

_Para hacer uso de esta libería, es necesario contar con una versión mayor de node 6.0._

### Pre-requisitos 📋

1- Instalar NodeJs.

2- Instalar Apache o NGINX.

3- Contar con una llave en BASE64 con un número de 24 carácteres obligatorio.

### Instalación 🔧

1- Correr el siguiente comando:
```
npm install @gc-sistemas/encrypt@1.0.2
```
O si se desea implementar en el archivo package.json
```
"@gc-sistemas/encrypt": "1.0.*"
```

2- Importar la librería en el fichere que se desee utilizar de la siguiente forma: 
```
import Cryptr from '@gc-sistemas/encrypt'
```

## Ejecutando las pruebas ⚙️

_Para poder testear la liberría, solo basta dirigirse a la carpeta tests y correr el fichero test.js con nodemon o node:_

## Despliegue 📦

1- Proporcionar la llave en base64 con la cual se piensa realizar el proceso de encriptar y desencriptar.

## Construido con 🛠️

_A continuación se describen los modulos de node utilizados:_

* [crypto](https://nodejs.org/api/crypto.html) - El módulo criptográfico proporciona una funcionalidad criptográfica que incluye un conjunto de envoltorios para las funciones hash, HMAC, cifrar, descifrar, firmar y verificar de OpenSSL.
* [tape](https://www.npmjs.com/package/tape) - Facilita al momento de realizar pruebas unitarias del sistema.

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/OmarGo96/project-encryption_node-library/tags).

## Autor ✒️

_Omar Gonzalez_

## Licencia 📄

Este proyecto está bajo la Licencia MIT

## Expresiones de Gratitud 🎁

* Invita una cerveza 🍺 o un café ☕ <3 .
