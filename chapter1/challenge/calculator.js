const rl = require("readline");

const interface = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = (question) => {
  return new Promise((resolve) => {
    interface.question(question, (data) => {
      resolve(data);
    });
  });
};

const penjumlahan = (numbers) => {
  let result = numbers.reduce((a, b) => +a + +b);
  return result;
};

const pengurangan = (numbers) => {
  let result = numbers.reduce((a, b) => +a - +b);
  return result;
};

const perkalian = (numbers) => {
  let result = numbers.reduce((a, b) => +a * +b);
  return result;
};

const pembagian = (numbers) => {
  let result = numbers.reduce((a, b) => +a / +b);
  return result;
};

const akarKuadrat = (number) => {
  return Math.sqrt(number);
};

const luasPersegi = (sisi) => {
  return +sisi * +sisi;
};

const volumeKubus = (rusuk) => {
  return +rusuk * +rusuk * +rusuk;
};

const volumeTabung = (jari, tinggi) => {
  if (+jari % 7 == 0) {
    return (22 / 7) * +jari * +jari * +tinggi;
  } else {
    return 3.14 * +jari * +jari * +tinggi;
  }
};

const operations = (menu) => {
  return new Promise(async (resolve, reject) => {
    let arrNumber = [];
    switch (menu) {
      case "1":
        while (true) {
          let input = await questions(
            "Masukkan Angka (atau 'calc' untuk mengkalkulasi): "
          );
          if (input == "calc") {
            if (isNaN(penjumlahan(arrNumber))) {
              reject("Input Value is Invalid!");
            } else {
              resolve(penjumlahan(arrNumber));
              arrNumber = [];
            }
            break;
          }
          arrNumber.push(input);
        }
        break;

      case "2":
        while (true) {
          let input = await questions(
            "Masukkan Angka (atau 'calc' untuk mengkalkulasi): "
          );
          if (input == "calc") {
            if (isNaN(pengurangan(arrNumber))) {
              reject("Input Value is Invalid!");
            } else {
              resolve(pengurangan(arrNumber));
              arrNumber = [];
            }
            break;
          }
          arrNumber.push(input);
        }
        break;

      case "3":
        while (true) {
          let input = await questions(
            "Masukkan Angka (atau 'calc' untuk mengkalkulasi): "
          );
          if (input == "calc") {
            if (isNaN(perkalian(arrNumber))) {
              reject("Input Value is Invalid!");
            } else {
              resolve(perkalian(arrNumber));
              arrNumber = [];
            }
            break;
          }
          arrNumber.push(input);
        }
        break;

      case "4":
        while (true) {
          let input = await questions(
            "Masukkan Angka (atau 'calc' untuk mengkalkulasi): "
          );
          if (input == "calc") {
            if (isNaN(pembagian(arrNumber))) {
              reject("Input Value is Invalid!");
            } else {
              resolve(pembagian(arrNumber));
              arrNumber = [];
            }
            break;
          }
          arrNumber.push(input);
        }
        break;

      case "5":
        let input = await questions("Masukkan Angka: ");
        if (isNaN(akarKuadrat(input))) {
          reject("Input Value is Invalid!");
        } else {
          resolve(akarKuadrat(input));
        }
        break;

      case "6":
        let sisi = await questions("Masukkan Panjang Sisi: ");
        if (isNaN(luasPersegi(sisi))) {
          reject("Input Value is Invalid!");
        } else {
          resolve(luasPersegi(sisi));
        }
        break;

      case "7":
        let rusuk = await questions("Masukkan Panjang Rusuk: ");
        if (isNaN(volumeKubus(rusuk))) {
          reject("Input Value is Invalid!");
        } else {
          resolve(volumeKubus(rusuk));
        }
        break;

      case "8":
        let jari = await questions("Masukkan Jari-Jari: ");
        let tinggi = await questions("Masukkan Tinggi: ");
        if (isNaN(volumeTabung(jari, tinggi))) {
          reject("Input Value is Invalid!");
        } else {
          resolve(volumeTabung(jari, tinggi));
        }
        break;
    }
  });
};

const main = async () => {
  try {
    console.log(`
    ===================
        Daftar Menu
    ===================
    1. Penjumlahan
    2. Pengurangan
    3. Perkalian
    4. Pembagian
    5. Akar Kuadrat
    6. Luas Persegi
    7. Volume Kubus
    8. Volume Tabung
    `);

    let pilihMenu = await questions("Pilih Menu: ");
    console.log(`
    ==================================
    Result: ${await operations(pilihMenu)}
    ==================================
    `);

    interface.close();
  } catch (error) {
    console.log(`
    ==================================
    Error: ${error}
    ==================================
    `);
    interface.close();
  }
};

main();
