ATeam = []
BTeam=[]

for _ in range(3):
    number=int(input())
    ATeam.append(number)
    
    

for _ in range(3):
    number=int(input())
    BTeam.append(number)
    
if((ATeam[0]*3+ATeam[1]*2+ATeam[2]*1)>(BTeam[0]*3+BTeam[1]*2+BTeam[2]*1)):
    print('A')

elif((ATeam[0]*3+ATeam[1]*2+ATeam[2]*1)<(BTeam[0]*3+BTeam[1]*2+BTeam[2]*1)):
    print('B')
    
else:
    print('T')
