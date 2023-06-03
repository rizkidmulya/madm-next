type PolynomialParam = {
  learningRate?: number;
  nDegree?: number;
  epochs?: number;
};

class PolynomialRegression {
  private learningRate: number;
  private epochs: number;
  private coeffs: number[];
  private mseHistory: number[];

  constructor({
    learningRate = 0.1,
    nDegree = 3,
    epochs = 100,
  }: PolynomialParam) {
    this.learningRate = learningRate;
    this.epochs = epochs;
    this.coeffs = [];
    this.mseHistory = [];

    for (let i = 0; i < Math.max(nDegree, 1); i++) {
      this.coeffs.push(0);
    }
  }

  private calcGradient = (coeffs: number[], xs: number[]) => {
    const degree: number[] = [];
    const ys: number[] = [];

    coeffs.map((c, i) => {
      degree.push(i);
    });

    xs.map((x) => {
      let value = 0;

      degree.map((d, c) => {
        value += coeffs[c] * Math.pow(x, d);
      });

      ys.push(value);
    });

    return ys;
  };

  public async fit({ xs, ys }: { xs: number[]; ys: number[] }) {
    if (xs.length !== ys.length)
      throw new Error(
        "Data size not same. The xs and ys length must be the same."
      );

    for (let epoch = 0; epoch < this.epochs; epoch++) {
      let mse = 0;

      xs.map((x, i) => {
        const degree: number[] = [];
        const newWeights: number[] = [];
        const pred: number = this.calcGradient(this.coeffs, [x])[0];
        const error: number = pred - ys[i];

        mse += Math.pow(error, 2);

        this.coeffs.map((w, p) => {
          degree.push(w - error * Math.pow(x, p) * this.learningRate);
        });

        this.coeffs = degree;
      });
      mse /= xs.length;
      this.mseHistory.push(mse);
    }
  }

  public mse() {
    return this.mseHistory;
  }

  public coefficient() {
    return this.coeffs;
  }

  public record() {
    return {
      epochs: this.epochs,
      learningRate: this.learningRate,
      coeffs: this.coeffs,
      mseHistory: this.mseHistory,
    };
  }

  public predict(x: number) {
    return this.calcGradient(this.coeffs, [x])[0];
  }
}

export default PolynomialRegression;
