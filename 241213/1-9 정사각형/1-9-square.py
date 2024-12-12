cnt=0

n = int(input())

for i in range(n):
    for j in range(n):
        cnt+=1
        if cnt>9:
            cnt=1
        print(cnt, end="")
    print()