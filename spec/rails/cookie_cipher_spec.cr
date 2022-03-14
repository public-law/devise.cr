require "../spec_helper"

Spectator.describe Rails::CookieCipher do
  subject(cipher) {
    Rails::CookieCipher.new(
      "065dd4caf8d2ac9419f7f38ec88b9e61401e091e4d94ecde2b9fa975cd2de554b421dbef9e467a5d78c4ed2058fa849760f1d8fd656a13e2527afc7d873ec4b7"
    )
  }
  let(cookie) { "x143AiRhRYV1z%2Bt8iPTu69N6cWR5sycfuvusmyHkw6tysXqh65BCMsfHh3i%2FRRx5wbWt4fvl7DjL0oGGVA0CBJgZoz6RHGWt%2FsnbFWyxK5bUVN%2BLEMhZrWknY4347DAdf%2Fyp1el0O5Yn9S10Pdt7LxshGHsIZNOehQjvY3aZNKft8WvvutWGp4vO8qLo7%2FYC2haRd8LaEt3AI7loWo%2FOAi%2Bv60XIOYt2msSFU8gXTfClkdIRD7Cqr1xSrFcSfTAD5TW7KR1Cz4I2OUfrYWfGR6lJGqwCxLTpPi65KoaNvn7Xm4rwtFuVWghDJ5dfSV9cxCxR%2Fo4vhcL8U2EyJgYNlmH6DOv6ejmYCXFY1dpnEycLJVI0xop4eNd2U%2F8QuLiNHw01jcOIBpmnbbwF2z4wHa2K6MZ%2BzglOQGbTXYQBpg%3D%3D--12Yc83gwfz5Gp1AJ--CmBD6Wn6uslsUBy8Da4SOQ%3D%3D" }

  it "works with fresh rails app (with devise) session" do
    expect(cipher.decrypt(cookie)).to eq JSON.parse(
      <<-JSON
      {
        "session_id": "239369c12ffe9b2920e9b25e3d1f4399",
        "warden.user.user.key": [
          [1],
          "$2a$12$XFwZ2JLbv0PXeTVhgSSD8u"
        ],
        "flash": {
          "discard": [],
          "flashes": {
            "alert": "You are already signed in."
          }
        }
      }
    JSON
    )
  end
end
