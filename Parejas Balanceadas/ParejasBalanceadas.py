casos = int(input())
datos = []
for _ in range (casos):
    dato = input().split(' ')
    datos.append(list(dato[1]))
    

for i in datos:
    hombres=0
    mujeres=0
    for c in i:
        if c == '>':
            mujeres+=1
        else:
            mujeres-=1
            if(mujeres<0):
                break
    if mujeres==0:
        print("Balanceada")
    else:
        print("No Balanceada")