n = int(input())

for i in range(1,n+1):
    space=" "*(n-i)
    star="* "*i
    print(space+star)
for i in range(n-1,0,-1):
    space=" "*(n-i)
    star="* "*i
    print(space+star)