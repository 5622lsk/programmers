n = int(input())

for i in range(1, n + 1):  # 행 반복
    for j in range(1, n + 1):  # 열 반복
        if i == 1 or i == n:  # 첫 번째 줄 또는 마지막 줄
            print("*", end=" ")
        elif j == 1 or j == n or i == j:  # 첫 열, 마지막 열, 또는 왼쪽 대각선
            print("*", end=" ")
        else:
            print(" ", end=" ")  # 그 외는 공백
    print()  # 줄바꿈