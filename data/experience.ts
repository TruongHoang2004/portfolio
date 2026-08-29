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
      company: "SETA International",
      role: isVi ? "Kỹ sư Phần mềm" : "Software Engineer",
      period: isVi ? "Tháng 9 2025 – Hiện tại" : "Sep 2025 – Present",
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
          name: "Veritone (aiWARE Core)",
          description: isVi ? "Nền tảng AI Multi-tenant" : "Multi-tenant AI Platform",
          achievements: [
            isVi ? "Chuyển đổi API GraphQL công khai từ Apollo/Express sang GraphQL Yoga + Envelop trên Fastify." : "Migrated the public GraphQL API from Apollo/Express to GraphQL Yoga + Envelop on Fastify and upgraded to GraphQL v16, modernizing the API foundation with no test regressions.",
            isVi ? "Thiết kế và triển khai API sắp xếp có kiểu cho danh sách gói ứng dụng." : "Designed and implemented a typed sorting API for application-package listings, supporting 5 sortable fields and configurable direction while preserving existing filtering and pagination.",
            isVi ? "Thêm tính năng truy xuất hàng loạt theo danh sách ID vào API ứng dụng, giảm thiểu độ trễ." : "Added batch retrieval by ID list to the applications API, replacing N per-application round trips with a single request and reducing client-side API overhead.",
            isVi ? "Triển khai xác thực quyền hạn trong luồng tạo và cập nhật người dùng." : "Implemented role-to-application authorization validation in user creation and update flows, preventing invalid role assignments that could silently strip permissions under object-level access control.",
            isVi ? "Giải quyết các lỗi đóng gói ứng dụng liên cụm bằng cách bổ sung trường loại thực thể bị thiếu trong API GraphQL." : "Resolved cross-cluster application packaging failures by exposing a missing entity-type field in the GraphQL API, fixing enum validation errors in the package export/import CLI.",
            isVi ? "Tìm ra nguyên nhân gốc rễ của sự cố production mức độ cao sau khi di chuyển schema phân cấp nội dung." : "Root-caused a high-priority production outage following a content-hierarchy schema migration, identifying 169 corrupted records (151 root folders) out of 363,515 through SQL analysis and driving a preventative migration design.",
            isVi ? "Chẩn đoán và khắc phục các lỗi di chuyển dữ liệu khác, khôi phục dữ liệu cho các tổ chức bị ảnh hưởng." : "Diagnosed and remediated additional migration defects, including a type-mapping mismatch that emptied a downstream analytics API and a null-handling bug, restoring affected organizations' data.",
            isVi ? "Khắc phục tất cả các CVE bộ chứa mức độ Nghiêm trọng và Cao về 0." : "Remediated all Critical and High container CVEs to zero remaining Trivy findings and improved CI reliability by refactoring integration tests that blocked pull-request verification."
          ],
          technologies: "Node.js · GraphQL · GraphQL Yoga · Fastify · PostgreSQL · SQL · Docker · Kubernetes · Helm · Argo CD · CI/CD · RBAC · Object-level Authorization · Data Migrations"
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
          description: isVi ? "Nền tảng Quản lý Nguồn nhân lực & Nhân sự Doanh nghiệp" : "Enterprise HR & Resource Management Platform",
          achievements: [
            isVi ? "Xây dựng nền tảng EMS từ đầu, phát triển các tính năng end-to-end trên toàn bộ hệ thống." : "Built the EMS platform from the ground up, developing end-to-end features across the backend, frontend, authentication, authorization, and deployment configuration.",
            isVi ? "Thiết kế và triển khai hệ thống IAM, bao gồm RBAC dựa trên dự án và xác thực JWT." : "Designed and implemented the IAM system, including project-based RBAC, JWT authentication with database-backed sessions, and Microsoft OAuth/SSO.",
            isVi ? "Xây dựng quy trình nhân sự cốt lõi và tích hợp, bao gồm quản lý vòng đời nhân viên và xử lý hồ sơ bằng AI." : "Built core HR workflows and integrations, including employee lifecycle management, Draft Profile approval, webhook APIs, MinIO document storage, Microsoft Teams integration, and AI-powered resume processing.",
            isVi ? "Phát triển ứng dụng frontend với quản lý hồ sơ nhân viên, tìm kiếm nâng cao, xuất/nhập PDF CV." : "Developed the frontend application with employee profile management, advanced search/filtering, project-aware navigation, PDF CV import/export, image cropping, i18n, and Dark Mode.",
            isVi ? "Thiết lập môi trường Staging/Non-prod và cấu hình CI/CD." : "Set up Staging/Non-prod environments, configuring service boundaries, environment variables, encryption keys, MinIO storage, and CI/CD deployment configurations."
          ],
          technologies: "TypeScript · React · Backend APIs · MinIO · Microsoft OAuth · JWT · Git · CI/CD"
        }
      ]
    },
    {
      company: "Tiên Phong Telecom Ecommerce",
      role: isVi ? "Tech Lead / Kỹ sư Backend (Freelancer)" : "Tech Lead / Backend Engineer (Freelancer)",
      period: isVi ? "Tháng 3 2025 - Tháng 8 2025" : "Mar 2025 - Aug 2025",
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
      period: isVi ? "Tháng 9 2024 - Tháng 3 2025" : "Sep 2024 - Mar 2025",
      projects: [
        {
          achievements: [
            isVi ? "Làm việc với tư cách là thành viên của nhóm phát triển 5 người, chủ yếu chịu trách nhiệm về phát triển backend và DevOps." : "Worked as part of a 5-member development team, primarily responsible for backend development and DevOps, while contributing to full-stack web application development.",
            isVi ? "Triển khai API backend và hỗ trợ triển khai ứng dụng, cấu hình môi trường." : "Implemented backend APIs and supported application deployment and environment configuration, gaining hands-on experience with real-world development workflows.",
            isVi ? "Hợp tác với các thành viên trong nhóm thông qua chia nhỏ công việc, đánh giá mã và phát triển dựa trên Git." : "Collaborated with teammates through task breakdown, Git-based development, code reviews, and team coordination, building a strong foundation in professional software engineering practices."
          ],
        }
      ]
    }
  ];
};
