# Actividad 3.2. Proyecto: McQueen Concessionaire (Parte II)
<p>e-actividad 3.2: Diseño web con HTML & CSS, Usando el diseño responsivo.</p>
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
<p>Esta es una continuación de nuestro proyecto iniciado en la <b>Actividad 3.1</b> (aquí te dejamos el link por si no lo has visto: <i>https://github.com/Joseeee11/E-Actividad-FrontEnd-3.1?authuser=0</i> ), en esta segunda parte el objetivo es aplicar un Diseño Responsive a nuestro sitio web siguiendo con los principios UX/UI, con determinados efectos extra como un: Efecto Parallax, Menu Desplegable, y un Carrusel de Imágenes. Por último, implementar la herramienta de <b>Webpack</b> para minificar los archivos de código</p> 
<p> La página web consiste en un consecionario online de todo tipo de vehículos nuevos y usados.</p>

<br>
<h2>Tecnologías y Herramientas empleadas </h2>
<p>En este punto lo dividiremos en dos partes: la primera con las herramientas empleadas el <b>Frontend</b> de la página web; y una segunda parte con esas herramientas empleadas para el <b>Backend</b> de la página web.</p>
<p>Sin embargo, para la edición y creación de ambas partes, empleamos la herramienta de <b><i>Visual Studio Code</i></b>, el cual es un editor de código fuente; y para compartir nuestro proyecto y trabajarlo en equipo, empleamos la herramienta de <b><i>GitHub</i></b> la cual ofrece un servicio de hosting de repositorios almacenados en la nube.</p>
<h3>Primera Parte "Frontend"</h3>
<p>Nuestra página web se compone de <b><i>HTML</i></b> y <b><i>CSS</i></b>; sin ningun uso de librerías o semejantes, a excepción de la página dedicada a los catálogos <i>(catalogo.html)</i>, el header y footer del sitio web, pues estas últimas fueron trabajadas con la librería de <b><i>Bootstrap</i></b>, el cual es un framework gratuito y de código abierto para diseños de sitios web.</p>
<p>También empleamos <b><i>Webpack</i></b> únicamente para minificar los archivos HTML y CSS, además de evitar problemas con los archivos JS presentados en nuestra página.</p>
<p>Por otro lado, para organizarnos, idear y planear el diseño del sitio web empleamos la herramienta de <b><i>Figma</i></b> el cual es un instrumento de generación de prototipos principalmente basada en la web. Allí se realizó el diseño de la estructura de diseño base, wireframes y mockups del sitio web.</p>
<p><b>Link de trabajo compartido en Figma:</b> https://www.figma.com/file/QO9rLfpwws5r5nKSvhypXO/E-Actividad-3.2?type=design&node-id=15-54&mode=design&t=mI1DLnpg6H1ncZyG-0 
<br></p>

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
	<li>Validator  =  <b><i>$npm i validator</i></b></li>
	<li>Dotenv  =  <b><i>$npm i dotenv</i></b></li></ul>
<br>

<h2>Instalación y Arranque del Sistema</h2>
<p>Como lo anteriormente dicho, para trabajar con nuestro código empleamos la herramienta de GitHub, para iniciar el arranque <i>(teniendo en cuenta que posee la herramienta empleada instala en su escritorio)</i>, ha de realizar lo siguiente:
</p>
<ol><li>Entra a nuestro repositorio llamado <b><i>E-Actividad-FrontEnd-3.2</i></b> al cual tenemos acceso, presionando <i> "Code" </i>  donde nos dirigimos a <i>"Open With GitHub Desktop"</i>, y presionamos <i>"abrir"</i> a la ventana. Se abrirá GitHub de escritorio con el siguiente aviso <i>" Cant find E-Actividad-FrontEnd-3.2"</i>, presionamos <i>"Clone Again"</i> con esto se clonará el repositorio dentro de nuestro computador y así poder trabajar en él.</li>
<li>Abrimos nuestra carpeta del repositorio en Visual Studio Code, si nos aparece una opción que nos pregunta si confiamos en los autores del archivo presionamos <i>Sí</i>.</li></ol>

<h3>Arranque del Servidor</h3>
<ol><li>En vista de que empleamos <i>.gitingnore</i> para ocultar archivos como <b>.env</b> o la carpeta de <b>node_modules</b>, primero ha de instalar <i>npm</i> de manera que se instalen todos los archivos necesarios para el funcionamiento del sistema. Esto lo podrá hacer con <i><b>$ npm i</b></i>.</li>
<li>En el momento en que se instale correctamente <i>npm</i> podemos iniciar nuestro sistema con el comando <i><b>$ npm run server</b></i> con el cual llamará a <i>nodemon</i> y comenzará a correr nuestro servidor.</li>
<li>Desplegamos la carpeta llamada <b><i>HTML</i></b>, le damos click derecho sobre <i>01_landing.html</i>, seleccionamos la opción <i>"Copiar ruta de acceso"</i>, nos dirigimos a nuestro navegador por preferencia, pegamos lo copiado en el buscador, e inmediatamente podemos ver la página</li>
<li>Clickeamos el botón de <i>"¡Regístrate!"</i>, esto te llevará a <i>registrar.html</i> donde ingresarás los datos solicitados para tu cuenta. En caso de haber algún error este será notificado en la misma página</li>
<li>Esto te llevará a Iniciar Sesión redirigiendote a <i>InicioSesion.html</i> donde ingresas tu contraseña y correo. A su vez, esto te redirigirá a <i>catalogo.html</i> donde podrás comenzar a interacturar con el sitio web</li></ol>

<h3>Figma:</h3>
<p>Dentro de nuestro apartado de trabajo titulado <b>E-Actividad-3.2</b> en Figma se encuentran dos páginas, una llamada <b>Wireframes</b> que contiene las bases estructurales de los diseños de cada página, y otra llamada <b>Mockups</b> que contendrá los mockups de cada página.</p>
<p>Cada página de Figma está compuesto por secciones tituladas con el nombre de su página del sitio web correspondiente. Además de una sección extra que muestra específicamente el header y footer del sitio web.</p>

<h3>Datos Importantes de Funcionamiento:</h3>
<ul>
	<li>Esta compuesto solo por cinco páginas formadas por: una principal <b>01_landing.html</b>, dos formularios <b>IniciarSesion.html</b> y <b>registrar.html</b>, y las dos restantes <b>Carro.html</b> y <b>catalogo.html</b></li>
	<li>Para ver los detalles de determinados vehiculos <b>(Carro.html)</b>, se tendrá acceso desde la página de catálogo, allí cuenta con un botón <b>VER</b> que lleva a <i><b>Carro.html</b></i></li>
	<li>Las páginas cuentan con una barra de navegación con los siguientes botones que llevan a:
		<b>Home</b> -> <i><b>01_landing.html</b></i>
		<b>Vehículos</b> -> <i><b>catalogo.html</b></i>
		<b>Iniciar Sesión</b> -> <i><b>InicioSesion.html</b></i></li>
<li>Para esos efectos implementados, en <b>01_landing.html</b> <b>catalogo.html</b> podemos ver un Efecto Parallax; en <b>Carro.html</b> un Carrusel de Imagénes; y la barra de navegación cuenta con un Menú Desplegable.</li>

<br>
<h2>FIN</h2>