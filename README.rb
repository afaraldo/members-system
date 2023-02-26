Belt Exam (MERN)
Date: 26 Feb 2023
Author: Adrian Aguero

Instalacion

server:
cd kanbanboard
npm install
npm start

cd kanbanboard
cd client
npm install
npm start

Open browser in http://localhost:3000

* Puntos desarrollados *
* muestra todos los proyectos en tres columnas según el estado del proyecto. HECHO
* el botón "Iniciar proyecto" ("start project") debe establecer el estado del proyecto en "En curso". HECHO
* el botón "Mover a Completado"  ("Move to completed") debe establecer el estado del proyecto en "Completado". HECHO
* el botón "Eliminar proyecto" ("Remove Project") debería eliminar el proyecto. HECHO
* Validaciones, el proyecto es obligatorio y debe tener 3 caracteres o más. HECHO
* Validaciones, se requiere la fecha de vencimiento. HECHO

Para lograr el cinturón negro, se realizo:
* Ordenar los proyectos por "Fecha de vencimiento". HECHO
* Indica si el proyecto está vencido (la fecha de vencimiento es anterior a la de hoy) HECHO pero sin usar moments.js
* Asegurarse de que el proyecto sea único al agregarlo a la base de datos. HECHO
