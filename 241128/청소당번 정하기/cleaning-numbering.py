count = 0
count2 = 0
count3 = 0

n = int(input())

for _ in range(n):
    if n % 12 == 0:
        count += 1
    elif n % 3 == 0:
        count2 += 1
    elif n % 2 == 0:
        count3 += 1


# 결과 출력
print(count, count2, count3)