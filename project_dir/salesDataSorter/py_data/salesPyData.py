import csv
from collections import defaultdict
from datetime import datetime


class TeslaSales:
    def __init__(self, date_str, sales):
        self.date = datetime.strptime(date_str, '%b-%y')
        self.sales = int(sales)

    @classmethod
    def from_csv_row(cls, row):
        return cls(row[0], row[1])


class FileService:
    @staticmethod
    def load_sales(filename):
        sales_data = []
        with open(filename, 'r') as file:
            reader = csv.reader(file)
            next(reader)  # skip header
            for row in reader:
                sales_data.append(TeslaSales.from_csv_row(row))
        return sales_data


def load_sales_report(car_data, model_type):
    print(f'{model_type} Annual Sales Report')
    print('----------------------------')

    group_by_year = defaultdict(list)
    for sale in car_data:
        group_by_year[sale.date.year].append(sale)

    total_annual_sales = {year: sum(s.sales for s in sales) for year, sales in group_by_year.items()}
    for year, total in total_annual_sales.items():
        print(f"{year} -> {total}")
    print()

    max_sales = max(car_data, key=lambda x: x.sales, default=TeslaSales("Jan-70", "0"))
    min_sales = min(car_data, key=lambda x: x.sales, default=TeslaSales("Jan-70", "0"))
    print(f"The most profitable month for {model_type} was: {max_sales.date.strftime('%b-%y')}")
    print(f"The least profitable month for {model_type} was: {min_sales.date.strftime('%b-%y')}")
    print()


if __name__ == '__main__':
    file_service = FileService()
    model3 = file_service.load_sales("model3.csv")
    modelS = file_service.load_sales("modelS.csv")
    modelX = file_service.load_sales("modelX.csv")

    load_sales_report(model3, "Model 3")
    load_sales_report(modelS, "Model S")
    load_sales_report(modelX, "Model X")
