n = int(input())  # 정수 입력

# 2 이상 n-1 이하의 수로 나누어떨어지는지 확인
is_composite = False
for i in range(2, n):
    if n % i == 0:  # 나누어떨어지면 합성수
        is_composite = True
        break

# 결과 출력
if is_composite:
    print("C")
else:
    print("N")