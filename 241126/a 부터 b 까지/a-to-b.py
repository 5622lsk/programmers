a, b = map(int, input().split())

while a<=b:
    if i%2==1:
        print(i*2, end=" ")
    else:
        print(i+3, end=" ")
    