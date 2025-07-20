const personalInfo = {
  name: "Sai Ram Peruri",
  title: "Systems Engineer | DevOps Engineer | Cloud Infrastructure Specialist",
  email: "sairam.peruri.work@gmail.com",
  phone: "(978) 726-6536",
  location: "Lowell, MA, USA",
  linkedIn: "https://linkedin.com/in/sairamperuri",
  github: "https://github.com/SaiRam-Peruri",
  website: "https://sairam-peruri.github.io/portfolio",
  availability: {
    status: "Open to Work",
    relocation: "Open to Relocation",
    workType: "Full-time, Contract, Remote",
    startDate: "Immediately Available"
  },
  
  social: {
    github: "https://github.com/SaiRam-Peruri",
    linkedin: "https://www.linkedin.com/in/sairamperuri/",
    email: "sairam.peruri.work@gmail.com"
  },
  
  bio: `Experienced Systems Engineer and DevOps specialist with expertise in AWS and GCP cloud infrastructure, CI/CD automation, and scalable system design. Currently pursuing Master's in Computer Science at University of Massachusetts Lowell.

Proven track record in implementing automated CI/CD pipelines, managing cloud infrastructure, and optimizing system performance. Experienced in provisioning scalable environments using Terraform, containerization with Docker and Kubernetes, and scripting with Python and Bash.

Demonstrated success in streamlining processes, resolving critical issues, and making significant improvements in system performance and reliability. Skilled in mentoring teams and delivering high-quality solutions in fast-paced environments.`,

  skills: {
    languages: [
      { name: "Python", level: 90, years: 4 },
      { name: "C++", level: 80, years: 3 },
      { name: "C", level: 80, years: 3 },
      { name: "Bash/Shell", level: 88, years: 4 }
    ],
    devops: [
      { name: "Docker", level: 92, years: 4 },
      { name: "Kubernetes", level: 90, years: 4 },
      { name: "Jenkins", level: 88, years: 4 },
      { name: "Terraform", level: 92, years: 4 },
      { name: "TFLint", level: 85, years: 3 },
      { name: "Terragrunt", level: 80, years: 2 },
      { name: "GitHub Actions", level: 85, years: 3 },
      { name: "Ansible", level: 80, years: 2 }
    ],
    cloud: [
      { name: "AWS", level: 92, years: 4 },
      { name: "Azure", level: 88, years: 3 },
      { name: "Google Cloud Platform", level: 85, years: 2 },
      { name: "Ericsson Cloud", level: 85, years: 2 }
    ],
    monitoring: [
      { name: "Zabbix", level: 82, years: 3 },
      { name: "Check-mk", level: 80, years: 2 },
      { name: "Nagios", level: 78, years: 2 },
      { name: "Jira", level: 85, years: 3 }
    ],
    databases: [
      { name: "MongoDB", level: 80, years: 2 },
      { name: "SQL", level: 65, years: 1 }
    ],
    tools: [
      { name: "Git", level: 90, years: 4 },
      { name: "Linux/Unix", level: 92, years: 4 },
      { name: "HashiCorp Vault", level: 85, years: 2 }
    ]
  }
};

