@comments.each do |comment|
  json.set! comment.id do 
    json.extract! comment, :id, :body, :author_id, :video_id
    json.author comment.author
    json.likes comment.likes.pluck(:id)
    # json.likes comment.likes
  end
end