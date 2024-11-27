Create detailed components with these requirements:
1. Use 'use client' directive for client-side components
2. Style with Tailwind CSS utility classes for responsive design
3. Use Lucide React for icons (from lucide-react package). Do NOT use other UI libraries unless requested
4. Use stock photos from picsum.photos where appropriate, only valid URLs you know exist
5. Configure next.config.js image remotePatterns to enable stock photos from picsum.photos
6. Avoid duplicate components
7. Automatically source and display logos from a CDN in design placeholders
8. Follow proper import practices:
   - Use @/ path aliases
   - Keep component imports organized
   - Update current src/app/page.tsx with new comprehensive code
   - Don't forget root route (page.tsx) handling
   - You MUST complete the entire prompt before stopping

E-commerce Sales Admin Dashboard with Performance Analytics
</summary_title>

<image_analysis>

1. Navigation Elements:
- Left sidebar with: Overview, Statistics, Customers, Product, Messages, Transactions
- Top header with: Sales Admin dropdown, Search bar, Settings icons, Add new product button


2. Layout Components:
- Left sidebar: 250px width, dark green background (#0A2818)
- Main content area: Flexible width with 24px padding
- Dashboard cards: 320px width, 16px gap
- Charts: Responsive width, 300px height minimum


3. Content Sections:
- Update card with sales metrics
- Net Income and Total Return cards
- Transaction list with product details
- Revenue chart with income/expenses
- Sales Report with product metrics
- Performance donut chart


4. Interactive Controls:
- Date range selector: January 2024 - May 2024
- Transaction status indicators (Completed/Pending)
- Chart interaction controls
- Guide Views button
- Update to Siohioma button


5. Colors:
- Primary: Dark Green (#0A2818)
- Secondary: Light Green (#4CAF50)
- Accent: Orange (#FF9800)
- Text: Dark (#212121)
- Success: Green (#4CAF50)
- Warning: Orange (#FF9800)


6. Grid/Layout Structure:
- 12-column grid system
- 24px grid gap
- Card layout: 2-column on desktop
- Responsive breakpoints at 768px, 1024px, 1440px
</image_analysis>

<development_planning>

1. Project Structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar
│   │   ├── Header
│   │   └── DashboardLayout
│   ├── features/
│   │   ├── Analytics
│   │   ├── Transactions
│   │   └── SalesReport
│   └── shared/
├── assets/
├── styles/
├── hooks/
└── utils/
```


2. Key Features:
- Real-time sales analytics
- Transaction management
- Performance metrics
- Product tracking
- Revenue visualization
- Sales reporting


3. State Management:
```typescript
interface AppState {
├── analytics: {
│   ├── netIncome: number
│   ├── totalReturn: number
│   └── performance: PerformanceMetrics
├── transactions: {
│   ├── list: Transaction[]
│   ├── status: TransactionStatus
│   └── filters: TransactionFilters
├── sales: {
│   ├── revenue: RevenueData[]
│   ├── products: ProductMetrics[]
│   └── reports: SalesReport[]
}
```


4. Routes:
```typescript
const routes = [
├── '/dashboard',
├── '/transactions/*',
├── '/products/*',
├── '/customers/*',
└── '/analytics/*'
]
```


5. Component Architecture:
- DashboardLayout (parent)
- AnalyticsCards (metrics)
- TransactionList
- RevenueChart
- SalesReport
- PerformanceChart


6. Responsive Breakpoints:
```scss
$breakpoints: (
├── 'mobile': 320px,
├── 'tablet': 768px,
├── 'desktop': 1024px,
└── 'wide': 1440px
);
```
</development_planning>