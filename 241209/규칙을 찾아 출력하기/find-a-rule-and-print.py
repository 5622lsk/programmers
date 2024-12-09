n = int(input())

for i in range(1, n + 1):  # 행 반복
    for j in range(1, n + 1):  # 열 반복
        # 첫 줄, 마지막 줄, 첫 열, 마지막 열, 또는 대각선 조건
        if i == 1 or i == n or j == 1 or j == n or i == j or i + j == n + 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")  # 그 외는 공백
    print()  # 줄바꿈