arr = list(map(int, input().split()))  # 공백으로 구분된 정수 입력
count_arr = [0] * 9  # 각 십의 자리 숫자의 개수를 저장할 배열 (1~9)

for i in arr:
    if i == 0:  # 입력이 0일 경우 종료
        break
    count_arr[i // 10 - 1] += 1  # 십의 자리 값에 해당하는 인덱스 증가

for idx, j in enumerate(count_arr, start=1):  # 결과 출력
    print(f"{idx} - {j}")