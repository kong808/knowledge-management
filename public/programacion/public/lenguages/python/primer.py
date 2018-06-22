#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Wed Jan  3 20:24:19 2018

@author: snoop
"""
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


d = {"sell": [
           {
               "Rate": 0.001425,
               "Quantity": 537.27713514
           },
           {
               "Rate": 0.00142853,
               "Quantity": 6.59174681
           }
]}

df = pd.DataFrame(d['sell'])
print (df)
df.plot(x='Quantity', y='Rate')

#https://matplotlib.org/gallery/subplots_axes_and_figures/subplot.html


#df2 = pd.DataFrame([['a', 'b'], ['c', 'd']], 
#                  index=['row 1', 'row 2'], 
#                 columns=['col 1', 'col 2'])
#df2.to_json(orient='split')
#http://pandas.pydata.org/pandas-docs/stable/generated/pandas.read_json.html
#rj = pd.read_json(df2)
#print(rj)


# Data for plotting
t = np.arange(0.0, 2.0, 0.01)
s = 1 + np.sin(2 * np.pi * t)

# Note that using plt.subplots below is equivalent to using
# fig = plt.figure and then ax = fig.add_subplot(111)
fig, ax = plt.subplots()
ax.plot(t, s)

ax.set(xlabel='time (s)', ylabel='voltage (mV)',
       title='Seno de x')
ax.grid()

fig.savefig("test.png")
plt.show()
