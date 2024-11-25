a, b = map(int, input().split())

# 첫 번째 조건 결과
first_result = 1 if a < b else 0
# 두 번째 조건 결과
second_result = 1 if a == b else 0

# 한 줄로 출력
print(first_result, second_result)
