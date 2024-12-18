arr = list(map(int, input().split()))
sum=0
cnt=0
for i in arr:
    if i==0:
        break
    elif i%2==0:
        sum+=i
        cnt+=1
    
print(cnt,sum)