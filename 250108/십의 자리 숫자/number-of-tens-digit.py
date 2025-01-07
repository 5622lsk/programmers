arr = list(map(int, input().split())) 
count_arr=[0]*9

for i in arr:
    if i==0:
        break
    count_arr[i//10-1]+=1

for idx, j in enumerate(count_arr, start=1):  # 결과 출력
    print(f"{idx} - {j}")