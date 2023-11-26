<div align="center">
  <img src="https://github.com/MeetMulik/coursemagnet/assets/89148021/865cfe2c-b625-4a98-9769-4074e3332a99" alt="" />
</div>

# 🚀 CourseMagnet

CourseMagnet is a powerful e-learning platform built with Next.js 13. Browse and filter a diverse range of courses, seamlessly purchase them using Stripe, and track your progress with an intuitive dashboard. Whether you're a student or a teacher, CourseMagnet provides a dynamic experience.

## Features

- 📚 Explore & Filter Courses
- 💳 Secure Course Purchases via Stripe
- ✅ Track Chapter Completion Status
- 📊 Progress Calculations for Each Course
- 🎓 Personalized Student Dashboard
- 👩‍🏫 Empowering Teacher Mode
- 🆕 Effortlessly Create Courses & Chapters
- 🔄 Intuitive Chapter Position Reordering with Drag 'n' Drop
- 📎 Multimedia Management: Thumbnails, Attachments, and Videos using UploadThing
- 🎥 Video Processing and HLS Playback with Mux
- 📝 Rich Text Editing for Chapter Descriptions
- 🔐 Secure Authentication with Clerk
- 🔄 Robust ORM Integration with Prisma
- 🗃️ Scalable MySQL Database Using Planetscale

## Demo

Deployment: [Link](https://coursemagnet.vercel.app/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MeetMulik/coursemagnet.git

cd coursemagnet
```

2. Install the dependencies for both the frontend and backend:

```bash
# Install dependencies

npm install

```

3. Set the environment variables for backend

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL=
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
```

## Usage

```bash

cd coursemagnet
npm run dev

Open your browser and navigate to http://localhost:3000 to view the application.

```

## Deployment 🚀

This project is deployed using [Vercel](https://vercel.com/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Click the "Deploy with Vercel" button above.
2. Follow the instructions to deploy your project.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

- If you have suggestions for adding or removing something, feel free to open an issue to discuss it, or directly create a pull request with the necessary changes.
- Create individual PR for each suggestion.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Screenshots 📷
