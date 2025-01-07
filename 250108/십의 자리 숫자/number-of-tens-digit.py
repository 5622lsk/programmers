arr = list(map(int, input().split()))  # 입력된 숫자 리스트
count_arr = [0] * 9  # 각 십의 자리 숫자의 개수를 저장할 배열

for i in arr:
    if i == 0:  # 0이 입력되면 반복 종료
        break
    if i >= 10:  # 두 자리 숫자인 경우만 처리
        count_arr[i // 10 - 1] += 1

for idx, count in enumerate(count_arr, start=1):
    print(f"{idx} - {count}")