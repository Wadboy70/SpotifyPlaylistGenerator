import sys
import spotipy
import spotipy.util as util
import spotipy.oauth2 as oauth
import datetime
import config

secret = config.SECRET_KEY
cid = config.CLIENT_ID

def authentication(username, scope, CLIENT_ID, CLIENT_SECRET):
    token = util.prompt_for_user_token(username, 
                                    scope,
                                    client_id=cid,
                                    client_secret=CLIENT_SECRET,
                                    redirect_uri='http://localhost:5000/callback/')
    if not token:
        print("yikes")
        return False    
    else:
        print("success")
        return token



#SEYI IF U ARE READING THIS COMMENT IT OUT AND CHANGE IT TO YOUR NAME
username = '12186297054'

#creating client

#to add multiple scopes just include a space between them
scope = 'user-library-read playlist-modify-private playlist-read-private user-top-read user-read-playback-state streaming'

#this token is where we ask the user to authorize our use of their data

def main():
    print("Hello World")

if __name__ == "__main__":

    token = authentication(username, scope, cid, secret)
    #our main spotipy accessor
    sp = spotipy.Spotify(auth=token)

    #TODO: 
    # need to store clientid and client secret in the env file or decide on a different storage method
    # start dividing data acquisition into tasks like creating playlist, finding last played songs... etc


    if token:
        user = sp.user(username)
        print(user['display_name'])

        #getting the current user's top tracks from the last four weeks. finds the uris for each of the tracks and creates a list.
        tracks = sp.current_user_top_tracks(limit=20, offset=0, time_range='short_term')
        topURI = list()
        for each in tracks['items']:
            print(each['name'])
            topURI.append(each['uri'])

        #creating a playlist with the month and the date as the name
        today = datetime.datetime.now()
        #name needs to be changed from hour minute second to just month and year
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