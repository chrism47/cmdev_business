import { useState } from "react";

const tiles = [
  { id: 1, label: "Tile 1" },
  { id: 2, label: "Tile 2" },
  { id: 3, label: "Tile 3" },
  { id: 4, label: "Tile 4" },
];

export default function ExpandingTiles() {
  const [activeTile, setActiveTile] = useState<number | null>(null);

  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Grid View */}
      {!activeTile && (
        <div className="grid grid-cols-2 gap-4 p-4 h-full">
          {tiles.map((tile) => (
            <button
              key={tile.id}
              onClick={() => setActiveTile(tile.id)}
              className="bg-blue-500 text-white p-8 rounded-lg text-xl transition-transform hover:scale-105"
            >
              {tile.label}
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen View */}
      {activeTile && (
        <div className="absolute inset-0 bg-blue-600 text-white flex flex-col items-center justify-center transition-all duration-500">
          <h1 className="text-4xl mb-6">Expanded View: Tile {activeTile}</h1>
          <button
            onClick={() => setActiveTile(null)}
            className="mt-4 bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-200 transition"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
