primerPunto=input().split(' ')
segundoPunto=input().split(' ')

if((int(primerPunto[0])>=0 and int(segundoPunto[0])>=0) or (int(primerPunto[0])<=0 and int(segundoPunto[0])<=0)) and ((int(primerPunto[1])>=0 and int(segundoPunto[1])>=0) or (int(primerPunto[1])<=0 and int(segundoPunto[1])<=0)):
    print("SI") 
else: 
    print("NO")