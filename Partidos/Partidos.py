sizes = input().split(" ")
a = int(sizes [0])
b = int(sizes [1])
c = int(sizes [2])
d = int(sizes [3])
if a==b and c==d:
    print("YES")
    print(a*c)

elif a==c and b==d:
    print("YES")
    print(a*b)

elif a==d and b==c:
    print("YES")
    print(a*c)

else:
    print("NO")
    print(a+b+c+d)