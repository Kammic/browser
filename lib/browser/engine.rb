module Browser
  class Engine < ::Rails::Engine
    initializer "editor.assets.precompile" do |app|
      app.config.assets.precompile += %w(editor.css editor.js)
    end
  end
end
