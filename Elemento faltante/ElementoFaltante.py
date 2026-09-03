entrada = input().split()  

N = int(entrada[0])

resto = [int(x) for x in entrada[1:]]

resto.sort()

resultado = N 

for i in range(1, N + 1):
    if i - 1 >= len(resto) or resto[i - 1] != i:
        resultado = i
        break

print(resultado)