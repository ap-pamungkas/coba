function BBM(cc, plat) {
  this.plat = plat;
  this.cc = cc;

  this.jenisBBM = function () {
    const bbm =
      cc < 1500 || this.plat === "kuning"
        ? "bbm subsidi"
        : cc === 1500
        ? "pertamax"
        : "pertamax turbo";
    return bbm;
  };
}
const pajero = new BBM(1600, "hitam");
console.log(pajero);

console.log(pajero.jenisBBM());




function Air(suhu) {
  this.suhu = suhu;

  this.kondisiAir = () => {
    const kondisi =
      this.suhu >= -100 && this.suhu <= 0
        ? "beku"
        : this.suhu >= 1 && this.suhu <= 100
        ? "cair"
        : this.suhu > 100 && this.suhu <= 500
        ? "uap"
        : "tidak terdfinisi";
    return kondisi;
  };

  console.log(this.kondisiAir());
}

const airDiKulkas = new Air(-100);

console.log(
  `dengan suhu ${
    airDiKulkas.suhu
  } derajat , maka air dalam keadaan ${airDiKulkas.kondisiAir()}`
);
