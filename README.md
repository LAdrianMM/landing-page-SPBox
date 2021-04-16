

## Prueba técnica: Landing Page SPBox

En este archivo encontrarán una pequeña guía para la correcta descarga y el funcionamiento de la página, explicando a detalle cada sección.

## Clonar el repositorio 

### `cd backend`

Posicionate en el directorio backend desde una consola y ejecuta el comando "npm install" para instalar las dependencias del proyecto.

### `npm run start`

Levanta el servidor para que los correos puedan ser enviados.

### `cd frontend`

En una nueva consola, posicionate en el directorio frontend e instala las dependencias de igual manera ejecutando el comando "npm install"

### `npm run start`

Levanta la página web hecha en react.


## Detalles de lo realizado

### Sección Banner

En esta primera sección se encuentra un banner de tipo carousel que se desliza automaticamente cuando el cursor no está encima del banner, haciendo referencia a que el usuario esta leyendo el anuncio y no cambie antes de tiempo, de igual forma se puede deslizar de manera manual. El tamaño no ocupa el 100% del vh para que el usuario sepa que hay mas información a continuación y así pueda seguir navegando. Mejorando la experiencia de usuario UX

Al hacer click a cualquier imagen del banner te redireccioná a una nueva página dando información de ese banner al que se le dió el click, siendo asi las rutas dinamicas.

### Sección Proyectos

En la sección del proyecto se encontrarán con lo solicitado, 3 filas y 3 columnas. Cuando no hay más proyectos para mostrar, la ultima tarjeta "Ver Más" desaparece. Cada una de las tarjetas contienen una imagen del logo de la compañia a la cual se le presto el servicio, un texto centrado que corresponde al nombre de la misma, un pequeño resumen y al final la fecha de ejecución de dicho proyecto.

### Sección Formulario

Al final del Landing Page encontrarán el formulario donde el usuario puede ingresar sus datos, teniendo validación para que los datos importantes no lleguen vacios. Además cuenta con un boton para enviar dicha información que cambia de estados dependiendo el proceso en el que se encuentre el envío (Enviando, envío exitoso o Error al enviar). 

Por defecto los datos llegan a mi correo personal, para cambiar esta dirección de correo electrónico hay que hacer lo siguiente:
    - Ingresar de forma manual a la url http://localhost:3000/accessAdmin/SPBox
    - Escribir el nuevo correo de destino y guardar.
    - Luego se redireccionara de forma automatica al Home. En este punto puede validar el envío de los datos del formulario.

De esta manera no se interfiere con la estetica del landing page. De igual forma se puede escribir de manera explicita en el código.

## Adicionales

### Responsive Design

Ya que el porcentaje mayor de visita de usuarios es a travéz de un dispositivo móvil, siempre es ideal que las páginas esten adaptadas a cualquier dispositivo.

### Página de redireccionamiento del Banner

Para representar de manera visual que los vinculos son dinámicos, realicé una tarjeta donde muestra el detalle del banner seleccionado.


## Ante cualquier duda, consulta, sugerencia, etc. No duden en escribirme y les responderé lo antes posible.

