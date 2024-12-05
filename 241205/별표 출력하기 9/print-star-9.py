n = int(input())

for i in range(1,n+1,1):
    space = " " * (n - i)*2
    star="* "*(2*i-1)
    print(space+star)
