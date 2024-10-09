""" 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다.
정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요.
최빈값이 여러 개면 -1을 return 합니다. """
from collections import Counter

def solution(array):
    counter = Counter(array)
    most_common = counter.most_common()

    if len(most_common)  > 1 and most_common[0][1] == most_common[1][1]:
        return -1
    else: return most_common[0][0]