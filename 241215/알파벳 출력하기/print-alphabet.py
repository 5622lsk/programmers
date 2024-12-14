n = int(input())
num= ord("A")

for i in range(n):
    for _ in range(i+1):
        print(chr(num), end="")
        num+=1
    print()
