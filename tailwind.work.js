/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }



  // <!DOCTYPE html>
  // <html lang="en">
  
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>Hero</title>
  //     <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  //     <script src="https://cdn.tailwindcss.com"></script>
  // </head>
  
  // <body class="bg-green-900 text-black">
  //     <header class="bg-white flex items-center justify-between mx-auto p-2 ">
  //         <div class="text-[30px] font-bold ">
  //             <h1> stripe </h1>
  //         </div>
  //         <div id=""
  //             class="nav-links duration-500 lg:static absolute bg-white left-0  lg:min-h-fit min-h-[25vh] w-full top-[-50%] lg:w-auto flex px-5">
  //             <nav class="">
  //                 <ul class=" lg:flex text-[20px] font-bold gap-8 lg:flex-row flex-col  ">
  //                     <li class="mt-2"><a href="./Products.html"
  //                             class="hover:text-gray-600 hover:underline underline-offset-[8px]">Products</a>
  //                     </li>
  //                     <li class="mt-2"><a href="./Solution.html"
  //                             class="hover:text-gray-600 hover:underline underline-offset-[8px]">Solution</a>
  //                     </li>
  //                     <li class="mt-2"><a href="./Resource.html"
  //                             class="hover:text-gray-600 hover:underline underline-offset-[8px]">Resource</a>
  //                     </li>
  //                     <li class="mt-2"><a href="./pricing.html"
  //                             class="hover:text-gray-600 hover:underline underline-offset-[8px]">Pricing</a>
  //                     </li>
  //                 </ul>
  //             </nav>
  //         </div>
  //         <div class="flex items-center gap-4">
  //             <button class="bg-blue-400 px-4 py-4 rounded-lg font-bold">sign in</button>
  //             <i onclick="onToggleMenu(this)" class='bx bx-menu lg:hidden text-[2rem]' name="menu"></i>
  //         </div>
  //     </header>
      // <script>
      //     const navLinks = document.querySelector('.nav-links')
      //     function onToggleMenu(e) {
      //         e.name = e.name === 'menu' ? 'close' : 'menu'
      //         navLinks.classList.toggle('top-[9%]')
      //     }
      // </script>
  //     <div>
  //         <h1 class="font-mono text-[40px] text-white text-center md:mt-[20%] mt-[20rem]">Hero</h1>
  //     </div>
  // </body>
  
  // </html>