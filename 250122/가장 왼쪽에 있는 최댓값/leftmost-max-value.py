# 입력 받기
n = int(input())
arr = list(map(int, input().split()))

result=[]
end=n

while end>0:
    max_result=max(arr[:end])
    max_index=arr.index(max_result)+1
    result.append(max_index)
    end=max_index-1

print(" ".join(map(str,result)))