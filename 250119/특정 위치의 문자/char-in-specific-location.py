# 초기화된 문자 배열
letters = ['L', 'E', 'B', 'R', 'O', 'S']

# 입력 받기
input_char = input("문자를 입력하세요: ").strip()

# 배열에서 입력된 문자의 위치 찾기
if input_char in letters:
    print(letters.index(input_char))
else:
    print("None")