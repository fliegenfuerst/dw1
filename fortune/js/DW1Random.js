function DW1Random (){
    //this.seed=146289466,
    this.seed=Math.floor(Math.random() * (4294967296))-2147483648,
    this.next=function(){
        this.seed = (this.seed * 0x41C64E6D + 0x3039) >> 0;
        return (this.seed >>> 0x10) & 0x7FFF;
    },
    this.nextRanged=function(limit) {
        return (this.next() * limit) >> 0xF;
    },
    this.nextModulo=function(limit) {
        return this.next() % limit;
    },
    this.getCurrentSeed=function(){
        return this.seed;
    },
    this.setCurrentSeed=function(seed) {
        this.seed = seed;
    }
}