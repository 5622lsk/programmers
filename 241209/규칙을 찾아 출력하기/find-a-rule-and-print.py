n = int(input())

for i in range(n):
    for j in range(n):
        if i==0 or j==n or i==n or j==0:
            print("* ",end="")
    print()