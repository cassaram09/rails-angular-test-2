class NotesController < ApplicationController
  def index
    @notes = Note.all
    render :json
  end
end
