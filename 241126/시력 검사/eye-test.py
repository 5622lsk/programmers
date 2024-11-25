# 두 눈의 시력 입력받기
a = float(input())
b = float(input())

# 조건에 따른 출력
if a >= 1.0 and b >= 1.0:
    print("High")
elif a >= 0.5 and b >= 0.5:
    print("Middle")
else:
    print("Low")