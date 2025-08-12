"use client"

import { useMemo } from "react"

type LoaderScreenProps = {
  message?: string
}

export function LoaderScreen({ message = "Loading your experience..." }: LoaderScreenProps) {
  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      top: `${(i * 7.3 + 15) % 100}%`,
      left: `${(i * 11.7 + 25) % 100}%`,
      width: `${(i % 5) + 3}px`,
      height: `${(i % 4) + 4}px`,
      background: `hsl(${(i * 30) % 360}, 70%, 60%)`,
      animationDuration: `${(i % 3) + 5}s`,
      animationDelay: `${(i % 4) * 0.5}s`,
    }))
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[100]">
      {/* Animated gradient text */}
      <div className="relative">
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
          EMKC
        </h1>

        {/* Floating particles */}
        <div className="absolute -inset-4 -z-10 opacity-70">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full animate-float"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.width,
                height: particle.height,
                background: particle.background,
                animationDuration: particle.animationDuration,
                animationDelay: particle.animationDelay,
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 w-80 max-w-[80%]">
        <div className="relative h-2 overflow-hidden rounded-full bg-gray-200">
          <div className="absolute h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-progress-smooth" />
        </div>
      </div>

      {/* Status message */}
      <p className="mt-6 text-gray-600 font-medium max-w-md text-center px-4">{message}</p>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes progress-smooth {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-20px) rotate(360deg); opacity: 0; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 4s ease infinite;
        }
        .animate-progress-smooth {
          animation: progress-smooth 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-float {
          animation: float linear forwards;
        }
      `}</style>
    </div>
  )
}

export default LoaderScreen
