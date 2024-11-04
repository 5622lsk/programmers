def solution(numbers, direction):
    if direction == "right":
        # 마지막 원소를 맨 앞에 추가
        return [numbers[-1]] + numbers[:-1]
    elif direction == "left":
        # 첫 번째 원소를 맨 뒤에 추가
        return numbers[1:] + [numbers[0]]