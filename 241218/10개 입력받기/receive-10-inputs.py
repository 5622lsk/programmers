arr = list(map(int, input().split()))
sum=0
cnt=0
result=[]
for i in arr:
    if i == 0:
        break
    sum+=i
    cnt+=1

avg=sum/cnt
print(sum,round(avg,1))