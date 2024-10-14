import java.util.*;

public class q3 {


    public static void SS(int arr[]) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        for (int i = 0; i < arr.length; i++) {
            int mini = i;
            for (int j = i; j < arr.length; j++) {
                if (arr[j] < arr[mini]) {
                    mini = j;
                }
            }

            int temp = arr[mini];
            arr[mini] = arr[i];
            arr[i] = temp;
        }

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }

    public static void BB(int arr[]){
        System.out.println();
        for(int i = 0; i<arr.length - 1; i++){
            for(int j = 0; j<arr.length -i -1; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        for (int a = 0; a < arr.length; a++){
            System.out.print(arr[a] + " ");
        }
        System.out.println();

    }

    public static void two_sum(int target, int arr[]){
        int sum = 0;
        System.out.println();
        for(int i=0; i<arr.length; i++){
            sum += arr[i];
            if(target >= sum){
                System.out.print(arr[i] + ",");
            }
        }
    }

    public static void insertion_sort(int arr[]){
        for(int i = 1; i<arr.length; i++){
            int prev = i-1;

            while(prev >=0 && arr[prev] > 0){

            }
        }
    }

    public static int consucutive(int arrtwo[]){
        int curr = 0;
        int add = 0;
        for(int i=0; i<arrtwo.length; i++){
            if(arrtwo[i] == 1){
                add++;
            }
            else{
                add = 0;
            }
            curr = Math.max(curr, add);
        }
        return curr;
    }

    public static void union(int arr[], int arrtwo[]){

        for(int i=0; i<arr.length; i++){

        }
    }

    public static void once(int arrtwo[]){
        int start = 0, end = 0, add = 0;
        for(int i=0; i<arrtwo.length; i++){
            start = i;
            for (int j=0; j<arrtwo.length; j++){
                end = j;
                for(int k=start; k<=end; k++){
                    System.out.print(arrtwo[k] + ",");
                }
                add++;
                System.out.println();
            }
            System.out.println();
        }
        System.out.println(add);
    }

    public static void main(String[] args) {
        int arr[] = {3,2,4,5,67,8,9,99,45,6,3,7,8,5,6,8};
        int arrtwo[] = {1,1,1};

        SS(arr);
        BB(arr);


        int test = consucutive(arrtwo);
        System.out.println(test);

        once(arrtwo);
    }
}