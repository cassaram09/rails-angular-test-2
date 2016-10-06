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
    @note = Note.find_by(id: note_params[:id])
    if @note.update
      render json: @note
    end
  end

  def update
    @note = Note.find_by(id: note_params[:id])
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: tweet.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private 
  def note_params
    params.require(:note).permit(:title, :content, :id)
  end

end
