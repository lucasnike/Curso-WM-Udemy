/**
 * Funcao
 */
public class Funcao {

    public static void main(String[] args) {
        System.out.println(somar(10, 5));
        mostrarSoma(50, 50);
    }

    public static double somar(double a, double b) {
        return a + b;
    }
    public static void mostrarSoma(double a, double b) {
        System.out.println(a + b);
    }
}