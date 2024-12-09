n = int(input())

for i in range(1,2*n+1): 
    if i % 2 == 0:
        print("* " * (n - (i // 2)+1))
    else:
        print("* " * ((i // 2) + 1))
