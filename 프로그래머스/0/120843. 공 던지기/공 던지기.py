def solution(numbers, k):
    index = (2*(k-1))%len(numbers)
    return numbers[index]