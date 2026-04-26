# Ajustar Layout de Tabla en Slide 07

En la diapositiva `slide-07.html`, el layout de la tabla de comparación está implementado usando múltiples contenedores grid independientes (uno para la cabecera y uno para cada fila con la clase `.cr`). Esto puede causar problemas de alineación.

Modifica la estructura para que toda la tabla esté dentro de un único contenedor con `display: grid`.

**Pasos sugeridos:**
1. Crea un contenedor principal para la tabla con `display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; width: 100%;`.
2. Mueve los elementos de la cabecera (CAPACIDAD, FOR&FROM, INDIGO) para que sean hijos directos de este nuevo contenedor.
3. Extrae los contenidos de los `div.cr` y colócalos como hijos directos del contenedor grid.
4. Asegúrate de mantener los estilos visuales (colores, bordes inferiores en las celdas, paddings) pero aplicados de forma que no rompan el layout del grid único.
5. El resultado debe ser una tabla perfectamente alineada donde las tres columnas tengan el mismo ancho y comportamiento en todas las filas.
