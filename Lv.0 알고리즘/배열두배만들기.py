""" 정수 배열 numbers가 매개변수로 주어집니다.
numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
 """
# 리스트 컴프리헨션 방식

def solution(numbers):
    return [num*2 for num in numbers]