import { useState } from 'react'

function NoteList({ notes, onSelect, onEdit, onDelete, onShare }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">My Notes</h2>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
      />
      <div className="space-y-4">
        {filteredNotes.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No notes found. Create your first note!</p>
        ) : (
          filteredNotes.map(note => (
            <div key={note.id} className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 hover:shadow-md transition duration-200">
              <h3 className="font-semibold text-xl text-gray-800 mb-2">{note.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{note.content}</p>
              <div className="flex space-x-3">
                <button onClick={() => onSelect(note)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-sm font-medium">View</button>
                <button onClick={() => onEdit(note)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-200 text-sm font-medium">Edit</button>
                <button onClick={() => onDelete(note.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 text-sm font-medium">Delete</button>
                <button onClick={() => onShare(note)} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 text-sm font-medium">Share</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default NoteList
