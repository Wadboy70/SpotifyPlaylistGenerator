import sys
import spotipy
import spotipy.util as util



#to run util.prompt_for_user_token it requires username, scope (what data you are trying to access), clientid, client secret, and redirect uri
#client id and client secret need to be moved into .env later... currently just trying to get shit to work... sorry github
#saw some people make a config or secrets file and put everything there... will have to try
CLIENT_ID = '6b15c13959ad422e991f07d2fb1fc56d'
CLIENT_SECRET = '2cc7758ff94e4341ba75e3c4c922b5bd'
redirect = 'http://localhost:8888/callback/'
username = '12186297054'


scope = 'user-library-read'

#this token is where we ask the user to authorize our use of their data
token = util.prompt_for_user_token(username, 
                                   scope,
                                   client_id=CLIENT_ID,
                                   client_secret=CLIENT_SECRET,
                                   redirect_uri='http://localhost:8888/callback/')


#our main spotipy accessor
sp = spotipy.Spotify(auth=token)

#TODO: 
# need to store clientid and client secret in the env file or decide on a different storage method
# start dividing data acquisition into tasks like creating playlist, finding last played songs... etc


#all this was in the documentation for spotipy!
#i am using this to test how data works and what not
def show_tracks(tracks):
    for i, item in enumerate(tracks['items']):
        track = item['track']
        print("   %d %32.32s %s" % (i, track['artists'][0]['name'],
            track['name']))


if token:
    playlists = sp.user_playlists(username)
    for playlist in playlists['items']:
        if playlist['owner']['id'] == username:
            print()
            print(playlist['name'])
            print ('  total tracks', playlist['tracks']['total'])
            results = sp.playlist(playlist['id'],
                fields="tracks,next")
            tracks = results['tracks']
            show_tracks(tracks)
            while tracks['next']:
                tracks = sp.next(tracks)
                show_tracks(tracks)
else:
    print("Can't get token for", username)