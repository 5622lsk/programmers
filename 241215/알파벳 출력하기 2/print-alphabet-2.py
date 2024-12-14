n = int(input())
num=ord("A")

for i in range(n):
    print("  "*i,end="")
    for j in range(n-i):
        print(chr(num), end=" ")
        num+=1
        if num>ord("Z"):
            num=ord("A")
    print()
        