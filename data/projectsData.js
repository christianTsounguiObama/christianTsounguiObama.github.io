// data/projectsData.js
// **REPLACE ALL PLACEHOLDER DATA WITH YOUR ACTUAL PROJECT DETAILS AND IMAGE PATHS**
export const projects = [
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
    slug: 'blinkavr',
    title: 'Advanced Arduino (Mega2560) Blink',
    category: 'Robotics', // Category assigned
    description: 'A project demonstrating the use of low-level programming (direct register access) to control the built-in LED of the Arduino Mega2560 board, without relying on the Arduino library functions.',
    image: '/images/projects/Blink.png', // **CREATE THIS IMAGE**
    tags: ['Arduino', 'ATMega 2560', 'AVR', 'Bare-metal C', 'Embedded systems'],
    youtubeUrl: 'https://www.youtube.com/watch?v=Mmke5GtLBOk&t=67s',
    githubUrl: 'https://github.com/christianTsounguiObama/blink',
    liveDemoUrl: null, // Usually no live demo for hardware projects unless it's a simulation
    techStack: ['bare-metal C'],
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
 /* {
    slug: 'autonomous-drone-navigation',
    title: 'Autonomous Drone Navigation with AI',
    category: 'AI', // Can also be 'Robotics' or both if you allow multiple categories later
    description: 'Developed an AI-powered navigation system for autonomous drones, enabling obstacle avoidance and path planning in complex environments using deep reinforcement learning.',
    image: '/images/projects/drone-ai-thumb.jpg', // **CREATE THIS IMAGE**
    tags: ['AI', 'Robotics', 'Drones', 'Reinforcement Learning', 'Python', 'Simulation'],
    youtubeUrl: 'https://www.youtube.com/watch?v=your-video-id-3',
    githubUrl: 'https://github.com/yourusername/drone-rl-nav',
    liveDemoUrl: null,
    techStack: ['Python', 'TensorFlow/PyTorch', 'OpenAI Gym', 'Gazebo (Simulation)', 'PX4 Autopilot'],
    myRole: 'Focused on the reinforcement learning agent development and simulation environment setup.',
    galleryImages: [
      '/images/projects/drone-ai/simulation-view.jpg',
      '/images/projects/drone-ai/learning-curve.png',
    ],
    sharedMaterials: [
      { name: 'Thesis/Report (PDF)', url: '/downloads/drone_rl_thesis.pdf' },
      { name: 'RL Agent Code (GitHub)', url: 'https://github.com/yourusername/drone-rl-nav/tree/main/agent' },
    ],
  },*/
 /* {
    slug: 'portfolio-website-nextjs',
    title: 'Modern Portfolio Website (This Site!)',
    category: 'Web Development', // Assigning a category, though it might be "Other"
    description: 'A dynamic and responsive portfolio website built with Next.js, React, and Tailwind CSS. Designed to showcase skills, projects, and provide resources for my YouTube audience.',
    image: '/images/projects/portfolio-thumb.jpg',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Web Development', 'Portfolio'],
    youtubeUrl: null,
    githubUrl: 'https://github.com/yourusername/my-portfolio-nextjs',
    liveDemoUrl: 'https://yourusername.github.io', // Or your custom domain
    techStack: ['Next.js (React Framework)', 'Tailwind CSS', 'JavaScript (ES6+)', 'Vercel/GitHub Pages Deployment', 'Responsive Design'],
    myRole: 'Lead Developer & UI/UX Designer. Responsible for all aspects from concept to deployment.',
    galleryImages: [
      '/images/projects/portfolio/homepage-desktop.jpg',
      '/images/projects/portfolio/project-detail-mobile.jpg',
    ],
    sharedMaterials: [
      { name: 'Design Mockups (Figma - example)', url: 'https://figma.com/your-design-link' },
    ],
  },*/
  // Add more project objects here, each with a 'category'
];
