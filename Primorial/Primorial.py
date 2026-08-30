repeticiones = int(input())
numeros = []

for i in range(repeticiones):
    numero = int(input())
    numeros.append(numero)

for i in range(len(numeros)):
    resultado = 1
    for a in range(2, numeros[i] + 1):
        count = 0
        for b in range(2, a):
            if a % b == 0:
                count += 1
                break
        if count == 0:
            resultado *= a
    print(resultado)

#mismo codigo de Cuantos primos dividen el numero practicamente XD
