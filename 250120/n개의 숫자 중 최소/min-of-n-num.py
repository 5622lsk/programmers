n = int(input())
a = list(map(int, input().split()))

mi=min(a)
cnt=a.count(mi)

print(mi,cnt)