# a = int(input())

# for i in range(1, a+1):
#     if i%2==0 and i%4!=0:
#         continue
#     elif (i//8)%2==0:
#         continue
#     elif i%7<4:
#         continue
    
# print(sorted(i), end=" ")

a = int(input())  # 정수 a 입력받기

# 결과를 저장할 리스트
result = []

# 1부터 a까지 반복
for i in range(1, a + 1):
    if i % 2 == 0 and i % 4 != 0:  # 짝수이면서 4의 배수가 아닌 경우
        continue
    elif (i // 8) % 2 == 0:  # 8로 나눈 몫이 짝수인 경우
        continue
    elif i % 7 < 4:  # 7로 나눈 나머지가 4보다 작은 경우
        continue
    
    # 조건을 만족하지 않는 숫자를 리스트에 추가
    result.append(i)

# 결과를 오름차순으로 출력
print(" ".join(map(str, result)))