def solution(i, j, k):
    count = 0
    for num in range(i, j + 1):
        count += str(num).count(str(k))  # num을 문자열로 변환 후 k의 등장 횟수를 세기
    return count