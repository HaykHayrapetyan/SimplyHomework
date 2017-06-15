var faker = require('faker');
var numberOfFighters = 3;
class Fighter{
    constructor(){
        this.health = Math.floor((Math.random() * 20) + 80);
        this.power = Math.round(((Math.random() * 3) + 2)*10)/10;
        this.speed = Math.round(((Math.random() * 4) + 1)*1000)/1000;
        this.name = faker.name.findName();
        this.initialSpeed = this.speed;
        this.initialHealth = this.health;
    }
    hit(gladiator, arrIndex){
        console.log(`${gladiator.name} x ${gladiator.health} hits ${this.name} x ${this.health} with power ${gladiator.power}`)
        this.health -= gladiator.power;
        this.speed = this.initialSpeed * (this.health/this.initialHealth)
        if(this.health < 30 && this.health > 15){
            this.speed *= 3;
        }
        if(this.health <= 0){
            console.log(`${this.name} dying`);
            var CeaserDecision = (Math.random());
            if(CeaserDecision > 0.5){
                console.log(`Caesar showed MERCI to ${this.name}`);
                this.health += 50;
            }
            else{
                console.log(`Caesar showed DEATH to ${this.name}`);
                fightersClub.splice(arrIndex, 1);
                numberOfFighters--;
            }
        }
        else{
        }
    }
    
}

var fightersClub = [];
for(i = 0; i < numberOfFighters; i++){
    fightersClub.push(new Fighter());
}

var randomizer = (abgar, numberOfFighters)=>{
     b = Math.floor(Math.random()*numberOfFighters);
     while(b===abgar){
        b = Math.floor(Math.random()*numberOfFighters);        
     }
     return b;
}


var fight = ()=>{
    var a = Math.floor(Math.random()*numberOfFighters);
    var b = randomizer(a, numberOfFighters);
    fightersClub[a].hit(fightersClub[b], a);
    if(fightersClub.length === 1){
        console.log(`${fightersClub[0].name} won the battle with health x${fightersClub[0].health}`);
        return;
    }
    
    setTimeout(() => fight(), fightersClub[b].speed * 1000);
}


fight();

//fightersClub[0].hit(fightersClub[1], 1);