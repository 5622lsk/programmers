prod=1
x=0

n = int(input())

while True:
    if n == prod:
        break
    
    prod *=2
    x+=1
print(x)
