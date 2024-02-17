// Declaración de variables
let scene, camera, renderer, stars, starGeo;

//funcion inicio
function init() {
	//Creación de escena
	scene = new THREE.Scene();

	//perspectiva de camara
	camera = new THREE.PerspectiveCamera(
		60,
		window.innerWidth / window.innerHeight,
		1,
		1000
	);
	camera.position.z = 1;
	camera.rotation.x = Math.PI / 2;

	//Renderización
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	//Creación de Geometria
	starGeo = new THREE.Geometry();
	// 6000 estrellas
	for (let i = 0; i < 6000; i++) {
		star = new THREE.Vector3(
			Math.random() * 600 - 300,
			Math.random() * 600 - 300,
			Math.random() * 600 - 300
		);
		//Establecemos la velocidad y aceleración de estrella
		star.velocity = 0;
		star.acceleration = 0.02;
		starGeo.vertices.push(star);
	}

	//Cargar la estrella
	let sprite = new THREE.TextureLoader().load('assets/frontend/img/iconos/star.png');
	//Establece el color en blanco, ajuste el tamaño y mapee con la imagen cargada.
	let starMaterial = new THREE.PointsMaterial({
		color: 0xaaaaaa,
		size: 0.7,
		map: sprite
	});

	//cargamos las estrellas en la escena
	stars = new THREE.Points(starGeo, starMaterial);
	scene.add(stars);

	//ajuste de la pantalla
	window.addEventListener('resize', onWindowResize, false);

	//animacion de estrellas.
	animate();
}
//Funcion de reajuste de pantalla
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}
//Funcion animación
function animate() {
	//REcorrer geometria de las estrellas
	starGeo.vertices.forEach((p) => {
		//aumentamos la velocidad y posición
		p.velocity += p.acceleration;
		p.y -= p.velocity;

		//Si la estrella cae reseteamos la velocidad y posición
		if (p.y < -200) {
			p.y = 200;
			p.velocity = 0;
		}
	});
	// Actualizar posición de vértices
	starGeo.verticesNeedUpdate = true;
	//rotación para crear efecto
	stars.rotation.y += 0.002;

	//Renderizamos la animación
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}
//Inicio de fondo
init();
