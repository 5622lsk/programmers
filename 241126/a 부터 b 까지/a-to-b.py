a, b = map(int, input().split())

for i in range(a,b+1):
    if i%2==1:
        print(i*2, end=" ")
    else:
        print(i+3, end=" ")