const fs = require('fs');

class TeslaSales {
  constructor(date, sales) {
    this.date = date;
    this.sales = sales;
  }
}

function loadSales(fileName) {
  const fileData = fs.readFileSync(fileName, 'utf-8');
  const rows = fileData.split('\n').slice(1);
  let salesData;
  salesData = rows.map(row => {
    const [date, sales] = row.split(',');
    return new TeslaSales(date, parseInt(sales));
  });
  return salesData;
}

function loadSalesReport(carData, modelType) {
  console.log(modelType + " Annual Sales Report");

  const groupByYear = carData.reduce((acc, data) => {
    const year = data.date.split('-')[1];
    acc[year] = acc[year] || [];
    acc[year].push(data);
    return acc;
  }, {});

  const totalAnnualSales = Object.entries(groupByYear)
    .map(([year, sales]) => `${year}->${sales.reduce((sum, sale) => sum + sale.sales, 0)}`)
    .join('\n');
  console.log(totalAnnualSales);
  console.log();

  const maxSales = carData.reduce((max, data) => data.sales > max.sales ? data : max, carData[0]);
  const minSales = carData.reduce((min, data) => data.sales < min.sales ? data : min, carData[0]);

  console.log(`The most profitable month for ${modelType} was: ${maxSales.date}`);
  console.log(`The least profitable month for ${modelType} was: ${minSales.date}`);
  console.log();
}

module.exports = {
  loadSales,
  loadSalesReport
};
