const damage={};
damage.FIRE={FIRE:10,BATTLE:15,AIR:5,EARTH:20,ICE:20,MECH:15,FILTH:20,NONE:10};
damage.BATTLE={FIRE:10,BATTLE:10,AIR:2,EARTH:15,ICE:10,MECH:10,FILTH:5,NONE:10};
damage.AIR={FIRE:15,BATTLE:15,AIR:15,EARTH:5,ICE:15,MECH:15,FILTH:5,NONE:10};
damage.EARTH={FIRE:5,BATTLE:15,AIR:20,EARTH:10,ICE:10,MECH:5,FILTH:15,NONE:10};
damage.ICE={FIRE:20,BATTLE:15,AIR:5,EARTH:15,ICE:10,MECH:15,FILTH:20,NONE:10};
damage.MECH={FIRE:10,BATTLE:10,AIR:5,EARTH:10,ICE:10,MECH:10,FILTH:5,NONE:10};
damage.FILTH={FIRE:5,BATTLE:15,AIR:5,EARTH:2,ICE:10,MECH:20,FILTH:2,NONE:10};
function getRandom(){//1.1 for worst case
    return 1.1;
}
function getStatsFactor(def,off){
    let result=(off-def);
    if(result>500){
        return 2;
    }else if(result<=-500){
        return 0;
    }
    return (1+result/500).toFixed(12);
}
function getDamage(power,speciality,attack,defender,defense){// movePower,moveSpeciality,attackerOffense,defenderSpecialitiesArray,defenderDefense
    let specialtyFactor=(damage[speciality][defender[0]]+damage[speciality][defender[1]]+damage[speciality][defender[2]])/30;
    let statsFactor=getStatsFactor(defense,attack);
    let res=power*specialtyFactor*getRandom()*statsFactor;
    if(res==0){
        res=1;
    }
    return Math.floor(res);
}
function getDamageRaw(power,speciality,defender){// movePower,moveSpeciality,defenderSpecialitiesArray
    let specialtyFactor=(damage[speciality][defender[0]]+damage[speciality][defender[1]]+damage[speciality][defender[2]])/30;
    return power*specialtyFactor*getRandom();
}
