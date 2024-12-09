n = int(input())

for i in range(1,n+1):
    for j in range(1,n+1):
        if i==0 or i==n or i+1==j:
            print("* ",end="")
        elif j==1 or j==n:
            print("* ",end="")
        else:
            print(" ",end="")
    print()