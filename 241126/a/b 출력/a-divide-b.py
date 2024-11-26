# 두 정수 입력받기
a, b = map(int, input().split())

# 나눗셈 결과 계산
result = a / b

# 소수점 21번째 자리에서 내림 처리
multiplied = int(result * (10 ** 21))  # 21번째 자리까지 이동 후 정수로 변환
trimmed_result = multiplied / (10 ** 21)  # 다시 소수점 자리로 복원

# 결과 출력 (소수점 21자리로 고정)
print(f"{trimmed_result:.21f}")