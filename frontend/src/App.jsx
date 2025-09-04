import { useState, useEffect } from 'react'
import axios from 'axios'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'
import NoteDetail from './components/NoteDetail'
import ShareModal from './components/ShareModal'

const API_BASE = 'https://notes-app-backend-production.up.railway.app/' // Reverted backend URL to original correct one

function App() {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)
  const [editingNote, setEditingNote] = useState(null)
  const [shareNote, setShareNote] = useState(null)

  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${API_BASE}/notes`)
      setNotes(response.data)
    } catch (error) {
      console.error('Error fetching notes:', error)
    }
  }

  const createNote = async (note) => {
    try {
      const response = await axios.post(`${API_BASE}/notes`, note)
      setNotes([...notes, response.data])
    } catch (error) {
      console.error('Error creating note:', error)
    }
  }

  const updateNote = async (id, note) => {
    try {
      const response = await axios.put(`${API_BASE}/notes/${id}`, note)
      setNotes(notes.map(n => n.id === id ? response.data : n))
      setEditingNote(null)
    } catch (error) {
      console.error('Error updating note:', error)
    }
  }

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${API_BASE}/notes/${id}`)
      setNotes(notes.filter(n => n.id !== id))
      if (selectedNote && selectedNote.id === id) setSelectedNote(null)
    } catch (error) {
      console.error('Error deleting note:', error)
    }
  }

  const shareNoteLink = (note) => {
    setShareNote(note)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Notes App</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <NoteForm onSubmit={editingNote ? (note) => updateNote(editingNote.id, note) : createNote} initialNote={editingNote} />
            <NoteList notes={notes} onSelect={setSelectedNote} onEdit={setEditingNote} onDelete={deleteNote} onShare={shareNoteLink} />
          </div>
          <div>
            {selectedNote && <NoteDetail note={selectedNote} />}
          </div>
        </div>
        {shareNote && <ShareModal note={shareNote} onClose={() => setShareNote(null)} apiBase={API_BASE} />}
      </div>
    </div>
  )
}

export default App
