class Mahasiswa{
    constructor (firstName, lastName, gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;

        

        this.namaLengkap=()=>{
            return this.firstName +" "+  this.lastName;
        }

    }



    jurusan(){
        return `mahasiwa dengan jenis kelamin ${this.gender} terbanyak Berada Di jurusan mesin`
    }
}


class NamaMahasiswa extends Mahasiswa{
    constructor(firstName, lastName, gender, age, major,address){
        super(firstName, lastName, gender);
        this.age=age;
        this.address = address;
        this.major = major;

    }
    jurusan(){
        return `mahasiwa dengan jenis kelamin ${this.gender} terbanyak Berada Di jurusan mesin dan ${this.firstName} berada dijurusan ${this.major} `
    }
}


const  nama = new NamaMahasiswa("budi", "nugraha" , "laki-laki", "ketapang", "mesin")

console.log(nama.jurusan());
console.log(nama.firstName);
console.log(nama.namaLengkap());