/**
 * Clase: Silla
 * Temas: Herencia (extends Item), Polimorfismo (Override toString)
 * Editor: Roberto Méndez Méndez
 * Edición: Abril 2026
 */

public class Silla extends Item {
    private String material;

    // Constructor
    public Silla(double value, String creator, String material) {
        super(value, creator); // Llama al constructor del padre (Item)
        this.material = material;
    }

    // Sobrescribe el método toString
    @Override
    public String toString() {
        // Traducimos el boolean a algo legible
        String estado = Condicion ? "Excelente (Nueva)" : "Desgastada (Usada)";

        return "-- SILLA --\n" +
               "Creador: " + getCreator() + "\n" +
               "Material: " + this.material + "\n" +
               "Condición: " + estado + "\n" +
               "Valor Real: $" + valorReal();
    }
}
