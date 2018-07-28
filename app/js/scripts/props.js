function addProps() {

    let bulbGeometry = new THREE.SphereBufferGeometry( 0.5, 16, 8 );
    let bulbLight = new THREE.PointLight( 0xffee88, 1, 400, 2 );
    bulbMat = new THREE.MeshStandardMaterial( {
        emissive: 0xffffee,
        emissiveIntensity: 1,
        color: 0x000000
    });
    bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
    bulbLight.position.set( 50, 15, 50);
    bulbLight.castShadow = true;
    scene.add( bulbLight );



    let floorTexture = THREE.ImageUtils.loadTexture('textures/wood.jpg');
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat = new THREE.Vector2(50, 50);
    floorTexture.anisotropy = renderer.getMaxAnisotropy();
    let floorMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        specular: 0xffffff,
        shininess: 10,
        shading: THREE.FlatShading,
        map: floorTexture
    });
    let geometry = new THREE.PlaneBufferGeometry(1000, 1000);
    let floor = new THREE.Mesh(geometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

}