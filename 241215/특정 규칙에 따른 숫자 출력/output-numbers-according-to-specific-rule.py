n = int(input())
cnt=1

for i in range(n):
    print("  "*i,end="")
    for j in range(n-i):
        print(cnt, end=" ")
        cnt+=1
        if cnt>9:
            cnt=1
    print()

