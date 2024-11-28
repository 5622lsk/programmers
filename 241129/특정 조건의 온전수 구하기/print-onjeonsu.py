# 입력받기
n = int(input())

# 온전수를 저장할 리스트
result = []

# 1부터 n까지 반복
for i in range(1, n + 1):
    # 조건에 맞지 않는 경우는 건너뛰기
    if i % 2 == 0:  # 2로 나누어 떨어짐
        continue
    if i % 10 == 5:  # 일의 자리가 5
        continue
    if i % 3 == 0 and i % 9 != 0:  # 3으로 나누어 떨어지고 9로는 나누어지지 않음
        continue

    # 조건을 모두 만족하지 않는 경우는 온전수
    result.append(i)

# 결과 출력
print(" ".join(map(str, result)))