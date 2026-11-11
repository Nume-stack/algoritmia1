# Pruebas de escritorio – Algoritmos JavaScript

Este documento contiene las pruebas de escritorio realizadas a los algoritmos desarrollados en JavaScript, con el propósito de verificar su funcionamiento mediante diferentes escenarios y valores de entrada.

---

# 1. ValidarRegistro.js

## Descripción
El algoritmo permite validar el registro de una persona teniendo en cuenta dos condiciones: que tenga una edad igual o superior a 14 años y que acepte los términos y condiciones. Si la edad ingresada no es válida, permite volver a intentarlo o salir del programa.

## Variables utilizadas

| Variable | Descripción |
|---|---|
| `edad` | Edad ingresada por el usuario. |
| `aceptaTerminos` | Respuesta sobre la aceptación de términos. |
| `respuesta` | Resultado de la función de registro. |
| `continuar` | Determina si el usuario desea repetir el proceso. |
| `terminos` | Parámetro que recibe la aceptación de términos. |

## Prueba 1: Registro exitoso

**Datos de entrada:**
- Edad: 20
- Acepta términos: s

| Paso | Instrucción | Edad | Términos | Resultado |
|---|---|---:|---|---|
| 1 | Ingresar edad | 20 | - | - |
| 2 | Aceptar términos | 20 | s | - |
| 3 | Validar rango de edad | 20 | s | Verdadero |
| 4 | Ejecutar función Registrar() | 20 | s | - |
| 5 | Evaluar edad >= 14 y términos === "s" | 20 | s | Verdadero |
| 6 | Asignar respuesta | 20 | s | Registro exitoso |

**Resultado esperado:** El registro ha sido exitoso.

## Prueba 2: Edad inferior a 14 años

**Datos de entrada:**
- Edad: 12
- Acepta términos: s

| Paso | Instrucción | Edad | Términos | Resultado |
|---|---|---:|---|---|
| 1 | Ingresar edad | 12 | - | - |
| 2 | Aceptar términos | 12 | s | - |
| 3 | Validar rango de edad | 12 | s | Verdadero |
| 4 | Ejecutar función Registrar() | 12 | s | - |
| 5 | Evaluar edad >= 14 | 12 | s | Falso |
| 6 | Ejecutar else | 12 | s | Registro no exitoso |

**Resultado esperado:** El registro no ha sido exitoso. Vuelvalo a intentar.

## Prueba 3: Edad inválida y segundo intento

**Datos de entrada:**
- Primer intento: edad 150.
- Desea continuar: s.
- Segundo intento: edad 18.
- Acepta términos: s.

| Paso | Instrucción | Edad | Continuar | Términos |
|---|---|---:|---|---|
| 1 | Ingresar edad | 150 | - | - |
| 2 | Validar edad | 150 | - | - |
| 3 | Ejecutar else por edad inválida | 150 | - | - |
| 4 | Preguntar si desea continuar | 150 | s | - |
| 5 | Repetir ciclo while | - | s | - |
| 6 | Ingresar nueva edad | 18 | s | - |
| 7 | Validar edad | 18 | s | - |
| 8 | Aceptar términos | 18 | s | s |
| 9 | Ejecutar Registrar() | 18 | s | s |
| 10 | Evaluar condiciones | 18 | s | Registro exitoso |

**Resultado esperado:** El registro ha sido exitoso.

## Prueba 4: Edad inválida y salida

**Datos de entrada:**
- Edad: -5.
- Desea continuar: n.

| Paso | Instrucción | Edad | Continuar |
|---|---|---:|---|
| 1 | Ingresar edad | -5 | - |
| 2 | Validar edad | -5 | - |
| 3 | Mostrar mensaje de datos incorrectos | -5 | - |
| 4 | Preguntar si desea continuar | -5 | n |
| 5 | Evaluar continuar === "n" | -5 | Verdadero |
| 6 | Ejecutar break | -5 | n |
| 7 | Cerrar interfaz readline | -5 | n |

**Resultado esperado:** El programa finaliza sin realizar el registro.

---

# 2. ValidarEdad.js

## Descripción
El algoritmo solicita la edad de una persona y verifica que sea un número entero entre 0 y 120. Posteriormente, determina si la persona es mayor o menor de edad, teniendo como referencia los 18 años.

## Variables utilizadas

