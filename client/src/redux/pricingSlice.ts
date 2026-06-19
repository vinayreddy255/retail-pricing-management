import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pricing } from "../types/pricing";

const pricingSlice = createSlice({
  name: "pricing",
  initialState: [] as Pricing[],
  reducers: {
    setPricing(state, action: PayloadAction<Pricing[]>) {
      return action.payload;
    },
    updatePricing(state, action: PayloadAction<Pricing>) {
      const idx = state.findIndex((p) => p._id === action.payload._id);
      if (idx >= 0) state[idx] = action.payload;
    },
  },
});

export const { setPricing, updatePricing } = pricingSlice.actions;

export default pricingSlice.reducer;
