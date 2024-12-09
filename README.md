# SleepFine - Premium Mattress Manufacturing Company Website

![SleepFine Logo](https://res.cloudinary.com/dpsmbluby/image/upload/v1729774444/logosince11_vn89hm.png)

## Overview

SleepFine is a modern, responsive web application for a premium mattress manufacturing company. The website showcases the company's products, allows customers to view detailed product information, and generate warranty cards.

## 👥 Team Collaboration

This project was developed using a collaborative Git workflow with a team of 3 members:

- **Version Control**: GitHub
- **Branch Management**: Feature-based branching strategy
- **Workflow**:
  - Created separate branches for each team member
  - Implemented feature branches for different functionalities
  - Regular pull requests and code reviews
  - Merged updates using Git merge
  - Resolved conflicts collaboratively
  - Maintained clean commit history

### Git Workflow Used:
```bash
# Create new branch
git checkout -b feature/member-name/feature-name

# Regular updates
git add .
git commit -m "descriptive message"
git push origin feature/member-name/feature-name

# Staying updated with main branch
git checkout main
git pull origin main
git checkout feature/member-name/feature-name
git merge main

# Merging features
git checkout main
git merge feature/member-name/feature-name
```

## 🚀 Features

- **Product Showcase**: Detailed display of mattress products with comprehensive information
- **Interactive Product Details**: In-depth product information with specifications
- **Testimonial Carousel**: Dynamic customer testimonials using react-slick
- **Warranty Card Generation**: PDF warranty card generation functionality
- **Responsive Design**: Fully responsive layout for all devices
- **Image Management**: Cloud-based image handling using Cloudinary

## 🛠️ Technologies Used

- **React.js**: Frontend library for building user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router DOM**: For handling application routing
- **React Slick**: Carousel component for testimonials
- **Cloudinary**: Cloud service for image management
- **jsPDF**: For generating PDF warranty cards
- **React Testing Library & Jest**: For unit testing
- **Git & GitHub**: Version control and team collaboration

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/AlfaridIslam/SleepFine.git
cd SleepFine/client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

4. Start the development server:
```bash
npm start
```

## 📁 Project Structure

```
client/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── utils/
│   └── App.js
├── package.json
└── README.md
```

## 🧪 Testing

Run the test suite using:
```bash
npm test
```

This will execute unit tests using React Testing Library and Jest.

## 🔧 Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](your-issues-link-here).

### Branch Naming Convention
- Feature branches: `feature/member-name/feature-name`
- Bug fixes: `fix/member-name/bug-name`
- Updates: `update/member-name/update-description`

### Pull Request Process
1. Create a new branch from main
2. Make your changes
3. Update documentation if needed
4. Create a pull request with a descriptive title and detailed description
5. Wait for code review and address any feedback
6. Merge after approval

## 📝 License

This project is [MIT](license-link) licensed.

## 👥 Contact

- Developer: Alfarid Islam
- GitHub: [@AlfaridIslam](https://github.com/AlfaridIslam)

---
⭐️ Star this repo if you find it helpful!
