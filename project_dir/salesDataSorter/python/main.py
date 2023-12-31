import csv


class TeslaSales:
    def __init__(self, date, sales):
        self.date = date
        self.sales = sales


def load_sales(file_name):
    with open(file_name, 'r') as file:
        reader = csv.reader(file)
        next(reader)  # Skip header
        sales_data = [TeslaSales(row[0], int(row[1])) for row in reader]
        return sales_data


def load_sales_report(car_data, model_type):
    print(model_type + " Annual Sales Report")
    print("----------------------------")

    group_by_year = {}
    for data in car_data:
        year = int(data.date.split('-')[1])
        if year not in group_by_year:
            group_by_year[year] = []
        group_by_year[year].append(data)

    total_annual_sales = []
    for year, sales in group_by_year.items():
        total_sales = sum(sale.sales for sale in sales)
        total_annual_sales.append(str(year) + "->" + str(total_sales))

    print('\n'.join(total_annual_sales))
    print()

    max_sales = max(car_data, key=lambda x: x.sales)
    min_sales = min(car_data, key=lambda x: x.sales)

    print("The most profitable month for " + model_type + " was: " + max_sales.date)
    print("The least profitable month for " + model_type + " was: " + min_sales.date)
    print()


if __name__ == "__main__":
    model_3 = load_sales("model3.csv")
    model_s = load_sales("modelS.csv")
    model_x = load_sales("modelX.csv")

    load_sales_report(model_3, "Model 3")
    load_sales_report(model_s, "Model S")
    load_sales_report(model_x, "Model X")
