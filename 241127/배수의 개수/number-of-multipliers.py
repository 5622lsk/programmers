count = 0
count2 = 0
count2 = 0

for _ in range(10):
    num = int(input())
    if num % 3 == 0:
        count += 1
    elif num % 5 == 0:
        count2 +=1
    elif num % 5==0 and num%3==0:
        count+=1
        count2+=1

# 결과 출력
print(count, count2)