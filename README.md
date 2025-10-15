# Predictive Modeling for Customer Retention

An enterprise-grade ML platform for customer retention prediction and analytics, built with Apache Spark MLlib, Next.js, and modern web technologies.

## 🚀 Overview

This platform provides a comprehensive solution for predicting customer churn and analyzing retention patterns using machine learning. It features an interactive web dashboard for visualizing model performance, customer cohorts, and ML pipeline execution, enabling data-driven decision-making for customer retention strategies.

## ✨ Key Features

### ML Pipeline & Model Management
- **Complete ML Pipeline**: End-to-end machine learning workflow with data ingestion, feature engineering, and model training
- **Multiple Algorithms**: Support for various ML algorithms including Logistic Regression, Decision Trees, Random Forest, and Gradient Boosting
- **PCA Dimensionality Reduction**: Advanced feature engineering with Principal Component Analysis
- **Hyperparameter Tuning**: Automated hyperparameter optimization for model performance
- **Model Registry**: Track and compare multiple model versions with comprehensive metrics

### Customer Analytics
- **Churn Risk Prediction**: Real-time customer churn risk assessment (low, medium, high)
- **Customer Segmentation**: Analyze customers by demographics, engagement, and behavior
- **Cohort Analysis**: Track retention rates and model drift across customer cohorts
- **Interactive Dashboards**: Visualize customer data, trends, and predictions

### Performance Monitoring
- **Model Metrics**: Track accuracy, F1-score, ROC-AUC, precision, and recall
- **Model Drift Detection**: Monitor and alert on model performance degradation
- **Training Time Analysis**: Optimize model training efficiency
- **Real-time Updates**: Live data refresh for up-to-date analytics

## 🛠️ Tech Stack

### Frontend
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Recharts** - Data visualization library
- **Lucide React** - Icon library

### Backend & Data
- **Next.js API Routes** - Serverless API endpoints
- **Apache Spark MLlib** - Machine learning library (referenced in architecture)
- **Mock Data Layer** - Simulated ML model outputs for demonstration

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
.
├── app/                        # Next.js App Router
│   ├── api/                    # API routes
│   │   ├── cohorts/           # Cohort analytics endpoints
│   │   ├── customers/         # Customer data endpoints
│   │   └── models/            # Model metrics endpoints
│   ├── cohorts/               # Cohort analysis page
│   ├── customers/             # Customer management page
│   ├── models/                # Model registry page
│   ├── pipeline/              # ML pipeline visualization page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/                # React components
│   ├── ui/                    # Reusable UI components
│   ├── churn-risk-distribution.tsx
│   ├── cohort-card.tsx
│   ├── customer-table.tsx
│   ├── engagement-vs-tenure.tsx
│   ├── feature-engineering-viz.tsx
│   ├── hyperparameter-tuning.tsx
│   ├── metric-card.tsx
│   ├── ml-pipeline-stage.tsx
│   ├── model-comparison-table.tsx
│   ├── model-performance-chart.tsx
│   └── retention-trend-chart.tsx
├── lib/                       # Utility libraries
│   ├── mock-data.ts          # Mock data generators
│   └── utils.ts              # Utility functions
├── hooks/                     # Custom React hooks
├── public/                    # Static assets
├── styles/                    # Additional styles
├── next.config.mjs           # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** 8.x or higher (or npm/yarn)
- A modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Predictive-Modeling-for-Customer-Retention.git
   cd Predictive-Modeling-for-Customer-Retention
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## 📊 Usage

### Home Dashboard
The main dashboard provides an overview of the platform with quick access to:
- ML Pipeline visualization
- Model Registry
- Customer Analytics
- Cohort Analysis

### ML Pipeline
View the complete Spark MLlib training pipeline:
- **Data Ingestion**: Loading customer records from multiple sources
- **Feature Engineering**: Creating features with PCA dimensionality reduction
- **Model Training**: Training multiple ML algorithms with hyperparameter tuning
- **Model Evaluation**: Comprehensive performance metrics

### Model Registry
Compare and analyze different ML models:
- View accuracy, F1-score, ROC-AUC, precision, and recall
- Compare training times across algorithms
- Track model performance history
- Deploy the best-performing model

### Customer Analytics
Analyze customer behavior and churn risk:
- View detailed customer profiles
- Filter by churn risk level (low, medium, high)
- Analyze engagement scores and tenure
- Track customer spending patterns

### Cohort Analysis
Monitor customer retention by cohorts:
- Track retention rates over time
- Detect model drift across cohorts
- Identify high-risk customer segments
- Visualize retention trends

## 🔌 API Routes

### Customer Endpoints
- `GET /api/customers/stats` - Get customer statistics and aggregated metrics

### Model Endpoints
- `GET /api/models` - Get all model metrics and performance history

### Cohort Endpoints
- `GET /api/cohorts` - Get retention cohort data and drift scores

## 🎨 Components

### Core Visualization Components
- **ModelPerformanceChart** - Visualize model metrics over time
- **ModelComparisonTable** - Compare multiple models side-by-side
- **RetentionTrendChart** - Display retention trends across cohorts
- **ChurnRiskDistribution** - Show churn risk distribution
- **EngagementVsTenure** - Scatter plot of engagement vs. tenure

### ML Pipeline Components
- **MLPipelineStage** - Individual pipeline stage visualization
- **FeatureEngineeringViz** - Feature engineering visualization
- **HyperparameterTuning** - Hyperparameter tuning interface

### Data Display Components
- **CustomerTable** - Paginated customer data table
- **CohortCard** - Individual cohort summary card
- **MetricCard** - KPI metric display card

## 🧪 Development

### Linting

```bash
pnpm lint
# or
npm run lint
```

### Code Style

This project uses:
- **ESLint** for code quality
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Prettier** (recommended for formatting)

## 🏗️ Architecture

### Frontend Architecture
- **Next.js App Router**: Modern file-based routing with React Server Components
- **Server Components**: Optimized data fetching and rendering
- **Client Components**: Interactive UI elements with React hooks
- **API Routes**: Serverless functions for data access

### Data Flow
1. User interacts with the UI
2. React components fetch data from Next.js API routes
3. API routes retrieve data from the mock data layer
4. Data is processed and returned to the client
5. Components render visualizations and tables

### Styling System
- **Tailwind CSS**: Utility-first styling
- **CSS Variables**: Theme customization (light/dark mode)
- **Radix UI**: Accessible component foundations
- **Custom Components**: Reusable UI building blocks

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is available for educational and demonstration purposes.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Inspired by enterprise ML platforms and customer analytics solutions

## 📧 Contact

For questions, suggestions, or feedback, please open an issue on GitHub.

---

**Built with Spark MLlib, Next.js, and Recharts • Enterprise ML Platform**
