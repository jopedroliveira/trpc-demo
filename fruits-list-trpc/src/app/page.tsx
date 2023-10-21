import AddFruitForm from '@/lib/components/AddFruitForm';
import FruitsList from '@/lib/components/FruitsList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-yellow-500/40">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-sm space-y-5">
        <h1>Hello, Coimbra.js</h1>
        <div className="flex md:flex-row flex-col w-full gap-5">
          <FruitsList />
          <AddFruitForm />
        </div>
      </div>
    </main>
  );
}