| Variable | Descripción |
|---|---|
| `edad` | Almacena la edad convertida a número entero. |
| `edadTexto` | Almacena inicialmente la edad ingresada como texto. |
| `resultadoValidacion` | Guarda el mensaje de acuerdo con la edad. |

## Prueba 1: Persona mayor de edad

**Datos de entrada:**
- Edad: 25.

| Paso | Instrucción | edadTexto | edad | Resultado |
|---|---|---|---:|---|
| 1 | Solicitar edad | "25" | - | - |
| 2 | Aplicar parseInt() | "25" | 25 | - |
| 3 | Validar edad | "25" | 25 | Verdadero |
| 4 | Salir del while | "25" | 25 | - |
| 5 | Ejecutar ValidarEdad(25) | "25" | 25 | Mayor de edad |

**Resultado esperado:** La persona es mayor de edad.

## Prueba 2: Persona menor de edad

**Datos de entrada:**
- Edad: 17.

| Paso | Instrucción | edadTexto | edad | Resultado |
|---|---|---|---:|---|
| 1 | Solicitar edad | "17" | - | - |
| 2 | Aplicar parseInt() | "17" | 17 | - |
| 3 | Validar edad | "17" | 17 | Verdadero |
| 4 | Salir del while | "17" | 17 | - |
| 5 | Ejecutar ValidarEdad(17) | "17" | 17 | Menor de edad |

**Resultado esperado:** La persona es menor de edad.

## Prueba 3: Edad inválida y segundo intento

**Datos de entrada:**
- Primer intento: 150.
- Segundo intento: 18.

| Paso | Instrucción | edadTexto | edad |
|---|---|---|---:|
| 1 | Solicitar edad | "150" | - |
| 2 | Aplicar parseInt() | "150" | 150 |
| 3 | Evaluar edad > 120 | "150" | 150 |
| 4 | Mostrar mensaje de error | "150" | 150 |
| 5 | Repetir ciclo while | - | - |
| 6 | Solicitar nueva edad | "18" | - |
| 7 | Aplicar parseInt() | "18" | 18 |
| 8 | Validar edad | "18" | 18 |
| 9 | Salir del ciclo | "18" | 18 |
| 10 | Ejecutar ValidarEdad(18) | "18" | 18 |

**Resultado esperado:** La persona es mayor de edad.

## Prueba 4: Edad igual a cero

**Datos de entrada:**
- Edad: 0.

| Paso | Instrucción | edadTexto | edad | Resultado |
|---|---|---|---:|---|
| 1 | Solicitar edad | "0" | - | - |
| 2 | Aplicar parseInt() | "0" | 0 | - |
| 3 | Validar condiciones | "0" | 0 | Verdadero |
| 4 | Salir del while | "0" | 0 | - |
| 5 | Ejecutar ValidarEdad(0) | "0" | 0 | Menor de edad |

**Resultado esperado:** La persona es menor de edad.

---

# 3. semaforo.js

## Descripción

El código proporcionado en este archivo es idéntico al algoritmo `ValidarEdad.js`. Ambos contienen la misma función `ValidarEdad()` y la misma estructura de validación mediante el ciclo `while`.

Por lo tanto, las pruebas de escritorio correspondientes a este archivo son las mismas que se encuentran documentadas en el apartado 2: `ValidarEdad.js`.

**Observación:** Se debe verificar el contenido del archivo, ya que actualmente no contiene instrucciones relacionadas con el funcionamiento de un semáforo.

---

# 4. parqueader.js

## Descripción
El algoritmo calcula el valor que debe pagar un vehículo por utilizar un parqueadero, teniendo en cuenta el tipo de vehículo (carro o moto), la presentación de una factura del centro comercial y el tiempo de permanencia.

El algoritmo contempla 15 minutos de cortesía. Después de ese tiempo, calcula el cobro por horas, aproximando las fracciones de hora a la siguiente hora completa.

## Variables utilizadas

| Variable | Descripción |
|---|---|
| `vehiculo` | Identifica si el vehículo es carro (c) o moto (m). |
| `facturaCC` | Indica si el usuario tiene factura del centro comercial. |
| `tiempo` | Tiempo de permanencia convertido a horas. |
| `tiempoEntero` | Parte entera del tiempo de permanencia. |
| `tiempoDecimal` | Conversión del tiempo ingresado en minutos a horas con tres decimales. |
| `cobro` | Valor calculado por el uso del parqueadero. |
| `respuesta` | Mensaje final del proceso. |
| `continuar` | Determina si se desea repetir el proceso. |
| `cobroMaximo` | Variable inicializada en 30000. |

