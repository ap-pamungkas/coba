class Mobil {
    constructor(merkMobil, jumlah){
        this.merk=merkMobil;
        this.jumlah = jumlah;
    }


    stok(){
        return "stok Mobil " + this.merk + "ada " + this.jumlah;

    }
}


class Avanza extends Mobil{
    constructor(merkMobil, jumlah){
        super(merkMobil, jumlah);
    }

    stok(){
        return "stok Mobil " + this.merk + "ada " + this.jumlah + "buah";

    }
}


const avanza = new Avanza("avanza", 20);


console.log(avanza.stok())