#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'getMinTime' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER cache_size
#  2. INTEGER cache_time
#  3. INTEGER server_time
#  4. STRING_ARRAY urls
#

def getMinTime(cache_size, cache_time, server_time, urls):
    cache = []
    res = []
    for url in urls:
        if url in cache:
           res.append(cache_time)
           if len(cache != 1):
               cache.remove(url)
               cache.append(url)
        else:
            res.append(server_time)
            if len(cache) == cache_size:
                cache.pop(0)
                cache.append(url)
            else:
                cache.append(url)
    return res 

if __name__ == '__main__':

    cache_size = int(input().strip())

    cache_time = int(input().strip())

    server_time = int(input().strip())

    urls_count = int(input().strip())

    urls = []

    for _ in range(urls_count):
        urls_item = input()
        urls.append(urls_item)

    result = getMinTime(cache_size, cache_time, server_time, urls)
    print(result)

    
