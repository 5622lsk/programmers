n=int(input())

for i in range(n):
    print("  "*i,end="")
    for j in range(n-i,0,-1):
        print(j,end=" ")
    print()