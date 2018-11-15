var muestraUsuario= function(){
	fetch(datos=>datos.json('https://randomuser.me/api/?results=20'))
	.then(datos=>datos.json())
	.then(datos=>{
		document.getElementById('primerSeccion').innerHTML= " "
		for(let i=20;i<20;i++){
			document.getElementById('primerSeccion').innerHTML += `
			<article id="artFoto">
				<img src="${datos.results[i].picture.large}" alt="" id="foto">
			</article>
			<article id="Datos">

				<label for="txtNombre">Nombre</label>
				<div id="txtNombre" class="redondeadonorelive">
				${datos.results[i].name.first}
				</div>

				<label for="txtApellido">Apellido</label>
				<div id="txtApellido" class="redondeadonorelive">
				${datos.results[i].name.last}
				</div>
	
				<label for="txtGenero">Genero/label>
				<div id="txtGenero" class="redondeadonorelive">
				${datos.results[i].gender}
				</div>
				
				<label for="txtCorreo">Correo/label>
				<div id="txtCorreo" class="redondeadonorelive">
				${datos.results[i].email}
				</div>

			</article>
			<hr>
			`
		}
}

var muestraUsuario= function(){
	fetch(datos=>datos.json('https://randomuser.me/api/'))
	.then(datos=>datos.json())
	.then(datos=>{
		document.getElementById('txtNombre').innerHTML=datos.results[0].name.first
		document.getElementById('txtApellido').innerHTML =datos.results[0].name.last
		document.getElementById('txtGenero').innerHTML =datos.results[0].gender
		document.getElementById('txtCorreo').innerHTML =datos.results[0].email
		document.getElementById('foto').setAttribute('src',datos.results[0].picture.large)
	})
}

var btnUsuario=document.getElementById('btnUsuario');
btnUsuario.addEventListener("click", muestraUsuarios)