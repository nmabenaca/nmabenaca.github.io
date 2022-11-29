(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 10 },
    mex: { assetKey: "max", points: 20 },
    steve: { assetKey: "steve", points: 30 },
    grace: { assetKey: "grace", points: 40 },
    kennedi: { assetKey: "kenndi", points: 50 },
    ramune: { assetKey: "ramune", points: 11.5},
    boba: {assetKey: "boba", points: 11.5},
    cat: {assetKey: "cat", points: 11.5},
    icecream: {assetKey: "icecream", points: 11.5},
    macron: {assetKey: "macron", points: 11.5},
  };

  window.opspark.collectable.type = type;

  /**
   * init: Initialize all collectables.
   *
   * GOAL: Add as many collectables as necessary to make your level challenging.
   *
   * Use the createCollectable() Function to create collectables for the level.
   * See the type Object, above, for the types of collectables and their point values.
   *
   * createCollectable() takes these arguments:
   *
   *      createCollectable(type, x, y, gravity, bounce);
   *
   *      type: The type of the collectable, use the type Object above.
   *      x: The x coordineate for the collectable.
   *      y: The y coordineate for the collectable.
   *      gravity: OPTIONAL The gravitational pull on the collectable.
   *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
   */
  function init(game) {
    let createCollectable = collectable.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
    createCollectable(type.ramune, 50, 450, 10, 0.9);
    createCollectable(type.boba, 800, 350, 10, 0.9);    // example:
    createCollectable(type.cat, 50, 250, 10, 0.9);
    createCollectable(type.icecream, 750, 150, 10, 0.9);
    createCollectable(type.macron, 0, 25, 20, 0.9)

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  collectable.init = init;
})(window);
