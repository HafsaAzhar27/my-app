import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="md:flex bg-green-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/download (2).jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-center-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Hello!My name is Hafsa Azhar.I am a university student.My father name is M.Azhar Nawaz."
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-red-100-dark:text-sky-400">
        Hafsa Azhar
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, RYK
      </div>
    </figcaption>
  </div>
</figure>
</div>
    </main>
  );
}
