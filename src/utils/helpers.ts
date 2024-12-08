export function appendComments() {
  const commentDiv = document.getElementById('append-comments-here')
  const commentScript = document.createElement('script')

  commentScript.async = true
  commentScript.src = 'https://utteranc.es/client.js'
  commentScript.setAttribute('repo', 'DmitryVdovichencko/comments')
  commentScript.setAttribute('issue-term', 'pathname')
  commentScript.setAttribute('id', 'utterances')
  commentScript.setAttribute(
    'theme',
    'github-light'
  )
  commentScript.setAttribute('crossorigin', 'anonymous')

  if (!commentDiv?.firstChild) {
    commentDiv?.appendChild(commentScript)
  } else {
    console.error('Error adding utterances comments')
  }
}