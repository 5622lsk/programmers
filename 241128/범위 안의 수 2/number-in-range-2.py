sum=0
cnt=0
for _ in range(10):
    num = int(input())
    if num >= 0 and num<= 200:
        sum+=num
        cnt+=1
avg=round(sum/cnt,1)
print(sum, avg)