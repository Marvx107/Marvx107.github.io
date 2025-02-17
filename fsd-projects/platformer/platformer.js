$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms

    createPlatform(200, 630, 360, 20, "yellow");
    createPlatform(560, 530, 140, 20, "yellow");
    createPlatform(700, 400, 20, 150, "yellow");
    createPlatform(550, 400, 80, 20, "yellow");
    createPlatform(700, 400, 20, 150, "yellow");
    createPlatform(610, 300, 20, 100, "yellow");
    createPlatform(700, 400, 300, 20, "yellow");
    createPlatform(610, 280, 300, 20, "yellow");
    createPlatform(990, 400, 20, 250, "yellow");
    createPlatform(1100, 280, 20, 460, "yellow");
    createPlatform(560, 550, 20, 100, "yellow");
    createPlatform(200, 630, 20, 110, "yellow");
    createPlatform(900, 610, 100, 20, "yellow");
    createPlatform(300, 300, 20, 20, "yellow");
    createPlatform(300, 300, 20, 20, "yellow");
    createPlatform(1000, 280, 100, 20, "yellow");
    createPlatform(1350, 280, 50, 20, "yellow");
    createPlatform(1350, 180, 50, 20, "yellow");

        // TODO 3 - Create Collectables

        createCollectable("star", 1350, 50);
        createCollectable("star", 100, 100);
        createCollectable("star", 930, 450);
        createCollectable("star", 230, 680);

    // TODO 4 - Create Cannons

    createCannon("right", 750, 2000);
    createCannon("top", 1010, 5000);
    createCannon("right", 300, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
