n = int(input())  # 정수 입력받기

for i in range(n,0,-1):  # 1부터 n까지 반복
    space = " " * (n - i)*2
    l_stars = "*" * i
    r_stars = "*" * i
    print(l_stars+space+r_stars)  # 공백과 별 출력