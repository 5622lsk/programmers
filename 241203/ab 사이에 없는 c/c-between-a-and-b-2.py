a,b= map(int,input().split())
satisfied=True

for i in range(a,b+1):
    if i%c==0:
        satisfied=False

    if satisfied == False:
        print("NO")
    else:
        print("YES")