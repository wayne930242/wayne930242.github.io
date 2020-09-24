/**
 * Created by Tang on 2017/4/15.
 */
$(function () {
  var mouseX = 0,
    mouseY = 0,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    SEPARATION = 200,
    AMOUNTX = 10,
    AMOUNTY = 10,
    camera, scene, renderer;
  init();
  animate();

  function init() {
    var container, separation = 100,
      amountX = 50,
      amountY = 50,
      particles, particle;
    container = document.createElement(&apos;div&apos;);
    // &#x8BBE;&#x7F6E;css
    container.style.position = &quot;fixed&quot;;
    container.style.top = &quot;0px&quot;;
    container.style.left = &quot;0px&quot;;
    container.style.zIndex = &quot;-1&quot;;
    container.style.opacity = &quot;0.5&quot;;

    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 100;
    scene = new THREE.Scene();
    renderer = new THREE.CanvasRenderer({
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    // particles
    var PI2 = Math.PI * 2;
    var material = new THREE.SpriteCanvasMaterial({
      color: 10263708,
      program: function (context) {
        context.beginPath();
        context.arc(0, 0, 0.5, 0, PI2, true);
        context.fill();
      }
    });
    var geometry = new THREE.Geometry();
    for (var i = 0; i &lt; 100; i++) {
      particle = new THREE.Sprite(material);
      particle.position.x = Math.random() * 2 - 1;
      particle.position.y = Math.random() * 2 - 1;
      particle.position.z = Math.random() * 2 - 1;
      particle.position.normalize();
      particle.position.multiplyScalar(Math.random() * 10 + 450);
      particle.scale.x = particle.scale.y = 10;
      scene.add(particle);
      geometry.vertices.push(particle.position);
    }
    // lines
    var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
      color: 10263708,
      opacity: 0.5
    }));
    scene.add(line);
    document.addEventListener(&apos;mousemove&apos;, onDocumentMouseMove, false);
    document.addEventListener(&apos;touchstart&apos;, onDocumentTouchStart, false);
    document.addEventListener(&apos;touchmove&apos;, onDocumentTouchMove, false);
    //
    window.addEventListener(&apos;resize&apos;, onWindowResize, false);
  }

  function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  //
  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  function onDocumentTouchStart(event) {
    if (event.touches.length &gt; 1) {
      //event.preventDefault();
      mouseX = event.touches[0].pageX - windowHalfX;
      //mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
  }

  function onDocumentTouchMove(event) {
    if (event.touches.length == 1) {
      //event.preventDefault();
      mouseX = event.touches[0].pageX - windowHalfX;
      //mouseY = event.touches[ 0 ].pageY - windowHalfY;
    }
  }
  //
  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    camera.position.x += (mouseX - camera.position.x) * .05;
    camera.position.y += (-mouseY + 200 - camera.position.y) * .05;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
})