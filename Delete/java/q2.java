import java.util.*;

public class q2 {
    public static void main(String[] args) {
        int a[] = { 1, 2, 3, 8, 9, 0, 7, 5, 6 };
        int key = 9;

        Largest_Element_in_an_Array();
        Second_Largest_Element_in_an_Array_without_sorting();
        System.out.println(Check_if_the_array_is_sorted(a));
        System.out.println(BS(a, key));
        reverse_array(a);
        Array_pairs(a);
        Array_sub(a);
    }

    public static void Largest_Element_in_an_Array() {
        int a[] = { 1, 2, 3, 5, 4 };
        int largest = a[0];

        for (int i = 0; i < a.length; i++) {
            if (a[i] > largest) {
                largest = a[i];
            }
        }
        System.out.println(largest);
    }

    public static void Second_Largest_Element_in_an_Array_without_sorting() {

    }

    public static boolean Check_if_the_array_is_sorted(int a[]) {
        boolean sort = true;

        for (int i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                sort = false;
                break;
            }
        }
        return sort;
    }

    public static int BS(int a[], int key) {
        int start = 0;
        int end = a.length - 1;
        while (start <= end) {
            int mid = (start + end) / 2;

            if (a[mid] == key) {
                return mid;
            }

            else if (a[mid] < key) {
                start = mid + 1;
            }

            else {
                end = mid - 1;
            }
        }
        return -1;
    }

    public static void reverse_array(int a[]) {
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }

        int initial = 0, last = a.length - 1;

        while (initial < last) {
            int temp = a[initial];
            a[initial] = a[last];
            a[last] = temp;

            initial++;
            last--;

        }

        System.out.println();

        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }

    public static void Array_pairs(int a[]){
        for(int i=0; i<a.length; i++){
            int curr = a[i];
            for(int j = i+1; j<a.length; j++){
                System.out.print("("+curr+","+a[j]+")");
            }
            System.out.println();
        }
    }

    public static void Array_sub(int a[]){
        int x = 0,b = 0,c = 0;
        for(int i=0; i<a.length; i++){
            int start = i;
            x++;
            for(int j = i; j<a.length; j++){
                int end = j;
                b++;
                for(int k=start; k<=end; k++){
                    c++;
                    System.out.print(a[k]+" ");
                }
                System.out.println();
            }
            System.out.println();
        }
        System.out.println(a+","+b+","+c);
    }

}