const experience = [
  {
    id: 1,
    title: "Teaching Assistant/Student Grader",
    company: "University of Massachusetts Lowell",
    location: "Lowell, MA",
    period: "Aug 2024 - May 2025",
    type: "Part-time",
    description: "Supporting AWS Cloud Computing and C/C++ courses through grading and mentoring students.",
    achievements: [
      "Evaluated and graded homework assignments, projects, and coding exercises for AWS Cloud Computing and C/C++ courses, ensuring accuracy and fairness in assessments",
      "Provided constructive feedback on cloud computing concepts, AWS services, C/C++ programming techniques, and best practices to enhance student learning",
      "Maintained detailed records of student scores and submitted grades promptly using Blackboard"
    ],
    technologies: ["AWS", "C++", "Blackboard", "Cloud Computing"]
  },
  {
    id: 2,
    title: "Infrastructure Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, India",
    period: "Jan 2022 - Dec 2023",
    type: "Full-time",
    client: "Ericsson",
    description: "Managing cloud infrastructure and DevOps operations for enterprise clients with focus on AWS and Azure platforms.",
    achievements: [
      "Designed and maintained cloud infrastructure on AWS and Azure, leveraging services like EC2, S3, RDS, IAM, and VPC, resulting in 30% improved deployment consistency and 25% cost savings through optimized resource provisioning and reserved instance strategies",
      "Automated infrastructure provisioning with Terraform, enabling version-controlled, repeatable deployments across dev, test, and production environments. This reduced manual errors by over 40% and cut down setup time by 60%",
      "Built and managed CI/CD pipelines using GitHub Actions and Jenkins, automating testing, container builds, and deployments for microservices-based applications resulting in a 50% faster release cycle and improved deployment reliability",
      "Containerized enterprise applications using Docker and orchestrated with Kubernetes, ensuring high availability, fault tolerance, and streamlined rollouts with zero-downtime deployments across hybrid cloud environments",
      "Implemented end-to-end monitoring and alerting systems using Zabbix, Check-mk, and Nagios, enabling proactive issue detection and reducing mean time to resolution (MTTR) by 35%",
      "Collaborated with operations to fine-tune thresholds and reduce alert noise in data centre by adding to Check-mk",
      "Developed Python and Bash automation scripts for log parsing, system health checks, backup rotation, and resource cleanup on Red Hat Enterprise Linux and AIX systems, improving operational efficiency by up to 45%"
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Microservices", "Python", "Bash", "Zabbix", "Check-mk", "Nagios"]
  },
  {
    id: 3,
    title: "Frontend & Backend Developer, AWS DevOps",
    company: "Vithi IT Solutions",
    location: "Hyderabad, India",
    period: "Jan 2021 - Dec 2021",
    type: "Freelance",
    description: "Full-stack development and DevOps implementation for various client projects with focus on cloud infrastructure and frontend optimization.",
    achievements: [
      "Engineered a high-performance frontend using code splitting, image optimization, lazy loading, and CloudFront caching, resulting in a 15% reduction in page load times within three months of CI/CD deployment",
      "Led CI/CD automation using GitHub Actions, streamlining multi-environment deployments and improving release reliability. Managed cross-functional DevOps, architecture, and infrastructure tasks, handling 10-15% additional workload and driving a 25% boost in customer satisfaction through faster and more stable delivery"
    ],
    technologies: ["AWS", "GitHub Actions", "CloudFront", "Frontend", "Backend", "DevOps", "React", "Node.js"]
  }
];

const projects = [
  {
    id: 1,
    title: "Terraform Blueprints - Enterprise Infrastructure as Code",
    category: "DevOps/Infrastructure",
    description: "Comprehensive Terraform blueprint library for enterprise-grade infrastructure provisioning across AWS, Azure, and GCP with modular, reusable components.",
    longDescription: "Developed and maintained enterprise-level Terraform blueprints that standardize infrastructure provisioning across multiple cloud platforms. These blueprints enable consistent, secure, and scalable infrastructure deployment with built-in best practices, compliance controls, and automated testing.",
    image: "/api/placeholder/600/400",
    technologies: ["Terraform", "AWS", "Azure", "GCP", "HashiCorp Vault", "GitHub Actions", "Terratest", "Ansible", "Python"],
    features: [
      "Created modular Terraform blueprints for multi-cloud infrastructure (AWS, Azure, GCP)",
      "Implemented enterprise security standards with HashiCorp Vault integration",
      "Built automated testing pipelines using Terratest for infrastructure validation",
      "Designed reusable modules for VPC, compute, storage, and networking components",
      "Established compliance controls and governance policies for enterprise deployment",
      "Reduced infrastructure provisioning time by 60% and manual errors by 40%",
      "Implemented GitOps workflows with automated plan/apply cycles"
    ],
    githubUrl: "https://github.com/SaiRam-Peruri",
    status: "Enterprise Production",
    metrics: {
      efficiency: "60% Faster Provisioning",
      reliability: "40% Fewer Manual Errors",
      coverage: "Multi-Cloud Support",
      compliance: "Enterprise Security Standards"
    },
    learnings: [
      "Advanced Terraform module design patterns and best practices",
      "Multi-cloud infrastructure architecture and deployment strategies",
      "Enterprise compliance and governance implementation in IaC",
      "Automated testing methodologies for infrastructure code",
      "GitOps workflows for infrastructure management at scale"
    ]
  },
  {
    id: 2,
    title: "Automated Deployment of OpenWebUI on GCP with Vault-secured Credentials",
    category: "DevOps/Infrastructure",
    description: "Enterprise-grade infrastructure automation platform deploying OpenWebUI on Google Cloud Platform with HashiCorp Vault security integration.",
    longDescription: "A comprehensive Infrastructure-as-Code solution that automates the deployment of OpenWebUI on GCP with enterprise-level security. Features modular Terraform design, HashiCorp Vault integration for secure credential management, and automated full-stack deployment with zero-touch provisioning.",
    image: "/api/placeholder/600/400",
    technologies: ["GCP", "Terraform", "HashiCorp Vault", "Docker", "NGINX", "Linux", "Bash", "Systemd", "TLS/SSL"],
    features: [
      "Provisioned GCP infrastructure using modular Terraform (VPC, Compute Engine, IAM, firewall rules)",
      "Deployed OpenWebUI in Docker + NGINX, secured via TLS certificates and Vault-managed secrets",
      "Automated full-stack deployment with Bash scripting, systemd, and remote SSH provisioning",
      "Integrated HashiCorp Vault for secure credential management and dynamic admin authentication",
      "Implemented network security, role-based access control, and reusable IaC design patterns",
      "Achieved zero-downtime deployments with automated health checks and rollback capabilities"
    ],
    githubUrl: "https://github.com/SaiRam-Peruri",
    status: "Production",
    metrics: {
      security: "Vault-Secured Credentials",
      automation: "100% Automated Deployment",
      infrastructure: "Modular Terraform Design",
      deployment: "Zero-Touch Provisioning"
    },
    learnings: [
      "Advanced HashiCorp Vault integration for secure credential management",
      "Modular Terraform design patterns for enterprise infrastructure",
      "Automated deployment strategies with Bash scripting and systemd",
      "Network security and role-based access control implementation",
      "GCP best practices for production-grade infrastructure"
    ]
  },
  {
    id: 3,
    title: "Food Ordering Platform – CI/CD Deployment on AWS using Terraform",
    category: "Full-Stack DevOps",
    description: "Scalable full-stack food ordering platform with automated CI/CD pipeline deployed on AWS infrastructure using Terraform for Infrastructure as Code.",
    longDescription: "A comprehensive full-stack application featuring React + Vite frontend, Node.js backend, and MongoDB database. Implemented enterprise-grade CI/CD pipeline using AWS CodePipeline and CodeBuild with Terraform for infrastructure automation, ensuring seamless updates and high availability.",
    image: "/api/placeholder/600/400",
    technologies: ["AWS", "Terraform", "React", "Vite", "Node.js", "MongoDB", "CodePipeline", "CodeBuild", "S3", "IAM", "CloudFormation"],
    features: [
      "Developed scalable CI/CD pipeline using AWS (CodePipeline, CodeBuild, S3) and Terraform",
      "Full-stack architecture with React + Vite frontend and Node.js backend for optimal performance",
      "MongoDB database integration with automated provisioning and backup strategies",
      "Infrastructure-as-Code implementation with Terraform modules for reusability",
      "JWT Authentication and secure environment variables management",
      "Automated infrastructure provisioning, environment setup, and application deployment",
      "Implemented auto-scaling and load balancing for high availability"
    ],
    githubUrl: "https://github.com/SaiRam-Peruri",
    status: "Production",
    metrics: {
      stack: "Full-Stack MERN Application",
      deployment: "Automated CI/CD Pipeline",
      infrastructure: "Terraform-Managed AWS Resources",
      scalability: "Auto-scaling & Load Balancing"
    },
    learnings: [
      "End-to-end full-stack application development with modern frameworks",
      "AWS CodePipeline and CodeBuild for enterprise CI/CD workflows",
      "Terraform best practices for AWS infrastructure automation",
      "JWT authentication implementation and secure environment management",
      "Microservices architecture and database optimization strategies"
    ]
  },
  {
    id: 4,
    title: "Infrastructure Monitoring & Alerting System",
    category: "DevOps/Monitoring",
    description: "Comprehensive monitoring and alerting solution using Zabbix, Check-mk, and Nagios for enterprise infrastructure, reducing MTTR by 35%.",
    longDescription: "Built and deployed a robust monitoring infrastructure that provides real-time visibility into system health, application performance, and infrastructure metrics. Implemented automated alerting and escalation workflows to ensure rapid incident response and system reliability.",
    image: "/api/placeholder/600/400",
    technologies: ["Zabbix", "Check-mk", "Nagios", "Prometheus", "Grafana", "Python", "Bash", "RHEL", "Ubuntu"],
    features: [
      "Deployed multi-tier monitoring solution using Zabbix, Check-mk, and Nagios",
      "Created custom monitoring scripts and health checks for critical services",
      "Implemented automated alerting with intelligent escalation workflows",
      "Built comprehensive dashboards for real-time infrastructure visibility",
      "Reduced mean time to resolution (MTTR) by 35% through proactive monitoring",
      "Collaborated with operations teams to fine-tune thresholds and reduce alert noise"
    ],
    githubUrl: "https://github.com/SaiRam-Peruri",
    status: "Production",
    metrics: {
      mttr: "35% MTTR Reduction",
      coverage: "700+ Monitored Systems",
      uptime: "99.9% Infrastructure Uptime",
      automation: "Automated Alert Management"
    },
    learnings: [
      "Enterprise monitoring tool configuration and optimization",
      "Custom monitoring script development for specific business needs",
      "Incident response automation and escalation strategies",
      "Performance tuning and capacity planning methodologies"
    ]
  }
];

const devops = [
  {
    id: 1,
    title: "Infrastructure Automation",
    description: "Automated cloud infrastructure provisioning and management using Terraform, reducing deployment time by 60% and manual errors by 40%",
    tools: ["Terraform", "AWS", "Azure", "GCP", "Ansible"]
  },
  {
    id: 2,
    title: "CI/CD Pipeline Engineering", 
    description: "Designed and implemented enterprise-grade CI/CD pipelines using Jenkins and GitHub Actions, achieving 50% faster release cycles",
    tools: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "SonarQube"]
  },
  {
    id: 3,
    title: "Container Orchestration",
    description: "Orchestrated enterprise applications using Kubernetes and Docker, ensuring high availability and zero-downtime deployments",
    tools: ["Kubernetes", "Docker", "Helm", "Istio", "Prometheus"]
  },
  {
    id: 4,
    title: "Monitoring & Observability",
    description: "Implemented comprehensive monitoring and alerting systems using Zabbix, Check-mk, and Nagios, reducing MTTR by 35%",
    tools: ["Zabbix", "Check-mk", "Nagios", "Prometheus", "Grafana"]
  }
];

