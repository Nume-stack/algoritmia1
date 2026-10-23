Algoritmo propinas
	Definir cuenta Como Entero
	Definir porcentajeDePropina Como Real
	Definir numeroPersonas Como Entero
	

	
	Escribir "Ingrese la cuenta "
	Leer cuenta
	
	Escribir "Ingrese el porcentaje de la propina "
	Leer porcentajeDePropina
	
	Escribir "Ingrese el numero de personas que va a pagar la cuenta "
	leer numeroPersonas
	
	
	Si cuenta <= 0 o numeroPersonas <= 0 Entonces
		Escribir "Los valores ingresados no son correctos" 
	SiNo
		propina <- cuenta *(porcentajeDePropina/100)
		totalCuenta <- cuenta + propina
		totalPorPersonas <- totalCuenta / numeroPersonas
		
		Escribir "El total de la propina es " , propina
		Escribir "El total de la cuenta (sumado con la propina) es " , totalCuenta
		Escribir "El total a pagar por persona es " , totalPorPersonas
	Fin Si
	
	
	
	
	
FinAlgoritmo
