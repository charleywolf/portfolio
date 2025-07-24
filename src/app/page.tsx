import ItemView from "@/components/ItemView";
import { Separator } from "@/components/ui/separator";
import { sortedItems } from "@/assets/items";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-grow flex-col justify-start gap-12 px-3 py-12 sm:py-12 sm:px-12">
        <div className="w-full flex gap-6 items-center">
          <Separator
            orientation="horizontal"
            className="flex-1 bg-neutral-800"
          />
          <h1 className="brand text-3xl">charley wolf</h1>
          <Separator
            orientation="horizontal"
            className="flex-1 bg-neutral-800"
          />
        </div>

        <div className="flex gap-3 items-center w-full justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/document/d/1RVn4WoyIoHOjW-YhvVC3Z2yAuLjsj0fY/edit?usp=sharing&ouid=107383725841058213299&rtpof=true&sd=true"
          >
            <h2 className="brand text-3xl text-blue-500 underline hover:text-blue-600">
              cv
            </h2>
          </a>
          <span>&bull;</span>
          <h2 className="brand text-3xl">projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {sortedItems.map((item) => (
            <ItemView key={item.name} {...item} />
          ))}
        </div>
      </main>

      <footer className="w-full flex flex-col items-center justify-center gap-4 py-8 bg-neutral-50 border-t text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 px-4">
          <p className="text-sm text-neutral-500">
            © 2025
            {new Date().getFullYear() > 2025
              ? ` - ${new Date().getFullYear()}`
              : ""}{" "}
            Charley Wolf
          </p>
          <span className="text-sm text-neutral-500">•</span>
          <p className="text-sm text-neutral-500">All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
