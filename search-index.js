crystal_doc_search_index_callback({"repository_name":"devise","body":"# devise.cr\n\nNOT a devise remake. Helpers to get session info from Rails+Devise sessions.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     devise:\n       github: public-law/devise.cr\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"devise\"\n```\n\nTODO: Write usage instructions here\n\n## Development\n\nTODO: Write development instructions here\n\n## Contributing\n\n1. Fork it (<https://github.com/public-law/devise.cr/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [grepsedawk](https://github.com/grepsedawk) - creator and maintainer\n","program":{"html_id":"devise/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"devise","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"devise/Devise","path":"Devise.html","kind":"module","full_name":"Devise","name":"Devise","abstract":false,"locations":[{"filename":"src/devise.cr","line_number":4,"url":"https://github.com/public-law/devise.cr/blob/52a14818cdbd896efb9ee14c4ddb1ca64e69effb/src/devise.cr#L4"}],"repository_name":"devise","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\""}],"doc":"TODO: Write documentation for `Devise`","summary":"<p><span class=\"flag orange\">TODO</span>  Write documentation for <code><a href=\"Devise.html\">Devise</a></code></p>"},{"html_id":"devise/Rails","path":"Rails.html","kind":"module","full_name":"Rails","name":"Rails","abstract":false,"locations":[{"filename":"src/rails/cookie_cipher.cr","line_number":4,"url":"https://github.com/public-law/devise.cr/blob/52a14818cdbd896efb9ee14c4ddb1ca64e69effb/src/rails/cookie_cipher.cr#L4"}],"repository_name":"devise","program":false,"enum":false,"alias":false,"const":false,"types":[{"html_id":"devise/Rails/CookieCipher","path":"Rails/CookieCipher.html","kind":"class","full_name":"Rails::CookieCipher","name":"CookieCipher","abstract":false,"superclass":{"html_id":"devise/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"devise/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"devise/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/rails/cookie_cipher.cr","line_number":4,"url":"https://github.com/public-law/devise.cr/blob/52a14818cdbd896efb9ee14c4ddb1ca64e69effb/src/rails/cookie_cipher.cr#L4"}],"repository_name":"devise","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"devise/Rails","kind":"module","full_name":"Rails","name":"Rails"},"constructors":[{"html_id":"new(secret:String)-class-method","name":"new","abstract":false,"args":[{"name":"secret","external_name":"secret","restriction":"String"}],"args_string":"(secret : String)","args_html":"(secret : String)","location":{"filename":"src/rails/cookie_cipher.cr","line_number":7,"url":"https://github.com/public-law/devise.cr/blob/52a14818cdbd896efb9ee14c4ddb1ca64e69effb/src/rails/cookie_cipher.cr#L7"},"def":{"name":"new","args":[{"name":"secret","external_name":"secret","restriction":"String"}],"visibility":"Public","body":"_ = allocate\n_.initialize(secret)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"decrypt(encrypted:String):JSON::Any-instance-method","name":"decrypt","abstract":false,"args":[{"name":"encrypted","external_name":"encrypted","restriction":"String"}],"args_string":"(encrypted : String) : JSON::Any","args_html":"(encrypted : String) : JSON::Any","location":{"filename":"src/rails/cookie_cipher.cr","line_number":20,"url":"https://github.com/public-law/devise.cr/blob/52a14818cdbd896efb9ee14c4ddb1ca64e69effb/src/rails/cookie_cipher.cr#L20"},"def":{"name":"decrypt","args":[{"name":"encrypted","external_name":"encrypted","restriction":"String"}],"return_type":"JSON::Any","visibility":"Public","body":"encrypted_data, @cipher.iv = (encrypted.split(\"--\")).map do |s|\n  Base64.decode_string(URI.decode(s))\nend\nio = IO::Memory.new\nio.write(@cipher.update(encrypted_data))\nio.rewind\nJSON.parse(Base64.decode_string((JSON.parse(io.gets_to_end))[\"_rails\"][\"message\"].as_s))\n"}}]}]}]}})