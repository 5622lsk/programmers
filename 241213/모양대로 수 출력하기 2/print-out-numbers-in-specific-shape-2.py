cnt=0

n = int(input())

for i in range(n):
    for j in range(n):
        cnt+=2
        if cnt>8:
            cnt=2
        print(cnt, end=" ")
    print()