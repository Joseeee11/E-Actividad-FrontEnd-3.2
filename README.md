# Actividad 3.1. Proyecto: McQueen Concessionaire
<p>e-actividad 3.1: Realizar un sitio web que contenga las propiedades esenciales del CSS. No es necesario el diseño responsive.</p>
<br>
<h2> Colaboradores </h2><ul>
<li>Rosimar Barrios  <i>C.I: 30.976.217</i></li>
<li>Cristian Rangel  <i>C.I: 31.898.075</i></li>
<li>Javier Olivar  <i>C.I: 30.737.648</i></li>
<li>José Márquez  <i>C.I: 28.206.881</i></li>
</ul>
<br>

<h2>Introducción</h2>
<p><b>Link del video explicativo:</b>  </p>
<p>Nuestro proyecto tiene como objetivo principal realizar los inicios de una página web tanto con su estructura base en lenguaje HTML <i>(HyperText Markup Language)</i>, como también darles estilos y una mejor vista para el usuario por medio del lenguaje CSS <i>(Cascading Style Sheets)</i>; este último centrándonos en crear un diseño basado en los principios UX/UI <i>(User Experience / User Interface)</i> de los cuales algunos en los que nos enfocamos son:</p> 
<ul><li>Claridad y coherencia de la página web</li>
	<li>Diseño eficaz y agradable</li>
	<li>Usabilidad intuitiva</li>
	<li>Jerarquía Visual</li></ul>
<p> La página web a crear consiste en un consecionario online de todo tipo de vehículos nuevos y usados, con un catálogo que incluye las caracteríasticas precisas y esenciales de cada vehículo necesarias para el usuario. De igual forma, un acceso a detalle de los mismos, un formulario de Inicio de Sesión y Registro breve e intuitivo, y una página principal Landing Page dedicada a presentar al usuario el servicio con beneficios precisos basados en las necesidades de los futuros clientes.</p>
<p>Cabe aclarar que nuestro proyecto se centra en el Frontend de la página web, su interfaz, su diseño y los principios UX/UI; por lo que, el Backend a ejecutar será sencillo con el fin de gestionar determinados datos de la página y el encriptado de contraseñas.</p>
<br>
<h2>Tecnologías y Herramientas empleadas </h2>
<p>En este punto lo dividiremos en dos partes: la primera con las herramientas empleadas para la interfaz, todo lo que se incluye en el <b>Frontend</b> de la página web; y una segunda parte con esas herramientas empleadas para le ejecución del servidor y DB <i>(Data Base)</i>, es decir, todo lo que se incluye en el <b>Backend</b> de la página web.</p>
<p>Sin embargo, para la edición y creación de ambas partes, empleamos la herramienta de <b><i>Visual Studio Code</i></b>, el cual es un editor de código fuente desarrollado por Microsoft; y para compartir nuestro proyecto y trabajarlo en equipo, empleamos la herramienta de <b><i>GitHub</i></b> la cual ofrece un servicio de hosting de repositorios almacenados en la nube.</p>
<h3>Primera Parte "Frontend"</h3>
<p>Nuestra página web se compone de <b><i>HTML</i></b> y <b><i>CSS</i></b>; sin ningun uso de librerías o semejantes, a excepción de la página dedicada a los catálogos <i>(catalogo.html)</i>, el header y footer del sitio web, pues estas últimas fueron trabajadas con la librería de <b><i>Bootstrap</i></b>, el cual es un framework gratuito y de código abierto para diseños de sitios web.</p>
<p>Por otro lado, para organizarnos, idear y planear el diseño del sitio web empleamos la herramienta de <b><i>Figma</i></b> el cual es un instrumento de generación de prototipos principalmente basada en la web. Allí se realizó el diseño de la estructura de diseño base y mockups del sitio web.</p>
<br>
<h3>Segunda Parte "Backend"</h3>
<p>Principalmente la base de datos <i>(DB)</i> la trabajamos con <b><i>MySQL</i></b>, el cual es un sistema de gestión de bases de datos relacional.</p>
<p><i>Se encuentra en la carpeta "DB" la llamamos "bd_mcqueen.sql"</i></p>
<p>Nuestro sitio web trabaja con el entorno de tiempo de ejecución de JavaScript: <b><i>Node js</i></b>; del cual se hizo uso de paquetes que facilitaron la elaboración del programa (aplicación) como son:</p>
<ul><li>Express-generator  = <b><i>$npm i -g express-generator</i></b></li>
	<li>Nodemon  =  <b><i>$npm i nodemon</i></b></li>
	<li>Bcryptjs = <b><i>$npm i bcryptjs</i></b></li>
	<li>JWT  =  <b><i>$npm i jsonwebtoken</i></b></li>
	<li>MySQL  =  <b><i>$npm i mysql</i></b></li>
	<li>Cookie  =  <b><i>$npm i cookie</i></b></li>	
	<li>Cors  =  <b><i>$npm i cors</i></b></li>
	<li>Dotenv  =  <b><i>$npm i dotenv</i></b></li></ul>
<br>

