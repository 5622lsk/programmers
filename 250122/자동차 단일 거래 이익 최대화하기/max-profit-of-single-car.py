# 입력 받기
n = int(input())  # 자동차 가격 정보의 개수
prices = list(map(int, input().split()))  # 자동차 가격 정보 리스트

# 초기값 설정
min_price = float('inf')  # 현재까지의 최소 가격 (초기값은 무한대)
max_profit = 0  # 최대 이익 (초기값은 0)

# 가격 리스트 순회
for price in prices:
    # 현재 가격에서 이익 계산
    profit = price - min_price
    # 최대 이익 갱신
    if profit > max_profit:
        max_profit = profit
    # 최소 가격 갱신
    if price < min_price:
        min_price = price

# 결과 출력
print(max_profit)