n = int(input())  # 정수 N 입력
num = ord("A")  # 시작 알파벳의 ASCII 값

for i in range(n):  # 행 반복
    print("  " * i, end="")  # 행 시작 공백 출력
    for j in range(n - i):  # 열 반복 (점점 줄어드는 열 개수)
        print(chr(num), end=" ")  # 현재 알파벳 출력
        num += 1  # 다음 알파벳으로 이동
        if num > ord("Z"):  # Z 다음에는 A로 순환
            num = ord("A")
    print()  # 줄바꿈