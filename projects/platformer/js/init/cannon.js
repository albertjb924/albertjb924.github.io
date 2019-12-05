(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        cannon.create.onTop(400);
        cannon.create.onTop1(350);
        cannon.create.onTop(550);
        cannon.create.onTop1(600);
        cannon.create.onBottom(450);
        cannon.create.onBottom(500);
        cannon.create.onRight2(450);
        cannon.create.onLeft1(585);
        cannon.create.onLeft2(580);
        cannon.create.onLeft3(575);
        cannon.create.onLeft4(570);
        cannon.create.onLeft5(565);
        cannon.create.onRight2(675);
        cannon.create.onRight1(105);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
