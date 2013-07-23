get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/color' do

  #Creates and returns a JSON object with the random cell and color given below.

  cell= rand(1..9)
  color= "#" + "%06x" % (rand * 0xffffff)
  content_type :json
  {color: color, cell: cell}.to_json
end