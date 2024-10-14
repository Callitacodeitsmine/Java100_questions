import java.util.*;

public class string {
    public static boolean palindome(String a) {
        for (int i = 0; i < a.length() / 2; i++) {
            int n = a.length();
            if (a.charAt(i) != a.charAt(n - 1 - i)) {
                return false;
            }
        }
        return true;
    }

    public static void uppercase(String a) {
        System.out.println(a.toUpperCase());
        System.out.println(a.toLowerCase());
    }

    public static void stringbuilder() {
        StringBuilder sb = new StringBuilder();
        for (char cb = 'a'; cb <= 'z'; cb++) {
            sb.append(cb);
        }
        System.out.println(sb + " ");
    }

    public static void compare(String a, String b) {
        if (a.equals(b)) {
            System.out.println("greater");
        } else {
            System.out.println("no");
        }
    }

    public static void vowels(String a) {
        int c = 0;
        for (int i = 0; i < a.length(); i++) {
            int b = a.charAt(i);

            if(b == 'a' || b =='e' || b =='o' || b =='i' || b =='u'){
                c++;
            }
        }
        System.out.println(c);
    }

    public static void anagrams(String a, String b){
        a = a.toLowerCase();
        b = b.toLowerCase();

        if(a.length() == b.length()){
            char[] arr1 = a.toCharArray();
            char[] arr2 = b.toCharArray();

            Arrays.sort(arr1);
            Arrays.sort(arr2);

            boolean result = Arrays.equals(arr1, arr2);

            if(result){
                System.out.println("aurgments");
            }
            else{
                System.out.println("not argument");
            }
        }
    }

    static class Node {
        int data;
        Node left;
        Node right;

        Node(int data){
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    static class BuildBT{
        static int idx = -1;
        public static Node buildtree(int nodes[]){
            idx++;
            if(nodes[idx] == -1){
                return null;
            }

            Node newNode = new Node(nodes[idx]);
            newNode.left = buildtree(nodes);
            newNode.right = buildtree(nodes);

            return newNode;
        }
    }

    public static void main(String args[]) {
        String a = "ahaa";
        String b = "aaha";
        System.out.println(palindome(a));
        uppercase(a);
        stringbuilder();
        compare(a, b);
        vowels(a);
        anagrams(a, b);

        int nodes[] = {1,2,3,-1,-1,5,-1,-1,3,-1,7,-1,-1};
        BinaryTree tree = new BinaryTree();
        Node root = BuildBT.buildtree(nodes);
        System.out.println(root.data);
    }
}