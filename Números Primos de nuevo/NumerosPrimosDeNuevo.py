repeticiones = int(input())
numeros =[]
condicion = False
primerNumero=0
for i in range(repeticiones):
    numero = int(input());
    numeros.append(numero)
    
for element in numeros:
    for i in range(element , -1 , -1):
        for b in range(i , -1 , -1):
            if (i%b==0):
                count+=1
            if(count == 2 and):
                 
                