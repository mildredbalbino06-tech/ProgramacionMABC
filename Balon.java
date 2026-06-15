/**
 * Clase: Balon
 * Temas: Herencia (extends Item), Polimorfismo (Override toString)
 * Editor: Roberto Méndez Méndez
 * Edición: Abril 2026
 */

public class Balon extends Item {
    private String tipoDeporte;

    // Constructor
    public Balon(double value, String creator, String tipoDeporte) {
        super(value, creator); // Llama al constructor del padre (Item)
        this.tipoDeporte = tipoDeporte;
    }

    // Sobrescribe el método toString
    @Override
    public String toString() {
        // Traducimos el boolean a algo legible específico para un balón
        String estado = Condicion ? "Inflado y Nuevo" : "Ponchado/Desgastado";

        return "--- BALÓN ---\n" +
               "Creador: " + getCreator() + "\n" +
               "Deporte: " + this.tipoDeporte + "\n" +
               "Condición: " + estado + "\n" +
               "Valor Real: $" + valorReal();
    }
}
