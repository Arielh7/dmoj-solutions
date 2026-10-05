numeros = input().split(" ")
a = int(numeros[0])
b= int(numeros[2])
N = int(numeros[1])

entero = (int(N*((a**2+b**2)**0.5))) if (int(N*((a**2+b**2)**0.5)) - float(N*((a**2+b**2)**0.5)) == 0) else (int(N*((a**2+b**2)**0.5))+1)

print(entero)