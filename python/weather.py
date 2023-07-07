import requests

api_key = 'ed11f1d0efccd1ed6f746319dd920bc6'
city = 'Ogden'

url =  f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=imperial'

request = requests.get(url)
json = request.json()
print(json)


#Grab the description from the json file
description = json.get('weather')[0].get('description')
print('Today\'s forecast is:', description)

#Grab the minimum temperature
min_temp = json.get('main').get('temp_min')
print('Today\'s minimum temperature is:', min_temp)

#Grab the maximum temperature
max_temp = json.get('main').get('temp_max')
print('Today\'s maximum temperature is:', max_temp)

#Grab the visibility
vis = json.get('visibility')
print('Today\'s visibility is:', vis)

#Grab the windspeed
wind = json.get('wind').get('speed')
print('Today\'s windspeed is', wind)

#Grab the clouds
clouds = json.get('clouds').get('all')
print('Today\'s cloud coverage is:', clouds)

#Grab feels like
feels_like = json.get('main').get('feels_like')
print('Today\'s weather feels like:', feels_like)