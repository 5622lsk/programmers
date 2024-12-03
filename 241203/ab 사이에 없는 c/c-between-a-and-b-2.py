a,b= map(int,input().split())
satisfied=True

for i in range(a,b):
    if i%c==0:
        satisfied=False

    if satisfied == False:
        print("NO")
    else:
        print("YES")