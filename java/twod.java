import java.util.*;

public class twod {

    public static void towarr(){
        int matrix[][] = new int[3][4];
        int n = matrix.length, m = matrix[0].length;

        Scanner sc = new Scanner(System.in);

        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                matrix[i][j] = sc.nextInt();
            }
        }

        for(int i=0; i<n; i++){
            for(int j=0; j<m; j++){
                System.out.print(matrix[i][j]+" ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>();
        arr.add(0);
        arr.add(7);
        arr.add(8);
        arr.add(9);
        arr.add(6);
        arr.add(4);
        arr.add(3);
        arr.add(1);

        for(int i=0; i<arr.size(); i++){
            System.out.print(arr.get(i) + " ");
        }

        System.out.println();

        for(int i=arr.size()-1; i>=0; i--){
            System.out.print(arr.get(i) + " ");
        }

        System.out.println();

        int mini = 0;

        for(int i=0; i<arr.size(); i++){
            if(arr.get(i) > mini){
                mini = arr.get(i);
            }
        }

        System.out.println(mini);
        System.out.println();

        int aar[] = {1,5,4,3,2,4,5,6,7,8};

        for(int i=aar.length-1; i>=0; i--){
            System.out.print(aar[i] + " ");
        }
    }
}
