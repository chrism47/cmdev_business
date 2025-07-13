export default function BlogPage() {
  return (
    <div className="font-sans h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="mb-8 text-center max-w-md">
        This is where I write about my coding adventures. There will be posts about
        things I've learned, problems I've solved, and projects I've worked on.
      </p>
      <div className="bg-stone-950 p-6 rounded shadow-lg max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              How I Built a Custom AI Model for My Personal Website
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Why I Switched from Gatsby to Next.js
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              How I Optimized My Website for Better Performance
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
