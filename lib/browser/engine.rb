module Browser
  class Engine < ::Rails::Engine
    initializer "editor.assets.precompile" do |app|
      app.config.assets.precompile += %w(browser.css browser.js style.less)
      app.config.assets.paths << app.root.join('app', 'assets', 'fonts')
    end
  end
end
