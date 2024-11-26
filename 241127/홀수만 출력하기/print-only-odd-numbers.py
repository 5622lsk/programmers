# 정수 N 입력받기
N = int(input())

# N개의 정수 처리
for _ in range(N):
    num = int(input())  # 각 정수를 입력받음
    if num % 2 == 1 and num % 3 == 0:  # 홀수이면서 3의 배수인지 확인
        print(num)