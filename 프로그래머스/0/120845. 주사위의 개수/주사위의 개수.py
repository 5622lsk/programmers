def solution(box, n):
    # 각 차원에서 들어갈 수 있는 주사위 개수 계산
    max_width = box[0] // n
    max_length = box[1] // n
    max_height = box[2] // n
    
    # 전체 주사위 개수
    return max_width * max_length * max_height