n = int(input())

for i in range(1, n + 1):  # 행 반복
    for j in range(1, n + 1):  # 열 반복
        if i == 1 or i == n or j == 1 or j == n:  # 테두리 네모
            print("*", end=" ")
        elif j < i:  # 왼쪽 아래 
            print("*", end=" ")
        else:
            print(" ", end=" ")  # 그 외는 공백
    print()  # 줄바꿈
