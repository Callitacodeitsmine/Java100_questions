public class q1 {
    public static void p1() {
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void p2() {
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void p3() {
        for (int i = 1; i < 7; i++) {
            for (int j = 1; j < i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void p4() {
        for (int i = 0; i < 6; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(i);
            }
            System.out.println();
        }
    }

    public static void p5() {
        System.out.println();
        for (int i = 5; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void p6() {
        System.out.println();
        for (int i = 6; i > 0; i--) {
            for (int j = 1; j < i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void p7() {
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5 - i - 1; j++) {
                System.out.print("0");
            }
            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void p8() {
        System.out.println();

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("0");
            }
            for (int j = 10; j > 2 * i + 1; j--) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void p9() {
        System.out.println();
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 5 - i - 1; j++) {
                System.out.print("0");
            }
            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("0");
            }
            for (int j = 10; j > 2 * i + 1; j--) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void p10() {
        System.out.println();
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = 5; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void p11() {
        System.out.println();
        int in = 1;
        for (int i = 0; i <= 5; i++) {
            if (i % 2 == 0) {
                in = 0;
            } else {
                in = 1;
            }
            for (int j = 0; j < i; j++) {
                System.out.print(in);
                in = 1 - in;
            }
            System.out.println();
        }
    }

    public static void p12() {
        System.out.println();
        for (int i = 1; i <= 4; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            for (int j = 8; j >= 2 * i + 1; j--) {
                System.out.print(" ");
            }
            for (int j = i; j >= 1; j--) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    public static void p13() {
        System.out.println();
        int b = 1;

        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < i; j++) {
                System.out.print(b + " ");
                b = b + 1;
            }
            System.out.println();
        }
    }

    public static void p14() {
        System.out.println();
        for (int i = 0; i < 5; i++) {
            for (char a = 'A'; a <= 'A' + i; a++) {
                System.out.print(a);
            }
            System.out.println();
        }
    }

    public static void p15() {
        System.out.println();
        for (int i = 4; i >= 0; i--) {
            for (char a = 'A'; a <= 'A' + i; a++) {
                System.out.print(a);
            }
            System.out.println();
        }
    }

    public static void p16() {
        System.out.println();
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print((char) (int) ('A' + i) + " ");
            }
            System.out.println();
        }
    }

    public static void p19() {
        System.out.println();
        for (int a = 0; a < 9; a++) {
            System.out.print("*");
        }
        System.out.println();

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j <= 4 - 1 - i; j++) {
                System.out.print("*");
            }

            for (int j = 0; j < 2 * i + 1; j++) {
                System.out.print(" ");
            }

            for (int j = 0; j <= 4 - 1 - i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }

            for (int j = 6; j > 2 * i - 1; j--) {
                System.out.print(" ");
            }

            for (int j = 4; j > 4 - 1 - i; j--) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int a = 0; a < 9; a++) {
            System.out.print("*");
        }
        System.out.println();

    }

    public static void p20() {
        System.out.println();
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }

            for (int j = 10; j > 2 * i + 1; j--) {
                System.out.print(" ");
            }

            for (int j = 0; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j <= 4 - 1 - i; j++) {
                System.out.print("*");
            }

            for (int j = 0; j < 2 * i + 3; j++) {
                System.out.print(" ");
            }

            for (int j = 0; j <= 4 - 1 - i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }

    public static void p18() {
        System.out.println();
        for (int i = 0; i < 5; i++) {
            for (char a = (char) (int) ('A' + 5 - 1 - i); a <= 'A' + 5 - 1; a++) {
                System.out.print(a);
            }
            System.out.println();
        }
    }

    public static void p21(int N) {
        System.out.println();
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (i == 0 || j == 0 || j == N-1 || i == N - 1) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }

    public static void p17() {
        
        for (int i = 0; i < 5; i++) {

            char ch = 'A';

            for (int j = 0; j < 5 - i -1; j++) {
                System.out.print(" ");
            }

            int bt =(2*i+1)/2;

            for (int j = 0; j < 2*i +1; j++){
                System.out.print(ch);
                if( j < bt){
                    ch++;
                }
                else{
                    ch--;
                }
            }
            for (int j = 0; j < 5 - i -1; j++) {
                System.out.print(" ");
            }
            System.out.println();
        }
    }

    

    public static void main(String[] args) {
        p1();
        p2();
        p3();
        p4();
        p5();
        p6();
        p7();
        p8();
        p9();
        p10();
        p11();
        p12();
        p13();
        p14();
        p15();
        p16();
        p18();
        p19();
        p20();
        p21(8);
        p17();
    }
}