import pickle
import os
from util import CUR_DIR
clf = pickle.load(open(os.path.join(CUR_DIR,
                 'pickles',
                 'classifier.pickle'), 'rb'))
count_vect = pickle.load(open(os.path.join(CUR_DIR,
                        'pickles',
                        'vectorizer.pickle'),'rb'))


def classify(text):
    # y = clf.predict()
    y = clf.predict(count_vect.transform([text]))
    # print(y[0])
    return y[0]