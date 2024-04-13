class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token
    def create
      @feature = Feature.find(params[:feature_id])
      @comment = @feature.comments.create(comment_params)
      if @comment.save
        render json: @comment
      else
        render json: { errors: @comment.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:body, :feature_id)
    end
  end