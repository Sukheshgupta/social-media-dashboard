import React from "react";
import Feed from "./components/Feed";
import UploadForm from "./components/UploadForm"; // Import the UploadForm

const App = () => {
  return (
    <div>
      <h1>🚀 Social Media App</h1>
      <UploadForm />  {/* Add Upload Form Here */}
      <Feed />
    </div>
  );
};

export default App;