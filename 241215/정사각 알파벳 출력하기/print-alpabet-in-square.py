n = int(input())
num=ord('A')
for i in range(n):
    for j in range(n):
        print(chr(num), end="")
        num+=1
    print()
