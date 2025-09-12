// Bind.js
// Usage: const unbind = bindNumberToPath(circleRef, pathRef, number, pct, options)
// options: { dy, r, className } - dy = vertical offset in px, r = circle radius
export default function bindNumberToPath(circleRef, pathRef, number, pct, options = {}) {
  const { dy = 0, r = null, className = "" } = options;

  function place() {
    const g = circleRef?.current;
    const path = pathRef?.current;
    if (!g || !path) return;

    // clamp pct to [0,1]
    const clampPct = Math.max(0, Math.min(1, Number(pct) || 0));
    const L = path.getTotalLength();
    const pt = path.getPointAtLength(clampPct * L);
    const x = pt.x;
    const y = pt.y + dy;

    // Position the whole group using transform so it plays nice with nested <text>/<circle>
    g.setAttribute("transform", `translate(${x}, ${y})`);

    // Update text content
    const text = g.querySelector("text");
    if (text) text.textContent = String(number);

    // Update circle radius if requested
    if (r !== null) {
      const circle = g.querySelector("circle");
      if (circle) circle.setAttribute("r", String(r));
    }

    // Optional className
    if (className) g.setAttribute("class", className);
  }

  // initial placement
  place();

  // keep it positioned when layout changes
  const ro = new ResizeObserver(place);
  if (pathRef?.current) ro.observe(pathRef.current);

  return () => {
    ro.disconnect();
  };
}
