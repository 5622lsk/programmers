def solution(rsp):
    win = {'2': '0', '0':'5', '5':'2'}
    
    result = ''.join(win[char] for char in rsp)
    return result