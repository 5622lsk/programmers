# 한 줄에 공백으로 구분된 입력
a, b = map(int, input().split())

for i in range(a, b + 1, -2):  
    print(i, end=" ")         