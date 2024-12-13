n=int(input())
current=1

for i in range(n):
    if i%2==0:
        for j in range(n):
            print(current, end=" ")
            current+=1
    else:
        temp=current+n-1
        for j in range(n):
            print(temp, end=" ")
            temp-=1
        current+=n
    
    print()