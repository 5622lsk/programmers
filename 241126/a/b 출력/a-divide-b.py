 import math

# 두 정수 입력받기
a, b = map(int, input().split())

# 나눗셈 결과
result = a / b

# 소수점 21번째 자리에서 내림
trimmed_result = math.floor(result * (10 ** 21)) / (10 ** 21)

# 결과 출력 (소수점 고정)
print(f"{trimmed_result:.21f}")
