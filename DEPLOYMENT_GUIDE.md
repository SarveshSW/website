# Portfolio Deployment Guide for GitHub Pages

This guide will help you deploy your updated portfolio to GitHub Pages.

## Prerequisites

- Node.js and npm installed
- Git installed
- A GitHub account with a repository named `website`

## Updates Made to Your Portfolio

### 1. **Design Improvements**
- ✨ Modern, sleek professional color scheme with improved typography
- 🎨 Updated theme colors with better contrast and visual hierarchy
- 💫 Smooth animations and hover effects for better UX
- 🎯 Enhanced component styling with gradient backgrounds and shadows
- 📱 Improved responsive design for all screen sizes

### 2. **Content Updates**
- 📄 Updated CV link to use `SW_CV.pdf` (new location in `/src/media/`)
- ✍️ Refined professional descriptions for all experiences
- 🎓 Updated education section with clearer formatting
- 🛠️ Enhanced skills section with modern tech stack organized by category

### 3. **Experience Section Changes**
- **Serv2U**: Updated title to "Founder & CTO", enhanced description emphasizing full-stack development and leadership
- **GROHE**: Refined role description to highlight embedded systems and circuit design
- **CommBank**: Updated to reflect current industry practices and skills
- **Unbound**: Emphasized team leadership and CAD expertise
- **Tutor Doctor**: Clarified teaching expertise and mentoring role

### 4. **Skills Section Reorganization**
- Frontend: React, TypeScript, Redux, HTML, CSS, JavaScript
- Backend: Python, C#, .NET, MongoDB, Java, C++, Flask
- Tools & Platforms: Git, GitHub, AWS, Docker, VS Code, Postman
- ML/AI & Specializations: Machine Learning, Robotics, CAD, Arduino

## Deployment Steps

### Step 1: Ensure All Changes Are Saved
All your portfolio files are already updated:
- `/src/utils/Themes.js` - Modern color scheme
- `/src/data/constant.js` - Updated content with SW_CV.pdf
- `/src/components/HeroSection/index.js` - Enhanced hero styling
- `/src/components/NavBar/index.js` - Modern navbar design
- `/src/media/SW_CV.pdf` - Your CV file

### Step 2: Install Dependencies
```powershell
cd "C:\Users\M066349\OneDrive - Westpac Group\_MyProfile\Desktop\website"
npm install --legacy-peer-deps
```

### Step 3: Test Locally
```powershell
npm start
```
This will open your portfolio at `http://localhost:3000`
Test all sections and ensure the CV download works correctly.

### Step 4: Build for Production
```powershell
npm run build
```
This creates an optimized production build in the `build/` folder.

### Step 5: Deploy to GitHub Pages
```powershell
npm run deploy
```

### Alternative Manual Deployment
If you prefer to deploy manually:

1. Push your changes to GitHub:
```powershell
git add .
git commit -m "Update portfolio with modern design and CV content"
git push origin main
```

2. Enable GitHub Pages:
   - Go to https://github.com/sarveshsw/website/settings
   - Navigate to "Pages" section
   - Set source to "gh-pages" branch
   - Save

## Key Features of Your Updated Portfolio

### Hero Section
- Gradient background with animated elements
- Professional profile image with hover effects
- Dynamic role typing animation
- Clean, modern CV download button

### Skills Section
- Organized by category (Frontend, Backend, Tools, ML/AI)
- Modern card layout with smooth interactions
- Professional tool icons

### Experience Section
- Enhanced descriptions highlighting key achievements
- Clear skill tags for each position
- Professional company logos
- Mobile-responsive layout

### Education Section
- Organized timeline of education
- GPA/marks highlighted
- Achievement descriptions

### Color Scheme
- Professional blue primary color (#0066cc)
- Clean, modern backgrounds
- Excellent contrast for readability
- Smooth gradient effects

## GitHub Pages Configuration

Your `package.json` is already configured for GitHub Pages:
```json
{
  "homepage": "https://sarveshsw.github.io/website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

## Troubleshooting

### Issue: npm install fails
**Solution**: Use the legacy peer deps flag:
```powershell
npm install --legacy-peer-deps
```

### Issue: build command fails
**Solution**: Ensure all your changes are saved and run:
```powershell
npm cache clean --force
npm install --legacy-peer-deps
npm run build
```

### Issue: Deployment fails
**Solution**: 
1. Ensure you have gh-pages installed:
```powershell
npm install --save-dev gh-pages
```
2. Check that your repository is named `website`
3. Verify GitHub Pages is enabled in repository settings

## After Deployment

Your portfolio will be live at: **https://sarveshsw.github.io/website**

### Verify Deployment
- Check that all pages load correctly
- Test the CV download link
- Verify all links work (GitHub, LinkedIn)
- Test on mobile devices
- Check that animations work smoothly

### Update GitHub Profile
Update your GitHub profile with:
- Portfolio link: https://sarveshsw.github.io/website
- Bio mentioning your specializations
- Link to your CV

## Future Updates

To make future updates:

1. Edit your files locally
2. Run `npm start` to test
3. Run `npm run build` to create production build
4. Run `npm run deploy` to push to GitHub Pages

The deployment is automatic after running the deploy command!

## Professional Tips

✅ **Do's:**
- Keep your CV updated regularly
- Update skills section as you learn new technologies
- Add new projects to showcase your latest work
- Test on multiple devices before deploying

❌ **Don'ts:**
- Don't commit large binary files
- Don't include sensitive information
- Don't edit the build folder directly

## Contact & Questions

Your contact information from the portfolio:
- Email: sarvesh.wanzare@icloud.com
- LinkedIn: https://www.linkedin.com/in/sarveshwanzare/
- GitHub: https://github.com/sarveshsw

---

**Last Updated**: August 10, 2026
**Portfolio Version**: 2.0 (Modern Design Update)
