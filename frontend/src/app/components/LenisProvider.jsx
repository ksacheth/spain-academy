// app/components/LenisProvider.jsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { ReactLenis } from "lenis/react"; // you had this import already

const DEFAULTS = {
  lerp: 0.03, // your initial inertia
  wheelMultiplier: 1,
  syncTouch: true,
  syncTouchLerp: 0.075,
  touchInertiaExponent: 1.7,
};

const LenisOptionsContext = createContext({
  options: DEFAULTS,
  setOptions: (o) => {},
  updateLerp: (v) => {},
});

export function useLenisOptions() {
  return useContext(LenisOptionsContext);
}

/**
 * LenisProvider
 * - initialOptions: merge with defaults
 * - when options change, we increment `instanceKey` to force ReactLenis remount,
 *   guaranteeing a fresh Lenis instance with new settings.
 */
export default function LenisProvider({ children, initialOptions = {} }) {
  const [options, setOptions] = useState({ ...DEFAULTS, ...initialOptions });
  const [instanceKey, setInstanceKey] = useState(0);

  // Whenever options change, bump instanceKey to force ReactLenis remount
  useEffect(() => {
    // small debounce guard could be added, but immediate recreate is safest
    setInstanceKey((k) => k + 1);
  }, [options]);

  const setOptionsSafe = useCallback((next) => {
    setOptions((prev) => ({ ...prev, ...next }));
  }, []);

  const updateLerp = useCallback(
    (lerpValue) => {
      // sanitize (optional)
      if (typeof lerpValue !== "number") return;
      setOptionsSafe({ lerp: lerpValue });
    },
    [setOptionsSafe]
  );

  return (
    <LenisOptionsContext.Provider
      value={{ options, setOptions: setOptionsSafe, updateLerp }}
    >
      {/* key forces ReactLenis to unmount + remount on options change so a new Lenis instance is created */}
      <ReactLenis key={instanceKey} root options={options}>
        {children}
      </ReactLenis>
    </LenisOptionsContext.Provider>
  );
}
