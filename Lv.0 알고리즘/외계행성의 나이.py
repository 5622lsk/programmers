""" 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다.
a는 0, b는 1, c는 2, ..., j는 9입니다. 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요. """

def solution(age):
    answer = ''
    alpha = ['a','b','c','d','e','f','g','h','i','j']
    age = str(age)
    for i in age:
        answer += alpha[int(i)] # 각 숫자를 정수로 변환하고, 대응하는 알파벳을 result에 추가
    return answer


def solution2(age):
    # 숫자를 문자열로 바꾸고, 각 숫자를 대응하는 알파벳으로 변환
    return ''.join(chr(97 + int(digit)) for digit in str(age))