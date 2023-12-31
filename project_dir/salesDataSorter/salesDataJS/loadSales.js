const { loadSales, loadSalesReport } = require('./salesApp');

const model3 = loadSales('model3.csv');
const modelS = loadSales('modelS.csv');
const modelX = loadSales('modelX.csv');

loadSalesReport(model3, 'Model 3');
loadSalesReport(modelS, 'Model S');
loadSalesReport(modelX, 'Model X');
