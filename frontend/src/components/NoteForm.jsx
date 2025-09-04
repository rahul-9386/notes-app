import { useState, useEffect } from 'react'

function NoteForm({ onSubmit, initialNote }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title)
      setContent(initialNote.content)
    } else {
      setTitle('')
      setContent('')
    }
  }, [initialNote])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ title, content })
    if (!initialNote) {
      setTitle('')
      setContent('')
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border border-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">{initialNote ? 'Edit Note' : 'Create New Note'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-3" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Enter note title..."
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-3" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg h-40 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            placeholder="Write your note here..."
            required
          />
        </div>
        <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition duration-200 font-medium">
          {initialNote ? 'Update Note' : 'Create Note'}
        </button>
      </form>
    </div>
  )
}

export default NoteForm
