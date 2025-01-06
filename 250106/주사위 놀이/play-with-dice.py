count=[0,0,0,0,0,0]
arr = list(map(int, input().split()))
for i in arr:
    count[i-1]+=1

for j in range(7):
    cnt=count[j]
    print(f"{j} - {cnt}")