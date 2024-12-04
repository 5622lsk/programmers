n = int(input())

for i in range(n, 0, -1):  # n부터 1까지 감소
    space = " " * (n - i) * 2  # 공백: 각 줄에 2칸씩 증가
    star = "* " * (2 * i - 1)  # 별: 홀수 개로 출력
    print(space + star)  # 공백과 별 출력