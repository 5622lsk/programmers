# 세 정수 a, b, c 초기화
a = 5
b = 6
c = 7

# 값 교환
temp = a  # 임시 변수에 a 값을 저장
a = c     # c 값을 a에 대입
c = b     # b 값을 c에 대입
b = temp  # 임시 변수의 값을 b에 대입

print(a)
print(b)
print(c)