<h2>Instalación y Arranque del Sistema</h2>
<p>Como lo anteriormente dicho, para trabajar con nuestro código empleamos la herramienta de GitHub, para iniciar el arranque <i>(teniendo en cuenta que posee la herramienta empleada instala en su escritorio)</i>, ha de realizar lo siguiente:
</p>
<ol><li>Entra a nuestro repositorio llamado <b><i>E-Actividad-FrontEnd-3.1</i></b> al cual tenemos acceso, presionando <i> "Code" </i>  donde nos dirigimos a <i>"Open With GitHub Desktop"</i>, y presionamos <i>"abrir"</i> a la ventana. Se abrirá GitHub de escritorio con el siguiente aviso <i>" Cant find E-Actividad-FrontEnd-3.1"</i>, presionamos <i>"Clone Again"</i> con esto se clonará el repositorio dentro de nuestro computador y así poder trabajar en él.</li>
<li>Abrimos nuestra carpeta del repositorio en Visual Studio Code, si nos aparece una opción que nos pregunta si confiamos en los autores del archivo presionamos <i>Sí</i>.</li></ol>
<h3>Arranque del Servidor</h3>
<ol><li>En vista de que empleamos <i>.gitingnore</i> para ocultar archivos como <b>.env</b> o la carpeta de <b>node_modules</b>, primero ha de instalar <i>npm</i> de manera que se instalen todos los archivos necesarios para el funcionamiento del sistema. Esto lo podrá hacer con <i><b>$ npm i</b></i>.</li>
<li>En el momento en que se instale correctamente <i>npm</i> podemos iniciar nuestro sistema con el comando <i><b>$ npm run server</b></i> con el cual llamará a <i>nodemon</i> y comenzará a correr nuestro servidor.</li>
<li>Para probarlo podemos ir a nuestro navegador y escribir la url <i><b>localhost:300/iniciar_sesion</b></i> ; es de aclarar que dirigirse al puerto 3000 es en caso de que no lo hallamos dado acceso a los datos almacenados en las variables de entorno.</li></ol>
<h3>Sitio Web</h3>
<p>Puede ver todas las páginas sin necesidad del arranque el sistema, de la siguiente forma:</p>
<p>Desplegamos la carpeta llamada <b><i>HTML</i></b>, le damos click derecho sobre alguno de los archivos <i>.html</i>, seleccionamos la opción <i>"Copiar ruta de acceso"</i>, nos dirigimos a nuestro navegador por preferencia, pegamos lo copiado en el buscador, e inmediatamente podemos observar la página</p>
<p>Sin embargo, para poder interactuar bien y ver determinadas funcionalidades del inicio de sesión (por ejemplo) es necesario el arranque del sistema.</p>
<h3>Figma:</h3>
<p>Dentro de nuestro apartado de trabajo titulado <b>E-Actividad 3.1</b> en Figma se encuentran una página, llamada <b>Estructura de Diseño</b> que contiene las bases estructurales de los diseños de cada página; y otra página titulada <b>Árboles CSSDOM</b>donde se encuentran los árboles CSSDOM de nuestro sitio web</p>
<p>Estas páginas se componen por secciones tituladas con el nombre de su página del sitio web correspondiente. Además de una sección extra que muestra específicamente el header y footer del sitio web.</p>
<p><b>Link de primer trabajo compartido en Figma:</b> https://www.figma.com/file/iuhhWdkXOo6bmPSxMRpGHZ/E-Actividad-3.1?type=design&node-id=0-1&mode=design&t=0OtxCC14hTxO7J03-0 </p>
<p>Luego en este otro apartado de trabajo titulado <b>Actividad FrontEnd 3.1</b> se encuentra una página llamada <b>Mockups</b> la cual contiene los diseños mockups de nuestro sitio web.</p>
<p><b>Link de segundo trabajo compartido en Figma:</b> https://www.figma.com/file/BOeIav3lXddyaiG5uiCLyE/Actividad-FrontEnd-3.1?type=design&node-id=9-2&mode=design 
<br></p>
<h3>Datos Importantes de Funcionamiento:</h3>
<ul>
	<li>Para ver los detalles de determinados vehiculos <b>(Carro.html)</b>, se tendrá acceso desde la página de catálogo, allí cuenta con un botón <b>VER</b> que lleva a los detalles.</li>
	<li>Esta compuesto solo por cinco páginas formadas por: una principal <b>01_landing.html</b>, dos formularios <b>IniciarSesion.html</b> y <b>registrar.html</b>, y las dos restantes <b>Carro.html</b> y <b>catalogo.html</b></li>
	<li>Las páginas cuentan con una barra de navegación con los siguientes botones que llevan a:
		<b>Home</b> -> <i><b>01_landing.html</b></i>
		<b>Vehículos</b> -> <i><b>catalogo.html</b></i>
		<b>Iniciar Sesión</b> -> <i><b>IniciarSesion.html</b></i></li>
<li>Se implementaron variedad de propiedades para dar estilo en CSS, de las cuales se comenta la explicación de su función, y para que se emplearon en nuestro código. Algunos ejemplos: 

```
background-size: cover; /*BACKGROUND-SIZE: especifica el tamaño de las imágenes de fondo; COVER: Escala la imagen al mayor tamaño posible sin estirarla*/

```

```
box-shadow: 5px 5px 10px #000; /*BOX-SHADOW: agrega sombras a la caja, sus valores se componen de eje X; eje Y; Desenfoque; color*/
```
</li>

<br>
<h2>FIN</h2>