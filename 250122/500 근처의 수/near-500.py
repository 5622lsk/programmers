arr=list(map(int,input().split()))

result=[]
result2=[]
for i in arr:
    if i <500:
        result.append(i)
    elif i>500:
        result2.append(i)
    
print(max(result),min(result2))