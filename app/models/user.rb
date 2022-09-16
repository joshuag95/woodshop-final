class User < ApplicationRecord
    has_one :cart

    has_secure_password
end
