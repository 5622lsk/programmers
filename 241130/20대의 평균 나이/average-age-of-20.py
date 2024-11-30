cnt = 0
sum = 0

while True:
    n = int(input())

    if n<20 or n>29:
        print(f"{sum/cnt:.2f}")
        break
    
    cnt+=1
    sum+=n