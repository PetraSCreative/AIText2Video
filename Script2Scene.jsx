import React, { useState } from 'react';

export default function Script2Scene() {
  const [videoPreview, setVideoPreview] = useState('');
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h2 className="text-xl font-semibold mb-2">Your AI-Generated Video Preview:</h2>
      {videoPreview ? (
        <video className="rounded-xl shadow-lg w-full" controls>
          <source src={videoPreview} type="video/mp4" />
        </video>
      ) : (
        <p>No video generated yet.</p>
      )}
    </div>
  );
}
