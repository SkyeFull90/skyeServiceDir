import java.text.DecimalFormat;

public class App {
    public static String seriesSum(int n) {
        if (n == 0) {
            return "0.00";
        } else {
            double sum = 0.0;
            for (int i = 0; i < n; i++) {
                sum += 1.0 / (1 + i * 3);
            }
            DecimalFormat df = new DecimalFormat("0.00");
            return df.format(sum);
        }
    }

    public static void main(String[] args) {
        System.out.println(seriesSum(1));  // "1.00"
        System.out.println(seriesSum(2));  // "1.25"
        System.out.println(seriesSum(5));  // "1.57"
    }
}