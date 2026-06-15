# -*- coding: utf-8 -*-
"""
De apoyo para verificar el cálculo de los puntos del Fractal de Pitágoras

Autor: Deepseek
Editor: Roberto Méndez
Creado: 20 Abril 2026
"""

import tkinter as tk
from tkinter import messagebox
from tkinter import font

def obtener_datos():
    try:
        x1 = float(entry_x1.get())
        y1 = float(entry_y1.get())
        x2 = float(entry_x2.get())
        y2 = float(entry_y2.get())

        # Validación simple de que los campos tengan datos
        if entry_x1.get() and entry_y1.get() and entry_x2.get() and entry_y2.get():
            dx = x1 - x2
            dy = y1 - y2

            # Fórmulas para los puntos del cuadrado del fractal
            x3 = x1 - dy
            y3 = y1 + dx
            x4 = x2 - dy
            y4 = y2 + dx

            # Mostrar los resultados calculados
            messagebox.showinfo(
                "Resultados", 
                f"Puntos calculados:\nx3 = {x3}, y3 = {y3}\nx4 = {x4}, y4 = {y4}"
            )
            
    except ValueError:
        messagebox.showwarning("Campos vacíos o inválidos", "Por favor, complete todos los campos con números.")

# Crear ventana principal
ventana = tk.Tk()
ventana.title("Ingreso de Puntos Base del Fractal")
ventana.geometry("300x350")

# Estilo de fuente para las etiquetas
myEstilo = font.Font(family="Comic Sans MS", size=13, weight="bold")

# Etiquetas y campos de entrada
tk.Label(ventana, font=myEstilo, text="x1:").pack(pady=1)
entry_x1 = tk.Entry(ventana)
entry_x1.pack(pady=1)

tk.Label(ventana, font=myEstilo, text="y1:").pack(pady=1)
entry_y1 = tk.Entry(ventana)
entry_y1.pack(pady=1)

tk.Label(ventana, font=myEstilo, text="x2:").pack(pady=1)
entry_x2 = tk.Entry(ventana)
entry_x2.pack(pady=1)

tk.Label(ventana, font=myEstilo, text="y2:").pack(pady=1)
entry_y2 = tk.Entry(ventana)
entry_y2.pack(pady=1)

# Botón de envío
tk.Button(
    ventana, 
    font=('Helvetica', '13', "bold"), 
    text="Enviar",
    command=obtener_datos
).pack(pady=20)

# Iniciar la aplicación
ventana.mainloop()
