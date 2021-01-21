class Bicycle{
    constructor(){
        this.speed=0;
    }
    speedup(){
        this.speed++;
    }
    applyBrake(){
        this.speed--;
    }
}

class MoutainBike{
    constructor(prototype){
        this.obj = prototype;
        this.gear=1;
    }
    setGear(value){
        this.gear = value;
    }
    
}

(function () {
    "use strict";
    console.log('====================== Class version ======================');
    function start() {
        let prototype =  new Bicycle();
        let bicycle =  new Bicycle();
        let mountainBike =  new MoutainBike(prototype);

        console.log('bicycle: ', bicycle);
        console.log('***speedUp');
        bicycle.speedup();
        console.log('bicycle: ', bicycle);
        console.log('***brake');
        bicycle.applyBrake();
        console.log('bicycle: ', bicycle);

        console.log('***********************');
        console.log('mountainBike: ', mountainBike);
        console.log('***speedUp');
        mountainBike.obj.speedup();
        console.log('mountainBike: ', mountainBike);
        mountainBike.setGear(2);
        console.log('***change gear to 2: ');
        console.log(mountainBike);
        

    }

    start();

})();