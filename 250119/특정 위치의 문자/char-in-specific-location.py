# 배열을 만들고 문자 a를 입력받습니다.
word = ['L', 'E', 'B', 'R', 'O', 'S']
a = input()

# 같은 것이 없으면 None을, 있다면 그 인덱스를 출력합니다.
if a not in word:
    print("None")
# 해당 문자가 리스트에 있는 경우
else:
    print(word.index(a))
