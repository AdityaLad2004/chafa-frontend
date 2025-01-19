import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const Dashboard = () => {
  const [blogContent, setBlogContent] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [transcription, setTranscription] = useState(''); // State for transcription text
  const [isTranscribed, setIsTranscribed] = useState(false); // Flag to track if transcription is done
  const [isLoading, setIsLoading] = useState(false); // State to track API call status

  const handleBlogChange = (content) => {
    setBlogContent(content);
  };

  const handleVideoUpload = (event) => {
    setVideoFile(event.target.files[0]);
    setIsTranscribed(false); // Reset transcription when a new video is uploaded
    setTranscription(''); // Clear transcription text
  };

  const handleTranscribe = async () => {
    if (!videoFile) return;

    const formData = new FormData();
    formData.append('video', videoFile);
// Example: API-specific parameters

    try {
      setIsLoading(true);
      const response = await axios.post('https://teamchafa-task2-backend.onrender.com/process-blog', formData, {
      });
      setTranscription(response.data.transcription || 'No transcription found.');
      setIsTranscribed(true);
    } catch (error) {
      console.error('Error during transcription:', error);
      alert('Failed to transcribe the video. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center py-12 px-6">
      <div className="w-full max-w-screen-lg bg-white rounded-3xl shadow-lg p-8 space-y-8">
        {/* Heading Section */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          <span className="text-blue-600">Create</span> Your Content: Upload Video or Write a Blog
        </h2>

        {/* Video Upload Section */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-2xl shadow-md transform transition-all hover:scale-102 duration-300">
          <h3 className="text-xl font-medium text-gray-800 mb-6">Upload Your Video</h3>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoUpload}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-700 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          />
          {videoFile && (
            <p className="text-sm text-blue-600 mt-4">Selected Video: {videoFile.name}</p>
          )}

          {/* Transcribe Button */}
          {videoFile && !isTranscribed && (
            <button
              onClick={handleTranscribe}
              className={`mt-4 px-6 py-3 ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
              } text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 ${
                isLoading ? '' : 'focus:ring-green-500'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Transcribing...' : 'Transcribe Video'}
            </button>
          )}

          {/* Display Transcription */}
          {isTranscribed && transcription && (
            <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800">Transcription:</h4>
              <p className="text-gray-700 mt-2">{transcription}</p>
            </div>
          )}
        </div>

        {/* Blog Writing Section */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-2xl shadow-md transform transition-all hover:scale-102 duration-300">
          <h3 className="text-xl font-medium text-gray-800 mb-6">Write Your Blog</h3>

          {/* Formatting Buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setBlogContent(blogContent + '<h1>Heading 1</h1>')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Heading
            </button>
            <button
              onClick={() => setBlogContent(blogContent + '<b>Bold Text</b>')}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Add Bold Text
            </button>
          </div>

          {/* TinyMCE Editor */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <Editor
              apiKey='y2dbgdtfxzz6yw5xt0gccbem6x6rgr55tz9ta7ahxjldy33r'
              init={{
                plugins: [
                  'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                  'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf',
                ],
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Author name',
                mergetags_list: [
                  { value: 'First.Name', title: 'First Name' },
                  { value: 'Email', title: 'Email' },
                ],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
              }}
              initialValue="Welcome to TinyMCE!"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-6 mt-8">
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Save Blog
          </button>
          <button
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Publish Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
