import React, { useState, useEffect } from 'react'

function AdminDashboard() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://localhost:5001/api/submissions')
      
      if (!response.ok) {
        throw new Error('Failed to fetch submissions')
      }
      
      const data = await response.json()
      setSubmissions(data)
      setError('')
    } catch (err) {
      setError(err.message)
      console.error('Error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Form Submissions</h1>
            <button
              onClick={fetchSubmissions}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Refresh
            </button>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Error: {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">Loading submissions...</p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">No submissions yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ID</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Full Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Email</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Insurance Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Message</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3">{submission.id}</td>
                      <td className="border border-gray-300 px-4 py-3 font-semibold">{submission.fullName}</td>
                      <td className="border border-gray-300 px-4 py-3">
                        <a 
                          href={`mailto:${submission.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {submission.email}
                        </a>
                      </td>
                      <td className="border border-gray-300 px-4 py-3">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {submission.country}
                        </span>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 max-w-xs truncate">
                        <div title={submission.about}>{submission.about}</div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">
                        {new Date(submission.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-semibold">Total Submissions:</span> {submissions.length}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