**Tarifas establecidas:**
- Carro: $4.000 por hora.
- Moto: $2.000 por hora.
- Tiempo de cortesía: hasta 15 minutos.
- Con factura del centro comercial: si el cobro supera $30.000, se establece en $15.000.
- Sin factura: se aplica un descuento del 50%.

## Prueba 1: Carro con tiempo de cortesía

**Datos de entrada:**
- Vehículo: c.
- Factura del centro comercial: s.
- Tiempo: 10 minutos.

**Conversión del tiempo:**

10 / 60 = 0.166 horas aproximadamente.

| Paso | Instrucción | Vehículo | Tiempo | Cobro |
|---|---|---|---:|---:|
| 1 | Ingresar tipo de vehículo | c | - | - |
| 2 | Ingresar factura | c | - | - |
| 3 | Ingresar tiempo | c | 10 min | - |
| 4 | Convertir minutos a horas | c | 0.166 | - |
| 5 | Validar datos de entrada | c | 0.166 | - |
| 6 | Evaluar tiempo <= 0.25 | c | 0.166 | Verdadero |
| 7 | Asignar mensaje de cortesía | c | 0.166 | 0 |

**Resultado esperado:** El parqueadero es totalmente gratis. Gracias por visitarnos.

## Prueba 2: Carro con factura y una hora de permanencia

**Datos de entrada:**
- Vehículo: c.
- Factura: s.
- Tiempo: 60 minutos.

**Conversión del tiempo:**

60 / 60 = 1 hora.

| Paso | Instrucción | Vehículo | Tiempo | Cobro |
|---|---|---|---:|---:|
| 1 | Ingresar tipo de vehículo | c | - | - |
| 2 | Ingresar factura | c | - | - |
| 3 | Ingresar tiempo | c | 60 min | - |
| 4 | Convertir minutos a horas | c | 1 | - |
| 5 | Validar datos | c | 1 | - |
| 6 | Evaluar tiempo <= 0.25 | c | 1 | Falso |
| 7 | Calcular cobro (1 * 4000) | c | 1 | 4000 |
| 8 | Evaluar factura === "s" | c | 1 | Verdadero |
| 9 | Evaluar cobro > 30000 | c | 1 | Falso |
| 10 | Asignar respuesta | c | 1 | 4000 |

**Resultado esperado:** El cobro total del parqueadero es 4000.

## Prueba 3: Moto sin factura y tiempo superior a una hora

**Datos de entrada:**
- Vehículo: m.
- Factura: n.
- Tiempo: 90 minutos.

**Conversión del tiempo:**

90 / 60 = 1.5 horas.

| Paso | Instrucción | Vehículo | Tiempo | Cobro |
|---|---|---|---:|---:|
| 1 | Ingresar tipo de vehículo | m | - | - |
| 2 | Ingresar factura | m | - | - |
| 3 | Ingresar tiempo | m | 90 min | - |
| 4 | Convertir minutos a horas | m | 1.5 | - |
| 5 | Obtener parte entera con Math.trunc() | m | 1 | - |
| 6 | Evaluar tiempo > tiempoEntero | m | 1.5 | Verdadero |
| 7 | Calcular (1 + 1) * 2000 | m | 1.5 | 4000 |
| 8 | Evaluar factura === "s" | m | 1.5 | Falso |
| 9 | Aplicar descuento del 50% | m | 1.5 | 2000 |
| 10 | Asignar respuesta | m | 1.5 | 2000 |

**Resultado esperado:** El cobro total del parqueadero es 2000.

## Prueba 4: Carro con factura y cobro superior a $30.000

**Datos de entrada:**
- Vehículo: c.
- Factura: s.
- Tiempo: 480 minutos.

**Conversión del tiempo:**

480 / 60 = 8 horas.

