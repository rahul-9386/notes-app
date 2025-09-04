function NoteDetail({ note }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">{note.title}</h2>
      <div className="prose prose-gray max-w-none">
        <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">{note.content}</p>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Created: {new Date(note.created_at).toLocaleDateString()}
          {note.updated_at && note.updated_at !== note.created_at && (
            <span> | Updated: {new Date(note.updated_at).toLocaleDateString()}</span>
          )}
        </p>
      </div>
    </div>
  )
}

export default NoteDetail
