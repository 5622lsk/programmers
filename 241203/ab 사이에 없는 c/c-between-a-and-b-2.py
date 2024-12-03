a,b,c= map(int,input().split())
satisfied=True

for i in range(a,b+1):
    if i%c==0:
        satisfied=False
        break

if satisfied == False:
    print("NO")
else:
    print("YES")