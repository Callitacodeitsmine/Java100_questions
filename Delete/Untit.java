import java.util.Arrays;

public class Untit{
    public static void check(int arr1[], int[] arr2){
        Arrays.sort(arr1);
        Arrays.sort(arr2);

        int arr3[] = mergeArrays(arr1, arr2);

        System.out.println(arr3);

    }
    public static void main(String args[]){
        int arr1[] = {1,2};
        int arr2[] = {3,4};

        check(arr1, arr2);
    }
}