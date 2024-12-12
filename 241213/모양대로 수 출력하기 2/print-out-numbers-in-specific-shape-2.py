cnt=2
str=[2,4,6,8]

n = int(input())

for i in range(n):
    for j in range(n):
        print(str[(i+j)%4], end=" ")
    print()