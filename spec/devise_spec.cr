require "./spec_helper"

Spectator.describe Devise do
  it "should have a version" do
    expect(Devise::VERSION).to be_a(String)
  end
end
