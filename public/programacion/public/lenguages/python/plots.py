#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Fri Jan  5 14:28:36 2018

@author: snoop
"""

import matplotlib.pyplot as plt

year = [1950, 1970, 1990, 2010]
population = [2.519, 3.692, 5.263, 6.972]

#1st
#pyth connects the dots and show a line graph
plt.plot(year, population)
plt.xlabel('Population')
plt.ylabel('Years')
plt.title('World Population')

plt.show()

#2nd
#pyth doesn't connect the dots, and show them exctly where they are
plt.scatter(year, population)
plt.show()

