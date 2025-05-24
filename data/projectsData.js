// data/projectsData.js
// **REPLACE ALL PLACEHOLDER DATA WITH YOUR ACTUAL PROJECT DETAILS AND IMAGE PATHS**
export const projects = [

// Research

 {
    slug: 'research-snpmodel',
    title: 'Statistical Modeling of Genomic Data for Malaria Drug Resistance Analysis',
    category: 'Research', // Category assigned
    description: 'Developed a statistical model to analyze genomic data—specifically single nucleotide polymorphisms (SNPs)—collected from malaria patients. The model enables the investigation of key malaria control metrics, including the spread of drug resistance. Findings were published in a peer-reviewed journal.',
    image: '/images/projects/snp.png', // **CREATE THIS IMAGE**
    tags: ['Research', 'Statistical Modelling', 'Simulation', 'Software devolpment', 'Population Genetics', 'Data Analysis'],
    youtubeUrl: null, // Or link to a presentation if you have one
    githubUrl: 'https://github.com/Maths-against-Malaria/MultiLociBiallelicModel',
   // liveDemoUrl: 'https://huggingface.co/spaces/yourusername/paper-analyzer', // Example if you deployed a demo
    techStack: ['R', 'ggplot2', 'Git', 'LaTex'],
    myRole: 'Primary researcher and developer. Built and implemented the model, ran simulation studies, analyzed data,  and co-authored the publication.',
    galleryImages: [
      '/images/projects/snp.png',
      '/images/projects/nlp-research/results-graph.jpg',
    ],
    sharedMaterials: [
      { name: 'Published Paper (Link)', url: 'https://doi.org/10.3389/fepid.2022.943625' },
     // { name: 'Presentation Slides (PDF)', url: '/downloads/nlp_research_slides.pdf' },
     // { name: 'Code Repository (GitHub)', url: 'https://github.com/Maths-against-Malaria/MultiLociBiallelicModel' },
    ],
  },




// Robotics

  {
    slug: 'blinkavr',
    title: 'Optimized Arduino (Mega2560) Blink',
    category: 'Robotics', // Category assigned
    description: 'A project demonstrating the use of low-level programming (direct register access) to control the built-in LED of the Arduino Mega2560 board, without relying on the Arduino library functions.',
    image: '/images/projects/Blink.png', // **CREATE THIS IMAGE**
    tags: ['Arduino', 'ATmega 2560', 'AVR', 'Bare-metal C', 'Embedded systems'],
    youtubeUrl: 'https://www.youtube.com/watch?v=Mmke5GtLBOk&t=67s',
    githubUrl: 'https://github.com/christianTsounguiObama/blink',
    liveDemoUrl: null, // Usually no live demo for hardware projects unless it's a simulation
    techStack: ['Bare-metal C', 'Git', 'Vim'],
    myRole: 'Conceptualisation of the project and code development',//'Lead developer for the perception and control modules. Implemented path planning algorithms and integrated sensor feedback.',
    galleryImages: [
      '/images/projects/robotic-arm/setup.jpg',
      '/images/projects/robotic-arm/simulation.gif',
      '/images/projects/robotic-arm/gripper-detail.jpg',
    ],
    sharedMaterials: [
     // { name: 'Code Repo (GitHub)', url: 'https://github.com/christianTsounguiObama/blink' },
     // { name: 'System Architecture Diagram (PDF)', url: '/downloads/robotic_arm_architecture.pdf' }, // Example
    ],
  },
  {
    slug: 'dht11-sensor',
    title: 'Reading temperature and humidity data from DHT11 and UART Transmission in low-level C on Arduino ATmega2560',
    category: 'Robotics', // Assigning a category, though it might be "Other"
    description: 'This project implements a direct interface between an ATmega2560 microcontroller (Arduino Mega) and a DHT11 temperature and humidity sensor using bare-metal C, without relying on external libraries. The measured data is then transmitted via the UART protocol to a serial terminal or another device. The goal is to understand the 1-Wire communication protocol specific to the DHT11, implement it through direct register manipulation, and configure UART to send the data in ASCII format.',
    image: '/images/projects/dht1Schematics.png',
    tags: ['Embedded systems', 'Arduino', 'Sensors reading', 'Registers', 'ATmega2560'],
    youtubeUrl: null,
    githubUrl: 'https://github.com/christianTsounguiObama/dht11UART',
   // liveDemoUrl: 'https://yourusername.github.io', // Or your custom domain
    techStack: ['Bare-metal C', 'Git', 'Vim'],
    myRole: 'Responsible for all aspects from schematic design to assembly and code implementation.',
    galleryImages: [
      '/images/projects/portfolio/homepage-desktop.jpg',
      '/images/projects/portfolio/project-detail-mobile.jpg',
    ],
    sharedMaterials: [
     // { name: 'Design Mockups (Figma - example)', url: 'https://figma.com/your-design-link' },
    ],
  },
 




// AI

 {
    slug: 'carlarealtime-objectdetection',
    title: 'Real-Time Object Detection in a Simulated Environment using TensorFlow and CARLA',
    category: 'AI', // Category assigned
    description: 'This project demonstrates real-time object detection using a pre-trained model from TensorFlow Hub, trained on the COCO dataset. The dynamic environment is simulated using CARLA Simulator (v0.9.15), enabling testing and visualization of object detection in a realistic urban setting.',
    image: '/images/projects/CarlaCV.png', // e.g., public/images/projects/cat-detector-thumb.jpg
    tags: ['AI', 'Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Carla-Simulator', 'Digital Twins'],
    youtubeUrl: 'https://www.youtube.com/watch?v=f2cxVE1L9MU', // Full YouTube URL
    githubUrl: 'https://github.com/christianTsounguiObama/CarlaRealtime_ObjectDetection?tab=readme-ov-file',
    //liveDemoUrl: 'https://yourusername.github.io/cat-detector-demo/', // Optional
    techStack: ['Python 3.x', 'OpenCV', 'TensorFlow', 'TensorFlow Hub', 'NumPy', 'Seaborn', 'Object Detection API'],
    myRole: 'Sole Developer',
    galleryImages: [
      '/public/images/projects/CarlaCV.png',
      //'/images/projects/cat-detector/architecture.png',
      // Add more gallery images if you have them
    ],
    sharedMaterials: [
     // { name: 'Source Code (Main Application)', url: 'https://github.com/yourusername/cat-detector/archive/refs/heads/main.zip' },
      { name: 'Pre-trained Models', url: 'https://www.kaggle.com/models?publisher=tensorflow&tfhub-redirect=true' }, // Example local download
      { name: 'YouTube Tutorial Playlist', url: 'https://www.youtube.com/playlist?list=PLIkpGz9s4TJ5xf_tY54GulQn8OoYibyfK' },
    ],
  },
  {
    slug: 'computervision-rgbmask',
    title: 'RGB Mask Preprocessing for Semantic Segmentation',
    category: 'AI', // Can also be 'Robotics' or both if you allow multiple categories later
    description: 'This project describes how to streamline the preparation of RGB masks for training computer vision models in semantic segmentation tasks. It converts color-coded masks—where each class is represented by a specific RGB value—into a single-channel format (replicated across three channels) suitable for model training.',
    image: '/images/projects/illustration.png', // **CREATE THIS IMAGE**
    tags: ['AI', 'Computer vision', 'Image processing', 'Semantic segmentation', 'Python'],
    youtubeUrl:null, // 'https://www.youtube.com/watch?v=your-video-id-3',
    githubUrl: 'https://github.com/christianTsounguiObama/MulticlassRGBMask_to_SingleChannelMask',
    liveDemoUrl: null,
    techStack: ['Python3', 'numpy', 'pillow', 'cv2'],
    myRole: 'Solo developer.',
    galleryImages: [
      '/images/projects/illustration.png',
      '/images/projects/drone-ai/learning-curve.png',
    ],
    sharedMaterials: [
     // { name: 'Thesis/Report (PDF)', url: '/downloads/drone_rl_thesis.pdf' },
     // { name: 'RL Agent Code (GitHub)', url: 'https://github.com/yourusername/drone-rl-nav/tree/main/agent' },
    ],
  },
 // Add more project objects here, each with a 'category'
];
