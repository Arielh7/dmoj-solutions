casos=int(input())
numeros=[]
arrayNumeros =[]

for _ in range (casos):
    n=int(input())
    numeros.append(n)

for n in numeros:
    stringNumero= str(n)
    count = 0
    for i in range(len(stringNumero)):
        digito = int(stringNumero[i])
        if digito != 0 and n % digito == 0:
            count += 1
    print(count)    