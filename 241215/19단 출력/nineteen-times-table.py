
for i in range(1,20):
    for j in range(1,20):
        if j%2==0:
            print(f"{i} * {j} = {i*j}", end="\n")
        elif j==19:
            print(f"{i} * {j} = {i*j}", end="\n")
        else:
            print(f"{i} * {j} = {i*j} / ", end="")
        