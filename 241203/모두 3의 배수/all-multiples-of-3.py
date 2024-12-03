result = 1
for _ in range(5):
    n = int(input())
    if n%3==0:
        result = 0  
        break

print(result)