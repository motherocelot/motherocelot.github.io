import {useEffect, useRef} from 'react';
import * as THREE from 'three';

export const Globe = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create a globe
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const material = new THREE.MeshStandardMaterial({
            color: 0x00ff41,
            wireframe: true,
            emissive: 0x00ff41,
            emissiveIntensity: 0.3,
            opacity: 0.5,
        });
        const globe = new THREE.Mesh(geometry, material);
        scene.add(globe);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0x00ff41, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        camera.position.z = 15;

        // Animation Loop
        const animate = function () {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.005;
            globe.rotation.x += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        //Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose(); 
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />;
};