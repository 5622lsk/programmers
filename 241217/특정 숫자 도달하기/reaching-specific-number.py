arr=list(map(int,input().split()))
sum=0
cnt=0

for i in arr:
    if i>=250:
        break
    sum+=i
    cnt+=1
avg=round((sum/cnt),1)
print(sum,avg)