const education = [
  {
    id: 1,
    degree: "Master of Science",
    field: "Computer Science",
    institution: "University of Massachusetts Lowell",
    location: "Lowell, MA, USA",
    period: "Jan 2024 - May 2025",
    status: "In Progress",
    description: "Focusing on cloud computing, system architecture, and advanced programming concepts with emphasis on AWS technologies.",
    gpa: "3.5/4.0",
    coursework: [
      "Algorithms", 
      "Computer Network Security", 
      "Data Science", 
      "Advanced Cloud Computing", 
      "Operating Systems"
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering", 
    institution: "Sri Chandrasekharendra Saraswathi Viswa Maha Vidyalaya",
    location: "Kanchipuram, India",
    period: "Aug 2017 - May 2021",
    status: "Completed",
    description: "Strong foundation in engineering principles, mathematics, and problem-solving methodologies with transition to software engineering.",
    gpa: "8.6/10.0",
    coursework: ["Engineering Mathematics", "Thermodynamics", "Manufacturing Processes", "CAD/CAM", "Programming Fundamentals"]
  }
];

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect Associate",
    code: "SAA-C03",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "SAA-C03",
    verificationUrl: "https://www.credly.com/badges/bc1aaba3-912d-4fbb-aa04-fa48be354dc9",
    description: "Demonstrates expertise in designing distributed systems on AWS platform with focus on security, scalability, and cost optimization",
    skills: ["AWS", "Cloud Architecture", "System Design", "Security", "Cost Optimization", "High Availability"]
  },
  {
    id: 2,
    name: "Microsoft Azure Administrator Associate",
    code: "Az-104",
    issuer: "Microsoft",
    date: "2023", 
    credentialId: "Az-104",
    verificationUrl: "https://www.credly.com/badges/bc1aaba3-912d-4fbb-aa04-fa48be354dc9",
    description: "Validates skills in implementing, managing, and monitoring Azure solutions including virtual machines, storage, and networking",
    skills: ["Azure", "Cloud Administration", "Virtual Machines", "Storage", "Networking", "Identity Management"]
  },
  {
    id: 3,
    name: "HashiCorp Certified: Terraform Associate",
    code: "003",
    issuer: "HashiCorp",
    date: "2023", 
    credentialId: "003",
    verificationUrl: "https://www.credly.com/org/hashicorp/badge/terraform-associate-003",
    description: "Validates foundational skills and knowledge in Infrastructure as Code (IaC) using Terraform for cloud resource management",
    skills: ["Terraform", "Infrastructure as Code", "Cloud Provisioning", "DevOps", "Automation", "Resource Management"]
  }
];

