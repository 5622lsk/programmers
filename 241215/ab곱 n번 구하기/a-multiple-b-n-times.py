n=int(input())

for i in range(n):
    
    a,b = map(int,input().split())
    product=1
    for j in range(a,b+1):
        product*=j
    print(product)
