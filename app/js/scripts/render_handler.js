function animate() {
    requestAnimationFrame(animate);
    update();
    render();
}

function update(dt) {
    resize();
    camera.updateProjectionMatrix();
    controls.update(dt);
}
function render(dt) {
    renderer.render(scene, camera);
}