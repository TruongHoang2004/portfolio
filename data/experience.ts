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
          name: "Veritone aiWARE Processing",
          description: isVi
            ? "Nền tảng xử lý AI phân tán và tự động hoá workflow, chạy trên cloud và các edge cluster Kubernetes · Tháng 4 – Tháng 10 2026. Team gồm 2 kỹ sư Việt Nam và 3 kỹ sư nước ngoài phía khách hàng; tôi tiếp tục ở vị trí shadow, xử lý các task khách hàng giao vào ban ngày."
            : "Distributed AI processing and workflow automation platform running on cloud and Kubernetes edge clusters · Apr – Oct 2026. Team of 2 engineers in Vietnam and 3 overseas client engineers; I continued as a shadow engineer, delivering client-assigned tasks during the day.",
          achievements: [
            isVi ? "Release engineering: thiết kế versioning Docker image bất biến theo commit cho 7+ repo và 3 kênh release (CI/CD, Helm, GitOps); expose build metadata qua Prometheus để QA/support kiểm tra version đang chạy mà không cần truy cập cluster." : "Release engineering: designed immutable, commit-based image versioning across 7+ repos and 3 release channels (CI/CD, Helm, GitOps), and exposed build metadata via Prometheus so QA and support can verify deployed versions without cluster access.",
            isVi ? "Bảo mật: xử lý 22 CVE Critical, 55 CVE High và 8 lỗ hổng dependency; chuẩn hoá container non-root; phân tích một lỗ hổng SQL injection nghiêm trọng và xác định phạm vi khắc phục." : "Security: remediated 22 Critical and 55 High container CVEs plus 8 dependency vulnerabilities, standardized non-root containers, and scoped the fix for a critical SQL injection.",
            isVi ? "Nâng cấp nền tảng: nâng Node-RED workflow runtime từ v3 lên v4.1.8+; sửa regression sau migrate frontend trên 15 trang admin và lỗi CI do không tương thích Node.js/package manager." : "Platform upgrades: moved the Node-RED workflow runtime from v3 to v4.1.8+, and fixed a frontend migration regression across 15 admin pages plus Node.js/package-manager CI failures.",
            isVi ? "Độ tin cậy: cải thiện chẩn đoán job phân tán bằng cách ghi đúng lý do lỗi của engine vào task, và điều tra độ trễ nhiều giờ khi đồng bộ trạng thái job giữa edge cluster và API trung tâm." : "Reliability: improved distributed job diagnostics by recording real engine failure reasons on tasks, and investigated multi-hour job-status sync delays between edge clusters and the central API."
          ],
          technologies: "Go · Node.js · React · GraphQL · PostgreSQL · Docker · Kubernetes · Helm · Argo CD · Jenkins · Prometheus"
        },
        {
          name: "Edu Vengy",
          description: isVi
            ? "Dự án chuyển đổi số ngắn hạn cho khách hàng Vengy: nền tảng e-learning và quản lý đào tạo tích hợp AI · Tháng 5 – Tháng 7 2026, song song với aiWARE Processing. Tôi thiết kế các phần core của backend và pipeline CI/CD."
            : "Short-term digital transformation project for the client Vengy: an AI-powered e-learning and training management platform · May – Jul 2026, in parallel with aiWARE Processing. I designed the core backend and the CI/CD pipeline.",
          achievements: [
            isVi ? "Hạ tầng & CI/CD: lập đề xuất cấu hình hạ tầng và chi phí vận hành làm cơ sở cho proposal gửi khách hàng; dựng server trên AWS và cấu hình Nginx cho tên miền của khách hàng; xây dựng pipeline GitHub Actions build Docker image và tự động deploy lên Dev, còn deploy Production cần người phê duyệt." : "Infrastructure & CI/CD: wrote the infrastructure sizing and operating-cost proposal behind the client solution, provisioned the server on AWS with Nginx serving the client's domain, and built a GitHub Actions pipeline that builds Docker images and auto-deploys to Dev, with production releases gated on manual approval.",
            isVi ? "Bảo vệ dữ liệu: triển khai backup PostgreSQL hằng ngày lên S3 kết hợp WAL archiving liên tục để khôi phục chính xác đến thời điểm cần (point-in-time recovery), đã kiểm chứng bằng restore thực tế; mục tiêu RPO < 1 giờ, RTO < 30 phút." : "Data protection: implemented daily PostgreSQL backups to S3 plus continuous WAL archiving for point-in-time recovery, verified with a real restore, targeting RPO < 1 h and RTO < 30 min.",
            isVi ? "Media & storage: xây dựng module Media (tìm kiếm, điều hướng theo thư mục/prefix, chọn thumbnail, dùng chung giữa trang admin và editor) và migrate toàn bộ file từ MinIO sang AWS S3 kèm backup tự động." : "Media & storage: built the Media module (search, prefix-based folder navigation, thumbnail selection, shared across admin and editor screens) and migrated all files from MinIO to AWS S3 with automated backups.",
            isVi ? "Core backend (NestJS): xây dựng xác thực và phân quyền; audit log toàn hệ thống (diff trước/sau, người thực hiện, thời gian) qua API phân trang có kiểm tra quyền; cơ chế nhúng tài liệu học tập để tái sử dụng nội dung không nhân bản file; loại bỏ dữ liệu mock và chuẩn hoá chất lượng code API." : "Core backend (NestJS): built authentication and authorization, a system-wide audit log (before/after diffs, actor, timestamp) behind a paginated, permission-gated API, reusable learning-material embedding without file duplication, and removed mock data while standardizing API code quality.",
            isVi ? "Tính năng sản phẩm: mở rộng quiz engine với 4 loại câu hỏi chấm tự động và liên kết câu hỏi về Course → Chapter → Lesson; chuẩn hoá UX toàn ứng dụng (cảnh báo chưa lưu, thông báo đa ngôn ngữ, xác nhận xoá)." : "Product features: extended the quiz engine with 4 auto-graded question types linked back to Course → Chapter → Lesson, and standardized app-wide UX (unsaved-change warnings, localized toasts, delete confirmations)."
          ],
          technologies: "NestJS · Prisma · TypeScript · Python (AI service) · React · PostgreSQL · AWS (EC2, S3) · MinIO · Nginx · Docker · GitHub Actions"
        },
        {
          name: "Veritone aiWARE Core",
          description: isVi
            ? "Core GraphQL API của nền tảng AI aiWARE · Tháng 1 – Tháng 3 2026. Team ~6 kỹ sư Việt Nam cùng các kỹ sư phía khách hàng ở nước ngoài. Tôi ở vị trí shadow: một kỹ sư headcount trao đổi với khách hàng hằng ngày vào ban đêm, còn tôi xử lý các task khách hàng giao vào ban ngày."
            : "Core GraphQL API of Veritone's aiWARE AI platform · Jan – Mar 2026. Team of ~6 engineers in Vietnam working with the client's overseas engineers. I worked as a shadow engineer: a headcount engineer handled daily overnight syncs with the client, and I delivered the client-assigned tasks during the day.",
          achievements: [
            isVi ? "Hiện đại hoá API: migrate GraphQL API public từ Apollo/Express sang GraphQL Yoga + Envelop trên Fastify (GraphQL v16), không phát sinh regression." : "Modernized the public GraphQL API: migrated from Apollo/Express to GraphQL Yoga + Envelop on Fastify (GraphQL v16) with zero test regressions.",
            isVi ? "Phát triển API: sorting có kiểu (5 trường), batch fetch theo danh sách ID (1 request thay cho N), kiểm tra phân quyền role–application khi tạo/cập nhật user; sửa lỗi export/import package giữa các cluster." : "Shipped API features: typed sorting (5 fields), batch fetch by ID list (1 request instead of N), and role-to-application authorization checks on user writes; fixed cross-cluster package export/import.",
            isVi ? "Chẩn đoán và xử lý dữ liệu sai trên production sau các đợt migrate schema: truy vết 169/363.515 bản ghi hỏng bằng SQL, khôi phục dữ liệu cho các tổ chức bị ảnh hưởng và đề xuất thiết kế migration an toàn hơn." : "Diagnosed and fixed corrupted production data after schema migrations: traced 169 of 363,515 records via SQL, restored affected organizations' data, and drove a safer migration design.",
            isVi ? "Bảo mật & CI: xử lý toàn bộ CVE container mức Critical/High về 0 (Trivy) và gỡ tắc CI bằng cách refactor integration test." : "Security & CI: cleared all Critical/High container CVEs to zero Trivy findings and unblocked CI by refactoring integration tests."
          ],
          technologies: "Node.js · GraphQL · GraphQL Yoga · Fastify · PostgreSQL · Docker · Kubernetes · Helm · Argo CD · Trivy"
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
