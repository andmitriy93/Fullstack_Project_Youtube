json.extract! video, :id, :title, :author_id
json.video_url url_for(video.clip) if video.clip.attached?
# json.videos video.clip.map{|c| url_for(c)} if video.clip.attached?
