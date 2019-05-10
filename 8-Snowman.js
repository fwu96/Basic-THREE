/*jshint esversion: 6 */
// @ts-check

/**
 * Code for page 8
 */

import {onWindowOnload} from "./Libs/helpers.js";

// these four lines fake out TypeScript into thinking that THREE
// has the same type as the T.js module, so things work for type checking
// type inferencing figures out that THREE has the same type as T
// and then I have to use T (not THREE) to avoid the "UMD Module" warning
/**  @type typeof import("./THREE/threets/index"); */
let T;
// @ts-ignore
T = THREE;

function snowman() {
    let renderer = new T.WebGLRenderer();
    renderer.setSize(500,500);
    document.getElementById("snowman").appendChild(renderer.domElement);
    let scene = new T.Scene();
    let camera = new T.PerspectiveCamera();
    camera.position.z = 10;
    camera.position.y = 5;
    camera.position.x = 0;
    camera.lookAt(0, 3, 0);
    scene.add(new T.AmbientLight("white"));
    let ground = new T.BoxGeometry(5, 0.1, 5);
    let groundM = new T.Mesh(ground, new T.MeshLambertMaterial({color: 0x888888}));
    groundM.position.y = -0.05;
    scene.add(groundM);
    let point = new T.PointLight("white", 1, 0, 0);
    point.position.set(0, 50, 15);
    scene.add(point);
    // The body parts of the snowman
    let sphere = new T.SphereGeometry(1.5, 30, 30);
    let sphere_material = new T.MeshLambertMaterial({color: "#D0D3D4"});
    let lower_body = new T.Mesh(sphere, sphere_material);
    lower_body.position.set(0, 1.5, 0);
    scene.add(lower_body);
    let upper_body = new T.Mesh(sphere, sphere_material);
    upper_body.scale.x = 0.8;
    upper_body.scale.y = 0.8;
    upper_body.scale.z = 0.8;
    upper_body.position.set(0, 3.5, 0);
    scene.add(upper_body);
    let head = new T.Mesh(sphere, sphere_material);
    head.scale.set(0.65, 0.65, 0.65);
    head.position.set(0, 5.2, 0);
    scene.add(head);
    // The face parts of the snowman
    let nose = new T.Mesh(new T.ConeGeometry(0.1, 0.5), new T.MeshLambertMaterial({color: "#E67E22"}));
    nose.position.set(0, 6.4, 0);
    nose.rotateX(Math.PI / 2);
    nose.position.z = 1.3;
    nose.position.y = 5.3;
    scene.add(nose);
    let eye_sphere = new T.SphereGeometry(0.1, 60, 60);
    let right_eye = new T.Mesh(eye_sphere, new T.MeshLambertMaterial({color: "#17202A"}));
    right_eye.position.set(0.4, 5.5, 1);
    scene.add(right_eye);
    let left_eye = new T.Mesh(eye_sphere, new T.MeshLambertMaterial({color: "#17202A"}));
    left_eye.position.set(-0.4, 5.5, 1);
    scene.add(left_eye);
    // The hat of the snowman
    let cylinder = new T.CylinderGeometry(0.4, 0.6, 0.6, 32);
    let hat_body = new T.Mesh(cylinder, new T.MeshLambertMaterial({color: "#D35400"}));
    hat_body.position.set(0, 6.2, 0);
    scene.add(hat_body);
    let ring = new T.RingGeometry(0.3, 0.34, 60);
    let ring_material = new T.MeshPhongMaterial({color: "#839192"});
    ring_material.specular.set("#839192");
    let hat_ring = new T.Mesh(ring, ring_material);
    hat_ring.position.set(-0.3, 6.5, 0);
    hat_ring.rotateX(Math.PI / 4);
    hat_ring.rotateY(-Math.PI / 4);
    scene.add(hat_ring);
    // Add another light
    let sunlight = new T.PointLight("#F9D71C");
    sunlight.position.set(-10, 10, 0);
    scene.add(sunlight);
    renderer.render(scene, camera);
}
onWindowOnload(snowman);
