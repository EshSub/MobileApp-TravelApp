export const getIsMainDrawerOpen = (state) => state.app.isMainDrawerOpen;
export const getIsIntroDone = (state) => state.app.introDone;

export const getPlaces = (state) => state.place.places;

export const getUser = (state) => state.auth.user;

export const getSelectedStartDate = (state) => state.formState.selectedStartDate;
export const getSelectedEndDate = (state) => state.formState.selectedEndDate;
export const getSelectedActivities = (state) => state.formState.selectedActivities;
export const getDescription = (state) => state.formState.description;
export const getDuration = (state) => state.formState.duration;
export const getAiPlan = (state) => state.formState.aiPlan;
