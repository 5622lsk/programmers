n = int(input()) 
arr = list(map(int, input().split()))

min_profit = float('inf')  # 매우 큰 값으로 초기화

for i in range(n):
    for j in range(i+1, n):  # 올바른 range 사용
        profit = abs(arr[j] - arr[i])  # 두 수의 차이를 절대값으로 계산
        if profit < min_profit:
            min_profit = profit

print(min_profit)