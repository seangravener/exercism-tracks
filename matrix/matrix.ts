type Data = number[][];

export class Matrix {
  definition = "";

  get data(): Data {
    let localData: Data = [];
    let rows = this.definition.split("\n");

    for (let row of rows) {
      localData.push(row.split(" ").map((num) => parseInt(num, 10)));
    }

    return localData;
  }

  constructor(definition: string) {
    this.definition = definition;
  }

  get rows(): Data {
    return this.data;
  }

  get columns(): Data {
    return Matrix.transpose(this.rows);
  }

  static transpose = (matrix: Data): Data => {
    const [firstRow] = matrix;

    // Map over matrix width
    return firstRow.map((value, column) =>
      // Map over matrix height
      matrix.map((row) => row[column])
    );
  };
}
