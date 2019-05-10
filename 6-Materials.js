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

function materials() {
    let renderer = new T.WebGLRenderer();
    renderer.setSize(500,500);
    document.getElementById("materials").appendChild(renderer.domElement);

    let scene = new T.Scene();

    // make an array of materials
    // student should improve these materials
    let materials = [];

    // Give each material some parameters to create different appearances
    materials[0] = new T.MeshStandardMaterial();
    materials[1] = new T.MeshStandardMaterial();
    materials[2] = new T.MeshStandardMaterial();
    materials[3] = new T.MeshStandardMaterial();
    materials[4] = new T.MeshStandardMaterial();
    materials[5] = new T.MeshStandardMaterial();
    materials[6] = new T.MeshStandardMaterial();
    materials[7] = new T.MeshStandardMaterial();
    materials[8] = new T.MeshStandardMaterial();
    // set for sphere 1
    materials[0].color.set("#FDD835");
    materials[0].roughness = 0.0;
    // set for sphere 2
    materials[1].emissive.set("#8BC34A");
    materials[1].metalness = 0.9;
    materials[1].roughness = 0.5;
    // set for sphere 3
    materials[2].color.set("#4FC3F7");
    materials[2].metalness = 0.3;
    // set for sphere 4
    materials[3].color.set("#5E35B1");
    materials[3].emissive.set("#5E35B1");
    materials[3].emissiveIntensity = 0.3;
    // set for sphere 5
    materials[4].color.set("#EC407A");
    materials[4].roughness = 0.3;
    materials[4].metalness = 0.3;
    // set for sphere 6
    materials[5].color.set("#00796B");
    materials[5].roughness = 0.9;
    // set for sphere 7
    materials[6].color.set("#BF360C");
    materials[6].metalness = 0.9;
    // set for sphere 8
    materials[7].emissive.set("#7E57C2");
    materials[7].emissiveIntensity = 0.6;
    materials[7].metalness = 0.1;
    // set for sphere 9
    materials[8].color.set("#607D8B");
    materials[8].emissive.set("#607D8B");
    materials[8].emissiveIntensity = 0.2;
    materials[8].roughness = 0.7;
    materials[8].metalness = 0.8;
    // make spheres to show off the materials
    let geometry = new T.SphereBufferGeometry(1,20,20);

    // array of meshes
    let spheres = [];
    for(let i=0; i<9; i++) {
        spheres[i] = new T.Mesh(geometry, materials[i]);
        spheres[i].position.set( ((i%3)-1)*3, 0, Math.floor(i/3)*3);
        scene.add(spheres[i]);
    }

    // make some lights
    let l1 = new T.DirectionalLight();
    let l2 = new T.PointLight();
    l2.position.set(10,10,10);
    scene.add(l1);
    scene.add(l2);

    // a camera
    let camera = new T.PerspectiveCamera();
    camera.position.set(0,10,10);
    camera.lookAt(0,-2,0);

    renderer.render(scene,camera);
}
onWindowOnload(materials);
