class Api::V1::AuthController < ApplicationController

  # POST /login
  def login
    email = params[:email]
    password = params[:password]

    uri = URI("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword")
    
    http = Net::HTTP.new(uri.host,uri.port)
    request = Net::HTTP::Get.new(uri.request_uri)

    request.set_form_data({'key'=>ENV['FIREBASE_KEY'], 'email' => email, 'password' => password})
    # res = Net::HTTP.post_form(
    #   uri,
    #   'key' => ENV['FIREBASE_KEY'],
    #   'email' => email,
    #   'password' => password,
    # )


    respond = http.request(request)

    puts respond

    data = JSON.parse(res.body)

    if res.is_a?(Net::HTTPSuccess)
      puts res.get_fields('set-cookie')
      session[:user_id] = data['localId']
      render status: :ok, json: {idToken: data['idToken']}
    else
      render status: :unauthorized, json: { error: "Bad login credentials" }
    end
  end

  # POST /logout
  def logout
    session.clear
    head :ok
  end
  
end
