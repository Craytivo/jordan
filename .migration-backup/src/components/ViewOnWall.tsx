import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ViewOnWallProps {
  artworkUrl: string;
  onClose: () => void;
}

const roomMockups = [
  {
    id: 'living-room',
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600',
    description: 'Modern living space with natural light'
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600',
    description: 'Elegant dining area'
  },
  {
    id: 'office',
    name: 'Home Office',
    image: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1600',
    description: 'Contemporary workspace'
  },
  {
    id: 'gallery',
    name: 'Gallery Wall',
    image: 'https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=1600',
    description: 'Minimal gallery setting'
  }
];

export default function ViewOnWall({ artworkUrl, onClose }: ViewOnWallProps) {
  const [selectedRoom, setSelectedRoom] = useState(roomMockups[0]);
  const [scale, setScale] = useState(50);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="fixed inset-0 z-[200] bg-background"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="border-b border-border px-8 py-6 flex items-center justify-between">
            <div>
              <p className="text-caption text-muted-foreground mb-2">View On Wall</p>
              <h2 className="text-heading">Preview artwork in your space</h2>
            </div>
            <button
              onClick={onClose}
              className="text-foreground hover:text-muted-foreground transition"
            >
              <span className="text-3xl">×</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* Room Preview */}
            <div className="flex-1 relative bg-muted/20">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: `translate(-50%, -50%) scale(${scale / 100})`,
                  transition: 'all 0.3s ease'
                }}
              >
                <img
                  src={artworkUrl}
                  alt="Artwork preview"
                  className="max-w-[400px] max-h-[400px] object-contain shadow-2xl"
                  style={{ aspectRatio: '4/5' }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="lg:w-96 border-l border-border p-8 overflow-y-auto">
              <div className="mb-12">
                <p className="text-caption text-muted-foreground mb-6">Select Room</p>
                <div className="space-y-4">
                  {roomMockups.map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setSelectedRoom(room)}
                      className={`w-full text-left p-4 border transition ${
                        selectedRoom.id === room.id
                          ? 'border-foreground bg-foreground/5'
                          : 'border-border hover:border-foreground'
                      }`}
                    >
                      <p className="text-heading mb-2">{room.name}</p>
                      <p className="text-body text-muted-foreground">{room.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <p className="text-caption text-muted-foreground mb-6">Adjust Size</p>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-body text-muted-foreground mt-4">{scale}%</p>
              </div>

              <div className="mb-12">
                <p className="text-caption text-muted-foreground mb-6">Adjust Position</p>
                <div className="space-y-6">
                  <div>
                    <label className="text-body text-muted-foreground mb-2 block">Horizontal</label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={position.x}
                      onChange={(e) => setPosition({ ...position, x: Number(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-body text-muted-foreground mb-2 block">Vertical</label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={position.y}
                      onChange={(e) => setPosition({ ...position, y: Number(e.target.value) })}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-foreground text-background px-8 py-5 text-caption hover:bg-foreground/90 transition"
              >
                Request Digital Preview
              </button>

              <p className="text-body text-muted-foreground text-center mt-6">
                This is a simulated preview. Contact us for a custom digital preview of your space.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
