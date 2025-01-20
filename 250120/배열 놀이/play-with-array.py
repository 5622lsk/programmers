# 입력 받기
n, q = map(int, input().split())
elements = list(map(int, input().split()))

# 질의 처리
for _ in range(q):
    query = input().split()
    command = query[0]
    
    if command == "1":  # 1 a: a번째 원소 출력
        a = int(query[1])
        print(elements[a - 1])
    
    elif command == "2":  # 2 b: b인 원소의 인덱스 출력
        b = int(query[1])
        if b in elements:
            print(elements.index(b) + 1)
        else:
            print(0)
    
    elif command == "3":  # 3 s e: s번째부터 e번째까지 출력
        s, e = map(int, query[1:])
        print(" ".join(map(str, elements[s-1:e])))