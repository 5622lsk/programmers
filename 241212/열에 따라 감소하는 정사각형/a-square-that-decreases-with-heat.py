n = int(input())

for i in range(n):  # i는 n부터 1까지 감소
    for j in range(n, 0, -1):  # j는 n부터 1까지 감소
        print(j, end=" ")
    print()  # 한 줄 출력 후 줄바꿈