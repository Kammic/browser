module Browser
  class Engine < ::Rails::Engine
    initializer "editor.assets.precompile" do |app|
      app.config.assets.precompile += %w(browser.css browser.js)
    end
  end
end
