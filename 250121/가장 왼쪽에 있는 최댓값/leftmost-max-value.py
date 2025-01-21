# 입력 받기
n = int(input())
arr = list(map(int, input().split()))

# 결과를 저장할 리스트
result = []

# 현재 검색 범위
end = n

while end > 0:
    # 최대값 찾기 (부분 배열)
    max_value = max(arr[:end])
    max_index = arr.index(max_value) + 1  # 1부터 시작하는 인덱스
    
    # 결과에 추가
    result.append(max_index)
    
    # 검색 범위를 최대값 위치로 줄임
    end = max_index - 1

# 결과 출력 (공백으로 구분)
print(" ".join(map(str, result)))