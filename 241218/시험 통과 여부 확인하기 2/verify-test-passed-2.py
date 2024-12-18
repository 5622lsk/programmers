n=int(input())
cnt=0

for i in range(n):
    arr = list(map(int, input().split()))
    sum1=sum(arr)
    avg = sum1 / 4 
    if avg>=60:
        print("pass")
        cnt+=1
    else:
        print("fail")
print(cnt)
    

    