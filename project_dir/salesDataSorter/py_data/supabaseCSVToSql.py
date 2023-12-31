import csv
from collections import defaultdict
from datetime import datetime
import requests
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables


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


def send_report_to_supabase(report, model_type):
    url = os.getenv("SUPABASE_URL") + "/rest/v1/sales_report"
    api_key = os.getenv("SUPABASE_API_KEY")

    headers = {
        "apikey": api_key,
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    data = {
        "model_type": model_type,
        "report": report
    }

    response = requests.post(url, headers=headers, json=data)

    if response.status_code == 201:
        print(f"Report for {model_type} successfully sent to Supabase!")
    else:
        print(f"Failed to send report for {model_type}. Error: {response.text}")


def load_sales_report(car_data, model_type):
    report_parts = []

    report_parts.append(f'{model_type} Annual Sales Report')

    group_by_year = defaultdict(list)
    for sale in car_data:
        group_by_year[sale.date.year].append(sale)

    total_annual_sales = {year: sum(s.sales for s in sales) for year, sales in group_by_year.items()}
    for year, total in total_annual_sales.items():
        report_parts.append(f"{year} -> {total}")

    max_sales = max(car_data, key=lambda x: x.sales, default=TeslaSales("Jan-70", "0"))
    min_sales = min(car_data, key=lambda x: x.sales, default=TeslaSales("Jan-70", "0"))

    report_parts.append(f" The most profitable month for {model_type} was: {max_sales.date.strftime('%b-%y')}")
    report_parts.append(f"The least profitable month for {model_type} was: {min_sales.date.strftime('%b-%y')}\n")

    report = " ".join(report_parts)
    send_report_to_supabase(report, model_type)


if __name__ == '__main__':
    file_service = FileService()
    model3 = file_service.load_sales("model3.csv")
    modelS = file_service.load_sales("modelS.csv")
    modelX = file_service.load_sales("modelX.csv")

    load_sales_report(model3, "Model 3")
    load_sales_report(modelS, "Model S")
    load_sales_report(modelX, "Model X")
