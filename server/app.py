from flask import Flask, jsonify, make_response
from flask import request, url_for, redirect
import main
import config

secret = config.SECRET_KEY
cid = config.CLIENT_ID

app = Flask(__name__)
 
 #main.username

@app.route("/", methods=['GET'])
def home():
    print("Hello World")
    return redirect(url_for('login'))

#is the token going to be a query string?
@app.route("/login", methods=['GET', 'POST'])
def login():
    """User Authentification."""
    if request.method == 'POST':
        token = main.authentication(main.username, main.scope, cid, secret)
        if token:
            return redirect(url_for('success', user = main.username, token = token))
        else:
            return redirect(url_for('failure'))
    else:
        token = main.authentication(main.username, main.scope, cid, secret)
        if token:
            return redirect(url_for('success', user = main.username, token = token))
        else:
            return redirect(url_for('failure'))

#currently says success is missing two positional tokens :(   
@app.route('/success')
def success(user, token):
    return jsonify({'token output' : token, 'user' : user, 'message' : 'success! welcome to the spotify generator'})

@app.route('/failure')
def failure():
    return jsonify({'message': 'Unable to authorize user'})

if __name__=='__main__':
    app.run(debug=True)
    # app.run(host='localhost:', port=5000)



#something wrong with the user authentification right now so it cannot be run outside of debug mode
#the redirects should work but because user is not currently working
#currently, user is empty so the spotipy app is freaking out