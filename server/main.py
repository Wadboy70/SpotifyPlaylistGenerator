import sys
import spotipy
import spotipy.util as util
import spotipy.oauth2 as oauth
import datetime



#to run util.prompt_for_user_token it requires username, scope (what data you are trying to access), clientid, client secret, and redirect uri
#client id and client secret need to be moved into .env later... currently just trying to get shit to work... sorry github
#saw some people make a config or secrets file and put everything there... will have to try
CLIENT_ID = '6b15c13959ad422e991f07d2fb1fc56d'
CLIENT_SECRET = '2cc7758ff94e4341ba75e3c4c922b5bd'
redirect = 'http://localhost:8888/callback/'

#username needs to be changed
username = '12186297054'

#creating client

#to add multiple scopes just include a space between them
scope = 'user-library-read playlist-modify-private playlist-read-private user-top-read'

#this token is where we ask the user to authorize our use of their data
token = util.prompt_for_user_token(username, 
                                   scope,
                                   client_id=CLIENT_ID,
                                   client_secret=CLIENT_SECRET,
                                   redirect_uri='http://localhost:8888/callback/')

if not token:
    print("yikes")


#our main spotipy accessor
sp = spotipy.Spotify(auth=token)

#TODO: 
# need to store clientid and client secret in the env file or decide on a different storage method
# start dividing data acquisition into tasks like creating playlist, finding last played songs... etc


#all this was in the documentation for spotipy!
#i am using this to test how data works and what not
# def show_tracks(tracks):
#     for i, item in enumerate(tracks['items']):
#         track = item['track']
#         print("   %d %32.32s %s" % (i, track['artists'][0]['name'],
#             track['name']))


# if token:
#     playlists = sp.user_playlists(username)
#     for playlist in playlists['items']:
#         if playlist['owner']['id'] == username:
#             print()
#             print(playlist['name'])
#             print ('  total tracks', playlist['tracks']['total'])
#             results = sp.playlist(playlist['id'],
#                 fields="tracks,next")
#             tracks = results['tracks']
#             show_tracks(tracks)
#             while tracks['next']:
#                 tracks = sp.next(tracks)
#                 show_tracks(tracks)
# else:
#     print("Can't get token for", username)

if token:
    user = sp.user(username)
    print(user['display_name'])

    #getting user's top tracks for the last four weeks
    currUser = sp.current_user()
    #print(currUser)
    tracks = sp.current_user_top_tracks(limit=20, offset=0, time_range='short_term')
    topURI = list()
    for each in tracks['items']:
        print(each['name'])
        topURI.append(each['uri'])

    #creating a playlist with the month and the date as the name
    today = datetime.datetime.now()
    name = today.strftime("%B") + " " + today.strftime("%Y") + " " + today.strftime("%I") + " " + today.strftime("%M") + " " + today.strftime("%S")
    pl = sp.user_playlist_create(username, name, public=False, description="")
    
    # #this code block is checking if the playlist just created actually exists
    playlists = sp.user_playlists(username)
    for playlist in playlists['items']:
        if playlist['owner']['id'] == username:
            if playlist['name'] == name:
                playid = playlist['id']
                playlistGen = playlist
    try:
        print(playlistGen['name']) 
        print("playlist created!")
    except:
        print("Playlist was not created.")
    
    add = sp.user_playlist_add_tracks(username, playid, topURI, position=None)


else:
    print("Can't get token for", username)