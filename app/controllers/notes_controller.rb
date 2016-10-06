class NotesController < ApplicationController
  def index
    @notes = Note.all
    render json: @notes
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { errors: tweet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @note = Note.find_by(id: params[:id])
    render json: @note
  end

  private 
  def note_params
    params.require(:note).permit(:title, :content)
  end

end
