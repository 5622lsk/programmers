cnt = 0
sum = 0

while True:
    n = int(input())

    if n < 20 or n > 29:  # 20대가 아닌 나이 입력 시 종료
        break
    
    sum += n
    cnt += 1

    print(f"{sum / cnt:.2f}")