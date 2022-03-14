require "base64"
require "openssl"

class Rails::CookieCipher
  @cipher : OpenSSL::Cipher

  def initialize(secret : String)
    @cipher = OpenSSL::Cipher.new("aes-256-gcm").tap do |cipher|
      cipher.decrypt
      cipher.key = OpenSSL::PKCS5.pbkdf2_hmac(
        secret,
        "authenticated encrypted cookie",
        1_000,
        OpenSSL::Algorithm::SHA1,
        cipher.key_len
      )
    end
  end

  def decrypt(encrypted : String) : JSON::Any
    encrypted_data, @cipher.iv = encrypted.split("--")
      .map { |s| Base64.decode_string URI.decode(s) }

    io = IO::Memory.new
    io.write @cipher.update encrypted_data
    io.rewind

    JSON.parse Base64.decode_string JSON.parse(io.gets_to_end)["_rails"]["message"].as_s
  end
end
