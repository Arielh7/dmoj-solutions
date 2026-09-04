objetivo = int(input())

valores = {1:1, 2:1, 3:2, 4:1, 5:2, 6:2, 7:3, 8:1, 9:24,}
count =0

while objetivo>9:
    if objetivo%2!=0:
        count+=1
        objetivo-=1
    objetivo=objetivo/2

print(valores[objetivo]+count)