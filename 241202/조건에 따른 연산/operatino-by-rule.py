cnt=0
n = int(input())

while n<1000:
    if n % 2 == 0:
        n = n*3+1
        cnt+=1
    else:
        n = n*2+2
        cnt+=1

print(cnt)