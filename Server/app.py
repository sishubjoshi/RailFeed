from flask import Flask, render_template, request, jsonify
import classifier as clf

app = Flask(__name__)





@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/success',methods=['POST'])
# def success():
#     if request.method == 'POST':
        
#         review = request.form['user_review']
#         Y = clf.classify(review)
#         return render_template('success.html',val=Y)

@app.route('/review', methods=['POST'])
def review():
        text = request.get_json()
        Y = clf.classify(text['review'])
        print(Y)
        return jsonify({'message': Y})


if __name__ == '__main__':
    app.run(debug=True)