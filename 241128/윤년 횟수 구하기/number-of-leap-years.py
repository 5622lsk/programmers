count = 0 
count2 = 0 

num = int(input())

for num in range(1, n + 1):  
    if num % 4 == 0: 
        count += 1
    elif num % 100==0 and num%400=!0 :  
        count2 += 1
    else:  
        count2 += 1

# 결과 출력
print(count, count2) 