""" "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. \
정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

제한사항
1 ≤ n ≤ 10 """

def solution(num_list):
    even=0
    odd=0
    for num in num_list:
        if num%2==0:
            even += 1
        else:
            odd += 1
    return [even, odd]