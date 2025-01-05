"use server";

import { cookies } from "next/headers";

export const themeSetInCookie = async (theme) => {
  // Set theme preference in a cookie
  (await cookies()).set("theme", theme);
};
