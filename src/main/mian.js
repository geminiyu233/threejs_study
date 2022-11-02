/*
 * @Author: yushuang
 * @Date: 2022-11-02 17:15:37
 * @LastEditors: yushuang
 * @LastEditTime: 2022-11-02 17:55:53
 * @Description:
 */
import * as THREE from "three";

// 1、创建场景
const scene = new THREE.Scene();

// 2、创建相机
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// 设置相机位置
camera.position.set(0, 0, 10); // x, y, z

// 3、添加物体

// 创建一个几何体
const geometry = new THREE.BoxGeometry(1, 1, 1); // 几何体
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 材质

// 根据几何体和材质创建物体
const cube = new THREE.Mesh(geometry, material);
// 讲创建的物体加入到场景中
scene.add(cube);

// 4、初始化渲染器并设置宽高
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// 将webGL的canvas内容添加到body
document.body.appendChild(renderer.domElement);

// 5、使用渲染器，将场景和相机添加进来
renderer.render(scene, camera);
