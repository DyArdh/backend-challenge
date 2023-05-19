const prompt = require("prompt-sync")();

class Score {
  constructor(input) {
    this.input = input;
  }
  scoreValue() {
    return this.input;
  }
}

function newScore() {
  const arr = [];
  while (true) {
    let input = prompt("Enter Score (q for finish): ");
    if (input == "q") {
      break;
    } else {
      arr.push(parseInt(input));
    }
  }
  return arr;
}

class ScoreProcess extends Score {
  constructor(input) {
    super(input);
  }

  min() {
    return Math.min(...this.input);
  }

  max() {
    return Math.max(...this.input);
  }

  average() {
    let average = this.input.reduce((a, b) => a + b, 0) / this.input.length;
    return average;
  }

  status() {
    let statusScore = { lulus: 0, tidakLulus: 0 };
    for (let i = 0; i < this.input.length; i++) {
      if (this.input[i] >= 60) {
        statusScore.lulus += 1;
      } else {
        statusScore.tidakLulus += 1;
      }
    }
    return statusScore;
  }

  sort() {
    for (let i = this.input.length - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (this.input[j - 1] > this.input[j]) {
          var temp = this.input[j - 1];
          this.input[j - 1] = this.input[j];
          this.input[j] = temp;
        }
      }
    }
    return this.input;
  }

  filterScore() {
    let filter = this.input.filter((num) => {
      return num == 90 || num == 100;
    });
    if (filter.length == 0) {
      return "-";
    } else {
      return filter;
    }
  }
}

result = new ScoreProcess(newScore());
console.clear();

console.log(`
==============================================================
List Score: ${result.scoreValue()}
==============================================================
Nilai Tertinggi: ${result.max()}
Nilai Terendah: ${result.min()}
Nilai Rata - Rata: ${result.average()}
Siswa Lulus: ${result.status().lulus}, Siswa Tidak Lulus: ${
  result.status().tidakLulus
}
Urutan Nilai Yang Terendah Ke Tertinggi: ${result.sort()}
Siswa Nilai 90 dan Siswa Nilai 100: ${result.filterScore()}
==============================================================
`);
