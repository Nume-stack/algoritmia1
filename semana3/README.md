# Tablas de traza --- Algoritmos en JavaScript

Las siguientes pruebas de escritorio muestran, paso a paso, cómo cambian
las variables y qué decisiones toma cada algoritmo.

> **Importante:** los datos de entrada son ejemplos creados para poder
> realizar la traza. Si se ejecuta el programa con otros datos, los
> resultados pueden cambiar.

------------------------------------------------------------------------

# 1. CajeroParqueadero.js

## Datos de prueba

Se ingresan los siguientes valores, en este orden:

-   `5000`: valor válido.
-   `7000`: valor válido.
-   `-2000`: valor no válido.
-   `0`: finalizar el sistema.

## Tabla de traza

  ---------------------------------------------------------------------------------------------------------
          Paso      Entrada ¿Cumple                         Acción          `contadorCarros`   `totalValor`
                  (`valor`) `!isNaN(valor) && valor > 0`?                                    
  ------------ ------------ ------------------------------- ------------- ------------------ --------------
             1          --- ---                             Se                             0              0
                                                            inicializan                      
                                                            las variables                    

             2         5000 Sí                              Se suma 5000                   1           5000
                                                            al total y se                    
                                                            cuenta un                        
                                                            carro                            

             3         7000 Sí                              Se suma 7000                   2          12000
                                                            al total y se                    
                                                            cuenta otro                      
                                                            carro                            

             4        -2000 No                              Se muestra el                  2          12000
                                                            mensaje de                       
                                                            dato                             
                                                            incorrecto                       

             5            0 No                              Se reconoce                    2          12000
                                                            el cero, se                      
                                                            muestra el                       
                                                            mensaje de                       
                                                            salida y se                      
                                                            ejecuta                          
                                                            `break`                          
  ---------------------------------------------------------------------------------------------------------

## Resultado final

``` text
El total de carros atendidos es: 2
El total recaudado es: 12000
```

**Explicación:** el ciclo `while` solicita valores hasta que se ingresa
`0`. Los valores mayores que cero se acumulan en `totalValor` y aumentan
`contadorCarros`. Un valor negativo o no numérico no modifica los
acumuladores.

------------------------------------------------------------------------

# 2. calificaciones.js

## Datos de prueba

Se registran tres estudiantes y después se responde `n` para terminar:

  Estudiante     Nota
  ------------ ------
  Ana             2.5
  Luis            4.0
  Marta           3.0

La nota mínima para aprobar es `3.0`.

## Tabla de traza: registro de estudiantes

  --------------------------------------------------------------------------------------------------------------------
            Paso Respuesta   Nombre               Nota `estudiantesYNotas`                         `notas`
  -------------- ----------- ---------- -------------- ------------------------------------------- -------------------
               1 ---         ---                   --- `[]`                                        `[]`

               2 s           Ana                   2.5 `[[Ana, 2.5]]`                              `[2.5]`

               3 s           Luis                  4.0 `[[Ana, 2.5], [Luis, 4.0]]`                 `[2.5, 4.0]`

               4 s           Marta                 3.0 `[[Ana, 2.5], [Luis, 4.0], [Marta, 3.0]]`   `[2.5, 4.0, 3.0]`

               5 n           ---                   --- Se termina el registro                      Se termina el
                                                                                                   registro
  --------------------------------------------------------------------------------------------------------------------

## Tabla de traza: función `promedio()`

La función suma las notas y divide el resultado entre la cantidad de
estudiantes.

  --------------------------------------------------------------------------
          Iteración               `i`     Nota evaluada      `promedioNotas`
                                        (`notas[i][1]`)     después de sumar
  ----------------- ----------------- ----------------- --------------------
            Inicial               ---               ---                    0

                  1                 0               2.5                  2.5

                  2                 1               4.0                  6.5

                  3                 2               3.0                  9.5

              Final               ---               ---   `9.5 / 3 = 3.1667`
                                                             aproximadamente
  --------------------------------------------------------------------------

## Tabla de traza: función `aprobados()`

Condición evaluada: `estudiantes[i][1] >= 3.0`.

    Iteración Estudiante     Nota ¿Aprueba?   `estudiantesAprobados`
  ----------- ------------ ------ ----------- -------------------------------
            1 Ana             2.5 No          `[]`
            2 Luis            4.0 Sí          `[[Luis, 4.0]]`
            3 Marta           3.0 Sí          `[[Luis, 4.0], [Marta, 3.0]]`

## Tabla de traza: función `reprobados()`

Condición evaluada: `estudiantes[i][1] < 3.0`.

    Iteración Estudiante     Nota ¿Reprueba?   `estudiantesReprobados`
  ----------- ------------ ------ ------------ -------------------------
            1 Ana             2.5 Sí           `[[Ana, 2.5]]`
            2 Luis            4.0 No           `[[Ana, 2.5]]`
            3 Marta           3.0 No           `[[Ana, 2.5]]`

## Resultado final

``` text
Promedio: 3.1666666666666665

Estudiantes aprobados:
Luis - 4.0
Marta - 3.0

Nota máxima: 4
Nota mínima: 2.5

Estudiantes reprobados:
Ana - 2.5
```

**Explicación:** primero se almacenan los estudiantes y sus notas en
arreglos. Luego se recorren esos datos para calcular el promedio,
separar aprobados y reprobados, y obtener la nota máxima y mínima.

------------------------------------------------------------------------

# 3. factura.js

## Datos de prueba

