cnt=0
sum=0
while True:
    n = int(input())
    sum+=n
    cnt+=1
    print(round(sum/cnt,2))

    if n<20 or n>29:
        break