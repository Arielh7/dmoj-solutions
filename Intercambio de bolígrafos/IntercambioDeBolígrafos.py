casos = int(input())
posibilidades = []
for _ in range(casos):
    numeros = input().split(' ')
    posibilidades.append(numeros)

for i in posibilidades:
    k = int(i[0])
    pos1 = int(i[1])
    pos2 = int(i[2])
    distancia = abs(pos1 - pos2)
    resultado = max(1, distancia - k)
    print(resultado)