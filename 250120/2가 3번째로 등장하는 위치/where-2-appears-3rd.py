n = int(input())
arr=list(map(int,input().split()))

cnt=0
position=-1

for i in range(n):
    if arr[i]==2:
        cnt+=1

        if cnt ==3:
            position=i+1
            break

print(position)