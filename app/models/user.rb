class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :seizures, dependent: :destroy

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return @user if @user && BCrypt::Password.new(@user.password_digest).is_password?(password)
    nil
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
end
