class Hewan{
    constructor(nama){
        if(this.constructor === Hewan){
            throw new Error('tidak boleh menggunkan kelas ini karna class ini berfifat abstrac')

            
        }
        this.name = nama

   

    }

    sayHello(){
        throw new Error ('method abstrac belum di implementasi')
    }

}


class kuda extends Hewan{
    constructor(nama, tempatHidup){
        super(nama);

        this.tempatHidup = tempatHidup;

        
    }

    // sayHello(){
    //     console.log(`hallo saya ${this.name} , saya hiup di ${this.tempatHidup}`)
    // }
}



const kuda1 = new kuda('kelly', 'darat')
    console.log(kuda1.sayHello());
    // const kuda2= new Hewan("bujai")

    // console.log(kuda2)