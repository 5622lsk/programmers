cnt=9
n=int(input())

for i in range(n):
    for j in range(n):
        cnt-=1
        if cnt<1:
            cnt=9
        print(cnt, end="")
    print()