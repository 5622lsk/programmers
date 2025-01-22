n = int(input())
price = list(map(int, input().split()))

min_price= float('inf')
max_profit=0

for i in price:
    profit=i-min_price
    if i>max_profit:
        max_profit=profit

    if i<min_price:
        min_price=i

print(max_profit)
