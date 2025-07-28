export interface Project {
  name: { [lang: string]: string };
  description: { [lang: string]: string };
  liveUrl?: string;
  repoUrl?: string;
  previewImages?: string[];
}

export const projects: Project[] = [
  {
    name: {
      en: "👁️ Eye-Know – AI-Powered Image Recognition App",
      ja: "👁️ アイノウ – AI画像認識アプリ",
    },
    description: {
      en: "Eye-Know is a responsive React application that leverages the Clarifai API to perform real-time image recognition. Users can register or sign in, submit image URLs, and receive AI-generated concept tags with confidence scores. The app features a sleek, interactive UI with animated effects, a dynamic profile modal, and a polished user experience. Built with modern tools like Vite and styled using Tachyons and Bootstrap, Eye-Know showcases strong front-end development skills, API integration, and attention to responsive design and user interaction.",
      ja: "Eye-KnowはClarifai APIを活用したリアルタイム画像認識を行うレスポンシブなReactアプリケーションです。ユーザーは登録やサインインが可能で、画像URLを送信するとAIが生成したコンセプトタグと信頼度を受け取れます。洗練されたインタラクティブUI、アニメーション効果、動的プロフィールモーダルを特徴とし、Vite、Tachyons、Bootstrapを用いて開発されています。フロントエンド開発技術、API統合、レスポンシブデザインとユーザー体験に優れています。",
    },
    liveUrl: "https://eye-know-2.onrender.com/",
    repoUrl: "https://github.com/RichardBobik/eye-know-2",
    previewImages: [
      "/previews/eye-know-1.png",
      "/previews/eye-know-2.png",
      "/previews/eye-know-3.png",
      "/previews/eye-know-4.png",
      "/previews/eye-know-5.png",
      "/previews/eye-know-6.png",
    ],
  },
  {
    name: {
      en: "🔧 Eye-Know API – Backend for AI Image Recognition App",
      ja: "🔧 Eye-Know API – AI画像認識アプリのバックエンド",
    },
    description: {
      en: "Eye-Know API is the backend server for the Eye-Know full-stack application. Built with Node.js and Express, it handles secure user authentication, profile management, and integration with the Clarifai API for image recognition. It features a PostgreSQL database for persistent storage and uses Redis for stateless JWT session handling. The API also includes rate limiting, input validation, and security best practices via Helmet, making it scalable and production-ready.",
      ja: "Eye-Know APIはEye-Knowフルスタックアプリのバックエンドサーバーです。Node.jsとExpressで構築されており、安全なユーザー認証、プロフィール管理、画像認識のためのClarifai APIとの統合を担当します。永続ストレージにはPostgreSQLを使用し、RedisでステートレスなJWTセッション管理を行います。レート制限、入力検証、Helmetによるセキュリティ対策も実装されており、スケーラブルで本番環境対応可能です。",
    },
    liveUrl: "",
    repoUrl: "https://github.com/RichardBobik/eye-know-api-2",
  },
  {
    name: {
      en: "🐾 Neko Words – Learn Japanese Animal Names",
      ja: "🐾 ネコワーズ – 日本語の動物名を学ぶアプリ",
    },
    description: {
      en: "Neko Words is a modern, standalone Angular web app designed to help users learn Japanese animal vocabulary through interactive quizzes and beautifully animated flashcards. Users can browse animals by category, search by English name, view detailed information, and listen to accurate Japanese pronunciations. The app includes multiple quiz modes (romaji, kana, kanji), dark mode support, and offline capabilities as a progressive web app (PWA). Built with Angular 20 and Express, Neko Words is optimized for performance, accessibility, and engaging language learning.",
      ja: "Neko Wordsは、インタラクティブなクイズと美しくアニメーションされたフラッシュカードで日本語の動物語彙を学べるモダンなスタンドアロンAngularウェブアプリです。ユーザーはカテゴリー別に動物を閲覧し、英語名で検索し、詳細情報を確認し、正確な日本語発音を聞くことができます。複数のクイズモード（ローマ字、かな、漢字）、ダークモード対応、オフライン機能（PWA）を備えています。Angular 20とExpressで構築され、パフォーマンス、アクセシビリティ、魅力的な語学学習に最適化されています。",
    },
    liveUrl: "https://neko-words.netlify.app/",
    repoUrl: "https://github.com/RichardBobik/neko-words",
    previewImages: [
      "/previews/neko-words-1.png",
      "/previews/neko-words-2.png",
      "/previews/neko-words-3.png",
      "/previews/neko-words-4.png",
      "/previews/neko-words-5.png",
      "/previews/neko-words-6.png",
    ],
  },
];
