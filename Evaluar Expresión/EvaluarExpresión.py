x=0
expresion=input().split(';')
expresion.pop()
for i in expresion:
    if i=="X++" or i=="++X":
        x+=1
    else:
        x-=1
        
print(x) 
print(expresion)