import { i as weeks } from "./weeks-C2aOtEIw.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/progress-7hyPpl8u.js
var initial = {
	currentWeekId: "S01",
	completed: {},
	capstone: {},
	micros: {},
	caderno: []
};
var useProgress = create()(persist((set, get) => ({
	...initial,
	setWeek: (id) => set({ currentWeekId: id }),
	toggleSession: (id) => set({ completed: {
		...get().completed,
		[id]: !get().completed[id]
	} }),
	toggleCapstone: (id) => set({ capstone: {
		...get().capstone,
		[id]: !get().capstone[id]
	} }),
	toggleMicro: (id) => set({ micros: {
		...get().micros,
		[id]: !get().micros[id]
	} }),
	addCaderno: (entry) => set({ caderno: [{
		...entry,
		id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
	}, ...get().caderno] }),
	removeCaderno: (id) => set({ caderno: get().caderno.filter((e) => e.id !== id) }),
	reset: () => set(initial)
}), { name: "linha-progress-v1" }));
function weekProgress(weekId, completed) {
	const week = weeks.find((w) => w.id === weekId);
	if (!week) return {
		done: 0,
		total: 0,
		ratio: 0
	};
	const total = week.sessions.length;
	const done = week.sessions.filter((s) => completed[s.id]).length;
	return {
		done,
		total,
		ratio: total ? done / total : 0
	};
}
function globalProgress(completed) {
	const total = weeks.reduce((n, w) => n + w.sessions.length, 0);
	const done = Object.values(completed).filter(Boolean).length;
	return {
		done,
		total,
		ratio: total ? Math.min(done / total, 1) : 0
	};
}
function firstOpenSession(weekId, completed) {
	const week = weeks.find((w) => w.id === weekId);
	if (!week) return null;
	return week.sessions.find((s) => !completed[s.id]) ?? week.sessions[0] ?? null;
}
//#endregion
export { weekProgress as i, globalProgress as n, useProgress as r, firstOpenSession as t };
