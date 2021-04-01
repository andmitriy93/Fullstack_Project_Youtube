
export const createLike = (commentId) => {
  return $.ajax({
    url: `/api/comments/${commentId}/likes`,
    method: 'POST',
    // data: { commentId }
  })
}


export const deleteLike = (commentId, likeId) => {
  return $.ajax({
    url: `/api/comments/${commentId}/likes/${likeId}`,
    method: 'DELETE',
  })
}
