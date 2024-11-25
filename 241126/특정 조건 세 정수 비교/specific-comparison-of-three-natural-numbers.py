# A의 수학과 영어 점수 입력받기
a,b,c = map(int, input().split())

if a==min(a,b,c):
    print(1,end=" ")
else:
    print(0,end=" ")
if a==b==c:
    print(1)
else:
    print(0)
