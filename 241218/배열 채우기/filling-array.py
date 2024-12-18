arr=list(map(int,input().split()))
result=[]
for i in arr:
    if i ==0:
        break
    result.append(i)

print(*result[::-1])