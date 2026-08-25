numeros = []
repeticiones = int(input())

for i in range(repeticiones):
    numero = int(input())
    numeros.append(numero)

for element in numeros:
    count = 0
    for i in range(2, element):
        if (element % i == 0):
            count += 1
            break
    
    if (count == 0 and element > 1):
       
        print(f"{element} {element}")
    else:
   
        num_abajo = element - 1
        primo_abajo = None
        while num_abajo >= 2:
            count2 = 0
            for i in range(2, num_abajo):
                if (num_abajo % i == 0):
                    count2 += 1
                    break
            if (count2 == 0):
                primo_abajo = num_abajo
                break
            num_abajo -= 1
        
    
        num_arriba = element + 1
        primo_arriba = None
        while True:
            count3 = 0
            for i in range(2, num_arriba):
                if (num_arriba % i == 0):
                    count3 += 1
                    break
            if (count3 == 0):
                primo_arriba = num_arriba
                break
            num_arriba += 1
        
        if primo_abajo is not None:
            print(f"{primo_abajo} {primo_arriba}")
        else:
            print(f"{primo_arriba} {primo_arriba}")