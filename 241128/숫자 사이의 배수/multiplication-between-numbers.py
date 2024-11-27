a, b = map(int, input().split())
sum=0
cnt=0

for i in range(a, b+1):
    if i%5==0 or i%7==0:
        sum += i
        cnt+=1

avg == round(sum/cnt, 1) if cnt > 0 else 0

print(sum, avg)