// import axios from 'axios';

// const removeImageBackground = async (imageUrl) => {
//     const apiKey = 'MK9ZwP7ZmjbP7tfJChuxaqfF'; // I Replace it with my remove.bg API key

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
        
        

//         return URL.createObjectURL(response)


//     } catch (error) {
//         console.error('Failed to remove image background:', error);
//     }
// };


// removeImageBackground('https://images.unsplash.com/photo-1616248304589-6a3d8d60ad7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDMzOTJ8MHwxfHNlYXJjaHwxfHxrZXlib3JkfGVufDB8fHx8MTcwMjkyNzc0NXww&ixlib=rb-4.0.3&q=80&w=1080');

// function YourComponent() {
//     return(
//         <>
//             <img src="https://images.unsplash.com/photo-1616248304589-6a3d8d60ad7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDMzOTJ8MHwxfHNlYXJjaHwxfHxrZXlib3JkfGVufDB8fHx8MTcwMjkyNzc0NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
//             <img src={removeImageBackground} alt="" />
//         </>
//     )
// }

// export default YourComponent;