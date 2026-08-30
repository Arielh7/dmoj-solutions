numeros = []
answer = True

for _ in range(4):
    numero = int(input())
    numeros.append(numero)


if (numeros[0] != 8 and numeros[0] != 9) or (numeros[3] != 8 and numeros[3] != 9):
    answer = False


if numeros[1] != numeros[2]:
    answer = False

if answer:
    print("ignore")
else:
    print("answer")