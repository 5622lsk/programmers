n = int(input())
found=True

for i in range(2,n):
    if n % i ==0:
        found=False
        break
    
if found==False:
    print(C)
else:
    print(P)