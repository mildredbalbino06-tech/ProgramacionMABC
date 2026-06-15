
"""
IMPLEMENTACIÓN DEL MODELO PARA CRECIMIENTO DE UN TUMOR

Objetivo: Resolver el sistema de EDO para Volumen del Tumor V(t) 
y Densidad de Vasos Sanguíneos B(t) usando Euler hacia adelante 
con arreglos bidimensionales, mostrando la gráfica en un mismo frame.

Modelo a Programar:
    dV/dt = r*V*(1 - V/B)
    dB/dt = -a*B + b*V - c*B*V^(2/3) - d*B*g(t)
    g(t) = t^2

Valores: r=4, a=1, b=4, c=1, d=1

Editor: Roberto Méndez
Creación: 11 May 2026
"""

import numpy as np
import matplotlib.pyplot as plt

# PARÁMETROS
r = 4
a = 1
b = 4
c = 1
d = 1

# ARREGLOS DE VALORES
# Valores de tiempo (simularemos de 0 a 5 para apreciar el crecimiento)
n = 1000
time = np.linspace(0, 5, n)

# Matriz bidimensional: Volumen y Vasos Sanguíneos (2 filas, n columnas)
# Fila 0: V(t)
# Fila 1: B(t)
VB = np.zeros((2, time.size))

# CONDICIONES INICIALES DE V y B
# (Nota: Asignamos valores > 0 para evitar división entre cero en V/B)
VB[0][0] = 0.1  # Volumen inicial V0
VB[1][0] = 0.5  # Densidad inicial B0

# MÉTODO DE EULER HACIA ADELANTE
for i in range(len(time) - 1):
    # Calculamos la función continua g(t) en el tiempo actual
    gt = time[i]**2
    
    # Tamaño de paso (dt). time[1] representa el paso ya que time[0] es 0
    dt = time[1]
    
    # Ecuaciones de Euler iterativas
    VB[0][i+1] = VB[0][i] + (r * VB[0][i] * (1 - (VB[0][i] / VB[1][i]))) * dt
    
    VB[1][i+1] = VB[1][i] + (-a * VB[1][i] + b * VB[0][i] - c * VB[1][i] * (VB[0][i]**(2/3)) - d * VB[1][i] * gt) * dt

# ==========================================
# GRÁFICAS
# ==========================================
# Graficas tiempo-Volumen y tiempo-Vasos Sanguíneos en el mismo frame
plt.plot(time, VB[0], label='V(t) Volumen del Tumor', color='red')
plt.plot(time, VB[1], label='B(t) Vasos Sanguíneos', color='blue')

plt.title('Dinámica del Crecimiento de un Tumor')
plt.ylabel('Magnitud (Volumen / Densidad)')
plt.xlabel('t tiempo')
plt.legend(loc='upper right')
plt.grid(True)
plt.show()

plt.close('all')
