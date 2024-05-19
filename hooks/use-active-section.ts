import { create } from "zustand"

interface ActiveSectionStore {
    activeSection: Section,
    setActiveSection: (section: Section) => void,
    lastChangedAt: number,
    setLastChangedAt: (timestamp: number) => void,
}

export const useActiveSection = create<ActiveSectionStore>((set) => ({
    activeSection: "home",
    setActiveSection: (section) => set({
        activeSection: section,
    }),
    lastChangedAt: 0,
    setLastChangedAt: (timestamp) => set({
        lastChangedAt: timestamp,
    }),
}))