const achievements = [
  {
    id: 1,
    title: "2x Star of the Month Awards",
    description: "Earned multiple Star of the Month and Best Employee of the Quarter awards at Tata Consultancy Services through consistent high performance and reliability in system operations",
    date: "2022-2023",
    category: "Professional Recognition",
    icon: "🌟"
  },
  {
    id: 2,
    title: "Infrastructure Migration Leadership",
    description: "Successfully completed critical infrastructure migration in 6 months instead of 12, enabling planning for migration of 700+ servers. Transitioned legacy systems to 15 bare-metal servers by coordinating with enterprise architects, data center teams, and Linux administrators",
    date: "2022",
    category: "Project Achievement",
    icon: "🚀"
  },
  {
    id: 3,
    title: "Letter of Recommendation - Teaching Excellence", 
    description: "Awarded formal Letter of Recommendation for outstanding performance as a Grader and Teaching Assistant in AWS and C++ courses — recognized for precision in technical evaluations and continuous student support across 100+ lab submissions and project reviews",
    date: "2024",
    category: "Academic Excellence",
    icon: "🎓"
  },
  {
    id: 4,
    title: "Cost Optimization Expert",
    description: "Achieved 30% improved deployment consistency and 25% cost savings through optimized resource provisioning and reserved instance strategies across AWS and Azure environments",
    date: "2022-2023",
    category: "Technical Achievement",
    icon: "💰"
  },
  {
    id: 5,
    title: "Automation Efficiency Leader",
    description: "Reduced manual errors by 40% and cut down setup time by 60% through Terraform automation, while improving operational efficiency by up to 45% with custom Python and Bash scripts",
    date: "2022-2023",
    category: "Process Improvement",
    icon: "⚡"
  }
];

const systems = [
  {
    title: "Scripting & Automation",
    description: "Developed comprehensive automation scripts for system management, log parsing, and resource optimization using Python and Bash on enterprise Linux environments.",
    tools: ["Python", "Bash", "Shell Scripting", "Ansible", "Cron Jobs", "SystemD"]
  },
  {
    title: "System Hardening & Security",
    description: "Implemented enterprise security protocols, access controls, and monitoring systems to ensure robust infrastructure protection and compliance.",
    tools: ["SSH", "IAM", "HashiCorp Vault", "Network Security", "TLS/SSL", "Firewall Rules"]
  },
  {
    title: "Infrastructure Management",
    description: "Managed large-scale infrastructure deployments with expertise in containerization, orchestration, and monitoring across cloud and on-premises environments.",
    tools: ["Docker", "Kubernetes", "Terraform", "Zabbix", "Check-mk", "Nagios", "RHEL", "Ubuntu"]
  }
];

export const portfolio = {
  personalInfo,
  experience,
  projects,
  devops,
  systems,
  education,
  certifications,
  achievements,
};
