n = int(input())
prod=1

for i in range(1, 11):
    prod*=i

    if prod>=n:
        break
    
print(prod)