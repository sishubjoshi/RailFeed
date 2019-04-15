import pandas as pd
from util import CUR_DIR
from classifier import classify
review = {}
review['food']=[]
review['health']=[]
review['journey']=[]
review['security']=[]
review['clean']=[]
review['digital']=[]
review['others']=[]


def analyze_csv():
    data = pd.read_csv('./media/TestData.csv')

    for i in range (len(data['complaint'])):
        review[classify(data['complaint'][i])].append(data['complaint'][i])
    print(review)
    return review
# analyze_csv()
