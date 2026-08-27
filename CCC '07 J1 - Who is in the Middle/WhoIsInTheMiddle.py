firstBowl = int(input())
secondBowl=int(input())
thirdBowl=int(input())

arrayBowl = []
arrayBowl.append(firstBowl)
arrayBowl.append(secondBowl)
arrayBowl.append(thirdBowl)
arrayBowl.sort()

print(f"{arrayBowl[1]}")
