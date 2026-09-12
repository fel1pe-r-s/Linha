import { create } from "zustand";
import { persist } from "zustand/middleware";
import { weeks } from "@/data/weeks";

export interface CadernoEntry {
  id: string;
  date: string;
  weekId: string;
  tried: string;
  broke: string;
  works: string;
  next: string;
}

interface ProgressState {
  currentWeekId: string;
  completed: Record<string, boolean>;
  capstone: Record<string, boolean>;
  micros: Record<string, boolean>;
  caderno: CadernoEntry[];
  setWeek: (id: string) => void;
  toggleSession: (id: string) => void;
  toggleCapstone: (id: string) => void;
  toggleMicro: (id: string) => void;
  addCaderno: (entry: Omit<CadernoEntry, "id">) => void;
  removeCaderno: (id: string) => void;
  reset: () => void;
}

const initial = {
  currentWeekId: "S01",
  completed: {} as Record<string, boolean>,
  capstone: {} as Record<string, boolean>,
  micros: {} as Record<string, boolean>,
  caderno: [] as CadernoEntry[],
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initial,
      setWeek: (id) => set({ currentWeekId: id }),
      toggleSession: (id) =>
        set({ completed: { ...get().completed, [id]: !get().completed[id] } }),
      toggleCapstone: (id) =>
        set({ capstone: { ...get().capstone, [id]: !get().capstone[id] } }),
      toggleMicro: (id) =>
        set({ micros: { ...get().micros, [id]: !get().micros[id] } }),
      addCaderno: (entry) =>
        set({
          caderno: [
            { ...entry, id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}` },
            ...get().caderno,
          ],
        }),
      removeCaderno: (id) =>
        set({ caderno: get().caderno.filter((e) => e.id !== id) }),
      reset: () => set(initial),
    }),
    { name: "linha-progress-v1" },
  ),
);

export function weekProgress(weekId: string, completed: Record<string, boolean>) {
  const week = weeks.find((w) => w.id === weekId);
  if (!week) return { done: 0, total: 0, ratio: 0 };
  const total = week.sessions.length;
  const done = week.sessions.filter((s) => completed[s.id]).length;
  return { done, total, ratio: total ? done / total : 0 };
}

export function globalProgress(completed: Record<string, boolean>) {
  const total = weeks.reduce((n, w) => n + w.sessions.length, 0);
  const done = Object.values(completed).filter(Boolean).length;
  return { done, total, ratio: total ? Math.min(done / total, 1) : 0 };
}

export function firstOpenSession(weekId: string, completed: Record<string, boolean>) {
  const week = weeks.find((w) => w.id === weekId);
  if (!week) return null;
  return week.sessions.find((s) => !completed[s.id]) ?? week.sessions[0] ?? null;
}
