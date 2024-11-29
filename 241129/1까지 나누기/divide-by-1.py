n = int(input())
count=0

for i in range(1,n+1):
    n //=i
    count+=1
    if n <=1:
        break

print(count)