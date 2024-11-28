# 변수 선언 및 입력
n = int(input())
prod = 1

# 1부터 증가시키며 곱한 값이 n이상이 된 순간, 더해진 숫자를 출력합니다.
for i in range(1, 11):
	prod *= i
	if prod >= n:
		print(i)
		break