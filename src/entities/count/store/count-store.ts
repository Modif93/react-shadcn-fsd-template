import { create } from 'zustand';
import type { Count } from '../model/count';

type CountStore = {
  count: Count;
  increment: () => void;
  decrement: () => void;
};

export const useCountStore = create<CountStore>((set) => ({
  count: { num: 0 },
  increment: () => set((state) => ({ count: { num: state.count.num + 1 } })),
  decrement: () => set((state) => ({ count: { num: state.count.num - 1 } }))
}));
