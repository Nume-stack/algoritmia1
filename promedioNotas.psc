Algoritmo promedioNotas
	definir i Como Entero
	Definir notas Como real
	
	Definir  largoLista Como Entero
	escribir "Ingresa la cantidad de notas que desea ingresar en el sistema"
	leer largoLista 
	
	Definir nota Como Real
	Dimension notas[largoLista]
	
	Escribir "Ingresa las notas de 0 a 5: "
	
	i<-1
	Mientras i <= largoLista Hacer
		Escribir "Ingresa la nota #", i, " :"
		leer nota
		si nota < 0 o nota > 5 Entonces
			Escribir "La nota que ingresaste no es correcta. Vuelvelo a intentar"
		SiNo
			notas[i] <- nota
			i <- i +1
		FinSi
	Fin Mientras

	para j <- 1 hasta largoLista Hacer
		sumaNotas <- notas[j] + sumaNotas
	FinPara
	
	promedio <- sumaNotas / largoLista
	
	Escribir "El promedio total de las notas ingresadas es: " , promedio
	
FinAlgoritmo
