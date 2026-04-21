import { useEffect, useState } from 'react';

export default function EpochCounterApp() {
  const start = new Date('1970-01-01T00:00:00Z').getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const diffMs = now - start;
  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const years = (diffMs / (1000 * 60 * 60 * 24 * 365.2425)).toFixed(8);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Hello World</p>
          <h1 className="text-4xl font-semibold tracking-tight mt-2">Counter from 1970 to now</h1>
          <p className="text-white/70 mt-3">
            A minimal React app suitable for static hosting on AWS Amplify.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Metric label="Years" value={years} />
          <Metric label="Days" value={days.toLocaleString()} />
          <Metric label="Hours" value={hours.toLocaleString()} />
          <Metric label="Minutes" value={minutes.toLocaleString()} />
          <Metric label="Seconds" value={seconds.toLocaleString()} />
          <Metric label="Milliseconds" value={diffMs.toLocaleString()} />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-sm text-white/50">{label}</div>
      <div className="mt-2 text-2xl font-medium break-all">{value}</div>
    </div>
  );
}