Se crea una factura con dos productos y se acepta agregar la propina:

  Producto     Cantidad   Precio unitario
  ---------- ---------- -----------------
  Café                2           \$5.000
  Pastel              1           \$8.000

Respuesta a la pregunta de propina: `s`.

## Tabla de traza: registro de productos

  ---------------------------------------------------------------------------
          Paso Producto       Cantidad       Precio Operación       Total del
                                           unitario                  producto
  ------------ ---------- ------------ ------------ ------------ ------------
             1 Café                  2      \$5.000 `2 * 5000`       \$10.000

             2 Pastel                1      \$8.000 `1 * 8000`        \$8.000
  ---------------------------------------------------------------------------

Después de recorrer los productos, el arreglo `pruductosXCantidad`
contiene dos objetos, uno por cada producto.

## Tabla de traza: cálculo de la factura

    Paso Operación                                            Resultado
  ------ ------------------------------------------ -------------------
       1 `subtotal = 10000 + 8000`                             \$18.000
       2 Se responde `s` a la pregunta de propina     Se calcula el 8 %
       3 `CalcularPorcentaje(18000, 8)`                         \$1.440
       4 `CalcularPorcentaje(18000, 10)`                        \$1.800
       5 `totalFactura = 18000 + 1800 + 1440`                  \$21.240

## Resultado final

``` text
Factura:
- Café: 2 x $5000 = $10000
- Pastel: 1 x $8000 = $8000
Subtotal: $18000
Impuesto (10%): $1800
Propina (8%): $1440
Total: $21240
```

**Explicación:** cada producto se guarda como un objeto con nombre,
cantidad, precio unitario y total. `reduce()` suma los totales para
obtener el subtotal. Después se calculan el impuesto y, si el usuario
acepta, la propina.

**Observación importante sobre el código:** en `ImprimirFactura()` el
parámetro está escrito como `totalFacura`, pero dentro de la función se
utiliza `totalFactura`. Además, en `main()` se asigna a `totalFactura`
sin declararla con `let` o `const`. Para evitar depender de una variable
global accidental, conviene corregir el nombre del parámetro y declarar
la variable:

``` javascript
let totalFactura = subtotal + impuesto + propina;
```

Y en la función:

``` javascript
function ImprimirFactura(productoXCantidad, subtotal, impuesto, propina, totalFactura) {
    // ...
}
```

------------------------------------------------------------------------

# 4. piramide.js

## Datos de prueba

-   Número de filas: `3`.
-   Respuesta a "¿Quieres otra pirámide?": `n`.

## Tabla de traza del ciclo `for`

El ciclo se ejecuta mientras `i <= filas`. En cada vuelta se calculan
los espacios y los asteriscos.

  -----------------------------------------------------------------------
       Iteración            `i`    `filas - i`    `2 * i - 1` Línea
                                    (espacios)   (asteriscos) impresa
  -------------- -------------- -------------- -------------- -----------
               1              1              2              1 `*`

               2              2              1              3 `***`

               3              3              0              5 `*****`
  -----------------------------------------------------------------------

## Resultado en consola

``` text
  *
 ***
*****
```

## Seguimiento de variables

    Paso Variable      Valor       Descripción
  ------ ------------- ----------- -------------------------------------------------------
       1 `filas`       3           El usuario ingresa tres filas
       2 `i`           1           Primera iteración
       3 `espacios`    `"  "`      Se calculan dos espacios
       4 `bloques`     `"*"`       Se calcula un asterisco
       5 `i`           2           Segunda iteración
       6 `espacios`    `" "`       Se calcula un espacio
       7 `bloques`     `"***"`     Se calculan tres asteriscos
       8 `i`           3           Tercera iteración
       9 `espacios`    `""`        No se necesitan espacios
      10 `bloques`     `"*****"`   Se calculan cinco asteriscos
      11 `i`           4           La condición `i <= filas` es falsa y termina el `for`
      12 `continuar`   `"n"`       Se termina el ciclo `while`

**Explicación:** el ciclo `for` construye cada fila de la pirámide. La
cantidad de espacios disminuye en cada iteración y la cantidad de
asteriscos aumenta de dos en dos.

------------------------------------------------------------------------

# Observaciones generales

1.  **CajeroParqueadero.js:** el ciclo termina cuando el usuario ingresa
    `0`. Los valores negativos y los textos no se cuentan ni se suman.
2.  **calificaciones.js:** la nota `3.0` se considera aprobada porque la
    condición utiliza `>= 3.0`.
3.  **factura.js:** el subtotal se calcula sumando el total de cada
    producto. El impuesto siempre se agrega; la propina depende de la
    respuesta.
4.  **piramide.js:** para cada fila, `repeat()` genera los espacios y
    asteriscos correspondientes.

## Casos que conviene tener en cuenta

-   En `calificaciones.js`, si no se registra ningún estudiante,
    `promedio()` divide entre cero y `Math.max(...notas)` /
    `Math.min(...notas)` producen `-Infinity` e `Infinity`. Conviene
    validar que haya estudiantes antes de calcular esos resultados.
-   En `factura.js`, una cantidad igual a cero está permitida por la
    condición actual (`cantidadProducto < 0`). Si se requiere que sea
    mayor que cero, debe validarse con `cantidadProducto <= 0`.
-   En `piramide.js`, el programa acepta cualquier número positivo,
    incluso uno decimal. Si las filas deben ser enteras, se puede
    validar con `Number.isInteger(filas)`.