
(function(){
    "use strict";

    console.log('====================== functional version ======================');
    let createBicyclePrototye = function () {
        
        return {
            speed: 0,
            applyBrake: function(){
                this.speed--;
            },
            speedup: function(){
                this.speed++;
            }
        }
    }
    
    let createMountainBikeProtoype = function (proto) {
        
        return {
            obj: Object.create(proto),
            gear: 1,
            setGear: function(value){
                this.gear = value;
            }
        }
    }

    let bicyclePrototype;
    let mountainBikeProtoype;

    
    function start() {
        let prototype =  createBicyclePrototye();
        bicyclePrototype =  createBicyclePrototye();
        mountainBikeProtoype =  createMountainBikeProtoype(prototype);

        console.log('bicyclePrototype: ', bicyclePrototype);
        console.log('***speedUp');
        bicyclePrototype.speedup();
        console.log('bicyclePrototype: ', bicyclePrototype);
        console.log('***brake');
        bicyclePrototype.applyBrake();
        console.log('bicyclePrototype: ', bicyclePrototype);

        console.log('***********************');
        console.log('mountainBikeProtoype: ', mountainBikeProtoype);
        console.log('***speedUp');
        mountainBikeProtoype.obj.speedup();
        //mountainBikeProtoype.obj.speedup();
        console.log('mountainBikeProtoype: ', mountainBikeProtoype);
        mountainBikeProtoype.setGear(2);
        console.log('***change gear to 2: ');
        console.log(mountainBikeProtoype);
        

    }

    start();


})()