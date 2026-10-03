import sys

jugador = int(input())
primer_equipo = list(map(int, input().split()))
segundo_equipo = list(map(int, input().split()))

posicion = primer_equipo[jugador - 1]

count = 0
for distancia in segundo_equipo:
    if distancia < posicion:
        count += 1
    if count >= 2:
        print("GOAL")
        sys.exit()

print("OFFSIDE")