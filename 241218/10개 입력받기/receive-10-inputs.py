arr = list(map(int, input().split()))
sum=0
cnt=0
result=[]
for i in arr:

    sum+=i
    cnt+=1
    if i == 0:
    break
avg=sum/cnt
print(sum,round(avg,1))