| Paso | Instrucción | Vehículo | Tiempo | Cobro |
|---|---|---|---:|---:|
| 1 | Ingresar tipo de vehículo | c | - | - |
| 2 | Ingresar factura | c | - | - |
| 3 | Ingresar tiempo | c | 480 min | - |
| 4 | Convertir minutos a horas | c | 8 | - |
| 5 | Obtener parte entera | c | 8 | - |
| 6 | Calcular 8 * 4000 | c | 8 | 32000 |
| 7 | Evaluar factura === "s" | c | 8 | Verdadero |
| 8 | Evaluar cobro > 30000 | c | 8 | Verdadero |
| 9 | Asignar cobro = 30000 / 2 | c | 8 | 15000 |
| 10 | Asignar respuesta | c | 8 | 15000 |

**Resultado esperado:** El cobro total del parqueadero es 15000.

## Prueba 5: Tipo de vehículo no válido

**Datos de entrada:**
- Vehículo: b.
- Factura: s.
- Tiempo: 60 minutos.

| Paso | Instrucción | Vehículo | Tiempo | Resultado |
|---|---|---|---:|---|
| 1 | Ingresar tipo de vehículo | b | - | - |
| 2 | Ingresar factura | b | - | - |
| 3 | Ingresar tiempo | b | 60 min | - |
| 4 | Convertir minutos a horas | b | 1 | - |
| 5 | Validar datos de entrada | b | 1 | Verdadero |
| 6 | Evaluar switch(vehiculo) | b | 1 | No coincide |
| 7 | Ejecutar default | b | 1 | Vehículo no válido |

**Resultado esperado:** Tipo de vehiculo no valido. Intente de nuevo.

---

# 5. anioBisiesto.js

## Descripción
El algoritmo permite determinar si un año es bisiesto mediante la evaluación de tres condiciones matemáticas: debe ser divisible entre 4, no debe ser divisible entre 100, excepto cuando también es divisible entre 400.

## Variables utilizadas

| Variable | Descripción |
|---|---|
| `anio` | Año ingresado por el usuario. |
| `anioBisiesto` | Variable booleana que determina si el año es bisiesto. |
| `respuesta` | Almacena el resultado devuelto por la función `bisiesto()`. |

## Prueba 1: Año bisiesto divisible entre 4

**Datos de entrada:**
- Año: 2024.

| Paso | Instrucción | Año | Condición | anioBisiesto |
|---|---|---:|---|---|
| 1 | Inicializar variable | 2024 | - | true |
| 2 | Evaluar anio % 4 === 0 | 2024 | Verdadero | true |
| 3 | Evaluar anio % 100 === 0 | 2024 | Falso | true |
| 4 | Retornar resultado | 2024 | - | true |
| 5 | Evaluar respuesta | 2024 | Verdadero | true |

**Resultado esperado:** El año 2024 es bisiesto.

## Prueba 2: Año no bisiesto

**Datos de entrada:**
- Año: 2023.

| Paso | Instrucción | Año | Condición | anioBisiesto |
|---|---|---:|---|---|
| 1 | Inicializar variable | 2023 | - | true |
| 2 | Evaluar anio % 4 === 0 | 2023 | Falso | false |
| 3 | Ejecutar else | 2023 | - | false |
| 4 | Retornar resultado | 2023 | - | false |
| 5 | Evaluar respuesta | 2023 | Falso | false |

**Resultado esperado:** El año 2023 no es bisiesto.

## Prueba 3: Año divisible entre 100, pero no entre 400

**Datos de entrada:**
- Año: 1900.

| Paso | Instrucción | Año | Condición | anioBisiesto |
|---|---|---:|---|---|
| 1 | Inicializar variable | 1900 | - | true |
| 2 | Evaluar anio % 4 === 0 | 1900 | Verdadero | true |
| 3 | Evaluar anio % 100 === 0 | 1900 | Verdadero | false |
| 4 | Evaluar anio % 400 === 0 | 1900 | Falso | false |
| 5 | Retornar resultado | 1900 | - | false |

**Resultado esperado:** El año 1900 no es bisiesto.

## Prueba 4: Año divisible entre 400

**Datos de entrada:**
- Año: 2000.

| Paso | Instrucción | Año | Condición | anioBisiesto |
|---|---|---:|---|---|
| 1 | Inicializar variable | 2000 | - | true |
| 2 | Evaluar anio % 4 === 0 | 2000 | Verdadero | true |
| 3 | Evaluar anio % 100 === 0 | 2000 | Verdadero | false |
| 4 | Evaluar anio % 400 === 0 | 2000 | Verdadero | true |
| 5 | Retornar resultado | 2000 | - | true |

**Resultado esperado:** El año 2000 es bisiesto.

---
