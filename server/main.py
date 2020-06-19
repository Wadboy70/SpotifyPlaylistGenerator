import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from spotipy import oauth2
from spotipy.oauth2 import SpotifyOAuth
import spotipy.util as util



#to run util.prompt_for_user_token it requires username, scope (what data you are trying to access), clientid, client secret, and redirect uri
#client id and client secret need to be moved into .env later... currently just trying to get shit to work 
cid = '6b15c13959ad422e991f07d2fb1fc56d'
secret = '2cc7758ff94e4341ba75e3c4c922b5b'
redirect = 'http://localhost:8888/callback/'
username = 'spotify:user:12186297054'

scope = "user-library-read"


#source of error: util.prompt_for_user_token
# scope = 'user-library-read'
# token = util.prompt_for_user_token(username, scope, cid, secret,
#                            redirect)

token = util.prompt_for_user_token(username, scope, cid, secret, redirect)

