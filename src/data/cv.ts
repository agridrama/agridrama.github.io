// CV content. Sections with an empty array are not rendered.

export interface Entry {
  period?: string;
  title: string;
  org?: string;
  url?: string;
  details?: string[];
}

export interface Publication {
  authors: string;
  year: number;
  title: string;
  venue: string;
  url?: string;
}

export const education: Entry[] = [
  {
    period: 'Apr 2025 - Mar 2028 (expected)',
    title: "Master's program, Department of Information Physics and Computing",
    org: 'Graduate School of Information Science and Technology, The University of Tokyo',
    details: ['Nakamura-Takase Laboratory (Computing Systems)'],
  },
  {
    period: 'Aug 2025 - Jun 2026',
    title: 'Exchange student',
    org: 'KTH Royal Institute of Technology, Stockholm, Sweden',
    details: ['Coursework in distributed systems, computer architecture, and networking'],
  },
  {
    period: 'Apr 2023 - Mar 2025',
    title: 'B.Eng., Department of Mathematical Engineering and Information Physics',
    org: 'Faculty of Engineering, The University of Tokyo',
  },
  {
    period: 'Apr 2021 - Mar 2023',
    title: 'College of Arts and Sciences (Junior Division)',
    org: 'The University of Tokyo',
  },
];

export const research: Entry[] = [
  {
    period: 'Apr 2025 - Present',
    title: 'Execution infrastructure for multi-tenant VLA serving on edge and cloud',
    org: 'Nakamura-Takase Laboratory, The University of Tokyo',
    details: [
      'Studying how to serve Vision-Language-Action models to multiple robots and environments efficiently, rather than optimizing inference on a single robot.',
      'Characterizing the compute, memory, and batching behavior of each pipeline stage (vision encoder, vision-language backbone, action head) to guide edge/cloud splitting and state sharing under real-time SLOs.',
    ],
  },
];

export const experience: Entry[] = [
  {
    period: '2021 - 2025',
    title: 'Software Engineer',
    org: 'Ollo Inc.',
    details: [
      'Developed a B2B SaaS video-analysis platform for manufacturing in a team of 3-4 engineers, across the frontend (Nuxt.js, TypeScript) and backend (Go, gin, GraphQL).',
      // 'Redesigned video storage around HLS, separating immutable segments from lightweight playlists; fixed an overwrite bug and cut storage and transfer volume by about 75%.',
      // 'Built a dedicated video-preprocessing microservice with gRPC and a Redis job queue, moving CPU-bound resizing and encoding out of the monolith.',
    ],
  },
  {
    period: 'Aug 2026 - Sep 2026',
    title: 'Engineering Intern',
    org: 'Preferred Networks, Inc.',
    details: [
      // 'Observation and analysis of in-house kubernetes-based AI infrastructure. Especially, I mainly focused on the switch telemetry data collection and job scheduling system.'
    ]
  }
];

export const projects: Entry[] = [
  {
    title: 'GPT-2 inference optimization with a CUDA KV-cache',
    org: 'Course project, KTH',
    url: 'https://github.com/agridrama/gpt2_optim',
    details: [
      'Implemented the KV-cache in C/CUDA and led correctness checks (logits RMSE, token match) and the experiment harness.',
      'Reached about 515 tokens/s on an H100 with cuBLAS and BF16; profiled GPU bottlenecks with Nsight Systems.',
    ],
  },
  {
    title: 'CA-OP: clock-assisted distributed consensus',
    org: 'Course project, KTH',
    url: 'https://github.com/agridrama/CA-OP',
    details: [
      'Added a clock-synchronized fast path with deadline-ordered delivery to sequence consensus in Rust, reducing communication steps from 4 to 3.',
      'Cut mean latency by 75 ms (12%) in a high-jitter topology, measured with a reproducible containerlab benchmark harness.',
    ],
  }
];

export const publications: Publication[] = [];

export const talks: Entry[] = [];

export const awards: Entry[] = [];

export const activities: Entry[] = [
  // {
  //   period: 'Oct 2023 - May 2025',
  //   title: 'Branding Manager (from 2024)',
  //   org: 'TEDxUTokyo',
  //   details: [
  //     'Led a six-person branding team responsible for design, publicity, and attendee recruitment for the annual event (about 400 attendees).',
  //   ],
  // },
  // {
  //   period: 'Apr 2022 - Sep 2023',
  //   title: 'Planning and finance; vice chair of HLAB EHIME (2023)',
  //   org: 'HLAB',
  //   details: [
  //     'Organized residential summer schools for high-school students (HLAB OBUSE 2022, HLAB EHIME 2023), including setting up operations for the first Ehime program.',
  //   ],
  // },
];

export const skills: { label: string; items: string }[] = [
  { label: 'Languages', items: 'Go, TypeScript, Python, Rust, C / CUDA, Erlang' },
  { label: 'Frontend', items: 'React, Vue / Nuxt.js, Astro' },
  { label: 'Backend', items: 'GraphQL, gRPC, Redis, MariaDB' },
  { label: 'Infrastructure', items: 'Docker, Kubernetes, Grafana' },
];
