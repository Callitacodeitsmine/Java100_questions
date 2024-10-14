import java.util.*;

public class testt {

    public static int differenceOfSum(int m, int n) {
        int sum1 = 0, sum2 = 0;
        for (int i = 1; i <= m; i++) {
            if (i % n == 0)
                sum1 = sum1 + i;
            else
                sum2 = sum2 + i;
        }
        return Math.abs(sum1 - sum2);
    }

    public static void arraysi(int arr[]) {
        int mini = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < mini) {
                mini = arr[i];
            }
        }
    }

    public static void series(){
        int i = 0;
        int count = 0;
        int secondCounter = 0; // To track every second number
        int thirdCounter = 0;   // To track every third number

        // Step 1: Generate numbers from 1 to 30, only odd numbers
        while (i <= 40) {
            i++;
            if (i % 2 != 0) { // Only consider odd numbers
                secondCounter++; // Increment the counter for every odd number
                
                // Step 2: Skip every second odd number
                if (secondCounter % 2 == 1) { // Only proceed with every second number
                    thirdCounter++; // Increment the thirdCounter for filtered numbers

                    // Step 3: Skip every third element
                    if (thirdCounter % 3 != 0) {
                        System.out.print(i);

                        // Prevent printing a comma after the last number
                        if (i < 21) {
                            System.out.print(",");
                        }
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
        /* 
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int arr[] = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        */
        int n = 0;

        int arr[] = new int[n];
        arraysi(arr);
        series();
    }
}