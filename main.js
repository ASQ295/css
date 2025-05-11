window.addEventListener('DOMContentLoaded', function () {
      particlesJS("particles-js", {
        "particles": {
          "number": { "value": 100 },
          "color": { "value": "#ffffff" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.5 },
          "size": { "value": 3 },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
          "enable": true,
          "mode": "grab",
          "mouse": { "distance": 200 },
          "events": {
            "onresize": { "mode": "out" },
            "onclick": { "enable": true, "mode": "push", "nb": 4 }
          }
        },
        "retina_detect": true
      });
    });
