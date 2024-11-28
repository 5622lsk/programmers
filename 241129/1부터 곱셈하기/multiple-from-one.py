# 입력받기
n = int(input())

# 초기값 설정
product = 1  # 곱
last_number = 0  # 마지막으로 곱해진 숫자

# 1부터 10까지 곱셈 진행
for i in range(1, 11):
    product *= i
    if product >= n:  # 곱이 n 이상인 순간
        last_number = i
        break

# 결과 출력
print(last_number)