a,b = map(int,input().split())  # 정수 입력

is_composite = False
for i in range(a, b+1):
    if 1920 % i == 0 and 2880%2==0:  # 나누어떨어지면 합성수
        is_composite = True
        break

# 결과 출력
if is_composite:
    print(1)
else:
    print(0)