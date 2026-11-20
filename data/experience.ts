export type Project = {
  name?: string;
  description?: string;
  achievements: string[];
  technologies?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description?: string;
  projects: Project[];
};

export const getExperiencesData = (locale: string): Experience[] => {
  const isVi = locale === 'vi';
  
  return [
    {
      company: "PiScale",
      role: isVi ? "Kỹ sư Backend (Cộng tác viên)" : "Backend Engineer (Collaborator)",
      period: isVi ? "Tháng 10 2026 – Hiện tại" : "Oct 2026 – Present",
      description: isVi
        ? "Communi: nền tảng chăm sóc khách hàng đa kênh gồm ~36 microservice, hỗ trợ SaaS và on-premise."
        : "Communi: an omnichannel customer-engagement platform of ~36 microservices, offered as SaaS and on-premise.",
      projects: [
        {
          name: "Zalo Personal Connector",
          description: isVi ? "Dịch vụ mới, đã phát hành" : "New service, released",
          achievements: [
            "Built and released a ~12,500-line NestJS/Prisma/MySQL service with 59 tests: QR account linking over SSE, 1:1 and group messaging.",
            "Added outbox-based webhook delivery, MySQL leader locking, graceful shutdown and SSRF protection; shipped CI and Kubernetes deployment.",
            "Wrote the matching ~3,700-line Go plugin in omni-bridge with webhook verification and temporary/permanent error classification.",
          ],
          technologies: "NestJS · Prisma · MySQL · Go · Kubernetes",
        },
        {
          name: "Integration & E2E testing",
          achievements: [
            "Built ~9,400 lines of black-box tests across 10 platforms with containerized environments, fake platform servers, parallel runs and GitLab CI reports.",
            "Integrated Telegram group conversations into Communi Desk across 2 services, including group migration and log-token hardening.",
          ],
          technologies: "Go · Docker · GitLab CI · Kafka · Redis",
        },
      ],
    },
    {
      company: "SETA International",
      role: isVi ? "Kỹ sư Phần mềm" : "Software Engineer",
      period: isVi ? "Tháng 9 2025 – Tháng 10 2026" : "Sep 2025 – Oct 2026",
      description: isVi 
        ? "Đóng góp vào nhiều dự án doanh nghiệp, bao gồm kỹ thuật nền tảng, phát triển full-stack và hạ tầng đám mây."
        : "Contributed to multiple enterprise projects, spanning platform engineering, full-stack development, and cloud infrastructure.",
      projects: [
        {
          name: "Veritone (aiWARE Processing)",
          description: isVi ? "Nền tảng Xử lý AI Phân tán & Tự động hóa Luồng công việc" : "Distributed AI Processing & Workflow Automation Platform",
          achievements: [
            isVi ? "Nâng cấp runtime thực thi luồng công việc Node.js lên v4.1.8+, xác thực tính tương thích của plugin, biểu thức và phân tích cú pháp đồng thời khắc phục các lỗ hổng từ phiên bản trước." : "Upgraded the Node.js workflow execution runtime to v4.1.8+, validating plugin, expression, and parsing compatibility while addressing vulnerabilities inherited from the previous major version.",
            isVi ? "Thiết kế và triển khai versioning Docker image bất biến dựa trên commit qua 7+ repo và 3 kênh release." : "Designed and implemented immutable, commit-based Docker image versioning across 7+ repositories and 3 release channels, integrating changes across CI/CD, Helm, GitOps, Go control-plane, and GraphQL workflows to ensure reproducible deployments and prevent stale runtime images.",
            isVi ? "Cải thiện khả năng quan sát runtime bằng cách hiển thị siêu dữ liệu build thông qua Prometheus metrics." : "Improved runtime observability by exposing build metadata through Prometheus metrics, enabling QA, support, and engineering teams to verify deployed runtime versions without direct Kubernetes access.",
            isVi ? "Xác định và phân tích một lỗ hổng SQL injection nghiêm trọng, truy vết đường dẫn tấn công và xác định phạm vi khắc phục." : "Identified and analyzed a critical SQL injection vulnerability, tracing the attack path from authenticated input to dynamically constructed SQL and defining the required remediation scope.",
            isVi ? "Khắc phục 22 CVE bộ chứa mức độ Nghiêm trọng, 55 mức Cao và 8 lỗ hổng phụ thuộc." : "Remediated 22 Critical, 55 High severity container CVEs, and 8 dependency vulnerabilities, while defining a standardized non-root container pattern to improve platform security.",
            isVi ? "Giải quyết hồi quy di chuyển framework frontend trên 15 trang quản trị và sửa các lỗi CI/CD." : "Resolved a frontend framework migration regression across 15 administration pages and fixed CI/CD failures caused by Node.js runtime and package-manager incompatibilities.",
            isVi ? "Cải thiện chẩn đoán lỗi công việc phân tán bằng cách truyền lý do lỗi chính xác vào bản ghi tác vụ." : "Improved distributed job diagnostics and reliability by propagating accurate engine failure reasons into task records and investigating multi-hour job-status synchronization delays between edge clusters and the central API."
          ],
          technologies: "Go · Node.js · React · GraphQL · PostgreSQL · Docker · Kubernetes · Helm · Argo CD · Jenkins · Prometheus · GitOps"
        },
        {
          name: "Veritone aiWARE Core",
          description: isVi
            ? "Core GraphQL API của nền tảng AI aiWARE · Từ tháng 1 2026. Team ~6 kỹ sư Việt Nam cùng các kỹ sư phía khách hàng ở nước ngoài. Tôi ở vị trí shadow: một kỹ sư headcount trao đổi với khách hàng hằng ngày vào ban đêm, còn tôi xử lý các task khách hàng giao vào ban ngày."
            : "Core GraphQL API of Veritone's aiWARE AI platform · From Jan 2026. Team of ~6 engineers in Vietnam working with the client's overseas engineers. I worked as a shadow engineer: a headcount engineer handled daily overnight syncs with the client, and I delivered the client-assigned tasks during the day.",
          achievements: [
            isVi ? "Hiện đại hoá API: migrate GraphQL API public từ Apollo/Express sang GraphQL Yoga + Envelop trên Fastify (GraphQL v16), không phát sinh regression." : "Modernized the public GraphQL API: migrated from Apollo/Express to GraphQL Yoga + Envelop on Fastify (GraphQL v16) with zero test regressions.",
            isVi ? "Phát triển API: sorting có kiểu (5 trường), batch fetch theo danh sách ID (1 request thay cho N), kiểm tra phân quyền role–application khi tạo/cập nhật user; sửa lỗi export/import package giữa các cluster." : "Shipped API features: typed sorting (5 fields), batch fetch by ID list (1 request instead of N), and role-to-application authorization checks on user writes; fixed cross-cluster package export/import.",
            isVi ? "Chẩn đoán và xử lý dữ liệu sai trên production sau các đợt migrate schema: truy vết 169/363.515 bản ghi hỏng bằng SQL, khôi phục dữ liệu cho các tổ chức bị ảnh hưởng và đề xuất thiết kế migration an toàn hơn." : "Diagnosed and fixed corrupted production data after schema migrations: traced 169 of 363,515 records via SQL, restored affected organizations' data, and drove a safer migration design.",
            isVi ? "Bảo mật & CI: xử lý toàn bộ CVE container mức Critical/High về 0 (Trivy) và gỡ tắc CI bằng cách refactor integration test." : "Security & CI: cleared all Critical/High container CVEs to zero Trivy findings and unblocked CI by refactoring integration tests."
          ],
          technologies: "Node.js · GraphQL · GraphQL Yoga · Fastify · PostgreSQL · Docker · Kubernetes · Helm · Argo CD · Trivy"
        },
        {
          name: "Edu Vengy",
          description: isVi ? "Nền tảng Quản lý Đào tạo & E-Learning tích hợp AI" : "AI-Powered E-Learning & Training Management Platform",
          achievements: [
            isVi ? "Soạn thảo đề xuất định cỡ hạ tầng và chi phí vận hành ban đầu, tạo cơ sở kỹ thuật cho giải pháp." : "Authored the initial infrastructure sizing and operating-cost proposal (CPU/RAM/storage/network per module, third-party AI API and hosting costs by phase), forming the technical basis of the client-facing solution proposal.",
            isVi ? "Xây dựng hạ tầng cốt lõi từ số 0 — cấp phép máy chủ, cấu hình IP/DNS/tường lửa, và xây dựng CI/CD GitHub Actions." : "Bootstrapped core infrastructure from zero — provisioned the server, configured public IP/DNS/firewall, and built a GitHub Actions CI/CD pipeline (lint, unit tests, Dockerize, auto-deploy to Dev on merge to develop) with secrets managed via Actions.",
            isVi ? "Thiết kế và triển khai runbook sao lưu và phục hồi sau thảm họa cho PostgreSQL." : "Designed and implemented a PostgreSQL backup and disaster-recovery runbook (full + continuous WAL archiving, automated failure alerting via Slack/Telegram/Email), meeting RPO < 1 hour and RTO < 30 minutes targets.",
            isVi ? "Di chuyển lưu trữ tệp nền tảng từ MinIO sang AWS S3 và xây dựng hệ thống sao lưu S3 tự động." : "Migrated platform file storage from MinIO to AWS S3 and built a scheduled, automated S3 backup system with status logging and restore capability.",
            isVi ? "Loại bỏ tất cả dữ liệu mock khỏi backend và tái cấu trúc logic trình duyệt phương tiện bị lặp lại." : "Eliminated all mock/hardcoded data from the backend and refactored duplicated media-browser logic (search, prefix navigation, thumbnail selection) across two separate admin/editor surfaces into a single shared useMediaBrowser hook, as part of a broader backend API code-quality standardization.",
            isVi ? "Xây dựng nhật ký kiểm toán toàn hệ thống ghi lại các hành động CREATE/UPDATE/DELETE kèm theo diffs." : "Built a system-wide audit log capturing CREATE/UPDATE/DELETE actions with before/after diffs, actor, and timestamp, exposed via a paginated, filterable, permission-gated API.",
            isVi ? "Thiết kế và phát hành hệ thống nhúng tài liệu học tập, cho phép tái sử dụng nội dung thư viện." : "Designed and shipped a learning-material embedding system enabling instructors to reuse library content across lessons without file duplication, backed by server-side permission validation.",
            isVi ? "Mở rộng hệ thống câu đố với 4 loại câu hỏi chấm điểm tự động mới và triển khai liên kết nguồn." : "Extended the quiz engine with 4 new auto-graded question types (true/false, fill-in-the-blank, matching, ordering) and implemented source-linking from quiz questions back to their originating Course → Chapter → Lesson for post-exam review navigation.",
            isVi ? "Dẫn dắt đợt chuẩn hóa UX toàn ứng dụng — cảnh báo chưa lưu thay đổi, thông báo cục bộ, v.v." : "Led an application-wide UX standardization pass — unsaved-changes warnings, localized toast messaging, and simplified delete confirmations — reducing accidental data loss and inconsistent user feedback."
          ],
          technologies: "TypeScript · React · Vite · Node.js · PostgreSQL · MinIO · AWS S3 · Docker · GitHub Actions"
        },
        {
          name: "EMS (Employee Management System)",
          description: isVi
            ? "Hệ thống nội bộ của SETA quản lý tập trung dữ liệu nhân sự, dự án và hợp đồng cho ~200 người dùng · Tháng 9 – Tháng 12 2025"
            : "SETA's internal platform centralizing employee, project and contract data for ~200 users · Sep – Dec 2025",
          achievements: [
            isVi ? "Core backend trong team ~5 người; xây dựng nền tảng từ đầu với FastAPI, PostgreSQL và frontend React/TypeScript." : "Core backend engineer in a ~5-person team; built the platform from the ground up with FastAPI, PostgreSQL and a React/TypeScript frontend.",
            isVi ? "Thiết kế hệ thống IAM: RBAC theo dự án, JWT với session lưu trong database, đăng nhập Microsoft OAuth/SSO." : "Designed IAM with project-based RBAC, JWT backed by database sessions, and Microsoft OAuth/SSO.",
            isVi ? "Xây dựng các quy trình nhân sự: vòng đời nhân viên, duyệt Draft Profile, webhook API, lưu trữ MinIO, tích hợp Microsoft Teams và xử lý CV bằng AI." : "Delivered employee lifecycle and Draft Profile approval workflows, webhook APIs, MinIO storage, Microsoft Teams integration and AI resume processing.",
            isVi ? "Xây dựng pipeline CDC (change data capture) trên Kafka và các service Go gọn nhẹ cho thông báo và job định kỳ như cập nhật hợp đồng." : "Built a Kafka-based change data capture (CDC) pipeline and lightweight Go services for notifications and scheduled jobs such as contract updates.",
            isVi ? "Đảm nhận DevOps sau khi DevOps của team rời đi: triển khai Kubernetes, môi trường Staging/Non-prod và CI/CD." : "Took over DevOps after the team's DevOps engineer left: Kubernetes deployments, Staging/Non-prod environments and CI/CD.",
            isVi ? "Phát triển frontend quản lý hồ sơ nhân viên, tìm kiếm và lọc nâng cao, nhập/xuất CV dạng PDF, đa ngôn ngữ và Dark Mode." : "Developed the frontend for employee profiles, advanced search and filtering, PDF CV import/export, i18n and Dark Mode."
          ],
          technologies: "Python · FastAPI · Go · PostgreSQL · Kafka · Kubernetes · React · TypeScript · MinIO · Microsoft OAuth"
        }
      ]
    },
    {
      company: "Tiên Phong Telecom Ecommerce",
      role: isVi ? "Trưởng nhóm kỹ thuật & Kỹ sư Backend (Freelance)" : "Tech Lead & Backend Engineer (Freelance)",
      period: isVi ? "Tháng 3 2025 – Tháng 8 2025" : "Mar 2025 – Aug 2025",
      description: isVi
        ? "Dự án freelance ngắn hạn với nhóm 3 người (designer, frontend và tôi phụ trách backend, DevOps). Tôi quyết định các vấn đề kỹ thuật, làm việc trực tiếp với khách hàng và đưa sản phẩm vào vận hành với khách hàng thật."
        : "Short-term freelance project with a 3-person team (designer, frontend, me on backend and DevOps). I led technical decisions, worked directly with the client, and shipped the platform to production with real customers.",
      projects: [
        {
          achievements: [
            isVi ? "Dẫn dắt kiến trúc kỹ thuật của nền tảng, định nghĩa cấu trúc dự án backend và hợp đồng API REST." : "Led the technical architecture of the platform, defining backend project structures, REST API contracts, and database schemas while coordinating implementation with the frontend developer.",
            isVi ? "Xây dựng các dịch vụ backend thương mại điện tử cốt lõi với NestJS và TypeORM." : "Built core e-commerce backend services with NestJS and TypeORM, developing advanced business logic for shopping carts, checkout flows, transaction handling, and paginated order filtering.",
            isVi ? "Tích hợp Strapi Headless CMS để quản lý danh mục sản phẩm." : "Integrated Strapi Headless CMS for product catalog management, designing robust webhook endpoints to seamlessly sync product and collection data in real-time with the PostgreSQL database.",
            isVi ? "Mở rộng hệ thống quản lý danh tính và truy cập, triển khai xác thực JWT và RBAC." : "Extended the identity and access management system, implementing JWT authentication, role-based access control, and comprehensive user profile and multi-address management APIs.",
            isVi ? "Đóng gói toàn bộ ứng dụng (NestJS, Next.js, Strapi, PostgreSQL) bằng Docker." : "Containerized the entire application stack (NestJS, Next.js, Strapi, PostgreSQL) using Docker and Docker Compose, and configured CI/CD pipelines via GitHub Actions for automated testing."
          ],
          technologies: "NestJS · TypeScript · PostgreSQL · TypeORM · Strapi CMS · JWT · Docker · GitHub Actions"
        }
      ]
    },
    {
      company: "National Cyber Security Center of Vietnam",
      role: isVi ? "Thực tập sinh Lập trình viên Fullstack" : "Fullstack Developer Intern",
      period: isVi ? "Tháng 9 2024 – Tháng 6 2025" : "Sep 2024 – Jun 2025",
      description: isVi
        ? "Lập trình viên fullstack trong nhóm thực tập 5 người, cùng nhận và thực hiện các dự án web nhỏ; chủ yếu phụ trách backend và DevOps."
        : "Fullstack developer in a 5-person intern team that took on and delivered small web projects, focused mainly on backend and DevOps.",
      projects: [
        {
          name: isVi ? "Web bán hàng cho đơn vị affiliate" : "Affiliate e-commerce site",
          achievements: [
            isVi ? "Xây dựng API backend cho một web bán hàng đơn giản của đơn vị affiliate, dùng NestJS với frontend Next.js." : "Built the backend APIs for a simple online store run by an affiliate partner, using NestJS with a Next.js frontend.",
          ],
        },
        {
          name: isVi ? "Xây dựng lại trang báo điện tử" : "Online news site rebuild",
          achievements: [
            isVi ? "Cùng nhóm viết lại toàn bộ giao diện và backend của một trang báo đang hoạt động; tôi xây dựng backend và viết một CLI bằng Go để migrate dữ liệu từ hệ thống cũ sang hệ thống mới." : "Rebuilt an existing news website end to end with the team (new frontend and backend); I built the backend and wrote a Go CLI that migrated content from the old system to the new one.",
            isVi ? "Triển khai cả hai web lên internet bằng Docker và Nginx reverse proxy." : "Deployed both sites to the internet with Docker and an Nginx reverse proxy.",
          ],
          technologies: "NestJS · Next.js · Docker · Nginx · Go",
        },
      ],
    },
  ];
};
