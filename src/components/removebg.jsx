// import axios from 'axios';

// const removeImageBackground = async (imageUrl) => {
//     const apiKey = 'MK9ZwP7ZmjbP7tfJChuxaqfF'; // Replace with your remove.bg API key

//     try {
//         const response = await axios.post(
//         'https://api.remove.bg/v1.0/removebg',
//         {
//             image_url: imageUrl,
//             size: 'auto'
//         },
//         {
//             headers: {
//             'X-Api-Key': apiKey
//             },
//             responseType: 'arraybuffer'
//         }
//         );

//         // Process the response here (e.g., save or display the modified image)
//         // You can convert the arraybuffer response to a URL using Blob and URL.createObjectURL().
//         console.log(URL.createObjectURL(response))

//     } catch (error) {
//         console.error('Failed to remove image background:', error);
//     }
// };


// removeImageBackground('https://images.unsplash.com/photo-1616248304589-6a3d8d60ad7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDMzOTJ8MHwxfHNlYXJjaHwxfHxrZXlib3JkfGVufDB8fHx8MTcwMjkyNzc0NXww&ixlib=rb-4.0.3&q=80&w=1080');

// function YourComponent() {
//     return(
//         <img src="" alt="" />
//     )
// }

// export default YourComponent;



// import React from 'react';

const DraggableButton = () => {
  const handleDragStart = (e) => {
    // Set the data to be transferred during drag
    e.dataTransfer.setData('text/plain', e.target.id);
  };

  const handleDragOver = (e) => {
    // Prevent default to allow dropping
    e.preventDefault();
  };

  const handleDrop = (e) => {
    // Get the transferred data
    const buttonId = e.dataTransfer.getData('text');

    // Move the button to the dropped position
    const button = document.getElementById(buttonId);
    const dropZone = e.target;
    dropZone.appendChild(button);
  };

  return (
    <div
      id="dropZone"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ width: '300px', height: '300px', border: '1px solid #ccc', padding: '10px' }}
    >
      <button
        id="draggableButton"
        draggable="true"
        onDragStart={handleDragStart}
        style={{ cursor: 'move' }}
      >
        Drag Me!
      </button>
    </div>
  );
};

export default DraggableButton;