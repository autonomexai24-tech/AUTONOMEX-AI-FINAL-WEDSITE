interface VideoAdsVisualProps {
  activePhase?: string;
}

export default function VideoAdsVisual({ activePhase = "phase-1" }: VideoAdsVisualProps) {
  switch (activePhase) {
    case "phase-1":
      return (
        <div className="w-full h-full flex items-center justify-center rounded-2xl border border-red-200 bg-red-50 p-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-mono tracking-widest text-red-400 uppercase">Phase 1</p>
            <h3 className="text-2xl font-bold text-red-900">STAGE 1: NORMAL (THE PROBLEM)</h3>
            <p className="text-sm text-red-600 max-w-md">Generic stock content — low engagement, high production costs, no brand differentiation.</p>
          </div>
        </div>
      );
    case "phase-2":
      return (
        <div className="w-full h-full flex items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 p-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-mono tracking-widest text-blue-400 uppercase">Phase 2</p>
            <h3 className="text-2xl font-bold text-blue-900">STAGE 2: CHANGE (THE BRIDGE)</h3>
            <p className="text-sm text-blue-600 max-w-md">AI-powered generation — scripts, visuals, and voiceovers created in minutes, not weeks.</p>
          </div>
        </div>
      );
    case "phase-3":
      return (
        <div className="w-full h-full flex items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-12">
          <div className="text-center space-y-3">
            <p className="text-xs font-mono tracking-widest text-emerald-400 uppercase">Phase 3</p>
            <h3 className="text-2xl font-bold text-emerald-900">STAGE 3: UNIQUENESS (AUTONOMY)</h3>
            <p className="text-sm text-emerald-600 max-w-md">Autonomous content pipeline — AI generates, tests, and optimizes video ads at scale.</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}
