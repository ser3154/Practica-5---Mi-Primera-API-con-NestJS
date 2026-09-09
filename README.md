Preguntas:

1. ¿Qué generó el comando "nest new"?
Generó la estructura base de un proyecto NestJS: la carpeta "src/" con los archivos principales
(main.ts, app.module.ts, app.controller.ts, app.service.ts), archivos de configuración (package.json,
tsconfig.json, nest-cli.json), la carpeta "test/" para pruebas, y un README.md genérico. También
instaló las dependencias necesarias de NestJS (@nestjs/core, @nestjs/common, @nestjs/platform-express,
etc.) y dejó preparado un endpoint "GET/" que responde "Hello World!" de fábrica.

2. ¿Qué hace el AppService que ya viene generado?
Es una clase marcada con el decorador "Injectable()", lo que le permite ser inyectada como dependencia
en otros lugares (como el controlador). Trae un único método, "getHello()", que simplemente devuelve el
string 'Hello World'. Representa la capa de lógica de negocio, separada del controlador, que solo se
encarga de recibir peticiones HTTP y delegar el trabajo al servicio.

3. ¿Porqué la ruta funciona sin declarar nada en app.module.ts?
Porque "AppController" ya estaba registrado en el arreglo "controller" de "AppModule" desde que "nest new"
generó el proyecto. Cualquier método nuevo que agregues dentro de ese controlador (como "getClases()" o "crearClase()",
decorado con @Get() o @Post(), queda expuesto automáticamente en ncuanto Nest lee la clase - no hace falta volver a tocar
el módulo no registra rutas individuales, registra controladores completos. Nest se encarga de leer los decoradores
del controlador y mapear las rutas por su cuenta.

4. ¿Qué pasaría si el cuerpo de la petición viniera vacío?
En método "crearClase()" recibiría "undefined" (o un objeto vacío {}, dependiendo del "Content-Type") en vez de una
clase válida. Como no hay validación, igual se agregaría al arreglo "this.clases" un elemento sin "id" ni "nombre", lo
cual "ensucia" los datos en memoria y probablemente rompería cualquier lógica posterior que dependa de esos campos. Esto se
podría prevenir agregando validaciones.

5. ¿En qué archivo vive hoy toda la lógica de la práctica?
En "src/app.controller.ts". Ahí está tanto el arreglo "clases" en memoria como los tres métodos (getHello, getClases, crearClase)
que atienden las rutas "GET /", "GET /clases" y "POST /clases". Es una limitación intencional de esta práctica - en un proyecto real,
esta lógica se separaría en un módulo, servicio y controlador propios. 
