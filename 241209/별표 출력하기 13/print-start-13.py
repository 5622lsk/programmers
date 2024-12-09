n= int(input())
for i in range(1,2*n+1):
    if i%2==0:
        print("* "*(i//2))
    else:
        print("* "*(n-(i//2)))