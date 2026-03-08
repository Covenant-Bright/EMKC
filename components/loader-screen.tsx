"use client"

type LoaderScreenProps = {
  message?: string
  reducedMotion?: boolean
}

const accents = [
  { id: 1, top: "8%", left: "18%", size: 10, color: "#60a5fa", delay: "0s" },
  { id: 2, top: "16%", left: "76%", size: 12, color: "#f472b6", delay: "0.6s" },
  { id: 3, top: "68%", left: "12%", size: 8, color: "#22d3ee", delay: "0.2s" },
  { id: 4, top: "76%", left: "82%", size: 14, color: "#f59e0b", delay: "0.8s" },
  { id: 5, top: "30%", left: "8%", size: 6, color: "#818cf8", delay: "0.4s" },
  { id: 6, top: "34%", left: "90%", size: 7, color: "#fb7185", delay: "1s" },
]

export function LoaderScreen({ message = "Loading your experience...", reducedMotion = false }: LoaderScreenProps) {
  const wordmarkClass = reducedMotion ? "" : "emkc-loader-gradient"
  const accentClass = reducedMotion ? "" : "emkc-loader-accent"
  const progressClass = reducedMotion ? "" : "emkc-loader-progress"

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {accents.map((accent) => (
          <span
            key={accent.id}
            className={`absolute rounded-full opacity-70 blur-[2px] ${accentClass}`}
            style={{
              top: accent.top,
              left: accent.left,
              width: `${accent.size}px`,
              height: `${accent.size}px`,
              backgroundColor: accent.color,
              animationDelay: accent.delay,
            }}
          />
        ))}
      </div>

      <div className="relative text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-slate-400">Excellent Miracle</p>
        <h1
          className={`bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500 bg-clip-text text-7xl font-extrabold tracking-[0.08em] text-transparent md:text-8xl ${wordmarkClass}`}
        >
          EMKC
        </h1>
      </div>

      <div className="mt-10 w-72 max-w-[82vw]">
        <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-200">
          <div className={`absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-pink-500 ${progressClass}`} />
        </div>
      </div>

      <p className="mt-5 max-w-md text-center text-sm font-medium text-slate-500">{message}</p>

      <style jsx>{`
        @keyframes emkc-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes emkc-progress {
          0% {
            transform: translate3d(-100%, 0, 0);
          }
          100% {
            transform: translate3d(100%, 0, 0);
          }
        }

        @keyframes emkc-accent {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate3d(0, -10px, 0) scale(1.15);
            opacity: 0.9;
          }
        }

        .emkc-loader-gradient {
          background-size: 220% 220%;
          animation: emkc-gradient 4s linear infinite;
          will-change: background-position;
        }

        .emkc-loader-progress {
          animation: emkc-progress 1.5s ease-in-out infinite;
          will-change: transform;
        }

        .emkc-loader-accent {
          animation: emkc-accent 3.2s ease-in-out infinite;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  )
}

export default LoaderScreen
