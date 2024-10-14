def print_square_pattern(N):
    for i in range(N):
        print('* ' * N)

def print_Triangle_pattern(N):
    for i in range(1, N+1):
        print('*' * i)

def print_numm_pattern(N):
    for i in range(1, N+1):
        for j in range(1, i+1):
            print(j, end='')
        print()
        
def print_num_pattern(N):
    for i in range(1, N+1):
        print(i * str(i))

N = 5

print_square_pattern(N)
print_Triangle_pattern(N)
print_numm_pattern(N)
print_num_pattern(N)