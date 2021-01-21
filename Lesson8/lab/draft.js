(function(){
    "use strict";
    var createBicyclePrototye = function(){
        return {
            speed: 0,
            applyBrake: function(val){
                this.speed -= val
            },
            speedUp: function(val){
                this.speed += val
            }
        }
    };

    var createMountainBikePrototype = function(prototype){
        var obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function(val){
            this.gear = val;
        };
        return obj;
    };

    var start = function(){
        var createBicyclePrototyeObj = new createBicyclePrototye();
        var createMountainBikePrototypeObj = new createMountainBikePrototype(createBicyclePrototyeObj);

        return createMountainBikePrototypeObj;
    };
    var obj1 = createBicyclePrototye();
    obj1.speed = 100;
    obj1.speedUp(20);
    console.log(obj1.speed);

    var obj2 = createMountainBikePrototype(obj1);
    obj2.setGear(5);
    console.log(obj2.gear);
    console.log(obj2.speed);

    var obj3 = start();
    obj3.setGear(4);
    obj3.speedUp(100)
    console.log(obj3.gear);
    console.log(obj3.speed);
})();