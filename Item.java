/**
 * Curso: Programación
 * * Referencias:
 * Book: Sage, (2019). Concise Guide to Object-Oriented
 * Programming An Accessible Approach Using Java, Springer. pág 81
 * * Temas: Herencia, Polimorfismo
 * * Editor: Roberto Méndez Méndez
 * Creación: 16/ Mar/22 v2
 * Edición: 23 Abril 2026
 */

public class Item {

    protected double value;
    protected boolean Condicion = true;
    private String creator;
    private int inventario;
    private String codigo;

    // Constructor de la clase
    public Item(double value, String creator) {
        this.value = value;
        this.creator = creator;
    }

    // Métodos Getter y Setter
    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public String getCreator() {
        return creator;
    }

    public int getInventario() {
        return inventario;
    }

    // Método para calcular el valor real basado en la condición
    public double valorReal() {
        double valorActual = value;
        if (!Condicion) {
            valorActual = value * 0.8;
        }
        return valorActual;
    }
}
