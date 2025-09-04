function ShareModal({ note, onClose, apiBase }) {
  const shareUrl = `${apiBase}/share/${note.id}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      alert('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = shareUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full mx-4">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Share Note</h2>
        <p className="mb-6 text-gray-600">Share this link to let others view the note:</p>
        <div className="mb-6">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
          />
        </div>
        <div className="flex space-x-4">
          <button onClick={copyToClipboard} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition duration-200 font-medium flex-1">
            Copy Link
          </button>
          <button onClick={onClose} className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-200 font-medium">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShareModal
