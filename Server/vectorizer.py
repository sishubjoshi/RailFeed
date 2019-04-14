from sklearn.feature_extraction.text import TfidfVectorizer,HashingVectorizer
import nltk
nltk.data.path.append('./nltk_data/')
from nltk.stem.snowball import SnowballStemmer
from nltk.tokenize import word_tokenize
import os
import pickle
CUR_DIR = os.path.dirname(__file__)
stop_words = pickle.load(open(os.path.join(CUR_DIR,'pickles','stopwords.pickle'),'rb'))
train = pickle.load(open(os.path.join(CUR_DIR,'pickles','vocab.pickle'),'rb'))

ss=SnowballStemmer('english')
def dataprocessing(text):
    sent = text.lower()
    words = word_tokenize(sent)
    clrwds = [ss.stem(word) for word in words if not word in stop_words]
    # rt = " ".join(clrwds)
    print(clrwds)
    return(clrwds)

vect = TfidfVectorizer(ngram_range= (1,2))
x_vect = vect.fit_transform(train)
# print('output',vect.transform(['good']),'finished',x_vect.shape)
# nltk.download("punkt", "D:/aa/Repositories/heroku/Review-Analyzer-Flask/Backend/nltk_data/")
