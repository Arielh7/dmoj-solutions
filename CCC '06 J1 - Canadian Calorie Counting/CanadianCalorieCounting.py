burgers = [461, 431, 420, 0]
side = [100, 57, 70, 0]
drinks=[130, 160, 118, 0]
dessert = [167, 266, 75, 0]

a = int(input())
b = int(input())
c = int(input())
d = int(input())

print(f"Your total Calorie count is {burgers[a-1]+side[b-1]+drinks[c-1]+dessert[d-1]}.")
