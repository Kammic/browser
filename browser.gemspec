#!/usr/bin/env gem build
$:.push File.expand_path("../lib", __FILE__)

require 'browser/version'

Gem::Specification.new do |s|
  s.name          = "browser"
  s.authors       = ["Sumeet Singh"]
  s.email         = "ortuna@gmail.com"
  s.homepage      = "http://arturo.io"
  s.description   = "Generate a book from a git repo"
  s.summary       = "Genearte a book give a git repo"
  s.version       = Browser::Version
  s.date          = Time.now.strftime("%Y-%m-%d")
  s.files         = `git ls-files`.split("\n") | Dir.glob("{lib}/**/*")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]
  s.rdoc_options  = ["--charset=UTF-8"]
  s.required_rubygems_version = ">= 1.3.6"


  s.add_dependency("sass-rails", "~> 4.0.0")
  s.add_dependency("uglifier", ">= 1.3.0")
  s.add_dependency("jquery-rails")
  s.add_dependency("font-awesome-rails", "~> 4.0")
  s.add_dependency("haml", "~> 4.0")

  s.add_development_dependency("pry")
  s.add_development_dependency("jasmine")
  s.add_development_dependency("jasmine-rails")
  s.add_development_dependency("rake", "~> 10.1")
  s.add_development_dependency("rspec", "~> 2.14")
end
