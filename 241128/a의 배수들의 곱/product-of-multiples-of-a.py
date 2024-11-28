prod=1
a, b = map(int, input().split())
for i in range(1, b+1):
    if i%a==0:
        prod*=i

print(prod)
