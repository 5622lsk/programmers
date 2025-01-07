arr = list(map(int, input().split()))
count_arr = [0] * 10

# 카운팅 배열을 통해 십의 자리수 각각의 빈도 저장, 0이 나오면 for문에서 빠져나오기
for elem in arr:
	if elem == 0:
		break
	if elem < 10:
		continue
	count_arr[elem // 10] += 1
	
# 1부터 9까지 나온 횟수를 출력
for i in range(1, 10):
	print(f"{i} - {count_arr[i]}")