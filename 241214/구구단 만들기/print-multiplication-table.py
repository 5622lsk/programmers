a,b = map(int,input().split())

for i in range(1,10):
    for j in range(b,a-1,-1):
        if j%2==0:
            print(f"{j} * {i} = {j*i}", end=" ")
        elif j>2:
            print("/",end=" ")
    print()